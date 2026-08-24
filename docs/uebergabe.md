# Übergabe — Staudt Hydraulik

## Umfang (Stand: alle deutschen Seiten)

Statische Astro-Site, Slugs identisch zur Vorlage
(wordpress-1074446-6581904.cloudwaysapps.com):

- `/` Landingpage · `/wir-ueber-uns-2/` · `/hydraulikzylinder/` (Übersicht)
- **16 Produkt-Detailseiten** (01–14, 16, 17 — an den Original-Slugs, inkl.
  `/gleichgangzylinder/` und `/sonderzylinder/` ohne Nummernpräfix wie im Original)
- `/branchen-referenzen/` · `/services/` · `/karriere/` · `/kontakt/`
- `/impressum/` · `/datenschutz/` · 404

Nicht übernommen: EN-Version (auf Wunsch nachrüstbar).

## Header

Kundenwunsch umgesetzt: **Kontakt-Button links, Logo rechts**, Navigation mittig.
Unter 1184 px klappt die Navigation hinter den Menü-Button (ohne JavaScript bleibt sie offen).

## 1:1-Garantie der Produktseiten

Beschreibungen und technische Daten sind **wörtlich von der Vorlage übernommen** — inklusive
dieser Eigenheiten, die die Firma bewusst prüfen/korrigieren sollte:

- **16 Pneumatikzylinder**: Beschreibung „Beschreibung", Specs „XX mm / 1XX mm / XX bar / XX kN
  / XX kg" — auf der Vorlage Platzhalter, hier 1:1 übernommen.
- **17 Zugankerzylinder**: Beschreibung „Platzhalter" — dito. (Die Grafik der Vorlage heißt
  dort „Eilgangszlinder_Grafik.png" — möglicherweise falsch zugeordnet.)
- **14 Prüfzylinder**: Überschrift „Püfzylinder mit Membranspeicher" — Tippfehler der Vorlage,
  1:1 belassen.
- **11 Sonderzylinder**: „Zugkraft: 775 kg" — Einheit kg statt kN wie auf der Vorlage.
- **15 Eilgangszylinder**: Der Navigationspunkt der Vorlage führt dort auf eine 404-Seite.
  In der Übersicht als „Seite folgt" gelistet; sobald Inhalte vorliegen, ist es ein
  Datenobjekt in `src/data/produkte.ts`.

## Kontaktseite

- Ansprechpartner 1:1 — **Achtung**: Heinz-Josef Cohnen steht auf der Vorlage mit
  `thomas.staudt@staudt-hydraulik.de` (vermutlich Copy-Paste-Fehler; Dateiname des Fotos
  deutet auf `cohnen@…`). 1:1 übernommen — bitte korrigieren lassen, dann in
  `src/data/site.ts` ändern.
- Das WP-Formular ist als **mailto-Komponist** umgesetzt: Zylindertyp-Auswahl (Optionen 1:1),
  Name, Nachricht → öffnet das E-Mail-Programm vorbefüllt. Keine Datenübertragung über die
  Website, kein Consent-Problem. Ohne JavaScript: direkter E-Mail-Link.

## Bewusste Änderungen (außerhalb der Produkttexte)

1. Hierarchie: eine H1 pro Seite (Vorlage hatte 3× H2 pro Produktseite, H1 mitten auf der
   Startseite).
2. Technische Daten als echte Tabellen; technische Zeichnungen auf hellem Band (vier
   Zeichnungen mit hellen Linien dafür invertiert — dokumentiert im Audit unten).
3. Tippfehler außerhalb der Produkttexte korrigiert („Anwenungen", „Reparatursevice",
   „herrvorragende", „Zertfizierung", „Hydraulikzylindenrn", „Zerspanungsmechniker").
4. **Datenschutzerklärung neu gefasst**: Die Vorlage beschrieb Google Analytics, Cookies und
   eingebettetes Maps — nichts davon existiert auf der statischen Seite (keine Cookies, kein
   Tracking, selbst gehostete Schriften). **Anwaltlich prüfen lassen.**
5. Impressum: Kerndaten + Haftungstexte übernommen, WordPress-spezifische Passagen entfernt.
6. Performance: statisches HTML statt ~177 Elementor-Assets; eine Schriftfamilie (Poppins,
   selbst gehostet); responsive WebP-Bilder.

## Offene Punkte

- AGB-PDF liegt noch auf der Live-Domain (Footer verlinkt dorthin) — beim Livegang die Datei
  mit umziehen.
- Broschüre verlinkt auf Flipsnack (extern, wie Vorlage).
- Karriere: Bewerbungen laufen über mailto mit vorbefülltem Betreff pro Stelle.

## 100%-Audit (Original vs. Nachbau)

Vollständig geprüft am Stand des letzten Commits:

- **Bilder**: Alle 16 Produktfotos, 12 Zeichnungen, alle Icons, Branchen-, Team- und
  Sektionsbilder sind **byte-identisch** mit der Vorlage (SHA-256-Abgleich). Die 4 bewusst
  invertierten Zeichnungen (helle Linien → helles Band) sind dokumentiert. Die
  Leistungs-Karten der Startseite nutzen jetzt die **originalen Slider-Bilder** der Vorlage
  (Serienfertigung-neu.jpg, Sonderloesungen.jpg, Hydraulikzylinder.jpg — per
  WordPress-Media-API nachgeladen).
- **Texte**: Produktseiten wortwörtlich 1:1 (automatischer Fragment-Abgleich). Übrige Seiten
  1:1 bis auf diese dokumentierten Korrekturen: „Anwenungen"→„Anwendungen",
  „Reparatursevice"→„Reparaturservice", „herrvorragende"→„hervorragende",
  „Hydraulikzylindenrn"→„Hydraulikzylindern", „Zerspanungsmechniker"→„Zerspanungsmechaniker",
  „nach mAss"→„nach Maß", „100%"→„100 %", „On - & Offshore"→„On- & Offshore",
  „Finite Elemente Methode"→„Finite-Elemente-Methode", „Service an, um"→„Service, um",
  „400mm"→„400 mm". Ergänzt nach Audit: Zertifizierung wieder vollständig inkl.
  „& Ex EN ISO 3834-3" (war anfangs verkürzt).
- **Links**: alle 26 Seiten gecrawlt — keine kaputten internen Links oder Bilder.
- **Formular**: End-to-End getestet — Zylindertyp-Auswahl (Optionen 1:1 wie Vorlage),
  Name, Nachricht → erzeugt korrekt vorbefüllte E-Mail an info@staudt-hydraulik.de mit
  Betreff „Anfrage: <Typ>"; ohne JavaScript direkter E-Mail-Link.
- Nicht übernommen (bewusst): der englischsprachige Formularblock der Original-Startseite
  („Your Name / Last Name …") — konsolidiert auf die Kontaktseite; der Satz „Sie haben ein
  Projekt und brauchen Unterstützung. Wir beraten Sie gerne." ging damit auf.

## Header-Banner & Suche (Nachtrag)

- **Original-Headerbilder verworfen** (Kundenwunsch — die Slogans waren ins Bild eingebacken
  und doppelten teils die H1): Alle Seiten nutzen jetzt den einheitlichen Hero „Text links,
  Foto rechts". Die Foto-Teile der Banner sind ohne Textfläche zugeschnitten
  (`header-*-foto.jpg` in `src/assets`), die Original-Banner aus dem Repo entfernt.
  Verbleib der Slogans:
  - „Tradition trifft Präzision und Perfektion. Schon seit 1959." → Lead auf *Wir über uns*
    (Tippfehler „triff" der Vorlage dabei korrigiert).
  - „Bei Hydraulikzylindern macht uns keiner was vor. Höchstens nach." → Lead auf der
    Produktübersicht.
  - „Maschinelle Präzision und umfangreiches Know-how ermöglicht vieles." → war bereits die
    H1 der Services-Seite (kein zweites Vorkommen mehr).
  - „Unsere umfangreiche Expertise trifft auf unterschiedlichste Anwendungen." und
    „Hydraulikzylinder von Staudt? Perfekt. Rufen Sie an: …" → entfallen (inhaltlich durch
    Intro bzw. Kontaktangaben der jeweiligen Seite abgedeckt).
  - Services-Hero nutzt `zylinderteile.jpg` statt des Banner-Fotos (das Motiv „Mitarbeiter
    an CNC-Maschine" kommt weiter unten auf der Seite bereits vor).
- **Volltextsuche** unter `/suche/` mit Pagefind: Index entsteht bei `npm run build` in
  `dist/pagefind/` — komplett lokal, keine externen Dienste, keine Cookies (Datenschutz
  unverändert). Indexiert wird nur der Seiteninhalt (`data-pagefind-body` auf `<main>`).
  Zugang über das Lupen-Icon im Header, den Menüpunkt im Burger-Menü und den Footer;
  `?q=Begriff` in der URL startet die Suche direkt. Im Dev-Modus existiert der Index nicht
  (Hinweis erscheint auf der Seite).
- **Burger-Menü** als Panel: Karte mit Zeilen-Hover, aktiver Markierung, Suche-Eintrag und
  Telefon/E-Mail unten; sanfte Einblend-Animation (nur ohne reduced motion).

## Technisch

- `npm run dev` lokal · `npm run build` → `dist/` (committet, FTP-fertig).
- Neue Produktseite anlegen: ein Objekt in `src/data/produkte.ts` + Grafik/Foto in
  `src/assets/` — fertig.
- Farben aus dem Elementor-CSS der Vorlage (#0F5BA3, #264152, #1863DC, #F3F5F7),
  Kontraste berechnet ≥ 4.5:1 für Text.
