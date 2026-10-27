'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.pageYOffset > 300;
      setIsVisible((prev) => (prev === shouldBeVisible ? prev : shouldBeVisible));
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(button, {
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0,
      y: isVisible ? 0 : 50,
      duration: reduced ? 0 : 0.3,
      ease: 'power2.out',
      overwrite: true,
    });
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      style={{ opacity: 0, transform: 'translateY(50px) scale(0)' }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center transition-shadow duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
