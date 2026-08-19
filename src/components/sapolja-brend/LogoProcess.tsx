"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SapoljaMark from "@/components/sapolja-brend/SapoljaMark";

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

        gsap.to(".garlic-image", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".photo-frame",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
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
      <div className="process-frame photo-frame flex min-h-[115svh] items-center px-6 py-[12vh] md:px-[4vw]">
        <div className="process-content relative mx-auto aspect-[3/2] w-full overflow-hidden bg-[color:var(--green)]">
          <Image
            src={svg("garlic-editorial.jpg")}
            alt="Ilustracija bijelog luka i zelenog lišća"
            fill
            sizes="92vw"
            className="garlic-image scale-[1.12] object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/10" />
          <SapoljaMark
            title="SaPolja znak"
            className="absolute left-1/2 top-1/2 w-[clamp(110px,17vw,250px)] -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
          />
        </div>
      </div>

      <div className="process-frame flex min-h-[115svh] items-center px-6 py-[14vh] md:px-[8vw]">
        <Image
          src={svg("logo-construction-clean.png")}
          alt="Plod i brazde spojeni u završni SaPolja znak"
          width={1536}
          height={1024}
          sizes="(min-width: 768px) 84vw, 100vw"
          className="process-content mx-auto h-auto w-full max-w-[1536px] object-contain"
        />
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
