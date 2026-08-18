/**
 * Pravi React komponente iz public/sapolja/derived/lockup.svg.
 *
 * Zašto skripta, a ne ručno prekucavanje: path podaci moraju ostati
 * bajt u bajt isti kao u izvornom fajlu. Ako logo ikad bude ponovo
 * izvezen iz Figme, dovoljno je zamijeniti SVG i pokrenuti ovo ponovo.
 *
 * Pokretanje:  node scripts/sapolja-svg.mjs
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KORIJEN = join(dirname(fileURLToPath(import.meta.url)), "..");
const SVG = join(KORIJEN, "public", "sapolja", "derived", "lockup.svg");
const IZLAZ = join(KORIJEN, "src", "components", "sapolja-brend");

/**
 * Tijesni okviri, izmjereni kroz getBBox() u browseru nad izvornim SVG-om:
 *   path 0 (marka)    x=21     y=0        w=209      h=253.296
 *   path 1 (logotip)  x=2.65   y=294.631  w=257.751  h=75.142
 *   path 2 (slogan)   x=1.503  y=382.994  w=259.075  h=18.256
 * Okvir marke se poklapa sa 209×254 rasterom iz maiiin svg.png.
 */
const OKVIRI = {
  marka: "21 0 209 253.296",
  logotip: "2.65 294.631 257.751 75.142",
  /** logotip + slogan, bez marke */
  logotipSlogan: "1.503 294.631 259.075 106.619",
};

const izvor = await readFile(SVG, "utf8");

const viewBox = izvor.match(/viewBox="([^"]+)"/)?.[1];
if (!viewBox) throw new Error("SVG nema viewBox");

const putanje = [...izvor.matchAll(/<path\b([^>]*?)\/>/g)].map((m) => m[1]);
if (putanje.length !== 3) {
  throw new Error(`Očekivane 3 putanje, nađeno ${putanje.length}`);
}

/** Atribute iz SVG-a prevodi u JSX oblik; fill uvijek postaje currentColor. */
function uJsx(atributi, uvlaka) {
  const parovi = [...atributi.matchAll(/([\w-]+)="([^"]*)"/g)];
  const redovi = parovi.map(([, ime, vrijednost]) => {
    if (ime === "fill") return `${uvlaka}fill="currentColor"`;
    const jsxIme = ime.replace(/-([a-z])/g, (_, s) => s.toUpperCase());
    return `${uvlaka}${jsxIme}="${vrijednost}"`;
  });
  return redovi.join("\n");
}

function komponenta({ ime, opis, viewBox: vb, indeksi }) {
  const putanjeJsx = indeksi
    .map((i) => `      <path\n${uJsx(putanje[i], "        ")}\n      />`)
    .join("\n");

  return `/**
 * GENERISANO — ne mijenjati ručno.
 * Izvor: public/sapolja/derived/lockup.svg  ·  node scripts/sapolja-svg.mjs
 *
 * ${opis}
 * Boja se vodi kroz CSS \`color\` na roditelju (fill je currentColor).
 */
type Props = {
  className?: string;
  /** Pristupačno ime; izostavi za čisto dekorativnu upotrebu. */
  title?: string;
};

export default function ${ime}({ className, title }: Props) {
  return (
    <svg
      viewBox="${vb}"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
${putanjeJsx}
    </svg>
  );
}
`;
}

await mkdir(IZLAZ, { recursive: true });

const KOMPONENTE = [
  {
    ime: "SapoljaMark",
    opis: "Sama marka — korpa, jabuka i brazde (path 0 iz lockupa).",
    viewBox: OKVIRI.marka,
    indeksi: [0],
  },
  {
    ime: "SapoljaLockup",
    opis: "Puni lockup — marka, logotip i slogan (sve tri putanje).",
    viewBox,
    indeksi: [0, 1, 2],
  },
  {
    ime: "SapoljaLogotip",
    opis: "Samo logotip SaPolja u Recoleti, iscrtan u krivama (path 1).",
    viewBox: OKVIRI.logotip,
    indeksi: [1],
  },
  {
    ime: "SapoljaLogotipSlogan",
    opis: "Logotip sa sloganom, bez marke — osnovni lockup (path 1 i 2).",
    viewBox: OKVIRI.logotipSlogan,
    indeksi: [1, 2],
  },
];

for (const k of KOMPONENTE) {
  await writeFile(join(IZLAZ, `${k.ime}.tsx`), komponenta(k));
  console.log(`${k.ime}.tsx  viewBox="${k.viewBox}"`);
}
