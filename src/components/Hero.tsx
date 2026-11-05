'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Mail, FileText, X, ExternalLink, ArrowUpRight, Linkedin, MapPin, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { anim } from '@/lib/anim';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

/** Portrait asset — `public/images/Junayed-without-bg.png` (1824×2368) */
const HERO_PORTRAIT_SRC = '/images/Junayed-without-bg.png';

const RESUME_URL = '/resume/MD_Rashedul_Islam_Junayed.pdf';
const RESUME_DOWNLOAD_NAME = 'MD_Rashedul_Islam_Junayed.pdf';
const RESUME_MODAL_SUBTITLE = 'MD Rashedul Islam Junayed - Backend-Focused Software Engineer';
/** Chromium embedded PDF viewer: hides thumbnail sidebar, native toolbar, and scrollbars (iframe only). */
const RESUME_EMBED_URL = `${RESUME_URL}#navpanes=0&toolbar=0&scrollbar=0`;

export default function Hero({ scrollToSection }: HeroProps) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeResume = useCallback(() => {
    if (!modalRef.current) return setResumeOpen(false);
    gsap.to(modalRef.current, { opacity: 0, duration: 0.2, onComplete: () => setResumeOpen(false) });
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
    gsap.fromTo(panelRef.current, { opacity: 0, scale: 0.96, y: 12 }, { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'power2.out' });
  }, [resumeOpen]);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeResume();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [resumeOpen, closeResume]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden scroll-mt-20 sm:scroll-mt-20 pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* Backdrop: fading grid + single accent light */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Copy — below portrait on mobile, left on desktop */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            <h1
              className="text-balance text-[clamp(2.4rem,6.2vw,5rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white"
              {...anim({ from: { opacity: 0, y: 28 }, to: { opacity: 1, y: 0 }, duration: 0.8, delay: 0.2 })}
            >
              Engineering <span className="font-display text-cyan-300">reliable</span> systems for products that scale.
            </h1>

            <p
              className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
              {...anim({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, duration: 0.7, delay: 0.4 })}
            >
              I&apos;m <span className="text-slate-200">MD Rashedul Islam Junayed</span>, a backend-focused software
              engineer. I build offline-first APIs, caching layers, queue-driven pipelines and payment flows with NestJS,
              PostgreSQL and Redis, and ship the full-stack products around them.
            </p>

            <div
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
              {...anim({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, duration: 0.7, delay: 0.55 })}
            >
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0b0d] transition-all duration-300 hover:bg-cyan-200 active:scale-[0.97] sm:w-auto"
              >
                Selected work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.97] sm:w-auto"
              >
                <FileText className="h-4 w-4" />
                View resume
              </button>
            </div>

            <div
              className="mt-9 flex items-center justify-center gap-5 lg:justify-start"
              {...anim({ from: { opacity: 0 }, to: { opacity: 1 }, duration: 0.8, delay: 0.8 })}
            >
              <a
                href="https://www.linkedin.com/in/md-rashedul-islam-junayed-26bb4122a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:muhammadrashedul8@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span className="hidden h-px w-8 bg-white/15 sm:block" />
              <span className="eyebrow flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="h-3 w-3" /> Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Portrait — first on mobile, right on desktop */}
          <div
            className="order-1 flex justify-center pb-4 lg:order-2 lg:col-span-5 lg:justify-end"
            {...anim({ from: { opacity: 0, scale: 0.94 }, to: { opacity: 1, scale: 1 }, duration: 0.9, delay: 0.25 })}
          >
            <div className="relative w-[min(68vw,300px)] sm:w-[360px] lg:w-[400px]">
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-white/25 via-white/5 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#14181d] to-[#0a0b0d]">
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cyan-400/15 to-transparent" />
                <Image
                  src={HERO_PORTRAIT_SRC}
                  alt="MD Rashedul Islam Junayed"
                  width={1824}
                  height={2368}
                  priority
                  sizes="(min-width: 1024px) 400px, 340px"
                  className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-center rounded-2xl border border-white/10 bg-[#0a0b0d]/80 px-4 py-3 backdrop-blur-xl sm:left-6 sm:right-6">
                <span className="text-center text-[12px] text-slate-200">NestJS · PostgreSQL · Redis · Next.js</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about"
          className="eyebrow mx-auto mt-16 hidden items-center gap-2 transition-colors hover:text-white lg:flex"
        >
          Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
        </button>
      </div>

        {resumeOpen && (
          <div
            ref={modalRef}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          >
            <button
              type="button"
              aria-label="Close resume preview"
              className="absolute inset-0 bg-[#050607]/88 backdrop-blur-sm"
              onClick={() => closeResume()}
            />
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
              aria-describedby="resume-modal-subtitle"
              className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0d] shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-cyan-500/15 max-h-[min(92vh,920px)]"
            >
              <header className="flex shrink-0 flex-wrap items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <div className="min-w-0 space-y-1">
                  <h2 id="resume-modal-title" className="text-lg font-bold tracking-tight text-white sm:text-xl">
                    Resume Preview
                  </h2>
                  <p id="resume-modal-subtitle" className="text-sm text-slate-400">
                    {RESUME_MODAL_SUBTITLE}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                  <a
                    href={RESUME_URL}
                    download={RESUME_DOWNLOAD_NAME}
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                  >
                    Download
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                  <button
                    type="button"
                    onClick={() => closeResume()}
                    className="rounded-lg p-2 text-white transition hover:bg-white/10"
                    aria-label="Close resume preview"
                  >
                    <X className="h-6 w-6" strokeWidth={2} />
                  </button>
                </div>
              </header>

              <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#0e1013] px-4 py-5 sm:px-7 sm:py-6">
                <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col rounded-xl border border-white/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-cyan-500/10">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0a0b0d] text-white shadow-md transition hover:bg-[#15181d]"
                    aria-label="Open resume in new tab"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <div className="relative min-h-[min(52vh,560px)] flex-1 overflow-auto rounded-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex justify-center p-2 sm:p-3">
                      <iframe
                        src={RESUME_EMBED_URL}
                        title="Resume PDF preview"
                        className="h-[min(68vh,780px)] min-h-[480px] w-full max-w-[816px] rounded-sm border-0 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

    </section>
  );
}
