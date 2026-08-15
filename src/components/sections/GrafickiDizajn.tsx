import PosterArt from "@/components/collage/PosterArt";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import {
  Burst,
  Circled,
  Manicule,
  Sparkle,
  Label,
} from "@/components/collage/Bits";

const RADOVI = [
  {
    title: "ZLATNA GRIVA",
    sub: "VIZUELNI IDENTITET",
    year: "2025",
    note: "Logotip, tipografski sistem i pakovanje za malu pivaru.",
    variant: 0,
    rot: -2.5,
  },
  {
    title: "NOĆ MUZEJA",
    sub: "SERIJA PLAKATA",
    year: "2024",
    note: "Šest plakata, jedna mreža, nijedan isti.",
    variant: 1,
    rot: 2,
  },
  {
    title: "REZ",
    sub: "MAGAZIN / EDITORIJAL",
    year: "2024",
    note: "Nezavisni časopis o gradu. Prelom i korice.",
    variant: 2,
    rot: -1.5,
  },
  {
    title: "PODRUM 7",
    sub: "PAKOVANJE",
    year: "2023",
    note: "Etikete za seriju od sedam vina.",
    variant: 3,
    rot: 3,
  },
  {
    title: "SPORO",
    sub: "IDENTITET FESTIVALA",
    year: "2025",
    note: "Festival sporog filma. Sve je namerno kasnilo.",
    variant: 4,
    rot: -3,
  },
  {
    title: "ARHIVA",
    sub: "TIPOGRAFSKI EKSPERIMENT",
    year: "2023",
    note: "Slova skenirana sa starih računa i vraćena u život.",
    variant: 5,
    rot: 1.5,
  },
];

export default function GrafickiDizajn() {
  return (
    <section
      id="graficki-dizajn"
      className="paper-bg relative overflow-hidden pb-20 pt-4 sm:pb-28 sm:pt-8"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="torn-b absolute right-[-8%] top-16 h-96 w-96 rotate-12 bg-blue/12" />
        <div className="halftone blob-mask absolute bottom-0 left-0 h-64 w-2/3 text-red/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8">
        {/* ---------- zaglavlje ---------- */}
        <Reveal className="mb-12 sm:mb-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
            <div className="relative">
              <p className="max-w-2xl font-serif text-lg leading-relaxed text-ink sm:text-xl">
                Identiteti, plakati, prelom, pakovanje. Počinjem uvek isto — od
                gomile referenci koje nemaju veze jedna sa drugom, pa tražim
                šta ih drži zajedno. Ono što ostane posle svog tog sečenja
                obično je i odgovor.
              </p>
              <p className="mt-5 max-w-2xl font-type text-[13px] leading-relaxed text-ink-soft">
                Vrtlari su farbali bele ruže u crveno jer su posadili
                pogrešne. Pola posla u dizajnu je da se pogrešna ruža uopšte
                ne posadi.
              </p>
              <Sparkle
                className="absolute -left-7 -top-6 hidden h-9 w-9 lg:block"
                color="#d79f35"
              />
            </div>

            <div className="relative">
              <ul className="flex flex-wrap gap-2 font-type text-[10px] tracking-[0.18em]">
                {[
                  "IDENTITET",
                  "LOGOTIP",
                  "PLAKAT",
                  "EDITORIJAL",
                  "PAKOVANJE",
                  "TIPOGRAFIJA",
                ].map((t) => (
                  <li
                    key={t}
                    className="border border-ink bg-paper-light px-3 py-1.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Circled className="pointer-events-none absolute -left-4 -top-3 hidden h-20 w-52 lg:block" />
            </div>
          </div>

          <div className="rule mt-10" />
        </Reveal>

        {/* ---------- radovi ---------- */}
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {RADOVI.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 0.08}
              y={54}
              className={i % 2 === 1 ? "sm:mt-14" : ""}
            >
              <article className="group relative">
                {i % 3 === 0 && (
                  <span className="tape left-8 top-0 z-20 -translate-y-1/2 -rotate-6" />
                )}
                {i % 3 === 2 && (
                  <span className="tape right-6 top-0 z-20 -translate-y-1/2 rotate-6" />
                )}

                <div
                  className="photo-frame relative p-3 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-0"
                  style={{ transform: `rotate(${r.rot}deg)` }}
                >
                  <PosterArt
                    variant={r.variant}
                    title={r.title}
                    sub={r.sub}
                    className="w-full"
                  />
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-3 border-t-2 border-ink pt-2">
                  <h3 className="font-display text-xl tracking-wide">
                    {r.title}
                  </h3>
                  <span className="shrink-0 font-type text-[10px] tracking-[0.2em] text-ink-soft">
                    {r.year}
                  </span>
                </div>
                <p className="mt-1.5 font-type text-[12px] leading-relaxed text-ink-soft">
                  {r.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ---------- napomena ---------- */}
        <Reveal className="mt-16">
          <div className="relative mx-auto flex max-w-2xl items-center gap-5 border-2 border-ink bg-paper-light px-6 py-5">
            <Manicule className="hidden h-12 w-20 shrink-0 sm:block" />
            <p className="font-type text-[12px] leading-relaxed text-ink-soft">
              Prikazani radovi su primeri postavke. Zameni ih svojim
              fotografijama — sve je spremno da ih primi.
            </p>
            <Burst
              className="absolute -right-6 -top-6 hidden h-16 w-16 sm:block"
              color="#d79f35"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- traka ---------- */}
      <div className="relative z-10 mt-20 border-y-2 border-ink bg-ink py-3 text-paper-light">
        <Marquee
          items={[
            "IDENTITET",
            "PLAKAT",
            "PRELOM",
            "PAKOVANJE",
            "TIPOGRAFIJA",
            "KOLAŽ",
          ]}
          speed={34}
          className="font-display text-2xl tracking-[0.12em] sm:text-4xl"
        />
      </div>

      <Label
        className="relative z-10 mx-auto -mt-6 hidden h-12 w-56 -rotate-3 sm:block"
        text="OD 2016."
      />
    </section>
  );
}
