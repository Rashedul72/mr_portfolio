'use client';

import { Mail, FileText, ArrowUpRight, Linkedin, MapPin, ArrowDown } from 'lucide-react';
import { anim } from '@/lib/anim';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

/** Portrait asset — `public/images/Junayed-without-bg.png` (1824×2368) */
const HERO_PORTRAIT_SRC = '/images/Junayed-without-bg.png';

const RESUME_URL = '/MD_Rashedul_Islam_Junayed_CV.pdf';

export default function Hero({ scrollToSection }: HeroProps) {
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
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.97] sm:w-auto"
              >
                <FileText className="h-4 w-4" />
                View resume
              </a>
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
    </section>
  );
}
