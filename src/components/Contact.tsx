'use client';

import { anim } from '@/lib/anim';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'muhammadrashedul8@gmail.com',
      link: 'mailto:muhammadrashedul8@gmail.com',
      color: 'text-cyan-400',
      bgGrad: 'bg-cyan-500/15'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+8801330803463',
      link: 'tel:+8801330803463',
      color: 'text-cyan-400',
      bgGrad: 'bg-cyan-500/15'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: 'https://www.google.com/maps/search/?api=1&query=Dhaka,+Bangladesh',
      color: 'text-cyan-400',
      bgGrad: 'bg-cyan-500/15'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'MD Rashedul Islam Junayed',
      link: 'https://www.linkedin.com/in/md-rashedul-islam-junayed-26bb4122a/',
      color: 'text-cyan-400',
      bgGrad: 'bg-cyan-500/15'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-28 lg:py-32 bg-[#0a0b0d] relative scroll-mt-20 sm:scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[128px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Gradient bordered container */}
        <div {...anim({"from": {"opacity": 0, "y": 40}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.7})}
         
         
         
         
        >
          <div className="rounded-3xl bg-gradient-to-b from-white/25 via-white/[0.06] to-white/[0.03] p-px overflow-hidden">
            <div className="rounded-3xl bg-[#0e1013] p-6 sm:p-10 lg:p-16">

              {/* Header */}
              <div className="text-center mb-9 sm:mb-10 lg:mb-14">
                <h2
                  className="text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] text-white mb-4" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.1})}
                 
                 
                 
                >
                  Let&apos;s build something <span className="text-cyan-400">reliable</span>
                </h2>
                <div
                  className="w-24 h-px bg-cyan-400/70 mx-auto rounded-full" {...anim({"from": {"width": 0}, "to": {"width": 96}, "scroll": true, "duration": 0.8, "delay": 0.2})}
                 
                 
                 
                />
                <p
                  className="text-[13px] sm:text-base lg:text-lg text-slate-400 mt-5 sm:mt-6 max-w-xl mx-auto" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.3})}
                 
                 
                 
                >
                  Ready to collaborate on your next project? Let&apos;s discuss how we can bring your ideas to life.
                </p>
              </div>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10 lg:mb-14">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group glass w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:translate-y-[-3px] transition-transform duration-200" {...anim({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, scroll: true, ...{ duration: 0.5, delay: 0.3 + index * 0.1 } })}
                   
                   
                   
                   
                  >
                    <div className={`w-12 h-12 ${info.bgGrad} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] sm:text-sm font-semibold text-slate-300 mb-0.5">{info.title}</h3>
                      <p className="text-[13px] sm:text-sm text-slate-500 group-hover:text-cyan-400 transition-colors leading-relaxed break-all sm:break-normal">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div
                className="text-center" {...anim({"from": {"opacity": 0, "y": 20}, "to": {"opacity": 1, "y": 0}, "scroll": true, "duration": 0.5, "delay": 0.7})}
               
               
               
              >
                <p className="text-[13px] sm:text-sm text-slate-400 mb-6">
                  Available for freelance opportunities and full-time positions
                </p>
                <a
                  href="mailto:muhammadrashedul8@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 sm:px-9 py-3.5 text-[13px] sm:text-sm font-semibold text-[#0a0b0d] transition-all duration-300 hover:bg-cyan-200 active:scale-[0.97]"
                 
                 
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
