# Übergabe — Staudt Hydraulik (erste Runde)

## Umfang dieser Runde

Neu gebaut als statische Astro-Site, Texte und Bilder 1:1 von der Vorlage
(wordpress-1074446-6581904.cloudwaysapps.com):

- `/` — Landingpage (alle Sektionen der Vorlage)
- `/wir-ueber-uns-2/` — Wer wir sind, Entwicklung & Konstruktion, nach Maß, Historie
- `/01-einfachwirkende-hydraulikzylinder/` — Kurzhub-Plungerzylinder
- `/08-teleskopzylinder/` — 3-stufiger doppeltwirkender Teleskopzylinder
- `/impressum/` + 404

Noch nicht gebaut (Vorlage hat sie): übrige 14 Zylinder-Detailseiten, `/hydraulikzylinder/`
(Übersicht), Branchen & Referenzen, Services, Karriere, Kontakt, Datenschutz, EN-Version.
Die Struktur (Daten in `src/data/produkte.ts`, Template `src/pages/[...slug].astro`) ist so
angelegt, dass weitere Zylinderseiten nur ein Datenobjekt brauchen.

## Bewusste Design-Verbesserungen (Texte unverändert)

1. **Hierarchie repariert**: Die Vorlage hatte die H1 mitten auf der Seite und mischte
   H1/H2/H3 wild (SEO/A11y-Problem). Jetzt: genau eine H1 pro Seite, Hero zuerst.
2. **Technische Daten als echte Tabellen** statt loser Textzeilen (Teleskopzylinder mit
   Stufen-Gruppen).
3. **Ein CTA-System**: „Anfragen"/Kontakt als primäre Aktion, konsistent auf jeder Seite;
   das tote WordPress-Formular („Your Name / Last Name") ist durch direkte Wege ersetzt
   (mailto mit vorbefülltem Betreff, Telefon).
4. **Tippfehler der Vorlage korrigiert**: „Branchen & Anwenungen" → Anwendungen,
   „Reparatursevice" → Reparaturservice, „herrvorragende" → hervorragende, „Zertfizierung" →
   Zertifizierung (nur Rechtschreibung, keine inhaltliche Änderung).
5. **Performance**: Die Vorlage lud ~177 Assets (Elementor/jQuery/4 Font-Familien).
   Die neue Seite: statisches HTML, eine Font-Familie (Poppins, selbst gehostet),
   Astro-optimierte Bilder (WebP, responsive), kein externes Tracking.
6. Historie: die Timeline-Grafik der Vorlage ist als Bild übernommen (auf Mobil horizontal
   scrollbar). Wenn gewünscht, bauen wir sie als echte HTML-Timeline nach — dann auch für
   Screenreader lesbar.

## Offene Punkte

- **Datenschutzerklärung fehlt** noch (Vorlage-Text ist WordPress-spezifisch; muss an die
  statische Technik angepasst werden wie bei den Schwesterprojekten).
- **AGB-PDF** liegt auf der Live-Domain (staudt-hydraulik.de/wp-content/…) — beim Livegang
  mit übernehmen und im Footer verlinken.
- Broschüre verlinkt auf Flipsnack (extern, wie Vorlage).
- EN-Version der Vorlage nicht übernommen.
- Kontaktformular: bewusst durch mailto/Telefon ersetzt (statische Seite). Wenn ein echtes
  Formular gewünscht ist: Formular-Dienst nachrüsten + Datenschutzerklärung erweitern.

## Technisch

- `npm run dev` lokal, `npm run build` → `dist/` (committet, direkt per FTP hochladbar).
- Slugs identisch zur Vorlage — die gebauten Seiten können ihre WP-Pendants 1:1 ersetzen.
- Farben aus dem Elementor-CSS der Vorlage: #0F5BA3, #264152, #1863DC, #F3F5F7.
  Kontraste berechnet, alle Textpaare ≥ 4.5:1.
