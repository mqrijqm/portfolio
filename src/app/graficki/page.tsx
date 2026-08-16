import type { Metadata } from "next";
import localFont from "next/font/local";
import Reveal from "@/components/Reveal";
import { SteppedDiamond } from "@/components/graficki/Motifs";

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
    "Identiteti, plakati, editorijal i pakovanje. Prvi projekat: Sa polja.",
};

export default function GrafickiPage() {
  return (
    <main
      className={`quiet-page ${gazpacho.variable} min-h-screen bg-linen pt-11 text-forest sm:pt-14`}
    >
      {/* ================= ZAGLAVLJE ================= */}
      <section className="px-5 pb-20 pt-20 text-center sm:pb-28 sm:pt-28">
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

      {/* ================= PRVI PROJEKAT ================= */}
      <section className="px-5 pb-28 sm:pb-40">
        <Reveal y={50}>
          <article className="mx-auto max-w-[1100px] border border-forest/20 bg-linen-light px-5 py-10 sm:px-12 sm:py-14">
            <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-clay">
                Projekat 01
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-forest-soft">
                Grafički dizajn
              </p>
            </header>

            <h2 className="mt-6 font-gazpacho text-[clamp(2.2rem,6vw,4.4rem)] font-light leading-[1.05]">
              Sa polja
            </h2>

            {/* Prazan prostor za sadržaj projekta — ovde idu slike i tekst. */}
            <div className="mt-10 flex min-h-[46vh] items-center justify-center border border-dashed border-forest/25 sm:min-h-[56vh]">
              <p className="px-6 text-center font-sans text-[11px] uppercase tracking-[0.28em] text-forest-soft/70">
                Mesto za projekat
              </p>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
