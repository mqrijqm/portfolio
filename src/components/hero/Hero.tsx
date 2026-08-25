"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EASE, prefersReduced } from "@/lib/motion";
import { Krstic, Zvezda } from "./HeroDoodles";

gsap.registerPlugin(useGSAP);

/* ------------------------------------------------------------------ *
 *  Boje kolaža — flomaster i pocepan papir, ne paleta ostatka sajta.
 * ------------------------------------------------------------------ */
const MASTILO = "#1B3EA8"; // plavi flomaster
const ŽUTA = "#F0C044";
const NARANDŽASTA = "#E8542A";

/** Blago pocepana ivica — seče samo po visini, tekst ostaje čitav. */
const TRAKA =
  "polygon(1% 8%, 12% 0%, 34% 5%, 58% 0%, 80% 6%, 99% 0%, 100% 52%, 98% 96%, 74% 100%, 46% 95%, 22% 100%, 2% 94%)";

/** Nepravilan obris — kao ručno pocepan komad papira. */
const CEPANJE =
  "polygon(0% 22%, 18% 4%, 48% 0%, 78% 8%, 100% 30%, 92% 62%, 98% 90%, 64% 100%, 26% 96%, 4% 74%)";

type Komad = {
  poz: React.CSSProperties;
  w: string;
  rot: number;
  /** Sitni komadi se na telefonu samo guše — njih sklanjamo. */
  samoDesktop?: boolean;
};

const PAPIRI: (Komad & { ar: string; boja?: string; tekstura?: boolean })[] = [
  { poz: { right: "4%", top: "15%" }, w: "clamp(100px,12vw,210px)", ar: "5/4", rot: 6, tekstura: true },
  { poz: { left: "2%", top: "11%" }, w: "clamp(52px,6vw,104px)", ar: "3/4", rot: -13, boja: ŽUTA },
  { poz: { right: "13%", bottom: "15%" }, w: "clamp(28px,3.2vw,54px)", ar: "1/1", rot: 18, boja: NARANDŽASTA, samoDesktop: true },
];

const ZVEZDE: Komad[] = [
  { poz: { right: "27%", top: "8%" }, w: "clamp(46px,6vw,104px)", rot: 12 },
  { poz: { left: "30%", bottom: "11%" }, w: "clamp(34px,4.2vw,74px)", rot: -9, samoDesktop: true },
];

const KRSTICI: Komad[] = [
  { poz: { left: "7%", top: "46%" }, w: "clamp(12px,1.5vw,26px)", rot: 8 },
  { poz: { right: "8%", top: "54%" }, w: "clamp(11px,1.4vw,23px)", rot: -14, samoDesktop: true },
  { poz: { left: "46%", top: "14%" }, w: "clamp(10px,1.2vw,20px)", rot: 16, samoDesktop: true },
];

export default function Hero() {
  const koren = useRef<HTMLElement>(null);
  const slojPapira = useRef<HTMLDivElement>(null);
  const slojCrteza = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReduced()) return;

      const tl = gsap.timeline({ defaults: { ease: EASE.out } });

      tl.from("[data-papir]", {
        opacity: 0,
        scale: 0.7,
        rotate: "-=14",
        duration: 0.7,
        stagger: { each: 0.07, from: "random" },
      })
        .from(
          "[data-crtez]",
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.55,
            ease: EASE.back,
            stagger: { each: 0.06, from: "random" },
          },
          "-=0.45",
        )
        .from(
          "[data-isecak]",
          { opacity: 0, y: 52, rotate: "-=5", duration: 1.1 },
          "-=0.5",
        )
        .from(
          "[data-tekst]",
          { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 },
          "-=0.85",
        );

      // Lagano disanje crteža, da kolaž ne bude mrtav.
      gsap.utils.toArray<HTMLElement>("[data-crtez]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 7 : -7,
          rotate: `+=${i % 3 ? 2.5 : -2.5}`,
          duration: 3.4 + (i % 4) * 0.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });

      // Paralaksa na miš: papir sporo, crteži brže.
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const papirX = gsap.quickTo(slojPapira.current, "x", { duration: 0.9, ease: "power3" });
      const papirY = gsap.quickTo(slojPapira.current, "y", { duration: 0.9, ease: "power3" });
      const crtezX = gsap.quickTo(slojCrteza.current, "x", { duration: 0.7, ease: "power3" });
      const crtezY = gsap.quickTo(slojCrteza.current, "y", { duration: 0.7, ease: "power3" });

      const pomeri = (e: PointerEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        papirX(x * 20);
        papirY(y * 14);
        crtezX(x * -30);
        crtezY(y * -22);
      };

      window.addEventListener("pointermove", pomeri, { passive: true });
      return () => window.removeEventListener("pointermove", pomeri);
    },
    { scope: koren },
  );

  return (
    <section
      ref={koren}
      aria-label="Naslovna"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-[8svh]"
      style={{ color: MASTILO }}
    >
      {/* ---------------- podloga: plava bojica ---------------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/hero/crayon-plava.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "clamp(190px, 21vw, 320px)",
        }}
      />

      {/* Izbeljena sredina — da tipografija ima gde da diše. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(52% 64% at 68% 50%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* ---------------- pocepani papiri ---------------- */}
      <div ref={slojPapira} aria-hidden="true" className="absolute inset-0 -z-[5]">
        {PAPIRI.map((p, i) => (
          <div
            key={i}
            data-papir
            className={`absolute ${p.samoDesktop ? "hidden md:block" : ""}`}
            style={{
              ...p.poz,
              width: p.w,
              aspectRatio: p.ar,
              rotate: `${p.rot}deg`,
              clipPath: CEPANJE,
              backgroundColor: p.tekstura ? undefined : p.boja,
              backgroundImage: p.tekstura ? "url(/hero/crayon-zelena.webp)" : undefined,
              backgroundSize: "cover",
            }}
          />
        ))}
      </div>

      {/* ---------------- crteži flomasterom ---------------- */}
      <div ref={slojCrteza} aria-hidden="true" className="absolute inset-0 -z-[4]">
        {ZVEZDE.map((z, i) => (
          <div
            key={`z${i}`}
            data-crtez
            className={`absolute ${z.samoDesktop ? "hidden md:block" : ""}`}
            style={{ ...z.poz, width: z.w, rotate: `${z.rot}deg` }}
          >
            <Zvezda color={MASTILO} className="h-auto w-full" />
          </div>
        ))}

        {KRSTICI.map((k, i) => (
          <div
            key={`k${i}`}
            data-crtez
            className={`absolute ${k.samoDesktop ? "hidden md:block" : ""}`}
            style={{ ...k.poz, width: k.w, rotate: `${k.rot}deg` }}
          >
            <Krstic color={MASTILO} className="h-auto w-full" />
          </div>
        ))}
      </div>

      {/* ---------------- sadržaj: isečak levo, tekst desno ---------------- */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-8 lg:gap-16">
        {/* Isečak je nakrivljen — zalepljen, ne poravnat. */}
        <div data-isecak className="mx-auto w-full max-w-[430px] md:mx-0 md:ml-[3%] lg:max-w-[470px]">
          <Image
            src="/hero/marija-isecak.webp"
            alt="Marija kao dete, crta olovkom u svesci"
            width={880}
            height={1160}
            priority
            sizes="(max-width: 768px) 82vw, 46vw"
            className="h-auto w-full -rotate-[7deg] drop-shadow-[0_22px_34px_rgba(20,40,90,0.2)]"
          />
        </div>

        {/* ---------------- tekst ---------------- */}
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <p
            data-tekst
            className="rotate-[-1deg] bg-white/90 px-5 py-2 font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.26em] sm:px-7 sm:text-[12px] sm:tracking-[0.3em]"
            style={{ clipPath: TRAKA }}
          >
            Portfolio · grafički i web dizajn
          </p>

          <p
            data-tekst
            className="max-w-[16ch] font-[family-name:var(--font-gazpacho)] text-[clamp(2rem,4.4vw,3.6rem)] font-light italic leading-[1.08] tracking-[-0.02em]"
          >
            Crtam otkad znam da držim olovku.
          </p>

          <p
            data-tekst
            className="rotate-[1deg] bg-white/90 px-5 py-2.5 font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.2em] sm:px-8 sm:text-[12px] sm:tracking-[0.24em]"
            style={{ clipPath: TRAKA }}
          >
            identiteti · plakati · editorijal · sajtovi
          </p>

          <p
            data-tekst
            className="font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.24em] opacity-80 sm:text-[11px]"
          >
            Banja Luka · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
