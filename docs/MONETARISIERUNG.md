# 💰 ChiGents – Monetarisierung & Automatisierung

Dieses Dokument zeigt dir, wie du mit **chigents.com** Geld verdienst – und zwar so,
dass nach der Einrichtung **alles automatisch läuft**.

---

## 1. Stripe einrichten (Pflicht, einmalig ca. 30 Minuten)

Stripe übernimmt für dich: Bezahlung (Karte, Apple Pay, Google Pay, Klarna …),
Rechnungen, Bestätigungs-E-Mails, Abo-Verwaltung und Auszahlung auf dein Bankkonto.

1. **Konto erstellen:** https://dashboard.stripe.com/register
   (Du brauchst: E-Mail, Bankverbindung, bei Gewerbe deine Gewerbedaten.)
2. **Produkt anlegen:** Dashboard → *Produktkatalog* → **+ Produkt hinzufügen**
   - E-Book: Einmalpreis, z. B. 14,99 €
   - ChiGents Club: Preis **„Wiederkehrend“ → Monatlich**, z. B. 6,99 €
3. **Payment Link erstellen:** Beim Produkt → **Zahlungslink erstellen**
   - Ergebnis sieht so aus: `https://buy.stripe.com/xxxxxxxx`
4. **Link in die Website einfügen:** Datei `assets/js/products.js` öffnen und den
   Platzhalter `PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE` durch deinen Link ersetzen.
   Committen/pushen – fertig. Der Kauf-Button wird automatisch aktiv.

### Digitale Produkte automatisch ausliefern

Im Payment Link unter **„Nach der Zahlung“**:
- Option **„Bestätigungsseite anzeigen“** wählen und dort den **Download-Link**
  zu deinem PDF/E-Book eintragen (z. B. ein geteilter Link von Google Drive/Dropbox), **oder**
- auf eine eigene „Danke“-Seite mit Download weiterleiten.

Zusätzlich sendet Stripe automatisch eine Zahlungsbestätigung per E-Mail.
→ **Verkauf + Auslieferung laufen damit zu 100 % ohne dein Zutun.**

### Rechtlich sauber (digitale Produkte)

Aktiviere im Payment Link eine **benutzerdefinierte Pflicht-Checkbox** mit Text wie:
„Ich stimme der sofortigen Bereitstellung des digitalen Inhalts zu und bestätige,
dass ich dadurch mein Widerrufsrecht verliere.“ (siehe `widerruf.html`)

---

## 2. Merch ohne Lager: Print-on-Demand (POD)

T-Shirts, Hoodies und Tassen mit ChiGents-Motiven – Produktion, Versand und
Retouren übernimmt der POD-Partner vollautomatisch:

| Anbieter | Besonderheit |
|---|---|
| **Printful** | Premium-Qualität, EU-Produktion, API/Shop-Anbindung |
| **Gelato** | Produktion nahe beim Kunden (schnell + günstig in EU) |
| **Spreadshirt / Spread Group** | Eigener Marktplatz inklusive – zusätzliche Reichweite |

**Einfachster Weg mit dieser Website:** Produkt beim POD-Anbieter anlegen →
Verkauf über Stripe Payment Link → Bestellungen einmal täglich/wöchentlich an den
POD-Anbieter übertragen (manuell) **oder** per Zapier/Make-Automatisierung
(„Neue Stripe-Zahlung → Printful-Bestellung anlegen“) → komplett automatisch.

Alternative: Direkt den Spreadshirt-Shop verlinken (keine Stripe-Einrichtung nötig,
aber geringere Marge).

---

## 3. ChiGents Club (Abo = planbares Einkommen)

Wiederkehrende Einnahmen sind das wertvollste Geschäftsmodell:

- **Stripe-Abo** (siehe oben) für 4,99–9,99 €/Monat
- Inhalte mit minimalem Aufwand: monatlicher E-Mail-Newsletter (Trainings-Tipp,
  Produkt-Test, Q&A) über einen Dienst wie **Buttondown, Mailerlite oder Beehiiv**
- Automatisierung: Stripe-Webhook bzw. Zapier fügt zahlende Kunden automatisch
  zur Newsletter-Liste hinzu und entfernt sie bei Kündigung
- Schon **100 Mitglieder × 6,99 € = ~700 €/Monat** wiederkehrend

---

## 4. Affiliate-Einnahmen (kein eigenes Produkt nötig)

In die Ratgeber-Artikel Affiliate-Links einbauen – du bekommst Provision,
der Kunde zahlt nicht mehr:

- **Amazon PartnerNet** (Hundezubehör, Transporttaschen, Spielzeug): 1–10 % Provision
- **Zooplus / AWIN**: bis ~3–5 % auf Futter & Zubehör
- **Check24 / Tarifcheck**: Hundekrankenversicherung & Haftpflicht – hohe Provisionen
  pro Abschluss (oft 10–60 €), passt perfekt zur Zielgruppe „verantwortungsvoller Halter“

Wichtig: Affiliate-Links als Werbung kennzeichnen („*Affiliate-Link“) und die
Datenschutzerklärung ergänzen.

---

## 5. Weitere Ideen zum Ausbauen (Roadmap)

1. **Online-Kurs** „Chihuahua-Training für Männer“ (Video-Kurs, 49–99 €) –
   Hosting z. B. über Vimeo + geschützte Seite, Verkauf wieder per Stripe-Link
2. **Content-Funnel**: Instagram/TikTok-Account „ChiGents“ mit kurzen
   Trainings-Clips → Bio-Link auf chigents.com → Verkäufe laufen automatisch
3. **YouTube** (längere Ratgeber-Videos) → Werbeeinnahmen + Traffic
4. **Digitale Zusatzprodukte**: Checklisten-Bundle (Welpen-Checkliste,
   Reise-Checkliste, Futter-Tabelle) als günstiger Einstiegskauf (4,99 €)
5. **Sponsoring/Kooperationen**: Futter- und Zubehörmarken zahlen für
   Produktvorstellungen, sobald die Seite Reichweite hat
6. **E-Mail-Liste aufbauen** (wichtigster Hebel!): Gratis-PDF
   („5 Fehler, die jeder Chihuahua-Anfänger macht“) gegen E-Mail-Adresse –
   automatisierte Willkommens-Serie verkauft dann E-Book & Club
7. **Premium-Merch limitiert**: Drops in kleinen Auflagen erzeugen Dringlichkeit

---

## 6. Was läuft automatisch – und was (einmalig) nicht

**Automatisch nach Einrichtung:**
- Hosting & Deployment (GitHub Pages, bei jedem Push)
- Bezahlung, Rechnung, Bestätigungsmail, Abo-Verlängerung/-Kündigung (Stripe)
- Auslieferung digitaler Produkte (Stripe-Bestätigungsseite)
- Merch-Produktion & Versand (POD-Partner, ggf. mit Zapier/Make)
- Auszahlung auf dein Bankkonto (Stripe, standardmäßig täglich/wöchentlich)

**Einmalig von dir nötig:**
- Stripe-Konto + Produkte + Payment Links (Abschnitt 1)
- Domain chigents.com auf GitHub Pages zeigen lassen (siehe README)
- Impressum/Datenschutz/Widerruf mit echten Daten füllen
- E-Book/PDF-Inhalte erstellen (oder erstellen lassen)
- Gewerbeanmeldung & Steuern klären (Kleinunternehmerregelung prüfen!)
