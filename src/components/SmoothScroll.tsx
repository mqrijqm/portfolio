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

  // Pri prelasku na novu stranicu Lenis drži staru poziciju skrola —
  // zato je ručno vraćamo na vrh i preračunavamo ScrollTrigger merenja.
  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
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
