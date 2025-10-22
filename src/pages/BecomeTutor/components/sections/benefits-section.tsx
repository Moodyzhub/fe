import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Users, Star } from 'lucide-react';

const BenefitsSection = () => {
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

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn $15-50/hour',
      description: 'Set your own rates and earn competitive income teaching your native language'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work when you want, from anywhere in the world'
    },
    {
      icon: Users,
      title: 'Global Students',
      description: 'Connect with learners from over 100 countries'
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Grow your teaching profile with student reviews and ratings'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Teach with LinguaHub?</h2>
          <p className="text-lg text-gray-600">Join our community and enjoy these amazing benefits</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;