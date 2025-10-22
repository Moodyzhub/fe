import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  itemCount: number;
}

const HeroSection = ({ itemCount }: HeroSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-4">My Wishlist</h1>
          <p className="text-xl text-blue-100 mb-8">
            Your saved courses and lessons
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-6 h-6 fill-red-400 text-red-400" />
            <span className="text-lg">{itemCount} items saved</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;