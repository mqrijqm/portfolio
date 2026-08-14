"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EyeCollage from "@/components/collage/EyeCollage";
import RansomText from "@/components/collage/RansomText";
import {
  Arrow,
  Burst,
  Manicule,
  Moth,
  Sparkle,
  Stamp,
  DotGrid,
} from "@/components/collage/Bits";
import { DUR, EASE, prefersReduced } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReduced()) return;

      const tl = gsap.timeline({ defaults: { ease: EASE.out } });

      tl.from(".js-kicker", { opacity: 0, y: 14, duration: DUR.base })
        .from(
          ".js-title > span",
          {
            opacity: 0,
            y: 40,
            rotation: 14,
            scale: 0.7,
            stagger: 0.055,
            duration: 0.6,
            ease: EASE.back,
          },
          "-=0.45",
        )
        .from(
          ".js-eyes",
          { opacity: 0, scale: 0.92, duration: DUR.slow, ease: EASE.expo },
          "-=0.9",
        )
        .from(".js-punch", { opacity: 0, y: 24, duration: DUR.base }, "-=1.0")
        .from(".js-lede", { opacity: 0, y: 18, duration: DUR.base }, "-=0.6")
        .from(".js-cta", { opacity: 0, y: 14, duration: DUR.fast }, "-=0.55")
        .from(
          ".js-bit",
          {
            opacity: 0,
            scale: 0.6,
            rotation: -20,
            stagger: 0.08,
            duration: DUR.base,
            ease: EASE.back,
          },
          "-=0.8",
        );
    },
    { scope: root },
  );

  return (
    <section
      id="vrh"
      ref={root}
      className="paper-bg relative overflow-hidden pt-14 sm:pt-16"
    >
      {/* ---------- pozadinski isečci ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="torn-a absolute -left-24 top-24 h-72 w-72 rotate-12 bg-mustard/25 sm:h-96 sm:w-96" />
        <div className="torn-b absolute -right-10 top-1/3 h-64 w-64 -rotate-6 bg-pink/20 sm:h-80 sm:w-80" />
        <div className="halftone-lg blob-mask absolute bottom-[6%] left-[38%] hidden h-56 w-56 rounded-full text-red/45 md:block lg:h-72 lg:w-72" />
        <div className="halftone blob-mask absolute right-[24%] top-[8%] hidden h-40 w-40 rounded-full text-blue/40 lg:block" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-6 px-4 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:pb-24">
        {/* ---------- tekst ---------- */}
        <div className="order-2 lg:order-1">
          <p className="js-kicker font-type text-[10px] tracking-[0.32em] text-ink-soft sm:text-xs">
            GRAFIČKI DIZAJN · WEB DIZAJN · KOLAŽ
            <span className="mx-2 text-red">★</span>
            BEOGRAD
          </p>

          <div className="rule my-4 max-w-md" />

          <h1 className="js-title flex flex-wrap text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.86]">
            <span className="sr-only">Marija</span>
            <RansomText text="MARIJA" seed={4} jitter={8} />
          </h1>

          <p className="js-punch mt-7 max-w-xl font-serif text-[clamp(1.5rem,3.4vw,2.6rem)] italic leading-[1.15] text-ink riso-soft">
            Dizajn koji te{" "}
            <span className="underline-sketch not-italic font-display tracking-wide">
              GLEDA
            </span>{" "}
            nazad.
          </p>

          <p className="js-lede mt-6 max-w-md font-type text-[13px] leading-relaxed text-ink-soft sm:text-sm">
            Dizajner sam. Pravim identitete, plakate, editorijal i sajtove.
            Volim stare magazine, tvrde kontraste i stvari koje ne izgledaju
            kao šablon. Ako ti se učini da te nešto na ovoj stranici posmatra
            — nije ti se učinilo.
          </p>

          <div className="js-cta mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#graficki-dizajn"
              className="group inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3 font-type text-[11px] tracking-[0.22em] text-paper-light transition-colors hover:bg-red hover:border-red"
            >
              POGLEDAJ RADOVE
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
            <a
              href="#kontakt"
              className="font-type text-[11px] tracking-[0.22em] text-ink underline decoration-red decoration-2 underline-offset-4 hover:text-red"
            >
              PIŠI MI
            </a>
          </div>
        </div>

        {/* ---------- kolaž očiju ---------- */}
        <div className="js-eyes relative order-1 aspect-square w-full lg:order-2">
          <EyeCollage className="h-full w-full" />
        </div>
      </div>

      {/* ---------- razbacani isečci ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        aria-hidden="true"
      >
        {/* pečat "ručni rad" — dole levo, u praznini ispod dugmeta */}
        <div className="js-bit absolute bottom-[9%] left-[3%] hidden h-24 w-24 -rotate-12 lg:block">
          <Burst className="h-full w-full" color="#c3341d" accent="#f6efdc" />
          <span className="absolute inset-0 flex items-center justify-center text-center font-display text-[11px] leading-tight tracking-wider text-paper-light">
            RUČNI
            <br />
            RAD
          </span>
        </div>

        <Arrow className="js-bit absolute bottom-[14%] left-[17%] hidden h-12 w-20 rotate-[10deg] lg:block" />
        <Manicule className="js-bit absolute bottom-[10%] left-[27%] hidden h-14 w-24 -rotate-6 lg:block" />
        <DotGrid className="js-bit absolute bottom-[11%] left-[40%] hidden h-14 w-14 opacity-35 xl:block" />

        <Sparkle className="js-bit absolute left-[1%] top-[9%] h-7 w-7 sm:h-10 sm:w-10" />
        <Sparkle
          className="js-bit absolute left-[46%] top-[31%] hidden h-7 w-7 xl:block"
          color="#d79f35"
        />

        <Moth className="js-bit absolute bottom-[4%] right-[3%] h-20 w-24 rotate-[10deg] opacity-90 sm:h-28 sm:w-36" />
        <Stamp
          className="js-bit absolute bottom-[22%] right-[1%] hidden h-24 w-20 rotate-[7deg] xl:block"
          label="No. 01"
        />
      </div>

      {/* ---------- signal za skrol ---------- */}
      <div className="relative z-20 flex items-center justify-center gap-3 pb-6 font-type text-[10px] tracking-[0.3em] text-ink-soft">
        <span className="h-px w-10 bg-ink/40" />
        SKROLUJ
        <span className="animate-bounce">↓</span>
        <span className="h-px w-10 bg-ink/40" />
      </div>
    </section>
  );
}
