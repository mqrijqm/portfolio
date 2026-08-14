"use client";

import { useId, useState } from "react";

type PhotoSlotProps = {
  /** Putanja do prave slike, npr. "/photos/mala-01.jpg".
   *  Ako fajl ne postoji, sam pada nazad na nacrtani placeholder. */
  src?: string;
  alt?: string;
  caption?: string;
  /** Godina u uglu, kao pečat sa starih fotografija */
  stamp?: string;
  /** 0–3, bira siluetu na placeholderu */
  variant?: number;
  className?: string;
  /** Nagib u stepenima */
  rotate?: number;
  /** Traka selotejpa gore */
  tape?: boolean;
  tone?: "sepia" | "blue" | "pink";
};

const TONES = {
  sepia: { a: "#c9ab72", b: "#7a5c33", dot: "#40301a" },
  blue: { a: "#8fa4c4", b: "#2e4a79", dot: "#1d2f4d" },
  pink: { a: "#e0a8b2", b: "#a54f61", dot: "#5e2b36" },
};

/** Nacrtana silueta — stoji dok Marija ne ubaci prave fotke. */
function Placeholder({ variant = 0, tone = "sepia" }: { variant?: number; tone?: keyof typeof TONES }) {
  const raw = useId();
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  const grad = `pg-${uid}`;
  const dots = `pd-${uid}`;
  const t = TONES[tone];

  return (
    <svg viewBox="0 0 300 380" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor={t.a} />
          <stop offset="100%" stopColor={t.b} />
        </linearGradient>
        <pattern id={dots} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.7" fill={t.dot} />
        </pattern>
      </defs>

      <rect width="300" height="380" fill={`url(#${grad})`} />

      <g fill={t.dot} opacity="0.88">
        {variant === 0 && (
          <>
            {/* devojčica sa repićima */}
            <ellipse cx="150" cy="140" rx="44" ry="48" />
            <ellipse cx="98" cy="142" rx="16" ry="25" />
            <ellipse cx="202" cy="142" rx="16" ry="25" />
            <path d="M72 380 C72 300 104 236 150 236 C196 236 228 300 228 380 Z" />
          </>
        )}
        {variant === 1 && (
          <>
            {/* mališan iz profila */}
            <ellipse cx="158" cy="138" rx="45" ry="49" />
            <ellipse cx="114" cy="146" rx="10" ry="13" />
            <path d="M70 380 C70 298 108 232 156 232 C204 232 240 298 240 380 Z" />
          </>
        )}
        {variant === 2 && (
          <>
            {/* dete sa kapom */}
            <ellipse cx="150" cy="150" rx="42" ry="46" />
            <path d="M112 122 C120 92 180 92 188 122 Z" />
            <rect x="96" y="116" width="108" height="11" rx="5.5" />
            <path d="M74 380 C74 306 106 244 150 244 C194 244 226 306 226 380 Z" />
          </>
        )}
        {variant === 3 && (
          <>
            {/* dvoje dece */}
            <ellipse cx="106" cy="176" rx="32" ry="35" />
            <ellipse cx="196" cy="158" rx="36" ry="39" />
            <path d="M56 380 C56 326 78 282 106 282 C134 282 156 326 156 380 Z" />
            <path d="M142 380 C142 318 166 268 196 268 C226 268 252 318 252 380 Z" />
          </>
        )}
      </g>

      {/* raster preko cele fotke — kao odštampano u novinama */}
      <rect width="300" height="380" fill={`url(#${dots})`} opacity="0.5" />

      {/* prašina i ogrebotine */}
      <g fill="#f6efdc" opacity="0.35">
        <circle cx="42" cy="66" r="1.6" />
        <circle cx="268" cy="112" r="2.1" />
        <circle cx="88" cy="322" r="1.4" />
        <circle cx="210" cy="286" r="1.8" />
        <rect x="230" y="40" width="1.4" height="34" />
        <rect x="54" y="240" width="1.2" height="52" />
      </g>
    </svg>
  );
}

export default function PhotoSlot({
  src,
  alt = "",
  caption,
  stamp,
  variant = 0,
  className = "",
  rotate = 0,
  tape = false,
  tone = "sepia",
}: PhotoSlotProps) {
  const [failed, setFailed] = useState(false);
  const showReal = src && !failed;

  return (
    <figure
      className={`photo-frame relative p-2.5 pb-9 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && (
        <span className="tape left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 -rotate-3" />
      )}

      <div className="relative aspect-[3/4] overflow-hidden bg-[#8a6f45]">
        {showReal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="photo-aged h-full w-full object-cover"
          />
        ) : (
          <Placeholder variant={variant} tone={tone} />
        )}

        {stamp && (
          <span className="absolute bottom-1.5 right-2 font-type text-[10px] tracking-widest text-mustard/90 drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]">
            {stamp}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className="absolute inset-x-0 bottom-1.5 px-3 text-center font-type text-[11px] leading-tight text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
