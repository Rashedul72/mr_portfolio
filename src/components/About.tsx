import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Code, Brain, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Calendar, label: 'Experience', value: '3 Years', color: 'text-cyan-400' },
    { icon: Code, label: 'Projects', value: '15+', color: 'text-emerald-400' },
    { icon: Globe, label: 'Technologies', value: '20+', color: 'text-violet-400' },
    { icon: Award, label: 'Specializations', value: '4', color: 'text-amber-400' }
  ];

  const skills = [
    { name: 'Full Stack Development', percentage: 95 },
    { name: 'Pixel-perfect UI', percentage: 95 },
    { name: 'IoT & AI Solutions', percentage: 85 },
    { name: 'Cloud Computing', percentage: 75 }
  ];

  const cardBase = "bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300";

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a] relative scroll-mt-16 sm:scroll-mt-20">
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
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">

          {/* Who I Am - large card */}
          <motion.div
            className={`col-span-2 lg:row-span-3 ${cardBase} p-6 sm:p-8`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p className="border-l-2 border-cyan-500/40 pl-4">
                I&apos;m a passionate software developer with expertise in full-stack development,
                IoT systems, and AI-driven analytics. I specialize in creating innovative solutions that bridge
                technology and real-world applications.
              </p>
              <p className="border-l-2 border-violet-500/40 pl-4">
                With experience spanning e-commerce platforms, agricultural IoT systems and many more,
                I bring a diverse skill set to every project. I&apos;m currently leading development at Better Emart
                while working on cross-platform mobile solutions.
              </p>
              <p className="border-l-2 border-rose-500/40 pl-4">
                My passion lies in leveraging technology to solve complex problems, from optimizing agricultural
                processes with AI to creating seamless shopping experiences across multiple platforms.
              </p>
            </div>
          </motion.div>

          {/* 4 Stat Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`${cardBase} p-5 flex flex-col items-center justify-center text-center group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <stat.icon className={`w-7 h-7 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
              <span className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</span>
            </motion.div>
          ))}

          {/* Location */}
          <motion.div
            className={`col-span-2 ${cardBase} p-5 sm:p-6 bg-gradient-to-br from-cyan-500/[0.06] to-violet-500/[0.06]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base">Baridhara J Block, Dhaka, Bangladesh</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Available for remote work worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Current Role */}
          <motion.div
            className={`col-span-1 lg:col-span-2 ${cardBase} p-5 sm:p-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base">Lead Developer</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Leading development at Better Emart</p>
              </div>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            className={`col-span-1 lg:col-span-2 ${cardBase} p-5 sm:p-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                {[
                  { label: 'Full Stack Development', dot: 'bg-cyan-400' },
                  { label: 'Pixel-perfect UI', dot: 'bg-rose-400' },
                  { label: 'IoT Solutions', dot: 'bg-emerald-400' },
                  { label: 'AI & Machine Learning', dot: 'bg-violet-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 ${item.dot} rounded-full`} />
                    <span className="text-slate-300 text-xs sm:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Competencies - full width */}
          <motion.div
            className={`col-span-2 lg:col-span-4 ${cardBase} p-6 sm:p-8`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-white mb-5">Core Competencies</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/[0.06] rounded-full h-1.5">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-violet-500 h-1.5 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
