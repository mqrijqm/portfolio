import type { SuitName } from "@/components/wonderland/Suits";

/**
 * Špil stranica. Jedno mesto istine za navigaciju, redosled
 * i „poglavlja" — koristi se u navbaru, na naslovnoj i u podnožju.
 */
export type PageInfo = {
  href: string;
  /** puno ime u meniju */
  label: string;
  /** skraćeno ime za telefone */
  short: string;
  suit: SuitName;
  rank: string;
  chapter: string;
  title: string;
  /** citat u duhu knjige */
  quote: string;
  /** ko to kaže */
  quoteBy: string;
  /** kratak opis na karti na naslovnoj */
  note: string;
};

export const PAGES: PageInfo[] = [
  {
    href: "/ko-sam-ja",
    label: "KO SAM JA",
    short: "KO SAM",
    suit: "herc",
    rank: "A",
    chapter: "POGLAVLJE I",
    title: "KO SAM JA",
    quote: "Ko si ti? Jedva da znam, gospodine — bar za sada.",
    quoteBy: "Gusenica i Alisa",
    note: "Odakle sve ovo. Makaze, magazini i jedno detinjstvo.",
  },
  {
    href: "/graficki-dizajn",
    label: "GRAFIČKI DIZAJN",
    short: "GRAFIKA",
    suit: "pik",
    rank: "K",
    chapter: "POGLAVLJE II",
    title: "GRAFIČKI DIZAJN",
    quote: "Farbamo bele ruže u crveno. Trebalo je odmah posaditi crvene.",
    quoteBy: "Vrtlari Kraljice",
    note: "Identiteti, plakati, prelom, pakovanje.",
  },
  {
    href: "/web-dizajn",
    label: "WEB DIZAJN",
    short: "WEB",
    suit: "karo",
    rank: "Q",
    chapter: "POGLAVLJE III",
    title: "WEB DIZAJN",
    quote: "Ovde moraš da trčiš koliko god možeš da bi ostala u mestu.",
    quoteBy: "Crvena Kraljica",
    note: "Sajtovi koji imaju svoje vreme i svoju težinu.",
  },
  {
    href: "/moj-dizajn",
    label: "MOJ DIZAJN",
    short: "DIZAJN",
    suit: "tref",
    rank: "J",
    chapter: "POGLAVLJE IV",
    title: "MOJ DIZAJN",
    quote: "Počni od početka, idi do kraja, pa stani.",
    quoteBy: "Kralj",
    note: "Pet stvari u koje verujem i četiri koje radim.",
  },
  {
    href: "/kontakt",
    label: "KONTAKT",
    short: "KONTAKT",
    suit: "herc",
    rank: "10",
    chapter: "POGLAVLJE V",
    title: "KONTAKT",
    quote: "Trebao joj je samo ključ. I vrata koja mu odgovaraju.",
    quoteBy: "iz knjige",
    note: "Vrata su otključana. Pokucaj.",
  },
];

export function getPage(href: string): PageInfo | undefined {
  return PAGES.find((p) => p.href === href);
}

/** Prethodna i sledeća karta u špilu — za listanje na dnu stranice. */
export function neighbours(href: string) {
  const i = PAGES.findIndex((p) => p.href === href);
  return {
    prev: i > 0 ? PAGES[i - 1] : undefined,
    next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : undefined,
  };
}
