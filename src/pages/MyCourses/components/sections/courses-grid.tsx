import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, Star, CreditCard as Edit, Trash2, Eye, MoreVertical, Play, Pause, AlertCircle, TrendingUp } from 'lucide-react';
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
  students: number;
  rating: number;
  reviews: number;
  totalLessons: number;
  completedLessons: number;
  revenue: number;
  isActive: boolean;
}

interface CoursesGridProps {
  courses: Course[];
}

const CoursesGrid = ({ courses }: CoursesGridProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);

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

  const formatRevenue = (revenue: number) => {
    if (revenue >= 1000000) {
      return `${(revenue / 1000000).toFixed(1)}M`;
    }
    return formatPrice(revenue);
  };

  const handleToggleActive = (courseId: string, currentStatus: boolean) => {
    console.log(`Toggle course ${courseId} from ${currentStatus} to ${!currentStatus}`);
    // TODO: Implement toggle active status
  };

  const handleEditCourse = (courseId: string) => {
    console.log('Edit course:', courseId);
    // TODO: Navigate to edit course page
  };

  const handleDeleteCourse = (courseId: string) => {
    console.log('Delete course:', courseId);
    setShowDeleteModal(null);
    // TODO: Implement delete course
    alert(`Đã xóa khóa học ${courseId}`);
  };

  const handleViewAnalytics = (courseId: string) => {
    console.log('View analytics for course:', courseId);
    // TODO: Navigate to course analytics
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
            <p className="text-gray-600 mb-8">Bạn chưa có khóa học nào được phê duyệt hoặc không tìm thấy kết quả phù hợp</p>
            <Button asChild>
              <Link to="/create-course">
                Tạo khóa học mới
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
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
                      <Badge className={course.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {course.isActive ? 'Đang hoạt động' : 'Tạm dừng'}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{course.students} học viên</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating} ({course.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-3 h-3" />
                        <span>{formatPrice(course.price)}/giờ</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{formatRevenue(course.revenue)}</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Tiến độ bài học</span>
                        <span>{course.completedLessons}/{course.totalLessons}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleViewAnalytics(course.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Xem
                        </Button>
                        
                        <Button
                          onClick={() => handleEditCourse(course.id)}
                          size="sm"
                          className="flex-1"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Sửa
                        </Button>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleToggleActive(course.id, course.isActive)}
                          variant={course.isActive ? "secondary" : "default"}
                          size="sm"
                          className="flex-1"
                        >
                          {course.isActive ? (
                            <>
                              <Pause className="w-4 h-4 mr-1" />
                              Tạm dừng
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-1" />
                              Kích hoạt
                            </>
                          )}
                        </Button>
                        
                        <Button
                          onClick={() => setShowDeleteModal(course.id)}
                          variant="destructive"
                          size="sm"
                          className="flex-1"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Xác nhận xóa khóa học</h3>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa khóa học này? Hành động này không thể hoàn tác.
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={() => setShowDeleteModal(null)}
                variant="outline"
                className="flex-1"
              >
                Hủy
              </Button>
              <Button
                onClick={() => handleDeleteCourse(showDeleteModal)}
                variant="destructive"
                className="flex-1"
              >
                Xóa
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CoursesGrid;