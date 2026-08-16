import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { SteppedDiamond, Pip } from "@/components/Motifs";

/* Zameni pravim podacima. */
const EMAIL = "zdravo@marija.rs";

const MREZE = [
  { label: "Instagram", href: "https://instagram.com/", handle: "@marija" },
  { label: "Behance", href: "https://behance.net/", handle: "/marija" },
  { label: "LinkedIn", href: "https://linkedin.com/", handle: "/in/marija" },
  { label: "GitHub", href: "https://github.com/mqrijqm", handle: "@mqrijqm" },
];

const RAZLOZI = [
  "ti treba identitet koji se pamti duže od jednog kvartala",
  "imaš sajt koji izgleda kao svaki drugi sajt",
  "imaš plakat koji niko ne gleda",
  "ne znaš tačno šta ti treba, ali znaš da nije ovo što sad imaš",
];

export default function Kontakt() {
  return (
    <>
      <section className="px-5 pb-28 pt-20 sm:pb-36 sm:pt-28">
        <SectionHeader chapter="Poglavlje 05" title="KONTAKT" />

        <div className="mx-auto mt-20 grid max-w-[1180px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-xl text-[clamp(1.5rem,3.6vw,2.4rem)] font-light italic leading-[1.2]">
                Imaš nešto što treba da izgleda kao nešto?
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex flex-wrap items-center gap-3 border-b border-clay pb-2 text-[clamp(1.4rem,4.4vw,2.8rem)] font-light leading-none transition-colors hover:text-clay"
              >
                {EMAIL}
                <span className="inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md font-sans text-[13px] leading-[1.7] text-forest-soft">
                Odgovaram u roku od dan-dva. Ako je hitno, napiši „HITNO&ldquo; u
                naslovu — stvarno pomaže.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-12 border-t border-forest/15">
                {MREZE.map((m) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-6 border-b border-forest/15 py-4 transition-colors hover:text-clay"
                    >
                      <span className="text-lg font-light">{m.label}</span>
                      <span className="font-sans text-[11px] tracking-[0.18em] text-forest-soft">
                        {m.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---------- razlozi ---------- */}
          <Reveal delay={0.1} y={44}>
            <div className="border border-forest/20 bg-linen-light p-7 sm:p-9">
              <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-clay">
                Piši mi ako…
              </p>

              <ul className="mt-8 space-y-6">
                {RAZLOZI.map((r) => (
                  <li key={r} className="flex gap-4">
                    <Pip className="mt-2.5 h-1.5 w-1.5 shrink-0 text-forest-soft" />
                    <span className="font-light leading-snug">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- podnožje ---------- */}
      <footer className="border-t border-forest/15 px-5 py-12 sm:py-16">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-2xl font-light tracking-[0.24em] sm:text-3xl">
              MARIJA
              <SteppedDiamond className="h-4 w-4 text-clay" />
            </p>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.26em] text-forest-soft">
              Grafički i web dizajn · Banja Luka
            </p>
          </div>

          <div className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.2em] text-forest-soft/80 md:text-right">
            <p>Izdanje No. 01 · {new Date().getFullYear()}</p>
            <p className="mt-1">Slog: Gazpacho</p>
          </div>
        </div>
      </footer>
    </>
  );
}
