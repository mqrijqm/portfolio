import type { ReactNode } from "react";

type FrameProps = {
  /** Tekst koji stoji dok okvir čeka sliku */
  label?: string;
  className?: string;
  /** Luk umesto pravougaonika */
  arch?: boolean;
  children?: ReactNode;
};

/**
 * Prazan okvir za sliku. Dok nema fotografije, drži prostor i pokazuje
 * gde ide; kad slika stigne, prosledi je kao children.
 */
export default function Frame({
  label = "Mesto za sliku",
  className,
  arch = false,
  children,
}: FrameProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden border border-dashed border-forest/25 bg-linen-light ${
        arch ? "arch" : ""
      } ${className ?? ""}`}
    >
      {children ?? (
        <span className="px-4 text-center font-sans text-[10px] uppercase tracking-[0.28em] text-forest-soft/70">
          {label}
        </span>
      )}
    </div>
  );
}
