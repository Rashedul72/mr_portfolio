import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Code, Brain, Globe } from 'lucide-react';

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
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

  const stats = [
    { icon: Calendar, label: 'Experience', value: '3 Years', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: Code, label: 'Projects', value: '15+', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: Globe, label: 'Technologies', value: '20+', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { icon: Award, label: 'Specializations', value: '4', color: 'text-orange-600', bgColor: 'bg-orange-100' }
  ];

  const skills = [
    { name: 'Full Stack Development', percentage: 95 },
    { name: 'Pixel-perfect UI', percentage: 95 },
    { name: 'IoT & AI Solutions', percentage: 85 },
    { name: 'Cloud Computing', percentage: 75 }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Who I Am</h3>
              </motion.div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                >
                  I'm a passionate software developer with expertise in full-stack development, 
                  IoT systems, and AI-driven analytics. I specialize in creating innovative solutions that bridge 
                  technology and real-world applications.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"
                >
                  With experience spanning e-commerce platforms, agricultural IoT systems and many more, 
                  I bring a diverse skill set to every project. I'm currently leading development at Better Emart 
                  while working on cross-platform mobile solutions.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"
                >
                  My passion lies in leveraging technology to solve complex problems, from optimizing agricultural 
                  processes with AI to creating seamless shopping experiences across multiple platforms.
                </motion.p>
              </div>
            </motion.div>

            {/* Skills Progress */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Core Competencies</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white mb-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h4 className="text-lg font-semibold">Location</h4>
                </div>
                <p className="text-blue-100">Baridhara J Block, Dhaka, Bangladesh</p>
                <p className="text-blue-100 text-sm mt-1">Available for remote work worldwide</p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Current Role</h4>
                </div>
                <p className="text-gray-700 font-semibold">Lead Developer</p>
                <p className="text-gray-600 text-sm mt-1">Leading development at Better Emart</p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Specializations</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-gray-700">Full Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    <span className="text-gray-700">Pixel-perfect UI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-gray-700">IoT Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-gray-700">AI & Machine Learning</span>
                  </div>
                  {/* <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    <span className="text-gray-700">Mobile App Development</span>
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 