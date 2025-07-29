import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'muhammadrashedul8@gmail.com',
      link: 'mailto:muhammadrashedul8@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+8801330803463',
      link: 'tel:+8801330803463',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chittagong, Bangladesh',
      link: '#',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'MD Rashedul Islam Junayed',
      link: 'https://www.linkedin.com/in/md-rashedul-islam-junayed-26bb4122a/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
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
            Let's Connect
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
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className={`w-6 h-6 ${info.color}`} />
              </motion.div>
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.title}
              </motion.h3>
              <motion.a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
              >
                {info.value}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
        

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Available for freelance opportunities and full-time positions
          </motion.p>
          <motion.a
            href="mailto:muhammadrashedul8@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 