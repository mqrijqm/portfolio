import type { ReactNode } from "react";

type DugmeProps = {
  href: string;
  children: ReactNode;
  /** Vanjski link se otvara u novom tabu; `tel:` i `mailto:` nikad. */
  spolja?: boolean;
  className?: string;
};

/**
 * Dugme u brilean stilu: tekst + kružna ikona. Crni sloj se na hover rasteže
 * s desna preko celog dugmeta, tekst prelazi u bijelu, ikona ostaje žuta.
 * Isti obrazac koriste njihov .button.is-icon i .button-bg.
 */
export default function Dugme({
  href,
  children,
  spolja = false,
  className = "",
}: DugmeProps) {
  return (
    <a
      href={href}
      target={spolja ? "_blank" : undefined}
      rel={spolja ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-full pl-6 pr-1.5 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 right-1.5 w-8 rounded-full bg-ink transition-[width] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:w-[calc(100%-0.375rem)]"
      />
      <span className="relative z-10 text-[15px] leading-none transition-colors duration-300 group-hover:text-paper">
        {children}
      </span>
      <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-acid transition-colors duration-300 group-hover:bg-transparent">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M2 7h9M7.5 3 11.5 7l-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
