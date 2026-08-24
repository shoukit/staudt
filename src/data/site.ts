/**
 * Single source of truth. Alle Texte 1:1 von der Vorlage
 * (wordpress-1074446-6581904.cloudwaysapps.com), Tippfehler korrigiert.
 */

export const site = {
  name: 'Staudt Hydraulik',
  legalName: 'Staudt-Hydraulik GmbH & Co. KG',
  claim: 'Spezialist für Hydraulikzylinder',
  url: 'https://staudt-hydraulik.de',
  locale: 'de_DE',
} as const;

export const contact = {
  street: 'Ottostraße 8',
  postalCode: '52511',
  city: 'Geilenkirchen',
  country: 'DE',
  phone: '02451 8037',
  phoneIntl: '+49 2451 8037',
  phoneHref: 'tel:+4924518037',
  fax: '02451 66679',
  email: 'info@staudt-hydraulik.de',
  emailHref: 'mailto:info@staudt-hydraulik.de',
} as const;

export const nav = [
  { href: '/', label: 'Start' },
  { href: '/wir-ueber-uns-2/', label: 'Wir über uns' },
  { href: '/hydraulikzylinder/', label: 'Hydraulikzylinder' },
  { href: '/branchen-referenzen/', label: 'Branchen & Referenzen' },
  { href: '/services/', label: 'Services' },
  { href: '/karriere/', label: 'Karriere' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const;

/** Startseite — Vorteile („Vertrauen & Qualität"). */
export const vorteile = [
  {
    titel: 'Experten',
    text: 'Familiengeführt in 3. Generation und seit 1978 Spezialist für Hydraulikzylinder',
    icon: 'icon-experten',
  },
  {
    titel: 'Präzision',
    text: 'Ob Serie oder 100 % Sonderanfertigung. Jeder Hydraulikzylinder nach Ihren Vorgaben',
    icon: 'icon-praezision',
  },
  {
    titel: 'Zertifizierung',
    text: 'Seit 2001 DIN EN ISO 9001:2015, seit 2019 nach EN ISO 3834-3',
    icon: 'icon-zertifizierung',
  },
  {
    titel: 'Qualität',
    text: 'Seit 1959 Entwicklung, Fertigung, Montage & Prüfung in Deutschland',
    icon: 'icon-qualitaet',
  },
] as const;

export const hero = {
  h1: 'Perfektion und Langlebigkeit',
  sub: 'Ihr Spezialist für Sonder- und Serienfertigung – von der Beratung bis zur Auslieferung.',
} as const;

export const ueberBand = {
  eyebrow: 'Über Staudt Hydraulik',
  titel: 'Fertigungstiefe trifft Ingenieurskunst',
  headline: 'CNC-Fertigung · Montage · Prüfung – alles aus einer Hand',
  text: 'Seit 1978 entwickeln und fertigen wir Hydraulikzylinder am Standort Deutschland. Von der Rohmaterialbearbeitung über CNC-Fertigung bis zur Endmontage und Prüfung – alles aus einer Hand. Unsere Kunden schätzen die Kombination aus technischer Kompetenz, Flexibilität und Zuverlässigkeit.',
} as const;

export const leistungen = [
  {
    titel: 'Serienfertigung',
    text: 'Effiziente Produktion mittlerer und großer Serien mit gleichbleibender Qualität.',
    foto: 'zylinderteile',
    fotoAlt: 'Präzise gefertigte Zylinderbauteile aus der Serienfertigung',
    href: '/01-einfachwirkende-hydraulikzylinder/',
  },
  {
    titel: 'Sonderlösungen',
    text: 'Individuelle Konstruktionen für besondere Einbausituationen, spezielle Drücke und Umgebungen.',
    foto: 'teleskopzylinder',
    fotoAlt: 'Mehrstufiger Teleskopzylinder als Sonderlösung',
    href: '/08-teleskopzylinder/',
  },
  {
    titel: 'Hydraulikzylinder',
    text: 'Doppelt- und einfachwirkende Zylinder in allen Baugrößen – nach Norm oder kundenspezifisch.',
    foto: 'kurzhub-plunger',
    fotoAlt: 'Kurzhub-Plungerzylinder',
    href: '/01-einfachwirkende-hydraulikzylinder/',
  },
] as const;

export const branchen = {
  eyebrow: 'Umfangreiches Know-how',
  titel: 'Branchen & Anwendungen',
  headline: 'Anspruchsvolle Hydraulikzylinder',
  text: 'Namhafte Unternehmen mit ihren unterschiedlichsten Anforderungen gehören seit langer Zeit zu unseren Kunden. Kein Einsatzgebiet und kein atmosphärischer Bereich sind uns fremd, keine Stückzahl zu klein oder groß und kein rotationssymmetrischer Zylinder zu lang oder schwer. Hier ein Auszug aus den unterschiedlichsten Branchen, die wir mit präzisen und oft komplizierten Hydraulikzylindern für die unterschiedlichsten Kunden bedienen:',
  liste: [
    'Fahrzeugbau',
    'Zulieferindustrie',
    'Maschinenbau',
    'chemisch-pharmazeutische Industrie',
    'Elektronikbranche',
    'Stahlwasserbau',
    'Windenergie On- oder Offshore',
    'Kernkraftanlagen',
    'Lebensmittelindustrie',
    'Bauindustrie',
    'Möbelindustrie',
    'Gesundheitswirtschaft etc.',
  ],
} as const;

export const services = [
  {
    titel: 'Reparaturservice',
    text: 'Umfassender Reparaturservice für Standardzylinder und Sonderzylinder aller Fabrikate.',
    icon: 'icon-reparatur',
  },
  {
    titel: 'Ersatzteil-Archiv',
    text: 'Durch ein hervorragend organisiertes und gepflegtes Archiv können wir rückwirkend alle Ersatzteile bereitstellen.',
    icon: 'icon-archiv',
  },
  {
    titel: 'Neukonstruktion',
    text: 'Gerne setzen wir auch die Modifizierung und Optimierung Ihrer Hydraulikzylinder um.',
    icon: 'icon-neukonstruktion',
  },
  {
    titel: 'Abhol- und Anlieferservice',
    text: 'Integrierter Abhol- und Anlieferservice, um die Durchlaufzeiten im Reparaturfall möglichst kurz zu halten.',
    icon: 'icon-lieferservice',
  },
] as const;

export const broschuere = {
  titel: 'Unsere Broschüre',
  text: 'Blättern Sie durch unsere Broschüre und informieren Sie sich über hervorragende Ingenieurskunst seit 1959.',
} as const;

export const kontaktBand = {
  titel: 'Sprechen Sie mit uns',
  text: 'Sie haben ein Projekt oder eine technische Anfrage? Unser Team freut sich auf Ihre Nachricht.',
} as const;

/** Branchen & Referenzen (eigene Seite), 1:1 übernommen. */
export const branchenReferenzen = {
  h1: 'Branchen & Referenzen',
  intro:
    'Namhafte Unternehmen mit ihren unterschiedlichsten Anforderungen gehören seit langer Zeit zu unseren Kunden. Kein Einsatzgebiet und kein atmosphärischer Bereich sind uns fremd, keine Stückzahl zu klein oder groß und kein rotationssymmetrisches Zylinder zu lang oder schwer. Hier ein Auszug aus den unterschiedlichsten Branchen, die wir mit präzisen und oft komplizierten Hydraulikzylindern für die unterschiedlichsten Kunden bedienen:',
  kacheln: [
    { titel: 'Photovoltaik', bild: 'branche-photovoltaik' },
    { titel: 'On- & Offshore', bild: 'branche-offshore' },
    { titel: 'Wasserkraft', bild: 'branche-wasserkraft' },
    { titel: 'Pressen', bild: 'branche-pressen' },
    { titel: 'Arbeitsbühnen', bild: 'branche-arbeitsbuehnen' },
  ],
} as const;

/** Services-Seite, 1:1 übernommen. */
export const servicesSeite = {
  h1: 'Maschinelle Präzision und umfangreiches Know-how ermöglicht vieles.',
  eyebrow: 'Unsere Services',
  reparatur: {
    titel: 'Reparaturservice',
    text: 'Umfassender Reparaturservice für Standardzylinder und Sonderzylinder aller Fabrikate. Sonderzylinder und Standardzylinder auf höchstem Niveau.',
  },
  weitere: [
    {
      titel: 'Gepflegtes Ersatzteile-Archiv',
      text: 'Durch ein hervorragend organisiertes und gepflegtes Archiv können wir rückwirkend alle Ersatzteile bereitstellen.',
      icon: 'icon-archiv',
    },
    {
      titel: 'Neukonstruktion',
      text: 'Gerne setzen wir auch die Modifizierung und Optimierung Ihrer Hydraulikzylinder um.',
      icon: 'icon-neukonstruktion',
    },
    {
      titel: 'Abhol- und Anlieferservice',
      text: 'Integrierter Abhol- und Anlieferservice, um die Durchlaufzeiten im Reparaturfall möglichst kurz zu halten.',
      icon: 'icon-lieferservice',
    },
  ],
} as const;

/** Karriere-Seite, 1:1 übernommen. */
export const karriere = {
  h1: 'Wir suchen',
  stellen: [
    'Zerspanungsmechaniker/in: Fachrichtung Drehtechnik m/w/d',
    'Industriemechaniker/in m/w/d',
    'Betriebshelfer/in und Fahrer/in m/w/d',
    'Lager- und Logistikmitarbeiter/in m/w/d',
    'Schweißfachkraft m/w/d',
    'Initiativbewerber',
  ],
  bietenTitel: 'Was wir bieten',
  bietenIntro:
    'Wir bieten Ihnen ein attraktives Arbeitsumfeld in einem technisch anspruchsvollen Gebiet und leistungsgerechte Vergütung.',
  bieten: [
    'Einen sicheren Arbeitsplatz mit Zukunftsperspektive',
    'Moderner Maschinenpark',
    'Offene Unternehmenskultur und flache Hierarchien',
    'Leistungsgerechtes Einkommen',
    'Urlaubs- & Weihnachtsgeld',
    'Stetige Aus- und Weiterbildungsmöglichkeiten',
    'Bei gesteigertem Interesse an der Durchführung von Schweißarbeiten, übernehmen wir die Ausbildung zum geprüften Schweißfacharbeiter',
    'Firmenevents und Veranstaltungen',
    '30 Tage Urlaub',
  ],
  abschluss: [
    'Zögern Sie nicht uns Ihre Bewerbung zukommen zu lassen.',
    'Vertraulichkeit ist für uns selbstverständlich.',
    'Nichts passendes dabei? Bewerben Sie sich initiativ!',
  ],
  ausbildungTitel: 'Ausbildung',
  ausbildung: [
    'Auszubildende/r zum Zerspanungsmechaniker/in m/w/d',
    'Auszubildende/r zum Feinwerkmechaniker/in m/w/d',
  ],
} as const;

/** Kontakt-Seite: Ansprechpartner 1:1 (inkl. der E-Mail-Angaben der Vorlage —
 *  Cohnen steht dort mit thomas.staudt@…, siehe docs/uebergabe.md). */
export const ansprechpartner = [
  {
    name: 'Thomas Staudt B. Eng.',
    rollen: ['Geschäftsführender Gesellschafter', 'Konstruktionsleiter'],
    email: 'thomas.staudt@staudt-hydraulik.de',
    foto: 'team-staudt',
  },
  {
    name: 'Heinz-Josef Cohnen',
    rollen: ['Technischer Geschäftsführer', 'Vertrieb'],
    email: 'thomas.staudt@staudt-hydraulik.de',
    foto: 'team-cohnen',
  },
  {
    name: 'Carsten Steigenberger',
    rollen: ['Auftragsmanagement', 'Einkauf'],
    email: 'steigenberger@staudt-hydraulik.de',
    foto: 'team-steigenberger',
  },
  {
    name: 'Sascha Benzing',
    rollen: ['Konstruktion'],
    email: 'benzing@staudt-hydraulik.de',
    foto: 'team-benzing',
  },
] as const;

export const kontaktSeite = {
  intro:
    'Staudt-Hydraulik ist Ihr kompetenter Ansprechpartner rund um das Thema Hydraulikzylinder. Besonders wichtig ist uns die Zufriedenheit unserer Kunden. Wir stellen nicht nur den höchsten Anspruch an die Qualität unserer Fabrikate, sondern auch an unseren Service. Aus diesem Grund betrachten wir eine umfassende und ganzheitliche Beratung unserer Kunden als Selbstverständlichkeit. Dies gilt auch für eine detaillierte Dokumentation unserer Aufträge. Zusatzleistungen wie Lackierung, Konservierung, Verpackung und Frachtlogistik runden unseren Service ab.',
  zylindertypen: [
    'Standardzylinder',
    'Sonderkonstruktion',
    'Teleskopzylinder',
    'Hohlkolbenzylinder',
    'Gleichgangszylinder',
    'ATEX-Zylinder',
    'Edelstahlzylinder',
    'Elektro-hydraulische Einheit',
    'Ich bin noch unsicher',
  ],
} as const;

/** Wir über uns, 1:1 übernommen. */
export const ueberUns = {
  h1: 'Wer wir sind',
  intro: [
    'Wir, die Staudt-Hydraulik GmbH & Co. KG, sind ein familiengeführtes Spezialunternehmen für Hydraulikzylinder mit Sitz in Geilenkirchen, Nordrhein-Westfalen.',
    'Im Mittelpunkt unserer Arbeit steht die Begeisterung für Technik und die Zufriedenheit unserer Kunden. Diese Triebkraft kombinieren wir mit stetiger Weiterentwicklung und innovativen Lösungen. Wir produzieren seit Jahrzehnten Sonderzylinder und Standardzylinder auf höchstem Niveau.',
  ],
  entwicklung: {
    titel: 'Entwicklung und Konstruktion',
    absaetze: [
      'Neben der Herstellung von Standardzylindern liegt unsere Kernkompetenz vor allem im Bereich Sonderkonstruktionen. Dabei begleiten wir Sie von der Ideenfindung bis hin zum fertigen Produkt zu einem hervorragenden Preis-Leistungsverhältnis. Durch unsere hohe Fachkompetenz, Fertigungstiefe und modernen Betriebseinrichtungen sind wir in der Lage, Hydraulikzylinder bis zu einem Stückgewicht von 20 Tonnen anzubieten.',
      'Nicht nur unsere modernen Anlagen und hochqualifizierten Mitarbeiter verhelfen uns zu besonderen Produkten, auch die Zusammenarbeit mit langjährigen und ausgesuchten Lieferanten betrachten wir als eine wichtige Basis für herausragende, nachhaltige Produkte.',
    ],
  },
  nachMass: {
    titel: 'Hydraulikzylinder nach Maß',
    text: 'Unser technisches Büro befindet sich auf dem neuesten Stand der Technik. Auf modernsten CAD-Systemen unter Verwendung der FEM-Methode (Finite-Elemente-Methode) werden anspruchsvolle Konstruktionen für Hydraulikzylinder erstellt. Der Datenaustausch mit unseren Kunden erfolgt in allen gängigen Dateiformaten, sowohl im 2D- als auch im 3D-Bereich.',
  },
} as const;
