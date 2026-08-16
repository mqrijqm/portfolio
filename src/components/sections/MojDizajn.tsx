import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Divider, Pip } from "@/components/Motifs";

const MANIFEST = [
  {
    text: "Prazan prostor nije greška. To je pauza pre nego što nešto kažeš.",
    mark: "Prazan prostor",
  },
  {
    text: "Ako sve viče, ništa se ne čuje. Biram jedno mesto gde se viče, ostalo šapuće.",
    mark: "jedno mesto",
  },
  {
    text: "Lepo bez razloga je dekoracija. Nemam ništa protiv dekoracije — samo je ne naplaćujem kao ideju.",
    mark: "kao ideju",
  },
  {
    text: "Referenca nije da se prepiše. Referenca je da se razume zašto uopšte radi.",
    mark: "zašto uopšte radi",
  },
  {
    text: "Sve što napravim mora da preživi loš telefon, lošu štampu i lošu sredu.",
    mark: "lošu sredu",
  },
];

const PROCES = [
  {
    n: "I",
    title: "Slušam",
    text: "Prvo ćutim. Većina brifova sama sebi protivreči, i to je najkorisnija stvar u njima.",
  },
  {
    n: "II",
    title: "Sečem",
    text: "Gomilam reference koje nemaju veze jedna sa drugom. Tražim šta ih ipak drži zajedno.",
  },
  {
    n: "III",
    title: "Slažem",
    text: "Mreža, hijerarhija, kontrast. Ovde se odlučuje da li nešto ima kičmu ili nema.",
  },
  {
    n: "IV",
    title: "Lepim",
    text: "Fajlovi, uputstvo za korišćenje, predaja. Dizajn koji niko ne ume da koristi nije završen.",
  },
];

export default function MojDizajn() {
  return (
    <section className="px-5 pb-28 pt-20 sm:pb-40 sm:pt-28">
      <SectionHeader
        chapter="Poglavlje 04"
        title="MOJ DIZAJN"
        lead="Pet stvari u koje verujem dovoljno da ih napišem, i četiri koje radim svaki put istim redom."
      />

      {/* ---------- manifest ---------- */}
      <div className="mx-auto mt-20 max-w-[1000px] border-t border-forest/15">
        {MANIFEST.map((m, i) => {
          const [pre, post] = m.text.split(m.mark);

          return (
            <Reveal key={m.mark} y={32} delay={i * 0.04}>
              <div className="flex gap-6 border-b border-forest/15 py-8 sm:gap-10 sm:py-12">
                <Pip className="mt-3 h-2 w-2 shrink-0 text-clay sm:mt-4" />
                <p className="text-[clamp(1.2rem,3vw,2rem)] font-light leading-[1.35]">
                  {pre}
                  <span className="text-clay">{m.mark}</span>
                  {post}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ---------- proces ---------- */}
      <div className="mx-auto mt-24 max-w-[1180px]">
        <Reveal className="text-center">
          <Divider className="mx-auto h-3 w-44 text-forest-soft/70" />
          <h3 className="mt-8 font-sans text-[10px] uppercase tracking-[0.42em] text-forest-soft">
            Kako radim
          </h3>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} y={36}>
              <article className="h-full border-t border-forest/25 pt-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-clay">
                  {p.n}
                </p>
                <h4 className="mt-4 text-2xl font-light">{p.title}</h4>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-forest-soft sm:text-[13px]">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
