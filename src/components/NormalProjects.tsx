import { motion } from 'framer-motion';

export default function NormalProjects() {
  return (
    <section id="normal-projects" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            More <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A curated selection of smaller builds and practical experiments that reflect day-to-day problem solving.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="col-span-full">
            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
              <p className="text-slate-400 text-base sm:text-lg">
                More projects coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
