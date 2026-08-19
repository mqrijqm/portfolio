import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { OrnamentRow } from "@/components/Motifs";

type SectionHeaderProps = {
  /** Sitna oznaka iznad — npr. „Poglavlje 01" */
  chapter: string;
  /** Naslov; razmaknuta verzalna slova */
  title: string;
  /** Dva-tri reda ispod naslova */
  lead?: ReactNode;
  className?: string;
};

/**
 * Zaglavlje sekcije — isti ritam na svakoj stranici:
 * oznaka, tri ornamenta, naslov, pa uvodni red.
 */
export default function SectionHeader({
  chapter,
  title,
  lead,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={`text-center ${className ?? ""}`}>
      <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-forest-soft">
        {chapter}
      </p>

      <OrnamentRow className="mt-10" />

      <h2 className="mt-12 text-[clamp(1.7rem,5.2vw,3.6rem)] font-light leading-[1.15] tracking-[0.22em] sm:tracking-[0.3em]">
        {title}
      </h2>

      {lead && (
        <p className="mx-auto mt-8 max-w-lg text-[clamp(0.95rem,2vw,1.25rem)] font-light leading-relaxed text-forest-soft">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
