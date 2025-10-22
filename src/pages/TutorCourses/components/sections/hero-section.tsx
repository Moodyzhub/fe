import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, XCircle } from 'lucide-react';

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
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
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
          <h1 className="text-4xl font-bold mb-4">Quản lý khóa học</h1>
          <p className="text-xl text-blue-100 mb-8">
            Theo dõi trạng thái và hiệu suất của các khóa học bạn đã tạo
          </p>
          
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{courseCount}</div>
                <div className="text-blue-200 text-sm">Tổng khóa học</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-blue-200 text-sm">Đã phê duyệt</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-blue-200 text-sm">Chờ duyệt</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-blue-200 text-sm">Từ chối</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;