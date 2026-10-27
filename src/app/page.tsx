'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useGsapAnimations } from '@/lib/useGsapAnimations';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  LandingPages,
  Contact,
  Footer,
  ScrollToTop
} from '@/components';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'landing-pages', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef(activeSection);
  const rootRef = useRef<HTMLDivElement>(null);

  useGsapAnimations(rootRef);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');

      if (section && SECTIONS.includes(section)) {
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
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sectionElements = SECTIONS
        .map((id) => ({ id, element: document.getElementById(id) }))
        .filter((item): item is { id: string; element: HTMLElement } => Boolean(item.element));

      if (sectionElements.length === 0) return;

      const scrollMarker = window.scrollY + window.innerHeight * 0.33;
      let nextSection = sectionElements[0].id;

      sectionElements.forEach(({ id, element }) => {
        if (element.offsetTop - 100 <= scrollMarker) {
          nextSection = id;
        }
      });

      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atPageBottom) {
        nextSection = sectionElements[sectionElements.length - 1].id;
      }

      if (nextSection !== activeSectionRef.current) {
        setActiveSection(nextSection);
      }
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#082c47]">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LandingPages />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
