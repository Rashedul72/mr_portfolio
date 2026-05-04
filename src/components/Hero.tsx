'use client';

import { useState, useEffect } from 'react';
import { Download, Mail, FileText, X, Code, Cpu, Database, Globe, GitBranch, Layers, Zap, Smartphone, ExternalLink, Minus, Plus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const floatingIcons = [
  { icon: Code, px: -20, py: -30, y: '10px', x: '5px', r: '3deg', dy: '9s', dx: '12s', dr: '15s', dd: '-0s' },
  { icon: Cpu, px: 20, py: -20, y: '8px', x: '6px', r: '4deg', dy: '10s', dx: '13s', dr: '16s', dd: '-3s' },
  { icon: Database, px: -15, py: 25, y: '12px', x: '4px', r: '2deg', dy: '8s', dx: '11s', dr: '14s', dd: '-5s' },
  { icon: Globe, px: 25, py: 15, y: '9px', x: '7px', r: '3deg', dy: '11s', dx: '14s', dr: '17s', dd: '-2s' },
  { icon: GitBranch, px: -30, py: 10, y: '11px', x: '5px', r: '4deg', dy: '9.5s', dx: '12.5s', dr: '15.5s', dd: '-7s' },
  { icon: Layers, px: 35, py: -35, y: '7px', x: '6px', r: '2deg', dy: '10.5s', dx: '13.5s', dr: '16.5s', dd: '-1s' },
  { icon: Zap, px: -25, py: -15, y: '10px', x: '4px', r: '3deg', dy: '8.5s', dx: '11.5s', dr: '14.5s', dd: '-4s' },
  { icon: Smartphone, px: 15, py: 30, y: '9px', x: '7px', r: '4deg', dy: '11.5s', dx: '14.5s', dr: '17.5s', dd: '-6s' },
];

const portraitTags = [
  {
    label: 'JavaScript',
    pos: 'absolute left-[-4%] top-[8%] z-30 sm:left-0 sm:top-[11%]',
    y: '8px',
    x: '4px',
    dy: '7s',
    dx: '9.5s',
    dd: '0s',
  },
  {
    label: 'Next.js',
    pos: 'absolute right-[-6%] bottom-[10%] z-30 sm:right-0 sm:bottom-[13%]',
    y: '7px',
    x: '5px',
    dy: '8s',
    dx: '10.5s',
    dd: '-3s',
  },
];

/** Portrait asset — `public/images/Junayed-without-bg.png` (1824×2368) */
const HERO_PORTRAIT_SRC = '/images/Junayed-without-bg.png';

const RESUME_URL = '/resume/MD_Rashedul_Islam_Junayed.pdf';
const RESUME_DOWNLOAD_NAME = 'MD_Rashedul_Islam_Junayed.pdf';
const RESUME_MODAL_SUBTITLE = 'MD Rashedul Islam Junayed - Full Stack Software Developer';
/** Update if your PDF page count changes (toolbar display only). */
const RESUME_PAGE_COUNT = 2;
/** Chromium embedded PDF viewer: hides thumbnail sidebar, native toolbar, and scrollbars (iframe only). */
const RESUME_EMBED_URL = `${RESUME_URL}#navpanes=0&toolbar=0&scrollbar=0`;

export default function Hero({ scrollToSection }: HeroProps) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeZoomPct, setResumeZoomPct] = useState(100);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [resumeOpen]);

  useEffect(() => {
    if (!resumeOpen) setResumeZoomPct(100);
  }, [resumeOpen]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#082c47] scroll-mt-16 sm:scroll-mt-20 pt-20 sm:pt-24 pb-10 sm:pb-12">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <motion.div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-500/[0.06] rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-violet-500/[0.06] rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />

      {/* Floating background icons — pure CSS, nested per-axis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {floatingIcons.map((item, i) => (
          <div key={i} className="absolute bob-y" style={{ left: `${50 + item.px}%`, top: `${30 + item.py}%`, '--y': item.y, '--dy': item.dy, animationDelay: item.dd } as React.CSSProperties}>
            <div className="bob-x" style={{ '--x': item.x, '--dx': item.dx, animationDelay: item.dd } as React.CSSProperties}>
              <div className="bob-r text-white/[0.04]" style={{ '--r': item.r, '--dr': item.dr, animationDelay: item.dd } as React.CSSProperties}>
                <item.icon className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Right: Image with decorations */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative flex justify-center px-2 sm:px-4">
              {/* Teal radial glow — matches hero / reference */}
              <motion.div
                className="pointer-events-none absolute left-0 top-1/2 z-0 h-[min(22rem,55vw)] w-[min(22rem,55vw)] max-w-[340px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-cyan-400/22 blur-[100px] sm:-translate-x-[18%]"
                animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.06, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Constellation — cyan / violet (site accents) */}
              <svg
                className="pointer-events-none absolute right-[-0.5rem] top-1/2 z-0 hidden h-[13rem] w-24 -translate-y-1/2 text-cyan-400/90 lg:block xl:right-[-1.25rem]"
                viewBox="0 0 96 220"
                fill="none"
                aria-hidden
              >
                <path
                  d="M14 36 L52 78 L30 128 L68 176"
                  stroke="currentColor"
                  strokeOpacity={0.28}
                  strokeWidth={0.8}
                  strokeLinecap="round"
                />
                <circle cx={14} cy={36} r={3} fill="#22d3ee" className="drop-shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
                <circle cx={52} cy={78} r={2.5} fill="#67e8f9" fillOpacity={0.95} />
                <circle cx={30} cy={128} r={2.5} fill="#a78bfa" className="drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
                <circle cx={68} cy={176} r={3} fill="#22d3ee" fillOpacity={0.85} />
              </svg>

              {portraitTags.map((t) => (
                <div key={t.label} className={`${t.pos} bob-y`} style={{ '--y': t.y, '--dy': t.dy, animationDelay: t.dd } as React.CSSProperties}>
                  <div className="bob-x" style={{ '--x': t.x, '--dx': t.dx, animationDelay: t.dd } as React.CSSProperties}>
                    <div className="rounded-full border border-white/15 bg-[#082c47]/55 px-3 py-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-4 sm:py-2">
                      <span className="text-[11px] font-medium tracking-wide text-white sm:text-xs">{t.label}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Portrait — circle; explicit square w/h so absolute children don’t collapse the box */}
              <div className="relative z-10 mx-auto h-[min(17rem,85vw)] w-[min(17rem,85vw)] shrink-0 sm:h-[min(20rem,90vw)] sm:w-[min(20rem,90vw)] lg:h-96 lg:w-96">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-[-6px] z-0 rounded-full bg-gradient-to-br from-cyan-300/95 via-cyan-400 to-violet-500/95 opacity-[0.92] shadow-[0_0_48px_rgba(34,211,238,0.28),0_0_96px_rgba(139,92,246,0.12)]"
                />
                <div className="absolute inset-0 z-[1] overflow-hidden rounded-full bg-[#082c47]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={HERO_PORTRAIT_SRC}
                    alt="MD Rashedul Islam Junayed"
                    width={1824}
                    height={2368}
                    decoding="async"
                    fetchPriority="high"
                    className="pointer-events-none block h-full w-full select-none object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="absolute -left-4 top-32 pointer-events-none hidden xl:block">
              <motion.div
                className="text-xs font-mono opacity-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <div className="mb-1"><span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> = {`{`}</div>
                <div className="ml-4 mb-0.5"><span className="text-slate-500">name:</span> <span className="text-emerald-400">&quot;Rashedul&quot;</span>,</div>
                <div className="ml-4 mb-0.5"><span className="text-slate-500">role:</span> <span className="text-emerald-400">&quot;Full Stack&quot;</span>,</div>
                <div className="ml-4 mb-1"><span className="text-slate-500">passion:</span> <span className="text-emerald-400">&quot;Code&quot;</span></div>
                <div className="text-slate-400">{`}`};</div>
              </motion.div>
            </div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="shimmer-text">MD Rashedul Islam Junayed</span>
            </motion.h1>

            <motion.p
              className="text-[14px] sm:text-lg lg:text-2xl text-slate-300 mb-4 sm:mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
                Full Stack Software Developer
              </motion.span>
            </motion.p>

            <motion.p
              className="text-[13px] sm:text-[15px] lg:text-lg text-slate-400 max-w-xl mb-7 sm:mb-10 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Passionate about creating innovative web applications, IoT solutions, and AI-driven analytics.
              Experienced in e-commerce, agricultural technology, and mobile app development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-7 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <motion.button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="group bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 lg:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Resume</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 text-white px-6 lg:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/[0.08] hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {[
                { label: 'React', color: 'bg-cyan-400', glow: 'shadow-[0_0_8px_rgba(34,211,238,0.6)]' },
                { label: 'Node.js', color: 'bg-violet-400', glow: 'shadow-[0_0_8px_rgba(139,92,246,0.6)]' },
                { label: 'TypeScript', color: 'bg-amber-400', glow: 'shadow-[0_0_8px_rgba(251,191,36,0.6)]' },
              ].map((tech) => (
                <div key={tech.label} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <div className={`w-2 h-2 ${tech.color} rounded-full animate-pulse ${tech.glow}`} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            key="resume-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close resume preview"
              className="absolute inset-0 bg-[#041824]/88 backdrop-blur-sm"
              onClick={() => setResumeOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
              aria-describedby="resume-modal-subtitle"
              className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#082c47] shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-cyan-500/15 max-h-[min(92vh,920px)]"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
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
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                  >
                    Download
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    className="rounded-lg p-2 text-white transition hover:bg-white/10"
                    aria-label="Close resume preview"
                  >
                    <X className="h-6 w-6" strokeWidth={2} />
                  </button>
                </div>
              </header>

              <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#063554] px-4 py-5 sm:px-7 sm:py-6">
                <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col rounded-xl border border-white/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-cyan-500/10">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#082c47] text-white shadow-md transition hover:bg-[#0a3d5f]"
                    aria-label="Open resume in new tab"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <div className="relative min-h-[min(52vh,560px)] flex-1 overflow-auto rounded-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div
                      className="flex justify-center p-2 pb-16 sm:p-3 sm:pb-20"
                      style={{ zoom: resumeZoomPct / 100 }}
                    >
                      <iframe
                        src={RESUME_EMBED_URL}
                        title="Resume PDF preview"
                        className="h-[min(68vh,780px)] min-h-[480px] w-full max-w-[816px] rounded-sm border-0 bg-white"
                      />
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center sm:bottom-5">
                    <div
                      className="pointer-events-auto flex items-center gap-1 rounded-full border border-cyan-500/25 bg-[#082c47]/95 px-4 py-2 text-sm text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-2 sm:px-5 sm:py-2.5"
                      role="toolbar"
                      aria-label="Resume preview controls"
                    >
                      <span className="pr-2 text-slate-300 tabular-nums sm:pr-3">
                        Page 1 / {RESUME_PAGE_COUNT}
                      </span>
                      <span className="hidden h-5 w-px bg-white/15 sm:block" aria-hidden />
                      <button
                        type="button"
                        className="rounded-full p-1.5 text-slate-200 transition hover:bg-white/10 hover:text-white"
                        aria-label="Zoom out"
                        onClick={() => setResumeZoomPct((z) => Math.max(70, z - 12))}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <Search className="mx-0.5 h-4 w-4 text-slate-400 sm:mx-1" aria-hidden />
                      <button
                        type="button"
                        className="rounded-full p-1.5 text-slate-200 transition hover:bg-white/10 hover:text-white"
                        aria-label="Zoom in"
                        onClick={() => setResumeZoomPct((z) => Math.min(145, z + 12))}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
