"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OrnamentRow, Divider } from "@/components/Motifs";
import { DUR, EASE, prefersReduced } from "@/lib/motion";
import { STRANICE } from "@/lib/routes";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReduced()) return;

      gsap
        .timeline({ defaults: { ease: EASE.out, duration: DUR.base } })
        .from(".js-kicker", { opacity: 0, y: 12 })
        .from(".js-orn > *", { opacity: 0, y: 14, stagger: 0.1 }, "-=0.3")
        .from(".js-title", { opacity: 0, y: 22, duration: DUR.slow }, "-=0.4")
        .from(".js-sub", { opacity: 0, y: 16 }, "-=0.7")
        .from(".js-lede", { opacity: 0, y: 16 }, "-=0.6")
        .from(".js-cta", { opacity: 0, y: 14 }, "-=0.55")
        .from(".js-index", { opacity: 0, y: 14 }, "-=0.45");
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="flex min-h-[calc(100svh-2.75rem)] flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[calc(100svh-3.5rem)] sm:py-28"
    >
      <p className="js-kicker font-sans text-[10px] uppercase tracking-[0.42em] text-forest-soft">
        Portfolio · Izdanje No. 01
      </p>

      <OrnamentRow className="js-orn mt-10" />

      <h1 className="js-title mt-12 text-[clamp(2.2rem,7vw,5rem)] font-light leading-[1.1] tracking-[0.24em] sm:tracking-[0.34em]">
        MARIJA
      </h1>

      <p className="js-sub mt-7 text-[clamp(0.95rem,2vw,1.3rem)] font-light leading-relaxed text-forest-soft">
        Grafički dizajn · Web dizajn · Kolaž
        <br />
        Banja Luka, od 2016.
      </p>

      <p className="js-lede mt-9 max-w-xl font-sans text-[13px] leading-[1.7] text-forest sm:text-[15px]">
        Dizajner sam. Pravim identitete, plakate, editorijal i sajtove. Volim
        stare magazine, tvrde kontraste i stvari koje ne izgledaju kao šablon.
      </p>

      <div className="js-cta mt-10 flex flex-wrap items-center justify-center gap-8">
        <Link
          href="/graficki"
          className="group inline-flex items-center gap-3 border border-forest px-7 py-3 font-sans text-[10px] uppercase tracking-[0.28em] transition-colors hover:bg-forest hover:text-linen-light"
        >
          Pogledaj radove
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
        <Link
          href="/kontakt"
          className="font-sans text-[10px] uppercase tracking-[0.28em] text-clay underline underline-offset-[6px] hover:text-forest"
        >
          Piši mi
        </Link>
      </div>

      {/* ---------- sadržaj izdanja ---------- */}
      <nav aria-label="Sadržaj" className="js-index mt-20 w-full max-w-3xl">
        <Divider className="mx-auto h-3 w-44 text-forest-soft/70" />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {STRANICE.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                href={href}
                className="font-sans text-[10px] uppercase tracking-[0.24em] text-forest-soft transition-colors hover:text-clay"
              >
                <span className="mr-2 text-forest/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
