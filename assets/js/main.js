/* ChiGents – rendert die Produktkarten aus products.js und kleine UI-Helfer */

(function () {
  const lang = document.documentElement.lang === "en" ? "en" : "de";

  const TEXT = {
    de: { soon: "Demnächst verfügbar" },
    en: { soon: "Coming soon" },
  };

  function isConfigured(link) {
    return typeof link === "string" && link.startsWith("https://buy.stripe.com/");
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid || typeof CHIGENTS_PRODUCTS === "undefined") return;

    CHIGENTS_PRODUCTS.forEach(function (p, i) {
      const t = p[lang];
      const price = lang === "en" ? p.priceEn : p.price;
      const period = lang === "en" ? p.periodEn : p.period;

      const card = document.createElement("article");
      card.className = "product-card reveal" + (p.featured ? " featured" : "");
      card.style.transitionDelay = (i * 0.08) + "s";

      if (t.badge) {
        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = t.badge;
        card.appendChild(badge);
      }

      const top = document.createElement("div");
      top.className = "product-top";
      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = t.tag || "";
      const idx = document.createElement("span");
      idx.className = "product-index";
      idx.textContent = pad2(i + 1);
      top.appendChild(tag);
      top.appendChild(idx);
      card.appendChild(top);

      const name = document.createElement("h3");
      name.textContent = t.name;
      card.appendChild(name);

      const desc = document.createElement("p");
      desc.className = "product-desc";
      desc.textContent = t.desc;
      card.appendChild(desc);

      const priceEl = document.createElement("div");
      priceEl.className = "product-price";
      priceEl.textContent = price + " ";
      if (period) {
        const periodEl = document.createElement("span");
        periodEl.className = "price-period";
        periodEl.textContent = period;
        priceEl.appendChild(periodEl);
      }
      card.appendChild(priceEl);

      if (isConfigured(p.stripeLink)) {
        const btn = document.createElement("a");
        btn.className = "btn btn-primary";
        btn.href = p.stripeLink;
        btn.target = "_blank";
        btn.rel = "noopener";
        btn.textContent = t.cta;
        card.appendChild(btn);
      } else {
        const btn = document.createElement("span");
        btn.className = "btn btn-disabled";
        btn.textContent = TEXT[lang].soon;
        card.appendChild(btn);
      }

      grid.appendChild(card);
    });
  }

  /* Dezentes Einblenden beim Scrollen */
  function setupReveal() {
    const targets = document.querySelectorAll(
      ".section-head, .card, .product-card, .hero .eyebrow, .hero h1, .hero .tagline, .hero-cta, .hero-dog, .faq-list details"
    );
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    targets.forEach(function (el) { observer.observe(el); });
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    setupReveal();
    setYear();
  });
})();
