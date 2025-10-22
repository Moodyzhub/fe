import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, BookOpen, Video, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TutorHeroSectionProps {
  tutor: any;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);  // SỬA: Bỏ * 1000 nếu price đã là số đầy đủ (ví dụ: 255000), không nhân thêm
};

const TutorHeroSection = ({ tutor }: TutorHeroSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
      <section className="relative">
        <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
          <img
              src={tutor.coverImage}
              alt="Background"
              className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative -mt-32">
          <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                  <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{tutor.name}</h1>
                      <span className="text-2xl">{tutor.flag}</span>
                    </div>
                    <p className="text-lg text-blue-600 font-medium mb-2">{tutor.language} Native Speaker</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{tutor.country}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{tutor.rating}</span>
                        <span className="text-gray-500">({tutor.reviews.length} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">{tutor.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">{tutor.lessonsCompleted} lessons</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialties.map((specialty: string, index: number) => (
                        <Badge
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">About Me</h3>
                  <p className="text-gray-700 leading-relaxed">{tutor.description}</p>
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-green-500">
                        {formatPrice(tutor.price)}  {/* SỬA: Dùng formatPrice với locale 'vi-VN' để hiển thị 255.000 ₫ */}
                      </span>
                      <span className="text-gray-500">/giờ</span>
                    </div>
                    <p className="text-sm text-gray-600">Bắt đầu từ buổi học thử</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                      <Video className="w-5 h-5" />
                      <span>Đặt Buổi Học Thử</span>
                    </Button>
                    <Button variant="outline" className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Gửi Tin Nhắn</span>
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>Thời gian phản hồi: Thường trong vòng 2 giờ</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Có sẵn hôm nay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default TutorHeroSection;