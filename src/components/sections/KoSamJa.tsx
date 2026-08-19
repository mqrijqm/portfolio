import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import SectionHeader from "@/components/SectionHeader";
import { Divider } from "@/components/Motifs";

/** Fotografije iz detinjstva — okviri čekaju slike. */
const FOTOGRAFIJE = [
  { caption: "prva frizura, prvi bes", stamp: "’99", arch: true },
  { caption: "letovanje, nepoznato more", stamp: "’01", arch: false },
  { caption: "rođendan, tuđa torta", stamp: "’00", arch: false },
  { caption: "škola, poslednji dan", stamp: "’05", arch: true },
];

const PODACI = [
  ["Baza", "Banja Luka, Bosna i Hercegovina"],
  ["Radim", "identitete · plakate · editorijal · sajtove"],
  ["Alati", "Figma · Illustrator · Photoshop · After Effects"],
  ["Slabost", "star papir i tvrde ivice"],
];

export default function KoSamJa() {
  return (
    <section className="px-5 pb-28 pt-20 sm:pb-40 sm:pt-28">
      <SectionHeader
        chapter="Poglavlje 01"
        title="KO SAM JA"
        lead="Sve je počelo makazama i maminim magazinima koje niko nije pitao za dozvolu."
      />

      <div className="mx-auto mt-20 grid max-w-[1180px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* ---------- fotografije ---------- */}
        <Reveal y={54}>
          <div className="grid grid-cols-2 gap-5 sm:gap-7">
            {FOTOGRAFIJE.map((f, i) => (
              <figure key={f.caption} className={i % 2 === 1 ? "mt-8" : ""}>
                <Frame
                  arch={f.arch}
                  label={f.stamp}
                  className={f.arch ? "aspect-[3/4]" : "aspect-[4/5]"}
                />
                <figcaption className="mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-forest-soft/80">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        {/* ---------- tekst ---------- */}
        <div>
          <Reveal>
            <p className="text-[clamp(1.05rem,2.2vw,1.35rem)] font-light leading-relaxed">
              Kao mala sam sekla mamine magazine. Ono što je nastajalo nije bilo
              lepo — glava jedne žene na telu druge, oči izvučene iz reklame za
              maskaru, sve zalepljeno preko domaćeg zadatka. Ali je bilo moje, i
              bilo je glasno.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 font-sans text-[13px] leading-[1.7] text-forest-soft sm:text-[14px]">
              Danas radim potpuno istu stvar, samo se drugačije zove:
              kompozicija, hijerarhija, kontrast. Makaze su postale kursor,
              mamini magazini su postali arhiva, a lepak se sad zove mrežni
              sistem. Suština nije mrdnula ni za milimetar — uzmeš stvari koje
              ne idu zajedno i teraš ih da idu.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <Divider className="my-10 h-3 w-44 text-forest-soft/70" />
          </Reveal>

          <Reveal delay={0.16}>
            <blockquote>
              <p className="text-[clamp(1.4rem,3.4vw,2.1rem)] font-light italic leading-[1.25] text-forest">
                „Nikad me nije zanimalo da bude uredno. Zanimalo me je da bude
                tačno.&ldquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 border-t border-forest/15">
              {PODACI.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline gap-x-8 gap-y-1 border-b border-forest/15 py-4"
                >
                  <dt className="w-24 shrink-0 font-sans text-[10px] uppercase tracking-[0.28em] text-clay">
                    {k}
                  </dt>
                  <dd className="font-light leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
