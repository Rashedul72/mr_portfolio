"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}