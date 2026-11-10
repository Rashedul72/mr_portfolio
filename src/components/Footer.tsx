'use client';

import { anim } from '@/lib/anim';
import Signature from './Signature';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Landing Pages', href: '#landing-pages' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#08090b]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          {...anim({ from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 }, scroll: true, duration: 0.7 })}
        >
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Signature size="text-3xl min-[400px]:text-4xl sm:text-5xl" />
            <p className="max-w-xs text-center text-[13px] leading-relaxed text-slate-500 md:text-left">
              Backend-focused software engineer building reliable, scalable products.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-3 md:justify-end">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-slate-400 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-[12px] text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} MD Rashedul Islam Junayed. All rights reserved.</span>
          <span className="eyebrow !text-slate-600">Dhaka · Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
