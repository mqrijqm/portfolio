import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Circled, Sparkle } from "@/components/collage/Bits";

export const metadata: Metadata = {
  title: "Grafički dizajn — Marija",
  description:
    "Identiteti, plakati, editorijal, pakovanje i tipografija. Beograd.",
};

/**
 * Prazna stranica — samo pozadina i naslov.
 * Sadržaj (radovi) čeka; gotova sekcija stoji u
 * src/components/sections/GrafickiDizajn.tsx kad zatreba.
 */
export default function GrafickiPage() {
  return (
    <main className="pt-11 sm:pt-14">
      <section className="paper-bg relative flex min-h-[calc(100svh-2.75rem)] items-center overflow-hidden py-20 sm:min-h-[calc(100svh-3.5rem)] sm:py-28">
        {/* ---------- pozadinski isečci ---------- */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          <div className="torn-a absolute -left-24 top-16 h-72 w-72 rotate-12 bg-mustard/25 sm:h-96 sm:w-96" />
          <div className="torn-b absolute -right-16 top-[18%] h-64 w-64 -rotate-6 bg-pink/22 sm:h-80 sm:w-80" />
          <div className="torn-a absolute bottom-[-6%] right-[14%] hidden h-56 w-56 rotate-[8deg] bg-mustard/18 lg:block" />
          <div className="halftone blob-mask absolute bottom-0 left-0 h-64 w-2/3 text-red/25" />
          <div className="halftone-lg blob-mask absolute right-[16%] top-[8%] hidden h-56 w-56 rounded-full text-blue/35 lg:block" />
        </div>

        {/* ---------- naslov ---------- */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-8">
          <Reveal>
            <p className="font-type text-[10px] tracking-[0.32em] text-red">
              POGLAVLJE 02
            </p>

            <div className="relative mt-9 inline-block">
              <h1 className="type-halftone font-display text-[clamp(3.4rem,13vw,8.5rem)] leading-[0.92] tracking-tight">
                GRAFIČKI
              </h1>
              <span className="sr-only">Grafički dizajn</span>
              <p
                aria-hidden="true"
                className="riso font-display text-[clamp(3.4rem,13vw,8.5rem)] leading-[0.92] tracking-tight text-ink"
              >
                DIZAJN
              </p>

              <Circled className="pointer-events-none absolute -left-3 top-[44%] hidden h-[60%] w-[64%] lg:block" />
              <Sparkle
                className="absolute -left-6 -top-7 hidden h-10 w-10 lg:block"
                color="#d79f35"
              />
            </div>

            <div className="rule mt-10 max-w-xl" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
