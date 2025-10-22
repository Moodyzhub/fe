import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: {
    name: string;
    flag: string;
    image: string;
  };
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
      <img
        src={language.image}
        alt={language.name}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 h-full flex items-center">
        <motion.div 
          className="text-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" asChild className="text-white hover:bg-white/20">
              <Link to="/languages">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Languages
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-6xl">{language.flag}</span>
            <div>
              <h1 className="text-4xl font-bold">{language.name} Courses</h1>
              <p className="text-xl text-blue-100">Learn with native speakers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;