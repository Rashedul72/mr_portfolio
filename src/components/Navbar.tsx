'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Lightbulb, Briefcase, Folder, Layout, Mail } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
  activeSection?: string;
}

export default function Navbar({ scrollToSection, activeSection = '' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
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
    if (pathname.startsWith('/projects/')) {
      router.push(`/?section=${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => handleNavClick('home')}
              className="text-xl sm:text-2xl font-bold shimmer-text hover:opacity-80 transition-opacity"
            >
              MR
            </button>
          </motion.div>

          {/* Desktop */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg font-medium transition-colors duration-300 text-sm ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  whileHover={{ y: -1 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/[0.06] rounded-lg"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-[#030014]/95 backdrop-blur-2xl border-t border-white/[0.06]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 px-2 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white/[0.08] border border-cyan-500/20 text-white'
                          : 'bg-transparent border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : ''}`} />
                      <span className="font-medium">{item.name}</span>
                      {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />}
                    </motion.button>
                  );
                })}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
