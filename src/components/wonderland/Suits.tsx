/** Znaci karata — srce, pik, tref, karo. Sve u jednom viewBox-u 100×100. */

export type SuitName = "herc" | "pik" | "tref" | "karo";

type SuitProps = {
  className?: string;
  color?: string;
};

export const SUIT_SYMBOL: Record<SuitName, string> = {
  herc: "♥",
  pik: "♠",
  tref: "♣",
  karo: "♦",
};

/** Crvene i crne boje, kao na pravom špilu. */
export const SUIT_COLOR: Record<SuitName, string> = {
  herc: "#c3341d",
  pik: "#16130e",
  tref: "#16130e",
  karo: "#c3341d",
};

export function Herc({ className, color = "#c3341d" }: SuitProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50,90 C18,66 6,50 6,34 C6,19 17,10 30,10 C40,10 47,16 50,24 C53,16 60,10 70,10 C83,10 94,19 94,34 C94,50 82,66 50,90 Z"
        fill={color}
      />
    </svg>
  );
}

export function Pik({ className, color = "#16130e" }: SuitProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50,6 C50,6 90,40 90,60 C90,72 81,80 70,80 C61,80 55,76 52,70 C52,79 55,88 63,94 L37,94 C45,88 48,79 48,70 C45,76 39,80 30,80 C19,80 10,72 10,60 C10,40 50,6 50,6 Z"
        fill={color}
      />
    </svg>
  );
}

export function Tref({ className, color = "#16130e" }: SuitProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill={color}>
        <circle cx="50" cy="28" r="19" />
        <circle cx="27" cy="58" r="19" />
        <circle cx="73" cy="58" r="19" />
        <path d="M42,94 C47,82 48,72 50,60 C52,72 53,82 58,94 Z" />
      </g>
    </svg>
  );
}

export function Karo({ className, color = "#c3341d" }: SuitProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50,4 C58,26 72,42 92,50 C72,58 58,74 50,96 C42,74 28,58 8,50 C28,42 42,26 50,4 Z"
        fill={color}
      />
    </svg>
  );
}

export function Suit({
  name,
  className,
  color,
}: {
  name: SuitName;
  className?: string;
  color?: string;
}) {
  const c = color ?? SUIT_COLOR[name];
  if (name === "herc") return <Herc className={className} color={c} />;
  if (name === "pik") return <Pik className={className} color={c} />;
  if (name === "tref") return <Tref className={className} color={c} />;
  return <Karo className={className} color={c} />;
}
