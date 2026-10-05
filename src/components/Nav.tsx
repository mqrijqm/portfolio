"use client";

import { usePathname } from "next/navigation";
import { SteppedDiamond } from "@/components/Motifs";

/**
 * Na početnoj su to obična sidra — Lenis ih hvata preko `anchors` i skroluje
 * glatko. Sa /brending treba natrag na početak, pa sidro dobija prefiks /:
 * tada navigacija menja stranicu, a SmoothScroll posle preuzme hash i pomakne
 * se na sekciju.
 *
 * Sidra `e-com` i `kontakt` više ne postoje na početnoj (stari dizajn je
 * uklonjen), zato KONTAKT vodi na stranicu, a RAD na novu sekciju radova.
 */
const STAVKE = [
  { ime: "HERO", kratko: "HERO", sidro: "hero" },
  { ime: "RAD", kratko: "RAD", sidro: "radovi" },
  { ime: "BRENDING", kratko: "BRENDING", stranica: "/brending" },
  { ime: "KONTAKT", kratko: "KONTAKT", stranica: "/kontakt" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const kodKuce = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/15 bg-linen/90 text-forest backdrop-blur-sm">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-3 px-3 sm:h-14 sm:gap-5 sm:px-6">
        <a
          href={kodKuce ? "#hero" : "/#hero"}
          className="flex shrink-0 items-center gap-2 text-sm font-light leading-none tracking-[0.22em] sm:text-base sm:tracking-[0.3em]"
        >
          MARIJA
          <SteppedDiamond className="h-3 w-3 text-clay sm:h-3.5 sm:w-3.5" />
        </a>

        <nav
          className="ml-auto flex min-w-0 items-center gap-3 sm:gap-5 lg:gap-7"
          aria-label="Glavna navigacija"
        >
          {STAVKE.map((s) => {
            const href =
              "stranica" in s ? s.stranica : kodKuce ? `#${s.sidro}` : `/#${s.sidro}`;

            return (
              <a
                key={s.ime}
                href={href}
                className="whitespace-nowrap font-sans text-[9.5px] uppercase tracking-[0.1em] text-forest-soft transition-colors hover:text-clay sm:text-[10px] sm:tracking-[0.24em]"
              >
                <span className="hidden sm:inline">{s.ime}</span>
                <span className="sm:hidden">{s.kratko}</span>
              </a>
            );
          })}
        </nav>

        <span className="hidden shrink-0 font-sans text-[10px] uppercase tracking-[0.24em] text-forest-soft/70 xl:inline">
          Banja Luka
        </span>
      </div>
    </header>
  );
}
