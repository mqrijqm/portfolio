import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageTurn from "@/components/PageTurn";
import GrafickiDizajn from "@/components/sections/GrafickiDizajn";
import { Rose } from "@/components/wonderland/WBits";
import { getPage } from "@/lib/pages";

const page = getPage("/graficki-dizajn")!;

export const metadata: Metadata = {
  title: "Grafički dizajn",
  description:
    "Vizuelni identiteti, plakati, editorijal i pakovanje — izbor radova.",
};

export default function Page() {
  return (
    <main className="page-in paper-bg">
      <PageShell page={page} illustration={<Rose className="w-full" />} />
      <GrafickiDizajn />
      <PageTurn current="/graficki-dizajn" />
    </main>
  );
}
