import Image from "next/image";
import Reveal from "@/components/Reveal";

/**
 * "Počela sam ilustrovati" — bijela stranica poslije šarene priče o procesu.
 * Tekst lijevo, ilustracija desno na sivom bloku, detalj oka preklopljen
 * preko donjeg desnog ugla. Sivi blok i isprekidani okvir su dio same
 * slike — CSS ovdje samo raspoređuje.
 */

export default function Ilustracija() {
  return (
    <section
      aria-labelledby="ilustracija-naslov"
      className="relative isolate flex min-h-[100svh] items-center bg-white px-5 py-[10svh] text-[#15161a] sm:px-8 md:px-[6vw]"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 md:grid-cols-[0.82fr_1.18fr] md:gap-10 lg:gap-16">
        {/* ---------------- tekst ---------------- */}
        <Reveal y={38}>
          <h2
            id="ilustracija-naslov"
            className="max-w-[13ch] font-[family-name:var(--font-gazpacho)] text-[clamp(2.1rem,4.6vw,3.9rem)] font-light leading-[1.1] tracking-[-0.02em]"
          >
            Počela sam ilustrovati primarno jer mi je bilo{" "}
            <span className="text-clay">dosadno</span>
          </h2>
        </Reveal>

        {/* ---------------- ilustracija ---------------- */}
        <Reveal y={54} delay={0.1}>
          <div className="relative mx-auto w-full max-w-[560px] md:w-fit md:max-w-none">
            <Image
              src="/ilustracije/tuzni-lik.webp"
              alt="Ilustracija: umorno lice sa naočarima, akril na papiru"
              width={1100}
              height={1384}
              sizes="(max-width: 768px) 88vw, 52vw"
              className="relative mx-auto h-auto w-full md:h-[min(74svh,780px)] md:w-auto"
            />

            {/* Detalj očiju — isječak iz iste slike, zalijepljen preko ugla. */}
            <div className="absolute -bottom-[7%] -right-[6%] w-[46%] max-w-[420px] shadow-[0_10px_26px_rgba(0,0,0,0.14)] sm:-bottom-[9%]">
              <Image
                src="/ilustracije/oci.webp"
                alt="Detalj: oči sa iste ilustracije"
                width={900}
                height={474}
                sizes="(max-width: 768px) 40vw, 26vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
