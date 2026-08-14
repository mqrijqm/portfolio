"use client";

import { useId } from "react";
import { round } from "@/lib/motion";

type EyeProps = {
  className?: string;
  /** Boja dužice */
  iris?: string;
  /** Boja linija (gravura) */
  ink?: string;
  /** Boja beonjače */
  sclera?: string;
  /** Raster preko oka — kao loše odštampana fotografija */
  halftone?: boolean;
  halftoneColor?: string;
  lashes?: boolean;
  /** Šrafura oko oka, u stilu bakroreza */
  hatching?: boolean;
  /** Zenica prati kursor (postavlja EyeCollage) */
  tracks?: boolean;
};

/** Radijalne linije u dužici — daju utisak gravure. */
function irisLines(ink: string) {
  const lines = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    const r1 = 17.5;
    const r2 = i % 2 === 0 ? 35 : 30;
    lines.push(
      <line
        key={i}
        x1={round(100 + Math.cos(a) * r1)}
        y1={round(62 + Math.sin(a) * r1)}
        x2={round(100 + Math.cos(a) * r2)}
        y2={round(62 + Math.sin(a) * r2)}
        stroke={ink}
        strokeWidth={1.1}
        strokeLinecap="round"
      />,
    );
  }
  return lines;
}

const LASHES: [number, number, number, number][] = [
  [24, 44, 10.4, 40.8],
  [47, 32, 34.8, 25.1],
  [72, 24, 63.7, 12.7],
  [100, 21.5, 100, 6.5],
  [127.5, 24, 136.3, 12.7],
  [153, 32, 165.2, 25.1],
  [176, 44, 189.6, 40.8],
];

export default function Eye({
  className,
  iris = "#2e4a79",
  ink = "#16130e",
  sclera = "#f6efdc",
  halftone = false,
  halftoneColor = "#16130e",
  lashes = true,
  hatching = true,
  tracks = true,
}: EyeProps) {
  const raw = useId();
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  const clip = `eyeclip-${uid}`;
  const dots = `eyedots-${uid}`;

  const EYE_PATH = "M6,62 C46,8 154,8 194,62 C154,116 46,116 6,62 Z";

  return (
    <svg
      viewBox="0 0 200 124"
      className={className}
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <clipPath id={clip}>
          <path d={EYE_PATH} />
        </clipPath>
        <pattern
          id={dots}
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2.5" cy="2.5" r="1.35" fill={halftoneColor} />
        </pattern>
      </defs>

      {/* Beonjača */}
      <path d={EYE_PATH} fill={sclera} />

      <g clipPath={`url(#${clip})`}>
        {/* Šrafura u uglovima — dubina, kao u starim gravurama */}
        {hatching && (
          <g stroke={ink} strokeWidth="0.9" fill="none" opacity="0.55">
            <path d="M8,58 q14,-9 28,-12" />
            <path d="M9,66 q15,7 30,10" />
            <path d="M14,52 q12,-7 24,-9" />
            <path d="M192,58 q-14,-9 -28,-12" />
            <path d="M191,66 q-15,7 -30,10" />
            <path d="M186,52 q-12,-7 -24,-9" />
          </g>
        )}

        {/* Grupa koja prati kursor */}
        <g className={tracks ? "js-pupil" : undefined}>
          <circle cx="100" cy="62" r="36" fill={iris} />
          <g opacity="0.9">{irisLines(ink)}</g>
          <circle
            cx="100"
            cy="62"
            r="36"
            fill="none"
            stroke={ink}
            strokeWidth="2.4"
          />
          <circle cx="100" cy="62" r="15.5" fill={ink} />
          <circle cx="91" cy="52" r="6" fill={sclera} opacity="0.95" />
          <circle cx="109" cy="72" r="2.6" fill={sclera} opacity="0.6" />
        </g>

        {/* Raster preko svega */}
        {halftone && (
          <rect
            x="0"
            y="0"
            width="200"
            height="124"
            fill={`url(#${dots})`}
            opacity="0.45"
            style={{ mixBlendMode: "multiply" }}
          />
        )}
      </g>

      {/* Kontura */}
      <path
        d={EYE_PATH}
        fill="none"
        stroke={ink}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />

      {/* Trepavice */}
      {lashes && (
        <g stroke={ink} strokeWidth="3" strokeLinecap="round">
          {LASHES.map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
      )}

      {/* Nabor gornjeg kapka */}
      <path
        d="M18,50 C52,6 148,6 182,50"
        fill="none"
        stroke={ink}
        strokeWidth="1.6"
        opacity="0.5"
      />
    </svg>
  );
}
