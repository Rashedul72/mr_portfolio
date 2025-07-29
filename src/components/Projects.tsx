import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Projects() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for projects
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton component for project cards
  const ProjectSkeleton = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Image skeleton */}
      <div className="h-48 sm:h-56 lg:h-64 bg-gray-200 animate-pulse"></div>
      
      {/* Content skeleton */}
      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
        
        {/* Technologies skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-14 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-6 w-18 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );

  const projects = [
    
    {
      title: 'Better E Net',
      description: 'A comprehensive networking and IT services platform with service management, network monitoring, and technical support.',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js'],
      image: '/images/betterenet.png',
      liveUrl: '/projects/better-e-net'
    },
    {
      title: 'SmartHRflow',
      description: 'An AI-powered HR hiring platform that reduces recruitment steps by 60% through intelligent CV parsing, automated assessments, and streamlined candidate management.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Nest.js', 'Vercel', 'OpenAI API'],
      image: '/images/smarthrflow.png',
      liveUrl: '/projects/smarthrflow'
    },
    {
      title: 'Better E Mart',
      description: 'A comprehensive e-commerce platform with integrated dashboard, mobile app development, and real-time inventory management.',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Expo', 'TypeScript'],
      image: '/images/better.jpeg',
      liveUrl: '/projects/better-emart'
    },
    {
      title: 'Jafson Trading & Marine Services',
      description: 'An innovative project showcasing advanced web development skills and modern technology stack implementation.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/images/jafson.png',
      liveUrl: '/projects/jafson'
    },
    {
      title: 'Kumira Guptachara Boat Ticketing',
      description: 'A cutting-edge application demonstrating expertise in full-stack development and modern web technologies.',
      technologies: ['Next.js', 'SSL COMMERZ', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/kumira.png',
      liveUrl: '/projects/kumira'
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

  const handleNavigate = async (url: string, projectTitle: string) => {
    setLoading(projectTitle);
    await router.push(url);
    setLoading(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            Featured Projects
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
            Showcasing innovative solutions across e-commerce, web development, and modern applications
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {isLoading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Project Image */}
                <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden border-b border-gray-200">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-4 leading-relaxed h-20 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Case Study Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigate(project.liveUrl, project.title)}
                      disabled={loading === project.title}
                    >
                      {loading === project.title ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          View Case Study
                          <ExternalLink className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
} 