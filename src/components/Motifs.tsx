/**
 * Simboli sajta. Čist SVG — nema slika, skalira se bez gubitka.
 */

type MotifProps = {
  className?: string;
  color?: string;
};

/** Obris stepenastog krsta — motiv iz slovenskog veza. */
const CROSS_POINTS = [
  [40, 0], [60, 0], [60, 10], [70, 10], [70, 20], [80, 20], [80, 30],
  [90, 30], [90, 40], [100, 40], [100, 60], [90, 60], [90, 70], [80, 70],
  [80, 80], [70, 80], [70, 90], [60, 90], [60, 100], [40, 100], [40, 90],
  [30, 90], [30, 80], [20, 80], [20, 70], [10, 70], [10, 60], [0, 60],
  [0, 40], [10, 40], [10, 30], [20, 30], [20, 20], [30, 20], [30, 10],
  [40, 10],
]
  .map(([x, y]) => `${x},${y}`)
  .join(" ");

/** Ornament iz veza — prazan stepenasti romb sa kockicom u sredini. */
export function SteppedDiamond({
  className,
  color = "currentColor",
}: MotifProps) {
  return (
    <svg
      viewBox="-6 -6 112 112"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points={CROSS_POINTS}
        stroke={color}
        strokeWidth={9}
        strokeLinejoin="miter"
      />
      <rect x="38" y="38" width="24" height="24" fill={color} />
    </svg>
  );
}

/** Puna kockica — najmanji oblik u sistemu, za nabrajanja i razdelnike. */
export function Pip({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <rect width="12" height="12" fill={color} />
    </svg>
  );
}

/** Tanka linija sa kockicom u sredini — razdelnik između celina. */
export function Divider({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 240 12" className={className} aria-hidden="true">
      <line x1="0" y1="6" x2="106" y2="6" stroke={color} strokeWidth={1} />
      <rect x="114" y="0" width="12" height="12" fill={color} />
      <line x1="134" y1="6" x2="240" y2="6" stroke={color} strokeWidth={1} />
    </svg>
  );
}

/** Tri ornamenta u redu — potpis zaglavlja svake sekcije. */
export function OrnamentRow({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-9 sm:gap-14 ${className ?? ""}`}
    >
      {[0, 1, 2].map((i) => (
        <SteppedDiamond
          key={i}
          className="h-9 w-9 text-forest sm:h-12 sm:w-12"
        />
      ))}
    </div>
  );
}
