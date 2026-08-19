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
  /** Konstrukcijski crteži — po jedan za svaku fazu anatomije znaka. */
  anatomijaPolja: {
    src: "/projects/sapolja/anatomija-polja.jpg",
    w: 453,
    h: 579,
    alt: "Konstrukcija motiva polja — zakrivljene brazde upisane u geometrijsku mrežu",
  },
  anatomijaKorpa: {
    src: "/projects/sapolja/anatomija-korpa.jpg",
    w: 481,
    h: 500,
    alt: "Konstrukcija korpe — vanjski oblik sa drškom koji obuhvata polja i plod",
  },
  anatomijaPlod: {
    src: "/projects/sapolja/anatomija-plod.jpg",
    w: 840,
    h: 1076,
    alt: "Konstrukcija ploda — jabuka sa listom upisana u geometrijsku mrežu",
  },
  letakLice: {
    src: "/projects/sapolja/letak-lice.png",
    w: 887,
    h: 1246,
    alt: "Lice letka: znak, logotip, slogan i motiv polja pri dnu",
  },
  letakNalicje: {
    src: "/projects/sapolja/letak-nalicje.png",
    w: 735,
    h: 1034,
    alt: "Naličje letka: tekst o platformi, način rada i gravirane ilustracije proizvoda",
  },
  ilustracije: {
    src: "/projects/sapolja/ilustracije.png",
    w: 1500,
    h: 434,
    alt: "Gravirane ilustracije bundeve, bijelog luka, trešanja, paradajza i tegle",
  },
  oznaka: {
    src: "/projects/sapolja/oznaka.jpg",
    w: 160,
    h: 112,
    alt: "Okrugli pečat sa natpisom Od polja do vas",
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
