import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, Award, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const topTutors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    language: 'English',
    country: 'United States',
    flag: '🇺🇸',
    rating: 4.9,
    reviews: 1250,
    students: 15000,
    experience: '5 years',
    specialties: ['Business English', 'IELTS', 'Conversation'],
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 255000,
    availability: 'Available now',
    description: 'Certified English teacher specializing in business communication and IELTS preparation.',
    achievements: ['Top Rated', 'IELTS Expert']
  },
  {
    id: 2,
    name: 'Marie Dubois',
    language: 'French',
    country: 'France',
    flag: '🇫🇷',
    rating: 4.9,
    reviews: 890,
    students: 12000,
    experience: '6 years',
    specialties: ['DELF/DALF', 'Literature', 'Business French'],
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 280000,
    availability: 'Available now',
    description: 'French literature professor with expertise in exam preparation and business French.',
    achievements: ['Literature Expert', 'DELF Certified']
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    language: 'Japanese',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 4.9,
    reviews: 756,
    students: 9500,
    experience: '4 years',
    specialties: ['JLPT', 'Anime Culture', 'Business Japanese'],
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 320000,
    availability: 'Available in 1 hour',
    description: 'Japanese culture enthusiast teaching language through cultural immersion.',
    achievements: ['JLPT Expert', 'Cultural Specialist']
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    language: 'Spanish',
    country: 'Spain',
    flag: '🇪🇸',
    rating: 4.8,
    reviews: 645,
    students: 8900,
    experience: '5 years',
    specialties: ['Grammar', 'Pronunciation', 'Culture'],
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 220000,
    availability: 'Available in 2 hours',
    description: 'Native Spanish speaker passionate about sharing Spanish culture and language.',
    achievements: ['Grammar Master', 'Culture Expert']
  }
];

const TopTutors = () => {
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

  // Function để format giá VND với dấu chấm phân cách nghìn
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫';
  };

  return (
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="w-full px-8 lg:px-16">
          <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              <span>Top Rated Tutors</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Gặp gỡ các Giáo viên Hàng đầu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Học cùng những giáo viên bản ngữ được đánh giá cao nhất với kinh nghiệm và chuyên môn xuất sắc
            </p>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
          >
            {topTutors.map((tutor) => (
                <motion.div
                    key={tutor.id}
                    variants={fadeInUp}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                    <Link to={`/tutor/${tutor.id}`}>
                      <div className="relative">
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-600 transition-colors">
                            {tutor.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{tutor.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{tutor.country}</span>
                          <Clock className="w-4 h-4 text-muted-foreground ml-2" />
                          <span className="text-sm text-muted-foreground">{tutor.experience}</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {tutor.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {tutor.specialties.slice(0, 2).map((specialty, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                          ))}
                          {tutor.specialties.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{tutor.specialties.length - 2}
                              </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{tutor.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>{tutor.reviews}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-indigo-600">
                              {formatPrice(tutor.price)}  {/* SỬA: Format thành VND với dấu chấm (ví dụ: 255.000 ₫) */}
                            </div>
                            <div className="text-xs text-muted-foreground">/giờ</div>  {/* SỬA: Thay /hour thành /giờ */}
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tìm kiếm giáo viên phù hợp với bạn?
              </h3>
              <p className="text-muted-foreground mb-6">
                Khám phá hơn 5000+ giáo viên bản ngữ từ khắp nơi trên thế giới với nhiều chuyên môn khác nhau
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                  <Link to="/tutors">
                    Xem tất cả giáo viên
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default TopTutors;