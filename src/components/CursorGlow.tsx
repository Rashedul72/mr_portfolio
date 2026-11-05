"use client";

import { useEffect, useRef } from "react";

/** Backend-themed cursor: glowing core, lagging ring, soft glow and a live "route" label (GET /projects · 200). Mouse devices only. */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const tag = tagRef.current;
    if (!canHover || reduced || !glow || !dot || !ring || !tag) return;

    // Replace the system arrow with the custom cursor (dot + ring)
    document.documentElement.classList.add("custom-cursor");

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let gx = tx;
    let gy = ty;
    let rx = tx;
    let ry = ty;
    let raf = 0;
    let visible = false;

    const setVisible = (v: boolean) => {
      if (v === visible) return;
      visible = v;
      glow.style.opacity = v ? "1" : "0";
      dot.style.opacity = v ? "1" : "0";
      ring.style.opacity = v ? "1" : "0";
      tag.style.opacity = v ? "1" : "0";
    };

    // Backend-flavoured label: the section you're in is a "route", links are redirects, buttons are POSTs
    let label = "";
    const labelFor = (el: HTMLElement | null) => {
      const action = el?.closest("a, button, [role='button']") as HTMLElement | null;
      if (action) {
        const href = action.getAttribute("href") || "";
        if (action.tagName === "A" && /^https?:|^mailto:|^tel:/.test(href)) return "302 → redirect";
        if (action.tagName === "A") return "GET " + (href.startsWith("#") ? "/" + href.slice(1) : href || "/");
        return "POST · execute()";
      }
      const sec = el?.closest("section[id], footer") as HTMLElement | null;
      const id = sec ? (sec.tagName === "FOOTER" ? "footer" : sec.id) : "home";
      return "GET " + (id === "home" ? "/" : "/" + id) + " · 200";
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest("a, button, [role='button']");
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%) scale(${interactive ? 0.5 : 1})`;
      glow.dataset.active = interactive ? "1" : "0";
      ring.dataset.active = interactive ? "1" : "0";
      const next = labelFor(el);
      if (next !== label) {
        label = next;
        tag.firstElementChild!.nextElementSibling!.textContent = next;
      }
      tag.dataset.hot = interactive ? "1" : "0";
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      const active = glow.dataset.active === "1";
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%) scale(${active ? 1.25 : 1})`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${active ? 1.6 : 1})`;
      const flip = rx > window.innerWidth - 220;
      tag.style.transform = `translate3d(${flip ? rx - 22 : rx + 22}px, ${ry + 18}px, 0)${flip ? " translateX(-100%)" : ""}`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Soft ambient glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[190px] w-[190px] rounded-full opacity-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,252,0.18) 0%, rgba(34,211,238,0.07) 40%, transparent 70%)",
          transition: "opacity .35s ease",
          willChange: "transform",
        }}
      />
      {/* Fine ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] h-8 w-8 rounded-full border border-white/35 opacity-0"
        style={{
          boxShadow: "0 0 18px rgba(34,211,238,0.25), inset 0 0 8px rgba(255,255,255,0.08)",
          transition: "opacity .35s ease, border-color .25s ease",
          willChange: "transform",
        }}
      />
      {/* Route label */}
      <div
        ref={tagRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] flex items-center gap-1.5 whitespace-nowrap rounded-md border border-white/15 bg-[#0a0b0d]/80 px-2 py-1 font-mono text-[10.5px] leading-none text-slate-300 opacity-0 backdrop-blur-md data-[hot='1']:border-cyan-300/50 data-[hot='1']:text-cyan-200"
        style={{ transition: "opacity .3s ease, border-color .2s ease, color .2s ease", willChange: "transform" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
        <span>GET / · 200</span>
      </div>
      {/* Core dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[62] h-1.5 w-1.5 rounded-full bg-white opacity-0"
        style={{
          boxShadow: "0 0 8px 1px rgba(255,255,255,0.8), 0 0 16px 3px rgba(34,211,238,0.5)",
          transition: "opacity .35s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
