import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, Calendar, Star, Eye, CreditCard as Edit, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  createdAt: string;
  status: string;
  students: number;
  rating: number;
  reviews: number;
  rejectionReason?: string;
}

interface CoursesGridProps {
  courses: Course[];
}

const CoursesGrid = ({ courses }: CoursesGridProps) => {
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Chờ phê duyệt
          </Badge>
        );
      case 'under_review':
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Eye className="w-3 h-3 mr-1" />
            Đang xem xét
          </Badge>
        );
      case 'approved':
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Đã phê duyệt
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Từ chối
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleViewCourse = (courseId: string) => {
    console.log('View course:', courseId);
    // TODO: Navigate to course detail page
  };

  if (courses.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div 
            className="text-center py-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Không có khóa học nào</h2>
            <p className="text-gray-600 mb-8">Bạn chưa tạo khóa học nào hoặc không tìm thấy kết quả phù hợp</p>
            <Button asChild>
              <Link to="/create-course">
                Tạo khóa học đầu tiên
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(course.status)}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{formatPrice(course.price)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students} học viên</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{course.rating > 0 ? `${course.rating} (${course.reviews})` : 'Chưa có đánh giá'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Tạo: {formatDate(course.createdAt)}</span>
                    </div>
                  </div>

                  {/* Rejection Reason */}
                  {course.status === 'rejected' && course.rejectionReason && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-xs text-red-700">
                        <strong>Lý do từ chối:</strong> {course.rejectionReason}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleViewCourse(course.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Xem
                      </Button>
                      
                      <Button
                        asChild
                        size="sm"
                        className="flex-1"
                        disabled={course.status === 'under_review'}
                      >
                        <Link to={`/my-courses/${course.id}/edit`}>
                          <Edit className="w-4 h-4 mr-1" />
                          Sửa
                        </Link>
                      </Button>
                    </div>
                    
                    {course.status === 'approved' && (
                      <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        <Link to={`/my-courses/${course.id}`}>
                          Quản lý khóa học
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesGrid;