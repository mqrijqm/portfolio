/**
 * Linijske ikone za listu usluga — četiri poteza, bez detalja.
 * Svaka je svoj element da bi se mogle razlikovati bez boje.
 */

type Props = { className?: string };

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Brend identitet — kocka sa rombom u sredini */
export function IkonaIdentitet({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="4.5" width="31" height="31" />
      <path d="M20 12.5 27.5 20 20 27.5 12.5 20Z" />
    </svg>
  );
}

/** Web dizajn — prozor pregledača */
export function IkonaWeb({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="7.5" width="31" height="25" />
      <path d="M4.5 14.5h31M9 11h.01M12.5 11h.01M16 11h.01" />
      <path d="M10 20h12M10 25h8" />
    </svg>
  );
}

/** Ilustracija — kist */
export function IkonaIlustracija({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M10 30c0-8 4-16 12-22l8 4c-5 7-11 11-16 13z" />
      <path d="M8 32.5c2 1.5 5 1 6.5-1" />
      <path d="M27 8l5-3 3 5-5 3" />
    </svg>
  );
}

/** Dizajn sistem — mreža */
export function IkonaSistem({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="5.5" y="5.5" width="13" height="13" />
      <rect x="21.5" y="5.5" width="13" height="13" />
      <rect x="5.5" y="21.5" width="13" height="13" />
      <rect x="21.5" y="21.5" width="13" height="13" />
    </svg>
  );
}

/** Scrollytelling — linije koje se otkrivaju */
export function IkonaScrol({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6 10h28M6 17h20M6 24h24M6 31h12" />
      <path d="M30 26v9M26.5 31.5 30 35l3.5-3.5" />
    </svg>
  );
}

/** Po dogovoru — stepenasti romb iz veza */
export function IkonaPoDogovoru({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M20 5.5 27 12h6v6l6.5 2-6.5 2v6h-6l-7 6.5-7-6.5h-6v-6l-6.5-2 6.5-2v-6h6z" />
      <rect x="17.5" y="17.5" width="5" height="5" />
    </svg>
  );
}
