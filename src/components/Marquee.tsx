/**
 * Traka sa tekstom koji beskonačno klizi — kao natpis na koricama magazina.
 * Radi na čistom CSS-u (bez JS-a), pa ne troši ništa na skrolu.
 */

type MarqueeProps = {
  items: string[];
  /** Trajanje jednog kruga u sekundama — veće = sporije */
  speed?: number;
  reverse?: boolean;
  className?: string;
  separator?: string;
};

export default function Marquee({
  items,
  speed = 38,
  reverse = false,
  className = "",
  separator = "★",
}: MarqueeProps) {
  // Dva identična niza jedan za drugim → petlja bez šava na -50%
  const row = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden ${reverse ? "marquee-reverse" : ""} ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-6 whitespace-nowrap pr-6"
          >
            <span>{item}</span>
            <span className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
