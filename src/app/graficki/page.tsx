import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Frame from "@/components/Frame";

export const metadata: Metadata = {
  title: "Grafički dizajn — Marija",
  description:
    "Identiteti, plakati, editorijal i pakovanje. Prvi projekat: SaPolja.",
};

export default function GrafickiPage() {
  return (
    <main className="px-5 pb-28 pt-20 sm:pb-40 sm:pt-28">
      <SectionHeader
        chapter="Poglavlje 02"
        title="GRAFIČKI DIZAJN"
        lead={
          <>
            Identiteti, plakati, editorijal i pakovanje.
            <br />
            Banja Luka, od 2016.
          </>
        }
        className="pt-11 sm:pt-14"
      />

      {/* ================= PRVI PROJEKAT ================= */}
      <Reveal y={50} className="mt-20">
        <article className="mx-auto max-w-[1100px] border border-forest/20 bg-linen-light px-5 py-10 sm:px-12 sm:py-14">
          <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.36em] text-clay">
              Projekat 01
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-forest-soft">
              Vizuelni identitet · 2026
            </p>
          </header>

          <h2 className="mt-6 text-[clamp(2.2rem,6vw,4.4rem)] font-light leading-[1.05]">
            SaPolja
          </h2>

          <p className="mt-5 max-w-xl font-sans text-[13px] leading-[1.7] text-forest-soft sm:text-[15px]">
            Vizuelni identitet za platformu koja približava lokalnu hranu
            gradskom stolu.
          </p>

          <Frame className="mt-10 aspect-[16/9]" label="Mesto za projekat" />

          <Link
            href="/graficki/sapolja"
            className="group mt-10 inline-flex items-center gap-3 border border-forest px-7 py-3 font-sans text-[10px] uppercase tracking-[0.28em] transition-colors hover:bg-forest hover:text-linen-light"
          >
            Otvori projekat
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </article>
      </Reveal>
    </main>
  );
}
