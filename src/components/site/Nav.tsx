"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SteppedDiamond } from "@/components/Motifs";

/**
 * Navigacija novog (brilean) dizajna — koriste je /, /kontakt i /livadski-med.
 * Stari Nav.tsx je ostao netaknut jer ga koristi /brending.
 *
 * Sidra dobijaju prefiks / kad nismo na početnoj: tada navigacija menja
 * stranicu, a SmoothScroll posle preuzme hash i pomakne se na sekciju.
 */
const STAVKE = [
  { ime: "Rad", sidro: "radovi" },
  { ime: "O meni", sidro: "o-meni" },
] as const;

const CTA = { ime: "Kontakt", stranica: "/kontakt" } as const;

export default function Nav() {
  const pathname = usePathname();
  const kodKuce = pathname === "/";
  const [otvoren, setOtvoren] = useState(false);

  const href = (sidro: string) => (kodKuce ? `#${sidro}` : `/#${sidro}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-haze/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[100rem] items-center justify-between px-5 sm:h-16 sm:px-8 lg:px-16">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 text-[17px] font-medium leading-none tracking-[-0.02em]"
        >
          MARIJA
          <SteppedDiamond className="h-3.5 w-3.5 text-flare" />
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Glavna navigacija"
        >
          {STAVKE.map((s) => (
            <a
              key={s.sidro}
              href={href(s.sidro)}
              className="rounded-full px-4 py-2.5 text-[15px] leading-none transition-colors hover:bg-flare hover:text-white"
            >
              {s.ime}
            </a>
          ))}

          <a
            href={CTA.stranica}
            className="group relative ml-3 inline-flex h-10 items-center gap-3 overflow-hidden rounded-full pl-5 pr-1.5"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 right-1.5 w-8 rounded-full bg-ink transition-[width] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:w-[calc(100%-0.375rem)]"
            />
            <span className="relative z-10 text-[15px] leading-none transition-colors duration-300 group-hover:text-paper">
              {CTA.ime}
            </span>
            <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-acid">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h9M7.5 3 11.5 7l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </nav>

        {/* ---------- mobilni meni ---------- */}
        <button
          type="button"
          onClick={() => setOtvoren((v) => !v)}
          aria-expanded={otvoren}
          className="-mr-2 flex h-10 items-center gap-2 rounded-full px-3 text-sm transition-colors hover:bg-flare hover:text-white md:hidden"
        >
          {otvoren ? "Zatvori" : "Meni"}
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      {otvoren && (
        <nav
          className="border-t border-steel bg-haze px-5 pb-7 pt-4 md:hidden"
          aria-label="Mobilna navigacija"
        >
          <ul className="flex flex-col">
            {STAVKE.map((s) => (
              <li key={s.sidro} className="border-b border-steel">
                <a
                  href={href(s.sidro)}
                  onClick={() => setOtvoren(false)}
                  className="block py-4 text-2xl tracking-[-0.03em]"
                >
                  {s.ime}
                </a>
              </li>
            ))}
            <li className="border-b border-steel">
              <a
                href="/brending"
                onClick={() => setOtvoren(false)}
                className="block py-4 text-2xl tracking-[-0.03em]"
              >
                SaPolja brending
              </a>
            </li>
            <li className="border-b border-steel">
              <a
                href="/livadski-med"
                onClick={() => setOtvoren(false)}
                className="block py-4 text-2xl tracking-[-0.03em]"
              >
                Livadski med
              </a>
            </li>
            <li className="pt-6">
              <a
                href={CTA.stranica}
                onClick={() => setOtvoren(false)}
                className="inline-flex h-11 items-center rounded-full bg-ink pl-6 pr-2 text-[15px] text-paper"
              >
                {CTA.ime}
                <span className="ml-3 grid h-8 w-8 place-items-center rounded-full bg-acid text-ink">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h9M7.5 3 11.5 7l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
