import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import SectionHeader from "@/components/SectionHeader";

const SAJTOVI = [
  {
    title: "Studio Nora",
    url: "studionora.rs",
    year: "2025",
    note: "Sajt arhitektonskog studija. Projekti se otvaraju kao fascikle, skrol vodi kroz zgradu.",
    tags: ["Next.js", "GSAP", "Lenis"],
  },
  {
    title: "Rez online",
    url: "rez-magazin.rs",
    year: "2024",
    note: "Digitalno izdanje štampanog magazina. Prelom se ponaša kao papir, ali ume da se pretražuje.",
    tags: ["Next.js", "MDX", "Tipografija"],
  },
  {
    title: "Podrum 7",
    url: "podrum7.rs",
    year: "2024",
    note: "Prodavnica sa sedam vina i nijednom suvišnom stranicom.",
    tags: ["Shopify", "Custom tema"],
  },
  {
    title: "Sporo",
    url: "sporo.film",
    year: "2025",
    note: "Sajt festivala sporog filma. Sve animacije su namerno predugačke.",
    tags: ["Next.js", "WebGL", "GSAP"],
  },
];

const VESTINE = [
  "UI dizajn",
  "Scrollytelling",
  "Animacija",
  "Prototip",
  "Dizajn sistem",
];

export default function WebDizajn() {
  return (
    <section className="px-5 pb-28 pt-20 sm:pb-40 sm:pt-28">
      <SectionHeader
        chapter="Poglavlje 03"
        title="WEB DIZAJN"
        lead="Sajt nije plakat koji se pomera. Ima svoje vreme, težinu i inerciju."
      />

      <Reveal className="mx-auto mt-12 max-w-[1180px]">
        <div className="grid gap-8 border-t border-forest/15 pt-8 sm:grid-cols-[1.25fr_1fr] sm:items-start">
          <p className="max-w-xl font-sans text-[13px] leading-[1.7] text-forest sm:text-[15px]">
            Dizajniram ga u Figmi, ali ga završavam u pregledaču — jer se tek
            tamo vidi da li nešto stvarno radi.
          </p>
          <ul className="flex flex-wrap gap-2 sm:justify-end">
            {VESTINE.map((v) => (
              <li
                key={v}
                className="border border-forest/25 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-forest-soft"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---------- projekti ---------- */}
      <div className="mx-auto mt-16 grid max-w-[1180px] gap-10 sm:gap-12 lg:grid-cols-2">
        {SAJTOVI.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.06} y={44}>
            <article className="h-full border border-forest/20 bg-linen-light p-5 sm:p-7">
              <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-clay">
                  Projekat {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-forest-soft">
                  {s.year}
                </p>
              </header>

              <h3 className="mt-4 text-[clamp(1.6rem,3.6vw,2.4rem)] font-light leading-tight">
                {s.title}
              </h3>

              <Frame
                className="mt-6 aspect-[16/10]"
                label="Mesto za snimak ekrana"
              />

              <p className="mt-5 font-sans text-[12px] leading-[1.7] text-forest-soft sm:text-[13px]">
                {s.note}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-forest/15 pt-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-forest-soft/80">
                  {s.url}
                </span>
                <ul className="ml-auto flex flex-wrap gap-3">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="font-sans text-[10px] uppercase tracking-[0.18em] text-clay"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
