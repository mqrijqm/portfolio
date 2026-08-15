"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteMock from "@/components/collage/SiteMock";
import Reveal from "@/components/Reveal";
import { Asterisk, Sparkle, WavyRule } from "@/components/collage/Bits";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SAJTOVI = [
  {
    title: "STUDIO NORA",
    url: "studionora.rs",
    year: "2025",
    note: "Sajt arhitektonskog studija. Projekti se otvaraju kao fascikle, skrol vodi kroz zgradu.",
    tags: ["Next.js", "GSAP", "Lenis"],
    variant: 0,
  },
  {
    title: "REZ ONLINE",
    url: "rez-magazin.rs",
    year: "2024",
    note: "Digitalno izdanje štampanog magazina. Prelom se ponaša kao papir, ali ume da se pretražuje.",
    tags: ["Next.js", "MDX", "Tipografija"],
    variant: 2,
  },
  {
    title: "PODRUM 7",
    url: "podrum7.rs",
    year: "2024",
    note: "Prodavnica sa sedam vina i nijednom suvišnom stranicom.",
    tags: ["Shopify", "Custom tema"],
    variant: 1,
  },
  {
    title: "SPORO",
    url: "sporo.film",
    year: "2025",
    note: "Sajt festivala sporog filma. Sve animacije su namerno predugačke.",
    tags: ["Next.js", "WebGL", "GSAP"],
    variant: 3,
  },
];

export default function WebDizajn() {
  const section = useRef<HTMLElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Horizontalni skrol samo na velikim ekranima i ako korisnik
      // nije tražio manje animacije. Na telefonu se prevlači prstom.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const el = track.current;
          const wrap = pinWrap.current;
          if (!el || !wrap) return;

          const distance = () => el.scrollWidth - window.innerWidth + 80;

          gsap.to(el, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (bar.current) {
                  gsap.set(bar.current, { scaleX: self.progress });
                }
              },
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <section
      id="web-dizajn"
      ref={section}
      className="relative bg-ink text-paper-light"
    >
      {/* pocepana ivica ka prethodnoj sekciji */}
      <div className="torn-strip -mt-4 h-8 w-full bg-ink" aria-hidden="true" />

      {/* ---------- zaglavlje ---------- */}
      <div className="mx-auto max-w-[1500px] px-4 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14">
        <Reveal>
          <div className="grid gap-6 border-t border-paper-light/25 pt-8 sm:grid-cols-[1.3fr_1fr] sm:items-start">
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-paper-light/90 sm:text-xl">
              Sajt nije plakat koji se pomera. Ima svoje vreme, težinu i
              inerciju. Dizajniram ga u Figmi, ali ga završavam u pregledaču —
              jer se tek tamo vidi da li nešto stvarno radi.
            </p>
            <ul className="flex flex-wrap gap-2 font-type text-[10px] tracking-[0.18em] text-paper-light/70">
              {[
                "UI DIZAJN",
                "SCROLLYTELLING",
                "ANIMACIJA",
                "PROTOTIP",
                "DIZAJN SISTEM",
              ].map((t) => (
                <li
                  key={t}
                  className="border border-paper-light/35 px-3 py-1.5"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-8 flex items-center gap-3 font-type text-[10px] tracking-[0.28em] text-mustard lg:hidden">
          <span className="h-px w-8 bg-mustard/60" />
          PREVUCI U STRANU →
        </p>
      </div>

      {/* ---------- horizontalna traka ---------- */}
      <div
        ref={pinWrap}
        className="relative overflow-hidden lg:h-[100svh]"
      >
        <Sparkle
          className="pointer-events-none absolute right-10 top-10 z-20 hidden h-10 w-10 lg:block"
          color="#d79f35"
        />
        <Asterisk
          className="pointer-events-none absolute bottom-24 left-8 z-20 hidden h-10 w-10 lg:block"
          color="#c3341d"
        />

        <div
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 py-10 sm:px-8 lg:h-full lg:items-center lg:gap-14 lg:overflow-visible lg:px-16 lg:py-0"
        >
          {SAJTOVI.map((s, i) => (
            <article
              key={s.title}
              className="w-[86vw] max-w-[620px] shrink-0 snap-center lg:w-[64vw] lg:max-w-[1020px]"
            >
              <div className="flex items-end justify-between gap-4 pb-3">
                <span className="font-display text-4xl leading-none text-mustard sm:text-6xl">
                  0{i + 1}
                </span>
                <span className="font-type text-[10px] tracking-[0.24em] text-paper-light/60">
                  {s.year}
                </span>
              </div>

              <div className="photo-frame p-2.5 sm:p-4">
                <SiteMock
                  variant={s.variant}
                  url={s.url}
                  label={`${s.title} — maketa sajta`}
                  className="w-full"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h3 className="font-display text-2xl tracking-wide sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-type text-[12px] leading-relaxed text-paper-light/70 sm:text-[13px]">
                    {s.note}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 font-type text-[10px] tracking-[0.16em] text-mustard">
                  {s.tags.map((t) => (
                    <li key={t} className="border border-mustard/50 px-2.5 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* traka napretka */}
        <div className="absolute inset-x-16 bottom-10 hidden h-[3px] bg-paper-light/20 lg:block">
          <div
            ref={bar}
            className="h-full origin-left scale-x-0 bg-mustard"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-4 pb-16 sm:px-8">
        <WavyRule className="h-4 w-full opacity-40" color="#f6efdc" />
      </div>
    </section>
  );
}
