'use client';

import { anim } from '@/lib/anim';
import { Calendar, ExternalLink, ArrowUpRight, ShoppingCart, Lock, GraduationCap, Award, CalendarCheck, Languages, Truck, Briefcase, Code2, Layers, Sparkles, Network, Smartphone, Boxes, Ticket, CreditCard, Ship, Globe2, ShieldCheck } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export default function Projects() {
  const projects = [
    {
      title: 'KnowledgeBeez',
      category: 'EdTech platform',
      description: 'A full-stack edtech platform with a multi-currency course catalog, SSLCommerz and Razorpay checkout, learner accounts with progress, quizzes, and verifiable certificates, CMS-driven marketing and blogs, and a role-based admin dashboard — live with real enrollments.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'SSLCommerz', 'Razorpay', 'Cloudflare R2', 'VPS'],
      image: '/images/knowledgebeez.webp',
      mockup: '/images/mockups/knowledgebeez.webp', // finished mockup picture; add one per project as they are made
      chips: [{icon:GraduationCap,title:'Course Catalog',sub:'Multi-currency courses'},{icon:Award,title:'Certificates',sub:'Verifiable & shareable'}],
      bgPosition: '85% 55%',
      liveUrl: 'https://knowledgebeez.com/',
      delivered: 'October 2026'
    },
    {
      title: 'Tomatungi Resort',
      category: 'Hospitality & booking',
      description: 'A full rebuild of the resort platform with modern booking, SSLCommerz payments, guest accounts, bilingual experience, and a complete admin dashboard — now live with real guest bookings on the existing domain.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'SSLCommerz', 'Coolify'],
      image: '/images/tomatungi.webp',
      mockup: '/images/mockups/tomatungi.webp',
      chips: [{icon:CalendarCheck,title:'Online Booking',sub:'Cottages & packages'},{icon:Languages,title:'Bilingual',sub:'English & বাংলা'}],
      bgPosition: '25% 30%',
      liveUrl: 'https://tomatungiresort.com/',
      delivered: 'August 2026'
    },
    {
      title: 'Hiramix E-Commerce',
      category: 'Retail & wholesale e-commerce',
      description: 'Retail and wholesale e-commerce with product search, wishlist, vouchers, loyalty points, payments, delivery integrations, multilingual support, inventory, invoicing, and admin operations.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Razorpay', 'Socket.IO', 'Coolify'],
      image: '/images/hiramix.my.webp',
      mockup: '/images/mockups/hiramix.my.webp',
      chips: [{icon:ShoppingCart,title:'Online Shopping',sub:'Premium foods & essentials'},{icon:Lock,title:'Secure Checkout',sub:'Cards, FPX & GrabPay'}],
      liveUrl: 'https://hiramix.my/',
      delivered: 'July 2026'
    },
    {
      title: 'Hiramix Corporate',
      category: 'Corporate platform',
      description: 'Corporate portfolio platform with product and brand management, careers, candidate management, wholesale information, content management, and a complete admin dashboard.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Razorpay', 'Socket.IO', 'Coolify'],
      image: '/images/hiramix.com.my.webp',
      mockup: '/images/mockups/hiramix.com.my.webp',
      chips: [{icon:Truck,title:'Wholesale & Distribution',sub:'Retail & business partners'},{icon:Briefcase,title:'Careers',sub:'Apply online'}],
      liveUrl: 'https://hiramix.com.my/',
      delivered: 'June 2026'
    },
    {
      title: 'Kryzotech Solutions',
      category: 'Company website',
      description: 'Software development company site — a sister concern of Kryzotech BD — showcasing services and company presence on a production-ready Next.js platform.',
      technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'JWT', 'Cloudflare R2', 'EPS Payment'],
      image: '/images/solutions_kryzotechbd.webp',
      mockup: '/images/mockups/solutions_kryzotechbd.webp',
      chips: [{icon:Code2,title:'Software Services',sub:'Web, apps & custom builds'},{icon:Layers,title:'Production-ready',sub:'Next.js platform'}],
      liveUrl: 'https://solutions.kryzotechbd.com/',
      delivered: 'April 2026'
    },
    {
      title: 'Kryzotech',
      category: 'Learning platform',
      description: 'A complete learning platform covering course discovery, workshops, enrollment, payments, learner management, certificates, content operations, and live support in one production-ready system.',
      technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'JWT', 'Cloudflare R2', 'EPS Payment', 'jsPDF', 'Quill'],
      image: '/images/kryzotechbd.webp',
      mockup: '/images/mockups/kryzotechbd.webp',
      chips: [{icon:GraduationCap,title:'Courses & Workshops',sub:'Discovery to enrollment'},{icon:Award,title:'Certificates',sub:'Learner management'}],
      liveUrl: 'https://www.kryzotechbd.com/',
      delivered: 'February 2026'
    },
    {
      title: 'SmartHRflow',
      category: 'AI hiring SaaS',
      description: 'An AI-powered HR hiring platform that reduces recruitment steps by 60% through intelligent CV parsing, automated assessments, and streamlined candidate management.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Nest.js', 'Vercel', 'OpenAI API'],
      image: '/images/smartHRflowV2.png',
      mockup: '/images/mockups/smartHRflowV2.webp',
      chips: [{icon:Sparkles,title:'AI CV Parsing',sub:'Instant candidate profiles'},{icon:Network,title:'60% Fewer Steps',sub:'Automated assessments'}],
      liveUrl: 'https://smarthrflow.com/',
      delivered: 'December 2025'
    },
    {
      title: 'Better E Net',
      category: 'Networking & IT services',
      description: 'A comprehensive networking and IT services platform with service management, network monitoring, and technical support.',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js'],
      image: '/images/betterenet.webp',
      mockup: '/images/mockups/betterenet.webp',
      chips: [{icon:Network,title:'Network Monitoring',sub:'Live service status'},{icon:ShieldCheck,title:'Tech Support',sub:'IT services management'}],
      liveUrl: 'https://betterenet.com/',
      delivered: 'April 2025'
    },
    {
      title: 'Better E Mart',
      category: 'E-commerce + mobile app',
      description: 'A comprehensive e-commerce platform with integrated dashboard, mobile app development, and real-time inventory management.',
      technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Expo', 'TypeScript'],
      image: '/images/better.jpeg',
      mockup: '/images/mockups/better.webp',
      chips: [{icon:Boxes,title:'Real-time Inventory',sub:'Integrated dashboard'},{icon:Smartphone,title:'Mobile App',sub:'React Native & Expo'}],
      liveUrl: 'https://betteremart.com/',
      delivered: 'February 2025'
    },
    {
      title: 'Kumira Guptachara Boat Ticketing',
      category: 'Online ticketing',
      description: 'A cutting-edge application demonstrating expertise in full-stack development and modern web technologies.',
      technologies: ['Next.js', 'SSL COMMERZ', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/kumira.webp',
      mockup: '/images/mockups/kumira.webp',
      chips: [{icon:Ticket,title:'Boat Ticketing',sub:'Book in minutes'},{icon:CreditCard,title:'Secure Payments',sub:'SSLCommerz'}],
      liveUrl: 'https://kumiraguptachara.com/',
      delivered: 'November 2024'
    },
    {
      title: 'Jafson Trading & Marine Services',
      category: 'Corporate website',
      description: 'An innovative project showcasing advanced web development skills and modern technology stack implementation.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/images/jafson.webp',
      mockup: '/images/mockups/jafson.webp',
      chips: [{icon:Ship,title:'Marine Services',sub:'Trading & logistics'},{icon:Globe2,title:'Corporate Site',sub:'Responsive & fast'}],
      liveUrl: 'https://www.jafsonmarine.com/',
      delivered: 'December 2023'
    }
  ];

  return (
    <section id="projects" className="relative scroll-mt-16 py-16 sm:py-28 lg:py-32 sm:scroll-mt-20">
      <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="mb-14 flex flex-col gap-5 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
          {...anim({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, scroll: true, duration: 0.7 })}
        >
          <div>
            <p className="eyebrow mb-4">Selected work · {projects.length} projects</p>
            <h2 className="text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] text-white">
              Products shipped to <span className="text-cyan-400">production</span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-slate-400 sm:text-base">
            E-commerce, learning platforms, booking systems and SaaS. Real products with real users, built end to end.
          </p>
        </div>

        <div className="divide-y divide-white/[0.07]">
          {projects.map((project, index) => {
            const flip = index % 2 !== 0;
            const shown = project.technologies.slice(0, 6);
            const extra = project.technologies.length - shown.length;
            return (
              <article
                key={project.title}
                className="group grid items-center gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-14 lg:py-20"
                {...anim({ from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 }, scroll: true, duration: 0.8 })}
              >
                {/* Visual */}
                <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="relative block overflow-hidden rounded-3xl border border-white/10 bg-[#0e1013] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-white/25"
                  >
                    <div className={`relative aspect-video transition-transform duration-700 ease-out group-hover:scale-[1.025]`}>
                      <ProjectMockup
                        src={project.image}
                        alt={project.title}
                        url={project.liveUrl}
                        chips={project.chips}
                        flip={flip}
                        photo={project.mockup}
                        bgPosition={project.bgPosition}
                      />
                    </div>
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0a0b0d] opacity-0 translate-y-1 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>

                {/* Story */}
                <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-display text-4xl italic text-cyan-300/80">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="eyebrow flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {project.delivered}
                    </span>
                  </div>
                  <p className="eyebrow mb-2 !text-cyan-300/80">{project.category}</p>
                  <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2rem]">{project.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">{project.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                    {shown.map((tech) => (
                      <li key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-300">
                        {tech}
                      </li>
                    ))}
                    {extra > 0 && (
                      <li className="rounded-full px-2 py-1 text-[11px] text-slate-500">+{extra} more</li>
                    )}
                  </ul>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 active:scale-[0.97]"
                  >
                    Visit live site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
