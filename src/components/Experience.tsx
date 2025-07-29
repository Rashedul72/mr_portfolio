import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Award, Globe } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Better E Mart',
      website: 'https://betteremart.com/',
      location: 'Chittagong, Bangladesh',
      role: 'Co-Founder & Developer',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A journey through diverse roles in software development, IoT solutions, and financial technology
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-6 sm:space-y-8 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Company Header */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <motion.h3
                        className="text-lg sm:text-xl font-bold text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                      >
                        {exp.company}
                      </motion.h3>
                    </div>
                    
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    >
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-semibold text-xs sm:text-sm">{exp.role}</span>
                    </motion.div>
                  </div>
                  
                  {/* Website URL */}
                  <motion.div
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <Globe className="w-4 h-4 text-blue-600" />
                    <motion.a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base break-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {exp.website}
                    </motion.a>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Company Description */}
              <motion.p
                className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                "{exp.description}"
              </motion.p>

              {/* Technologies Used */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Key Achievements:</h4>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + achievementIndex * 0.1 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 