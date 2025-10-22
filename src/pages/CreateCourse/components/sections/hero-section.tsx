
import { motion } from 'framer-motion';
import {  Plus } from 'lucide-react';//BookOpen

const HeroSection = () => {
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
            <Plus className="w-4 h-4" />
            <span>Tạo khóa học mới</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Tạo khóa học của bạn</h1>
          <p className="text-xl text-blue-100 mb-8">
            Chia sẻ kiến thức và kinh nghiệm của bạn với học viên trên toàn thế giới
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-blue-200">Học viên</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-200">Khóa học</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-200">Ngôn ngữ</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;