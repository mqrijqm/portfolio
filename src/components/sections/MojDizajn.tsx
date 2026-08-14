import Reveal from "@/components/Reveal";
import RansomText from "@/components/collage/RansomText";
import Marquee from "@/components/Marquee";
import {
  Arrow,
  Asterisk,
  Burst,
  Flower,
  Lips,
  Manicule,
  Moth,
  Scribble,
  Sparkle,
  Sun,
  DotGrid,
} from "@/components/collage/Bits";

const MANIFEST = [
  {
    n: "01",
    text: "Prazan prostor nije greška. To je pauza pre nego što nešto kažeš.",
    mark: "Prazan prostor",
  },
  {
    n: "02",
    text: "Ako sve viče, ništa se ne čuje. Biram jedno mesto gde se viče, ostalo šapuće.",
    mark: "jedno mesto",
  },
  {
    n: "03",
    text: "Lepo bez razloga je dekoracija. Nemam ništa protiv dekoracije — samo je ne naplaćujem kao ideju.",
    mark: "kao ideju",
  },
  {
    n: "04",
    text: "Referenca nije da se prepiše. Referenca je da se razume zašto uopšte radi.",
    mark: "zašto uopšte radi",
  },
  {
    n: "05",
    text: "Sve što napravim mora da preživi loš telefon, lošu štampu i lošu sredu.",
    mark: "lošu sredu",
  },
];

const PROCES = [
  {
    n: "I",
    title: "SLUŠAM",
    text: "Prvo ćutim. Većina brifova sama sebi protivreči, i to je najkorisnija stvar u njima.",
  },
  {
    n: "II",
    title: "SEČEM",
    text: "Gomilam reference koje nemaju veze jedna sa drugom. Tražim šta ih ipak drži zajedno.",
  },
  {
    n: "III",
    title: "SLAŽEM",
    text: "Mreža, hijerarhija, kontrast. Ovde se odlučuje da li nešto ima kičmu ili nema.",
  },
  {
    n: "IV",
    title: "LEPIM",
    text: "Fajlovi, uputstvo za korišćenje, predaja. Dizajn koji niko ne ume da koristi nije završen.",
  },
];

export default function MojDizajn() {
  return (
    <section
      id="moj-dizajn"
      className="paper-bg relative overflow-hidden py-20 sm:py-28"
    >
      {/* ---------- pozadinski kolaž ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        aria-hidden="true"
      >
        <div className="torn-a absolute -left-20 top-32 h-80 w-80 rotate-12 bg-pink/20" />
        <div className="torn-b absolute right-[-6%] top-[52%] h-72 w-72 -rotate-6 bg-mint/20" />
        <div className="halftone-lg blob-mask absolute left-[38%] top-[18%] h-40 w-40 rounded-full text-mustard/50" />
        <Sun className="absolute -right-8 top-8 h-40 w-40 opacity-40" />
        <Moth className="absolute bottom-24 left-[6%] h-28 w-36 -rotate-12 opacity-35" />
        <Flower className="absolute right-[12%] top-[38%] h-20 w-20 rotate-45 opacity-45" />
        <Lips className="absolute left-[52%] top-[70%] hidden h-14 w-24 -rotate-12 opacity-40 lg:block" />
        <DotGrid className="absolute bottom-[12%] right-[30%] hidden h-20 w-20 opacity-25 lg:block" />
        <Scribble className="absolute left-[28%] top-[8%] hidden h-14 w-40 opacity-30 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* ---------- zaglavlje ---------- */}
        <Reveal className="mb-14 sm:mb-20">
          <p className="font-type text-[10px] tracking-[0.32em] text-red">
            POGLAVLJE 04
          </p>
          <h2 className="mt-8 flex flex-wrap text-[clamp(2.6rem,10vw,8rem)] leading-[0.88]">
            <span className="sr-only">Moj dizajn</span>
            <RansomText text="MOJ DIZAJN" seed={23} jitter={9} />
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Burst className="h-16 w-16" color="#2e4a79" />
            <p className="max-w-xl font-serif text-lg italic leading-snug text-ink sm:text-2xl">
              Pet stvari u koje verujem dovoljno da ih napišem, i četiri koje
              radim svaki put istim redom.
            </p>
          </div>
        </Reveal>

        {/* ---------- manifest ---------- */}
        <div className="border-t-4 border-double border-ink">
          {MANIFEST.map((m, i) => {
            const [pre, post] = m.text.split(m.mark);
            const flip = i % 2 === 1;

            return (
              <Reveal key={m.n} y={40} delay={0.04 * i}>
                <div
                  className={`flex flex-col gap-4 border-b-2 border-ink/25 py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-12 ${
                    flip ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span
                    className="type-halftone shrink-0 font-display text-[clamp(3.5rem,10vw,8rem)] leading-none"
                    aria-hidden="true"
                  >
                    {m.n}
                  </span>

                  <p className="max-w-3xl font-serif text-[clamp(1.35rem,3.2vw,2.4rem)] leading-[1.22]">
                    {pre}
                    <span className="bg-mustard/70 px-1.5 py-0.5 not-italic shadow-[2px_2px_0_rgba(22,19,14,0.25)]">
                      {m.mark}
                    </span>
                    {post}
                  </p>

                  {i === 0 && (
                    <Sparkle
                      className="hidden h-8 w-8 shrink-0 lg:block"
                      color="#c3341d"
                    />
                  )}
                  {i === 2 && (
                    <Manicule className="hidden h-12 w-20 shrink-0 -rotate-6 lg:block" />
                  )}
                  {i === 4 && (
                    <Asterisk
                      className="hidden h-9 w-9 shrink-0 lg:block"
                      color="#2e4a79"
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ---------- proces ---------- */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <h3 className="font-display text-3xl tracking-[0.08em] sm:text-5xl">
                KAKO RADIM
              </h3>
              <Arrow className="h-10 w-20 shrink-0" />
              <span className="hidden h-px flex-1 bg-ink/30 sm:block" />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07} y={40}>
                <div
                  className="relative h-full border-2 border-ink bg-paper-light p-6 shadow-[4px_5px_0_rgba(22,19,14,0.25)]"
                  style={{ transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)` }}
                >
                  <span className="absolute -top-4 left-5 border-2 border-ink bg-red px-2.5 py-0.5 font-display text-sm tracking-widest text-paper-light">
                    {p.n}
                  </span>
                  <h4 className="mt-2 font-display text-2xl tracking-[0.1em]">
                    {p.title}
                  </h4>
                  <p className="mt-3 font-type text-[12px] leading-relaxed text-ink-soft">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- traka ---------- */}
      <div className="relative z-10 mt-20 border-y-2 border-ink bg-red py-3 text-paper-light">
        <Marquee
          items={[
            "SEČEM",
            "SLAŽEM",
            "LOMIM",
            "LEPIM",
            "PA OPET ISPOČETKA",
          ]}
          speed={30}
          reverse
          separator="✂"
          className="font-display text-2xl tracking-[0.12em] sm:text-4xl"
        />
      </div>
    </section>
  );
}
