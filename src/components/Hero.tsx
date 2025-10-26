'use client';

import Image from 'next/image';
import { Target, Mail, Code, Cpu, Database, Globe, GitBranch, Layers, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  // Floating tech icons animation
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
    <section id="home" className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Floating tech icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-300 opacity-40"
            style={{
              left: `${50 + item.x}%`,
              top: `${30 + item.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
          >
            <item.icon className="w-12 h-12 sm:w-16 sm:h-16" />
          </motion.div>
        ))}
      </div>

      {/* Animated code snippets */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none hidden lg:block">
        <motion.div
          className="text-xs font-mono text-blue-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <div className="mb-2">const developer = {`{`}</div>
          <div className="ml-4 mb-1">name: "Rashedul",</div>
          <div className="ml-4 mb-1">role: "Full Stack",</div>
          <div className="ml-4 mb-2">passion: "Code"</div>
          <div>{`}`};</div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
                    <div className="mb-6 sm:mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8">
              <Image
                src="/me.jpg"
                alt="MD Rashedul Islam Junayed"
                fill
                className="rounded-xl object-cover"
                priority
                loading="eager"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 192px"
              />
            </div>
          </div>
          
          <motion.div
            className="relative inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            >
              Hi, I'm <span className="text-blue-600">MD Rashedul Islam Junayed</span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 lg:mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Full Stack Software Developer
            </motion.span>
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Passionate about creating innovative web applications, IoT solutions, and AI-driven analytics. 
            Experienced in e-commerce, agricultural technology, and mobile app development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <Target className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">View My Work</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Tech stack indicators */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>React</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Node.js</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span>TypeScript</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 