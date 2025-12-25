import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function LandingPages() {
  const landingPages = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="landing-pages" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client Landing Pages
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Professional landing pages delivered to clients worldwide
          </motion.p>
        </motion.div>

        {/* Landing Pages Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {landingPages.map((page, index) => (
            <motion.a
              key={page.name}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-100 overflow-hidden">
                <Image 
                  src={page.image} 
                  alt={page.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <ExternalLink className="w-6 h-6 text-blue-600" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {page.name}
                  </motion.h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                
                <motion.p
                  className="text-sm text-gray-500 mt-2 truncate"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {page.url}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

