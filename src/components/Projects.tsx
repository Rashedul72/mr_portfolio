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
    <div className="glass rounded-2xl overflow-hidden lg:grid lg:grid-cols-5">
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
    <div className="glass rounded-2xl overflow-hidden">
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

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#082c47] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
          <motion.p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Showcasing innovative solutions across e-commerce, web development, and modern applications
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="space-y-8">
            <FeaturedSkeleton />
            <FeaturedSkeleton />
            <FeaturedSkeleton />
            <FeaturedSkeleton />
            <FeaturedSkeleton />
          </div>
        ) : (
          <div className="space-y-8 lg:space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 lg:grid lg:grid-cols-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true, amount: 0.15 }}
              >
                {/* Image */}
                <div className={`lg:col-span-3 relative h-64 sm:h-72 lg:h-auto min-h-[280px] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 hidden lg:block ${
                    index % 2 !== 0
                      ? 'bg-gradient-to-l from-transparent via-transparent to-[#082c47]/80'
                      : 'bg-gradient-to-r from-transparent via-transparent to-[#082c47]/80'
                  }`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082c47]/60 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className={`lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-white/[0.06] text-cyan-300/80 px-3 py-1 rounded-full text-xs font-medium border border-white/[0.06]">{tech}</span>
                    ))}
                  </div>
                  <motion.button
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate(project.liveUrl, project.title)}
                    disabled={loading === project.title}
                  >
                    {loading === project.title ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                      <>View Case Study <ArrowRight className="w-4 h-4" /></>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
