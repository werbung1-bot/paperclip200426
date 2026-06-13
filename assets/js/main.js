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

  function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid || typeof CHIGENTS_PRODUCTS === "undefined") return;

    CHIGENTS_PRODUCTS.forEach(function (p) {
      const t = p[lang];
      const price = lang === "en" ? p.priceEn : p.price;
      const period = lang === "en" ? p.periodEn : p.period;

      const card = document.createElement("article");
      card.className = "product-card" + (p.featured ? " featured" : "");

      if (t.badge) {
        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = t.badge;
        card.appendChild(badge);
      }

      const emoji = document.createElement("div");
      emoji.className = "product-emoji";
      emoji.textContent = p.emoji;
      card.appendChild(emoji);

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

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    setYear();
  });
})();
