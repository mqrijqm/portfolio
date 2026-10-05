"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "Kako radim" — sekcija koja se na desktopu drži (sticky) dok se kroz nju
 * skrola korak po korak, kao brileanov "How we work". Aktivni korak bude
 * bijel, ostali su sivi, opis se otvara ispod aktivnog.
 *
 * Visinu drži staza od 300vh (CSS sticky), a ne GSAP pin — pin je znao da
 * ne rezerviše prostor pa bi sadržaj ispod provirio preko sekcije.
 *
 * Na mobilnom i uz prefers-reduced-motion nema staze ni klizanja: sve je
 * otvoreno odjednom i vidi se kao obična lista (CSS za to je u globals.css).
 */
const KORACI = [
  {
    n: "01",
    naslov: "Slušam",
    tekst:
      "Prvo ćutim. Većina brifova sama sebi protivreči, i to je najkorisnija stvar u njima.",
  },
  {
    n: "02",
    naslov: "Sečem",
    tekst:
      "Gomilam reference koje nemaju veze jedna sa drugom. Tražim šta ih ipak drži zajedno.",
  },
  {
    n: "03",
    naslov: "Slažem",
    tekst:
      "Mreža, hijerarhija, kontrast. Ovde se odlučuje da li nešto ima kičmu ili nema.",
  },
  {
    n: "04",
    naslov: "Lepim",
    tekst:
      "Fajlovi, uputstvo za korišćenje, predaja. Dizajn koji niko ne ume da koristi nije završen.",
  },
];

export default function Proces() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Samo na velikom ekranu i samo ako korisnik nije tražio manje animacije.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const staza = root.current?.querySelector<HTMLElement>("[data-staza]");
          const koraci = gsap.utils.toArray<HTMLElement>("[data-korak]");
          const traka = root.current?.querySelector<HTMLElement>("[data-pun]");
          if (!staza || !koraci.length) return;

          const st = ScrollTrigger.create({
            trigger: staza,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              const i = Math.min(
                koraci.length - 1,
                Math.floor(self.progress * koraci.length),
              );
              koraci.forEach((el, idx) =>
                el.classList.toggle("korak-je-aktivan", idx === i),
              );
              if (traka) {
                traka.style.transform = `scaleX(${Math.max(0.04, self.progress)})`;
              }
            },
          });

          return () => st.kill();
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="proces"
      className="relative bg-ink text-paper"
      aria-label="Kako radim"
    >
      {/* Staza — drži prostor dok sadržaj klizi (samo desktop) */}
      <div data-staza className="proces-staza lg:h-[300vh]">
        <div className="mx-auto grid max-w-[100rem] gap-8 px-5 py-24 sm:px-8 lg:sticky lg:top-0 lg:h-svh lg:content-center lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 lg:px-16 lg:py-0">
          <div className="lg:pt-2">
            <span className="uppertitle uppertitle-tamna">Kako radim</span>
            <span
              aria-hidden
              className="mt-5 hidden h-px w-40 bg-white/20 lg:block"
            >
              <span
                data-pun
                className="block h-full w-full origin-left scale-x-0 bg-acid"
              />
            </span>
          </div>

          <ol className="border-t border-white/15">
            {KORACI.map((k, i) => (
              <li
                key={k.n}
                data-korak
                className={`korak border-b border-white/15 py-6 sm:py-7 ${
                  i === 0 ? "korak-je-aktivan" : ""
                }`}
              >
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="korak-broj shrink-0 font-sans text-xs tracking-[0.18em] sm:text-sm">
                    {k.n}
                  </span>
                  <h3 className="korak-naslov h3">{k.naslov}</h3>
                </div>

                <div className="korak-opis">
                  <div>
                    <p className="max-w-[56ch] pl-[calc(1.5rem+20px)] pt-4 text-lg-brilean text-silver sm:pl-[calc(2rem+32px)]">
                      {k.tekst}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
