"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DUR, EASE, prefersReduced } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Koliko se podiže odozdo */
  y?: number;
  /** Koliko se "ispravlja" iz nagiba — kao da je isečak tek zalepljen */
  rotate?: number;
  delay?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className,
  y = 46,
  rotate = 0,
  delay = 0,
  duration = DUR.base,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Ako korisnik traži manje animacije — prikaži finalno stanje odmah.
      if (prefersReduced()) return;

      gsap.from(ref.current, {
        opacity: 0,
        y,
        rotation: rotate,
        duration,
        delay,
        ease: EASE.out,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
