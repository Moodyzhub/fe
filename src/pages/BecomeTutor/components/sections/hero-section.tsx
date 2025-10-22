import { motion } from 'framer-motion';
// import { Languages } from 'lucide-react';

const HeroSection = () => {
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
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Become a Language Tutor
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Share your native language with students worldwide and earn money doing what you love. 
            Join thousands of tutors already teaching on LinguaHub.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            variants={fadeInUp}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;