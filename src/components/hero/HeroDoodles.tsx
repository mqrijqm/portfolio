/**
 * Crteži za hero kolaž — sve je čist SVG, nacrtan da izgleda kao
 * flomaster na papiru: linije blago drhte, uglovi su zaobljeni,
 * ništa nije savršeno simetrično.
 */

type DoodleProps = {
  className?: string;
  color?: string;
};

/** Šestokraka zvezda sa uvučenim stranicama — glavni ukras kolaža. */
export function Zvezda({ className, color = "currentColor" }: DoodleProps) {
  return (
    <svg viewBox="-4 -4 108 108" className={className} aria-hidden="true">
      <path
        d="M50 2.5 L59.8 33 L92 25.2 L68.6 50.4 L91.2 74.6 L59.2 66.8 L50.4 97.5 L40.2 66.4 L8.8 74.2 L31.2 49.6 L8.2 26.4 L40.8 33.8 Z"
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Krstić — sitni akcenat, dve linije koje se ne seku baš pod pravim uglom. */
export function Krstic({ className, color = "currentColor" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.5 Q12.7 12 11.7 21.5 M2.5 12.4 Q12 11.5 21.5 12.2"
        fill="none"
        stroke={color}
        strokeWidth={4.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Mačka iz sveske — glava, brkovi, štap-telo. Nacrtana bez lenjira. */
export function Macka({ className, color = "currentColor" }: DoodleProps) {
  return (
    <svg viewBox="-4 -4 108 144" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke={color}
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 13 C68 12 79 25 78 39 C77 53 66 63 50 63 C34 63 23 52 22 38 C21 24 33 13 50 13 Z" />
        {/* čupava kosa */}
        <path d="M30 19 L23 6 M41 13 L39 1 M57 13 L61 2 M69 21 L78 10" />
        {/* brkovi */}
        <path d="M20 39 L4 33 M20 45 L3 47 M80 39 L96 33 M80 45 L97 47" />
        {/* telo, ruke, noge, rep */}
        <path d="M50 63 L50 105 M50 73 L25 85 M50 73 L75 85 M50 105 L33 130 M50 105 L67 130" />
        <path d="M50 103 Q73 111 76 89" />
      </g>
      <g fill={color}>
        <circle cx="40" cy="34" r="3.4" />
        <circle cx="60" cy="34" r="3.4" />
      </g>
      <path
        d="M45 47 Q50 52 55 47"
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Nasmejano lice sa šiljcima — drugi lik iz iste sveske. */
export function Lice({ className, color = "currentColor" }: DoodleProps) {
  return (
    <svg viewBox="-6 -6 122 104" className={className} aria-hidden="true">
      <g
        fill="none"
        stroke={color}
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M55 14 C78 13 96 29 95 47 C94 65 77 80 55 80 C33 80 16 65 15 47 C14 29 32 14 55 14 Z" />
        {/* šiljci na glavi */}
        <path d="M31 20 L25 7 M43 15 L41 3 M56 13 L57 1 M69 15 L73 4 M81 21 L89 10" />
        {/* ručice */}
        <path d="M15 48 L1 40 M95 48 L109 40" />
        {/* osmeh */}
        <path d="M37 53 Q55 70 73 53" />
      </g>
      <g fill={color}>
        <circle cx="42" cy="41" r="3.6" />
        <circle cx="68" cy="41" r="3.6" />
      </g>
    </svg>
  );
}

/** Olovka — mala, ide u ćošak kao da je ostavljena preko papira. */
export function Olovka({ className, color = "currentColor" }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 26" className={className} aria-hidden="true">
      <g stroke={color} strokeWidth={3} strokeLinejoin="round" fill="none">
        <path d="M2 13 L22 4 L22 22 Z" />
        <path d="M22 4 L112 4 L112 22 L22 22 Z" />
        <path d="M112 4 L136 6 L136 20 L112 22 Z" />
        <path d="M100 4 L100 22" />
      </g>
    </svg>
  );
}
