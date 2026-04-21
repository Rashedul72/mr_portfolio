'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  NormalProjects,
  LandingPages,
  Contact,
  Footer,
  ScrollToTop
} from '@/components';
import { Code, Cpu, Database, Globe, GitBranch, Zap, Smartphone, Layers } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoading) {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');

      if (section && ['home', 'about', 'skills', 'experience', 'projects', 'landing-pages', 'contact'].includes(section)) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);

        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(section);
          }
        }, 500);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observerRef.current) observerRef.current.observe(section);
    });
    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'landing-pages', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#082c47] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-cyan-400/20 animate-bounce" style={{ animationDelay: '0s' }}><Code className="w-8 h-8" /></div>
          <div className="absolute top-32 right-24 text-violet-400/20 animate-bounce" style={{ animationDelay: '0.5s' }}><Cpu className="w-8 h-8" /></div>
          <div className="absolute bottom-32 left-32 text-cyan-400/20 animate-bounce" style={{ animationDelay: '1s' }}><Database className="w-8 h-8" /></div>
          <div className="absolute bottom-24 right-20 text-violet-400/20 animate-bounce" style={{ animationDelay: '1.5s' }}><Globe className="w-8 h-8" /></div>
          <div className="absolute top-1/2 left-16 text-cyan-400/20 animate-bounce" style={{ animationDelay: '2s' }}><GitBranch className="w-8 h-8" /></div>
          <div className="absolute top-1/2 right-16 text-violet-400/20 animate-bounce" style={{ animationDelay: '2.5s' }}><Zap className="w-8 h-8" /></div>
          <div className="absolute top-40 left-1/2 text-cyan-400/20 animate-bounce" style={{ animationDelay: '3s' }}><Smartphone className="w-8 h-8" /></div>
          <div className="absolute bottom-40 right-1/2 text-violet-400/20 animate-bounce" style={{ animationDelay: '3.5s' }}><Layers className="w-8 h-8" /></div>
        </div>
        <div className="text-center relative z-10">
          <div className="w-16 h-16 border-4 border-white/10 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4 shadow-[0_0_20px_rgba(34,211,238,0.3)]" />
          <h2 className="text-xl font-semibold text-white animate-pulse">Loading Rashed&apos;s Portfolio...</h2>
          <p className="text-sm text-slate-400 mt-2">Software Developer & Full Stack Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#082c47]">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LandingPages />
      {/* <NormalProjects /> */}
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
