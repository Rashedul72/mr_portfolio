import { motion } from 'framer-motion';
import { ExternalLink, Loader2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Projects() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'SmartHRflow',
      description: 'An AI-powered HR hiring platform that reduces recruitment steps by 60% through intelligent CV parsing, automated assessments, and streamlined candidate management.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Nest.js', 'Vercel', 'OpenAI API'],
      image: '/images/smartHRflowV2.png',
      liveUrl: '/projects/smarthrflow'
    },
    {
      title: 'Better E Net',
      description: 'A comprehensive networking and IT services platform with service management, network monitoring, and technical support.',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js'],
      image: '/images/betterenet.png',
      liveUrl: '/projects/better-e-net'
    },
    {
      title: 'Better E Mart',
      description: 'A comprehensive e-commerce platform with integrated dashboard, mobile app development, and real-time inventory management.',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Expo', 'TypeScript'],
      image: '/images/better.jpeg',
      liveUrl: '/projects/better-emart'
    },
    {
      title: 'Kumira Guptachara Boat Ticketing',
      description: 'A cutting-edge application demonstrating expertise in full-stack development and modern web technologies.',
      technologies: ['Next.js', 'SSL COMMERZ', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/kumira.png',
      liveUrl: '/projects/kumira'
    },
    {
      title: 'Jafson Trading & Marine Services',
      description: 'An innovative project showcasing advanced web development skills and modern technology stack implementation.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/images/jafson.png',
      liveUrl: '/projects/jafson'
    }
  ];

  const handleNavigate = async (url: string, projectTitle: string) => {
    setLoading(projectTitle);
    await router.push(url);
    setLoading(null);
  };

  const FeaturedSkeleton = () => (
    <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] overflow-hidden lg:grid lg:grid-cols-5">
      <div className="lg:col-span-3 h-64 lg:h-80 bg-white/[0.04] animate-pulse" />
      <div className="lg:col-span-2 p-8">
        <div className="h-4 w-24 bg-white/[0.06] rounded animate-pulse mb-4" />
        <div className="h-8 bg-white/[0.06] rounded animate-pulse mb-4" />
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-white/[0.06] rounded animate-pulse" />
          <div className="h-4 bg-white/[0.06] rounded animate-pulse w-3/4" />
        </div>
        <div className="flex gap-2 mb-6">
          <div className="h-6 w-16 bg-white/[0.06] rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-white/[0.06] rounded-full animate-pulse" />
          <div className="h-6 w-14 bg-white/[0.06] rounded-full animate-pulse" />
        </div>
        <div className="h-12 bg-white/[0.06] rounded-xl animate-pulse" />
      </div>
    </div>
  );

  const GridSkeleton = () => (
    <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] overflow-hidden">
      <div className="h-48 bg-white/[0.04] animate-pulse" />
      <div className="p-6">
        <div className="h-6 bg-white/[0.06] rounded animate-pulse mb-3" />
        <div className="h-4 bg-white/[0.06] rounded animate-pulse mb-2" />
        <div className="h-4 bg-white/[0.06] rounded animate-pulse w-2/3 mb-4" />
        <div className="flex gap-2 mb-5">
          <div className="h-6 w-16 bg-white/[0.06] rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-white/[0.06] rounded-full animate-pulse" />
        </div>
        <div className="h-11 bg-white/[0.06] rounded-xl animate-pulse" />
      </div>
    </div>
  );

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#030014] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing innovative solutions across e-commerce, web development, and modern applications
          </motion.p>
        </motion.div>

        {isLoading ? (
          <>
            <FeaturedSkeleton />
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-10">
              <GridSkeleton /><GridSkeleton /><GridSkeleton /><GridSkeleton />
            </div>
          </>
        ) : (
          <>
            {/* Featured Project - Spotlight */}
            <motion.div
              className="mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 lg:grid lg:grid-cols-5">
                {/* Image */}
                <div className="lg:col-span-3 relative h-64 sm:h-72 lg:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030014]/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3">Featured Project</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featured.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.technologies.map((tech) => (
                      <span key={tech} className="bg-white/[0.06] text-cyan-300/80 px-3 py-1 rounded-full text-xs font-medium border border-white/[0.06]">{tech}</span>
                    ))}
                  </div>
                  <motion.button
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate(featured.liveUrl, featured.title)}
                    disabled={loading === featured.title}
                  >
                    {loading === featured.title ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                      <>View Case Study <ArrowRight className="w-4 h-4" /></>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Grid Projects */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {rest.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(34,211,238,0.05)] transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-48 sm:h-52 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-white/[0.06] text-cyan-300/70 px-2.5 py-0.5 rounded-md text-xs font-medium border border-white/[0.04]">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-slate-500 text-xs px-1">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigate(project.liveUrl, project.title)}
                      disabled={loading === project.title}
                    >
                      {loading === project.title ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                        <>View Case Study <ExternalLink className="w-3.5 h-3.5" /></>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
