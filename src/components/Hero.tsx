'use client';

import Image from 'next/image';
import { Target, Mail, Code, Cpu, Database, Globe, GitBranch, Layers, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const floatingIcons = [
    { icon: Code, delay: 0, x: -20, y: -30 },
    { icon: Cpu, delay: 0.5, x: 20, y: -20 },
    { icon: Database, delay: 1, x: -15, y: 25 },
    { icon: Globe, delay: 1.5, x: 25, y: 15 },
    { icon: GitBranch, delay: 2, x: -30, y: 10 },
    { icon: Layers, delay: 2.5, x: 35, y: -35 },
    { icon: Zap, delay: 3, x: -25, y: -15 },
    { icon: Smartphone, delay: 3.5, x: 15, y: 30 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#030014] scroll-mt-16 sm:scroll-mt-20 pt-20 sm:pt-24 pb-12">
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

      {/* Subtle floating icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/[0.04]"
            style={{ left: `${50 + item.x}%`, top: `${30 + item.y}%` }}
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <item.icon className="w-10 h-10 sm:w-14 sm:h-14" />
          </motion.div>
        ))}
      </div>

      {/* Main content - split layout */}
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
              {/* Decorative rings */}
              <div className="absolute -inset-10 border border-dashed border-white/[0.06] rounded-[2rem] hidden lg:block" />
              <div className="absolute -inset-20 border border-dashed border-white/[0.04] rounded-[2.5rem] hidden lg:block" />

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-3 -right-6 sm:-right-10 z-20 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-cyan-400 text-xs sm:text-sm font-mono font-medium">React</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-6 sm:-left-10 z-20 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-violet-400 text-xs sm:text-sm font-mono font-medium">Node.js</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-14 z-20 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 hidden sm:block shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-amber-400 text-xs sm:text-sm font-mono font-medium">TypeScript</span>
              </motion.div>

              {/* Gradient glow behind image */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-rose-500/20 rounded-3xl blur-2xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile image */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96">
                <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-500 rounded-3xl opacity-60" />
                <Image
                  src="/images/Junayed.jpg"
                  alt="MD Rashedul Islam Junayed"
                  fill
                  className="rounded-3xl object-cover object-top relative z-10 p-[2px]"
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
                />
              </div>
            </div>
          </motion.div>

          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Code snippet background decoration */}
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

            {/* CTA Buttons */}
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

            {/* Tech stack indicators */}
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

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/15 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-1.5 bg-cyan-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}
