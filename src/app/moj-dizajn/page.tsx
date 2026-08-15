import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageTurn from "@/components/PageTurn";
import MojDizajn from "@/components/sections/MojDizajn";
import { TopHat } from "@/components/wonderland/WBits";
import { getPage } from "@/lib/pages";

const page = getPage("/moj-dizajn")!;

export const metadata: Metadata = {
  title: "Moj dizajn",
  description:
    "Manifest u pet tačaka i proces u četiri koraka — kako izgleda rad iznutra.",
};

export default function Page() {
  return (
    <main className="page-in paper-bg">
      <PageShell page={page} illustration={<TopHat className="w-full" />} />
      <MojDizajn />
      <PageTurn current="/moj-dizajn" />
    </main>
  );
}
