import Reveal from "@/components/Reveal";
import Eye from "@/components/collage/Eye";
import {
  Burst,
  Manicule,
  Sparkle,
  Stamp,
  WavyRule,
  Ticket,
} from "@/components/collage/Bits";

/* Zameni pravim podacima. */
const EMAIL = "zdravo@marija.rs";
const MREZE = [
  { label: "INSTAGRAM", href: "https://instagram.com/", handle: "@marija" },
  { label: "BEHANCE", href: "https://behance.net/", handle: "/marija" },
  { label: "LINKEDIN", href: "https://linkedin.com/", handle: "/in/marija" },
  { label: "GITHUB", href: "https://github.com/mqrijqm", handle: "@mqrijqm" },
];

const RAZLOZI = [
  "ti treba identitet koji se pamti duže od jednog kvartala",
  "imaš sajt koji izgleda kao svaki drugi sajt",
  "imaš plakat koji niko ne gleda",
  "ne znaš tačno šta ti treba, ali znaš da nije ovo što sad imaš",
];

const IRISI = ["#c3341d", "#2e4a79", "#d79f35", "#6f8f7c", "#e57f92"];

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="paper-bg relative overflow-hidden pb-20 pt-4 sm:pb-28 sm:pt-8"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="halftone blob-mask absolute left-0 top-0 h-full w-1/3 text-blue/20" />
        <div className="torn-a absolute right-[-10%] top-10 h-80 w-80 rotate-12 bg-mustard/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-8">
        {/* ---------- glavni deo ---------- */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-xl font-serif text-[clamp(1.5rem,3.6vw,2.6rem)] italic leading-[1.15]">
                Imaš nešto što treba da izgleda kao nešto?
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-8 inline-flex flex-wrap items-center gap-3 border-b-4 border-red pb-2 font-display text-[clamp(1.5rem,5vw,3.4rem)] leading-none tracking-tight transition-colors hover:text-red"
              >
                {EMAIL}
                <span className="inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md font-type text-[12px] leading-relaxed text-ink-soft">
                Odgovaram u roku od dan-dva. Ako je hitno, napiši „HITNO&ldquo; u
                naslovu — stvarno pomaže.
              </p>
            </Reveal>

            {/* mreže kao poštanske marke */}
            <Reveal delay={0.16}>
              <ul className="mt-10 flex flex-wrap gap-4">
                {MREZE.map((m, i) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                      style={{ transform: `rotate(${i % 2 ? 2.5 : -2.5}deg)` }}
                    >
                      <Stamp
                        className="h-28 w-24 transition-transform duration-300 group-hover:-translate-y-1.5"
                        label={m.label}
                        accent={IRISI[i]}
                      />
                      <span className="mt-1 block text-center font-type text-[10px] tracking-[0.15em] text-ink-soft">
                        {m.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---------- kupon ---------- */}
          <Reveal delay={0.1} y={54}>
            <div className="relative border-4 border-dashed border-ink bg-paper-light p-7 shadow-[6px_7px_0_rgba(22,19,14,0.2)] sm:p-9">
              <Burst
                className="absolute -right-7 -top-7 h-20 w-20"
                color="#c3341d"
              />
              <Sparkle
                className="absolute -bottom-4 -left-4 h-9 w-9"
                color="#d79f35"
              />

              <p className="font-type text-[10px] tracking-[0.28em] text-red">
                ISECI I POŠALJI
              </p>
              <h3 className="mt-3 font-display text-3xl leading-none tracking-wide sm:text-4xl">
                PIŠI MI AKO…
              </h3>

              <ul className="mt-6 space-y-4">
                {RAZLOZI.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-0.5 inline-block h-5 w-5 shrink-0 border-2 border-ink" />
                    <span className="font-serif text-base leading-snug">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>

              <WavyRule className="my-6 h-4 w-full" color="#2e4a79" />

              <div className="flex items-end justify-between gap-4">
                <div className="font-type text-[11px] leading-relaxed text-ink-soft">
                  <p>POTPIS:</p>
                  <p className="mt-6 border-b border-ink/50 pb-1">
                    ______________________
                  </p>
                </div>
                <Manicule className="h-12 w-20 shrink-0 -rotate-12" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- red očiju, zatvara priču ---------- */}
        <Reveal className="mt-20">
          <div className="flex items-end justify-center gap-3 sm:gap-8">
            {IRISI.map((c, i) => (
              <div
                key={c}
                className="w-[16%] max-w-[150px]"
                style={{ transform: `rotate(${(i - 2) * 5}deg)` }}
              >
                <Eye
                  className="w-full"
                  iris={c}
                  halftone={i % 2 === 0}
                  tracks={false}
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-type text-[10px] tracking-[0.3em] text-ink-soft">
            HVALA ŠTO SI GLEDAO/LA
          </p>
        </Reveal>

        <Ticket
          className="mx-auto mt-10 h-16 w-full max-w-xs rotate-1"
          label="KRAJ IZDANJA"
        />
      </div>

      {/* ---------- podnožje ---------- */}
    </section>
  );
}
