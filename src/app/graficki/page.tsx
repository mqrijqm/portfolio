import type { Metadata } from "next";
import localFont from "next/font/local";
import Reveal from "@/components/Reveal";
import Plate from "@/components/graficki/Plate";
import {
  Bird,
  Branch,
  Divider,
  SteppedDiamond,
} from "@/components/graficki/Motifs";

/**
 * Gazpacho se učitava samo na ovoj stranici — ostatak sajta ga ne vuče.
 * Fajlovi stoje u src/fonts/.
 */
const gazpacho = localFont({
  src: [
    { path: "../../fonts/Gazpacho-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Gazpacho-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Gazpacho-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/Gazpacho-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-gazpacho-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafički dizajn — Marija",
  description:
    "Identiteti, plakati, editorijal i pakovanje. Tiha strana rada — forma, ritam, boja.",
};

const RADOVI = [
  { title: "Zlatna griva", kind: "Vizuelni identitet", year: "2025" },
  { title: "Noć muzeja", kind: "Serija plakata", year: "2024" },
  { title: "Rez", kind: "Magazin / editorijal", year: "2024" },
  { title: "Podrum 7", kind: "Pakovanje", year: "2023" },
  { title: "Sporo", kind: "Identitet festivala", year: "2025" },
  { title: "Arhiva", kind: "Tipografski eksperiment", year: "2023" },
];

export default function GrafickiPage() {
  return (
    <main
      className={`quiet-page ${gazpacho.variable} relative overflow-hidden bg-linen pt-11 text-forest sm:pt-14`}
    >
      {/* ================= ZAGLAVLJE ================= */}
      <section className="px-5 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-forest-soft">
            Poglavlje 02
          </p>

          <div className="mt-10 flex items-center justify-center gap-9 sm:gap-14">
            {[0, 1, 2].map((i) => (
              <SteppedDiamond
                key={i}
                className="h-9 w-9 text-forest sm:h-12 sm:w-12"
              />
            ))}
          </div>

          <h1 className="mt-12 font-gazpacho text-[clamp(1.7rem,5.2vw,3.6rem)] font-light leading-[1.15] tracking-[0.22em] sm:tracking-[0.3em]">
            GRAFIČKI
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            DIZAJN
          </h1>

          <p className="mx-auto mt-8 max-w-lg font-gazpacho text-[clamp(0.95rem,2vw,1.25rem)] font-light leading-relaxed text-forest-soft">
            Identiteti, plakati, editorijal i pakovanje.
            <br />
            Beograd, od 2016.
          </p>
        </Reveal>
      </section>

      {/* ================= TRIPTIH SA LUKOVIMA ================= */}
      <section className="px-5 pb-24 sm:pb-32">
        <Reveal y={60}>
          <div className="mx-auto flex max-w-[1180px] items-end justify-center gap-3 sm:gap-6">
            <div className="hidden w-[15%] shrink-0 translate-y-10 sm:block">
              <div className="arch aspect-[1/3.4] w-full overflow-hidden bg-linen-light">
                <Plate variant={2} className="h-full w-full" />
              </div>
            </div>

            <div className="w-full sm:w-[52%]">
              <div className="arch aspect-[4/5] w-full overflow-hidden bg-linen-light sm:aspect-[1/1.18]">
                <Plate variant={0} className="h-full w-full" />
              </div>
            </div>

            <div className="hidden w-[15%] shrink-0 translate-y-5 sm:block">
              <div className="arch aspect-[1/3.4] w-full overflow-hidden bg-linen-light">
                <Plate variant={3} className="h-full w-full" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= GRANA I DVA BLOKA TEKSTA ================= */}
      <section className="relative px-5 pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Branch className="ml-auto h-20 w-[62%] max-w-[440px] text-forest sm:h-28" />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-10 max-w-md font-sans text-[13px] leading-[1.65] text-forest sm:text-[15px]">
              Svaki znak počinje kao gomila referenci koje nemaju veze jedna sa
              drugom. Tražim šta ih drži zajedno — ono što ostane posle sečenja
              obično je i odgovor.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="ml-auto mt-16 max-w-md text-right font-sans text-[13px] leading-[1.65] text-forest sm:mt-24 sm:text-[15px]">
              Radim sporo i u slojevima. Prvo forma, pa ritam, pa boja — ukras
              tek na kraju, i samo ako je zaista potreban.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= RED STEPENASTIH ISEČAKA ================= */}
      <section className="overflow-hidden pb-28 sm:pb-36">
        <Reveal y={54}>
          {/* spoljna dva isečka namerno izlaze iz kadra, kao na referenci */}
          <div className="grid grid-cols-3 items-start gap-4 sm:gap-8">
            <div className="aspect-[4/5] -translate-x-[22%]">
              <div className="stepped-cross h-full w-full overflow-hidden">
                <Plate variant={0} className="h-full w-full" />
              </div>
            </div>

            <div className="aspect-[4/5] translate-y-[14%]">
              <div className="stepped-cross h-full w-full overflow-hidden">
                <Plate variant={1} className="h-full w-full" />
              </div>
            </div>

            <div className="aspect-[4/5] translate-x-[22%]">
              <div className="stepped-cross h-full w-full overflow-hidden">
                <Plate variant={2} className="h-full w-full" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= POPIS RADOVA ================= */}
      <section className="px-5 pb-32 sm:pb-40">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <Divider className="mx-auto h-3 w-56 text-forest-soft" />
            <h2 className="mt-10 text-center font-sans text-[10px] uppercase tracking-[0.42em] text-forest-soft">
              Izbor radova
            </h2>
          </Reveal>

          <ul className="mt-12">
            {RADOVI.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05} y={28}>
                <li className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t border-forest/15 py-5 sm:py-6">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-gazpacho text-[clamp(1.35rem,3.4vw,2.2rem)] font-light leading-tight">
                    {r.title}
                  </h3>
                  <span className="ml-auto font-sans text-[11px] uppercase tracking-[0.22em] text-forest-soft">
                    {r.kind}
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.22em] text-forest-soft">
                    {r.year}
                  </span>
                </li>
              </Reveal>
            ))}
            <li className="border-t border-forest/15" />
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-14 text-center font-gazpacho text-lg font-light italic leading-relaxed text-forest-soft">
              Prikazani prilozi su postavka. Zameni ih svojim slikama — okviri
              su spremni da ih prime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= PTICA ================= */}
      <div className="relative px-5 pb-20">
        <Bird className="h-16 w-28 text-forest sm:h-24 sm:w-40" />
      </div>
    </main>
  );
}
