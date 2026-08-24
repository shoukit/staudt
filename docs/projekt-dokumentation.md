# Projektdokumentation — Relaunch staudt-hydraulik

Nachbau der WordPress-Seite (wordpress-1074446-6581904.cloudwaysapps.com) der
Staudt-Hydraulik GmbH & Co. KG als statische Astro-Site. Diese Datei beschreibt
**wie** das Projekt entstanden ist; was inhaltlich übernommen bzw. bewusst
geändert wurde, steht in `docs/uebergabe.md`.

## Auftrag & Leitplanken

- Texte 1:1 von der Vorlage übernehmen („Texte lassen wir so"), Design nur
  anpassen, wo nötig; Bilder der Vorlage verwenden.
- Alle deutschen Seiten; die englische Version bewusst nicht.
- Produktseiten wortwörtlich 1:1 — Beschreibungen und technische Daten,
  inklusive der Platzhalter und Tippfehler der Vorlage (dokumentiert in der
  Übergabe).
- Header: Anfragen-Button links, Logo rechts, Navigation darf nie umbrechen.
- Keine erfundenen Fakten, Zahlen oder Referenzen — alles stammt von der
  Vorlage.

## Vorgehen (chronologisch)

1. **Audit & Harvest**: Vorlage vollständig gecrawlt (alle Seiten, Bilder,
   Texte, Elementor-CSS). Bilder per `curl` gesichert; zusätzlich die
   WordPress-Media-API (`wp-json/wp/v2/media?search=…`) abgefragt — darüber
   wurden die Original-Slider-Bilder und die Header-Banner gefunden, die im
   gescrapten HTML nicht auftauchen.
2. **Scaffold**: Astro 7, statischer Output, Inhalte als typisierte
   Datenobjekte (`src/data/site.ts`, `src/data/produkte.ts`), Seiten als
   dünne Templates darüber.
3. **Nachbau aller Seiten** an den Original-Slugs (inkl. Catch-all
   `[...slug].astro` für die 16 Produktseiten).
4. **100-%-Audit** Original gegen Nachbau: SHA-256-Abgleich aller Bilder,
   automatischer Fragment-Abgleich aller Produkttexte, Link-Crawl über alle
   Seiten, End-to-End-Test des Formulars. Protokoll in `docs/uebergabe.md`.
5. **Feedback-Runden** mit dem Auftraggeber (Header-Layout, Zeichnungsband,
   Volltextsuche, Burger-Menü, Typografie, Hero-Konzept, Icon-Größen,
   Broschüren-Karte, Team-Karten). Jede Runde: Umsetzung → `npm run build` →
   Screenshot-Verifikation per Playwright → Commit.

## Gestaltungs-Workflow (Skills)

Für Aufbau und Überarbeitung der Seiten wurde die feste Skill-Reihenfolge der
Website-Projekte genutzt — Strategie vor Text, Text vor Pixeln:

1. `marketing-psychology` — Seitenstruktur, Angebotslogik, CTA-Führung
2. `copywriting` — nur begrenzt relevant, da Texte 1:1 (griff bei Eyebrows,
   Leads, Microcopy wie Formular-Labels)
3. `frontend-design` — Typografie, Farben, Rhythmus
4. `ui-ux-pro-max` — Umsetzung gegen die Accessibility-Messlatte
5. `cro` — Prüfung auf Conversion-Killer (eine primäre Handlung pro Seite)
6. `seo-audit` — Meta, strukturierte Daten, interne Verlinkung

## Design-System

- **Farben** aus dem Elementor-CSS der Vorlage, Kontraste berechnet (nicht
  geschätzt): `--steel #0F5BA3` (6.90:1), `--slate #264152` (10.71:1),
  `--action #1863DC` (5.44:1, nur Buttons/große Elemente), `--wash #F3F5F7`,
  `--ink #212121`. Tokens in `src/styles/tokens.css` — Rohwerte nur dort.
- **Typografie**: Poppins (400–700, selbst gehostet via Fontsource) für UI und
  Fließtext; **Work Sans Variable** (Gewicht 360) für H1/H2 in Stahlblau —
  angelehnt an die Schrift der alten Headerbanner. Kleine Kartenüberschriften
  bleiben Poppins (Leichtschnitte funktionieren nur groß).
  Gewichts-Hierarchie: Buttons 600 (stärkstes Element), aktiver Menüpunkt 600,
  Navigation 500, Eyebrows 600.
- **Heroes**: Eine einheitliche `PageHero`-Komponente — Text links,
  seitenspezifisches Foto rechts. Die Original-Banner der Vorlage (Slogan ins
  Bild eingebacken) wurden verworfen; ihre Foto-Teile sind zugeschnitten
  (`header-*-foto.jpg`), die Slogans laufen als echter Text mit, wo sie nicht
  die H1 doppeln (Details in `docs/uebergabe.md`).
- **Icons**: die Original-Icon-PNGs der Vorlage (Vorteile/Services) sowie
  `lucide` als Inline-SVG für UI-Symbole. Keine Emojis als Icons.
- **Motion**: Scroll-Reveals per IntersectionObserver mit gestaffelter Kaskade;
  alles hinter `prefers-reduced-motion` und einer `html.js`-Gate-Klasse —
  ohne JavaScript ist alles sofort sichtbar.

## Technik

- **Astro 7**, statisch, kein UI-Framework, kein Adapter. `npm run build` ist
  das Gate; `npm run check` für Template-/Typfehler.
- **Volltextsuche**: Pagefind. `npm run build` erzeugt den Index in
  `dist/pagefind/` und spiegelt ihn nach `public/pagefind/` (committet).
  Dadurch funktioniert die Suche auch, wenn auf dem lokalen Rechner der
  Pagefind-Schritt fehlschlägt, und sogar im Dev-Modus. Indexiert wird nur
  `data-pagefind-body` (auf `<main>`), damit keine Navigations-Schnipsel in
  den Treffern landen.
- **Bilder**: `src/assets/` + Astros `<Image>` (Hashing, Resizing, WebP);
  `public/` nur für Dateien mit fester URL (Favicon, robots.txt, OG-Bild).
  Vier technische Zeichnungen mit hellen Linien wurden per Skript invertiert,
  damit sie auf dem hellen Zeichnungsband funktionieren.
- **Kontaktformular** als mailto-Komponist: Zylindertyp + Name + Nachricht
  erzeugen eine vorbefüllte E-Mail — keine Datenübertragung über die Website,
  kein Consent-Bedarf; ohne JavaScript direkter E-Mail-Link.
- **Header**: eigene, breitere Shell; Navigation als Pill-Leiste ab 80 rem
  (JS-`matchMedia` und CSS synchron), darunter Burger-Panel als Karte.
  Nachgemessen kollisionfrei bei 1280/1366/1440/1680 px.

## Build & Livegang (Arbeitsablauf des Auftraggebers)

```bash
git pull
npm install        # nach jedem Pull — Abhängigkeiten können sich ändern
npm run dev        # lokal ansehen auf localhost:4321
npm run build      # dist/ erzeugen (ist außerdem committet)
```

Livegang: Inhalt von `dist/` zu Netlify (Drag & Drop) bzw. per FTP auf den
Zielserver. `dist/` liegt mit im Repo, damit der Stand auch ohne lokalen
Build deploybar ist.

## Inhalte pflegen

- **Fakten/Texte**: ausschließlich in `src/data/site.ts` ändern (Kontaktdaten,
  Leistungen, Ansprechpartner, Karriere, …) — Seiten übernehmen automatisch.
- **Produkt anlegen/ändern**: ein Objekt in `src/data/produkte.ts` plus
  Grafik/Foto in `src/assets/` — Slug, Navigation, Übersicht und Detailseite
  entstehen daraus.
- **Neues Hero-Foto**: Bild nach `src/assets/`, Dateiname (ohne Endung) als
  `bild`-Prop an `PageHero`.
- Nach jeder Änderung: `npm run build` muss sauber durchlaufen.

## Qualitätsregeln (verbindlich)

- Textkontrast ≥ 4.5:1 (≥ 3:1 für große Texte/UI-Konturen), berechnet.
- Sichtbare Fokuszustände überall; Touchziele ≥ 44×44 px.
- Eine H1 pro Seite, Überschriften in Reihenfolge, Landmarken vorhanden.
- Bewegung nur unter `prefers-reduced-motion: no-preference`.
- Genau ein primärer CTA pro Seite (Anfrage), Sekundäres sichtbar
  untergeordnet.
- Keine erfundenen Inhalte; Abweichungen von der Vorlage werden in
  `docs/uebergabe.md` dokumentiert.
