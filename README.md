# Portfolio — Marija

Portfolio sajt u stilu starih magazina: kolaž, isečena slova, halftone raster,
pocepan papir. Sve ilustracije su crtane u kodu (SVG) — nema nijedne rasterske
slike, pa je oštro na svakom ekranu.

## Pokretanje

```bash
pnpm install     # samo prvi put
pnpm dev         # otvori http://localhost:3000
```

Za proveru pre objave:

```bash
pnpm build       # pravi produkcijsku verziju, javlja greške
```

## Šta gde stoji

| Šta menjaš | Fajl |
|---|---|
| Hero, punchline, uvodni tekst | `src/components/sections/Hero.tsx` |
| Priča o sebi, potpisi ispod fotki | `src/components/sections/KoSamJa.tsx` |
| Grafički radovi (naslovi, godine, opisi) | `src/components/sections/GrafickiDizajn.tsx` |
| Web radovi | `src/components/sections/WebDizajn.tsx` |
| Manifest i proces | `src/components/sections/MojDizajn.tsx` |
| Email, društvene mreže | `src/components/sections/Kontakt.tsx` |
| Boje, papir, teksture | `src/app/globals.css` |
| Brzina i osećaj animacija | `src/lib/motion.ts` |

Podaci za svaku sekciju stoje u nizu na vrhu fajla (`RADOVI`, `SAJTOVI`,
`MANIFEST`…) — menjaš tekst tamo, ne u samom rasporedu.

## Fotografije

**Slike iz detinjstva:** ubaci ih u `public/photos/` kao `mala-01.jpg` …
`mala-06.jpg`, pa u `src/components/sections/KoSamJa.tsx` prebaci
`IMA_FOTOGRAFIJA` na `true`. Dok je `false`, crtaju se vintage placeholderi.

**Radovi:** trenutno su nacrtani posteri i makete sajtova
(`src/components/collage/PosterArt.tsx` i `SiteMock.tsx`). Kad budu spremne
prave slike radova, menja se `<PosterArt …>` za `<img>` — javi i sredimo.

## Kontakt podaci

U `src/components/sections/Kontakt.tsx`, na vrhu:

- `EMAIL` — trenutno stoji `zdravo@marija.rs` kao primer, **zameni pravim**
- `MREZE` — linkovi ka Instagramu, Behance-u, LinkedInu, GitHubu

## Šta je ispod haube

Next.js (App Router) · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger ·
Lenis (smooth scroll) · `next/font` (Anton, Playfair Display, Courier Prime).

Sajt poštuje sistemsko podešavanje „smanji animacije" — kome smeta pokret,
dobija miran sajt sa istim sadržajem.

## Objavljivanje

Vercel, povezan sa ovim repoom. Svaki `git push` na `main` pravi novu verziju.
