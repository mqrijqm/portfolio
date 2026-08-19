import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Figura from "@/components/sapolja/Figura";
import Anatomija from "@/components/sapolja/Anatomija";
import Letaci from "@/components/sapolja/Letaci";
import { M, SP } from "@/lib/sapolja";

export const metadata: Metadata = {
  title: "SaPolja — vizuelni identitet | Marija",
  description:
    "Vizuelni identitet za SaPolja, platformu koja povezuje stanovnike Banje Luke sa provjerenim lokalnim farmerima.",
  openGraph: {
    title: "SaPolja — vizuelni identitet",
    description:
      "Brand strategija, znak, vizuelni sistem i web koncept za hyper-lokalnu platformu iz Banje Luke.",
    locale: "sr_RS",
    type: "article",
    images: [{ url: M.wordmark.src, width: M.wordmark.w, height: M.wordmark.h }],
  },
};

/** Boje projekta ulaze kao promjenljive, pa se mijenjaju na jednom mjestu. */
const tema = {
  "--sp-cream": SP.cream,
  "--sp-field": SP.field,
  "--sp-moss": SP.moss,
  "--sp-muted": SP.muted,
  "--sp-sand": SP.sand,
  "--sp-clay": SP.clay,
  "--sp-line": "rgba(21, 59, 37, 0.18)",
  "--sp-soft": "rgba(21, 59, 37, 0.62)",
} as CSSProperties;

const META = [
  ["Uloga", "Brand strategija, znak, vizuelni identitet, art direkcija i web koncept"],
  ["Klijent", "SaPolja"],
  ["Lokacija", "Banja Luka, Bosna i Hercegovina"],
  ["Faza", "Pre-launch — platforma u razvoju"],
  ["Godina", "2026"],
];

export default function SaPoljaPage() {
  return (
    <main
      style={tema}
      className="bg-[color:var(--sp-cream)] text-[color:var(--sp-field)]"
    >
      {/* ================= HERO ================= */}
      <section className="flex min-h-[calc(100svh-2.75rem)] flex-col justify-center pt-11 sm:min-h-[calc(100svh-3.5rem)] sm:pt-14">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:py-24">
          <Reveal>
            <nav aria-label="Putanja">
              <Link
                href="/graficki"
                className="font-sans text-[10px] uppercase tracking-[0.32em] text-[color:var(--sp-soft)] transition-colors hover:text-[color:var(--sp-clay)]"
              >
                ← Grafički dizajn
              </Link>
            </nav>

            <h1 className="mt-10 text-[clamp(3rem,11vw,8rem)] font-light leading-[0.95] tracking-[0.02em]">
              SaPolja
            </h1>

            {/* meta ide odmah ispod naslova, punom širinom */}
            <dl className="mt-10 w-full border-t border-[color:var(--sp-line)]">
              {META.map(([k, v]) => (
                <div
                  key={k}
                  className="grid items-baseline gap-x-10 gap-y-2 border-b border-[color:var(--sp-line)] py-6 sm:grid-cols-[7rem_1fr] sm:py-7"
                >
                  <dt className="font-sans text-[10px] uppercase tracking-[0.28em] text-[color:var(--sp-clay)]">
                    {k}
                  </dt>
                  <dd className="text-[clamp(1.35rem,3.2vw,2.4rem)] font-light leading-[1.15]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ================= ANATOMIJA ZNAKA ================= */}
      <section className="py-24 sm:py-36">
        <Reveal className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-[clamp(1.9rem,5vw,3.6rem)] font-light leading-[1.15]">
            Za SaPolja sam kreirala logo i odabrala tipografiju, uz primjenu na
            mockups.
          </h2>
          <p className="mt-6 max-w-xl font-sans text-[14px] leading-[1.8] text-[color:var(--sp-soft)] sm:text-[15px]">
            Vizuelna ideja nastala je spajanjem tri elementa koji objašnjavaju
            način na koji platforma funkcioniše.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          <Anatomija />
        </div>
      </section>

      {/* ================= ILUSTRACIJE ================= */}
      <section className="px-5 py-24 sm:py-36">
        <Figura
          medij={M.ilustracije}
          caption="Gravirane ilustracije proizvoda"
          sizes="100vw"
          bare
        />
      </section>

      {/* ================= DIZAJN LETAKA ================= */}
      <Letaci />

      <section className="bg-[color:var(--sp-field)] px-5 py-24 text-[color:var(--sp-cream)] sm:py-36">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <nav
              aria-label="Dalje"
              className="flex flex-wrap items-center gap-x-10 gap-y-4"
            >
              <Link
                href="/graficki"
                className="group inline-flex items-center gap-3 border border-[color:var(--sp-cream)]/40 px-7 py-3 font-sans text-[10px] uppercase tracking-[0.28em] transition-colors hover:bg-[color:var(--sp-cream)] hover:text-[color:var(--sp-field)]"
              >
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>
                Svi grafički radovi
              </Link>
              <Link
                href="/kontakt"
                className="font-sans text-[10px] uppercase tracking-[0.28em] text-[color:var(--sp-cream)]/70 underline underline-offset-[6px] transition-colors hover:text-[color:var(--sp-cream)]"
              >
                Piši mi
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
