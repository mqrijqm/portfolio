"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "ko-sam-ja", label: "KO SAM JA", short: "KO SAM" },
  { id: "graficki-dizajn", label: "GRAFIČKI", short: "GRAF." },
  { id: "web-dizajn", label: "WEB", short: "WEB" },
  { id: "moj-dizajn", label: "MOJ DIZAJN", short: "DIZAJN" },
  { id: "kontakt", label: "KONTAKT", short: "KONTAKT" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    // Prati koja je sekcija na sredini ekrana i podvlači je u meniju.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-ink text-paper-light">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-2.5 px-3 sm:h-14 sm:gap-4 sm:px-6">
        <a
          href="#vrh"
          className="shrink-0 font-display text-sm leading-none tracking-[0.1em] sm:text-xl sm:tracking-[0.14em]"
        >
          MARIJA<span className="text-red">★</span>
        </a>

        <span className="hidden shrink-0 font-type text-[10px] tracking-[0.25em] text-paper-light/50 lg:inline">
          IZDANJE No. 01
        </span>

        <nav className="no-scrollbar ml-auto flex items-center gap-2.5 overflow-x-auto sm:gap-6">
          {SECTIONS.map(({ id, label, short }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 font-type text-[9.5px] tracking-[0.08em] transition-colors sm:text-[11px] sm:tracking-[0.2em] ${
                active === id
                  ? "text-mustard"
                  : "text-paper-light/75 hover:text-paper-light"
              }`}
            >
              {active === id && <span className="mr-1 text-red">▸</span>}
              <span className="sm:hidden">{short}</span>
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </nav>

        <span className="hidden shrink-0 font-type text-[10px] tracking-[0.2em] text-paper-light/50 xl:inline">
          BEOGRAD
        </span>
      </div>
    </header>
  );
}
