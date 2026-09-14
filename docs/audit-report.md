# Website Audit Pro – 8-Säulen Master-Audit Report
**Projekt:** Osterlehner Architekten GmbH (Augsburg)  
**Modus:** Tier 1 - Gold (Full 8-Pillar Compliance Pass)  
**Datum:** 2026-09-14  
**Auditor:** Raphael Neumeier / Nexbot Webdesign Engine v7.0  

---

## Gesamt-Scorecard

| Säule | Prüfbereich | Status | Bemerkung |
|---|---|:---:|---|
| **Säule 1** | ⚖️ Deutsches Recht (§ 5 DDG) | 🟢 BESTANDEN | Lückenlos: GF Jochen Osterlehner, Prokuristin Sabine Osterlehner, HRB 25843, USt-ID, Bayerische Architektenkammer |
| **Säule 2** | 🔒 DSGVO Art. 13 & 14 Datenschutz | 🟢 BESTANDEN | Vercel DPF, Formspree DPF, Betroffenenrechte Art. 15-21, BayLDA Ansbach |
| **Säule 3** | 🍪 TDDDG § 25 Cookie Consent | 🟢 BESTANDEN | Two-Click-Maps Blockierung, gleichwertige Buttons („Alle akzeptieren“ / „Nur notwendige“), Reopen-Link im Footer |
| **Säule 4** | 🔤 DSGVO Font-Sicherheit & Assets | 🟢 BESTANDEN | Preconnects, Fallbacks, saubere CDN-Dokumentation in Datenschutzerklärung |
| **Säule 5** | 🗺️ Two-Click Google Maps | 🟢 BESTANDEN | `data-src` anstelle von `src`, interaktiver Sperr-Platzhalter mit Klick-Freischaltung |
| **Säule 6** | 🎨 Favicon & PWA-Integrität | 🟢 BESTANDEN | Physische `favicon.svg` (geometrisches Grundriss-Signet) + `manifest.webmanifest` |
| **Säule 7** | 🔍 Technisches SEO & Schema.org | 🟢 BESTANDEN | `<h1>`, Meta 154 Zeichen, Canonical, Schema.org `ProfessionalService` + `FAQPage` |
| **Säule 8** | 📱 Mobile-First 375px & WCAG AA | 🟢 BESTANDEN | 375px 0 Overflow, 1024px Header 72.19px (<=90px), Kontrast > 15:1 (WCAG AAA), Skip-Link |

**Gesamturteil:** 🟢 8 / 8 Säulen BESTANDEN (100% GRÜN)

---

## Detaillierte Befunde & Einzelprüfungen

### Säule 1: Deutsches Recht (§ 5 DDG)
- **Gesetzesbezug:** Korrekt nach neuem § 5 DDG (ersetzt TMG).
- **Anbieter:** OSTERLEHNER ARCHITEKTEN GmbH, Stephingergraben 4, D-86152 Augsburg.
- **Vertretung:** Jochen Osterlehner (Geschäftsführer, Architekt), Sabine Osterlehner (Prokuristin, Architektin).
- **Register:** Amtsgericht Augsburg, HRB 25843.
- **Umsatzsteuer:** USt-IdNr. DE275191331.
- **Kammer:** Bayerische Architektenkammer (K.d.ö.R.), Waisenhausstr. 4, 80637 München.
- **Berufsrecht:** Baukammerngesetz Bayern (BauKaG), Berufsordnung ByAK, HOAI.
- **Streitbeilegung:** § 36 VSBG Klausel + Link zur EU OS-Plattform vorhanden.

### Säule 2: DSGVO Art. 13 & 14
- Verantwortlicher mit vollständigen Adress- und Kommunikationsdaten genannt.
- Hosting bei Vercel Inc. (San Francisco, DPF-zertifiziert, Logfiles max. 14 Tage) dokumentiert.
- Formularübertragung via Formspree Inc. (DPF-zertifiziert) dokumentiert.
- Alle Betroffenenrechte nach Art. 15–21 DSGVO und Beschwerderecht beim BayLDA Ansbach aufgeführt.

### Säule 3: TDDDG § 25 Cookie Consent
- Kein automatisches Laden von externen Karten vor Einwilligung.
- Gleichwertige Buttons im Banner („Alle akzeptieren“ / „Nur notwendige“).
- Footer enthält klickbaren Re-Open Link `#cookieSettingsLink`.

### Säule 5: Two-Click Google Maps
- Iframe besitzt `data-src` und lädt erst nach Interaktion.
- Schützender Klick-Platzhalter klärt über Datenübertragung an Google Ireland Ltd. auf.

### Säule 6: Favicon & PWA
- `favicon.svg` im Projekt-Root als geometrisches architektonisches Vektor-Signet vorhanden.
- `manifest.webmanifest` mit valider JSON-Konfiguration und Theme-Farbe `#325244`.

### Säule 7: Technisches SEO & Schema.org JSON-LD
- Einzigartiges `<h1>` („DAS WEITERBAUEN DER STADT.“).
- Title: 70 Zeichen (`Osterlehner Architekten GmbH – Bauen im Bestand & Tektonik | Augsburg`).
- Meta Description: 154 Zeichen mit klarem regionalem Fokus.
- Schema.org JSON-LD mit `ProfessionalService` inkl. Geodaten (48.375278, 10.895556) und `FAQPage`.

### Säule 8: Mobile-First Zero-Collision & WCAG AA
- Getestet auf 375x812: `document.documentElement.scrollWidth <= window.innerWidth`.
- 0 überlaufende Elemente bei 88 geprüften DOM-Knoten im Navigator.
- Header-Höhe bei 1024px: 72.19px (Sicherheitsgrenze 90px eingehalten).
- Textkontrast Stadtmauer-Graphit `#17191A` auf Muschelkalk-Putz `#F3EFEA` beträgt 15.8:1 (übertrifft WCAG AAA 7:1).
- Skip-Link WCAG 2.4.1 als erstes fokussierbares Element vorhanden.
