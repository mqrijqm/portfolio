import Link from "next/link";
import { Suit } from "@/components/wonderland/Suits";
import { neighbours } from "@/lib/pages";

/** Listanje špila na dnu stranice: prethodna karta / sledeća karta. */
export default function PageTurn({ current }: { current: string }) {
  const { prev, next } = neighbours(current);

  return (
    <nav
      aria-label="Kretanje kroz poglavlja"
      className="relative z-10 border-t-4 border-double border-ink bg-paper-light"
    >
      <div className="mx-auto grid max-w-[1500px] gap-px px-4 py-10 sm:px-8 md:grid-cols-3">
        {/* prethodna */}
        <div className="flex items-center md:justify-start">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex items-center gap-4 text-left"
            >
              <span className="font-display text-3xl text-ink-soft transition-transform group-hover:-translate-x-1">
                ◂
              </span>
              <span>
                <span className="block font-type text-[10px] tracking-[0.25em] text-ink-soft">
                  PRETHODNA KARTA
                </span>
                <span className="mt-1 flex items-center gap-2 font-display text-xl tracking-wide transition-colors group-hover:text-red sm:text-2xl">
                  <Suit name={prev.suit} className="h-4 w-4" />
                  {prev.label}
                </span>
              </span>
            </Link>
          ) : (
            <span className="font-type text-[10px] tracking-[0.25em] text-ink-soft/50">
              POČETAK ŠPILA
            </span>
          )}
        </div>

        {/* nazad na naslovnu */}
        <div className="flex items-center justify-center py-6 md:py-0">
          <Link
            href="/"
            className="group flex flex-col items-center gap-1.5 border-2 border-ink px-6 py-3 transition-colors hover:bg-ink hover:text-paper-light"
          >
            <span className="font-display text-lg tracking-[0.12em]">
              NASLOVNA
            </span>
            <span className="font-type text-[9px] tracking-[0.25em] opacity-70">
              CEO ŠPIL
            </span>
          </Link>
        </div>

        {/* sledeća */}
        <div className="flex items-center md:justify-end">
          {next ? (
            <Link
              href={next.href}
              className="group flex items-center gap-4 text-right"
            >
              <span>
                <span className="block font-type text-[10px] tracking-[0.25em] text-ink-soft">
                  SLEDEĆA KARTA
                </span>
                <span className="mt-1 flex items-center justify-end gap-2 font-display text-xl tracking-wide transition-colors group-hover:text-red sm:text-2xl">
                  {next.label}
                  <Suit name={next.suit} className="h-4 w-4" />
                </span>
              </span>
              <span className="font-display text-3xl text-ink-soft transition-transform group-hover:translate-x-1">
                ▸
              </span>
            </Link>
          ) : (
            <span className="font-type text-[10px] tracking-[0.25em] text-ink-soft/50">
              KRAJ ŠPILA
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
