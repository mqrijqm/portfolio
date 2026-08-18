/**
 * Izvorni fajlovi za SaPolja slučaj imaju ćirilicu, razmake, plusove i zagrade
 * u imenima. Takva imena prolaze kroz Next, ali pucaju u URL-ovima, gitu na
 * drugim mašinama i u shell komandama — zato ih ovdje preslikavamo u ASCII
 * kopije unutar public/sapolja/derived/. Originali se ne diraju.
 *
 * Pokretanje:  node scripts/sapolja-assets.mjs
 */
import { copyFile, mkdir, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KORIJEN = join(dirname(fileURLToPath(import.meta.url)), "..");
const IZVOR = join(KORIJEN, "public", "sapolja");
const CILJ = join(IZVOR, "derived");

/** original → ASCII ime koje koristi kod */
const MAPA = {
  "logo+text svg.svg": "lockup.svg",
  "maiiin svg.png": "mark-raster.png",
  "znak.webp": "mark-legacy.webp",
  "HHHH.png": "var-primarni.png",
  // Negativ je zamijenjen novijom verzijom (krem marka, terakota plod);
  // stari JJJJ.png ostaje u public/sapolja/ ali se više ne koristi.
  "ChatGPT Image 17. авг 2026. 21_24_27.png": "var-negativ.png",
  "hh.png": "var-foto.png",
  "ChatGPT Image 17. авг 2026. 12_47_44.png": "skice.png",
  "ChatGPT Image 17. авг 2026. 14_00_43.png": "tabla.png",
  "ChatGPT Image 17. авг 2026. 16_06_07.png": "pattern.png",
  "ChatGPT Image 17. авг 2026. 19_17_15 (1) - Copy.png": "mockup-gajba.png",
  "ChatGPT Image 17. авг 2026. 19_17_16 (2) - Copy.png": "mockup-kesa.png",
  "ChatGPT Image 17. авг 2026. 19_17_17 (4) - Copy.png": "mockup-traka.png",
  "Group 14 - Copy (2).png": "foto-fallback.png",
  "DSC07524_1.JPG": "foto.jpg",
};

await mkdir(CILJ, { recursive: true });

let kopirano = 0;
const nedostaje = [];

for (const [original, ascii] of Object.entries(MAPA)) {
  const od = join(IZVOR, original);
  try {
    await access(od);
  } catch {
    nedostaje.push(original);
    continue;
  }
  await copyFile(od, join(CILJ, ascii));
  kopirano++;
}

console.log(`kopirano: ${kopirano}/${Object.keys(MAPA).length}`);
if (nedostaje.length) {
  console.log("nedostaje (kod će prikazati placeholder):");
  for (const n of nedostaje) console.log(`  - ${n}`);
}
