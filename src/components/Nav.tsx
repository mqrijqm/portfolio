import { SteppedDiamond } from "@/components/Motifs";

/**
 * Sidri su na istoj stranici — Lenis ih hvata preko `anchors` opcije i
 * skroluje glatko, sa razmakom za fiksnu traku. Zato običan <a>, ne Link:
 * nema navigacije kroz aplikaciju, samo pomak na sekciju.
 */
const STAVKE = [
  { ime: "HERO", href: "#hero", kratko: "HERO" },
  { ime: "E-COM PLATFORME", href: "#e-com", kratko: "E-COM" },
  { ime: "BRENDING", href: "#brending", kratko: "BRENDING" },
  { ime: "KONTAKT", href: "#kontakt", kratko: "KONTAKT" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/15 bg-linen/90 text-forest backdrop-blur-sm">
      <div className="mx-auto flex h-11 max-w-[1600px] items-center gap-3 px-3 sm:h-14 sm:gap-5 sm:px-6">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 text-sm font-light leading-none tracking-[0.22em] sm:text-base sm:tracking-[0.3em]"
        >
          MARIJA
          <SteppedDiamond className="h-3 w-3 text-clay sm:h-3.5 sm:w-3.5" />
        </a>

        <nav
          className="ml-auto flex min-w-0 items-center gap-3 sm:gap-5 lg:gap-7"
          aria-label="Glavna navigacija"
        >
          {STAVKE.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="whitespace-nowrap font-sans text-[9.5px] uppercase tracking-[0.1em] text-forest-soft transition-colors hover:text-clay sm:text-[10px] sm:tracking-[0.24em]"
            >
              <span className="hidden sm:inline">{s.ime}</span>
              <span className="sm:hidden">{s.kratko}</span>
            </a>
          ))}
        </nav>

        <span className="hidden shrink-0 font-sans text-[10px] uppercase tracking-[0.24em] text-forest-soft/70 xl:inline">
          Banja Luka
        </span>
      </div>
    </header>
  );
}
