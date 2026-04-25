import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#061f35] text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-56 h-56 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-violet-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold shimmer-text tracking-wide">MR Portfolio</p>
            <p className="text-[13px] text-slate-400 mt-1">
              Building delightful, scalable digital products.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="inline-flex items-center justify-center sm:justify-end gap-1.5 text-[13px] text-slate-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-400" /> by Junayed
            </p>
            <p className="text-[13px] text-slate-500 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
