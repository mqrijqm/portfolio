import type { Metadata } from "next";
import { Anton, Playfair_Display, Courier_Prime } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marija — grafički i web dizajn",
    template: "%s · Marija",
  },
  description:
    "Portfolio u pet karata: identiteti, plakati, editorijal i sajtovi. Kolaž, stara štampa i Zemlja čuda. Beograd.",
  openGraph: {
    title: "Marija — grafički i web dizajn",
    description:
      "Portfolio u pet karata: identiteti, plakati, editorijal i sajtovi.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${anton.variable} ${playfair.variable} ${courier.variable} antialiased`}
    >
      <body className="min-h-full">
        <Nav />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>

        {/* Papirna zrnastost i vinjeta preko celog sajta */}
        <div className="grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
      </body>
    </html>
  );
}
