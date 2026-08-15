"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/pages";
import { Suit } from "@/components/wonderland/Suits";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-ink text-paper-light">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-2.5 px-3 sm:h-14 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-display text-sm leading-none tracking-[0.1em] sm:text-xl sm:tracking-[0.14em]"
        >
          MARIJA<span className="text-red">♥</span>
        </Link>

        <span className="hidden shrink-0 font-type text-[10px] tracking-[0.25em] text-paper-light/50 xl:inline">
          ŠPIL No. 01
        </span>

        <nav className="no-scrollbar ml-auto flex items-center gap-2.5 overflow-x-auto sm:gap-5">
          {PAGES.map((p) => {
            const active = pathname === p.href;
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-1.5 font-type text-[9.5px] tracking-[0.08em] transition-colors sm:text-[11px] sm:tracking-[0.18em] ${
                  active
                    ? "text-mustard"
                    : "text-paper-light/75 hover:text-paper-light"
                }`}
              >
                <Suit
                  name={p.suit}
                  className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3"
                  color={
                    active
                      ? "#d79f35"
                      : p.suit === "herc" || p.suit === "karo"
                        ? "#c3341d"
                        : "#f6efdc"
                  }
                />
                <span className="sm:hidden">{p.short}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
