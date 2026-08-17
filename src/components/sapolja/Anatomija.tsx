"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { M } from "@/lib/sapolja";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Tri elementa znaka — svaki sa svojim konstrukcijskim crtežom. */
const FAZE = [
  {
    id: "polja",
    naslov: "Polja",
    tekst:
      "Zakrivljene linije predstavljaju brazde, različita mjesta porijekla i puteve lokalnih proizvođača koji se približavaju zajedničkoj tački.",
    medij: M.anatomijaPolja,
  },
  {
    id: "korpa",
    naslov: "Korpa",
    tekst:
      "Vanjski oblik objedinjuje različite izvore u jednu stabilnu cjelinu. Korpa predstavlja platformu koja prikuplja, organizuje i povezuje ponudu.",
    medij: M.anatomijaKorpa,
  },
  {
    id: "plod",
    naslov: "Plod",
    tekst:
      "Proizvod je u centru znaka jer je svježina hrane krajnji rezultat cijelog sistema. List dodaje prepoznatljiv signal rasta i sezonalnosti.",
    medij: M.anatomijaPlod,
  },
];

/**
 * Crteži stoje jedan preko drugog i samo se pretapaju — tako okvir
 * ne poskakuje kad crteži imaju različit odnos stranica.
 */
function Crtez({ aktivna }: { aktivna: number }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
      {FAZE.map((f, i) => (
        <Image
          key={f.id}
          src={f.medij.src}
          width={f.medij.w}
          height={f.medij.h}
          alt={f.medij.alt}
          sizes="(min-width: 1024px) 420px, 80vw"
          aria-hidden={i !== aktivna}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
            i === aktivna ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function Anatomija() {
  const root = useRef<HTMLDivElement>(null);
  const [aktivna, setAktivna] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Sticky prati skrol samo na širokim ekranima; na telefonu je
      // sekcija običan vertikalni tok i ne treba joj okidač.
      mm.add("(min-width: 1024px)", () => {
        const blokovi = gsap.utils.toArray<HTMLElement>(".js-faza");

        blokovi.forEach((b, i) => {
          ScrollTrigger.create({
            trigger: b,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => setAktivna(i),
            onEnterBack: () => setAktivna(i),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="mx-auto max-w-[1200px] px-5">
      <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* ---------- crtež ---------- */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="hidden w-full lg:block">
            <Crtez aktivna={aktivna} />
            <p className="mt-8 text-center font-sans text-[10px] uppercase tracking-[0.32em] text-[color:var(--sp-clay)]">
              {FAZE[aktivna].naslov}
            </p>
          </div>
        </div>

        {/* ---------- faze ---------- */}
        <div>
          {FAZE.map((f) => (
            <section
              key={f.id}
              className="js-faza border-t border-[color:var(--sp-line)] py-12 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:border-0 lg:py-0"
            >
              {/* na telefonu crtež stoji uz svoju fazu */}
              <div className="mb-8 lg:hidden">
                <Image
                  src={f.medij.src}
                  width={f.medij.w}
                  height={f.medij.h}
                  alt={f.medij.alt}
                  sizes="60vw"
                  className="mx-auto h-auto w-[62%] max-w-[260px]"
                />
              </div>

              <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-[color:var(--sp-clay)]">
                {f.naslov}
              </p>
              <p className="mt-5 max-w-lg text-[clamp(1.15rem,2.4vw,1.7rem)] font-light leading-[1.45]">
                {f.tekst}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
