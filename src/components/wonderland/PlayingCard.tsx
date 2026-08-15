import Link from "next/link";
import type { ReactNode } from "react";
import { Suit, SUIT_COLOR, type SuitName } from "./Suits";

type CardProps = {
  rank: string;
  suit: SuitName;
  children?: ReactNode;
  /** Naslov ispod ilustracije */
  title?: string;
  /** Sitan tekst ispod naslova */
  note?: string;
  href?: string;
  className?: string;
  /** Nagib karte u špilu */
  rotate?: number;
};

function Corner({
  rank,
  suit,
  flipped = false,
}: {
  rank: string;
  suit: SuitName;
  flipped?: boolean;
}) {
  return (
    <span
      className={`absolute flex flex-col items-center gap-0.5 leading-none ${
        flipped ? "bottom-3 right-3 rotate-180" : "left-3 top-3"
      }`}
      style={{ color: SUIT_COLOR[suit] }}
    >
      <span className="font-display text-lg sm:text-2xl">{rank}</span>
      <Suit name={suit} className="h-3 w-3 sm:h-4 sm:w-4" />
    </span>
  );
}

export default function PlayingCard({
  rank,
  suit,
  children,
  title,
  note,
  href,
  className = "",
  rotate = 0,
}: CardProps) {
  const inner = (
    <div
      className={`card-face group relative flex aspect-[5/7] flex-col items-center justify-center px-5 py-10 transition-transform duration-500 ease-out ${
        href ? "group-hover:-translate-y-3 group-hover:rotate-0" : ""
      } ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Corner rank={rank} suit={suit} />
      <Corner rank={rank} suit={suit} flipped />

      <div className="flex w-full flex-1 items-center justify-center">
        {children}
      </div>

      {title && (
        <div className="mt-2 w-full text-center">
          <h3 className="font-display text-lg leading-tight tracking-[0.06em] sm:text-2xl">
            {title}
          </h3>
          {note && (
            <p className="mt-1.5 font-type text-[10px] leading-snug text-ink-soft">
              {note}
            </p>
          )}
        </div>
      )}

      {href && (
        <span className="mt-3 font-type text-[10px] tracking-[0.22em] text-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          OKRENI ↗
        </span>
      )}
    </div>
  );

  if (!href) return inner;

  return (
    <Link href={href} className="group block focus:outline-none">
      {inner}
    </Link>
  );
}
