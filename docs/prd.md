# Product Requirements Document (PRD) - Osterlehner Architekten GmbH
Version: 7.0 | Tier: 1 - GOLD | Datum: 2026-09-14

## 1.1 Grammatik & Architektonische Leitidee
- **Gewählte Grammatik:** Tektonisches Bauheft & Asymmetrisches Kataster („Das Weiterbauen der Stadt“)
- **Scroll-Gefühl:** Souverän, tektonisch schwer, ingenieurmäßig präzise. Sichtbare 1px-Rasterachsen (rgba(23, 25, 26, 0.08)), die sich wie auf transparentem Pergament über den Canvas spannen.
- **Hero-Bühne:** 
  Horizontale Achsenspaltung. 
  - *Linke Flanke:* Vertikal laufende Standort-Typografie (`writing-mode: vertical-rl`): „AUGSBURG // STEPHINGERGRABEN 04 // 1:100 // 48°22'31"N 10°53'44"E“.
  - *Rechte Flanke:* Großformatiges Textmonument: „DAS WEITERBAUEN DER STADT.“ mit skulpturaler Syne-Schrift, überlagert von einem schwebenden, interaktiven Werkplan-Fragment (Bestandsschnitt vs. Neubaueingriff).
- **Verbotene Schablonen:** Keine bunten Krypto-Bento-Boxen, keine verspielten Farbverläufe, keine generischen Stockfotos von lachenden Menschen mit Schutzhelmen.

## 1.2 Generatives Farb- & Typografie-System (Bespoke Harmonie aus dem DNA-Seed)
### HSL-Farbarchitektur:
- Canvas / Hintergrund: `--sc-canvas: #F3EFEA;` (rgb(243, 239, 234) / `hsl(36, 26%, 93%)`) – Warmer, mineralischer Muschelkalk-Putz als organisch-matte Textur anstelle von sterilem Weiß.
- Plan-Flächen / Kacheln: `--sc-surface: #FFFFFF;` (Reines Planweiß für Baukarten und Aktenblätter).
- Sekundär-Flächen: `--sc-surface-subtle: #EBE5DC;` (Mattes Werkstein-Graubeige für Schlitze und Faltmodule).
- Primärtext / Typografie: `--sc-ink: #17191A;` (rgb(23, 25, 26) / `hsl(200, 6%, 10%)`) – Tiefes Stadtmauer-Graphit für kompromisslose Lesbarkeit (Kontrastverhältnis > 15:1, WCAG AAA).
- Sekundärtext: `--sc-ink-muted: #64686A;` (Getöntes Patina-Schiefer, Kontrast > 4.8:1).
- Akzentfarbe 1 (Struktur & Badges): `--sc-accent: #325244;` (rgb(50, 82, 68) / `hsl(154, 24%, 26%)`) – Patiniertes Augsburger Kupfergrün (Kontrast > 5.5:1).
- Akzentfarbe 2 (Funktion & Messlinien): `--sc-accent-roetel: #B64F37;` (rgb(182, 79, 55) / `hsl(11, 54%, 46%)`) – Gebrannter Ziegelsinter / Rötel für 1px-Schnittachsen, Vermessungsmarken und Fadenkreuze.
- Fundament / Footer: `--sc-dark: #111213;` (Schwarzbeton mit Typografie in #E5E0D8).
- Rasterlinien: `--sc-border: rgba(23, 25, 26, 0.12);` und `--sc-grid-line: rgba(23, 25, 26, 0.08);`.

### Font-Pairing nach Wesensart:
- **Display-Headline:** `Syne` (Weights 700, 800) – skulptural, geometrisch-hart, architektonisch geschnitten. Skalierung: `clamp(2.75rem, 7vw, 6.25rem)`, `line-height: 0.95`, `letter-spacing: -0.035em`. Großbuchstaben für Kategoriemarker mit `letter-spacing: 0.22em`.
- **Marginal- & Akzentschrift:** `Instrument Serif` (Weight 400 Italic) – meisterlicher, feinsinniger Kontrapunkt für redaktionelle Zitate, geschichtliche Referenzen („est. 1999“) und handschriftliche Baustellennotizen.
- **Fließtext & Kennzahlen:** `Plus Jakarta Sans` (400 für Fließtext, 600 für Kennzahlen) – absolut neutral und stundenlang lesbar.
- **Technische Metadaten:** `Space Mono` – für Baujahre, HOAI-Phasen, Flurstücksdaten, Maßstäbe und DIN-Normen.

## 1.3 Das Motion- & Interaktions-System (Emil Kowalski Craft & 7 Primitiven)
1. **Blueprint Grid & Typo Draw (Page Load & Hero):** 
   Zarte 1px Vektor-Schnittlinien animieren über `stroke-dashoffset` von links nach rechts (`duration: 0.85s, ease: "expo.out"`). Parallel schiebt SplitType die Hero-Headlines via GSAP aus einer Schnittmaske nach oben (`yPercent: 110, stagger: 0.02s, duration: 0.85s, ease: "power4.out"`).
2. **Tektonische Schnitt-Parallaxe (ScrollTrigger via Lenis):** 
   Im Bestands-Kataster verschieben sich technische Risszeichnungen und hochauflösende Architekturfotografien mit gegenläufigem Versatz (`scrub: 1.1`, Foto `yPercent: -12`, Planzeichnung `yPercent: 18`).
3. **Fadenkreuz-Peilung (Cursor & Touch-Feedback):** 
   Feiner 20px-Messpunkt mit Rötel-Achsenkreuz (#B64F37), der bei Hover über Projektkennzahlen magnetisch an Rastpunkten der Tabelle andockt (`quickTo, duration: 0.2s`) und die Maßeinheit dynamisch skaliert.
4. **Dynamic Stat & Metric Counters:** 
   Zahlen (25+ Jahre Bürohistorie, 86 Wohneinheiten Beethoven Carrée, 28 Wohnungen Königsbrunn, Denkmalschutzpreis) zählen beim Scrollen geschmeidig hoch.
5. **Kataster-Akkordeon („Der Bauakten-Schlitz“):** 
   Tippen oder Hovern klappt vertikal einen detaillierten Bauakten-Schlitz auf: Vorher-Bestandsdaten, Nachher-Volumen, reale Adressdaten und reale Baukörperfotografien.
6. **Native CSS-3D Perspective Tilt:** 
   Sanfte räumliche Neigung (`perspective: 1200px`) der Werkplan-Fragmente mit schwebenden Rötel-Badges (`translateZ(25px)`).
7. **Kontinuierlich rotierendes 25-Jahre-Büro-Siegel:** 
   Kreisrundes typografisches Gütesiegel („OSTERLEHNER ARCHITEKTEN • ESTABLISHED 1999 • AUGSBURG •“), das sich synchron zum Scrollen dreht.

## 1.4 Signature Feature: „Der Bestands-Potenzial-Navigator“
- Interaktives Vorprüfungs-Widget für Eigentümer, WEGs und Family Offices:
  - **Schritt 1:** Gebäudestatus („Mehrfamilienhaus Nachkriegszeit“, „Gewerbebau 1960–1985“, „Historisches Einzeldenkmal / Altbau“).
  - **Schritt 2:** Bruttogrundfläche (Slider von 300 m² bis 6.000 m² BGF).
  - **Schritt 3:** Zieldefinition („Wohnraumerweiterung durch Dachaufstockung“, „Nutzungsänderung Gewerbe in Wohnen“, „Komplettsanierung & Energetische Hülle“).
  - **Echtzeit-Reaktion:** Dynamische 2D-SVG-Baukörper-Morphing-Visualisierung, Schätzung der gewonnenen Wohnfläche in m², Berechnung der eingesparten Grauen Energie (in t CO2) gegenüber Abriss & Neubau, sowie automatische Zuordnung eines realen Augsburger Referenzprojekts als Fallstudie (z. B. Beethoven Carrée, Lange Gasse 26, Fuggerstraße 5+7).
  - **Direktübertrag:** 1-Klick-Übernahme aller Konfigurationswerte in die strukturierte Terminanfrage an das Architekturbüro.

## 1.5 Tageszeit-Personalisierung (Architekturbüro-spezifisch)
- 06:00 – 11:59 Uhr: `Guten Morgen — Baubüro Stephingergraben 4 ist besetzt.`
- 12:00 – 17:59 Uhr: `Guten Tag — Projektbesprechungen & Ortstermine aktiv.`
- 18:00 – 05:59 Uhr: `Guten Abend — Wir prüfen Ihre Bestandsanfrage am nächsten Werktag.`

## 1.6 Full-Canvas Raumnutzung & Raster-Architektur
- Maximale Canvas-Breite: `max-width: 1440px` (fluid `min(94vw, 1500px)`).
- 12-Spalten-Asymmetrie mit dezenten 1px-Rasterlinien (`rgba(23, 25, 26, 0.08)`).
- Mobile-First: Auf 375px transformieren sich die Raster nahtlos in kompakte vertikale Faltmodule mit einer fixierten Fußleiste für Direktkontakt und Projektanfrage.
