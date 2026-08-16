import type { Metadata } from "next";
import MojDizajn from "@/components/sections/MojDizajn";

export const metadata: Metadata = {
  title: "Moj dizajn — Marija",
  description: "Manifest: kako radim, šta me zanima i šta odbijam.",
};

export default function MojDizajnPage() {
  return (
    <main className="pt-11 sm:pt-14">
      <MojDizajn />
    </main>
  );
}
