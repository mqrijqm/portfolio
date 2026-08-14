import { seeded, seededRange } from "@/lib/motion";

/**
 * "Ransom note" tipografija — svako slovo je isečeno iz drugog magazina.
 * Izbor stila je determinističan (isti na serveru i u browseru), pa nema
 * hydration greške.
 */

type LetterStyle = {
  cls: string;
  style?: React.CSSProperties;
};

const STYLES: LetterStyle[] = [
  { cls: "font-display bg-ink text-paper-light px-[0.08em]" },
  { cls: "font-serif italic bg-red text-paper-light px-[0.1em]" },
  { cls: "font-type bg-mustard text-ink px-[0.08em] font-bold" },
  {
    cls: "font-display text-ink bg-paper-light px-[0.08em] border-2 border-ink",
  },
  { cls: "font-serif bg-blue text-paper-light px-[0.1em]" },
  { cls: "font-display type-halftone px-[0.06em]" },
  { cls: "font-display bg-pink text-ink px-[0.08em]" },
  { cls: "font-serif italic text-ink bg-paper-dark px-[0.1em]" },
];

export default function RansomText({
  text,
  className = "",
  seed = 1,
  jitter = 7,
}: {
  text: string;
  className?: string;
  seed?: number;
  /** maksimalni nagib slova u stepenima */
  jitter?: number;
}) {
  return (
    <span className={`inline-flex flex-wrap items-end ${className}`}>
      {text.split("").map((ch, i) => {
        if (ch === " ") {
          return <span key={i} className="w-[0.28em]" aria-hidden="true" />;
        }

        const s = STYLES[Math.floor(seeded(i + seed) * STYLES.length)];
        const rot = seededRange(i + seed + 40, -jitter, jitter);
        const dy = seededRange(i + seed + 90, -0.06, 0.06);
        const scale = seededRange(i + seed + 130, 0.92, 1.08);

        return (
          <span
            key={i}
            className={`inline-block leading-[0.9] shadow-[2px_3px_0_rgba(22,19,14,0.18)] ${s.cls}`}
            style={{
              transform: `rotate(${rot}deg) translateY(${dy}em) scale(${scale})`,
              ...s.style,
            }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}
