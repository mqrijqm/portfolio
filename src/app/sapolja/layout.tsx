import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

/**
 * Brend slučaj ima svoju tipografiju — Recoleta kao brend rez, Inter za
 * oznake i sitan tekst. Fontovi se vežu samo za ovu rutu, ostatak sajta
 * ostaje na Gazpachu.
 */

/**
 * Recoleta je brend font SaPolja. Logotip je u krivama unutar SVG-a, pa
 * ovaj rez služi samo za živi tekst — ime fonta u specimenu.
 */
const recoleta = localFont({
  src: "../../fonts/Recoleta-Regular.otf",
  variable: "--font-recoleta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export default function SapoljaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.variable} ${recoleta.variable}`}>{children}</div>
  );
}
