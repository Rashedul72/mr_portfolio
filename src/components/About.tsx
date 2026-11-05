'use client';

import { anim } from '@/lib/anim';

const facts = [
  { label: 'Experience', value: '4+ years' },
  { label: 'Projects shipped', value: '15+' },
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Focus', value: 'Backend systems' },
];

const principles = [
  { title: 'Correct under load', text: 'Idempotent writes, safe retries and locks that hold across multiple server instances.' },
  { title: 'Fast by design', text: 'Versioned caches, queue-driven work and set-based queries instead of loops of round trips.' },
  { title: 'Built end to end', text: 'From schema and APIs to the Next.js interface, payments and deployment around them.' },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-16 py-16 sm:py-28 lg:py-32 sm:scroll-mt-20">
      <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Heading + story */}
          <div className="lg:col-span-7" {...anim({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, scroll: true, duration: 0.7 })}>
            <p className="eyebrow mb-4">About</p>
            <h2 className="text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] text-white">
              Engineer first, with an eye for <span className="text-cyan-400">craft</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-400 sm:text-[17px]">
              <p>
                I&apos;m a backend-focused software engineer who designs and ships production systems with NestJS,
                PostgreSQL, Redis and BullMQ. I care about correctness under real conditions: flaky mobile networks,
                multiple server instances, and money that has to add up.
              </p>
              <p>
                At Riseup Labs, working with Neoscoder (Akij Venture Group), I built a trade-promotion service from
                scratch: a versioned Redis cache that never serves stale data, geographic targeting down to individual
                routes, and idempotent offline order sync. I also work on queue-based imports, locking and race-condition
                fixes, and third-party integrations.
              </p>
              <p>
                I build full-stack products with Next.js and React too, from e-commerce and booking platforms to SaaS
                billing with Stripe, with earlier experience in IoT and AI-driven applications.
              </p>
            </div>
          </div>

          {/* Facts + principles */}
          <div className="lg:col-span-5" {...anim({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, scroll: true, duration: 0.7, delay: 0.15 })}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {facts.map((f) => (
                <div key={f.label} className="bg-[#0b0c0f] p-5 sm:p-6">
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">{f.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-6">
              {principles.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="font-display text-2xl italic leading-none text-cyan-300/70">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400 sm:text-sm">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
