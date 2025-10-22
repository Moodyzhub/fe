import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '100K+',
    label: 'Happy Students',
    description: 'Learning languages',
  },
  {
    icon: BookOpen,
    number: '5000+',
    label: 'Native Tutors',
    description: 'From 50+ countries',
  },
  {
    icon: Award,
    number: '50+',
    label: 'Languages',
    description: 'Available to learn',
  },
  {
    icon: Clock,
    number: '1M+',
    label: 'Lessons',
    description: 'Successfully completed',
  },
];

const FloatingElements = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="w-full px-8 lg:px-16">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose LinguaHub?</h2>
          <p className="text-lg text-gray-300">Join thousands of successful learners worldwide</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-400 mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FloatingElements;