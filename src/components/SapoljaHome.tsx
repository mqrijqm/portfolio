import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { SteppedDiamond } from "@/components/Motifs";
import SapoljaLockup from "@/components/sapolja-brend/SapoljaLockup";
import SapoljaLogotip from "@/components/sapolja-brend/SapoljaLogotip";
import SapoljaLogotipSlogan from "@/components/sapolja-brend/SapoljaLogotipSlogan";
import Slika from "@/components/sapolja-brend/Slika";
import MockupStrip from "@/components/sapolja-brend/MockupStrip";
import PaletaKolona from "@/components/sapolja-brend/PaletaKolona";
import LogoProcess from "@/components/sapolja-brend/LogoProcess";
import LetakScena from "@/components/sapolja-brend/LetakScena";
import { A, BOJE, uCmyk, uRgb } from "@/lib/sapoljaBrend";

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
    tekst: "var(--white)",
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
    <>
      <Nav />

      <main
        style={tema}
        className="flex flex-col font-[family-name:var(--font-inter)] text-[color:var(--green)]"
      >
        {/* ==================== 1 · HERO (ULAZ) ==================== */}
        {/* Prvi ekran je prazan prostor namjerno — ulaz u sajt, bez sadržaja
            koji bi odvukao pažnju od identiteta koji slijedi. */}
        <section
          id="hero"
          className="order-1 flex min-h-[100svh] flex-col justify-between bg-linen px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
        >
          <div className="flex items-baseline justify-between gap-6">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              PORTFOLIO · 2026
            </p>
            <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
              BANJA LUKA
            </p>
          </div>

          <div className="mt-[14vh]">
            <h1 className="font-[family-name:var(--font-gazpacho)] text-[clamp(64px,13vw,190px)] font-light leading-[0.9] tracking-[-0.02em]">
              Marija
            </h1>
            <p className="mt-8 max-w-[34ch] font-sans text-[clamp(15px,1.35vw,19px)] leading-[1.75] text-forest-soft">
              Grafički i web dizajn. Identiteti, editorijali i sajtovi koji
              imaju šta da kažu.
            </p>
          </div>

          <div className="mt-[12vh] flex items-center justify-between gap-6 border-t border-forest/20 pt-4">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              SCROLL
            </span>
            <SteppedDiamond className="h-3.5 w-3.5 text-clay" />
          </div>
        </section>

        {/* ================== 2 · E-COM PLATFORME ================== */}
        {/* Druga sekcija drži isti ritam praznog prostora — prostor za sadržaj
            koji tek dolazi, da bi skrol do Brendinga imao šta da pređe. */}
        <section
          id="e-com"
          className="order-2 flex min-h-[100svh] flex-col bg-linen-light px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
        >
          <div className="flex items-baseline justify-between gap-6">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em]">
              E-COM PLATFORME
            </p>
            <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
              U PRIPREMI
            </p>
          </div>

          <div className="mt-auto max-w-[18ch]">
            <h2 className="font-[family-name:var(--font-gazpacho)] text-[clamp(40px,7vw,96px)] font-light italic leading-[1.02] tracking-[-0.02em]">
              Prodavnice koje rade same od sebe
            </h2>
          </div>

          <div className="mt-[10vh] border-t border-forest/20 pt-4">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              DALJE — BRENDING
            </span>
          </div>
        </section>

        {/* ============== 3 · BRENDING (postojeci sadržaj) ============== */}
        {/* Sve ispod je dosadašnji sadržaj stranice, samo sabran pod jednim
            sidrom — navbar na BRENDING skroluje upravo ovdje. Sekcije zadržavaju
            svoje order-klase, pa je raspored unutra identičan kao prije. */}
        <div id="brending" className="order-3 flex flex-col">
          {/* ============================ 1 · HERO ============================ */}
          <section
            id="sapolja-uvod"
            className={`order-1 relative flex flex-col items-center justify-center bg-[color:var(--cream)] px-6 py-16 ${EKRAN}`}
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

      {/* ======================= 2 · O PROJEKTU ========================== */}
      <section
        id="o-projektu"
        className="order-2 min-h-[145svh] bg-[#F7F2EA] px-6 py-[14vh] md:px-[8vw] md:py-[18vh]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-1">
            <p className={`${NADNASLOV} tracking-[0.22em]`}>O PROJEKTU</p>
            <h2 className="mt-7 max-w-[17ch] font-[family-name:var(--font-recoleta)] text-[clamp(38px,5vw,78px)] italic leading-[1.08] tracking-[-0.025em]">
              Vizuelni identitet koji povezuje{" "}
              <span className="relative inline-block whitespace-nowrap px-[0.08em] not-italic text-[color:var(--terracotta)]">
                porijeklo
                <span aria-hidden="true" className="absolute -inset-x-[0.12em] -inset-y-[0.02em] rounded-[50%] border-[1.5px] border-[color:var(--terracotta)] rotate-[-4deg]" />
                <span aria-hidden="true" className="absolute -inset-x-[0.18em] inset-y-[0.05em] rounded-[48%] border border-[color:var(--terracotta)] rotate-[3deg]" />
              </span>
              ,{" "}
              <span className="relative inline-block whitespace-nowrap px-[0.08em] text-[color:var(--terracotta)]">
                bliskost
                <span aria-hidden="true" className="absolute -inset-x-[0.14em] -inset-y-[0.04em] rounded-[52%] border-[1.5px] border-[color:var(--terracotta)] rotate-[5deg]" />
                <span aria-hidden="true" className="absolute -inset-x-[0.2em] inset-y-[0.02em] rounded-[47%] border border-[color:var(--terracotta)] rotate-[-2deg]" />
              </span>{" "}
              i svrhu.
            </h2>
          </div>
        </div>

        <div className="mt-[24vh] grid grid-cols-1 md:mt-[32vh] md:grid-cols-12">
          <div className="max-w-[680px] md:col-span-7 md:col-start-6">
            <p className="text-[16px] leading-[1.95] md:text-[18px]">
              SaPolja je platforma koja male proizvođače iz našeg regiona
              povezuje sa stolovima ljudi u Banjoj Luci. Vizuelni identitet
              trebalo je da djeluje savremeno i pouzdano, ali da sačuva toplinu
              zemlje, pijace i hrane čije porijeklo poznajemo.
            </p>
            <p className="mt-9 text-[16px] leading-[1.95] md:text-[18px]">
              Znak spaja korpu, brazde i plod u jedan jednostavan simbol.
              Tamnozelena gradi povjerenje, krem podsjeća na papir i svakodnevnu
              bliskost, a terakota unosi toplinu zrelog ploda. Tako je nastao
              sistem koji jednako prirodno živi na ekranu, ambalaži, drvenoj
              gajbi i običnom komadu papira — lokalno, ali bez folklornih klišea.
            </p>

            <div className="mt-[14vh] flex items-center justify-between gap-6 border-b border-[color:var(--green)]/25 pb-3">
              <span className={NADNASLOV}>VIZUELNI IDENTITET</span>
              <span className={`${NADNASLOV} text-right opacity-75`}>BANJA LUKA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 3 · VARIJANTE ========================== */}
      <section
        id="varijante"
        className={`order-5 flex flex-col bg-white px-6 py-16 ${EKRAN}`}
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

      {/* =========================== 4 · PALETA =========================== */}
      {/* Jedina sekcija koja ne drži pun ekran — polja su kvadrati. */}
      <section id="paleta" className="order-7 grid grid-cols-2 md:grid-cols-4">
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

      {/* ======================== 4 · TIPOGRAFIJA ========================= */}
      <section id="tipografija" className={`order-3 flex flex-col ${EKRAN}`}>
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

      <LogoProcess />

      {/* =========================== 6 · LETAK ============================ */}
      {/* Scena se u sekciji lijepi (sticky): letak ostaje pred očima dok skrol
          prolazi kroz sekciju, a taj skrol vodi kameru kroz četiri kadra —
          lice, krupno na logo, odmak i okret, krupno na ilustracije. Zato je
          sekcija ovoliko visoka: svakom kadru treba prostora da se odigra. */}
      <section
        id="letak"
        className="relative order-8 h-[340svh] bg-[color:var(--green)] text-[color:var(--white)] md:h-[400svh]"
      >
        <div className="sticky top-0 flex h-[100svh] flex-col px-6 py-[5vh] md:px-[8vw] md:py-[6vh]">
          <div className="flex items-baseline justify-between gap-6">
            <p className={NADNASLOV}>LETAK / FLYER</p>
            <p className={`${NADNASLOV} text-right opacity-60`}>
              PREDNJA I ZADNJA STRANA
            </p>
          </div>

          {/* Canvas mora imati zadatu visinu jer se sam ne razvlači po sadržaju.
              Donja granica drži platno živim i kad bi flex-1 u skraćenom
              rasporedu spao na nulu — Canvas bez visine je prazno platno. */}
          <div className="relative mt-[3vh] min-h-[50svh] flex-1">
            <LetakScena />
          </div>

          <p className={`mt-[3vh] ${NADNASLOV} opacity-50`}>
            SKROLUJ ILI PREVUCI ZA ROTACIJU
          </p>
        </div>
      </section>

      {/* ======================= 7 · ILUSTRACIJE ========================== */}
      <section
        id="ilustracije"
        className="order-6 overflow-hidden bg-[color:var(--cream)] py-16"
      >
        <div className="flex items-baseline justify-between gap-6 px-6 text-[color:var(--green)]">
          <p className={NADNASLOV}>ILUSTRACIJE PROIZVODA</p>
          <p className={`${NADNASLOV} text-right opacity-75`}>
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
      <section id="primjene" className={`order-9 flex flex-col bg-white py-16 ${EKRAN}`}>
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
      </div>

      {/* ========================== 4 · KONTAKT ========================== */}
      {/* Vraća se u njen lični jezik — linen i gazpacho, ne SaPolja paleta:
          ovo je potpis na kraju case studyja, ne dio brenda. */}
      <section
        id="kontakt"
        className="order-4 flex min-h-[100svh] flex-col justify-between bg-linen px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
      >
        <div className="flex items-baseline justify-between gap-6">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em]">
            KONTAKT
          </p>
          <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
            SLOBODNO PIŠI
          </p>
        </div>

        <div className="mt-[12vh]">
          <p className="max-w-[20ch] font-[family-name:var(--font-gazpacho)] text-[clamp(38px,6.5vw,92px)] font-light italic leading-[1.04] tracking-[-0.02em]">
            Ima nešto što treba da izgleda kao nešto?
          </p>

          <a
            href="mailto:zdravo@marija.rs"
            className="group mt-10 inline-flex flex-wrap items-baseline gap-3 border-b border-clay pb-2 text-[clamp(20px,3vw,40px)] font-light leading-none transition-colors hover:text-clay"
          >
            zdravo@marija.rs
          </a>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-sans text-[13px] uppercase tracking-[0.18em] text-forest-soft">
            {[
              { ime: "Instagram", href: "https://instagram.com/" },
              { ime: "Behance", href: "https://behance.net/" },
              { ime: "LinkedIn", href: "https://linkedin.com/" },
              { ime: "GitHub", href: "https://github.com/mqrijqm" },
            ].map((m) => (
              <li key={m.ime}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-clay"
                >
                  {m.ime}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[10vh] flex items-center justify-between gap-6 border-t border-forest/20 pt-4">
          <span className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
            MARIJA · BANJA LUKA
          </span>
          <SteppedDiamond className="h-3.5 w-3.5 text-clay" />
        </div>
      </section>
    </main>
    </>
  );
}
