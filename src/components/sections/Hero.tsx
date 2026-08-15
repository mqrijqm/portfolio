"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EyeCollage from "@/components/collage/EyeCollage";
import RansomText from "@/components/collage/RansomText";
import { Burst, Sparkle, DotGrid } from "@/components/collage/Bits";
import {
  CheshireGrin,
  PocketWatch,
  RabbitHole,
  WhiteRabbit,
  Key,
} from "@/components/wonderland/WBits";
import { Suit, type SuitName } from "@/components/wonderland/Suits";
import { DUR, EASE, prefersReduced } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

/** Sitne karte koje lebde po pozadini. */
const FLOATING: { suit: SuitName; rank: string; cls: string; rot: number }[] = [
  { suit: "herc", rank: "A", cls: "left-[6%] top-[18%] w-12 sm:w-16", rot: -14 },
  { suit: "pik", rank: "K", cls: "left-[30%] top-[8%] w-10 sm:w-14", rot: 11 },
  { suit: "karo", rank: "Q", cls: "right-[7%] top-[13%] w-11 sm:w-14", rot: -8 },
  { suit: "tref", rank: "J", cls: "left-[45%] bottom-[9%] w-10 sm:w-14", rot: 17 },
];

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
            stagger: 0.07,
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
      {/* ---------- pozadina ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="torn-a absolute -left-24 top-24 h-72 w-72 rotate-12 bg-mustard/25 sm:h-96 sm:w-96" />
        <div className="torn-b absolute -right-10 top-1/3 h-64 w-64 -rotate-6 bg-pink/20 sm:h-80 sm:w-80" />
        <RabbitHole className="absolute -bottom-24 left-[30%] h-[420px] w-[420px] text-ink opacity-[0.13]" />
        <div className="halftone blob-mask absolute right-[24%] top-[8%] hidden h-40 w-40 rounded-full text-alice/40 lg:block" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-6 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:pb-20">
        {/* ---------- tekst ---------- */}
        <div className="order-2 lg:order-1">
          <p className="js-kicker flex flex-wrap items-center gap-x-2 font-type text-[10px] tracking-[0.32em] text-ink-soft sm:text-xs">
            GRAFIČKI DIZAJN · WEB DIZAJN · KOLAŽ
            <span className="text-red">♥</span>
            BEOGRAD
          </p>

          <div className="rule my-4 max-w-md" />

          <h1 className="js-title flex flex-wrap text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.86]">
            <span className="sr-only">Marija</span>
            <RansomText text="MARIJA" seed={4} jitter={8} />
          </h1>

          <p className="js-punch riso-soft mt-7 max-w-xl font-serif text-[clamp(1.5rem,3.4vw,2.6rem)] italic leading-[1.15] text-ink">
            Dizajn koji te{" "}
            <span className="underline-sketch font-display not-italic tracking-wide">
              GLEDA
            </span>{" "}
            nazad.
          </p>

          <p className="js-lede mt-6 max-w-md font-type text-[13px] leading-relaxed text-ink-soft sm:text-sm">
            Dizajner sam. Pravim identitete, plakate, editorijal i sajtove.
            Ovaj sajt je špil od pet karata — svaka vodi u svoje poglavlje.
            Ako ti se učini da te nešto odavde posmatra, nije ti se učinilo.
          </p>

          <div className="js-cta mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#spil"
              className="group inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3 font-type text-[11px] tracking-[0.22em] text-paper-light transition-colors hover:border-red hover:bg-red"
            >
              ZAVUCI SE NIZ RUPU
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
            <Link
              href="/kontakt"
              className="font-type text-[11px] tracking-[0.22em] text-ink underline decoration-red decoration-2 underline-offset-4 hover:text-red"
            >
              PIŠI MI
            </Link>
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
        {/* karte koje lebde */}
        {FLOATING.map((c, i) => (
          <div
            key={c.suit + c.rank}
            className={`js-bit drift card-face absolute hidden aspect-[5/7] items-center justify-center lg:flex ${c.cls}`}
            style={
              {
                "--drift-rot": `${c.rot}deg`,
                transform: `rotate(${c.rot}deg)`,
                animationDelay: `${i * 0.9}s`,
              } as React.CSSProperties
            }
          >
            <Suit name={c.suit} className="h-1/3 w-1/3" />
            <span
              className="absolute left-1 top-0.5 font-display text-[11px]"
              style={{
                color: c.suit === "pik" || c.suit === "tref" ? "#16130e" : "#c3341d",
              }}
            >
              {c.rank}
            </span>
          </div>
        ))}

        {/* pečat "ručni rad" */}
        <div className="js-bit absolute bottom-[9%] left-[3%] hidden h-24 w-24 -rotate-12 lg:block">
          <Burst className="h-full w-full" color="#c3341d" accent="#f6efdc" />
          <span className="absolute inset-0 flex items-center justify-center text-center font-display text-[11px] leading-tight tracking-wider text-paper-light">
            RUČNI
            <br />
            RAD
          </span>
        </div>

        <PocketWatch className="js-bit absolute bottom-[13%] left-[17%] hidden h-20 w-16 rotate-[9deg] lg:block" />
        <WhiteRabbit className="js-bit absolute bottom-[6%] left-[27%] hidden h-24 w-20 -rotate-6 xl:block" />
        <DotGrid className="js-bit absolute bottom-[11%] left-[40%] hidden h-14 w-14 opacity-30 xl:block" />

        <Sparkle className="js-bit absolute left-[1%] top-[9%] h-7 w-7 sm:h-10 sm:w-10" />
        <Key className="js-bit absolute bottom-[4%] right-[4%] h-24 w-10 rotate-[24deg] sm:h-32 sm:w-14" />
      </div>

      {/* ---------- osmeh Češirskog mačka ---------- */}
      <div className="relative z-20 flex flex-col items-center pb-8">
        <CheshireGrin className="js-bit h-16 w-32 opacity-90 sm:h-20 sm:w-44" />
        <div className="mt-4 flex items-center gap-3 font-type text-[10px] tracking-[0.3em] text-ink-soft">
          <span className="h-px w-10 bg-ink/40" />
          SKROLUJ
          <span className="animate-bounce">↓</span>
          <span className="h-px w-10 bg-ink/40" />
        </div>
      </div>
    </section>
  );
}
