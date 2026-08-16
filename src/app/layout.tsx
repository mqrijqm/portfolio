import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";

/** Gazpacho nosi ceo sajt — naslovi, tekst, sve osim sitnih oznaka. */
const gazpacho = localFont({
  src: [
    { path: "../fonts/Gazpacho-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Gazpacho-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Gazpacho-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Gazpacho-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-gazpacho-raw",
  display: "swap",
});

export const metadata: Metadata = {
  // Bez ovoga Next ne zna kako da napravi pune URL-ove za OG slike.
  // Kad sajt dobije domen, upiši ga u NEXT_PUBLIC_SITE_URL.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Marija — grafički i web dizajn",
  description:
    "Portfolio: identiteti, plakati, editorijal i sajtovi. Banja Luka.",
  openGraph: {
    title: "Marija — grafički i web dizajn",
    description:
      "Identiteti, plakati, editorijal i sajtovi. Banja Luka.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className={`${gazpacho.variable} antialiased`}>
      <body className="min-h-full">
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>

        {/* Jedva vidljivo zrno preko celog sajta */}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
