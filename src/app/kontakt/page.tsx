import type { Metadata } from "next";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/Reveal";
import { Pip } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Kontakt — Marija",
  description: "Piši mi. Banja Luka, grafički i web dizajn.",
};

const EMAIL = "mqrijqio@gmail.com";

const RAZLOZI = [
  "ti treba identitet koji se pamti duže od jednog kvartala",
  "imaš sajt koji izgleda kao svaki drugi sajt",
  "imaš plakat koji niko ne gleda",
  "ne znaš tačno šta ti treba, ali znaš da nije ovo što sad imaš",
];

const KANALI = [
  {
    label: "Najbrže",
    ime: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
    akcent: true,
  },
  {
    label: "Telefon",
    ime: "Poziv ili SMS",
    handle: "+387 66 304 294",
    href: "tel:+38766304294",
  },
  {
    label: "LinkedIn",
    ime: "Radni kontekst",
    handle: "/in/marija-malešević",
    href: "https://www.linkedin.com/in/marija-malešević",
    spolja: true,
  },
];

function Strelica() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

export default function KontaktPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ============================ HERO ============================ */}
        <section className="px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-16">
          <div className="mx-auto grid max-w-[100rem] gap-8 lg:grid-cols-12 lg:items-end lg:gap-5">
            <Reveal className="lg:col-span-8" y={40}>
              <h1 className="h1">
                <span className="block text-smoke">Imaš nešto</span>
                <span className="block">što treba da izgleda kao nešto?</span>
              </h1>
            </Reveal>

            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15} y={30}>
              <p className="max-w-[40ch] text-lg-brilean text-mute">
                Odgovaram u roku od dan-dva. Ako je hitno, napiši „HITNO“ u
                naslovu — stvarno pomaže.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================== KANALI + PIŠI MI AKO ==================== */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16">
          <div className="mx-auto grid max-w-[100rem] gap-12 lg:grid-cols-12 lg:gap-5">
            {/* ---------- razlozi ---------- */}
            <div className="lg:col-span-5">
              <span className="uppertitle">Piši mi ako…</span>

              <ul className="mt-7 border-t border-steel">
                {RAZLOZI.map((r) => (
                  <li
                    key={r}
                    className="flex gap-4 border-b border-steel py-5"
                  >
                    <Pip className="mt-2.5 h-2 w-2 shrink-0 text-flare" />
                    <span className="leading-snug">{r}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 max-w-[46ch] text-sm leading-relaxed text-mute">
                Ne mora da bude veliki projekat. Dovoljno je da znaš šta ne
                voliš — ostalo ćemo složiti.
              </p>
            </div>

            {/* ---------- kanali ---------- */}
            <div className="grid content-start gap-4 lg:col-span-6 lg:col-start-7">
              {KANALI.map((k, i) => (
                <Reveal key={k.ime} delay={i * 0.06} y={28}>
                  <a
                    href={k.href}
                    {...("spolja" in k && k.spolja
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`group flex items-center gap-5 rounded-2xl border p-6 transition-colors sm:p-7 ${
                      k.akcent
                        ? "border-transparent bg-acid"
                        : "border-steel bg-paper hover:bg-fog"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {k.label}
                      </p>
                      <p className="mt-2 h6">{k.handle}</p>
                      <p className="mt-1 text-sm text-mute">{k.ime}</p>
                    </div>

                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-acid">
                      <Strelica />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= KAKO SARAĐUJEMO ===================== */}
        <section className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16">
          <div className="mx-auto grid max-w-[100rem] gap-8 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-3">
              <span className="uppertitle uppertitle-tamna">
                Kako sarađujemo
              </span>
            </div>

            <div className="lg:col-span-9">
              <Reveal>
                <p className="h4 max-w-[26ch]">
                  Prvo razgovor, pa ponuda sa tačnim stavkama. Radi se u
                  etapama, sa dogovorenim rokovima — bez iznenađenja na kraju.
                </p>
              </Reveal>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["01", "Razgovor", "Kratko, bez prezentacija. Čujem šta treba."],
                  ["02", "Ponuda", "Stavke, rok, cijena. Sve crno na bijelom."],
                  ["03", "Rad", "Etape sa pregledom između — ne čekaš do kraja."],
                  ["04", "Predaja", "Fajlovi, uputstvo, podrška posle lansiranja."],
                ].map(([n, naslov, tekst], i) => (
                  <Reveal key={n} delay={i * 0.06} y={30}>
                    <article className="h-full border-t border-white/20 pt-5">
                      <p className="font-sans text-xs tracking-[0.18em] text-acid">
                        {n}
                      </p>
                      <h3 className="mt-3 h6">{naslov}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-silver">
                        {tekst}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
