"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const svg = (name: string) => `/sapolja/derived/${name}`;

export default function LogoProcess() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".process-frame").forEach((frame) => {
          const content = frame.querySelector(".process-content");
          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 90, scale: 0.97 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: frame,
                start: "top 72%",
                end: "center 52%",
                scrub: 1,
              },
            },
          );
        });
      });

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".process-content", {
          autoAlpha: 0,
          y: 42,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%" },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="konstrukcija-znaka" className="order-4 bg-[#FFFEFB]">
      <div className="process-frame flex min-h-[115svh] items-center px-6 py-[14vh] md:px-[8vw]">
        <div className="process-content mx-auto grid w-full max-w-[1320px] grid-cols-[0.8fr_auto_1.15fr_auto_1.5fr] items-center gap-[clamp(18px,4vw,76px)]">
          <Image
            src={svg("construction-apple-clean.svg")}
            alt="Plod"
            width={159}
            height={197}
            className="mx-auto h-auto w-full max-w-[230px]"
          />
          <span aria-hidden="true" className="font-[family-name:var(--font-inter)] text-[clamp(28px,4vw,52px)] font-light">+</span>
          <Image
            src={svg("construction-basket-clean.svg")}
            alt="Brazde i korpa"
            width={227}
            height={146}
            className="mx-auto h-auto w-full max-w-[330px]"
          />
          <span aria-hidden="true" className="font-[family-name:var(--font-inter)] text-[clamp(28px,4vw,52px)] font-light">=</span>
          <Image
            src={svg("construction-mark-clean.svg")}
            alt="Završni SaPolja znak"
            width={365}
            height={411}
            className="mx-auto h-auto w-full max-w-[430px]"
          />
        </div>
      </div>

      <div className="process-frame flex min-h-[125svh] items-center justify-center px-6 py-[16vh]">
        <Image
          src={svg("construction-geometry.svg")}
          alt="Geometrijska konstrukcija SaPolja znaka"
          width={389}
          height={375}
          className="process-content h-auto w-[min(620px,72vw)]"
        />
      </div>
    </section>
  );
}
