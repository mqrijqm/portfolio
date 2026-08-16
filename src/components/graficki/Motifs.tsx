/**
 * Motivi za stranicu Grafički dizajn.
 * Sve je čist SVG — nema slika, nema zavisnosti, skalira se bez gubitka.
 */

type MotifProps = {
  className?: string;
  color?: string;
};

/** Obris stepenastog krsta — isti oblik kao maska .stepped-cross */
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

/* --------------------------------------------------------------------
   Grana — listovi se ređaju duž krive, pa je raspored uvek isti
   -------------------------------------------------------------------- */

const STEM = {
  p0: { x: 12, y: 82 },
  p1: { x: 190, y: 8 },
  p2: { x: 392, y: 58 },
};

function onCurve(t: number) {
  const { p0, p1, p2 } = STEM;
  const mt = 1 - t;
  return {
    x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
    y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
    // izvod krive daje nagib, po njemu se list okreće
    angle:
      (Math.atan2(
        2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y),
        2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x),
      ) *
        180) /
      Math.PI,
  };
}

const LEAVES = Array.from({ length: 9 }, (_, i) => {
  const t = 0.08 + (i / 8) * 0.84;
  const { x, y, angle } = onCurve(t);
  const side = i % 2 === 0 ? -1 : 1;
  // list se odmiče od stabljike po normali, da se ne slepe u mrlju
  const normal = ((angle + 90 * side) * Math.PI) / 180;
  const off = 17 - t * 4;
  return {
    stemX: x,
    stemY: y,
    x: x + Math.cos(normal) * off,
    y: y + Math.sin(normal) * off,
    angle: angle + side * 34,
    // listovi se sužavaju ka vrhu grane
    rx: 30 - t * 12,
    ry: 10.5 - t * 3.4,
  };
});

/** Lisnata grana — silueta, kao pečat. */
export function Branch({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="-16 -16 432 156" className={className} aria-hidden="true">
      <path
        d={`M${STEM.p0.x} ${STEM.p0.y} Q ${STEM.p1.x} ${STEM.p1.y} ${STEM.p2.x} ${STEM.p2.y}`}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
      />
      {LEAVES.map((l, i) => (
        <g key={i}>
          <line
            x1={l.stemX}
            y1={l.stemY}
            x2={l.x}
            y2={l.y}
            stroke={color}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <ellipse
            cx={l.x}
            cy={l.y}
            rx={l.rx}
            ry={l.ry}
            fill={color}
            transform={`rotate(${l.angle} ${l.x} ${l.y})`}
          />
        </g>
      ))}
      {/* pupoljak na vrhu */}
      <circle cx={STEM.p2.x - 2} cy={STEM.p2.y} r={5} fill={color} />
    </svg>
  );
}

/**
 * Ptica složena od jasnih delova — telo, glava, kljun, račvast rep.
 * Jedna putanja je čitala kao list, pa je razbijena na oblike.
 * Crta se u koordinatnom sistemu 210×120, da može i unutar tuđeg <svg>.
 */
export function BirdGlyph({
  color = "currentColor",
  bg = "#ebe4d9",
}: {
  color?: string;
  bg?: string;
}) {
  return (
    <g>
      {/* rep */}
      <path d="M48 58 L56 80 L4 108 L20 84 L2 88 Z" fill={color} />
      {/* telo */}
      <ellipse
        cx="102"
        cy="62"
        rx="58"
        ry="34"
        transform="rotate(-10 102 62)"
        fill={color}
      />
      {/* glava i kljun */}
      <circle cx="150" cy="36" r="21" fill={color} />
      <path d="M168 30 L202 40 L168 48 Z" fill={color} />
      {/* krilo i oko — urezani bojom podloge */}
      <path
        d="M70 54 C 92 41, 124 43, 140 55 C 118 71, 88 71, 70 54 Z"
        fill={bg}
      />
      <circle cx="158" cy="31" r="3.2" fill={bg} />
    </g>
  );
}

/** Ptica kao samostalan crtež. */
export function Bird({
  className,
  color = "currentColor",
  bg = "#ebe4d9",
}: MotifProps & { bg?: string }) {
  return (
    <svg viewBox="0 0 210 120" className={className} aria-hidden="true">
      <BirdGlyph color={color} bg={bg} />
    </svg>
  );
}

/** Sunce sa zracima — crveni pečat iz veza. */
export function SunBurst({ className, color = "currentColor" }: MotifProps) {
  const rays = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const inner = 21;
    const outer = i % 2 === 0 ? 46 : 34;
    const w = 0.055;
    return [
      `M ${50 + Math.cos(a - w) * inner} ${50 + Math.sin(a - w) * inner}`,
      `L ${50 + Math.cos(a) * outer} ${50 + Math.sin(a) * outer}`,
      `L ${50 + Math.cos(a + w) * inner} ${50 + Math.sin(a + w) * inner}`,
      "Z",
    ].join(" ");
  });

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {rays.map((d, i) => (
        <path key={i} d={d} fill={color} />
      ))}
      <circle cx="50" cy="50" r="21" fill={color} />
    </svg>
  );
}

/** Tanka linija sa kockicom u sredini — razdelnik. */
export function Divider({ className, color = "currentColor" }: MotifProps) {
  return (
    <svg viewBox="0 0 240 12" className={className} aria-hidden="true">
      <line x1="0" y1="6" x2="106" y2="6" stroke={color} strokeWidth={1} />
      <rect x="114" y="0" width="12" height="12" fill={color} />
      <line x1="134" y1="6" x2="240" y2="6" stroke={color} strokeWidth={1} />
    </svg>
  );
}
