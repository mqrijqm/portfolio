import type { Metadata } from "next";
import SapoljaBrend from "@/components/SapoljaBrend";

export const metadata: Metadata = {
  title: "SaPolja — brend identitet | Marija",
  description:
    "Brend identitet za SaPolja: znak, tipografija, paleta i primjene. Banja Luka, 2026.",
  openGraph: {
    title: "SaPolja — brend identitet",
    description: "Znak, tipografija, paleta i primjene. Banja Luka, 2026.",
    locale: "sr_RS",
    type: "article",
  },
};

/**
 * Zasebna stranica za studiju slučaja. Odvojena od početne zato što su to
 * dvije različite priče — početak je jednostranični ulaz, ovdje je identitet.
 */
export default function BrendingPage() {
  return <SapoljaBrend />;
}
