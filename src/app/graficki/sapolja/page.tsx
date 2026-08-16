import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Figura from "@/components/sapolja/Figura";
import Anatomija from "@/components/sapolja/Anatomija";
import { M, SP } from "@/lib/sapolja";

export const metadata: Metadata = {
  title: "SaPolja — vizuelni identitet | Marija",
  description:
    "Vizuelni identitet za SaPolja, platformu koja povezuje stanovnike Banje Luke sa provjerenim lokalnim farmerima.",
  openGraph: {
    title: "SaPolja — vizuelni identitet",
    description:
      "Brand strategija, znak, vizuelni sistem i web koncept za hyper-lokalnu platformu iz Banje Luke.",
    locale: "sr_RS",
    type: "article",
    images: [{ url: M.znakTrava.src, width: M.znakTrava.w, height: M.znakTrava.h }],
  },
};

/** Boje projekta ulaze kao promjenljive, pa se mijenjaju na jednom mjestu. */
const tema = {
  "--sp-cream": SP.cream,
  "--sp-field": SP.field,
  "--sp-moss": SP.moss,
  "--sp-muted": SP.muted,
  "--sp-sand": SP.sand,
  "--sp-clay": SP.clay,
  "--sp-line": "rgba(21, 59, 37, 0.18)",
  "--sp-soft": "rgba(21, 59, 37, 0.62)",
} as CSSProperties;

const META = [
  ["Uloga", "Brand strategija, znak, vizuelni identitet, art direkcija i web koncept"],
  ["Klijent", "SaPolja"],
  ["Lokacija", "Banja Luka, Bosna i Hercegovina"],
  ["Faza", "Pre-launch — platforma u razvoju"],
  ["Godina", "2026"],
];

const POZICIJE = [
  "Lokalno, bez folklora.",
  "Savremeno, bez tech hladnoće.",
  "Kvalitetno, bez elitizma.",
];

const USLUGE = [
  "Brand strategija",
  "Dizajn znaka",
  "Vizuelni identitet",
  "Art direkcija",
  "Web koncept",
];

const PALETA = [
  { ime: "Duboka zelena", hex: SP.field, opis: "stabilnost i povjerenje" },
  { ime: "Zelena znaka", hex: SP.moss, opis: "osnovni ton identiteta" },
  { ime: "Prigušena zelena", hex: SP.muted, opis: "mirna podrška" },
  { ime: "Topla krem", hex: SP.cream, opis: "ljudskost i papir" },
  { ime: "Pješčana", hex: SP.sand, opis: "druga podloga" },
  { ime: "Narandžasta", hex: SP.clay, opis: "zrelost ploda, samo kao akcent" },
];

export default function SaPoljaPage() {
  return (
    <main
      style={tema}
      className="bg-[color:var(--sp-cream)] text-[color:var(--sp-field)]"
    >
      {/* ================= HERO ================= */}
      <section className="flex min-h-[calc(100svh-2.75rem)] flex-col pt-11 sm:min-h-[calc(100svh-3.5rem)] sm:pt-14">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-12 sm:pb-14 sm:pt-16">
          <Reveal>
            <nav aria-label="Putanja">
              <Link
                href="/graficki"
                className="font-sans text-[10px] uppercase tracking-[0.32em] text-[color:var(--sp-soft)] transition-colors hover:text-[color:var(--sp-clay)]"
              >
                ← Grafički dizajn
              </Link>
            </nav>

            <h1 className="mt-10 text-[clamp(3rem,11vw,8rem)] font-light leading-[0.95] tracking-[0.02em]">
              SaPolja
            </h1>

            <div className="mt-8 grid gap-6 border-t border-[color:var(--sp-line)] pt-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <p className="max-w-xl text-[clamp(1.05rem,2.4vw,1.5rem)] font-light leading-snug">
                Vizuelni identitet za platformu koja približava lokalnu hranu
                gradskom stolu.
              </p>
              <div className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.24em] text-[color:var(--sp-soft)] md:text-right">
                <p>
                  Brand strategija · Vizuelni identitet · Art direkcija · Web
                  dizajn
                </p>
                <p className="mt-1">Banja Luka · 2026</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[42vh] flex-1">
          <Image
            src={M.polje.src}
            alt={M.polje.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= PREGLED ================= */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.7rem,4.4vw,3.2rem)] font-light leading-[1.2]">
              Kako lokalnu poljoprivredu pretvoriti u savremenu i pouzdanu
              uslugu — bez gubitka osjećaja bliskosti?
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="lg:pt-4">
            <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              SaPolja je hyper-lokalna platforma u razvoju koja povezuje
              stanovnike Banje Luke sa provjerenim farmerima iz banjalučkog
              okruženja. Cilj identiteta bio je učiniti domaću hranu
              pristupačnijom savremenoj gradskoj porodici — bez folklornih
              klišea i bez hladne estetike tehnoloških platformi.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <dl className="mt-20 border-t border-[color:var(--sp-line)]">
            {META.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-wrap gap-x-10 gap-y-1 border-b border-[color:var(--sp-line)] py-4"
              >
                <dt className="w-24 shrink-0 font-sans text-[10px] uppercase tracking-[0.28em] text-[color:var(--sp-clay)]">
                  {k}
                </dt>
                <dd className="max-w-2xl font-light leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ================= PRVI BREND MOMENT ================= */}
      <section aria-label="Znak u kontekstu">
        <Image
          src={M.znakTrava.src}
          width={M.znakTrava.w}
          height={M.znakTrava.h}
          alt={M.znakTrava.alt}
          sizes="100vw"
          className="h-[46vh] w-full object-cover sm:h-[64vh]"
        />
      </section>

      {/* ================= PROBLEM I POZICIONIRANJE ================= */}
      <section className="bg-[color:var(--sp-field)] px-5 py-24 text-[color:var(--sp-cream)] sm:py-36">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h2 className="max-w-3xl text-[clamp(1.9rem,5.4vw,4rem)] font-light leading-[1.12]">
              Domaće je poželjno. Ali nije uvijek dostupno.
            </h2>
            <p className="mt-8 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-cream)]/70 sm:text-[15px]">
              Kupovina direktno od farmera često zahtijeva vrijeme, poznanstva i
              više odvojenih dogovora. SaPolja razvija jednostavniji sistem koji
              objedinjuje ponudu različitih lokalnih proizvođača i približava je
              gradskim porodicama.
            </p>
          </Reveal>

          <ul className="mt-20 border-t border-[color:var(--sp-cream)]/20">
            {POZICIJE.map((p, i) => (
              <Reveal key={p} delay={i * 0.06} y={28}>
                <li className="border-b border-[color:var(--sp-cream)]/20 py-8 text-[clamp(1.5rem,4.6vw,3rem)] font-light leading-tight sm:py-12">
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <p className="ml-auto mt-16 max-w-md font-sans text-[14px] leading-[1.8] text-[color:var(--sp-cream)]/70 sm:text-right">
              Identitet je morao prvenstveno signalizirati povjerenje. SaPolja
              ne prodaje samo hranu — gradi sigurnost u njeno porijeklo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= ANATOMIJA ZNAKA ================= */}
      <section className="py-24 sm:py-36">
        <Reveal className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
            Jedan znak, cijeli sistem.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
            Vizuelna ideja nastala je spajanjem tri elementa koji objašnjavaju
            način na koji platforma funkcioniše.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          <Anatomija />
        </div>

        <Reveal className="mx-auto mt-24 flex max-w-[1200px] flex-col justify-center px-5 lg:mt-40 lg:min-h-[70vh]">
          <p className="text-[clamp(2rem,6.4vw,5rem)] font-light leading-[1.08]">
            Od više polja do jedne korpe.
          </p>
          <p className="mt-10 max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
            Znak ne predstavlja jednu farmu. Predstavlja sistem koji više
            lokalnih izvora okuplja u jednu cjelinu.
          </p>
        </Reveal>
      </section>

      {/* ================= ISTRAŽIVANJE ================= */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
              Od pejzaža do simbola.
            </h2>
            <p className="mt-8 max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Istraživanje je počelo od vizuelnih struktura koje su zajedničke
              poljima, putevima i pletenim korpama. Umjesto doslovnog prikaza
              farme, tražen je simbol koji istovremeno govori o porijeklu
              proizvoda i organizacionoj ulozi platforme.
            </p>
          </Reveal>

          <Figura
            medij={M.linije}
            caption="Motiv polja — ista geometrija koja živi unutar znaka"
            sizes="(min-width: 1024px) 46vw, 90vw"
            bare
          />
        </div>

        <div className="mt-20 grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Figura
            medij={M.znak}
            caption="Zatvoren oblik, otvorene linije"
            sizes="(min-width: 1024px) 32vw, 70vw"
            className="mx-auto w-[62%] lg:w-full"
            bare
          />

          <Reveal delay={0.08}>
            <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Zatvoren, stabilan oblik odabran je zbog osjećaja sigurnosti i
              povjerenja, dok unutrašnje linije unose kretanje i povezanost.
            </p>
            <div className="mt-10 flex min-h-[180px] items-center justify-center border border-dashed border-[color:var(--sp-line)] px-6 py-10 sm:min-h-[220px]">
              <p className="max-w-xs text-center font-sans text-[10px] uppercase leading-relaxed tracking-[0.24em] text-[color:var(--sp-soft)]">
                Mjesto za skice i ranije varijante znaka
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SISTEM I PALETA ================= */}
      <section className="bg-[color:var(--sp-sand)] px-5 py-24 sm:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
              Prepoznatljiv u svakom kontekstu.
            </h2>
            <p className="mt-8 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Identitet je razvijen kao modularan sistem koji može funkcionisati
              na digitalnom interfejsu, papirnoj etiketi, kraft kesi, drvenoj
              gajbi i maloj ikoni aplikacije.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
            <Figura
              medij={M.appIkone}
              caption="Ikona aplikacije — ista geometrija na četiri podloge"
              sizes="(min-width: 1024px) 56vw, 92vw"
              bare
            />
            <Figura
              medij={M.oznaka}
              caption="Pečat za oznake i naljepnice"
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="mx-auto w-[58%] lg:w-full"
              bare
            />
          </div>

          {/* paleta kroz same površine, ne kroz red krugova */}
          <div className="mt-20 grid gap-px border border-[color:var(--sp-line)] bg-[color:var(--sp-line)] sm:grid-cols-2 lg:grid-cols-3">
            {PALETA.map((b) => (
              <div
                key={b.hex}
                className="flex min-h-[190px] flex-col justify-between p-6"
                style={{
                  background: b.hex,
                  color:
                    b.hex === SP.cream || b.hex === SP.sand
                      ? SP.field
                      : SP.cream,
                }}
              >
                <p className="text-xl font-light">{b.ime}</p>
                <div>
                  <p className="font-sans text-[11px] leading-relaxed opacity-80">
                    {b.opis}
                  </p>
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.24em] opacity-70">
                    {b.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <p className="font-sans text-[13px] leading-[1.8] text-[color:var(--sp-soft)]">
                Duboka zelena gradi osjećaj stabilnosti i povjerenja.
              </p>
              <p className="font-sans text-[13px] leading-[1.8] text-[color:var(--sp-soft)]">
                Topla krem boja unosi ljudskost, svjetlost i taktilnost papira.
              </p>
              <p className="font-sans text-[13px] leading-[1.8] text-[color:var(--sp-soft)]">
                Narandžasti akcent koristi se štedljivo, kao signal zrelosti
                proizvoda i vizuelni fokus.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TIPOGRAFIJA I GLAS ================= */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:py-36">
        <Reveal>
          <p className="text-[clamp(2.4rem,8vw,6.5rem)] font-light leading-[1.02]">
            Hrana našeg kraja.
          </p>
          <p className="mt-8 max-w-2xl text-[clamp(1.1rem,2.8vw,1.9rem)] font-light italic leading-snug text-[color:var(--sp-soft)]">
            Jedna narudžba. Više farmera. Jedno mjesto preuzimanja.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Figura
            medij={M.wordmark}
            caption="Logotip sa sloganom — osnovni lockup"
            sizes="(min-width: 1024px) 46vw, 92vw"
            bare
          />
          <Reveal delay={0.08} className="lg:pt-6">
            <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Serifna tipografija unosi osjećaj trajnosti, povjerenja i
              uredničke ozbiljnosti. Čist sans-serif omogućava jasnu, praktičnu
              komunikaciju kroz digitalne i fizičke dodirne tačke.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= VIZUELNI JEZIK ================= */}
      <section className="px-5 py-24 sm:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
              Sistem koji raste iz znaka.
            </h2>
            <p className="mt-8 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Zakrivljene linije logotipa proširene su u prepoznatljiv grafički
              motiv, dok modularne ikone pomažu da se vrijednosti platforme —
              svježina, provjereno porijeklo, lokalnost i jednostavno
              preuzimanje — komuniciraju jasno i dosljedno.
            </p>
          </Reveal>

          <Figura
            medij={M.ikone}
            caption="Sistem ikona"
            sizes="(min-width: 1024px) 80vw, 94vw"
            className="mt-14"
            bare
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
            <Figura
              medij={M.pattern}
              caption="Pattern"
              sizes="(min-width: 1024px) 28vw, 60vw"
              className="mx-auto w-[62%] lg:w-full"
            />
            <Reveal delay={0.08}>
              <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
                Geometrija daje platformi osjećaj organizovanosti, dok
                ilustracije proizvoda vraćaju ljudskost, teksturu i prirodnu
                nesavršenost hrane.
              </p>
            </Reveal>
          </div>
        </div>

        <Figura
          medij={M.ilustracije}
          caption="Gravirane ilustracije proizvoda"
          sizes="100vw"
          className="mt-20"
          bare
        />
      </section>

      {/* ================= DIGITALNO ISKUSTVO ================= */}
      <section className="bg-[color:var(--sp-sand)] px-5 py-24 sm:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
              Lokalna hrana, na jednostavan način.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <Figura
              medij={M.digital}
              caption="Web koncept — desktop i mobilni prikaz"
              sizes="(min-width: 1024px) 52vw, 92vw"
              bare
            />

            <Reveal delay={0.08}>
              <p className="max-w-lg font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
                Digitalni interfejs koristi uredničku tipografiju, jasnu
                hijerarhiju i mnogo praznog prostora kako SaPolja ne bi
                izgledala kao još jedna aplikacija za brzu dostavu. Porijeklo
                proizvoda i povjerenje u farmera imaju prednost nad promotivnim
                porukama.
              </p>
              <p className="mt-8 max-w-lg font-sans text-[13px] leading-[1.8] text-[color:var(--sp-soft)]">
                Dizajn je razvijen za pre-launch fazu projekta. Prikaz
                predstavlja digitalni koncept i pravac buduće platforme, a ne
                obećanje potpuno aktivne usluge.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FIZIČKE PRIMJENE ================= */}
      <section className="px-5 py-24 sm:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
              Dizajnirano i za ekran i za ruke.
            </h2>
            <p className="mt-8 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
              Identitet je namjerno razvijen tako da funkcioniše i u
              jednostavnoj jednobojnoj štampi — na kraft papiru, drvetu,
              etiketama i oznakama lokacija za preuzimanje. Prepoznatljivost ne
              zavisi od skupih produkcijskih efekata.
            </p>
          </Reveal>

          {/* jedna velika, pa nejednake širine — bez grida jednakih kartica */}
          <Figura
            medij={M.letakLice}
            caption="Letak — lice"
            sizes="(min-width: 1024px) 62vw, 92vw"
            className="mt-16 lg:w-[62%]"
            bare
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <Figura
              medij={M.pakovanje}
              caption="Kraft kesa i viseća etiketa"
              sizes="(min-width: 1024px) 52vw, 92vw"
              bare
            />
            <Figura
              medij={M.signage}
              caption="Oznaka mjesta za preuzimanje"
              sizes="(min-width: 1024px) 38vw, 80vw"
            />
          </div>

          <Figura
            medij={M.gajba}
            caption="Gajba za povrće"
            sizes="(min-width: 1024px) 70vw, 94vw"
            className="ml-auto mt-16 lg:w-[70%]"
            bare
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <Figura
              medij={M.nosac}
              caption="Nosač za mlijeko"
              sizes="(min-width: 1024px) 38vw, 80vw"
              bare
            />
            <Figura
              medij={M.letakNalicje}
              caption="Letak — naličje"
              sizes="(min-width: 1024px) 52vw, 92vw"
              bare
            />
          </div>

          <Figura
            medij={M.detalj}
            caption="Plodovi iz korpe — materijal za art direkciju"
            sizes="100vw"
            className="mt-20"
          />
        </div>
      </section>

      {/* ================= ZAVRŠNI MOMENT ================= */}
      <section aria-label="Završni prikaz">
        <Image
          src={M.piknik.src}
          width={M.piknik.w}
          height={M.piknik.h}
          alt={M.piknik.alt}
          sizes="100vw"
          className="h-[52vh] w-full object-cover sm:h-[76vh]"
        />
      </section>

      <section className="bg-[color:var(--sp-field)] px-5 py-24 text-[color:var(--sp-cream)] sm:py-36">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <p className="max-w-2xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-cream)]/70 sm:text-[15px]">
              SaPolja pretvara rasutu lokalnu ponudu u prepoznatljiv i pouzdan
              sistem — od više polja, do jedne korpe, za naš sto.
            </p>

            <p className="mt-16 text-[clamp(2.4rem,9vw,7rem)] font-light leading-[1.02]">
              Hrana našeg kraja.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-[color:var(--sp-cream)]/20 pt-8 font-sans text-[10px] uppercase tracking-[0.24em] text-[color:var(--sp-cream)]/70">
              {USLUGE.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <nav
              aria-label="Dalje"
              className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4"
            >
              <Link
                href="/graficki"
                className="group inline-flex items-center gap-3 border border-[color:var(--sp-cream)]/40 px-7 py-3 font-sans text-[10px] uppercase tracking-[0.28em] transition-colors hover:bg-[color:var(--sp-cream)] hover:text-[color:var(--sp-field)]"
              >
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>
                Svi grafički radovi
              </Link>
              <Link
                href="/kontakt"
                className="font-sans text-[10px] uppercase tracking-[0.28em] text-[color:var(--sp-cream)]/70 underline underline-offset-[6px] transition-colors hover:text-[color:var(--sp-cream)]"
              >
                Piši mi
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
