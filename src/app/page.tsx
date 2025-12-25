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

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle section parameter from case study pages
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoading) {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      
      if (section && ['home', 'about', 'skills', 'experience', 'projects', 'landing-pages', 'contact'].includes(section)) {
        // Clear the URL parameter
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
        
        // Scroll to the section
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

  // Intersection Observer for animations
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {/* Floating tech icons background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-blue-300 opacity-30 animate-bounce" style={{ animationDelay: '0s' }}>
            <Code className="w-8 h-8" />
          </div>
          <div className="absolute top-32 right-24 text-indigo-300 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Cpu className="w-8 h-8" />
          </div>
          <div className="absolute bottom-32 left-32 text-blue-400 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
            <Database className="w-8 h-8" />
          </div>
          <div className="absolute bottom-24 right-20 text-indigo-400 opacity-30 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <Globe className="w-8 h-8" />
          </div>
          <div className="absolute top-1/2 left-16 text-blue-300 opacity-30 animate-bounce" style={{ animationDelay: '2s' }}>
            <GitBranch className="w-8 h-8" />
          </div>
          <div className="absolute top-1/2 right-16 text-indigo-300 opacity-30 animate-bounce" style={{ animationDelay: '2.5s' }}>
            <Zap className="w-8 h-8" />
          </div>
          <div className="absolute top-40 left-1/2 text-blue-400 opacity-30 animate-bounce" style={{ animationDelay: '3s' }}>
            <Smartphone className="w-8 h-8" />
          </div>
          <div className="absolute bottom-40 right-1/2 text-indigo-400 opacity-30 animate-bounce" style={{ animationDelay: '3.5s' }}>
            <Layers className="w-8 h-8" />
          </div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 animate-pulse-slow">Loading Rashed's Portfolio...</h2>
          <p className="text-sm text-gray-600 mt-2">Software Developer & Full Stack Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} />
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
