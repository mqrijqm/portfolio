import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SapoljaLockup from "@/components/sapolja-brend/SapoljaLockup";
import SapoljaMark from "@/components/sapolja-brend/SapoljaMark";
import SapoljaLogotip from "@/components/sapolja-brend/SapoljaLogotip";
import SapoljaLogotipSlogan from "@/components/sapolja-brend/SapoljaLogotipSlogan";
import Slika from "@/components/sapolja-brend/Slika";
import MockupStrip from "@/components/sapolja-brend/MockupStrip";
import PaletaKolona from "@/components/sapolja-brend/PaletaKolona";
import { A, BOJE, FOTO_POZADINA, uCmyk, uRgb } from "@/lib/sapoljaBrend";

export const metadata: Metadata = {
  title: "SaPolja — brend identitet | Marija",
  description:
    "Brend identitet za SaPolja: znak, tipografija, paleta i primjene. Banja Luka, 2026.",
  openGraph: {
    title: "SaPolja — brend identitet",
    description: "Znak, tipografija, paleta i primjene. Banja Luka, 2026.",
    locale: "sr_RS",
    type: "article",
  },
};

/** Brend boje ulaze kao promjenljive — svaka zelena na stranici ide kroz var(--green). */
const tema = {
  "--green": BOJE.green,
  "--cream": BOJE.cream,
  "--terracotta": BOJE.terracotta,
  "--white": BOJE.white,
} as CSSProperties;

/** Sve sekcije dijele istu visinu: tačno jedan ekran na desktopu. */
const EKRAN = "min-h-[100svh] md:h-[100svh] md:max-h-[110svh]";

const NADNASLOV =
  "font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em]";

const PALETA = [
  {
    ime: "Zelena",
    hex: BOJE.green,
    pozadina: "var(--green)",
    tekst: "var(--cream)",
  },
  {
    ime: "Krem",
    hex: BOJE.cream,
    pozadina: "var(--cream)",
    tekst: "var(--green)",
  },
  {
    ime: "Terakota",
    hex: BOJE.terracotta,
    pozadina: "var(--terracotta)",
    tekst: "var(--cream)",
  },
  {
    ime: "Bijela",
    hex: BOJE.white,
    pozadina: "var(--white)",
    tekst: "var(--green)",
    linija: true,
  },
];

/**
 * Konstrukcijske vodilice u specimenu — procenti su u odnosu na okvir
 * logotipa, ne na panel. Položene padaju na x-visinu i osnovnu liniju,
 * uspravne na iste tačke slova kao u layoutu (Group 15.png).
 */
const VODILICE = {
  uspravne: ["36.5%", "39%", "78%", "81%"],
  polozene: ["3.5%", "81.5%"],
};

export default function SapoljaBrendPage() {
  return (
    <main
      style={tema}
      className="font-[family-name:var(--font-inter)] text-[color:var(--green)]"
    >
      {/* ============================ 1 · HERO ============================ */}
      <section
        id="hero"
        className={`relative flex flex-col items-center justify-center bg-[color:var(--cream)] px-6 py-16 ${EKRAN}`}
      >
        <p
          className={`absolute left-6 top-16 text-[color:var(--green)] sm:top-20 ${NADNASLOV}`}
        >
          SAPOLJA — BREND IDENTITET · BANJA LUKA · 2026
        </p>

        {/* Lockup već nosi slogan u krivama — zaseban tekst ispod bi ga ponovio. */}
        <SapoljaLockup
          title="SaPolja — Hrana našeg kraja"
          className="w-[min(440px,68vw)] text-[color:var(--green)] md:w-[min(440px,34vw)]"
        />
      </section>

      {/* ========================= 2 · VARIJANTE ========================== */}
      <section
        id="varijante"
        className={`flex flex-col bg-white px-6 py-16 ${EKRAN}`}
      >
        <p className={`text-[color:var(--green)] ${NADNASLOV}`}>LOGO</p>

        <div className="mt-8 grid min-h-0 flex-1 grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { medij: A.varPrimarni, oznaka: "PRIMARNI", boja: "var(--green)" },
            // Negativ nosi svoju oznaku utisnutu u sliku — ne dupliramo je.
            { medij: A.varNegativ, oznaka: "NEGATIV", boja: null },
            { medij: A.varFoto, oznaka: "NA FOTOGRAFIJI", boja: "var(--white)" },
          ].map(({ medij, oznaka, boja }) => (
            <div key={oznaka} className="relative h-64 min-h-0 md:h-full">
              <Slika
                medij={medij}
                sizes="(min-width: 768px) 32vw, 100vw"
                className="h-full w-full"
              />
              {boja ? (
                <span
                  className={`absolute left-4 top-4 ${NADNASLOV}`}
                  style={{ color: boja }}
                >
                  {oznaka}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* ========================== 3 · PROCES ============================ */}
      <section
        id="proces"
        className={`flex flex-col bg-[#FFFEFB] px-6 py-16 ${EKRAN}`}
      >
        <div className="flex items-baseline justify-between gap-6 text-[color:var(--green)]">
          <p className={NADNASLOV}>PROCES RADA</p>
          <p className={`${NADNASLOV} text-right opacity-60`}>
            SKICE I ISTRAŽIVANJE ZNAKA
          </p>
        </div>

        <div className="mt-8 flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <Slika
            medij={A.skice}
            sizes="(min-width: 768px) 70vw, 100vw"
            fit="contain"
            className="h-full w-full"
          />
        </div>
      </section>

      {/* =========================== 4 · PALETA =========================== */}
      {/* Jedina sekcija koja ne drži pun ekran — polja su kvadrati. */}
      <section id="paleta" className="grid grid-cols-2 md:grid-cols-4">
        {PALETA.map((b) => (
          <PaletaKolona
            key={b.hex}
            ime={b.ime}
            hex={b.hex}
            rgb={uRgb(b.hex)}
            cmyk={uCmyk(b.hex)}
            pozadina={b.pozadina}
            tekst={b.tekst}
            linija={b.linija}
          />
        ))}
      </section>

      {/* ============================ 4 · FOTO ============================ */}
      <section id="foto" className={`relative overflow-hidden ${EKRAN}`}>
        <Slika
          medij={FOTO_POZADINA}
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div className="relative flex h-full min-h-[100svh] flex-col items-center justify-center px-6 md:min-h-0">
          <SapoljaMark
            title="SaPolja znak"
            className="w-[min(300px,48vw)] text-white md:w-[min(300px,24vw)]"
          />
          <p className="mt-6 font-[family-name:var(--font-inter)] text-[16px] font-medium uppercase tracking-[0.2em] text-white">
            OD POLJA DO STOLA
          </p>
        </div>
      </section>

      {/* Miran prijelaz između fotografije i tehničkog tipografskog prikaza. */}
      <div
        aria-hidden="true"
        className="h-[clamp(120px,18vw,320px)] bg-[#FFFEFB]"
      />

      {/* ======================== 5 · TIPOGRAFIJA ========================= */}
      <section id="tipografija" className={`flex flex-col ${EKRAN}`}>
        {/* --- gornja polovina: specimen sa konstrukcijskim vodilicama --- */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#FFFEFB] px-6 py-16">
          <div className="relative">
            <p className={`text-[color:var(--green)] ${NADNASLOV}`}>
              IZBOR FONTA:
            </p>
            {/* Ime fonta ispisano samim fontom — inače specimen ne znači ništa. */}
            <p className="mt-2 font-[family-name:var(--font-recoleta)] text-[clamp(28px,3.2vw,44px)] leading-[1.1] text-[color:var(--green)]">
              Recoleta
            </p>
          </div>

          {/* Logotip je iscrtan u krivama iz izvornog SVG-a — pravi Recoleta rez.
              Vodilice žive u istom okviru da bi uvijek pale na iste tačke slova
              (x-visina i osnovna linija), bez obzira koliko je ekran širok.
              Rastegnute su van okvira, a panel ih siječe na svojim ivicama. */}
          <div className="absolute bottom-[10%] right-[5%] aspect-[3.43] w-[72%] max-w-[1250px]">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {VODILICE.uspravne.map((x) => (
                <span
                  key={x}
                  style={{ left: x }}
                  className="absolute -bottom-[100vh] -top-[100vh] border-l border-dashed border-[#C0C7C2]"
                />
              ))}
              {VODILICE.polozene.map((y) => (
                <span
                  key={y}
                  style={{ top: y }}
                  className="absolute -left-[100vw] -right-[100vw] border-t border-dashed border-[#95A19B]"
                />
              ))}
            </div>

            <SapoljaLogotip
              title="SaPolja"
              className="relative w-full text-[color:var(--green)]"
            />
          </div>
        </div>

        {/* --- zelena traka --- */}
        <div className="bg-[color:var(--green)] px-6 py-5 text-center">
          <p className={`text-[color:var(--white)] ${NADNASLOV}`}>
            LOGOTIP SA SLOGANOM — OSNOVNI LOCKUP:
          </p>
        </div>

        {/* --- donja polovina: lockup na pattern podlozi --- */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#FEFCF9]">
          <Slika
            medij={A.pattern}
            sizes="100vw"
            className="absolute inset-0 h-full w-full opacity-[0.12]"
          />
          <div className="relative flex h-full items-center justify-center px-6">
            <SapoljaLogotipSlogan
              title="SaPolja — Hrana našeg kraja"
              className="w-[min(360px,34vw)] text-[color:var(--green)]"
            />
          </div>
        </div>
      </section>

      {/* =========================== 6 · LETAK ============================ */}
      <section
        id="letak"
        className="flex min-h-[100svh] flex-col bg-[color:var(--green)] px-6 py-16 text-[color:var(--white)] md:h-[100svh]"
      >
        <div className="flex items-baseline justify-between gap-6">
          <p className={NADNASLOV}>LETAK / FLYER</p>
          <p className={`${NADNASLOV} text-right opacity-60`}>
            PREDNJA I ZADNJA STRANA
          </p>
        </div>

        <div className="mt-8 grid min-h-0 flex-1 grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
          {[
            { medij: A.flyerFront, oznaka: "01 — LICE" },
            { medij: A.flyerBack, oznaka: "02 — NALIČJE" },
          ].map(({ medij, oznaka }) => (
            <figure
              key={oznaka}
              className="flex min-h-[72svh] min-w-0 flex-col md:min-h-0"
            >
              <div className="min-h-0 flex-1 overflow-hidden bg-[#F5F0E7] p-3 md:p-5">
                <Slika
                  medij={medij}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  fit="contain"
                  className="h-full w-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
                />
              </div>
              <figcaption className={`mt-3 ${NADNASLOV} opacity-70`}>
                {oznaka}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ======================= 7 · ILUSTRACIJE ========================== */}
      <section
        id="ilustracije"
        className="overflow-hidden bg-[color:var(--cream)] py-16"
      >
        <div className="flex items-baseline justify-between gap-6 px-6 text-[color:var(--green)]">
          <p className={NADNASLOV}>ILUSTRACIJE PROIZVODA</p>
          <p className={`${NADNASLOV} text-right opacity-60`}>
            GRAVIRANI CRTEŽI
          </p>
        </div>

        <Slika
          medij={A.ilustracije}
          sizes="100vw"
          fit="contain"
          className="mt-10 h-auto w-full"
        />
      </section>

      {/* ========================== 8 · PRIMJENE ========================== */}
      <section id="primjene" className={`flex flex-col bg-white py-16 ${EKRAN}`}>
        <p className={`px-6 text-[color:var(--green)] ${NADNASLOV}`}>PRIMJENE</p>

        {/* triptih ide od ivice do ivice, bez okvira */}
        <div className="mt-8 min-h-0 flex-1">
          <MockupStrip
            mockupi={[
              { medij: A.gajba, udio: "38fr" },
              { medij: A.kesa, udio: "28fr" },
              { medij: A.traka, udio: "34fr" },
            ]}
          />
        </div>
      </section>

    </main>
  );
}
