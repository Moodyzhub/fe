import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, DollarSign, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  courseCount: number;
}

const HeroSection = ({ courseCount }: HeroSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Khóa học của tôi</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Quản lý khóa học đã phê duyệt</h1>
          <p className="text-xl text-green-100 mb-8">
            Chỉnh sửa, theo dõi và quản lý các khóa học đang hoạt động
          </p>
          
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{courseCount}</div>
                <div className="text-green-200 text-sm">Khóa học hoạt động</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">229</div>
                <div className="text-green-200 text-sm">Tổng học viên</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">147M</div>
                <div className="text-green-200 text-sm">Doanh thu (VNĐ)</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-green-200 text-sm">Đánh giá trung bình</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;