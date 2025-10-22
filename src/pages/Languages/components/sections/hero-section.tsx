import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold mb-6">Choose Your Language Journey</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive language programs designed to help you achieve certification 
            and fluency with native speakers from around the world.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-200">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-200">Native Tutors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-blue-200">Students</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;