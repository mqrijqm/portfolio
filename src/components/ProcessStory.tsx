"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type StepProps = {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

function Step({ number, title, children, className = "" }: StepProps) {
  return (
    <article
      className={`process-step relative z-10 max-w-[360px] border-l border-[#ad4e63]/30 pl-5 md:border-0 md:pl-0 ${className}`}
    >
      <p className="inline-block -rotate-3 font-[family-name:var(--font-recoleta)] text-[clamp(46px,5vw,78px)] font-light italic leading-none tracking-[-0.06em] text-[#ad4e63]">
        {number}<span className="ml-1 text-[.65em]">·</span>
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-inter)] text-[17px] font-semibold leading-tight text-[#2f3b34] sm:text-[20px]">
        {title}
      </h2>
      <p className="mt-2 font-[family-name:var(--font-inter)] text-[13px] leading-[1.65] text-[#526057] sm:text-[15px]">
        {children}
      </p>
    </article>
  );
}

type ScribbleProps = {
  viewBox: string;
  path: string;
  className: string;
};

function Scribble({ viewBox, path, className }: ScribbleProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute hidden overflow-visible md:block ${className}`}
    >
      <path
        className="process-line"
        d={path}
        pathLength="1"
        stroke="#ad4e63"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1"
      />
    </svg>
  );
}

export default function ProcessStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
          gsap.from(step, {
            opacity: 0,
            y: 34,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.utils.toArray<SVGPathElement>(".process-line").forEach((line) => {
          gsap.fromTo(
            line,
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: line.closest("svg"),
                start: "top 88%",
                end: "bottom 28%",
                scrub: 1,
              },
            },
          );
        });
      });

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".process-step", {
          opacity: 0,
          y: 24,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-[#f3eee6] text-[#2f3b34]"
    >
      {/* Ekran 01 — na 1440×1024 vidi se 01 i 02, a 03 ulazi na dnu. */}
      <section className="relative min-h-[100svh] px-6 pb-24 pt-28 sm:px-10 md:h-[100svh] md:px-[7vw] md:pb-0 md:pt-[9vh]">
        <div className="relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center">
            <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#ad4e63]">
              RADNI PROCES · 01—06
            </p>
            <h1
              id="process-title"
              className="mt-5 max-w-[1050px] font-[family-name:var(--font-gazpacho)] text-[clamp(42px,5.2vw,86px)] font-light leading-[.94] tracking-[-0.035em]"
            >
              Kako ideja pronađe<br />svog čovjeka.
            </h1>
          </div>
        </div>

        <Step number="01" title="Prvo primijetim" className="mt-16 md:absolute md:left-[11%] md:top-[50%] md:mt-0 md:w-[340px]">
          Neku prazninu. Nešto što ljudima fali, iako to još ne znaju imenovati.
        </Step>
        <Step number="02" title="Onda crtam" className="ml-auto mt-20 md:absolute md:right-[8%] md:top-[63%] md:mt-0 md:w-[340px]">
          Bez cenzure: mrlje, riječi i pogrešne linije. Ideja prvo mora smjeti biti ružna.
        </Step>
        <Step number="03" title="Tražim razlog" className="mt-20 md:absolute md:bottom-[-12%] md:left-[18%] md:mt-0 md:w-[340px]">
          Kome ovo služi? Šta treba olakšati, objasniti ili učiniti toplijim?
        </Step>

        <Scribble
          viewBox="0 0 332 185"
          path="M5 48.8212C28.61 66.1212 62.44 82.0612 89.1 89.6412C94.9183 91.2955 119.11 94.4612 162.015 98.2962C201.472 101.823 227.93 97.5012 240.245 94.3462C257.268 89.9849 277.84 71.2812 290.81 57.6912C294.867 53.4402 295 40.9112 294.505 26.4212C294.242 18.7212 289.69 13.5212 285.2 8.19121C282.008 4.40242 274.05 4.82121 265.23 5.31621C253.602 5.9688 244.4 19.4212 234.03 33.7712C230.789 38.2564 231 46.7612 231.495 56.7512C232.127 69.5017 249.28 77.4612 258.135 81.4762C266.758 85.3858 277.94 86.4812 291.28 91.4662C305.92 96.937 317.94 104.781 323.655 113.121C330.66 123.344 323.02 138.781 319.68 146.626C316.147 154.924 309.36 162.781 301.2 169.466C299.02 170.811 297.04 171.801 294.37 172.971C291.7 174.141 288.4 175.461 283 179.821"
          className="left-[35%] top-[52%] w-[24vw] max-w-[360px]"
        />
        <Scribble
          viewBox="0 0 296 218"
          path="M5 21.5583C6.32 20.8983 14.92 16.9283 44.245 10.9333C99.2624 -0.314085 138.31 7.54829 142.965 9.37829C152.081 12.9619 164.58 20.5183 188.905 36.6533C210.283 50.8338 212.98 68.8183 214.165 81.3333C216.414 105.087 208.72 123.118 200.695 133.368C193.935 142.002 173.78 141.218 157.215 135.753C153.979 134.686 152.7 132.258 151.85 129.263C149.848 122.208 154.96 111.948 163.105 102.458C176.667 86.6564 203.56 87.5783 235.54 88.5433C261.985 89.3413 274.28 102.518 282.14 111.023C291.811 121.488 291 148.718 289.175 165.353C287.989 176.167 280.36 187.838 275.02 195.698C272.36 199.518 269.35 202.878 266.19 205.868C264.68 207.538 263.36 209.518 257 212.558"
          className="bottom-[-8%] right-[27%] w-[20vw] rotate-[20deg]"
        />
      </section>

      {/* Ekran 02 */}
      <section className="relative min-h-[80svh] px-6 py-24 sm:px-10 md:h-[100svh] md:px-[7vw] md:py-0">
        <Step number="04" title="Gradim sistem" className="ml-auto md:absolute md:right-[15%] md:top-[43%]">
          Boja, slovo, ritam i pravilo. Svaki detalj dobije posao; ništa nije samo ukras.
        </Step>
        <Scribble
          viewBox="0 0 276 180"
          path="M5 175C10.94 169.72 26.21 159.08 53.455 142.46C68.2843 133.414 85.98 124.52 99.445 116.625C112.91 108.73 121.82 102.46 142.91 89.6602C164 76.8602 197 57.7202 215.485 46.5402C242.31 28.6802 252.28 22.0402 263.96 13.2002C266.32 11.0202 267.64 9.04024 271 5.00024"
          className="left-[30%] top-[18%] w-[31vw] max-w-[500px]"
        />
      </section>

      {/* Ekran 03 */}
      <section className="relative min-h-[80svh] px-6 py-24 sm:px-10 md:h-[100svh] md:px-[7vw] md:py-0">
        <Step number="05" title="Puštam među ljude" className="md:absolute md:left-[15%] md:top-[34%]">
          Gledam gdje zastanu, šta razumiju i šta im nedostaje. Dizajn se popravlja slušanjem.
        </Step>
        <Scribble
          viewBox="0 0 255 280"
          path="M250 5.00073C247.36 23.1907 240.02 55.9607 233.38 74.3757C213.475 129.579 202.38 143.921 193.87 156.791C183.683 172.196 163.38 170.981 140.09 171.506C132.887 171.668 129.02 166.691 125.36 161.376C117.398 149.813 118.36 134.081 111.695 122.866C104.945 111.507 83.04 119.661 73.865 124.476C61.7472 130.835 67 158.581 72.8 170.791C80.0642 186.083 87.64 194.941 89.83 207.781C90.4763 211.57 90 216.241 87.03 220.931C71.9113 244.805 45.38 248.301 36.865 252.651C25.71 260.311 15.02 266.321 11.03 268.981C9.02 270.321 7.04 271.641 5 275.001"
          className="right-[27%] top-[-7%] w-[20vw] max-w-[310px]"
        />
      </section>

      {/* Ekran 04 */}
      <section className="relative min-h-[90svh] px-6 pb-24 pt-24 sm:px-10 md:h-[100svh] md:px-[7vw] md:py-0">
        <Step number="06" title="Umjetnost usrećuje" className="ml-auto md:absolute md:right-[14%] md:top-[31%]">
          Kad se neko prepozna, nasmije ili lakše pronađe put — znam da je ideja stigla gdje treba.
        </Step>
        <Scribble
          viewBox="0 0 291 229"
          path="M5.10869 5C5.10869 8.3 4.77869 18.25 5.26869 30.75C5.46805 35.8355 43.7687 25.1 93.2837 13.4C108.813 9.73057 106.169 18.2 102.329 24.9C94.4906 38.5758 85.8087 52.59 81.7987 62.935C78.3644 71.7948 134.089 35.16 162.234 22.345C164.241 21.4312 164.769 24.62 164.939 28.12C166.043 50.8609 146.179 83.53 135.679 103.04C132.378 109.173 132.109 107.04 133.924 102.555C142.855 80.485 148.089 71.7 151.749 67.69C159.663 59.019 154.789 120.4 159.749 143.955C161.83 153.841 175.369 166.24 183.914 177.965C192.325 189.507 203.729 196.3 214.559 204.96C232.409 217.32 244.389 220.66 258.034 223.49C264.339 224 274.569 224 285.109 224"
          className="left-[27%] top-[8%] w-[24vw] max-w-[370px]"
        />

        <div className="absolute bottom-[8vh] left-[7vw] right-[7vw] flex items-end justify-between border-t border-[#2f3b34]/20 pt-5">
          <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.24em] text-[#ad4e63]">
            A onda sve počinje ponovo.
          </p>
          <span className="font-[family-name:var(--font-gazpacho)] text-4xl font-light text-[#ad4e63]">↓</span>
        </div>
      </section>
    </section>
  );
}
