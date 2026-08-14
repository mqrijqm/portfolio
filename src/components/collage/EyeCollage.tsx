"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Eye from "./Eye";
import { prefersReduced, seededRange } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type EyeSpec = {
  /** pozicija u % unutar kontejnera */
  x: number;
  y: number;
  /** širina u % */
  w: number;
  rot: number;
  iris: string;
  halftone?: boolean;
  /** papirni okvir ispod oka */
  frame?: "torn-a" | "torn-b" | null;
  frameColor?: string;
  tape?: boolean;
  /** jačina paralaksa na skrolu */
  depth?: number;
  /** sakrij na malim ekranima da ne bude gužva */
  hideOnMobile?: boolean;
  z?: number;
};

/* Pozicije su u procentima kontejnera. Držim x + w ispod ~94 da isečci
   ne beže van ekrana kad se dodaju rotacija i okvir. */
const EYES: EyeSpec[] = [
  // veliko oko u sredini — nosi kompoziciju
  {
    x: 15,
    y: 26,
    w: 56,
    rot: -3,
    iris: "#2e4a79",
    frame: "torn-a",
    frameColor: "#f6efdc",
    tape: true,
    depth: 0.15,
    z: 20,
  },
  {
    x: 2,
    y: 3,
    w: 27,
    rot: 10,
    iris: "#d79f35",
    halftone: true,
    frame: "torn-b",
    frameColor: "#ece2cb",
    depth: 0.5,
    z: 25,
  },
  {
    x: 62,
    y: 5,
    w: 30,
    rot: -13,
    iris: "#c3341d",
    frame: "torn-b",
    frameColor: "#f6efdc",
    tape: true,
    depth: 0.35,
    z: 24,
  },
  {
    x: 3,
    y: 52,
    w: 26,
    rot: 7,
    iris: "#6f8f7c",
    halftone: true,
    frame: null,
    depth: 0.6,
    z: 18,
    hideOnMobile: true,
  },
  {
    x: 20,
    y: 71,
    w: 34,
    rot: -7,
    iris: "#e57f92",
    frame: "torn-a",
    frameColor: "#ece2cb",
    depth: 0.25,
    z: 26,
  },
  {
    x: 60,
    y: 50,
    w: 33,
    rot: 13,
    iris: "#2e4a79",
    halftone: true,
    frame: "torn-b",
    frameColor: "#f6efdc",
    depth: 0.45,
    z: 22,
  },
  {
    x: 43,
    y: 4,
    w: 15,
    rot: 22,
    iris: "#16130e",
    frame: null,
    depth: 0.8,
    z: 27,
    hideOnMobile: true,
  },
  {
    x: 66,
    y: 84,
    w: 20,
    rot: -18,
    iris: "#c3341d",
    frame: null,
    depth: 0.7,
    z: 19,
    hideOnMobile: true,
  },
];

export default function EyeCollage({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const reduced = prefersReduced();

      /* ---- Paralaks: svako oko putuje svojom brzinom ---- */
      if (!reduced) {
        el.querySelectorAll<HTMLElement>("[data-depth]").forEach((layer) => {
          const depth = Number(layer.dataset.depth ?? 0);
          gsap.to(layer, {
            yPercent: -22 * depth,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      }

      /* ---- Treptanje: nasumično, svako oko za sebe ---- */
      const lids = gsap.utils.toArray<HTMLElement>(".js-eye", el);
      if (!reduced) {
        lids.forEach((lid, i) => {
          const blink = () => {
            gsap.timeline({
              onComplete: () => {
                gsap.delayedCall(seededRange(i + 3, 2.5, 7.5), blink);
              },
            })
              .to(lid, { scaleY: 0.06, duration: 0.07, ease: "power2.in" })
              .to(lid, { scaleY: 1, duration: 0.11, ease: "power2.out" });
          };
          gsap.delayedCall(seededRange(i + 1, 1, 6), blink);
        });
      }

      /* ---- Zenice prate kursor ---- */
      const pupils = gsap.utils.toArray<SVGGElement>(".js-pupil", el);
      if (!pupils.length || reduced) return;

      const setters = pupils.map((p) => ({
        el: p,
        x: gsap.quickTo(p, "x", { duration: 0.55, ease: "power3" }),
        y: gsap.quickTo(p, "y", { duration: 0.55, ease: "power3" }),
      }));

      const MAX_X = 15;
      const MAX_Y = 8;

      const onMove = (e: PointerEvent) => {
        setters.forEach((s) => {
          const r = s.el.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          // razlika u odnosu na pola ekrana → -1..1
          const dx = gsap.utils.clamp(
            -1,
            1,
            (e.clientX - cx) / (window.innerWidth * 0.42),
          );
          const dy = gsap.utils.clamp(
            -1,
            1,
            (e.clientY - cy) / (window.innerHeight * 0.42),
          );
          s.x(dx * MAX_X);
          s.y(dy * MAX_Y);
        });
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: root },
  );

  return (
    <div ref={root} className={`relative ${className}`} aria-hidden="true">
      {EYES.map((e, i) => (
        <div
          key={i}
          data-depth={e.depth ?? 0}
          className={`absolute ${e.hideOnMobile ? "hidden md:block" : ""}`}
          style={{
            left: `${e.x}%`,
            top: `${e.y}%`,
            width: `${e.w}%`,
            zIndex: e.z ?? 10,
          }}
        >
          {/* sloj 1: nagib (CSS) */}
          <div style={{ transform: `rotate(${e.rot}deg)` }}>
            {/* sloj 2: treptanje (GSAP) */}
            <div className="js-eye origin-center">
              {e.frame ? (
                <div
                  className={`relative ${e.frame} p-[6%] shadow-[0_10px_26px_rgba(60,45,20,0.28)]`}
                  style={{ background: e.frameColor ?? "#f6efdc" }}
                >
                  {e.tape && (
                    <span className="tape left-1/2 top-0 h-5 w-16 -translate-x-1/2 -translate-y-1/3 -rotate-6 sm:h-6 sm:w-20" />
                  )}
                  <Eye
                    className="w-full"
                    iris={e.iris}
                    halftone={e.halftone}
                  />
                </div>
              ) : (
                <Eye className="w-full" iris={e.iris} halftone={e.halftone} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
