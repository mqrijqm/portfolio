/**
 * Ilustracije iz Zemlje čuda — sve crtano kao SVG, u maniru starih
 * gravura iz knjige. Rade na svakoj veličini i lako se preboje.
 */

import { round } from "@/lib/motion";

type W = {
  className?: string;
  color?: string;
  accent?: string;
};

const INK = "#16130e";

/* ------------------------------------------------------------------ */
/* Beli zec kasni — džepni sat                                         */
/* ------------------------------------------------------------------ */

export function PocketWatch({ className, color = INK, accent = "#d79f35" }: W) {
  const ticks = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const long = i % 3 === 0;
    ticks.push(
      <line
        key={i}
        x1={round(60 + Math.cos(a) * 34)}
        y1={round(84 + Math.sin(a) * 34)}
        x2={round(60 + Math.cos(a) * (long ? 26 : 29))}
        y2={round(84 + Math.sin(a) * (long ? 26 : 29))}
        stroke={color}
        strokeWidth={long ? 3 : 1.6}
        strokeLinecap="round"
      />,
    );
  }

  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden="true">
      {/* alka i krunica */}
      <circle cx="60" cy="12" r="9" fill="none" stroke={color} strokeWidth="4" />
      <rect x="53" y="20" width="14" height="12" rx="3" fill={color} />
      {/* kućište */}
      <circle cx="60" cy="84" r="52" fill={accent} stroke={color} strokeWidth="4" />
      <circle cx="60" cy="84" r="43" fill="#f6efdc" stroke={color} strokeWidth="2.5" />
      {ticks}
      {/* kazaljke — pet do dvanaest, uvek se kasni */}
      <line
        x1="60"
        y1="84"
        x2="60"
        y2="52"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="84"
        x2="82"
        y2="98"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="84" r="4.5" fill={color} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Ludi šeširdžija — čaj i šešir                                       */
/* ------------------------------------------------------------------ */

export function Teacup({ className, color = INK, accent = "#5b86b5" }: W) {
  return (
    <svg viewBox="0 0 150 120" className={className} aria-hidden="true">
      {/* para */}
      <g fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" opacity="0.65">
        <path d="M56,34 C50,26 62,20 56,10" />
        <path d="M74,30 C68,22 80,16 74,6" />
        <path d="M92,36 C86,28 98,22 92,12" />
      </g>
      {/* šolja */}
      <path
        d="M34,48 L110,48 C110,80 96,96 72,96 C48,96 34,80 34,48 Z"
        fill={accent}
        stroke={color}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M34,48 L110,48" stroke={color} strokeWidth="3.4" />
      <ellipse cx="72" cy="48" rx="38" ry="7" fill="#f6efdc" stroke={color} strokeWidth="3" />
      {/* drška */}
      <path
        d="M110,56 C132,56 136,84 112,84"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* tacna */}
      <ellipse cx="72" cy="102" rx="60" ry="11" fill={accent} stroke={color} strokeWidth="3.4" />
      <ellipse cx="72" cy="99" rx="46" ry="7" fill="none" stroke={color} strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}

export function TopHat({ className, color = INK, accent = "#2e6b5e" }: W) {
  return (
    <svg viewBox="0 0 170 140" className={className} aria-hidden="true">
      {/* cilindar */}
      <path
        d="M48,16 L122,16 L128,96 L42,96 Z"
        fill={accent}
        stroke={color}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <ellipse cx="85" cy="16" rx="37" ry="9" fill={accent} stroke={color} strokeWidth="3.4" />
      {/* traka */}
      <path d="M44,74 L126,74 L128,96 L42,96 Z" fill={color} />
      {/* obod */}
      <ellipse cx="85" cy="98" rx="78" ry="17" fill={accent} stroke={color} strokeWidth="3.4" />
      <ellipse cx="85" cy="96" rx="45" ry="9" fill={color} opacity="0.55" />
      {/* cedulja sa cenom 10/6 */}
      <g transform="rotate(-8 128 44)">
        <path
          d="M108,26 L150,26 L150,60 L108,60 L100,43 Z"
          fill="#f6efdc"
          stroke={color}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <circle cx="110" cy="43" r="3" fill={color} />
        <text
          x="130"
          y="50"
          textAnchor="middle"
          fontSize="18"
          fontFamily="monospace"
          fill={color}
        >
          10/6
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Popij me / pojedi me                                                */
/* ------------------------------------------------------------------ */

export function DrinkMe({ className, color = INK, accent = "#6b4a86" }: W) {
  return (
    <svg viewBox="0 0 110 160" className={className} aria-hidden="true">
      {/* zapušač */}
      <rect x="42" y="4" width="26" height="16" rx="4" fill="#a9713e" stroke={color} strokeWidth="2.6" />
      {/* bočica */}
      <path
        d="M44,20 L66,20 L66,44 C86,56 92,74 92,102 C92,132 78,150 55,150 C32,150 18,132 18,102 C18,74 24,56 44,44 Z"
        fill={accent}
        opacity="0.85"
        stroke={color}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      {/* odsjaj */}
      <path
        d="M34,70 C28,84 27,104 30,120"
        fill="none"
        stroke="#f6efdc"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* cedulja */}
      <g transform="rotate(-6 55 104)">
        <rect x="24" y="88" width="62" height="30" rx="3" fill="#f6efdc" stroke={color} strokeWidth="2.4" />
        <text
          x="55"
          y="108"
          textAnchor="middle"
          fontSize="15"
          fontFamily="monospace"
          letterSpacing="1"
          fill={color}
        >
          POPIJ ME
        </text>
      </g>
      {/* kanap */}
      <path
        d="M55,20 C48,30 62,36 55,46"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function EatMe({ className, color = INK, accent = "#e57f92" }: W) {
  return (
    <svg viewBox="0 0 150 120" className={className} aria-hidden="true">
      {/* torta */}
      <path d="M26,52 L124,52 L124,96 L26,96 Z" fill="#e8d3a8" stroke={color} strokeWidth="3.2" />
      <path d="M26,68 L124,68" stroke={color} strokeWidth="1.6" opacity="0.5" />
      {/* glazura */}
      <path
        d="M26,52 C26,40 40,32 56,32 C68,32 74,26 86,26 C104,26 124,38 124,52 Z"
        fill={accent}
        stroke={color}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M30,54 C36,62 44,54 52,62 C60,70 68,58 76,64 C84,70 92,58 100,64 C108,70 116,58 122,62"
        fill="none"
        stroke="#f6efdc"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* natpis */}
      <text
        x="75"
        y="88"
        textAnchor="middle"
        fontSize="17"
        fontFamily="monospace"
        letterSpacing="2"
        fill={color}
      >
        POJEDI ME
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Ključ i vrata                                                       */
/* ------------------------------------------------------------------ */

export function Key({ className, color = "#d79f35" }: W) {
  return (
    <svg viewBox="0 0 70 190" className={className} aria-hidden="true">
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
        {/* glava */}
        <circle cx="35" cy="34" r="26" fill={color} />
        <circle cx="35" cy="34" r="11" fill="#ece2cb" />
        <path d="M35,8 L35,-2" strokeWidth="0" />
        {/* telo */}
        <rect x="28" y="58" width="14" height="112" fill={color} />
        {/* zupci */}
        <rect x="42" y="132" width="20" height="12" fill={color} />
        <rect x="42" y="152" width="14" height="12" fill={color} />
      </g>
    </svg>
  );
}

export function Doorway({ className, color = INK, accent = "#2e6b5e" }: W) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden="true">
      <path
        d="M14,166 L14,66 A46,46 0 0,1 106,66 L106,166 Z"
        fill={accent}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M26,160 L26,68 A34,34 0 0,1 94,68 L94,160 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.6"
      />
      {/* ključaonica */}
      <g fill="#d79f35" stroke={color} strokeWidth="2.4">
        <circle cx="60" cy="104" r="9" />
        <path d="M54,112 L66,112 L63,128 L57,128 Z" />
      </g>
      <circle cx="88" cy="116" r="5" fill="#d79f35" stroke={color} strokeWidth="2.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Pečurka i ruže                                                      */
/* ------------------------------------------------------------------ */

export function Mushroom({ className, color = INK, accent = "#c3341d" }: W) {
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      {/* stabljika */}
      <path
        d="M56,62 C52,90 52,112 46,132 L94,132 C88,112 88,90 84,62 Z"
        fill="#ede0c4"
        stroke={color}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M60,86 C70,90 76,90 84,86 M58,106 C70,110 76,110 86,106" stroke={color} strokeWidth="1.6" fill="none" opacity="0.55" />
      {/* klobuk */}
      <path
        d="M8,64 C8,30 34,10 70,10 C106,10 132,30 132,64 Z"
        fill={accent}
        stroke={color}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <g fill="#f6efdc" opacity="0.92">
        <ellipse cx="40" cy="42" rx="12" ry="9" />
        <ellipse cx="76" cy="30" rx="9" ry="7" />
        <ellipse cx="104" cy="48" rx="10" ry="7.5" />
        <ellipse cx="60" cy="56" rx="7" ry="5" />
      </g>
      {/* lamele */}
      <path d="M8,64 L132,64" stroke={color} strokeWidth="3.4" />
    </svg>
  );
}

/**
 * Ruža koju vrtlari premazuju u crveno — pola bela, pola crvena.
 * `painted` bira koliko je već ofarbano.
 */
export function Rose({
  className,
  color = INK,
  accent = "#c3341d",
  painted = true,
}: W & { painted?: boolean }) {
  const petal = painted ? accent : "#f6efdc";
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      {/* stablo i listovi */}
      <path d="M60,74 L60,126" stroke={color} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path
        d="M60,96 C40,90 28,98 24,110 C40,116 54,110 60,100 Z"
        fill="#6f8f7c"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M60,108 C80,102 92,110 96,122 C80,128 66,122 60,112 Z"
        fill="#6f8f7c"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* cvet */}
      <g stroke={color} strokeWidth="2.8" strokeLinejoin="round">
        <circle cx="60" cy="44" r="38" fill={petal} />
        <path d="M60,82 C34,74 24,58 30,38 C36,18 58,10 74,18" fill="none" />
        <circle cx="60" cy="44" r="26" fill="none" />
        <circle cx="60" cy="44" r="15" fill="none" />
        <path d="M52,44 C52,36 62,32 68,38 C74,44 68,54 60,52" fill="none" />
      </g>
      {/* trag četkice */}
      {painted && (
        <path
          d="M32,20 C46,26 54,34 58,46"
          fill="none"
          stroke="#f6efdc"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.45"
        />
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Češirski mačak — ostane samo osmeh                                  */
/* ------------------------------------------------------------------ */

export function CheshireGrin({ className, color = INK, accent = "#e57f92" }: W) {
  return (
    <svg viewBox="0 0 220 130" className={className} aria-hidden="true">
      {/* oči */}
      <g>
        <path
          d="M40,34 C50,16 74,16 84,34 C74,48 50,48 40,34 Z"
          fill="#f6efdc"
          stroke={color}
          strokeWidth="3"
        />
        <ellipse cx="62" cy="33" rx="7" ry="12" fill={color} />
        <path
          d="M136,34 C146,16 170,16 180,34 C170,48 146,48 136,34 Z"
          fill="#f6efdc"
          stroke={color}
          strokeWidth="3"
        />
        <ellipse cx="158" cy="33" rx="7" ry="12" fill={color} />
      </g>
      {/* osmeh */}
      <path
        d="M22,62 C46,116 174,116 198,62 C160,80 60,80 22,62 Z"
        fill={accent}
        stroke={color}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M22,62 C60,80 160,80 198,62" fill="none" stroke={color} strokeWidth="3" />
      {/* zubi */}
      <g stroke={color} strokeWidth="2.2" opacity="0.85">
        <path d="M46,70 L50,86 M70,76 L72,94 M96,79 L96,99 M124,79 L124,99 M150,76 L148,94 M174,70 L170,86" />
      </g>
      {/* brkovi */}
      <g stroke={color} strokeWidth="2" opacity="0.5" fill="none">
        <path d="M18,52 C8,50 4,46 2,40 M202,52 C212,50 216,46 218,40" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Zečja rupa — spirala                                                */
/* ------------------------------------------------------------------ */

export function RabbitHole({ className, color = INK }: W) {
  const pts: string[] = [];
  const turns = 4.5;
  const steps = 260;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const r = 6 + t * 92;
    pts.push(`${round(100 + Math.cos(a) * r)},${round(100 + Math.sin(a) * r * 0.62)}`);
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hourglass({ className, color = INK, accent = "#d79f35" }: W) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <g stroke={color} strokeWidth="3.4" strokeLinejoin="round">
        <rect x="12" y="6" width="76" height="10" rx="3" fill="#a9713e" />
        <rect x="12" y="124" width="76" height="10" rx="3" fill="#a9713e" />
        <path d="M22,16 C22,50 50,60 50,70 C50,80 22,90 22,124 L78,124 C78,90 50,80 50,70 C50,60 78,50 78,16 Z" fill="#f6efdc" />
      </g>
      {/* pesak */}
      <path d="M28,118 C28,100 44,94 50,94 C56,94 72,100 72,118 Z" fill={accent} />
      <path d="M26,22 C26,40 44,54 50,66 C56,54 74,40 74,22 Z" fill={accent} opacity="0.55" />
      <line x1="50" y1="70" x2="50" y2="112" stroke={accent} strokeWidth="2.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Beli zec                                                            */
/* ------------------------------------------------------------------ */

export function WhiteRabbit({ className, color = INK, accent = "#c3341d" }: W) {
  return (
    <svg viewBox="0 0 140 170" className={className} aria-hidden="true">
      <g stroke={color} strokeWidth="3.2" strokeLinejoin="round">
        {/* uši */}
        <ellipse cx="52" cy="34" rx="11" ry="30" fill="#f6efdc" transform="rotate(-12 52 34)" />
        <ellipse cx="80" cy="30" rx="11" ry="30" fill="#f6efdc" transform="rotate(9 80 30)" />
        <ellipse cx="52" cy="36" rx="5" ry="19" fill={accent} opacity="0.45" transform="rotate(-12 52 36)" />
        <ellipse cx="80" cy="32" rx="5" ry="19" fill={accent} opacity="0.45" transform="rotate(9 80 32)" />
        {/* glava */}
        <ellipse cx="66" cy="76" rx="30" ry="27" fill="#f6efdc" />
        {/* telo u prsluku */}
        <path d="M38,150 C38,116 50,100 66,100 C82,100 96,116 96,150 Z" fill={accent} />
        <path d="M66,100 L66,150" strokeWidth="2" opacity="0.6" />
        {/* sat na lancu */}
        <path d="M96,124 C112,120 118,132 114,142" fill="none" strokeWidth="2" />
        <circle cx="114" cy="150" r="11" fill="#d79f35" />
        <path d="M114,144 L114,150 L119,153" strokeWidth="2" fill="none" />
      </g>
      {/* lice */}
      <g fill={color}>
        <circle cx="56" cy="72" r="3.4" />
        <circle cx="78" cy="72" r="3.4" />
        <path d="M62,84 L70,84 L66,89 Z" />
      </g>
      <g stroke={color} strokeWidth="1.5" opacity="0.6" fill="none">
        <path d="M52,88 C40,86 34,84 30,80 M80,88 C92,86 98,84 102,80" />
      </g>
    </svg>
  );
}
