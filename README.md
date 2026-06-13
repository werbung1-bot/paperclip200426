# ChiGents – chigents.com

**Landingpage, Onlineshop & Ratgeber für Männer mit Chihuahua.**
Statische Website (HTML/CSS/JS) mit Stripe Payment Links – keine Server,
keine laufenden Kosten, nach der Einrichtung vollautomatisch.

🌐 Live: https://chigents.com (bzw. https://werbung1-bot.github.io/paperclip200426/ bis die Domain verbunden ist)

## Struktur

| Datei/Ordner | Zweck |
|---|---|
| `index.html` | Deutsche Landingpage (Hero, Ratgeber, Shop, FAQ) |
| `en/index.html` | Englische Version |
| `assets/js/products.js` | **Zentrale Produkt-Config – hier Stripe-Links eintragen!** |
| `assets/js/main.js` | Rendert Produktkarten, kleine UI-Helfer |
| `assets/css/style.css` | Design (dunkles Theme, Gold-Akzent) |
| `impressum.html`, `datenschutz.html`, `widerruf.html` | Rechtsseiten (Platzhalter ausfüllen!) |
| `docs/MONETARISIERUNG.md` | 💰 Geld-verdienen-Ideen + Schritt-für-Schritt-Anleitungen |
| `.github/workflows/deploy.yml` | Automatisches Deployment auf GitHub Pages |
| `CNAME` | Custom Domain `chigents.com` |

## ✅ Checkliste: Was du noch tun musst (einmalig)

1. **GitHub Pages aktivieren**
   Repo → **Settings → Pages → Source: „GitHub Actions“**

2. **Branch nach `main` mergen** – erst dann läuft das Deployment.

3. **Domain chigents.com verbinden**
   Beim Domain-Anbieter (wo du chigents.com gekauft hast) folgende DNS-Einträge setzen:
   - `A`-Records für `chigents.com` auf:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME`-Record für `www` auf: `werbung1-bot.github.io`

   Danach: Repo → Settings → Pages → Custom domain `chigents.com` eintragen
   und **„Enforce HTTPS“** aktivieren (kann bis zu 24 h dauern).

4. **Stripe einrichten und Payment Links eintragen**
   Anleitung: [`docs/MONETARISIERUNG.md`](docs/MONETARISIERUNG.md), Abschnitt 1.
   Links kommen in [`assets/js/products.js`](assets/js/products.js).
   Solange Platzhalter drinstehen, zeigen die Buttons „Demnächst verfügbar“.

5. **Rechtsseiten ausfüllen**
   In `impressum.html`, `datenschutz.html` und `widerruf.html` die
   `[PLATZHALTER]` durch deine echten Daten ersetzen.

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann http://localhost:8000 im Browser öffnen
```

## Neues Produkt hinzufügen

Einfach einen weiteren Eintrag in `assets/js/products.js` ergänzen
(Name/Beschreibung auf Deutsch + Englisch, Preis, Stripe-Link) – die
Produktkarte erscheint automatisch auf beiden Sprachversionen.
