'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { anim } from '@/lib/anim';
import { Menu, X, Home, User, Lightbulb, Briefcase, Folder, Layout, Mail } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
  activeSection?: string;
}

export default function Navbar({ scrollToSection, activeSection = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(menu, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: reduced ? 0 : 0.25,
      ease: 'power3.out',
      overwrite: true,
    });
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Lightbulb },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: Folder },
    { name: 'Landing Pages', id: 'landing-pages', icon: Layout },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto mt-4 w-full max-w-[76rem] rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/[0.05] backdrop-blur-md sm:backdrop-blur-2xl border border-white/[0.08] shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]'
            : 'bg-white/[0.03] backdrop-blur-sm sm:backdrop-blur-xl border border-white/[0.05] shadow-[0_4px_14px_rgba(0,0,0,0.25)] sm:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        }`} {...anim({"from": {"y": -100, "opacity": 0}, "to": {"y": 0, "opacity": 1}, "duration": 0.7})}
      >
        <div className="px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div
              className="flex items-center" {...anim({"from": {"opacity": 0, "x": -20}, "to": {"opacity": 1, "x": 0}, "duration": 0.6, "delay": 0.2})}
      >
              <button
                onClick={() => handleNavClick('home')}
                className="text-lg sm:text-2xl font-bold text-cyan-400 hover:opacity-80 transition-opacity"
              >
                MR
              </button>
            </div>

            {/* Desktop nav items */}
            <div
              className="hidden md:flex items-center gap-0.5 bg-white/[0.03] rounded-xl p-1" {...anim({"from": {"opacity": 0, "y": -10}, "to": {"opacity": 1, "y": 0}, "duration": 0.6, "delay": 0.3})}
      >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-lg font-medium transition-all duration-300 text-[13px] hover:scale-[1.04] active:scale-[0.97] ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    {...anim({ from: { opacity: 0, y: -10 }, to: { opacity: 1, y: 0 }, duration: 0.4, delay: 0.35 + index * 0.04 })}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-500/15 rounded-lg border border-white/[0.08] shadow-[0_0_12px_rgba(34,211,238,0.12)]" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all active:scale-[0.9]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'} {...anim({"from": {"opacity": 0, "x": 20}, "to": {"opacity": 1, "x": 0}, "duration": 0.6, "delay": 0.4})}
      >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu — floating panel inside the glass bar */}
        <div ref={menuRef} className="md:hidden overflow-hidden" style={{ height: 0, opacity: 0 }} aria-hidden={!isOpen} inert={!isOpen}>
          <div className="mx-2 mb-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="py-3 px-2 space-y-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500/10 border border-white/[0.08] text-white'
                        : 'bg-transparent border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : ''}`} />
                    <span className="text-[13px] sm:text-sm font-medium">{item.name}</span>
                    {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
