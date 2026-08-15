import Hero from "@/components/sections/Hero";
import Deck from "@/components/sections/Deck";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="page-in">
      <Hero />

      <div className="relative z-10 border-y-2 border-ink bg-ink py-2.5 text-paper-light">
        <Marquee
          items={[
            "ZAKASNIĆU",
            "ŠPIL No. 01",
            "GRAFIČKI DIZAJN",
            "WEB DIZAJN",
            "POPIJ ME",
            "BEOGRAD",
          ]}
          speed={42}
          separator="♥"
          className="font-type text-xs tracking-[0.3em] sm:text-sm"
        />
      </div>

      <Deck />
    </main>
  );
}
