import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileCheck, AlertCircle } from 'lucide-react';

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
    <section className="bg-gradient-to-r from-orange-600 to-red-700 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center text-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Chờ phê duyệt</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Khóa học chờ phê duyệt</h1>
          <p className="text-xl text-orange-100 mb-8">
            Xem xét và phê duyệt các khóa học mới được tạo bởi giáo viên
          </p>
          
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{courseCount}</div>
                <div className="text-orange-200 text-sm">Khóa học chờ duyệt</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-orange-200 text-sm">Đang xem xét</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">2-3</div>
                <div className="text-orange-200 text-sm">Ngày xử lý</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;