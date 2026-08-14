"use client";

import { useId } from "react";
import { round } from "@/lib/motion";

/**
 * Nacrtani "radovi" — apstraktne poster kompozicije u riso maniru.
 * Stoje umesto pravih slika dok Marija ne ubaci svoje fotografije radova.
 * Sve je SVG: oštro na retini, bez ijednog kilobajta slike.
 */

type PosterProps = {
  variant?: number;
  title?: string;
  sub?: string;
  className?: string;
};

const PAPER = "#f2e9d4";
const INK = "#16130e";
const RED = "#c3341d";
const BLUE = "#2e4a79";
const MUSTARD = "#d79f35";
const PINK = "#e57f92";
const MINT = "#6f8f7c";

export default function PosterArt({
  variant = 0,
  title = "BEZ NAZIVA",
  sub = "PLAKAT",
  className,
}: PosterProps) {
  const raw = useId();
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  const dots = `pa-dots-${uid}`;
  const stripes = `pa-str-${uid}`;
  const clip = `pa-clip-${uid}`;

  const v = variant % 6;

  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label={`${title} — ${sub}`}
    >
      <defs>
        <pattern id={dots} width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="2.6" fill={INK} />
        </pattern>
        <pattern
          id={stripes}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <rect width="9" height="18" fill={RED} />
        </pattern>
        <clipPath id={clip}>
          <rect x="0" y="0" width="400" height="500" />
        </clipPath>
      </defs>

      <rect width="400" height="500" fill={PAPER} />

      <g clipPath={`url(#${clip})`}>
        {/* ---------------- 0 — riso krugovi ---------------- */}
        {v === 0 && (
          <>
            <circle cx="180" cy="200" r="140" fill={RED} opacity="0.9" />
            <circle
              cx="245"
              cy="245"
              r="120"
              fill={BLUE}
              opacity="0.72"
              style={{ mixBlendMode: "multiply" }}
            />
            <rect
              x="0"
              y="360"
              width="400"
              height="70"
              fill={`url(#${dots})`}
              opacity="0.5"
            />
            <circle
              cx="180"
              cy="200"
              r="140"
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
          </>
        )}

        {/* ---------------- 1 — dijagonala + oko ---------------- */}
        {v === 1 && (
          <>
            <rect
              width="400"
              height="500"
              fill={`url(#${stripes})`}
              opacity="0.85"
            />
            <path
              d="M40,230 C110,120 290,120 360,230 C290,340 110,340 40,230 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="5"
            />
            <circle cx="200" cy="230" r="62" fill={BLUE} />
            <circle cx="200" cy="230" r="27" fill={INK} />
            <circle cx="184" cy="212" r="11" fill={PAPER} />
            <rect
              x="0"
              y="392"
              width="400"
              height="108"
              fill={INK}
            />
          </>
        )}

        {/* ---------------- 2 — tipografski ---------------- */}
        {v === 2 && (
          <>
            <rect x="0" y="0" width="400" height="500" fill={MUSTARD} opacity="0.5" />
            <text
              x="200"
              y="330"
              textAnchor="middle"
              className="font-display"
              fontSize="330"
              fill={INK}
              opacity="0.92"
            >
              A
            </text>
            <rect
              x="0"
              y="190"
              width="400"
              height="46"
              fill={RED}
              style={{ mixBlendMode: "multiply" }}
            />
            <rect
              x="0"
              y="0"
              width="400"
              height="500"
              fill={`url(#${dots})`}
              opacity="0.18"
            />
          </>
        )}

        {/* ---------------- 3 — luk i cvet ---------------- */}
        {v === 3 && (
          <>
            <path
              d="M60,470 L60,220 A140,140 0 0,1 340,220 L340,470 Z"
              fill={MINT}
              opacity="0.85"
            />
            <path
              d="M60,470 L60,220 A140,140 0 0,1 340,220 L340,470 Z"
              fill="none"
              stroke={INK}
              strokeWidth="4"
            />
            <g transform="translate(200 235) scale(1.35)">
              {Array.from({ length: 10 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-46"
                  rx="15"
                  ry="40"
                  fill={PINK}
                  stroke={INK}
                  strokeWidth="2.4"
                  transform={`rotate(${(i / 10) * 360})`}
                />
              ))}
              <circle cx="0" cy="0" r="24" fill={MUSTARD} stroke={INK} strokeWidth="3" />
            </g>
            <rect
              x="0"
              y="440"
              width="400"
              height="60"
              fill={`url(#${dots})`}
              opacity="0.35"
            />
          </>
        )}

        {/* ---------------- 4 — mreža ---------------- */}
        {v === 4 && (
          <>
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 4 }).map((_, c) => {
                const on = (r * 4 + c) % 7 === 3;
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={20 + c * 92}
                    y={30 + r * 90}
                    width="78"
                    height="76"
                    fill={on ? RED : "none"}
                    stroke={INK}
                    strokeWidth="2.6"
                  />
                );
              }),
            )}
            <circle cx="290" cy="345" r="66" fill={BLUE} opacity="0.8" />
            <rect
              x="20"
              y="30"
              width="170"
              height="166"
              fill={`url(#${dots})`}
              opacity="0.45"
            />
          </>
        )}

        {/* ---------------- 5 — sunce i brda ---------------- */}
        {v === 5 && (
          <>
            <rect width="400" height="500" fill={BLUE} opacity="0.18" />
            <circle cx="200" cy="200" r="105" fill={MUSTARD} />
            <g stroke={INK} strokeWidth="3">
              {Array.from({ length: 20 }).map((_, i) => {
                const a = (i / 20) * Math.PI * 2;
                return (
                  <line
                    key={i}
                    x1={round(200 + Math.cos(a) * 112)}
                    y1={round(200 + Math.sin(a) * 112)}
                    x2={round(200 + Math.cos(a) * (i % 2 ? 130 : 146))}
                    y2={round(200 + Math.sin(a) * (i % 2 ? 130 : 146))}
                    strokeLinecap="round"
                  />
                );
              })}
            </g>
            <path d="M-20,420 L120,290 L230,420 Z" fill={RED} />
            <path d="M150,420 L290,270 L430,420 Z" fill={INK} opacity="0.88" />
            <rect x="-20" y="418" width="440" height="90" fill={INK} />
          </>
        )}
      </g>

      {/* ---------------- natpis ---------------- */}
      <g>
        <text
          x="22"
          y={v === 1 || v === 5 ? 442 : 470}
          className="font-display"
          fontSize="30"
          letterSpacing="1"
          fill={v === 1 || v === 5 ? PAPER : INK}
        >
          {title}
        </text>
        <text
          x="22"
          y={v === 1 || v === 5 ? 470 : 492}
          className="font-type"
          fontSize="13"
          letterSpacing="3"
          fill={v === 1 || v === 5 ? MUSTARD : RED}
        >
          {sub}
        </text>
      </g>

      <rect
        x="1.5"
        y="1.5"
        width="397"
        height="497"
        fill="none"
        stroke={INK}
        strokeWidth="3"
      />
    </svg>
  );
}
