import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'muhammadrashedul8@gmail.com',
      link: 'mailto:muhammadrashedul8@gmail.com',
      color: 'text-cyan-400',
      bgGrad: 'from-cyan-500/20 to-cyan-500/5'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+8801330803463',
      link: 'tel:+8801330803463',
      color: 'text-emerald-400',
      bgGrad: 'from-emerald-500/20 to-emerald-500/5'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#',
      color: 'text-violet-400',
      bgGrad: 'from-violet-500/20 to-violet-500/5'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'MD Rashedul Islam Junayed',
      link: 'https://www.linkedin.com/in/md-rashedul-islam-junayed-26bb4122a/',
      color: 'text-blue-400',
      bgGrad: 'from-blue-500/20 to-blue-500/5'
    }
  ];

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[#082c47] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[128px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Gradient bordered container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-3xl bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-rose-500/40 p-px overflow-hidden">
            <div className="rounded-3xl bg-[#0a3355] p-6 sm:p-10 lg:p-16">

              {/* Header */}
              <div className="text-center mb-9 sm:mb-10 lg:mb-14">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Let&apos;s <span className="gradient-text">Connect</span>
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.p
                  className="text-[13px] sm:text-base lg:text-lg text-slate-400 mt-5 sm:mt-6 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Ready to collaborate on your next project? Let&apos;s discuss how we can bring your ideas to life.
                </motion.p>
              </div>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10 lg:mb-14">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group glass w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.bgGrad} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] sm:text-sm font-semibold text-slate-300 mb-0.5">{info.title}</h3>
                      <p className="text-[13px] sm:text-sm text-slate-500 group-hover:text-cyan-400 transition-colors leading-relaxed break-all sm:break-normal">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-[13px] sm:text-sm text-slate-400 mb-6">
                  Available for freelance opportunities and full-time positions
                </p>
                <motion.a
                  href="mailto:muhammadrashedul8@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 sm:px-8 py-3.5 rounded-xl text-[13px] sm:text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
