"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STRANICE } from "@/lib/routes";
import { SteppedDiamond } from "@/components/Motifs";

export default function Nav() {
  // usePathname vraća trenutnu putanju (npr. "/web") — po njoj bojimo aktivnu stavku.
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/15 bg-linen/90 text-forest backdrop-blur-sm">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-3 px-3 sm:h-14 sm:gap-5 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-light leading-none tracking-[0.22em] sm:text-base sm:tracking-[0.3em]"
        >
          MARIJA
          <SteppedDiamond className="h-3 w-3 text-clay sm:h-3.5 sm:w-3.5" />
        </Link>

        <nav className="no-scrollbar ml-auto flex items-center gap-3 overflow-x-auto sm:gap-7">
          {STRANICE.map(({ href, label, short }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 font-sans text-[9.5px] uppercase tracking-[0.14em] transition-colors sm:text-[10px] sm:tracking-[0.24em] ${
                  active ? "text-clay" : "text-forest-soft hover:text-forest"
                }`}
              >
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </Link>
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
