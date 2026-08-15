import Link from "next/link";
import { PAGES } from "@/lib/pages";
import { Suit } from "@/components/wonderland/Suits";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t-4 border-double border-ink bg-ink text-paper-light">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <Link
            href="/"
            className="font-display text-4xl leading-none tracking-[0.1em] sm:text-6xl"
          >
            MARIJA<span className="text-red">♥</span>
          </Link>
          <p className="mt-4 font-type text-[10px] tracking-[0.25em] text-paper-light/60">
            GRAFIČKI I WEB DIZAJN · BEOGRAD
          </p>
          <p className="mt-6 max-w-md font-serif text-lg italic leading-snug text-paper-light/80">
            „Kojim putem da idem odavde? — Zavisi kuda hoćeš da stigneš.&ldquo;
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Sve stranice">
            <p className="font-type text-[10px] tracking-[0.25em] text-mustard">
              ŠPIL
            </p>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group flex items-center gap-2.5 font-type text-[11px] tracking-[0.14em] text-paper-light/75 transition-colors hover:text-paper-light"
                  >
                    <Suit
                      name={p.suit}
                      className="h-2.5 w-2.5 shrink-0"
                      color={
                        p.suit === "herc" || p.suit === "karo"
                          ? "#c3341d"
                          : "#f6efdc"
                      }
                    />
                    <span className="group-hover:underline">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="font-type text-[10px] leading-relaxed tracking-[0.18em] text-paper-light/55">
            <p className="text-mustard">KOLOFON</p>
            <p className="mt-4">ŠPIL No. 01 · {new Date().getFullYear()}</p>
            <p className="mt-2">SLOG: ANTON · PLAYFAIR · COURIER PRIME</p>
            <p className="mt-2">
              SVE ILUSTRACIJE CRTANE RUČNO, U KODU. NIJEDNA SLIKA NIJE
              FOTOGRAFISANA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
