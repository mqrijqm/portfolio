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
      setBlizu(true);
      return;
    }

    const posmatrač = new IntersectionObserver(
      ([ulaz]) => {
        if (!ulaz.isIntersecting) return;
        setBlizu(true);
        posmatrač.disconnect();
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

    let zakazano = false;

    const izmjeri = () => {
      zakazano = false;
      const r = sekcija.getBoundingClientRect();
      const hod = r.height - window.innerHeight;
      if (hod <= 0) return;
      const p = -r.top / hod;
      napredak.current = p < 0 ? 0 : p > 1 ? 1 : p;
    };

    const naSkrol = () => {
      if (zakazano) return;
      zakazano = true;
      requestAnimationFrame(izmjeri);
    };

    izmjeri();
    window.addEventListener("scroll", naSkrol, { passive: true });
    window.addEventListener("resize", naSkrol);
    return () => {
      window.removeEventListener("scroll", naSkrol);
      window.removeEventListener("resize", naSkrol);
    };
  }, []);

  return (
    <div ref={okvir} className="absolute inset-0">
      {blizu ? <LetakTri napredak={napredak} /> : null}
    </div>
  );
}
