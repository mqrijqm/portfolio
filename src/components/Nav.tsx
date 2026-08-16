"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STRANICE } from "@/lib/routes";

export default function Nav() {
  // usePathname vraća trenutnu putanju (npr. "/web") — po njoj bojimo aktivnu stavku.
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-ink text-paper-light">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-2.5 px-3 sm:h-14 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-display text-sm leading-none tracking-[0.1em] sm:text-xl sm:tracking-[0.14em]"
        >
          MARIJA<span className="text-red">★</span>
        </Link>

        <span className="hidden shrink-0 font-type text-[10px] tracking-[0.25em] text-paper-light/50 lg:inline">
          IZDANJE No. 01
        </span>

        <nav className="no-scrollbar ml-auto flex items-center gap-2.5 overflow-x-auto sm:gap-6">
          {STRANICE.map(({ href, label, short }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 font-type text-[9.5px] tracking-[0.08em] transition-colors sm:text-[11px] sm:tracking-[0.2em] ${
                  active
                    ? "text-mustard"
                    : "text-paper-light/75 hover:text-paper-light"
                }`}
              >
                {active && <span className="mr-1 text-red">▸</span>}
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </nav>

        <span className="hidden shrink-0 font-type text-[10px] tracking-[0.2em] text-paper-light/50 xl:inline">
          BEOGRAD
        </span>
      </div>
    </header>
  );
}
