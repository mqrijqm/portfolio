import Image from "next/image";
import type { Medij } from "@/lib/sapoljaBrend";

type Props = {
  medij: Medij;
  sizes: string;
  className?: string;
  /** cover popunjava okvir i siječe; contain staje cijela unutra */
  fit?: "cover" | "contain";
  /** Slike iznad pregiba ne smiju biti lijene */
  priority?: boolean;
};

/**
 * Slika iz brend registra. Ako izvorni fajl nedostaje, na njegovom mjestu
 * stoji ravan sivi placeholder sa tačnim imenom fajla — da se odmah vidi
 * šta fali, umjesto da se sadržaj tiho izmisli ili zamijeni.
 */
export default function Slika({
  medij,
  sizes,
  className,
  fit = "cover",
  priority = false,
}: Props) {
  if (!medij.postoji) {
    return (
      <div
        className={`flex items-center justify-center bg-[#EEEEEE] p-4 ${className ?? ""}`}
      >
        <span className="break-all text-center font-[family-name:var(--font-inter)] text-[11px] leading-relaxed text-[#666]">
          {medij.original}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={medij.src}
      width={medij.w}
      height={medij.h}
      alt={medij.alt}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className ?? ""}`}
    />
  );
}
