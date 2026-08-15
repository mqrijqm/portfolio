import type { ReactNode } from "react";
import PlayingCard from "@/components/wonderland/PlayingCard";
import { Suit } from "@/components/wonderland/Suits";
import { Sparkle } from "@/components/collage/Bits";
import type { PageInfo } from "@/lib/pages";

/**
 * Zaglavlje svake unutrašnje stranice: karta sa ilustracijom levo,
 * poglavlje, naslov i citat desno.
 */
export default function PageShell({
  page,
  illustration,
  children,
}: {
  page: PageInfo;
  illustration: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative z-10 mx-auto max-w-[1500px] px-4 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-32">
      <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
        {/* karta poglavlja */}
        <div className="mx-auto w-40 sm:w-52 lg:mx-0 lg:w-full">
          <PlayingCard rank={page.rank} suit={page.suit} rotate={-4}>
            <div className="flex h-full w-full items-center justify-center px-2">
              {illustration}
            </div>
          </PlayingCard>
        </div>

        <div>
          <p className="flex items-center gap-3 font-type text-[10px] tracking-[0.32em] text-red">
            <Suit name={page.suit} className="h-3 w-3" />
            {page.chapter}
          </p>

          <h1 className="riso mt-6 font-display text-[clamp(2.6rem,9vw,7.5rem)] leading-[0.88] tracking-tight">
            {page.title}
          </h1>

          <div className="rule mt-6 max-w-2xl" />

          <blockquote className="relative mt-7 max-w-2xl">
            <p className="font-serif text-[clamp(1.2rem,2.6vw,1.9rem)] italic leading-snug text-ink">
              „{page.quote}&ldquo;
            </p>
            <footer className="mt-2 font-type text-[10px] tracking-[0.25em] text-ink-soft">
              — {page.quoteBy}
            </footer>
            <Sparkle
              className="absolute -left-7 -top-4 hidden h-6 w-6 lg:block"
              color="#d79f35"
            />
          </blockquote>

          {children}
        </div>
      </div>
    </header>
  );
}
