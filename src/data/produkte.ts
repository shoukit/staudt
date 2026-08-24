/**
 * Alle Produkt-Detailseiten. Beschreibungen und technische Daten sind
 * WÖRTLICH 1:1 von der Vorlage übernommen (inkl. Eigenheiten wie
 * „Püfzylinder", „Zugkraft: 775 kg" oder XX-Platzhaltern — siehe
 * docs/uebergabe.md). Hier nichts umformulieren, nichts runden.
 */

export type Produkt = {
  slug: string;
  nr: string;
  navTitel: string;
  kategorie: string;
  titel: string;
  untertitel?: string;
  absaetze?: readonly string[];
  hinweis?: string;
  grafik: string;
  /** true = dunkle Linien → helles Zeichnungs-Band statt schwarzem */
  grafikHell?: boolean;
  grafikAlt: string;
  foto: string;
  fotoAlt: string;
  daten: readonly (readonly { label: string; wert: string }[])[];
  datenGruppen?: readonly string[];
};

export const produkte: readonly Produkt[] = [
  {
    slug: '01-einfachwirkende-hydraulikzylinder',
    nr: '01',
    navTitel: 'Einfachwirkende Hydraulikzylinder',
    kategorie: 'Einfachwirkende Hydraulikzylinder',
    titel: 'Kurzhub-Plungerzylinder',
    untertitel: 'mit aufgeflanschtem Steuerblock zum Richten von Bandblechen',
    grafik: 'einfachwirkend-grafik',
    grafikAlt: 'Technische Zeichnung: Einfachwirkende Hydraulikzylinder',
    foto: 'kurzhub-plunger',
    fotoAlt: 'Kurzhub-Plungerzylinder mit aufgeflanschtem Steuerblock',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '180 mm' },
        { label: 'Hub', wert: '10 mm' },
        { label: 'Nenndruck', wert: '260 bar' },
        { label: 'Druckkraft', wert: '661,6 kN' },
        { label: 'Zylindergewicht', wert: '42 kg' },
      ],
    ],
  },
  {
    slug: 'gleichgangzylinder',
    nr: '02',
    navTitel: 'Gleichgangzylinder',
    kategorie: 'Gleichgangzylinder',
    titel: 'Hydraulikzylinder',
    untertitel:
      'mit durchgehender Kolbenstange und mechanischer Hubverstellung für Schäum- und Kaschieranlagen im Automotive-Bereich.',
    grafik: 'gleichgang-grafik',
    grafikAlt: 'Technische Zeichnung: Gleichgangzylinder',
    foto: 'gleichgang-750',
    fotoAlt: 'Gleichgangzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '140 mm' },
        { label: 'Stangendurchmesser', wert: '90 mm' },
        { label: 'Hub', wert: '370 – 400 mm einstellbar' },
        { label: 'Betriebsdruck', wert: '250 bar' },
        { label: 'Befestigung', wert: 'Rechteckflansch (Rahmenpressen)' },
        { label: 'Zylindergewicht', wert: '275 kg' },
      ],
    ],
  },
  {
    slug: '03-serienzylinder',
    nr: '03',
    navTitel: 'Serienzylinder',
    kategorie: 'Serienzylinder',
    titel: 'Hydraulikzylinder',
    untertitel:
      'Differentialzylinder zum schnellen Öffnen von Produktionspressen in der Armaturenindustrie.',
    grafik: 'serien-grafik',
    grafikAlt: 'Technische Zeichnung: Serienzylinder',
    foto: 'serien-750',
    fotoAlt: 'Serienzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '85 mm' },
        { label: 'Stangendurchmesser', wert: '35 mm' },
        { label: 'Hub', wert: '75 mm' },
        { label: 'Betriebsdruck', wert: '350 bar' },
        { label: 'Zylindergewicht', wert: '8,4 kg' },
      ],
    ],
  },
  {
    slug: '04-grosszylinder',
    nr: '04',
    navTitel: 'Großzylinder',
    kategorie: 'Großzylinder',
    titel: 'Doppeltwirkender Hydraulikzylinder',
    untertitel: 'zur Anwendung in der Kunststoffindustrie.',
    grafik: 'gross-grafik',
    grafikAlt: 'Technische Zeichnung: Doppeltwirkender Hydraulikzylinder',
    foto: 'gross-750',
    fotoAlt: 'Großzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '840 mm' },
        { label: 'Stangendurchmesser', wert: '340 mm' },
        { label: 'Hub', wert: '400 mm' },
        { label: 'Betriebsdruck', wert: '180 bar' },
        { label: 'Druckkraft', wert: '9091 kN' },
        { label: 'Zylindergewicht', wert: '20.000 kg' },
      ],
    ],
  },
  {
    slug: '05-kleinzylinder',
    nr: '05',
    navTitel: 'Kleinzylinder',
    kategorie: 'Kleinzylinder',
    titel: 'Doppeltwirkender Hydraulikzylinder',
    grafik: 'klein-grafik',
    grafikHell: true,
    grafikAlt: 'Technische Zeichnung: Kleinzylinder',
    foto: 'klein-750',
    fotoAlt: 'Kleinzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '20 mm' },
        { label: 'Stangendurchmesser', wert: '12 mm' },
        { label: 'Hub', wert: '40 mm' },
        { label: 'Betriebsdruck', wert: '250 bar' },
        { label: 'Druckkraft', wert: '7,9 kN' },
        { label: 'Zylindergewicht', wert: '997 g' },
      ],
    ],
  },
  {
    slug: '06-hohlkolbenzylinder',
    nr: '06',
    navTitel: 'Hohlkolbenzylinder',
    kategorie: 'Hohlkolbenzylinder',
    titel: 'Hydraulischer Hohlkolbenzylinder',
    untertitel:
      'mit durchgehender Kolbenstange in Servoausführung zur Düsenverstellung an kunststoffverarbeitenden Maschinen.',
    grafik: 'hohlkolben-grafik',
    grafikAlt: 'Technische Zeichnung: Hydraulischer Hohlkolbenzylinder',
    foto: 'hohlkolben-750',
    fotoAlt: 'Hohlkolbenzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '380 mm' },
        { label: 'Stangendurchmesser', wert: '300 / 220 mm' },
        { label: 'Hub', wert: '40 mm' },
        { label: 'Betriebsdruck', wert: '210 bar' },
        { label: 'Zylindergewicht', wert: '574 kg' },
      ],
    ],
  },
  {
    slug: '07-norm-und-standard-zylinder',
    nr: '07',
    navTitel: 'Norm – und Standard Zylinder',
    kategorie: 'Norm - und Standard Zylinder',
    titel: 'Doppeltwirkender Hydraulikzylinder nach ISO 6022',
    hinweis:
      'Wir fertigen Norm- und Standardzylinder konform zu allen Regelwerken wie DIN, ISO, CETOP oder Stahl-Wasserbau-Normen. In allen Abmessungen und Hublängen sowie allen Befestigungsvarianten mit oder ohne Endlagendämpfung.',
    grafik: 'norm-grafik',
    grafikAlt: 'Technische Zeichnung: Norm- und Standardzylinder',
    foto: 'norm-750',
    fotoAlt: 'Norm- und Standardzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '100 mm' },
        { label: 'Stangendurchmesser', wert: '70 mm' },
        { label: 'Hub', wert: '900 mm' },
        { label: 'Nenndruck', wert: '250 bar' },
        {
          label: 'Befestigung',
          wert: 'Schwenkzapfen – Gelenkkopf mit beidseitiger einstellbarer Endlagendämpfung und Überströmventil',
        },
      ],
    ],
  },
  {
    slug: '08-teleskopzylinder',
    nr: '08',
    navTitel: 'Teleskopzylinder',
    kategorie: 'Teleskopzylinder',
    titel: '3-stufiger, doppeltwirkender Teleskopzylinder',
    untertitel: 'zum Heben und Senken einer Fördervorrichtung.',
    grafik: 'teleskop-grafik',
    grafikAlt: 'Technische Zeichnung: 3-stufiger, doppeltwirkender Teleskopzylinder',
    foto: 'teleskopzylinder',
    fotoAlt: 'Teleskopzylinder',
    datenGruppen: ['Stufe 1', 'Stufe 2', 'Stufe 3', 'Gesamt'],
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '270 mm' },
        { label: 'Stangendurchmesser', wert: '160 mm' },
        { label: 'Hub', wert: '82 mm' },
      ],
      [
        { label: 'Kolbendurchmesser', wert: '125 mm' },
        { label: 'Stangendurchmesser', wert: '110 mm' },
        { label: 'Hub', wert: '96 mm' },
      ],
      [
        { label: 'Kolbendurchmesser', wert: '80 mm' },
        { label: 'Stangendurchmesser', wert: '70 mm' },
        { label: 'Hub', wert: '92 mm' },
      ],
      [
        { label: 'Gesamthub', wert: '270 mm' },
        { label: 'Druckkraft', wert: '50 kN' },
        { label: 'Betriebsdruck', wert: '100 bar' },
        { label: 'Befestigung', wert: 'Bodenflansch' },
      ],
    ],
  },
  {
    slug: '09-hydraulikzylinder-nach-atex',
    nr: '09',
    navTitel: 'Hydraulikzylinder nach Atex',
    kategorie: 'Hydraulikzylinder nach Atex',
    titel: 'Hydraulikzylinder nach Atex',
    absaetze: [
      'ATEX steht seit gut 20 Jahren für Europäische Richtlinien zum Explosionsschutz. Explosionsschutz ist ein wesentlicher Aspekt bei der Sicherheit von Maschinen und Geräten. Die nach der ATEX Richtlinie 94 / 9 / EG der Europäischen Union hergestellten Hydraulikzylinder haben die Zulassung in explosionsfähigen Atmosphären oder Bereichen zu arbeiten.',
      'Staudt-Hydraulik hat die Befähigung Hydraulikzylinder nach dieser ATEX Richtlinie herzustellen.',
    ],
    grafik: 'atex-grafik',
    grafikAlt: 'Technische Zeichnung: Hydraulikzylinder nach Atex',
    foto: 'atex-750',
    fotoAlt: 'Hydraulikzylinder nach Atex',
    daten: [],
  },
  {
    slug: '10-kaskadenzylinder',
    nr: '10',
    navTitel: 'Kaskadenzylinder',
    kategorie: 'Kaskadenzylinder',
    titel: 'Kaskadenzylinder',
    untertitel:
      'Hydraulikzylinder mit Doppelkolbenanordnung zum Generieren hoher Zugkräfte, für den Einsatz als Verriegelungszylinder in Montagepressen.',
    grafik: 'kaskaden-grafik',
    grafikAlt: 'Technische Zeichnung: Kaskadenzylinder',
    foto: 'kaskaden-750',
    fotoAlt: 'Kaskadenzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '410 / 410 mm' },
        { label: 'Stangendurchmesser', wert: '200 / 180 mm' },
        { label: 'Hub', wert: '132 mm' },
        { label: 'Betriebsdruck', wert: '290 bar' },
        { label: 'Zugkraft', wert: '6000 kN' },
      ],
    ],
  },
  {
    slug: 'sonderzylinder',
    nr: '11',
    navTitel: 'Sonderzylinder',
    kategorie: 'Sonderzylinder',
    titel: 'Gleichgangzylinder in Servoausführung',
    untertitel: 'mit aufgeflanschtem Steuerblock zum Richten von Bandblechen',
    grafik: 'sonder-grafik',
    grafikAlt: 'Technische Zeichnung: Sonderzylinder',
    foto: 'sonder-750',
    fotoAlt: 'Sonderzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '300 mm' },
        { label: 'Stangendurchmesser', wert: '130 mm' },
        { label: 'Hub', wert: '110 mm' },
        { label: 'Betriebsdruck', wert: '210 bar' },
        { label: 'Zugkraft', wert: '775 kg' },
      ],
    ],
  },
  {
    slug: '12-hydraulikzylinder-aus-edelstahl',
    nr: '12',
    navTitel: 'Hydraulikzylinder aus Edelstahl',
    kategorie: 'Hydraulikzylinder aus Edelstahl',
    titel: 'Hydraulikzylinder aus Edelstahl',
    untertitel:
      'Differentialzylinder in Rechts- und Linksausführung, komplett rostfrei, mit verdrehgesicherter Kolbenstange, beidseitiger einstellbarer Endlagendämpfung und gelenkigem Fächerlotschwinger für die Profilquerschnittsvermessung von Wasserstrassen.',
    grafik: 'edelstahl-grafik',
    grafikAlt: 'Technische Zeichnung: Hydraulikzylinder aus Edelstahl',
    foto: 'edelstahl-750',
    fotoAlt: 'Hydraulikzylinder aus Edelstahl',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '150 mm' },
        { label: 'Stangendurchmesser', wert: '125 mm' },
        { label: 'Hub', wert: '850 mm' },
        { label: 'Betriebsdruck', wert: '50 bar' },
        { label: 'Zylindergewicht', wert: '468 kg' },
      ],
    ],
  },
  {
    slug: '13-elektro-hydraulische-einheiten',
    nr: '13',
    navTitel: 'Elektro-hydraulische Einheiten',
    kategorie: 'Elektro-hydraulische Einheiten',
    titel: 'Kurzhub-Plungerzylinder',
    untertitel:
      'Elektro-Hydraulische-Kompakteinheit für den Einsatz in explosionssicheren Umgebungen (ATEX) in der Petro-Chemie. Die Elektro-Hydraulische -Einheit bietet eine kompakte, Plug & Play Lösung, die Antrieb, Steuerung, Aktuator sowie entsprechende Messtechnik vereint.',
    grafik: 'elektro-grafik',
    grafikHell: true,
    grafikAlt: 'Technische Zeichnung: Elektro-hydraulische Einheit',
    foto: 'elektro-750',
    fotoAlt: 'Elektro-hydraulische Einheit',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '150 mm' },
        { label: 'Stangendurchmesser', wert: '80 mm' },
        { label: 'Hub', wert: '1430 mm' },
        { label: 'Betriebsdruck', wert: '250 bar' },
        { label: 'Zylindergewicht', wert: '1060 kg' },
      ],
    ],
  },
  {
    slug: '14-pruefzylinder',
    nr: '14',
    navTitel: 'Prüfzylinder',
    kategorie: 'Prüfzylinder',
    titel: 'Püfzylinder mit Membranspeicher',
    untertitel:
      'In reibungsarmer Ausführung, mit integriertem Wegmesssystem sowie aufgebautem Steuerblock für ein Servo-/Proportionalventil. Die Kolbenstange verfügt darüber hinaus über eine spezielle Aufnahme für Dehnmessstreifen.',
    grafik: 'pruef-grafik',
    grafikHell: true,
    grafikAlt: 'Technische Zeichnung: Prüfzylinder mit Membranspeicher',
    foto: 'pruef-750',
    fotoAlt: 'Prüfzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '150 mm' },
        { label: 'Stangendurchmesser', wert: '80 mm' },
        { label: 'Hub', wert: '400 mm' },
        { label: 'Betriebsdruck', wert: '325 bar' },
        { label: 'Zylindergewicht', wert: '178,7 kg' },
        { label: 'Dichtungssystem', wert: 'reibungsarm' },
      ],
    ],
  },
  {
    slug: '16-pneumatikzylinder',
    nr: '16',
    navTitel: 'Pneumatikzylinder',
    kategorie: 'Pneumatikzylinder',
    titel: 'Pneumatikzylinder',
    untertitel: 'Beschreibung',
    grafik: 'pneumatik-grafik',
    grafikAlt: 'Technische Zeichnung: Pneumatikzylinder (Platzhalter)',
    foto: 'pneumatik-750',
    fotoAlt: 'Pneumatikzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: 'XX mm' },
        { label: 'Hub', wert: '1XX mm' },
        { label: 'Nenndruck', wert: 'XX bar' },
        { label: 'Druckkraft', wert: 'XX kN' },
        { label: 'Zylindergewicht', wert: 'XX kg' },
      ],
    ],
  },
  {
    slug: '17-zugankerzylinder',
    nr: '17',
    navTitel: 'Zugankerzylinder',
    kategorie: 'Zugankerzylinder',
    titel: 'Zugankerzylinder',
    untertitel: 'Platzhalter',
    grafik: 'zuganker-grafik',
    grafikHell: true,
    grafikAlt: 'Technische Zeichnung: Zugankerzylinder',
    foto: 'zuganker-750',
    fotoAlt: 'Zugankerzylinder',
    daten: [
      [
        { label: 'Kolbendurchmesser', wert: '80 mm' },
        { label: 'Stangendurchmesser', wert: '45 mm' },
        { label: 'Hub', wert: '400 mm' },
        { label: 'Betriebsdruck', wert: '260 bar' },
        { label: 'Dichtungssystem', wert: 'Standard' },
      ],
    ],
  },
] as const;

/** Eintrag 15 der Vorlagen-Navigation — Zielseite ist dort ein 404. */
export const fehlendeProdukte = [{ nr: '15', titel: 'Eilgangszylinder' }] as const;
