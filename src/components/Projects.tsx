'use client';

import { anim } from '@/lib/anim';
import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'KnowledgeBeez',
      description: 'A full-stack edtech platform with a multi-currency course catalog, SSLCommerz and Razorpay checkout, learner accounts with progress, quizzes, and verifiable certificates, CMS-driven marketing and blogs, and a role-based admin dashboard — live with real enrollments.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'SSLCommerz', 'Razorpay', 'Cloudflare R2', 'VPS'],
      image: '/images/knowledgebeez.webp',
      liveUrl: 'https://knowledgebeez.com/',
      delivered: 'October 2026'
    },
    {
      title: 'Tomatungi Resort',
      description: 'A full rebuild of the resort platform with modern booking, SSLCommerz payments, guest accounts, bilingual experience, and a complete admin dashboard — now live with real guest bookings on the existing domain.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'SSLCommerz', 'Coolify'],
      image: '/images/tomatungi.webp',
      liveUrl: 'https://tomatungiresort.com/',
      delivered: 'August 2026'
    },
    {
      title: 'Hiramix E-Commerce',
      description: 'Retail and wholesale e-commerce with product search, wishlist, vouchers, loyalty points, payments, delivery integrations, multilingual support, inventory, invoicing, and admin operations.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Razorpay', 'Socket.IO', 'Coolify'],
      image: '/images/hiramix.my.webp',
      liveUrl: 'https://hiramix.my/',
      delivered: 'July 2026'
    },
    {
      title: 'Hiramix Corporate',
      description: 'Corporate portfolio platform with product and brand management, careers, candidate management, wholesale information, content management, and a complete admin dashboard.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Razorpay', 'Socket.IO', 'Coolify'],
      image: '/images/hiramix.com.my.webp',
      liveUrl: 'https://hiramix.com.my/',
      delivered: 'June 2026'
    },
    {
      title: 'Kryzotech Solutions',
      description: 'Software development company site — a sister concern of Kryzotech BD — showcasing services and company presence on a production-ready Next.js platform.',
      technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'JWT', 'Cloudflare R2', 'EPS Payment'],
      image: '/images/solutions_kryzotechbd.webp',
      liveUrl: 'https://solutions.kryzotechbd.com/',
      delivered: 'April 2026'
    },
    {
      title: 'Kryzotech',
      description: 'A complete learning platform covering course discovery, workshops, enrollment, payments, learner management, certificates, content operations, and live support in one production-ready system.',
      technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'JWT', 'Cloudflare R2', 'EPS Payment', 'jsPDF', 'Quill'],
      image: '/images/kryzotechbd.webp',
      liveUrl: 'https://www.kryzotechbd.com/',
      delivered: 'February 2026'
    },
    {
      title: 'SmartHRflow',
      description: 'An AI-powered HR hiring platform that reduces recruitment steps by 60% through intelligent CV parsing, automated assessments, and streamlined candidate management.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Nest.js', 'Vercel', 'OpenAI API'],
      image: '/images/smartHRflowV2.png',
      liveUrl: 'https://smarthrflow.com/',
      delivered: 'December 2025'
    },
    {
      title: 'Better E Net',
      description: 'A comprehensive networking and IT services platform with service management, network monitoring, and technical support.',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js'],
      image: '/images/betterenet.webp',
      liveUrl: 'https://betternet.com/',
      delivered: 'April 2025'
    },
    {
      title: 'Better E Mart',
      description: 'A comprehensive e-commerce platform with integrated dashboard, mobile app development, and real-time inventory management.',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Expo', 'TypeScript'],
      image: '/images/better.jpeg',
      liveUrl: 'https://betteremart.com/',
      delivered: 'February 2025'
    },
    {
      title: 'Kumira Guptachara Boat Ticketing',
      description: 'A cutting-edge application demonstrating expertise in full-stack development and modern web technologies.',
      technologies: ['Next.js', 'SSL COMMERZ', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/kumira.webp',
      liveUrl: 'https://kumiraguptachara.com/',
      delivered: 'November 2024'
    },
    {
      title: 'Jafson Trading & Marine Services',
      description: 'An innovative project showcasing advanced web development skills and modern technology stack implementation.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/images/jafson.webp',
      liveUrl: 'https://www.jafsonmarine.com/',
      delivered: 'December 2023'
    }
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-24 bg-[#082c47] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12 lg:mb-16" {...anim({"from": {"opacity": 0, "y": 30}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.6})}
         
         
         
         
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.1})}
           
           
          >
            <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" {...anim({"from": {"width": 0}, "to": {"width": 96}, "scroll": true, "duration": 0.8, "delay": 0.2})}
           
           
          />
          <p className="text-[13px] sm:text-base lg:text-lg text-slate-400 mt-5 sm:mt-6 max-w-2xl mx-auto" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.3})}
           
           
          >
            Showcasing innovative solutions across e-commerce, web development, and modern applications
          </p>
        </div>

          <div className="space-y-8 lg:space-y-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 lg:grid lg:grid-cols-5" {...anim({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, scroll: true, ...{ duration: 0.6, delay: Math.min(index, 2) * 0.1 } })}
               
               
               
               
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
                      ? 'bg-[#082c47]/30'
                      : 'bg-[#082c47]/30'
                  }`} />
                  <div className="absolute inset-0 bg-[#082c47]/40 lg:hidden" />
                </div>

                {/* Content */}
                <div className={`lg:col-span-2 p-5 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-1.5 text-cyan-300/70 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Delivered {project.delivered}</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-5 sm:mb-6 leading-relaxed text-[13px] sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-white/[0.06] text-cyan-300/80 px-3 py-1 rounded-full text-xs font-medium border border-white/[0.06]">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-sm font-medium shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 w-fit hover:scale-[1.03] active:scale-[0.97]"
                   
                   
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
