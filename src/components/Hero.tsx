'use client';

import Image from 'next/image';
import { Target, Mail, Code, Cpu, Database, Globe, GitBranch, Layers, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

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

const badges = [
  { label: 'React', color: 'text-cyan-400', shadow: 'shadow-[0_0_15px_rgba(34,211,238,0.1)]', pos: 'absolute -top-3 -right-6 sm:-right-10 z-20', y: '8px', x: '4px', dy: '7s', dx: '9.5s', dd: '0s' },
  { label: 'Node.js', color: 'text-violet-400', shadow: 'shadow-[0_0_15px_rgba(139,92,246,0.1)]', pos: 'absolute -bottom-3 -left-6 sm:-left-10 z-20', y: '7px', x: '5px', dy: '8s', dx: '10.5s', dd: '-3s' },
  { label: 'TypeScript', color: 'text-amber-400', shadow: 'shadow-[0_0_15px_rgba(251,191,36,0.1)]', pos: 'absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-14 z-20 hidden sm:block', y: '6px', x: '5px', dy: '9s', dx: '11.5s', dd: '-5s' },
];

const PROFILE_IMAGE_URL = '/images/Junayed-v2.jpg';

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#082c47] scroll-mt-16 sm:scroll-mt-20 pt-20 sm:pt-24 pb-12">
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Right: Image with decorations */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-10 border border-dashed border-white/[0.06] rounded-[2rem] hidden lg:block" />
              <div className="absolute -inset-20 border border-dashed border-white/[0.04] rounded-[2.5rem] hidden lg:block" />

              {/* Floating tech badges — pure CSS, nested per-axis */}
              {badges.map((b) => (
                <div key={b.label} className={`${b.pos} bob-y`} style={{ '--y': b.y, '--dy': b.dy, animationDelay: b.dd } as React.CSSProperties}>
                  <div className="bob-x" style={{ '--x': b.x, '--dx': b.dx, animationDelay: b.dd } as React.CSSProperties}>
                    <div className={`bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 ${b.shadow}`}>
                      <span className={`${b.color} text-xs sm:text-sm font-mono font-medium`}>{b.label}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Gradient glow behind image */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-rose-500/20 rounded-3xl blur-2xl"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0.65 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />

              {/* Profile image */}
              <div className="relative w-[20rem] h-[15rem] sm:w-[24rem] sm:h-[18rem] lg:w-[28rem] lg:h-[21rem] xl:w-[32rem] xl:h-[24rem]">
                <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-500 rounded-3xl opacity-60" />
                <Image
                  src={PROFILE_IMAGE_URL}
                  alt="MD Rashedul Islam Junayed"
                  width={1056}
                  height={768}
                  className="w-full h-full rounded-3xl object-cover relative z-10 p-[2px]"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1280px) 448px, 512px"
                />
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
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 sm:mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
                Full Stack Software Developer
              </motion.span>
            </motion.p>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Passionate about creating innovative web applications, IoT solutions, and AI-driven analytics.
              Experienced in e-commerce, agricultural technology, and mobile app development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 lg:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View My Work</span>
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
              className="flex gap-6 justify-center lg:justify-start"
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
    </section>
  );
}
