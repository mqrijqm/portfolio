import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * SaPolja — brend slučaj (/sapolja).
 *
 * Modul se čita samo sa servera (koristi fs da provjeri da li fajl postoji),
 * pa ga ne uvoziti iz "use client" komponenti.
 */

/* ------------------------------------------------------------------ boje */

export const BOJE = {
  green: "#0E2E23",
  cream: "#F2EBD8",
  terracotta: "#B9542A",
  white: "#FFFFFF",
} as const;

export type Boja = keyof typeof BOJE;

function kanali(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function uRgb(hex: string): string {
  return `RGB ${kanali(hex).join(" ")}`;
}

/**
 * Prosta RGB→CMYK konverzija, bez profila boja — dovoljna za brend list.
 * Računa se iz istog HEX-a koji ide u CSS, pa vrijednosti ne mogu odlutati.
 */
export function uCmyk(hex: string): string {
  const [r, g, b] = kanali(hex).map((v) => v / 255);
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return "CMYK 0 0 0 100";
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);
  const p = (v: number) => Math.round(v * 100);
  return `CMYK ${p(c)} ${p(m)} ${p(y)} ${p(k)}`;
}

/* ---------------------------------------------------------------- medija */

export type Medij = {
  /** Putanja koju koristi <Image>; prazna ako fajl nedostaje. */
  src: string;
  /** Izvorno ime — ispisuje se na placeholderu kad fajl nedostaje. */
  original: string;
  w: number;
  h: number;
  alt: string;
  /** false → renderuje se sivi placeholder umjesto slike */
  postoji: boolean;
};

const JAVNI = join(process.cwd(), "public");

function medij(
  derived: string,
  original: string,
  w: number,
  h: number,
  alt: string,
): Medij {
  const src = `/sapolja/derived/${derived}`;
  return { src, original, w, h, alt, postoji: existsSync(join(JAVNI, src)) };
}

export const A = {
  skice: medij(
    "skice.png",
    "ChatGPT_Image_17__авг_2026__12_47_44.png",
    1024,
    1163,
    "Otvorena skicenblok sveska sa ručno crtanim varijantama znaka",
  ),
  konstrukcija: medij(
    "konstrukcija.png",
    "ChatGPT_Image_17__авг_2026__14_00_43.png",
    620,
    650,
    "Konstrukcijska mreža znaka — elipse i lukovi kroz koje je znak izveden",
  ),
  sekvenca: medij(
    "sekvenca.png",
    "ChatGPT_Image_17__авг_2026__14_00_43.png",
    860,
    350,
    "Sekvenca 01–04: jabuka, brazde, brazde sa jabukom, gotova korpa",
  ),
  varPrimarni: medij(
    "var-primarni.png",
    "HHHH.png",
    736,
    736,
    "Primarna varijanta znaka — zelena marka na bijeloj podlozi",
  ),
  varNegativ: medij(
    "var-negativ.png",
    "ChatGPT_Image_17__авг_2026__21_24_27.png",
    1086,
    1430,
    "Negativ varijanta znaka — krem marka sa terakota plodom na tamnozelenoj podlozi",
  ),
  varFoto: medij(
    "var-foto.png",
    "hh.png",
    742,
    736,
    "Znak u bijeloj boji preko fotografije njive",
  ),
  foto: medij(
    "foto.jpg",
    "DSC07524_1.JPG",
    1616,
    1080,
    "Piknik na livadi — korpe sa povrćem, voćem i teglama",
  ),
  fotoRezerva: medij(
    "foto-fallback.png",
    "Group_14.png",
    742,
    736,
    "Tamna fotografija njive",
  ),
  gajba: medij(
    "mockup-gajba.png",
    "ChatGPT_Image_17__авг_2026__19_17_15__1__-_Copy.png",
    1390,
    1132,
    "Drvena gajba sa utisnutim SaPolja znakom",
  ),
  kesa: medij(
    "mockup-kesa.png",
    "ChatGPT_Image_17__авг_2026__19_17_16__2_.png",
    1195,
    1316,
    "Kraft kesa sa SaPolja znakom",
  ),
  traka: medij(
    "mockup-traka.png",
    "ChatGPT_Image_17__авг_2026__19_17_17__4_.png",
    1483,
    1061,
    "Papirna traka oko veze kelja sa SaPolja znakom",
  ),
  pattern: medij(
    "pattern.png",
    "ChatGPT_Image_17__авг_2026__16_06_07.png",
    1487,
    1058,
    "Pattern brazdi izveden iz znaka",
  ),
} satisfies Record<string, Medij>;

/** FOTO sekcija uzima DSC fotografiju ako postoji, inače Group_14. */
export const FOTO_POZADINA = A.foto.postoji ? A.foto : A.fotoRezerva;
