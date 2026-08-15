import Reveal from "@/components/Reveal";
import PlayingCard from "@/components/wonderland/PlayingCard";
import { PAGES } from "@/lib/pages";
import {
  Mushroom,
  Rose,
  PocketWatch,
  TopHat,
  Doorway,
} from "@/components/wonderland/WBits";
import { Manicule, WavyRule } from "@/components/collage/Bits";
import type { ReactNode } from "react";

/** Ilustracija na svakoj karti — po jedna scena iz knjige. */
const ART: Record<string, ReactNode> = {
  "/ko-sam-ja": <Mushroom className="h-full w-full" />,
  "/graficki-dizajn": <Rose className="h-full w-full" />,
  "/web-dizajn": <PocketWatch className="h-full w-full" />,
  "/moj-dizajn": <TopHat className="h-full w-full" />,
  "/kontakt": <Doorway className="h-full w-full" />,
};

/** Blagi nagib da špil izgleda kao razastrt rukom. */
const TILT = [-5, 2.5, -1.5, 4, -3];

export default function Deck() {
  return (
    <section
      id="spil"
      className="paper-bg relative overflow-hidden py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="checker absolute inset-x-0 bottom-0 h-40 text-ink/[0.06]" />
        <div className="halftone blob-mask absolute left-[6%] top-10 h-56 w-72 text-teal/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="font-type text-[10px] tracking-[0.32em] text-red">
            PET KARATA, PET POGLAVLJA
          </p>
          <h2 className="riso mt-5 font-display text-[clamp(2.4rem,8vw,6rem)] leading-[0.9] tracking-tight">
            IZVUCI KARTU
          </h2>
          <WavyRule className="mx-auto mt-5 h-4 w-64" color="#c3341d" />
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic leading-snug text-ink-soft">
            Svaka vodi negde drugde. Nema pogrešne — sve su moje.
          </p>
        </Reveal>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PAGES.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={i * 0.07} y={44}>
                <PlayingCard
                  rank={p.rank}
                  suit={p.suit}
                  href={p.href}
                  title={p.label}
                  note={p.note}
                  rotate={TILT[i]}
                >
                  <div className="flex h-full w-full items-center justify-center px-3">
                    {ART[p.href]}
                  </div>
                </PlayingCard>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
            <Manicule className="hidden h-10 w-16 shrink-0 sm:block" />
            <p className="font-type text-[11px] leading-relaxed text-ink-soft">
              Ili prati redosled: karte se listaju jedna za drugom na dnu
              svake stranice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
