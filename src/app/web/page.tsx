import type { Metadata } from "next";
import WebDizajn from "@/components/sections/WebDizajn";

export const metadata: Metadata = {
  title: "Web dizajn — Marija",
  description: "Sajtovi: koncept, dizajn i izrada. Next.js, GSAP, Lenis.",
};

export default function WebPage() {
  return (
    <main className="pt-11 sm:pt-14">
      <WebDizajn />
    </main>
  );
}
