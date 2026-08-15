import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageTurn from "@/components/PageTurn";
import Kontakt from "@/components/sections/Kontakt";
import { Doorway } from "@/components/wonderland/WBits";
import { getPage } from "@/lib/pages";

const page = getPage("/kontakt")!;

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Vrata su otključana — piši mi.",
};

export default function Page() {
  return (
    <main className="page-in paper-bg">
      <PageShell page={page} illustration={<Doorway className="w-full" />} />
      <Kontakt />
      <PageTurn current="/kontakt" />
    </main>
  );
}
