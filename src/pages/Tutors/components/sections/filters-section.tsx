import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface FiltersSectionProps {
  selectedLanguage: string;
  priceRange: string;
  onLanguageChange: (language: string) => void;
  onPriceChange: (price: string) => void;
  tutorCount: number;
}

const FiltersSection = ({ 
  selectedLanguage, 
  priceRange, 
  onLanguageChange, 
  onPriceChange, 
  tutorCount 
}: FiltersSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const languages = ['All', 'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];
  const priceRanges = ['All', '$15-25', '$25-35', '$35+'];

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="flex flex-wrap items-center gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters:</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Language:</label>
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Price:</label>
            <select
              value={priceRange}
              onChange={(e) => onPriceChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div className="text-sm text-gray-600">
            {tutorCount} tutors found
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltersSection;