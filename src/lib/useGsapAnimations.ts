'use client';

import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AnimConfig } from './anim';

gsap.registerPlugin(ScrollTrigger);

/** Animates every `[data-gsap]` element inside `rootRef` (see `anim()`). */
export function useGsapAnimations(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-gsap]').forEach((el) => {
        const { from, to, scroll, ...vars } = JSON.parse(el.dataset.gsap || '{}') as AnimConfig;
        el.setAttribute('data-gsap-ready', '');
        if (reduced) return;

        const looping = vars.repeat !== undefined;
        const tween: gsap.TweenVars = {
          ease: 'power2.out',
          ...vars,
          ...(to ?? {}),
          ...(looping ? {} : { clearProps: 'transform,opacity,width,height' }),
          ...(scroll ? { scrollTrigger: { trigger: el, start: 'clamp(top 88%)', once: true } } : {}),
        };

        if (to) gsap.fromTo(el, from ?? {}, tween);
        else if (from) gsap.from(el, { ...from, ...tween });
        else gsap.to(el, tween);
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
