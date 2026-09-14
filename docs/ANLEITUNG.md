# Kunden-Handbuch & Übergabe-Dokumentation
**Kunde:** Osterlehner Architekten GmbH  
**Standort:** Stephingergraben 4, 86152 Augsburg  
**Ansprechpartner:** Architekt Jochen Osterlehner & Architektin Sabine Osterlehner  
**Erstellt durch:** Raphael Neumeier (Nexbot Webdesign)  

---

## 1. Was wurde für Ihr Architekturbüro gebaut?

Für Ihr Büro am Stephingergraben wurde eine maßgeschneiderte, architektonische Web-Plattform auf modernstem Agentur-Niveau entwickelt. 
Anstelle einer austauschbaren Firmenpräsentation inszeniert die Website Ihre 25-jährige Spezialisierung auf **„Das Weiterbauen der Stadt“** und **„Bauen im Bestand“**:

1. **Das Bestands-Kataster:**
   Ein digitaler Werkplan mit aufklappbaren „Bauakten-Schlitzen“, der Ihre realen Referenzen (Beethoven Carrée mit 86 Einheiten, Umnutzung Lange Gasse 26, Dachaufstockung Fuggerstraße 5+7, Denkmalschutzpreis Frauentorstraße 40) mit Vorher-Nachher-Daten, Flächenangaben und Bestandsfotos greifbar macht.
2. **Der Bestands-Potenzial-Navigator:**
   Ein interaktives Vorprüfungs-Widget für Eigentümer, WEGs und Family Offices. Bauherren können vorab ihren Gebäudetypus wählen, die Bruttogrundfläche einstellen und sehen in Echtzeit den potenziellen Wohnflächengewinn sowie die eingesparte graue Energie – gekoppelt mit Ihren Referenzprojekten als Erfolgsnachweis.
3. **Erlebnis-Kontaktpunkt:**
   Ein dreistufiger strukturierter Anfrage-Assistent, der Projektanfragen vorqualifiziert (inkl. Plangrundlagen und Liegenschaftsdaten) und direkt an Ihr Büro übermittelt.
4. **Lückenloser Rechts- und Abmahnschutz:**
   Vollständig aktualisiert auf das neue Digitale-Dienste-Gesetz (§ 5 DDG, welches das veraltete TMG ablöst), DSGVO-konforme Two-Click-Kartenlösung und vollständige Kammereinträge der Bayerischen Architektenkammer.

---

## 2. Einrichtung & Aktivierung (In 3 einfachen Schritten)

### Schritt A: Formular-Übertragung aktivieren (Formspree)
1. Besuchen Sie [https://formspree.io](https://formspree.io) und registrieren Sie sich kostenlos mit Ihrer E-Mail `info@osterlehner.co`.
2. Erstellen Sie ein neues Formular namens „Osterlehner Anfragen“ und kopieren Sie Ihre Form-ID (z. B. `xpzvabcd`).
3. Tragen Sie diese ID in `index.html` bei `action="https://formspree.io/f/[IHRE-ID]"` ein. Alle Anfragen landen ab sofort strukturiert in Ihrem E-Mail-Postfach.

### Schritt B: Besucher-Statistiken aktivieren (Plausible oder Microsoft Clarity)
- Die Website ist für **Plausible.io** vorbereitet (100% DSGVO-konform ohne Cookie-Banner): Tragen Sie einfach Ihre Domain in der auskommentierten Zeile im `<head>` ein.
- Alternativ können Sie Microsoft Clarity für kostenlose Heatmaps nutzen.

### Schritt C: Eigene Domain aufschalten (`www.osterlehner-architekten.de`)
Um Ihre bestehende unverschlüsselte HTTP-Präsenz durch diese moderne SSL-verschlüsselte Plattform abzulösen:
1. Melden Sie sich bei Ihrem Domain-Provider an (z. B. Strato, IONOS oder Host Europe).
2. Setzen Sie für `www.osterlehner-architekten.de` einen **CNAME-Record** auf `cname.vercel-dns.com`.
3. Innerhalb von 15 Minuten wird automatisch ein kostenloses SSL-Zertifikat aktiviert.

---

## 3. Was Sie selbst ändern können

Die Website ist als sauberes, modulares Webprojekt (HTML/CSS/JS) aufgebaut:
- **Telefonnummer / E-Mail:** In `index.html` nach `+49 821 96902` oder `info@osterlehner.co` suchen und anpassen.
- **Neue Referenzen hinzufügen:** In `index.html` unter `<div class="kataster-table">` einfach einen bestehenden `<article class="kataster-row">`-Block duplizieren und neue Baudaten eintragen.

---

## 4. Support & Rundum-Sorglos-Wartung

Bei Änderungswünschen, neuen Baustellenfotos oder technischen Fragen steht Ihnen Raphael Neumeier zur Seite:
- **Telefon / WhatsApp:** +49 176 84964245
- **E-Mail:** info@nexbot-webdesign.de
- **Reaktionszeit:** Innerhalb von 24 Stunden
