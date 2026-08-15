import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageTurn from "@/components/PageTurn";
import WebDizajn from "@/components/sections/WebDizajn";
import { PocketWatch } from "@/components/wonderland/WBits";
import { getPage } from "@/lib/pages";

const page = getPage("/web-dizajn")!;

export const metadata: Metadata = {
  title: "Web dizajn",
  description:
    "Sajtovi sa svojim vremenom i težinom: UI dizajn, scrollytelling, animacija.",
};

export default function Page() {
  return (
    <main className="page-in paper-bg">
      <PageShell page={page} illustration={<PocketWatch className="w-full" />} />
      <WebDizajn />
      <PageTurn current="/web-dizajn" />
    </main>
  );
}
