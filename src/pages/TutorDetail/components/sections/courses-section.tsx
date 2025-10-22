
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoursesSectionProps {
  courses: any[];
}

const CoursesSection = ({ courses }: CoursesSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <Link to={`/course/${course.id}`}>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{course.students}</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-blue-600">{formatPrice(course.price)}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{formatPrice(course.originalPrice)}</span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesSection;