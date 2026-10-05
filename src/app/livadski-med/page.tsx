import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/site/Nav";
import styles from "./livadski-med.module.css";

export const metadata: Metadata = {
  title: "Livadski med — brend identitet | Marija",
  description:
    "Premium brend sistem za livadski med Pčelarstva Jevtić: logotip, ambalaža, paleta, tipografija i fotografski pravac.",
  openGraph: {
    title: "Livadski med — premium brend identitet",
    description:
      "Prirodan, topao i skalabilan identitet lokalnog meda iz Banje Luke.",
    locale: "sr_RS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const COLORS = [
  { name: "Honey gold", hex: "#C9A65D", className: styles.gold },
  { name: "Warm beige", hex: "#E8DCC8", className: styles.beige },
  { name: "Dark brown", hex: "#6B4423", className: styles.brown },
  { name: "Off-white", hex: "#F5F1E8", className: styles.offWhite },
  { name: "Forest green", hex: "#7A9B6F", className: styles.green },
  { name: "Graphite", hex: "#2C2823", className: styles.graphite },
];

function FlowerBeeMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`${styles.markShell} ${light ? styles.markShellLight : ""}`}>
      <Image
        src="/livadski-med/flower-bee-mark.svg"
        alt=""
        width={22}
        height={47}
        aria-hidden="true"
      />
    </span>
  );
}

function HorizontalLockup({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.horizontalLockup} ${light ? styles.lockupLight : ""}`}>
      <FlowerBeeMark light={light} />
      <span className={styles.lockupRule} aria-hidden="true" />
      <span className={styles.lockupName}>
        <i>livadski</i>
        <b>MED</b>
      </span>
    </div>
  );
}

function HoneyComb() {
  return (
    <svg
      className={styles.honeyComb}
      viewBox="0 0 320 250"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m64 10 43 25v50l-43 25-43-25V35z" />
        <path d="m151 10 43 25v50l-43 25-44-25V35z" />
        <path d="m238 10 43 25v50l-43 25-44-25V35z" />
        <path d="m107 85 44 25v50l-44 25-43-25v-50z" />
        <path d="m194 85 44 25v50l-44 25-43-25v-50z" />
        <path d="m64 160 43 25v50l-43 25-43-25v-50z" />
        <path d="m151 160 43 25v50l-43 25-44-25v-50z" />
        <path d="m238 160 43 25v50l-43 25-44-25v-50z" />
      </g>
    </svg>
  );
}

function BeeTrail() {
  return (
    <svg className={styles.beeTrail} viewBox="0 0 420 180" aria-hidden="true">
      <path
        d="M12 144c49-2 60-71 115-67 38 3 26 55 69 58 46 3 59-103 123-100 36 2 48 27 78 22"
        fill="none"
        stroke="currentColor"
        strokeDasharray="5 8"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <g transform="translate(365 32) rotate(12)">
        <ellipse cx="15" cy="18" rx="13" ry="8" fill="currentColor" />
        <ellipse cx="8" cy="7" rx="8" ry="11" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="23" cy="7" rx="8" ry="11" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 17h12M11 22h9" stroke="var(--lm-cream)" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default function LivadskiMedPage() {
  return (
    <>
      <Nav />
      <main className={`${styles.page} pt-14 sm:pt-16`}>
      <section className={styles.hero} id="vrh">
        <header className={styles.nav}>
          <Link href="/" className={styles.backLink} aria-label="Nazad na portfolio">
            <span aria-hidden="true">←</span> Portfolio
          </Link>
          <span className={styles.navLabel}>Brend identitet · 2026</span>
          <a
            href="https://pcelarstvo-jevtic-2026.vercel.app/sr"
            className={styles.officialLink}
            target="_blank"
            rel="noreferrer"
          >
            Pčelarstvo Jevtić <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Banja Luka · Bosna i Hercegovina</p>
            <h1 className={styles.heroTitle}>
              <span>livadski</span>
              <strong>MED</strong>
            </h1>
            <div className={styles.heroNote}>
              <span className={styles.noteRule} aria-hidden="true" />
              <p>
                Premium identitet lokalnog meda koji prirodnost ne glumi —
                ona se vidi u svakoj liniji, boji i tegli.
              </p>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.heroHalo} aria-hidden="true" />
            <Image
              className={styles.heroFlower}
              src="/livadski-med/meadow-flower.svg"
              alt=""
              width={871}
              height={874}
              aria-hidden="true"
              priority
            />
            <Image
              className={styles.heroJar}
              src="/livadski-med/jar-cutout.webp"
              alt="Tegla livadskog meda sa novom etiketom"
              width={407}
              height={612}
              priority
            />
            <div className={styles.heroSeal}>
              <Image
                src="/livadski-med/heritage-seal.svg"
                alt="Pčelarstvo Jevtić — tradicija od 1980"
                width={112}
                height={120}
              />
            </div>
            <span className={styles.heroWeight}>1 kg · čisti livadski med</span>
          </div>
        </div>

        <div className={styles.dripEdge} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="brand-story">
        <div className={styles.sectionIndex}>
          <span>01</span>
          <p>Osnova brenda</p>
        </div>
        <div className={styles.introCopy}>
          <p className={styles.eyebrow}>Pozicioniranje</p>
          <h2 id="brand-story">
            Med iz stvarne livade.
            <br />
            Identitet iz stvarnog <em>nasljeđa.</em>
          </h2>
          <div className={styles.bodyColumns}>
            <p>
              Livadski med Pčelarstva Jevtić dobija sistem koji je premium, ali
              nikad hladan. Kružni pečat čuva porodičnu tradiciju, a botaničke
              linije i meke forme vraćaju proizvod njegovom porijeklu.
            </p>
            <p>
              Centralna poruka je <strong>„Pčelarstvo od srca.“</strong> Kratka
              je, ljudska i dovoljno široka da poveže ambalažu, fotografiju,
              prodajno mjesto i digitalni nastup.
            </p>
          </div>
        </div>
        <figure className={styles.introPhoto}>
          <Image
            src="/livadski-med/jars-nature.webp"
            alt="Tegle livadskog meda složene u zelenilu"
            width={1122}
            height={1402}
            sizes="(min-width: 900px) 43vw, 100vw"
          />
          <figcaption>
            <span>Fotografski pravac 01</span>
            <span>prirodno svjetlo · stvarno okruženje</span>
          </figcaption>
        </figure>
      </section>

      <section className={styles.logoSection} aria-labelledby="logo-system">
        <div className={styles.logoHeader}>
          <div className={styles.sectionIndexDark}>
            <span>02</span>
            <p>Logo sistem</p>
          </div>
          <div>
            <p className={styles.eyebrowLight}>Hibridni znak</p>
            <h2 id="logo-system">Jedan karakter.<br />Tri jasne primjene.</h2>
          </div>
          <p className={styles.logoIntro}>
            Elegantan serif nosi premium ton, dok pčela i mlada biljka daju
            autentičan potpis proizvođača. Sistem ostaje čitljiv od etikete do
            profilne fotografije.
          </p>
        </div>

        <div className={styles.logoGrid}>
          <article className={`${styles.logoCard} ${styles.logoCardCream}`}>
            <span className={styles.cardLabel}>01 · Horizontalni</span>
            <HorizontalLockup />
            <p>Primarni potpis za web, zaglavlja, kutije i prodajne materijale.</p>
          </article>

          <article className={`${styles.logoCard} ${styles.logoCardGold}`}>
            <span className={styles.cardLabel}>02 · Kvadratni pečat</span>
            <div className={styles.squareLockup}>
              <Image
                src="/livadski-med/heritage-seal.svg"
                alt="Kružni pečat Pčelarstva Jevtić"
                width={164}
                height={175}
              />
              <span>livadski<br /><b>MED</b></span>
            </div>
            <p>Za društvene mreže, poklopac, naljepnicu i male formate.</p>
          </article>

          <article className={`${styles.logoCard} ${styles.logoCardGreen}`}>
            <span className={styles.cardLabel}>03 · Samo mark</span>
            <div className={styles.soloMark}>
              <FlowerBeeMark light />
            </div>
            <p>Prepoznatljiv detalj za favicon, žig, pattern i signale na pakovanju.</p>
          </article>
        </div>

        <div className={styles.clearSpace}>
          <div className={styles.clearSpaceDiagram}>
            <span className={styles.clearX}>x</span>
            <span className={styles.clearTop}>x</span>
            <span className={styles.clearRight}>x</span>
            <span className={styles.clearBottom}>x</span>
            <HorizontalLockup light />
          </div>
          <div>
            <p className={styles.eyebrowLight}>Zaštitni prostor</p>
            <h3>Logo uvijek treba da diše.</h3>
            <p>
              Minimalni prostor oko potpisa jednak je visini slova „M“. Na
              fotografiji se koristi samo na mirnoj, kontrastnoj površini.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.colorSection} aria-labelledby="color-system">
        <div className={styles.colorIntro}>
          <div className={styles.sectionIndex}>
            <span>03</span>
            <p>Paleta</p>
          </div>
          <div>
            <p className={styles.eyebrow}>Sistem boja</p>
            <h2 id="color-system">Toplina meda.<br />Mirnoća livade.</h2>
          </div>
          <p>
            Zlato vodi pogled, smeđa gradi povjerenje, a zelena se koristi kao
            akcenat — dovoljno rijetko da ostane posebna.
          </p>
        </div>

        <div className={styles.swatches}>
          {COLORS.map((color, index) => (
            <article
              key={color.hex}
              className={`${styles.swatch} ${color.className}`}
              style={{ "--swatch-index": index } as CSSProperties}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{color.name}</h3>
                <p>{color.hex}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.typeSection} aria-labelledby="type-system">
        <div className={styles.sectionIndex}>
          <span>04</span>
          <p>Tipografija</p>
        </div>
        <div className={styles.typeHero}>
          <p className={styles.eyebrow}>Primary serif · Gazpacho</p>
          <p className={styles.typeDisplay}>livadski <em>Med</em></p>
          <div className={styles.typeAlphabet}>Aa Bb Cc Čč Ćć Đđ Šš Žž</div>
        </div>
        <div className={styles.typeGrid}>
          <article>
            <span>Naslovi / display</span>
            <h3>Gazpacho</h3>
            <p>
              Elegantna, meka i dovoljno karakteristična da naziv proizvoda
              postane prepoznatljiv i bez dodatnog ukrasa.
            </p>
          </article>
          <article className={styles.sansSpecimen}>
            <span>Informacije / funkcija</span>
            <h3>Inter</h3>
            <p>
              Čista sans-serif porodica za deklaracije, nutritivne podatke,
              web navigaciju i sve male veličine.
            </p>
          </article>
          <article className={styles.scriptSpecimen}>
            <span>Akcenat / ljudski trag</span>
            <h3>od srca</h3>
            <p>
              Rukopis se koristi štedljivo — samo za kratke bilješke, potpise i
              sezonske poruke.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.languageSection} aria-labelledby="graphic-language">
        <div className={styles.languageHeader}>
          <div className={styles.sectionIndex}>
            <span>05</span>
            <p>Grafički jezik</p>
          </div>
          <h2 id="graphic-language">Organsko i precizno,<br />u istom sistemu.</h2>
        </div>

        <div className={styles.languageGrid}>
          <article className={styles.dripCard}>
            <span className={styles.cardLabel}>Drip shape</span>
            <div className={styles.dripDemo} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h3>Pokretljivost meda</h3>
            <p>Meka ivica koristi se za prijelaz između fotografije i informacije.</p>
          </article>

          <article className={styles.hexCard}>
            <span className={styles.cardLabel}>Hexagon</span>
            <HoneyComb />
            <h3>Red i struktura</h3>
            <p>Saće uvodi ritam, ali ostaje u pozadini kao tonski pattern.</p>
          </article>

          <article className={styles.botanicalCard}>
            <span className={styles.cardLabel}>Botanička linija</span>
            <Image
              src="/livadski-med/meadow-flower.svg"
              alt="Ilustracija livadskog cvijeta"
              width={871}
              height={874}
            />
            <h3>Porijeklo proizvoda</h3>
            <p>Crtež cvijeta unosi toplinu i razlikuje livadski med od ostalih sorti.</p>
          </article>
        </div>

        <div className={styles.trailBand}>
          <p>Pčela povezuje elemente, nikad ih ne prekriva.</p>
          <BeeTrail />
        </div>
      </section>

      <section className={styles.packagingSection} aria-labelledby="packaging">
        <div className={styles.packagingHeader}>
          <div className={styles.sectionIndexDark}>
            <span>06</span>
            <p>Ambalaža</p>
          </div>
          <div>
            <p className={styles.eyebrowLight}>Glavna primjena</p>
            <h2 id="packaging">Etiketa koja izgleda<br />kao dio pejzaža.</h2>
          </div>
          <p>
            Organska gornja ivica simulira med koji se sliva niz teglu. Cvijeće
            i akvarel prave horizont, dok stroga tipografska osa čuva premium
            hijerarhiju.
          </p>
        </div>

        <div className={styles.labelStage}>
          <Image
            src="/livadski-med/label-flat.webp"
            alt="Razvijena etiketa za livadski med"
            width={1365}
            height={644}
            sizes="100vw"
          />
        </div>

        <div className={styles.packagingNotes}>
          <article>
            <span>01</span>
            <h3>Informaciona osa</h3>
            <p>Deklaracije ostaju na bočnim krilima, čitljive i odvojene od glavnog potpisa.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Fokus na polici</h3>
            <p>Veliki naziv sorte i svijetla etiketa ostaju prepoznatljivi i sa nekoliko metara.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Sistem sorti</h3>
            <p>Boja meda, biljka i kratka priča mijenjaju se po sorti; struktura ostaje ista.</p>
          </article>
        </div>
      </section>

      <section className={styles.photoSection} aria-labelledby="photo-direction">
        <div className={styles.photoHeader}>
          <div className={styles.sectionIndex}>
            <span>07</span>
            <p>Fotografija</p>
          </div>
          <h2 id="photo-direction">Dnevno svjetlo.<br />Zemlja pod rukama.</h2>
          <p>
            Fotografije ostaju dokumentarne: stvarni pčelinjak, livada, okvir
            saća i proizvod u upotrebi. Bez sterilnog studijskog sjaja.
          </p>
        </div>

        <div className={styles.photoGrid}>
          <figure className={styles.photoTall}>
            <Image
              src="/livadski-med/jar-styled.webp"
              alt="Tegla livadskog meda u prirodnom stylingu"
              fill
              sizes="(min-width: 900px) 40vw, 100vw"
            />
            <figcaption>Proizvod / prirodni styling</figcaption>
          </figure>
          <figure className={styles.photoSquare}>
            <Image
              src="/livadski-med/bee-macro.webp"
              alt="Pčela na dlanu pčelara"
              fill
              sizes="(min-width: 900px) 28vw, 50vw"
            />
            <figcaption>Detalj / živi proces</figcaption>
          </figure>
          <figure className={styles.photoSquare}>
            <Image
              src="/livadski-med/honeycomb.webp"
              alt="Drveni okviri sa prirodnim saćem"
              fill
              sizes="(min-width: 900px) 28vw, 50vw"
            />
            <figcaption>Tekstura / zanat</figcaption>
          </figure>
          <figure className={styles.photoWide}>
            <Image
              src="/livadski-med/meadow.webp"
              alt="Livada sa bijelim cvijećem u pokretu"
              fill
              sizes="(min-width: 900px) 58vw, 100vw"
            />
            <figcaption>Atmosfera / livada u pokretu</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.voiceSection} aria-labelledby="brand-voice">
        <div className={styles.voiceTop}>
          <div className={styles.sectionIndexDark}>
            <span>08</span>
            <p>Ton brenda</p>
          </div>
          <h2 id="brand-voice">Topao. Iskren.<br /><em>Lokalno ukorijenjen.</em></h2>
        </div>

        <div className={styles.voiceGrid}>
          <article>
            <span>01 / Topao</span>
            <h3>Pišemo kao domaćin.</h3>
            <p>„Dobro došli tamo gdje livada postaje med.“</p>
          </article>
          <article>
            <span>02 / Jasan</span>
            <h3>Dokaz prije ukrasa.</h3>
            <p>Porijeklo, sorta i proces govore se direktno, bez velikih obećanja.</p>
          </article>
          <article>
            <span>03 / Senzoran</span>
            <h3>Priroda se može osjetiti.</h3>
            <p>Miris livade, zlatna boja i sporo curenje daju riječima teksturu.</p>
          </article>
        </div>

        <blockquote>
          <span aria-hidden="true">“</span>
          <p>Pčelarstvo od srca.</p>
          <cite>Primarni brend potpis</cite>
        </blockquote>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerFlower} aria-hidden="true">
          <Image
            src="/livadski-med/meadow-flower.svg"
            alt=""
            width={871}
            height={874}
          />
        </div>
        <p className={styles.eyebrow}>Pčelarstvo Jevtić · Banja Luka</p>
        <HorizontalLockup />
        <p className={styles.footerTagline}>Pčelarstvo od srca.</p>
        <div className={styles.footerLinks}>
          <Link href="#vrh">Nazad na vrh ↑</Link>
          <a
            href="https://pcelarstvo-jevtic-2026.vercel.app/sr"
            target="_blank"
            rel="noreferrer"
          >
            Posjeti zvanični sajt ↗
          </a>
        </div>
      </footer>
      </main>
    </>
  );
}
