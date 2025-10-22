
import { motion } from 'framer-motion';
import { Star, Clock, Users, Award, Play, BookOpen, CheckCircle, Globe, Calendar } from 'lucide-react';

interface CourseHeroSectionProps {
  course: any;
}

const CourseHeroSection = ({ course }: CourseHeroSectionProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price * 1000);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {course.language} {course.instructor.flag}
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {course.level}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{course.description}</p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-blue-200">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-200" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-200" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">{formatPrice(course.price )}</span>
                {/*<span className="text-blue-200">/hour</span>*/}
                <span className="text-blue-300 line-through">{formatPrice(course.originalPrice )}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
              <button className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full hover:bg-opacity-30 transition-all">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;