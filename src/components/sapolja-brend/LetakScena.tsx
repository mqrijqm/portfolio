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

  return (
    <div ref={okvir} className="absolute inset-0">
      {blizu ? <LetakTri /> : null}
    </div>
  );
}
