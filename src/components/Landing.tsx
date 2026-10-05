import Nav from "@/components/Nav";
import { SteppedDiamond } from "@/components/Motifs";

/**
 * Jednostranični deo sajta. Sve što je vezano za SaPolja živi na /brending,
 * ovdje ostaje samo ulaz, najava e-com platforme i kontakt.
 *
 * Naslov je prazan namjerno — na prvom ekranu nema ničega osim okvira i
 * razmaknutog prostora. sr-only h1 postoji radi pretraživača i čitača ekrana:
 * bez njega bi stranica bila bez ijednog naslova.
 */
export default function Landing() {
  return (
    <>
      <Nav />

      <main className="flex flex-col">
        {/* ============================ HERO ============================ */}
        <section
          id="hero"
          className="flex min-h-[100svh] flex-col justify-between bg-linen px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
        >
          <h1 className="sr-only">Marija — grafički i web dizajn</h1>

          <div className="flex items-baseline justify-between gap-6">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              PORTFOLIO · 2026
            </p>
            <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
              BANJA LUKA
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 border-t border-forest/20 pt-4">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              SCROLL
            </span>
            <SteppedDiamond className="h-3.5 w-3.5 text-clay" />
          </div>
        </section>

        {/* =================== E-COM PLATFORME =================== */}
        <section
          id="e-com"
          className="flex min-h-[100svh] flex-col bg-linen-light px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
        >
          <div className="flex items-baseline justify-between gap-6">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em]">
              E-COM PLATFORME
            </p>
            <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
              U PRIPREMI
            </p>
          </div>

          <div className="mt-auto max-w-[18ch]">
            <h2 className="font-[family-name:var(--font-gazpacho)] text-[clamp(40px,7vw,96px)] font-light italic leading-[1.02] tracking-[-0.02em]">
              Prodavnice koje rade same od sebe
            </h2>
          </div>

          <div className="mt-[10vh] border-t border-forest/20 pt-4">
            <a
              href="/brending"
              className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft transition-colors hover:text-clay"
            >
              DALJE — BRENDING →
            </a>
          </div>
        </section>

        {/* ========================== KONTAKT ========================== */}
        <section
          id="kontakt"
          className="flex min-h-[100svh] flex-col justify-between bg-linen px-6 pb-[7vh] pt-[19vh] text-forest sm:px-10 md:px-[8vw]"
        >
          <div className="flex items-baseline justify-between gap-6">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em]">
              KONTAKT
            </p>
            <p className="text-right font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft/70">
              SLOBODNO PIŠI
            </p>
          </div>

          <div className="mt-[12vh]">
            <p className="max-w-[20ch] font-[family-name:var(--font-gazpacho)] text-[clamp(38px,6.5vw,92px)] font-light italic leading-[1.04] tracking-[-0.02em]">
              Ima nešto što treba da izgleda kao nešto?
            </p>

            <a
              href="mailto:mqrijqio@gmail.com"
              className="group mt-10 inline-flex flex-wrap items-baseline gap-3 border-b border-clay pb-2 text-[clamp(20px,3vw,40px)] font-light leading-none transition-colors hover:text-clay"
            >
              mqrijqio@gmail.com
            </a>

            <ul className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-sans text-[13px] uppercase tracking-[0.18em] text-forest-soft">
              <li>
                <a
                  href="tel:+38766304294"
                  className="transition-colors hover:text-clay"
                >
                  +387 66 304 294
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marija-malešević"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-clay"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between gap-6 border-t border-forest/20 pt-4">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-forest-soft">
              MARIJA · BANJA LUKA
            </span>
            <SteppedDiamond className="h-3.5 w-3.5 text-clay" />
          </div>
        </section>
      </main>
    </>
  );
}
