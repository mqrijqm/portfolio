import Image from "next/image";
import Reveal from "@/components/Reveal";

type Medij = { src: string; w: number; h: number; alt: string };

type FiguraProps = {
  medij: Medij;
  /** Potpis ispod slike */
  caption?: string;
  /** Vrijednost za sizes atribut — koliko je slika široka po breakpointu */
  sizes?: string;
  className?: string;
  /** Slike iznad pregiba ne smiju biti lijene */
  priority?: boolean;
  /** Bez okvira oko slike */
  bare?: boolean;
  /**
   * Grafički materijali dolaze na svojoj krem podlozi. Multiply je stapa
   * sa stranicom, pa se ne vidi pravougaonik oko znaka. Ne koristiti na
   * fotografijama — potamnjele bi.
   */
  blend?: boolean;
};

/**
 * Slika sa rezervisanim odnosom stranica (bez poskakivanja) i potpisom.
 */
export default function Figura({
  medij,
  caption,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  priority = false,
  bare = false,
  blend = false,
}: FiguraProps) {
  return (
    <Reveal y={38} className={className}>
      <figure>
        <div
          className={
            bare ? "" : "overflow-hidden border border-[color:var(--sp-line)]"
          }
        >
          <Image
            src={medij.src}
            width={medij.w}
            height={medij.h}
            alt={medij.alt}
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className={`h-auto w-full ${blend ? "mix-blend-multiply" : ""}`}
          />
        </div>
        {caption && (
          <figcaption className="mt-3 font-sans text-[10px] uppercase tracking-[0.24em] text-[color:var(--sp-soft)]">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
