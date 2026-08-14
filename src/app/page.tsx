import Hero from "@/components/sections/Hero";
import KoSamJa from "@/components/sections/KoSamJa";
import GrafickiDizajn from "@/components/sections/GrafickiDizajn";
import WebDizajn from "@/components/sections/WebDizajn";
import MojDizajn from "@/components/sections/MojDizajn";
import Kontakt from "@/components/sections/Kontakt";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="relative z-10 border-y-2 border-ink bg-ink py-2.5 text-paper-light">
        <Marquee
          items={[
            "PORTFOLIO",
            "IZDANJE No. 01",
            "GRAFIČKI DIZAJN",
            "WEB DIZAJN",
            "BEOGRAD",
            "OD 2016.",
          ]}
          speed={42}
          className="font-type text-xs tracking-[0.3em] sm:text-sm"
        />
      </div>

      <KoSamJa />
      <GrafickiDizajn />
      <WebDizajn />
      <MojDizajn />
      <Kontakt />
    </main>
  );
}
