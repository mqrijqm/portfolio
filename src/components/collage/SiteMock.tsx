"use client";

import { useId } from "react";

/**
 * Maketa sajta u prozoru pregledača — nacrtana, ne screenshot.
 * Zameniti pravim slikama radova kad budu spremne.
 */

const PAPER = "#f6efdc";
const INK = "#16130e";
const RED = "#c3341d";
const BLUE = "#2e4a79";
const MUSTARD = "#d79f35";
const MINT = "#6f8f7c";
const PINK = "#e57f92";

function Lines({
  x,
  y,
  w,
  count = 4,
  gap = 16,
  h = 8,
  color = INK,
  opacity = 0.35,
}: {
  x: number;
  y: number;
  w: number;
  count?: number;
  gap?: number;
  h?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <g fill={color} opacity={opacity}>
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * (h + gap)}
          width={i === count - 1 ? w * 0.62 : w}
          height={h}
          rx={h / 2}
        />
      ))}
    </g>
  );
}

export default function SiteMock({
  variant = 0,
  url = "marija.rs",
  className,
  label,
}: {
  variant?: number;
  url?: string;
  className?: string;
  label?: string;
}) {
  const raw = useId();
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  const dots = `sm-dots-${uid}`;
  const clip = `sm-clip-${uid}`;
  const v = variant % 4;

  return (
    <svg
      viewBox="0 0 800 520"
      className={className}
      role="img"
      aria-label={label ?? `Maketa sajta ${url}`}
    >
      <defs>
        <pattern id={dots} width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.2" fill={INK} />
        </pattern>
        <clipPath id={clip}>
          <rect x="4" y="46" width="792" height="470" />
        </clipPath>
      </defs>

      {/* okvir prozora */}
      <rect x="2" y="2" width="796" height="516" fill={PAPER} />
      <rect x="2" y="2" width="796" height="44" fill={INK} />
      <circle cx="30" cy="24" r="7" fill={RED} />
      <circle cx="54" cy="24" r="7" fill={MUSTARD} />
      <circle cx="78" cy="24" r="7" fill={MINT} />
      <rect x="110" y="12" width="380" height="24" rx="12" fill="#3a3428" />
      <text
        x="128"
        y="29"
        className="font-type"
        fontSize="14"
        fill={PAPER}
        opacity="0.8"
      >
        {url}
      </text>

      <g clipPath={`url(#${clip})`}>
        {/* ---------------- 0 — hero sa krupnom tipografijom ---------------- */}
        {v === 0 && (
          <>
            <rect x="4" y="46" width="792" height="470" fill={PAPER} />
            <rect x="440" y="86" width="316" height="290" fill={BLUE} />
            <circle cx="598" cy="231" r="92" fill={MUSTARD} />
            <rect
              x="440"
              y="86"
              width="316"
              height="290"
              fill={`url(#${dots})`}
              opacity="0.22"
            />
            <rect x="44" y="96" width="300" height="34" fill={INK} />
            <rect x="44" y="146" width="230" height="34" fill={RED} />
            <rect x="44" y="196" width="270" height="34" fill={INK} />
            <Lines x={44} y={262} w={280} count={3} />
            <rect x="44" y="352" width="150" height="40" rx="4" fill={INK} />
            <g fill={INK} opacity="0.25">
              <rect x="44" y="428" width="220" height="60" />
              <rect x="284" y="428" width="220" height="60" />
              <rect x="524" y="428" width="220" height="60" />
            </g>
          </>
        )}

        {/* ---------------- 1 — mreža kartica ---------------- */}
        {v === 1 && (
          <>
            <rect x="4" y="46" width="792" height="470" fill={PAPER} />
            <rect x="4" y="46" width="792" height="52" fill={MINT} opacity="0.4" />
            <rect x="40" y="64" width="110" height="16" fill={INK} />
            <g fill={INK} opacity="0.4">
              <rect x="560" y="66" width="52" height="12" />
              <rect x="628" y="66" width="52" height="12" />
              <rect x="696" y="66" width="52" height="12" />
            </g>
            {[
              [RED, 0, 0],
              [BLUE, 1, 0],
              [MUSTARD, 2, 0],
              [PINK, 0, 1],
              [MINT, 1, 1],
              [INK, 2, 1],
            ].map(([c, cx, cy], i) => (
              <g key={i}>
                <rect
                  x={40 + (cx as number) * 248}
                  y={128 + (cy as number) * 190}
                  width={224}
                  height={124}
                  fill={c as string}
                  opacity="0.85"
                />
                <rect
                  x={40 + (cx as number) * 248}
                  y={264 + (cy as number) * 190}
                  width={150}
                  height={12}
                  fill={INK}
                  opacity="0.45"
                />
              </g>
            ))}
          </>
        )}

        {/* ---------------- 2 — podeljen ekran ---------------- */}
        {v === 2 && (
          <>
            <rect x="4" y="46" width="792" height="470" fill={PAPER} />
            <rect x="4" y="46" width="360" height="470" fill={RED} />
            <text
              x="184"
              y="360"
              textAnchor="middle"
              className="font-display"
              fontSize="260"
              fill={PAPER}
              opacity="0.95"
            >
              R
            </text>
            <rect
              x="4"
              y="46"
              width="360"
              height="470"
              fill={`url(#${dots})`}
              opacity="0.15"
            />
            <rect x="420" y="100" width="200" height="26" fill={INK} />
            <Lines x={420} y={162} w={330} count={6} gap={14} />
            <rect x="420" y="404" width="330" height="2" fill={INK} opacity="0.4" />
            <g fill={BLUE}>
              <rect x="420" y="428" width="86" height="30" rx="4" />
              <rect x="520" y="428" width="86" height="30" rx="4" opacity="0.5" />
            </g>
          </>
        )}

        {/* ---------------- 3 — duga naslovna ---------------- */}
        {v === 3 && (
          <>
            <rect x="4" y="46" width="792" height="470" fill={PAPER} />
            <rect x="4" y="46" width="792" height="180" fill={INK} />
            <rect x="44" y="96" width="360" height="30" fill={PAPER} />
            <rect x="44" y="140" width="240" height="30" fill={MUSTARD} />
            <circle cx="660" cy="136" r="68" fill={PINK} />
            <circle cx="700" cy="160" r="52" fill={BLUE} opacity="0.75" />
            <rect x="44" y="262" width="330" height="200" fill={MINT} opacity="0.55" />
            <rect
              x="44"
              y="262"
              width="330"
              height="200"
              fill={`url(#${dots})`}
              opacity="0.3"
            />
            <rect x="416" y="262" width="180" height="20" fill={INK} />
            <Lines x={416} y={306} w={330} count={5} gap={13} />
            <rect x="416" y="440" width="120" height="26" rx="4" fill={RED} />
          </>
        )}
      </g>

      <rect
        x="2"
        y="2"
        width="796"
        height="516"
        fill="none"
        stroke={INK}
        strokeWidth="4"
      />
    </svg>
  );
}
