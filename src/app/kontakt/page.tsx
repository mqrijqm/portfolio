import type { Metadata } from "next";
import Kontakt from "@/components/sections/Kontakt";

export const metadata: Metadata = {
  title: "Kontakt — Marija",
  description: "Piši mi. Banja Luka, grafički i web dizajn.",
};

export default function KontaktPage() {
  return (
    <main className="pt-11 sm:pt-14">
      <Kontakt />
    </main>
  );
}
