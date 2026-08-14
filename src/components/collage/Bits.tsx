/**
 * Biblioteka kolaž isečaka — sve je crtano kao SVG, ništa nije rasterska
 * slika. Znači: oštro na svakom ekranu, lako se preboji, i ne košta bundle.
 *
 * Sve komponente primaju className (veličina + rotacija ide odatle).
 */

import { round } from "@/lib/motion";

type Bit = {
  className?: string;
  color?: string;
  accent?: string;
};

/* ------------------------------------------------------------------ */
/* Zvezdice i praskovi                                                 */
/* ------------------------------------------------------------------ */

export function Sparkle({ className, color = "#16130e" }: Bit) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50,2 C56,36 64,44 98,50 C64,56 56,64 50,98 C44,64 36,56 2,50 C36,44 44,36 50,2 Z"
        fill={color}
      />
    </svg>
  );
}

export function Burst({ className, color = "#c3341d", accent }: Bit) {
  const pts: string[] = [];
  const spikes = 18;
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? 50 : 38;
    const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    pts.push(`${round(50 + Math.cos(a) * r)},${round(50 + Math.sin(a) * r)}`);
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={pts.join(" ")} fill={color} />
      {accent && (
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke={accent}
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
      )}
    </svg>
  );
}

export function Asterisk({ className, color = "#16130e" }: Bit) {
  const arms = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    arms.push(
      <line
        key={i}
        x1={50}
        y1={50}
        x2={round(50 + Math.cos(a) * 44)}
        y2={round(50 + Math.sin(a) * 44)}
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />,
    );
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {arms}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Strelice, škrabotine, linije                                        */
/* ------------------------------------------------------------------ */

export function Arrow({ className, color = "#c3341d" }: Bit) {
  return (
    <svg viewBox="0 0 140 80" className={className} aria-hidden="true">
      <path
        d="M6,64 C30,66 52,54 66,36 C78,20 96,12 122,16"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M104,6 L126,16 L106,30"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Scribble({ className, color = "#2e4a79" }: Bit) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden="true">
      <path
        d="M8,60 C28,10 60,8 72,38 C82,64 52,80 40,60 C28,40 62,18 96,26 C130,34 128,72 156,66 C176,62 186,42 192,22"
        fill="none"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WavyRule({ className, color = "#16130e" }: Bit) {
  return (
    <svg viewBox="0 0 240 16" className={className} aria-hidden="true">
      <path
        d="M2,10 C18,2 30,16 46,8 S78,2 94,10 S126,16 142,8 S174,2 190,10 S222,16 238,8"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Circled({ className, color = "#c3341d" }: Bit) {
  return (
    <svg viewBox="0 0 220 110" className={className} aria-hidden="true">
      <ellipse
        cx="110"
        cy="55"
        rx="100"
        ry="45"
        fill="none"
        stroke={color}
        strokeWidth="3"
        transform="rotate(-3 110 55)"
      />
      <path
        d="M14,64 C40,96 120,106 196,74"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        opacity="0.75"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Gravure: ruka, leptir, cvet, sunce, usne                            */
/* ------------------------------------------------------------------ */

/** Manikula — ona stara ruka sa uperenim prstom iz novina. */
export function Manicule({ className, color = "#16130e" }: Bit) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* manžetna */}
        <path d="M6,30 L34,22 L40,78 L12,72 Z" />
        <path d="M12,36 L38,29 M13,44 L39,37" strokeWidth="1.6" />
        {/* šaka */}
        <path d="M34,26 C56,22 70,30 78,38 C92,34 116,32 140,36 C150,38 150,50 138,51 L104,52 C118,54 126,58 124,64 C122,70 108,70 96,68 C104,72 106,78 98,81 C88,85 62,84 46,78 C38,75 36,70 36,64 Z" />
        {/* linije na dlanu */}
        <path
          d="M54,40 C62,46 70,48 80,48 M52,56 C62,60 74,62 86,62"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* nokat */}
        <path d="M132,38 C138,39 140,44 136,48" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

export function Moth({ className, color = "#16130e", accent = "#d79f35" }: Bit) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true">
      <g>
        {/* krila */}
        <path
          d="M98,78 C70,20 24,10 12,44 C2,72 30,96 96,88 Z"
          fill={accent}
          stroke={color}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M102,78 C130,20 176,10 188,44 C198,72 170,96 104,88 Z"
          fill={accent}
          stroke={color}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M96,88 C58,96 34,124 52,146 C68,164 92,136 100,100 Z"
          fill={accent}
          stroke={color}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M104,88 C142,96 166,124 148,146 C132,164 108,136 100,100 Z"
          fill={accent}
          stroke={color}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        {/* šare */}
        <g fill={color} opacity="0.85">
          <ellipse cx="46" cy="52" rx="11" ry="8" transform="rotate(-18 46 52)" />
          <ellipse cx="154" cy="52" rx="11" ry="8" transform="rotate(18 154 52)" />
          <circle cx="70" cy="124" r="5" />
          <circle cx="130" cy="124" r="5" />
        </g>
        <g stroke={color} strokeWidth="1.3" opacity="0.55" fill="none">
          <path d="M92,84 C72,72 50,66 24,66 M92,90 C68,94 46,102 34,116" />
          <path d="M108,84 C128,72 150,66 176,66 M108,90 C132,94 154,102 166,116" />
        </g>
        {/* telo i antene */}
        <ellipse cx="100" cy="92" rx="8" ry="34" fill={color} />
        <g stroke={color} strokeWidth="2.6" fill="none" strokeLinecap="round">
          <path d="M96,60 C88,44 76,36 62,34" />
          <path d="M104,60 C112,44 124,36 138,34" />
        </g>
      </g>
    </svg>
  );
}

export function Flower({ className, color = "#16130e", accent = "#e57f92" }: Bit) {
  const petals = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * 360;
    petals.push(
      <ellipse
        key={i}
        cx="50"
        cy="22"
        rx="8.5"
        ry="21"
        fill={accent}
        stroke={color}
        strokeWidth="1.8"
        transform={`rotate(${a} 50 50)`}
      />,
    );
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {petals}
      <circle cx="50" cy="50" r="13" fill={color} />
      <circle cx="50" cy="50" r="13" fill="none" stroke={color} strokeWidth="2" />
      <g fill={accent} opacity="0.9">
        <circle cx="46" cy="47" r="2" />
        <circle cx="54" cy="49" r="2" />
        <circle cx="49" cy="54" r="2" />
      </g>
    </svg>
  );
}

export function Sun({ className, color = "#16130e", accent = "#d79f35" }: Bit) {
  const rays = [];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const long = i % 2 === 0;
    rays.push(
      <line
        key={i}
        x1={round(50 + Math.cos(a) * 30)}
        y1={round(50 + Math.sin(a) * 30)}
        x2={round(50 + Math.cos(a) * (long ? 48 : 40))}
        y2={round(50 + Math.sin(a) * (long ? 48 : 40))}
        stroke={color}
        strokeWidth={long ? 3 : 1.8}
        strokeLinecap="round"
      />,
    );
  }
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {rays}
      <circle cx="50" cy="50" r="27" fill={accent} stroke={color} strokeWidth="2.6" />
      <g stroke={color} strokeWidth="1.4" opacity="0.6" fill="none">
        <path d="M30,44 C38,40 62,40 70,44" />
        <path d="M30,56 C38,60 62,60 70,56" />
      </g>
    </svg>
  );
}

export function Lips({ className, color = "#16130e", accent = "#c3341d" }: Bit) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      <path
        d="M8,48 C24,24 44,18 60,30 C68,36 74,40 80,40 C86,40 92,36 100,30 C116,18 136,24 152,48 C130,78 100,88 80,88 C60,88 30,78 8,48 Z"
        fill={accent}
        stroke={color}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M8,48 C40,42 120,42 152,48"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
      />
      <g stroke={color} strokeWidth="1.2" opacity="0.45" fill="none">
        <path d="M30,44 L26,30 M50,38 L48,24 M80,40 L80,26 M110,38 L112,24 M130,44 L134,30" />
        <path d="M34,54 L30,70 M60,58 L58,76 M100,58 L102,76 M126,54 L130,70" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Papirnati objekti: marka, karta, etiketa                            */
/* ------------------------------------------------------------------ */

export function Stamp({
  className,
  color = "#16130e",
  accent = "#6f8f7c",
  label = "MARIJA",
}: Bit & { label?: string }) {
  // perforacija — krugovi boje papira po ivici
  const holes = [];
  for (let i = 0; i <= 10; i++) {
    const p = 6 + i * 10.8;
    holes.push(<circle key={`t${i}`} cx={p} cy="4" r="3.4" fill="#ece2cb" />);
    holes.push(<circle key={`b${i}`} cx={p} cy="136" r="3.4" fill="#ece2cb" />);
  }
  for (let i = 0; i <= 12; i++) {
    const p = 4 + i * 10.7;
    holes.push(<circle key={`l${i}`} cx="4" cy={p} r="3.4" fill="#ece2cb" />);
    holes.push(<circle key={`r${i}`} cx="120" cy={p} r="3.4" fill="#ece2cb" />);
  }

  return (
    <svg viewBox="0 0 124 140" className={className} aria-hidden="true">
      <rect x="2" y="2" width="120" height="136" fill="#f6efdc" />
      <rect
        x="12"
        y="12"
        width="100"
        height="116"
        fill={accent}
        opacity="0.35"
      />
      <rect
        x="12"
        y="12"
        width="100"
        height="116"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      {/* portret-silueta */}
      <g fill={color} opacity="0.85">
        <circle cx="62" cy="52" r="18" />
        <path d="M32,102 C32,80 45,71 62,71 C79,71 92,80 92,102 Z" />
      </g>
      <text
        x="62"
        y="122"
        textAnchor="middle"
        fontSize="11"
        fontFamily="monospace"
        letterSpacing="1.5"
        fill={color}
      >
        {label}
      </text>
      {holes}
    </svg>
  );
}

export function Ticket({
  className,
  color = "#16130e",
  accent = "#d79f35",
  label = "ADMIT ONE",
}: Bit & { label?: string }) {
  return (
    <svg viewBox="0 0 260 90" className={className} aria-hidden="true">
      <path
        d="M4,4 H256 V32 A12,12 0 0,0 256,58 V86 H4 V58 A12,12 0 0,0 4,32 Z"
        fill={accent}
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <line
        x1="196"
        y1="8"
        x2="196"
        y2="82"
        stroke={color}
        strokeWidth="1.6"
        strokeDasharray="5 5"
      />
      <text
        x="98"
        y="52"
        textAnchor="middle"
        fontSize="24"
        fontFamily="monospace"
        letterSpacing="2"
        fill={color}
      >
        {label}
      </text>
      <text
        x="226"
        y="52"
        textAnchor="middle"
        fontSize="26"
        fontFamily="monospace"
        fill={color}
      >
        01
      </text>
    </svg>
  );
}

export function Label({
  className,
  color = "#16130e",
  accent = "#f6efdc",
  text = "NOVO",
}: Bit & { text?: string }) {
  return (
    <svg viewBox="0 0 200 70" className={className} aria-hidden="true">
      <path
        d="M2,35 L30,6 H196 V64 H30 Z"
        fill={accent}
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="35" r="5" fill="none" stroke={color} strokeWidth="2" />
      <text
        x="118"
        y="46"
        textAnchor="middle"
        fontSize="26"
        fontFamily="monospace"
        letterSpacing="3"
        fill={color}
      >
        {text}
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Rasterske mrlje                                                     */
/* ------------------------------------------------------------------ */

export function HalftoneBlob({ className, color = "#c3341d" }: Bit) {
  return (
    <div
      className={`halftone-lg ${className ?? ""}`}
      style={{ color }}
      aria-hidden="true"
    />
  );
}

export function DotGrid({ className, color = "#16130e" }: Bit) {
  const dots = [];
  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 7; x++) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={6 + x * 14}
          cy={6 + y * 14}
          r={3.2 - Math.abs(3 - x) * 0.35}
          fill={color}
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      {dots}
    </svg>
  );
}

/** Isečeno slovo iz novina — za "ransom note" tipografiju. */
export function CutLetter({
  letter,
  className,
  bg = "#16130e",
  fg = "#f6efdc",
}: {
  letter: string;
  className?: string;
  bg?: string;
  fg?: string;
}) {
  return (
    <span
      className={`inline-block px-[0.18em] leading-none ${className ?? ""}`}
      style={{ background: bg, color: fg }}
    >
      {letter}
    </span>
  );
}
