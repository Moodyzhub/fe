import React from 'react';
import { motion } from 'framer-motion';
import { Video, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OneOnOneAd = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const packages = [
    {
      name: 'Trial Lesson',
      price: '300.000đ',
      originalPrice: '500.000đ',
      duration: '30 phút',
      features: ['Đánh giá trình độ', 'Tư vấn lộ trình', 'Trải nghiệm phương pháp'],
      popular: false
    },
    {
      name: 'Basic Package',
      price: '2.400.000đ',
      originalPrice: '3.000.000đ',
      duration: '8 buổi học',
      features: ['1-on-1 riêng tư', 'Tài liệu cá nhân hóa', 'Theo dõi tiến độ', 'Hỗ trợ 24/7'],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '4.500.000đ',
      originalPrice: '6.000.000đ',
      duration: '16 buổi học',
      features: ['Tất cả tính năng Basic', 'Mock test định kỳ', 'Chứng chỉ hoàn thành', 'Đảm bảo kết quả'],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full px-8 lg:px-16">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            <span>1-on-1 Learning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Học 1-1 với Giáo viên Bản ngữ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trải nghiệm học tập cá nhân hóa hoàn toàn với giáo viên bản ngữ được chứng nhận
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: Users, title: '1-1 Riêng tư', desc: 'Học hoàn toàn riêng tư với giáo viên' },
            { icon: Clock, title: '24/7 Linh hoạt', desc: 'Đặt lịch học theo thời gian của bạn' },
            { icon: Star, title: '100% Tập trung', desc: 'Toàn bộ sự chú ý dành cho bạn' }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Packages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Card className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    Phổ biến nhất
                  </div>
                )}
                <CardContent className={`p-6 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                        : ''
                    }`}
                  >
                    Chọn gói học
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OneOnOneAd;