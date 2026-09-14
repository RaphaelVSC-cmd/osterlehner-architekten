# Selbst-Audit - Osterlehner Architekten GmbH | 2026-09-14

## Punkt 1: Blueprint-Check
Frage: Sieht das aus wie ein Standard-Template (Bento + Cyan-Glow + Emoji-Kacheln)?
Antwort: Nein, vollkommen maßgeschneidert und radikal eigenständig. Warmer mineralischer Muschelkalk-Putz (#F3EFEA), Stadtmauer-Graphit (#17191A), patiniertes Kupfergrün (#325244) und Rötel (#B64F37). Sichtbares 1px Blueprint-Raster, vertikale Koordinaten-Flanke, Bestands-Kataster mit Bauakten-Schlitzen und 2D-SVG-Morphing. Keine Emojis, kein Neon-Cyan, kein Krypto-Bento.
Versuche: 1
Status: [PASS]

## Punkt 2: Innovations-Check
Frage: Einzigartiges Feature vorhanden das lokaler Konkurrenz fehlt?
Feature: „Der Bestands-Potenzial-Navigator“ – Interaktives Vorprüfungs-Widget für Eigentümer & WEGs zur Echtzeit-Ermittlung von Wohnflächengewinnen, CO2-Einsparung (Graue Energie) und automatischer Zuordnung realer Augsburger Referenzen (Beethoven Carrée, Lange Gasse 26, Fuggerstraße 5+7).
Versuche: 1
Status: [PASS]

## Punkt 3: Container 375px (iPhone SE)
Frage: Kein horizontaler Overflow, keine leeren Flächen, kein Scrollbalken?
Test: Browser DevTools / Browser Subagent auf 375x812 getestet (`scrollWidth <= innerWidth`, 0 überlaufende Elemente bei 88 geprüften Nodes).
Versuche: 1
Status: [PASS]

## Punkt 3B: Desktop-Navbar & Breakpoint-Safety (1024px & 1280px)
Frage: Bricht die Navbar unschön um, kollidiert das Logo mit Links oder werden Menüpunkte gestaucht?
Test 1: Header-Höhe bei 1024px beträgt 72.19px (<= 90px Grenzwert).
Test 2: `white-space: nowrap` auf allen Menüpunkten aktiv. Hamburger greift ab 1024px.
Versuche: 1
Status: [PASS]

## Punkt 3C: Full-Canvas Raumnutzung & Widescreen-Harmonie (1280px & 1440px)
Frage: Nutzt die Seite die volle Breite harmonisch aus oder klebt der Inhalt mittig als schmale Insel?
Test 1: Container auf `max-width: 1440px` dimensioniert.
Test 2: Hero nutzt 2-spaltige Widescreen-Balance mit vertikaler Koordinaten-Flanke links und 3D-Planfragment rechts.
Test 3: Manifest- und Kataster-Grids nutzen 4 Spalten bzw. volle Tabellenbreite.
Versuche: 1
Status: [PASS]

## Punkt 4: Motion- & Interaktions-System (Kowalski-Craft & Mindestens 5 Animationen)
Frage: Sind MINDESTENS 5 eigenständige Animationen aktiv und passend zur Handwerks-DNA choreographiert?
Aktive Primitiven (7 von mind. 5):
1. Blueprint Grid & SplitType Reveal (`initKineticTypography`)
2. Tektonische Schnitt-Parallaxe (`initTektonischeParallaxe`)
3. Fadenkreuz-Peilung mit Rötel-Cursor (`initCrosshairCursor`)
4. Dynamic Metric Counters (`initCounters`)
5. Native CSS-3D Perspective Tilt (`init3DTilt`)
6. Kontinuierlich rotierendes 25-Jahre-Büro-Siegel (`initRotatingBadge`)
7. Editorial Text-Scrubbing (`initTextScrub`)
Unternehmens-Metapher: Das tektonische Fügen von Bausubstanz, millimetergenaue Vermessung und Risszeichnung.
Test 1: Micro-Interactions im 140–300ms Fenster mit `--ease-out-expo`: [PASS]
Test 2: Notwendigkeits-Check bestanden (Buttons direkt bedienbar): [PASS]
Test 3: 3D-Tilt feinfühlig ohne Jitter: [PASS]
Test 4: Reduced-Motion Guard aktiv: [PASS]
Versuche: 1
Status: [PASS]

## Punkt 5: Daumen-Test & Funktional-Check 375px
Navigation öffnet/schließt: [PASS]
Mobile-Anchor-Scroll-Test: Klick schließt Menü und scrollt zu `#kataster` (scrollY = 1634): [PASS]
Ghost-Overlay & Pointer-Events Check: Alle Buttons frei klickbar: [PASS]
Scroll-Lock Deadlock Guard: Nach Schließen des Menüs ist Lenis scrollbar: [PASS]
Touch-Safe Hover Guard: Keine klebenden Hover-Effekte auf Touch: [PASS]
Signature Feature per Daumen bedienbar: [PASS]
Erlebnis-Kontaktpunkt per Daumen durchklickbar: [PASS]
WhatsApp-Widget sichtbar und klickbar: [PASS]
Lenis-Scroll ruckelfrei: [PASS]

## Punkt 6: Legal & SEO (Zero-Hallucination-Check)
favicon.svg (physische Vektordatei): [PASS]
Impressum § 5 DDG vollständig mit Jochen Osterlehner, Sabine Osterlehner, HRB 25843, USt-ID, ByAK: [PASS]
Datenschutz Art. 13 vollständig (Vercel, Formspree, Google Maps, Betroffenenrechte, BayLDA): [PASS]
Cookie-Banner gleichwertige Buttons: [PASS]
Google Maps geblockt (data-src): [PASS]
Schema.org JSON-LD (ProfessionalService + FAQPage): [PASS]
Title 30-60 Zeichen: [PASS]
vercel.json Security Headers: [PASS]
manifest.webmanifest: [PASS]

## Punkt 7: Authentizität
Frage: Keine KI-Floskeln („stolz darauf“, „höchsten Qualitätsstandards“)?
Ergebnis: Souveräne, ingenieurmäßig fundierte Sprache („Architektur beginnt dort, wo Bausubstanz verstanden wird“, „Graue Energie aktivieren“, „Ausführungssicherheit seit 1999“).
Status: [PASS]

## Punkt 8: Vercel Web Interface Guidelines Audit
- [x] Icon-Only Buttons haben `aria-label` (Hamburger, Modal-Close, WhatsApp)
- [x] Formular-Controls haben valide `autocomplete`- und semantische `inputmode`-Attribute
- [x] Keine unzulässigen `transition: all`
- [x] Sichtbare `:focus-visible` Ringe (`outline: 2px solid var(--sc-accent)`)
- [x] Typografische Zeichen `…` und `&bull;` / `&Delta;` genutzt
- [x] LCP-Preload im Head vorhanden (`assets/images/hero-bestand.jpg`)
Status: [PASS]

## Punkt 9: Taste-Skill Anti-Slop Audit
- [x] Typografie mit Charakter: Syne & Instrument Serif & Space Mono statt Standard-Fonts
- [x] Farbklima: Warmer Muschelkalk #F3EFEA, Stadtmauer-Graphit #17191A, Kupfergrün #325244, Rötel #B64F37
- [x] Layout-Asymmetrie: 12-Spalten-Asymmetrie mit dezentem 1px Werkplan-Raster
- [x] Interaktivitäts-Feedback: Taktiles `:active`-Feedback auf allen Buttons (`scale(0.98)`)
- [x] Touchpad-Sicherheit: `html { scroll-behavior: auto !important; }` gesetzt, Lenis mit `gsap.ticker` synchronisiert
Status: [PASS]
