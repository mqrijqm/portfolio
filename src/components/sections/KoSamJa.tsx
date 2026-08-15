import PhotoSlot from "@/components/collage/PhotoSlot";
import Reveal from "@/components/Reveal";
import {
  Flower,
  Scribble,
  Sparkle,
  Ticket,
  WavyRule,
  Asterisk,
} from "@/components/collage/Bits";

/**
 * PREBACI NA true kad ubaciš prave fotografije u /public/photos/
 * (imena su ispod, u nizu PHOTOS). Dok je false, crtaju se placeholderi.
 */
const IMA_FOTOGRAFIJA = false;

/** Fotografije iz detinjstva. */
const PHOTOS = [
  {
    src: "/photos/mala-01.jpg",
    x: 0,
    y: 2,
    w: 33,
    rot: -5,
    variant: 0,
    tone: "sepia" as const,
    caption: "prva frizura, prvi bes",
    stamp: "'99",
    tape: true,
  },
  {
    src: "/photos/mala-02.jpg",
    x: 33,
    y: 0,
    w: 29,
    rot: 8,
    variant: 2,
    tone: "blue" as const,
    caption: "letovanje, nepoznato more",
    stamp: "'01",
  },
  {
    src: "/photos/mala-03.jpg",
    x: 3,
    y: 48,
    w: 30,
    rot: 6,
    variant: 3,
    tone: "pink" as const,
    caption: "ja i sestra od tetke",
    stamp: "'03",
    tape: true,
  },
  {
    src: "/photos/mala-04.jpg",
    x: 34,
    y: 52,
    w: 31,
    rot: -9,
    variant: 1,
    tone: "sepia" as const,
    caption: "rođendan, tuđa torta",
    stamp: "'00",
  },
  {
    src: "/photos/mala-05.jpg",
    x: 68,
    y: 46,
    w: 27,
    rot: 12,
    variant: 0,
    tone: "blue" as const,
    caption: "škola, poslednji dan",
    stamp: "'05",
    tape: true,
  },
  {
    src: "/photos/mala-06.jpg",
    x: 65,
    y: 4,
    w: 31,
    rot: -13,
    variant: 2,
    tone: "pink" as const,
    caption: "bez komentara",
    stamp: "'02",
  },
];

export default function KoSamJa() {
  return (
    <section
      id="ko-sam-ja"
      className="paper-bg relative overflow-hidden pb-20 pt-4 sm:pb-28 sm:pt-8"
    >
      {/* dekor */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="halftone blob-mask absolute right-0 top-10 h-72 w-1/2 text-blue/30" />
        <div className="torn-a absolute -left-16 bottom-24 h-72 w-72 rotate-6 bg-mustard/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ---------- kolaž fotografija ---------- */}
          <Reveal className="order-2 lg:order-1" y={60}>
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/5]">
              {PHOTOS.map((p, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: `${p.w}%`,
                    zIndex: 10 + i,
                  }}
                >
                  <PhotoSlot
                    src={IMA_FOTOGRAFIJA ? p.src : undefined}
                    alt={`Marija kao dete — ${p.caption}`}
                    caption={p.caption}
                    stamp={p.stamp}
                    variant={p.variant}
                    tone={p.tone}
                    rotate={p.rot}
                    tape={p.tape}
                  />
                </div>
              ))}

              {/* sitni isečci preko fotografija */}
              <Flower
                className="absolute -right-2 top-[34%] z-30 h-16 w-16 rotate-12 sm:h-20 sm:w-20"
                accent="#e57f92"
              />
              <Sparkle className="absolute left-[46%] top-[26%] z-30 h-8 w-8 text-red" color="#c3341d" />
              <Asterisk className="absolute bottom-[4%] left-[2%] z-30 h-10 w-10" color="#2e4a79" />
              <Scribble className="absolute -bottom-4 right-[10%] z-30 h-12 w-32 opacity-70" />
            </div>
          </Reveal>

          {/* ---------- tekst ---------- */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="font-serif text-lg leading-relaxed text-ink sm:text-xl">
                <span className="float-left mr-3 mt-1 font-display text-[4.5rem] leading-[0.72] text-red">
                  K
                </span>
                ao mala sam sekla mamine magazine. Ono što je nastajalo nije
                bilo lepo — glava jedne žene na telu druge, oči izvučene iz
                reklame za maskaru, sve zalepljeno preko domaćeg zadatka. Ali
                je bilo moje, i bilo je glasno.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 font-type text-[13px] leading-relaxed text-ink-soft sm:text-sm">
                Danas radim potpuno istu stvar, samo se drugačije zove:
                kompozicija, hijerarhija, kontrast. Makaze su postale kursor,
                mamini magazini su postali arhiva, a lepak se sad zove mrežni
                sistem. Suština nije mrdnula ni za milimetar — uzmeš stvari
                koje ne idu zajedno i teraš ih da idu.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <WavyRule className="my-8 h-4 w-full max-w-sm" color="#c3341d" />
            </Reveal>

            {/* citat */}
            <Reveal delay={0.2}>
              <blockquote className="relative my-8 border-l-4 border-red bg-paper-light/70 py-5 pl-6 pr-4 shadow-[3px_4px_0_rgba(22,19,14,0.12)]">
                <p className="font-serif text-2xl italic leading-tight sm:text-3xl">
                  „Nikad me nije zanimalo da bude uredno. Zanimalo me je da
                  bude tačno.&ldquo;
                </p>
              </blockquote>
            </Reveal>

            {/* kupon sa podacima */}
            <Reveal delay={0.25}>
              <dl className="relative mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-2 border-dashed border-ink p-6 sm:grid-cols-2">
                <span className="absolute -top-3 left-5 bg-paper px-2 font-type text-[10px] tracking-[0.25em] text-red">
                  ISECI I SAČUVAJ
                </span>

                {[
                  ["BAZA", "Beograd, Srbija"],
                  ["RADIM", "identitete · plakate · editorijal · sajtove"],
                  ["ALATI", "Figma · Illustrator · Photoshop · After Effects"],
                  ["SLABOST", "star papir i tvrde ivice"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-type text-[10px] tracking-[0.25em] text-ink-soft">
                      {k}
                    </dt>
                    <dd className="mt-1 font-serif text-base leading-snug">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <Ticket
                className="mt-10 h-16 w-full max-w-xs -rotate-2"
                label="OD 2016."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
