import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FiltersSectionProps {
  searchTerm: string;
  selectedCategory: string;
  selectedStatus: string;
  courseCount: number;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const FiltersSection = ({
  searchTerm,
  selectedCategory,
  selectedStatus,
  courseCount,
  onSearchChange,
  onCategoryChange,
  onStatusChange
}: FiltersSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = ['All', 'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Italian'];
  const statuses = [
    { value: 'All', label: 'Tất cả trạng thái' },
    { value: 'pending', label: 'Chờ phê duyệt' },
    { value: 'under_review', label: 'Đang xem xét' },
    { value: 'approved', label: 'Đã phê duyệt' },
    { value: 'rejected', label: 'Từ chối' }
  ];

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
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Tìm kiếm khóa học hoặc giáo viên..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Bộ lọc:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'Tất cả ngôn ngữ' : category}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>

            <span className="text-sm text-gray-600">
              {courseCount} khóa học
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltersSection;