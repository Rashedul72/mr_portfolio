import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Brain,
  Database,
  Globe,
  Smartphone,
  Zap,
  GitBranch,
  Cloud,
  Palette
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      iconColor: 'text-cyan-400',
      bgGrad: 'from-cyan-500/20 to-cyan-500/5',
      accentColor: 'from-cyan-400 to-cyan-600',
      fillColor: 'from-cyan-500/15 to-cyan-500/5',
      description: 'Modern web technologies and frameworks',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Pixel-perfect UI', level: 95 },
        { name: 'JavaScript (ES6+)', level: 92 }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Cpu,
      iconColor: 'text-emerald-400',
      bgGrad: 'from-emerald-500/20 to-emerald-500/5',
      accentColor: 'from-emerald-400 to-emerald-600',
      fillColor: 'from-emerald-500/15 to-emerald-500/5',
      description: 'Server-side development and database management',
      skills: [
        { name: 'Node.js & Express', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'Supabase', level: 70 },
      ]
    },
    {
      title: 'IoT & AI Solutions',
      icon: Brain,
      iconColor: 'text-violet-400',
      bgGrad: 'from-violet-500/20 to-violet-500/5',
      accentColor: 'from-violet-400 to-violet-600',
      fillColor: 'from-violet-500/15 to-violet-500/5',
      description: 'Smart systems and machine learning',
      skills: [
        { name: 'IoT Sensors & Systems', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'AI Analytics', level: 82 },
        { name: 'Geofencing', level: 78 },
        { name: 'Data Processing', level: 85 }
      ]
    }
  ];

  const marqueeItems = [
    { name: 'Git', icon: GitBranch, color: 'text-amber-400' },
    { name: 'Supabase', icon: Database, color: 'text-emerald-400' },
    { name: 'Firebase', icon: Zap, color: 'text-amber-500' },
    { name: 'PostgreSQL', icon: Database, color: 'text-cyan-400' },
    { name: 'Figma', icon: Palette, color: 'text-violet-400' },
    { name: 'Vercel', icon: Cloud, color: 'text-white' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-[#082c47] relative scroll-mt-16 sm:scroll-mt-20">
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
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative glass rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className={`h-1 bg-gradient-to-r ${category.accentColor}`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.bgGrad} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500">{category.description}</p>
                  </div>
                </div>

                {/* Skill rows with background fill */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative overflow-hidden rounded-lg bg-white/[0.03] border border-white/[0.04]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.06) }}
                    >
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.fillColor} rounded-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.08) + 0.3 }}
                      />
                      <div className="relative flex items-center justify-between px-4 py-2.5">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Tech Marquee */}
        <motion.div
          className="relative mt-16 py-6 border-y border-white/[0.04] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#082c47] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#082c47] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 animate-marquee w-max">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-base font-medium text-slate-500">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
