/**
 * Motivi za stranicu Grafički dizajn.
 * Čist SVG — nema slika, nema zavisnosti, skalira se bez gubitka.
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

/** Sitan ornament iz veza — prazan stepenasti romb sa kockicom u sredini. */
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
