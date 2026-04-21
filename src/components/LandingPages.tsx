import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function LandingPages() {
  const landingPages = [
    {
      name: 'Jakaria Finance',
      image: '/images/Jakaria finacne.png',
      url: 'https://www.jakaria.finance/'
    },
    {
      name: 'Instant Funding',
      image: '/images/instantfunding.png',
      url: 'https://www.instantfunding.uk/'
    },
    {
      name: 'Kryzotech Solutions',
      image: '/images/soulton.png',
      url: 'https://solutions.kryzotechbd.com/'
    },
    {
      name: 'BDJHelper',
      image: '/images/bdjhelper.png',
      url: 'https://bdjhelper.netlify.app/'
    },
    {
      name: 'LamsaNet',
      image: '/images/lamsanet.png',
      url: 'https://lasmanet-fork-dev.netlify.app/'
    },
    {
      name: 'Headline Widget Design Studio',
      image: '/images/headline.png',
      url: 'https://widget-design-studio.netlify.app/'
    },
    {
      name: 'Cloud Ceiling',
      image: '/images/cloudcleiling.png',
      url: 'https://wholesalesbd.netlify.app/'
    }
  ];

  return (
    <section id="landing-pages" className="py-16 sm:py-20 lg:py-24 bg-[#0a3355] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client <span className="gradient-text">Landing Pages</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            Professional landing pages delivered to clients worldwide
          </motion.p>
        </motion.div>

        {/* 2-column grid with large images */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {landingPages.map((page, index) => (
            <motion.a
              key={page.name}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Large image area */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={page.image}
                  alt={page.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3355] via-[#0a3355]/30 to-transparent" />

                {/* Hover overlay with icon */}
                <div className="absolute inset-0 bg-cyan-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    <ExternalLink className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">
                    {page.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 truncate">{page.url}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
