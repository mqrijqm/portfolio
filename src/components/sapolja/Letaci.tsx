"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { M } from "@/lib/sapolja";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Redoslijed je namjeran: prvo naličje, pa lice. */
const LETACI = [
  { medij: M.letakNalicje, caption: "Letak — naličje" },
  { medij: M.letakLice, caption: "Letak — lice" },
];

/**
 * Sekcija se zaledi na ekranu, a skrol postaje jedina komanda:
 * prvo iskoči naličje letka, pa lice, pa se stranica otpušta dalje.
 *
 * Sve je vezano za `scrub` — nema autoplay animacije. Koliko korisnik
 * odskroluje, toliko se odigra; unazad ide isto tako.
 */
export default function Letaci() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Ko traži manje animacije dobija oba letka odmah, bez pina i skoka.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-letak", { autoAlpha: 1, scale: 1, y: 0, x: 0 });
      });

      mm.add(
        {
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };
          const karte = gsap.utils.toArray<HTMLElement>(".js-letak");
          const [nalicje, lice] = karte;

          // Koliko se razmaknu kad su oba na ekranu. Na telefonu nema
          // mjesta za dva jedan uz drugi, pa se prvi povuče i ublijedi.
          const razmak = desktop ? 210 : 0;

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              // 2.2 ekrana skrola potroši se na sekvencu prije otpuštanja
              end: "+=220%",
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // autoAlpha (a ne opacity) da nevidljiv letak ne hvata hover
          // 1) naličje iskoči na sredini
          tl.fromTo(
            nalicje,
            { autoAlpha: 0, scale: 0.55, y: 70 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 1 },
          )
            // kratka pauza da se stigne pročitati
            .to({}, { duration: 0.5 })
            // 2) naličje se sklanja, lice iskoči na svoje mjesto
            .to(
              nalicje,
              desktop
                ? { x: -razmak, duration: 1 }
                : { autoAlpha: 0, scale: 0.8, duration: 1 },
              "sljedeci",
            )
            .fromTo(
              lice,
              { autoAlpha: 0, scale: 0.55, y: 70, x: razmak },
              { autoAlpha: 1, scale: 1, y: 0, x: razmak, duration: 1 },
              "sljedeci",
            )
            .to({}, { duration: 0.6 });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section>
      <div
        ref={root}
        className="flex min-h-[100svh] flex-col items-center justify-center px-5 py-20"
      >
        <h2 className="text-center text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
          Dizajn letaka
        </h2>

        {/* Oba letka žive u istoj tački; GSAP ih razmiče. */}
        <div className="relative mt-12 flex h-[clamp(280px,46vh,460px)] w-full items-center justify-center sm:mt-16">
          {LETACI.map(({ medij, caption }) => (
            <figure
              key={medij.src}
              className="js-letak group invisible absolute z-0 flex cursor-zoom-in flex-col items-center opacity-0 hover:z-20"
            >
              {/* GSAP vozi transform na <figure>, a hover skalira <img> —
                  dva odvojena sloja, pa se ne gaze međusobno. */}
              <Image
                src={medij.src}
                width={medij.w}
                height={medij.h}
                alt={medij.alt}
                sizes="(min-width: 768px) 760px, 92vw"
                className="h-[clamp(240px,40vh,400px)] w-auto origin-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-[2] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <figcaption className="mt-5 font-sans text-[10px] uppercase tracking-[0.24em] text-[color:var(--sp-soft)] transition-opacity duration-300 group-hover:opacity-0">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
