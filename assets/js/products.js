/* ============================================================
   ChiGents – Produkt-Konfiguration
   ============================================================

   >>> HIER trägst du deine Stripe Payment Links ein. <<<

   So geht's (einmalig, ca. 10 Minuten pro Produkt):
   1. Stripe-Konto erstellen: https://dashboard.stripe.com/register
   2. Im Dashboard: Produktkatalog -> "+ Produkt hinzufügen"
      (Name, Preis, bei der Mitgliedschaft "Wiederkehrend/Monatlich" wählen)
   3. Beim Produkt: "Zahlungslink erstellen" -> Link kopieren
      (sieht so aus: https://buy.stripe.com/xxxxxxxxxxxx)
   4. Den Link unten beim passenden Produkt in "stripeLink" einfügen.

   Solange ein Platzhalter drinsteht, zeigt die Seite automatisch
   "Demnächst verfügbar" an – nichts kann kaputtgehen.

   Tipp für digitale Produkte (E-Book/PDF): In den Payment-Link-
   Einstellungen unter "Nach der Zahlung" einen Bestätigungstext
   mit Download-Link hinterlegen – dann läuft die Auslieferung
   komplett automatisch. Details: docs/MONETARISIERUNG.md
   ============================================================ */

const CHIGENTS_PRODUCTS = [
  {
    id: "ebook-guide",
    price: "14,99 €",
    priceEn: "$16.99",
    period: null,
    periodEn: null,
    featured: true,
    stripeLink: "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE",
    de: {
      tag: "E-Book",
      name: "Der Chihuahua-Guide für Männer",
      desc: "Das komplette Handbuch: Auswahl, Erziehung, Ernährung und Alltag mit deinem Chihuahua – direkt, praxisnah und ohne Geschwafel. Sofort-Download als PDF.",
      badge: "Bestseller",
      cta: "Jetzt kaufen",
    },
    en: {
      tag: "eBook",
      name: "The Chihuahua Guide for Men",
      desc: "The complete handbook: choosing, training, feeding and everyday life with your Chihuahua – straight to the point, no fluff. Instant PDF download.",
      badge: "Bestseller",
      cta: "Buy now",
    },
  },
  {
    id: "club-membership",
    price: "6,99 €",
    priceEn: "$7.99",
    period: "/ Monat",
    periodEn: "/ month",
    featured: false,
    stripeLink: "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE",
    de: {
      tag: "Mitgliedschaft",
      name: "ChiGents Club",
      desc: "Exklusiver Mitgliederbereich: monatlicher Trainings-Newsletter, Futter- und Zubehör-Tests, Community-Zugang und Rabatte auf alle Produkte. Monatlich kündbar.",
      badge: null,
      cta: "Mitglied werden",
    },
    en: {
      tag: "Membership",
      name: "ChiGents Club",
      desc: "Exclusive members area: monthly training newsletter, food & gear reviews, community access and discounts on all products. Cancel anytime.",
      badge: null,
      cta: "Join the club",
    },
  },
  {
    id: "merch-shirt",
    price: "29,99 €",
    priceEn: "$32.99",
    period: null,
    periodEn: null,
    featured: false,
    stripeLink: "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE",
    de: {
      tag: "Kollektion",
      name: "T-Shirt „Big Dog Energy“",
      desc: "Premium-Shirt mit Chihuahua-Motiv für echte Kerle. Produktion und Versand laufen automatisch über Print-on-Demand – du musst nichts lagern.",
      badge: null,
      cta: "Shirt holen",
    },
    en: {
      tag: "Collection",
      name: "Tee “Big Dog Energy”",
      desc: "Premium tee with a Chihuahua design for real guys. Produced and shipped automatically via print-on-demand – zero inventory.",
      badge: null,
      cta: "Get the tee",
    },
  },
  {
    id: "training-plan",
    price: "9,99 €",
    priceEn: "$10.99",
    period: null,
    periodEn: null,
    featured: false,
    stripeLink: "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE",
    de: {
      tag: "Programm",
      name: "30-Tage-Trainingsplan",
      desc: "Schritt-für-Schritt-Plan: In 30 Tagen vom chaotischen Welpen zum souveränen Begleiter. Tägliche 10-Minuten-Einheiten, sofort als PDF.",
      badge: null,
      cta: "Plan sichern",
    },
    en: {
      tag: "Program",
      name: "30-Day Training Plan",
      desc: "Step-by-step plan: from chaotic puppy to confident companion in 30 days. Daily 10-minute sessions, instant PDF download.",
      badge: null,
      cta: "Get the plan",
    },
  },
];
