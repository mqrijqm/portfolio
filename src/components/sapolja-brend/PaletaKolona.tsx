"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  ime: string;
  /** Ispisuje se i kopira na klik */
  hex: string;
  rgb: string;
  cmyk: string;
  /** CSS vrijednost podloge — uvijek var(--…), nikad tvrdo upisan hex */
  pozadina: string;
  /** Boja teksta preko podloge — mora biti druga brend boja */
  tekst: string;
  /** Bijela kolona dobija tanku liniju da se vidi na bijeloj stranici */
  linija?: boolean;
};

/**
 * Kolona palete. Klik kopira HEX i na kratko ispiše „kopirano".
 * Bez biblioteka: navigator.clipboard, uz rezervu preko skrivenog polja
 * za slučaj da stranica nije na https ili je API zabranjen.
 */
export default function PaletaKolona({
  ime,
  hex,
  rgb,
  cmyk,
  pozadina,
  tekst,
  linija = false,
}: Props) {
  const [kopirano, setKopirano] = useState(false);
  const tajmer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (tajmer.current) clearTimeout(tajmer.current);
    };
  }, []);

  async function kopiraj() {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      const polje = document.createElement("textarea");
      polje.value = hex;
      polje.setAttribute("readonly", "");
      polje.style.cssText = "position:fixed;top:-1000px;opacity:0";
      document.body.appendChild(polje);
      polje.select();
      document.execCommand("copy");
      polje.remove();
    }

    setKopirano(true);
    if (tajmer.current) clearTimeout(tajmer.current);
    tajmer.current = setTimeout(() => setKopirano(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={kopiraj}
      aria-label={`Kopiraj ${hex} — ${ime}`}
      className={`relative flex aspect-square cursor-pointer flex-col justify-end p-6 text-left ${
        linija ? "border border-[color:var(--green)]/15" : ""
      }`}
      style={{ background: pozadina, color: tekst }}
    >
      <span className="font-[family-name:var(--font-inter)] text-[14px] font-semibold">
        {ime}
      </span>
      <span className="mt-1 font-[family-name:var(--font-inter)] text-[12px] leading-[1.6]">
        {hex}
        <br />
        {rgb}
        <br />
        {cmyk}
      </span>

      <span
        aria-live="polite"
        className={`absolute left-6 top-6 font-[family-name:var(--font-inter)] text-[12px] uppercase tracking-[0.08em] transition-opacity duration-200 ${
          kopirano ? "opacity-100" : "opacity-0"
        }`}
      >
        kopirano
      </span>
    </button>
  );
}
