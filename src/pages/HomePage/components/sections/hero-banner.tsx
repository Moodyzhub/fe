import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroBanner = () => {
  const [searchType, setSearchType] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleSearch = () => {
    if (searchType === 'tutors') {
      window.location.href = `/tutors?search=${encodeURIComponent(searchTerm)}`;
    } else {
      window.location.href = `/languages?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-24">
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-left"
              variants={fadeInUp}
            >
              Learn Languages with 
              <span className="text-primary"> Native Speakers</span> Worldwide
            </motion.h1>
            <motion.p 
                className="text-lg text-muted-foreground mb-8 text-left"
              variants={fadeInUp}
            >
              Kết nối với giáo viên bản ngữ được chứng nhận và thành thạo bất kỳ ngôn ngữ nào thông qua các bài học 1-1 được cá nhân hóa.
            </motion.p>

            {/* Search bar with filters */}
            <motion.div 
                className="relative mb-8"
              variants={fadeInUp}
            >
                <div className="flex gap-0">
                {/* Filter Dropdown */}
                  <div className="relative flex-shrink-0">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-l-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[140px] h-12 border-r-0"
                  >
                    <option value="courses">Khóa học</option>
                    <option value="tutors">Giảng viên</option>
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Search Input */}
                  <div className="flex flex-1">
                  <Input
                    type="text"
                    placeholder={searchType === 'tutors' ? 'Tìm giảng viên...' : 'Tìm khóa học...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 rounded-none border-r-0 h-12"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    onClick={handleSearch}
                      className="rounded-l-none rounded-r-lg h-12 px-6"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
                className="flex flex-wrap justify-start gap-8"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (2.5k đánh giá)</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">50k+</span> Học viên
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">5k+</span> Giảng viên
              </div>
            </motion.div>
          </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online language learning"
                className="w-full h-auto max-h-80 object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating stats */}
              <div className="absolute -bottom-2 -left-2 bg-white p-2 rounded-lg shadow-md border">
                <div className="text-xl font-bold text-blue-600">5000+</div>
                <div className="text-xs text-gray-600">Giáo viên</div>
              </div>
              <div className="absolute -top-2 -right-2 bg-white p-2 rounded-lg shadow-md border">
                <div className="text-xl font-bold text-blue-600">100K+</div>
                <div className="text-xs text-gray-600">Học viên</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;