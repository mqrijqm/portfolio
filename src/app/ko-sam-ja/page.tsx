import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageTurn from "@/components/PageTurn";
import KoSamJa from "@/components/sections/KoSamJa";
import { Mushroom } from "@/components/wonderland/WBits";
import { getPage } from "@/lib/pages";

const page = getPage("/ko-sam-ja")!;

export const metadata: Metadata = {
  title: "Ko sam ja",
  description:
    "Odakle sve ovo: makaze, mamini magazini i jedno detinjstvo provedeno u sečenju.",
};

export default function Page() {
  return (
    <main className="page-in paper-bg">
      <PageShell page={page} illustration={<Mushroom className="w-full" />}>
        <p className="mt-8 max-w-xl font-type text-[13px] leading-relaxed text-ink-soft">
          Gusenica pita Alisu ko je. Alisa ne zna — jer se tog jutra već
          nekoliko puta promenila. Ovo poglavlje je moj pokušaj odgovora.
        </p>
      </PageShell>

      <KoSamJa />
      <PageTurn current="/ko-sam-ja" />
    </main>
  );
}
