import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FiltersSectionProps {
  searchTerm: string;
  selectedStatus: string;
  courseCount: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const FiltersSection = ({
  searchTerm,
  selectedStatus,
  courseCount,
  onSearchChange,
  onStatusChange
}: FiltersSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const statuses = [
    { value: 'All', label: 'Tất cả trạng thái' },
    { value: 'approved', label: 'Đã phê duyệt' },
    { value: 'pending', label: 'Chờ phê duyệt' },
    { value: 'under_review', label: 'Đang xem xét' },
    { value: 'rejected', label: 'Từ chối' }
  ];

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Left side - Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center flex-1">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Tìm kiếm khóa học..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Trạng thái:</span>
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          </div>

          {/* Right side - Create Course Button */}
          <div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/create-course">
                <Plus className="w-4 h-4 mr-2" />
                Tạo khóa học mới
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltersSection;