"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  // Pri prelasku na novu stranicu Lenis drži staru poziciju skrola — zato je
  // ručno vraćamo na vrh i preračunavamo ScrollTrigger merenja. Iznimka je
  // dolazak sa sidrom (npr. /#hero sa /brending): tada se ne vraćamo na vrh
  // nego na samu sekciju, inače bi svaka promena stranice obrisala hash.
  useEffect(() => {
    ScrollTrigger.refresh();

    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const hash = window.location.hash;
    const cilj = hash ? document.getElementById(hash.slice(1)) : null;

    if (cilj) lenis.scrollTo(cilj, { immediate: true });
    else lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  useEffect(() => {
    // Lenis mora da vozi GSAP-ov ticker, inače animacije "kasne" za skrolom.
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.09,
        // Klik na #link skroluje glatko, sa razmakom za fiksnu traku gore
        anchors: { offset: -70 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
