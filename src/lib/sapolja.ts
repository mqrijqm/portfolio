/**
 * SaPolja — paleta i registar medija na jednom mestu.
 *
 * BOJE: uzorkovane iz dostavljenih materijala (app ikone, znak sa letka,
 * signage pečat). Rasterski izvori su male rezolucije, pa su vrednosti
 * približne — ako dobiješ tačne HEX-ove iz brand fajlova, promeni ih ovde
 * i cela stranica se povinuje.
 */
export const SP = {
  /** podloga svih dostavljenih vizuala — slike se stapaju sa stranicom */
  cream: "#f7efe4",
  /** duboka zelena: app ikona „Dark", signage pečat */
  field: "#153b25",
  /** zelena znaka na letku */
  moss: "#3e5c40",
  /** app ikona „Muted Green" */
  muted: "#6e8a68",
  /** app ikona „Sand" */
  sand: "#f1e7dd",
  /** narandžasti akcent — jabuka u znaku */
  clay: "#b9542a",
} as const;

type Medij = {
  src: string;
  w: number;
  h: number;
  alt: string;
};

/**
 * Dimenzije su upisane da bi next/image rezervisao prostor
 * i sprečio poskakivanje sadržaja pri učitavanju.
 */
export const M = {
  polje: {
    src: "/projects/sapolja/polje-korpa.jpg",
    w: 1600,
    h: 1069,
    alt: "Dvije žene sa korpom hodaju kroz livadu, kadar uokviren drškom pletene korpe u prvom planu",
  },
  piknik: {
    src: "/projects/sapolja/piknik.jpg",
    w: 1400,
    h: 936,
    alt: "Piknik na livadi: korpe sa paradajzom, zelenišem, voćem i teglom meda",
  },
  detalj: {
    src: "/projects/sapolja/detalj-plodovi.jpg",
    w: 1400,
    h: 936,
    alt: "Detalj iz korpe — jabuke, grožđe, paradajz i tegla meda na kariranom stolnjaku",
  },
  znakTrava: {
    src: "/projects/sapolja/znak-trava.jpg",
    w: 1400,
    h: 672,
    alt: "SaPolja znak i logotip u bijeloj boji preko fotografije trave",
  },
  znak: {
    src: "/projects/sapolja/znak.png",
    w: 950,
    h: 1140,
    alt: "SaPolja znak — pletena korpa u kojoj se linije polja spajaju oko ploda sa listom",
  },
  wordmark: {
    src: "/projects/sapolja/wordmark.png",
    w: 1200,
    h: 517,
    alt: "Logotip SaPolja sa sloganom Hrana našeg kraja",
  },
  linije: {
    src: "/projects/sapolja/linije-polja.png",
    w: 1500,
    h: 660,
    alt: "Grafički motiv zakrivljenih linija polja izveden iz znaka",
  },
  letakLice: {
    src: "/projects/sapolja/letak-lice.jpg",
    w: 1100,
    h: 1558,
    alt: "Lice letka: znak, logotip, slogan i motiv polja pri dnu",
  },
  letakNalicje: {
    src: "/projects/sapolja/letak-nalicje.jpg",
    w: 1100,
    h: 1558,
    alt: "Naličje letka: tekst o platformi, način rada i gravirane ilustracije proizvoda",
  },
  ilustracije: {
    src: "/projects/sapolja/ilustracije.png",
    w: 1500,
    h: 434,
    alt: "Gravirane ilustracije bundeve, bijelog luka, trešanja, paradajza i tegle",
  },
  digital: {
    src: "/projects/sapolja/digital.jpg",
    w: 433,
    h: 246,
    alt: "Prikaz SaPolja sajta na laptopu i telefonu",
  },
  pakovanje: {
    src: "/projects/sapolja/pakovanje.jpg",
    w: 314,
    h: 246,
    alt: "Kraft papirna kesa i viseća etiketa sa SaPolja znakom",
  },
  oznaka: {
    src: "/projects/sapolja/oznaka.jpg",
    w: 160,
    h: 112,
    alt: "Okrugli pečat sa natpisom Od polja do vas",
  },
  signage: {
    src: "/projects/sapolja/signage.jpg",
    w: 235,
    h: 122,
    alt: "Okrugla zidna oznaka mjesta za preuzimanje sa SaPolja znakom",
  },
  gajba: {
    src: "/projects/sapolja/gajba.jpg",
    w: 320,
    h: 118,
    alt: "Drvena gajba puna paradajza sa utisnutim SaPolja znakom",
  },
  nosac: {
    src: "/projects/sapolja/nosac.jpg",
    w: 230,
    h: 98,
    alt: "Drveni nosač sa staklenim flašama mlijeka i SaPolja znakom",
  },
  ikone: {
    src: "/projects/sapolja/ikone.png",
    w: 344,
    h: 92,
    alt: "Sistem ikona: svježe, provjereno, lokalno, više farmera, brzo, preuzimanje u naselju",
  },
  pattern: {
    src: "/projects/sapolja/pattern.jpg",
    w: 168,
    h: 88,
    alt: "Pattern od ponovljenog SaPolja znaka",
  },
  appIkone: {
    src: "/projects/sapolja/app-ikone.jpg",
    w: 424,
    h: 112,
    alt: "Ikona aplikacije u četiri varijante: svijetla, tamna, prigušena zelena i pješčana",
  },
} satisfies Record<string, Medij>;
