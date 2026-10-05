import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Proces from "@/components/site/Proces";
import Dugme from "@/components/site/Dugme";
import Reveal from "@/components/Reveal";
import { SteppedDiamond, Pip } from "@/components/Motifs";
import {
  IkonaIdentitet,
  IkonaWeb,
  IkonaIlustracija,
  IkonaSistem,
  IkonaScrol,
  IkonaPoDogovoru,
} from "@/components/site/Ikone";

/**
 * Početna strana u strukturi preuzetoj sa brilean.com:
 * hero sa dva reda naslova (prvi sivi) → tamna izjava → o meni →
 * usluge u karticama → pinovani proces → sa kim radim → radovi → žuto podnožje.
 *
 * Riječi su Marijine (iz sekcija koje su bile na starom landingu),
 * raspored, mreža, tipografija i boje su brileanovi.
 */

const USLUGE = [
  {
    naslov: "Brend identitet",
    tekst:
      "Znak, tipografija, boja i pravila koja ih drže zajedno duže od jedne sezone.",
    Ikona: IkonaIdentitet,
  },
  {
    naslov: "Web dizajn",
    tekst:
      "Sajt nije plakat koji se pomera. Ima svoje vrijeme, težinu i inerciju.",
    Ikona: IkonaWeb,
  },
  {
    naslov: "Ilustracija",
    tekst:
      "Akril na papiru, pa digitalno — kad zatreba nešto što se ne skida sa stocka.",
    Ikona: IkonaIlustracija,
  },
  {
    naslov: "Dizajn sistem",
    tekst:
      "Mreža, tipografija, komponente — da sve ostalo izgleda kao da je isto dete radilo.",
    Ikona: IkonaSistem,
  },
  {
    naslov: "Scrollytelling i animacija",
    tekst:
      "GSAP, Lenis, WebGL — priča koja se otkriva skrolom, ne preko svega odjednom.",
    Ikona: IkonaScrol,
  },
  {
    naslov: "Po dogovoru",
    tekst:
      "Ne nudim gotov paket. Gledam šta projektu treba — pa kažem da li ja to mogu.",
    Ikona: IkonaPoDogovoru,
    akcent: true,
  },
];

const KLIJENTI = [
  {
    naslov: "Brendovi u začetku",
    tekst: "Koji trebaju identitet od nule, a ne logo na brzinu.",
  },
  {
    naslov: "E-com prodavnice",
    tekst:
      "Koje treba da rade same od sebe — i da izgledaju kao da znaju šta rade.",
  },
  {
    naslov: "Kultura i izdavaštvo",
    tekst:
      "Festivali, magazini, izložbe — stvari koje moraju da izgledaju skupo, a nemaju budžet za to.",
  },
  {
    naslov: "Studiji i agencije",
    tekst: "Kojima treba pouzdan dizajner za projekat koji ne smije da zakasni.",
  },
];

const RADOVI = [
  {
    ime: "SaPolja",
    tag: "Brend identitet",
    godina: "2026",
    href: "/brending",
  },
  {
    ime: "Livadski med",
    tag: "Brend sistem · ambalaža",
    godina: "2026",
    href: "/livadski-med",
  },
  {
    ime: "Studio Nora",
    tag: "Sajt arhitektonskog studija",
    godina: "2025",
    href: "https://studionora.rs",
    spolja: true,
  },
  {
    ime: "Rez online",
    tag: "Digitalno izdanje magazina",
    godina: "2024",
    href: "https://rez-magazin.rs",
    spolja: true,
  },
  {
    ime: "Podrum 7",
    tag: "Prodavnica vina",
    godina: "2024",
    href: "https://podrum7.rs",
    spolja: true,
  },
  {
    ime: "Sporo",
    tag: "Sajt festivala sporog filma",
    godina: "2025",
    href: "https://sporo.film",
    spolja: true,
  },
];

const PODACI = [
  ["Baza", "Banja Luka, Bosna i Hercegovina"],
  ["Radim", "identiteti · plakati · editorijal · sajtove"],
  ["Alati", "Figma · Illustrator · Photoshop · After Effects"],
  ["Slabost", "star papir i tvrde ivice"],
] as const;

function Strelica({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 7h9M7.5 3 11.5 7l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Landing() {
  return (
    <>
      <Nav />

      <main className="flex flex-col">
        {/* ============================ HERO ============================ */}
        <section
          id="hero"
          className="flex min-h-svh flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:px-16"
        >
          <div className="mx-auto w-full max-w-[100rem]">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-5">
              <Reveal className="lg:col-span-8" y={40}>
                <h1 className="h1">
                  <span className="block text-smoke">Tvoja ideja,</span>
                  <span className="block">moj dizajn.</span>
                </h1>
              </Reveal>

              <Reveal className="lg:col-span-4" delay={0.15} y={30}>
                <p className="max-w-[42ch] text-lg-brilean text-mute">
                  Grafički i web dizajn — identiteti, plakati, editorijal i
                  sajtovi. Radim iz Banjeuke za ljude kojima treba da izgleda
                  kao nešto.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-steel pt-5 text-sm text-mute sm:mt-16">
              <span className="uppercase tracking-[0.18em]">Scroll</span>
              <SteppedDiamond className="h-4 w-4 text-flare" />
            </div>
          </div>
        </section>

        {/* ====================== TAMNA IZJAVA ========================= */}
        <section className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16">
          <div className="mx-auto grid max-w-[100rem] gap-8 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-3">
              <span className="uppertitle uppertitle-tamna">O radu</span>
            </div>

            <Reveal className="lg:col-span-9">
              <p className="h4 max-w-[28ch]">
                Radim sa ljudima koji imaju šta da kažu. Pravim identitet,
                sliku i sajt koji to nose dalje — sve do fajla koji ide u štampu.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ========================== O MENI =========================== */}
        <section
          id="o-meni"
          className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16"
        >
          <div className="mx-auto grid max-w-[100rem] gap-10 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-3">
              <span className="uppertitle">O meni</span>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <Reveal>
                <p className="max-w-[46ch] text-lg-brilean">
                  Kao mala sam sekla mamine magazine. Ono što je nastajalo nije
                  bilo lepo — ali je bilo moje, i bilo je glasno.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[70ch] leading-relaxed text-mute">
                  Danas radim potpuno istu stvar, samo se drugačije zove:
                  kompozicija, hijerarhija, kontrast. Makaze su postale kursor,
                  mamini magazini su postali arhiva, a lepak se sad zove mrežni
                  sistem. Suština nije mrdnula ni za milimetar — uzmeš stvari
                  koje ne idu zajedno i teraš ih da idu.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <Dugme href="/kontakt" className="mt-9">
                  Piši mi
                </Dugme>
              </Reveal>

              <Reveal delay={0.18}>
                <dl className="mt-14 border-t border-steel">
                  {PODACI.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap items-baseline gap-x-8 gap-y-1 border-b border-steel py-4"
                    >
                      <dt className="w-24 shrink-0 text-xs uppercase tracking-[0.2em] text-flare">
                        {k}
                      </dt>
                      <dd className="leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================== USLUGE =========================== */}
        <section
          id="usluge"
          className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16"
        >
          <div className="mx-auto grid max-w-[100rem] gap-10 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-3">
              <span className="uppertitle">Šta radim</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
              {USLUGE.map((u, i) => (
                <Reveal key={u.naslov} delay={(i % 2) * 0.06} y={32}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                      u.akcent
                        ? "border-transparent bg-acid"
                        : "border-steel bg-paper"
                    }`}
                  >
                    <u.Ikona className="h-10 w-10 text-slate" />
                    <h3 className="mt-7 h6">{u.naslov}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {u.tekst}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================== PROCES =========================== */}
        <Proces />

        {/* ======================= SA KIM RADIM ======================== */}
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[100rem]">
            <Reveal>
              <span className="uppertitle">Sa kim radim</span>
              <h2 className="h3 mt-6 max-w-[18ch]">
                Ljudi kojima je stalo{" "}
                <span className="text-smoke">kako izgleda.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {KLIJENTI.map((k, i) => (
                <Reveal key={k.naslov} delay={i * 0.06} y={32}>
                  <article className="flex h-full flex-col rounded-2xl bg-mist p-6 sm:p-7">
                    <Pip className="h-2 w-2 text-flare" />
                    <h3 className="mt-7 h6">{k.naslov}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {k.tekst}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= IZABRANI RADOVI ===================== */}
        <section
          id="radovi"
          className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16"
        >
          <div className="mx-auto grid max-w-[100rem] gap-10 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-3">
              <span className="uppertitle">Izabrani radovi</span>
            </div>

            <ul className="border-t border-steel lg:col-span-9">
              {RADOVI.map((r, i) => (
                <li key={r.ime}>
                  <Reveal delay={i * 0.04} y={24}>
                    <a
                      href={r.href}
                      {...("spolja" in r && r.spolja
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group -mx-3 flex items-center gap-5 border-b border-steel px-3 py-6 transition-colors hover:bg-fog sm:gap-8 sm:py-7"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="h6">{r.ime}</h3>
                        <p className="mt-1.5 text-sm text-mute">{r.tag}</p>
                      </div>

                      <span className="hidden text-xs uppercase tracking-[0.18em] text-mute sm:block">
                        {r.godina}
                      </span>

                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-steel transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-acid">
                        <Strelica className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
