import Slika from "./Slika";
import type { Medij } from "@/lib/sapoljaBrend";

export type Mockup = {
  medij: Medij;
  /** Udio kolone u redu, npr. "38fr" — zbir ne mora biti 100 */
  udio: string;
};

type Props = {
  mockupi: Mockup[];
};

/**
 * Statičan triptih primjena, edge-to-edge, bez okvira.
 *
 * Izdvojeno u zasebnu komponentu koja prima niz slika: kad mockupa bude
 * više, ovdje se mijenja samo raspored (npr. horizontalni snap-scroll),
 * a sekcija na stranici ostaje ista.
 */
export default function MockupStrip({ mockupi }: Props) {
  return (
    <div
      className="grid h-full min-h-0 grid-cols-1 gap-10 px-6 md:grid-cols-[var(--kolone)] md:gap-14"
      style={
        {
          "--kolone": mockupi.map((m) => m.udio).join(" "),
        } as React.CSSProperties
      }
    >
      {mockupi.map(({ medij }) => (
        <div key={medij.src} className="relative h-64 min-h-0 md:h-full">
          <Slika
            medij={medij}
            sizes="(min-width: 768px) 34vw, 100vw"
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}
