/**
 * Placeholder za rad — tiha SVG scena u paleti stranice.
 * Kad stignu prave fotografije, ovo se zamenjuje jednim <Image />;
 * okvir (luk ili stepenasti krst) ostaje isti.
 */

import { BirdGlyph } from "@/components/graficki/Motifs";

const C = {
  linen: "#ebe4d9",
  linenLight: "#f4efe6",
  /* podloga isečka mora biti tamnija od stranice, inače se oblik ne vidi */
  ground: "#ded1bb",
  forest: "#33443a",
  forestSoft: "#64705f",
  clay: "#a2402c",
  sand: "#d9c39b",
  sandDark: "#c0a678",
  sky: "#d3d6d0",
};

type PlateProps = {
  /** 0 dvorište · 1 posuda · 2 nebo · 3 brda */
  variant?: 0 | 1 | 2 | 3;
  className?: string;
};

/** Jato ptica u daljini — sitne kvačice. */
function Flock({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const birds = [
    [0, 0], [16, -9], [31, 4], [46, -6], [12, 14], [30, 20], [50, 12],
    [62, -2], [22, -20], [42, -18],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {birds.map(([bx, by], i) => (
        <path
          key={i}
          d={`M${bx} ${by} q3 -3 6 0 q3 -3 6 0`}
          fill="none"
          stroke={C.forest}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export default function Plate({ variant = 0, className }: PlateProps) {
  return (
    <svg
      viewBox="0 0 400 560"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.sky} />
          <stop offset="100%" stopColor="#e6ded1" />
        </linearGradient>
      </defs>

      {variant === 0 && (
        <>
          {/* dvorište sa lukovima */}
          <rect width="400" height="560" fill={`url(#sky-${variant})`} />
          <Flock x={252} y={92} scale={1.1} />

          <rect x="0" y="300" width="400" height="260" fill={C.sand} />
          <rect x="0" y="300" width="400" height="14" fill={C.sandDark} />

          {/* kula sa vetrenjačom */}
          <rect x="176" y="196" width="48" height="106" fill={C.sandDark} />
          <rect x="184" y="212" width="32" height="58" fill={C.forest} />

          {/* niz lukova */}
          {[24, 74, 124, 226, 276, 326].map((x) => (
            <g key={x}>
              <path
                d={`M${x} 420 v-56 a18 18 0 0 1 36 0 v56 z`}
                fill={C.clay}
                opacity={0.82}
              />
            </g>
          ))}

          {/* središnji portal */}
          <path
            d="M162 424 v-92 a38 38 0 0 1 76 0 v92 z"
            fill={C.sandDark}
          />
          <path d="M180 424 v-72 a20 20 0 0 1 40 0 v72 z" fill={C.forest} />

          {/* bazen */}
          <rect x="96" y="452" width="208" height="88" fill={C.forestSoft} opacity={0.55} />
          {[468, 486, 504, 522].map((y) => (
            <line
              key={y}
              x1="118"
              y1={y}
              x2="282"
              y2={y}
              stroke={C.linenLight}
              strokeWidth={1.2}
              opacity={0.5}
            />
          ))}

          {/* golo drvo */}
          <path
            d="M348 452 v-88 M348 396 l-20 -22 M348 380 l22 -26 M348 416 l-16 -18 M348 408 l18 -20"
            stroke={C.forest}
            strokeWidth={2.6}
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}

      {variant === 1 && (
        <>
          {/* posuda odozgo — kompozicija je namerno neuravnotežena */}
          <rect width="400" height="560" fill={C.ground} />
          <circle cx="200" cy="280" r="190" fill={C.linen} />
          <circle
            cx="200"
            cy="280"
            r="190"
            fill="none"
            stroke={C.clay}
            strokeWidth={15}
            opacity={0.8}
          />
          <circle
            cx="200"
            cy="280"
            r="146"
            fill="none"
            stroke={C.forestSoft}
            strokeWidth={1.4}
            opacity={0.45}
          />

          {/* sunce, gore desno */}
          {Array.from({ length: 20 }, (_, i) => {
            const a = (i / 20) * Math.PI * 2;
            const inner = 17;
            const outer = i % 2 === 0 ? 37 : 27;
            return (
              <path
                key={i}
                d={`M${268 + Math.cos(a - 0.06) * inner} ${192 + Math.sin(a - 0.06) * inner}
                    L${268 + Math.cos(a) * outer} ${192 + Math.sin(a) * outer}
                    L${268 + Math.cos(a + 0.06) * inner} ${192 + Math.sin(a + 0.06) * inner} Z`}
                fill={C.clay}
              />
            );
          })}
          <circle cx="268" cy="192" r="17" fill={C.clay} />

          {/* dve ptice, različite veličine i visine */}
          {[
            { x: 92, y: 238, s: 0.72 },
            { x: 232, y: 372, s: 0.48 },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x} ${b.y}) scale(${b.s})`}>
              <BirdGlyph color={C.forest} bg={C.linen} />
            </g>
          ))}

          {/* grančice */}
          {[
            { x: 118, y: 408, r: 8 },
            { x: 146, y: 206, r: -18 },
          ].map((s, i) => (
            <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
              <path d="M0 0 q28 -20 58 -12" fill="none" stroke={C.clay} strokeWidth={2.4} />
              {[10, 24, 38, 51].map((t, j) => (
                <ellipse
                  key={j}
                  cx={t}
                  cy={-5 - j * 1.8}
                  rx={8}
                  ry={3.4}
                  fill={C.clay}
                  transform={`rotate(${j % 2 ? 36 : -36} ${t} ${-5 - j * 1.8})`}
                />
              ))}
            </g>
          ))}
        </>
      )}

      {variant === 2 && (
        <>
          {/* nebo i drvo */}
          <rect width="400" height="560" fill={`url(#sky-${variant})`} />
          <Flock x={80} y={120} scale={1.5} />
          <rect x="0" y="430" width="400" height="130" fill={C.sand} />
          <path
            d="M120 430 v-190 M120 330 l-46 -50 M120 300 l50 -58 M120 366 l-38 -40 M120 268 l30 -38 M120 352 l44 -46"
            stroke={C.forest}
            strokeWidth={3.4}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M300 430 v-104 M300 380 l-26 -28 M300 356 l28 -32"
            stroke={C.forestSoft}
            strokeWidth={2.4}
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}

      {variant === 3 && (
        <>
          {/* stepenasta brda */}
          <rect width="400" height="560" fill={C.ground} />
          <circle cx="286" cy="146" r="52" fill={C.clay} opacity={0.85} />
          {[
            { y: 300, fill: C.sand },
            { y: 380, fill: C.forestSoft },
            { y: 460, fill: C.forest },
          ].map((band, i) => (
            <g key={i}>
              <path
                d={`M0 ${band.y + 40} V${band.y} h60 v-20 h60 v-22 h70 v22 h70 v20 h70 v22 h70 V${band.y + 40} Z`}
                fill={band.fill}
              />
              <rect x="0" y={band.y + 38} width="400" height={560 - band.y} fill={band.fill} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
