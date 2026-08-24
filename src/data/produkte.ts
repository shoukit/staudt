/**
 * Produkt-Detailseiten, Daten 1:1 von der Vorlage — nie erfinden oder runden.
 */

export type Produkt = {
  slug: string;
  navTitel: string;
  kategorie: string;
  titel: string;
  untertitel: string;
  grafik: string;
  grafikAlt: string;
  foto: string;
  fotoAlt: string;
  daten: readonly { label: string; wert: string }[][];
  datenGruppen?: readonly string[];
};

export const produkte: readonly Produkt[] = [
  {
    slug: '01-einfachwirkende-hydraulikzylinder',
    navTitel: 'Einfachwirkende Zylinder',
    kategorie: 'Einfachwirkende Hydraulikzylinder',
    titel: 'Kurzhub-Plungerzylinder',
    untertitel: 'mit aufgeflanschtem Steuerblock zum Richten von Bandblechen',
    grafik: 'einfachwirkend-grafik',
    grafikAlt: 'Technische Zeichnung: einfachwirkende Hydraulikzylinder',
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
    slug: '08-teleskopzylinder',
    navTitel: 'Teleskopzylinder',
    kategorie: 'Teleskopzylinder',
    titel: '3-stufiger, doppeltwirkender Teleskopzylinder',
    untertitel: 'zum Heben und Senken einer Fördervorrichtung',
    grafik: 'teleskop-grafik',
    grafikAlt: 'Technische Zeichnung: 3-stufiger, doppeltwirkender Teleskopzylinder',
    foto: 'teleskopzylinder',
    fotoAlt: 'Mehrstufiger Teleskopzylinder',
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
] as const;
