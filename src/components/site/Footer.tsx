import { SteppedDiamond } from "@/components/Motifs";

/**
 * Podnožje u stilu brileanovog: žuta pozadina, velika izjava lijevo,
 * logo desno, ispod kolone linkova i traka sa copyrightom.
 */
const KOLONE = [
  {
    naslov: "Rad",
    stavke: [
      { ime: "SaPolja", href: "/brending" },
      { ime: "Livadski med", href: "/livadski-med" },
      { ime: "Studio Nora", href: "https://studionora.rs", spolja: true },
      { ime: "Rez online", href: "https://rez-magazin.rs", spolja: true },
    ],
  },
  {
    naslov: "Sajt",
    stavke: [
      { ime: "O meni", href: "/#o-meni" },
      { ime: "Šta radim", href: "/#usluge" },
      { ime: "Kako radim", href: "/#proces" },
      { ime: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    naslov: "Kontakt",
    stavke: [
      { ime: "mqrijqio@gmail.com", href: "mailto:mqrijqio@gmail.com" },
      { ime: "+387 66 304 294", href: "tel:+38766304294" },
      {
        ime: "LinkedIn",
        href: "https://www.linkedin.com/in/marija-malešević",
        spolja: true,
      },
    ],
  },
  {
    naslov: "Baza",
    stavke: [
      { ime: "Banja Luka", href: "/kontakt" },
      { ime: "Bosna i Hercegovina", href: "/kontakt" },
      { ime: "Piši mi", href: "/kontakt" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-acid text-ink">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-16">
        {/* ---------- izjava + logo ---------- */}
        <div className="grid gap-10 border-b border-ink/25 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:py-24">
          <div>
            <h2 className="h3 max-w-[17ch]">
              Sve što napravim mora da preživi loš telefon, lošu štampu i lošu
              sredu.
            </h2>
            <p className="mt-6 max-w-[46ch] text-lg-brilean text-ink/70">
              Grafički i web dizajn iz Banjeuke. Piši ako imaš nešto što treba
              da izgleda kao nešto.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <p className="flex items-center gap-2.5 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
              MARIJA
              <SteppedDiamond className="h-7 w-7 text-flare sm:h-8 sm:w-8" />
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-ink/60">
              Grafički i web dizajn
            </p>
          </div>
        </div>

        {/* ---------- kolone ---------- */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {KOLONE.map((kolona) => (
            <div key={kolona.naslov}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-ink/50">
                {kolona.naslov}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {kolona.stavke.map((s) => (
                  <li key={s.ime}>
                    <a
                      href={s.href}
                      {...("spolja" in s && s.spolja
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="ulink text-[15px] text-ink/85 transition-colors hover:text-flare"
                    >
                      {s.ime}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------- traka ---------- */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/25 py-6 text-[11px] uppercase tracking-[0.18em] text-ink/60">
          <p>© {new Date().getFullYear()} Marija Malešević</p>
          <p>Sva prava zadržana · Izdanje No. 01</p>
        </div>
      </div>
    </footer>
  );
}
