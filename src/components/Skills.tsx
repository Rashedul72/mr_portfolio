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
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
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
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
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
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Smart systems and machine learning',
      skills: [
        { name: 'IoT Sensors & Systems', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'AI Analytics', level: 82 },
        { name: 'Geofencing', level: 78 },
        { name: 'Data Processing', level: 85 }
      ]
    },
    {
      title: 'Mobile & Cloud',
      icon: Smartphone,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Cross-platform development and cloud services',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Expo Framework', level: 80 },
        { name: 'Cloud Computing', level: 78 },
        { name: 'PHP', level: 75 },
        { name: 'Mobile UI/UX', level: 82 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) + 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Additional Technologies
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
              { name: 'Supabase', icon: Database, color: 'text-green-600' },
              { name: 'Firebase', icon: Zap, color: 'text-orange-500' },
              { name: 'PostgreSQL', icon: Database, color: 'text-blue-500' },
              { name: 'Figma', icon: Palette, color: 'text-purple-600' },
              { name: 'Vercel', icon: Cloud, color: 'text-black' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-2`} />
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 