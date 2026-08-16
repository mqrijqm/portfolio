import type { Metadata } from "next";
import KoSamJa from "@/components/sections/KoSamJa";

export const metadata: Metadata = {
  title: "Ko sam ja — Marija",
  description:
    "Kratka biografija: makaze, mamini magazini i put od kolaža do dizajna.",
};

export default function KoSamJaPage() {
  return (
    <main className="pt-11 sm:pt-14">
      <KoSamJa />
    </main>
  );
}
