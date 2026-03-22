import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Award, Globe } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Better E Mart',
      website: 'https://betteremart.com/',
      location: 'Chittagong, Bangladesh',
      role: 'Lead Developer',
      period: 'November 2024 – Present',
      description: 'Leading e-commerce platform development with integrated dashboard and mobile solutions.',
      achievements: [
        'Led the development of an e-commerce website with an integrated dashboard, overseeing both the technical aspects and team coordination.',
        'Conducted market analysis to identify consumer demand for imported goods, ensuring alignment with customer needs.',
        'Currently working on mobile application development for both iOS and Android platforms using React Native with Expo, aiming to provide a seamless shopping experience across devices.'
      ],
      technologies: ['React', 'Next.js', 'React Native', 'Expo', 'Express.js', 'MongoDB', 'Cloudflare', 'Image Bucket']
    },
    {
      company: 'SystemSage Solutions Sdn. Bhd',
      website: 'https://systemsage.tech/',
      location: 'Kuala Lumpur, Malaysia',
      role: 'Software Developer',
      period: 'October 2023 – November 2024',
      description: 'IoT and AI-driven agricultural technology solutions for sustainable farming.',
      achievements: [
        'Developed an IoT-based agricultural system integrating industrial-grade sensors for real-time monitoring and automation.',
        'Implemented AI-driven analytics and cloud computing to optimize crop yields and resource management.',
        'Incorporated geofencing technology for improved farm boundary management and automated operations.',
        'Utilized model training for detecting palm fruit ripeness to enhance harvesting efficiency and quality control.'
      ],
      technologies: ['IoT Sensors', 'Python', 'AI/ML', 'Cloud Computing', 'Geofencing', 'Data Analytics', 'Arduino','Raspberry Pi','ESP32','ESP8266','NodeMCU','MQTT']
    },
    {
      company: 'Gifted Capital',
      website: 'https://gifted-cap.com/',
      location: 'Kuala Lumpur, Malaysia',
      role: 'Data Scientist Intern & Part-Timer',
      period: 'September 2022 - April 2023',
      description: 'Financial technology solutions for global IPO access and capital markets.',
      achievements: [
        'Leave Approval Form: Developed a system for employees to submit leave requests, automatically approved if submitted 7 days in advance, and pending boss approval if within 6 days.',
        'Auto-Generated Calendar: Created a tool allowing users to download a personalized company calendar by entering financial details, which is then emailed to both the user and business owner.',
        'Stock Trading Data Download: Built a feature that enables users to download Apple stock data in CSV format by specifying start and end dates, with automatic email notifications.'
      ],
      technologies: ['Python', 'Data Processing', 'Email Automation', 'CSV APIs', 'Financial APIs']
    },
    {
      company: 'Alva Productions',
      website: 'https://www.alvaproductions.com.my/',
      location: 'Kuala Lumpur, Malaysia',
      role: 'Application Developer Intern',
      period: 'September 2021 - December 2021',
      description: 'Award-winning media company specializing in game development and mobile applications.',
      achievements: [
        'Dictionary App for Android: Developed an Android app using Android Studio, providing users with a fast and easy way to look up words and their meanings.'
      ],
      technologies: ['Android Studio', 'Java', 'Mobile Development', 'UI/UX Design']
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a] relative scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
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
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-base sm:text-lg text-slate-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A journey through diverse roles in software development, IoT solutions, and financial technology
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent" />

          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  className="relative pl-10 lg:pl-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-6">
                    <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_15px_rgba(34,211,238,0.4)] ring-4 ring-[#0a0a1a]" />
                  </div>

                  {/* Card */}
                  <div className={`lg:w-[calc(50%-2.5rem)] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <motion.div
                      className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-5 sm:p-6 lg:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                      whileHover={{ y: -4 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.company}</h3>
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-[0_0_12px_rgba(34,211,238,0.15)] w-fit">
                          <Award className="w-3 h-3" />
                          {exp.role}
                        </span>
                      </div>

                      {/* Website */}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors text-sm mb-2 break-all"
                      >
                        <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                        {exp.website}
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                      </div>

                      <p className="text-slate-400 mb-4 italic text-sm">&quot;{exp.description}&quot;</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/[0.06] text-cyan-300/80 px-2 py-0.5 rounded-md text-xs font-medium border border-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
