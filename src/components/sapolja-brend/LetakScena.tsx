"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

/**
 * Three.js i sam model su zajedno oko 2 MB. Ne vučemo ih pri otvaranju
 * stranice — scena se učitava tek kad se sekcija letka približi ekranu.
 */
const LetakTri = dynamic(() => import("./LetakTri"), { ssr: false });

export default function LetakScena() {
  const okvir = useRef<HTMLDivElement>(null);
  const [blizu, setBlizu] = useState(false);
  /**
   * Kreće od true: scena se mount-uje tek kad se sekcija približi, pa je u
   * tom trenutku ionako na ekranu. Ovako Canvas nikad ne startuje ugašen —
   * frameloop="never" na prvi frame znači prazno platno, a model od 1,5 MB
   * se učitava posle mount-a. Posle ga IO gasi van ekrana.
   */
  const [aktivna, setAktivna] = useState(true);

  /**
   * Koliko je sekcija proskrolovana: 0 kad se pinovana scena tek zalijepi,
   * 1 kad se otkači. Model čita ovu vrijednost svaki frame, pa je držimo u
   * refu — kroz state bi svaki piksel skrola bio novi render Reacta.
   */
  const napredak = useRef(0);

  useEffect(() => {
    const el = okvir.current;
    if (!el) return;

    // Bez IntersectionObservera (stariji preglednici) samo učitaj odmah.
    if (typeof IntersectionObserver === "undefined") {
      const odloži = window.setTimeout(() => {
        setBlizu(true);
        setAktivna(true);
      }, 0);
      return () => window.clearTimeout(odloži);
    }

    const posmatrač = new IntersectionObserver(
      ([ulaz]) => {
        setAktivna(ulaz.isIntersecting);
        if (ulaz.isIntersecting) setBlizu(true);
      },
      { rootMargin: "600px 0px" },
    );
    posmatrač.observe(el);
    return () => posmatrač.disconnect();
  }, []);

  useEffect(() => {
    // Mjerimo cijelu sekciju, ne canvas — canvas je pinovan pa mu se rect
    // ne miče dok skrolujemo.
    const sekcija = okvir.current?.closest("section");
    if (!sekcija) return;

    let zakazano: number | null = null;

    const izmjeri = () => {
      zakazano = null;
      const r = sekcija.getBoundingClientRect();
      const hod = r.height - window.innerHeight;
      if (hod <= 0) return;
      const p = -r.top / hod;
      napredak.current = p < 0 ? 0 : p > 1 ? 1 : p;
    };

    const naSkrol = () => {
      if (zakazano !== null) return;
      zakazano = requestAnimationFrame(izmjeri);
    };

    izmjeri();
    window.addEventListener("scroll", naSkrol, { passive: true });
    window.addEventListener("resize", naSkrol);
    return () => {
      if (zakazano !== null) cancelAnimationFrame(zakazano);
      window.removeEventListener("scroll", naSkrol);
      window.removeEventListener("resize", naSkrol);
    };
  }, []);

  return (
    <div ref={okvir} className="absolute inset-0">
      {blizu ? <LetakTri napredak={napredak} aktivna={aktivna} /> : null}
    </div>
  );
}
