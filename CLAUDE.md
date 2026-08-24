# CLAUDE.md

Rebuild of the Staudt Hydraulik site (WordPress/Elementor staging at
wordpress-1074446-6581904.cloudwaysapps.com) as a statically generated Astro site. Scope of this
first round: **Landingpage, Wir über uns, zwei Hydraulikzylinder-Detailseiten, Impressum.**

Brief: **Texte bleiben wie auf der Vorlage** (Tippfehler dürfen korrigiert werden), **Design nah
an der Vorlage**, verbessert nur wo nötig (Hierarchie, Konsistenz, Performance). Alle Bilder
stammen von der Vorlage und liegen in `src/assets/`.

Site language is German.

## Commands

```bash
npm run dev / build / preview / check
```

`npm run build` must pass clean before any commit. `dist/` is committed (FTP-Upload durch den
Kunden).

## Verified business facts

- **Staudt-Hydraulik GmbH & Co. KG**, Ottostraße 8, 52511 Geilenkirchen (NRW).
- Tel. **+49 2451 8037**, Fax +49 2451 66679, **info@staudt-hydraulik.de**.
- Vertretungsberechtigte: Josef Staudt, Thomas Staudt. HRA 4992, USt-IdNr. DE 323 033 714.
- Familiengeführt in 3. Generation; seit 1978 Spezialist für Hydraulikzylinder; Wurzeln seit
  1959 (Entwicklung, Fertigung, Montage & Prüfung in Deutschland).
- Zertifiziert seit 2001 nach DIN EN ISO 9001:2015, seit 2019 nach EN ISO 3834-3.
- Hydraulikzylinder bis 20 Tonnen Stückgewicht; CAD/FEM-Konstruktion; Datenaustausch 2D/3D.
- Produktdaten der Detailseiten (Kurzhub-Plungerzylinder, Teleskopzylinder) stehen in
  `src/data/produkte.ts` — 1:1 von der Vorlage, nie erfinden oder runden.

**No invented numbers or claims.** Kundenlisten, Branchen, Jahreszahlen nur wie auf der Vorlage.

## Design contract

Vorlagen-Identität, aus dem Elementor-CSS extrahiert — beibehalten:

- Farben: Stahlblau `#0F5BA3` (6.90:1 auf Weiß), Slate `#264152` (10.71:1), Aktion
  `#1863DC` (5.44:1, nur große Elemente/Buttons), Flächen `#F3F5F7`, Text-Ink `#212121`.
- Typo: **Poppins** (wie Vorlage). Blaue Kreis-Icons (`icon-*.png`) und alle Fotos der Vorlage.
- Bewusste Verbesserungen ggü. der Vorlage (docs/uebergabe.md): eine H1 pro Seite und saubere
  Heading-Hierarchie, Hero zuerst, konsistente CTAs (primär „Anfragen"/Kontakt), technische
  Daten als echte Tabellen, kein totes WP-Formular (mailto stattdessen), Performance
  (Astro-Image, kein jQuery/Elementor).

## Architecture

Wie die Schwesterprojekte: `src/layouts/Base.astro` owns head/header/footer/JSON-LD;
`src/data/` single source of truth; tokens in `src/styles/tokens.css`; Icons aus `lucide`
inline (nie Emoji); Reveals nur unter `html.js` + `prefers-reduced-motion: no-preference`.

Slugs wie Vorlage: `/wir-ueber-uns-2/`, `/01-einfachwirkende-hydraulikzylinder/`,
`/08-teleskopzylinder/`, `/impressum/`.

## Git

Branch `main`. `dist/` committen.
