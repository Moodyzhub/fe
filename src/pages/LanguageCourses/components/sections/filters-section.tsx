import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FiltersSectionProps {
  searchTerm: string;
  selectedLevel: string;
  selectedPrice: string;
  courseCount: number;
  onSearchChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

const FiltersSection = ({
  searchTerm,
  selectedLevel,
  selectedPrice,
  courseCount,
  onSearchChange,
  onLevelChange,
  onPriceChange
}: FiltersSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 items-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Search */}
          <div className="flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Tìm kiếm khóa học hoặc giáo viên..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Filters:</span>
            </div>
            
            <select
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select
              value={selectedPrice}
              onChange={(e) => onPriceChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Prices</option>
              <option value="Under 600K">Under 600K</option>
              <option value="600K-750K">600K - 750K</option>
              <option value="Above 750K">Above 750K</option>
            </select>

            <span className="text-sm text-gray-600">
              {courseCount} courses found
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltersSection;