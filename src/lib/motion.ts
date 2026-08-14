/**
 * Jedan izvor istine za tajminge. Ceo sajt koristi ove vrednosti
 * da bi imao isti "osećaj" — doslednost > broj efekata.
 */

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
  back: "back.out(1.6)",
} as const;

export const DUR = {
  fast: 0.4,
  base: 0.8,
  slow: 1.4,
} as const;

/** Da li korisnik traži manje animacije (sistemsko podešavanje). */
export function prefersReduced(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Zaokruživanje na fiksan broj decimala.
 *
 * Zašto uopšte postoji: Math.sin/cos daju mikroskopski različite rezultate
 * u Node-u (gde se stranica generiše) i u browseru (gde se oživljava).
 * Razlika je na 16. decimali, ali React uporedi tekst atributa znak po znak
 * i prijavi "hydration mismatch". Zaokruženi broj je isti sa obe strane.
 */
export function round(n: number, decimals = 3): number {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

/**
 * Determinističan "random" — isti rezultat na serveru i u browseru,
 * pa nema hydration mismatcha kod razbacanih kolaž elemenata.
 */
export function seeded(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return round(x - Math.floor(x), 6);
}

export function seededRange(seed: number, min: number, max: number): number {
  return round(min + seeded(seed) * (max - min), 4);
}
