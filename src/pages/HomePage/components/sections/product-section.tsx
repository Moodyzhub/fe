
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'English Conversation Mastery',
    instructor: 'Sarah Johnson (Native Speaker)',
    rating: 4.9,
    students: 1250,
    duration: '8 Curriculum',
    price: '625.000đ',
    originalPrice: '875.000đ',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'English 🇺🇸',
  },
  {
    id: 2,
    title: 'Spanish for Beginners',
    instructor: 'Carlos Rodriguez (Native Speaker)',
    rating: 4.8,
    students: 890,
    duration: '7 Curriculum',
    price: '450.000đ',
    originalPrice: '625.000đ',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Spanish 🇪🇸',
  },
  {
    id: 3,
    title: 'French Grammar & Speaking',
    instructor: 'Marie Dubois (Native Speaker)',
    rating: 4.9,
    students: 756,
    duration: '7 Curriculum',
    price: '700.000đ',
    originalPrice: '950.000đ',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'French 🇫🇷',
  },
  {
    id: 4,
    title: 'Business German',
    instructor: 'Hans Mueller (Native Speaker)',
    rating: 4.7,
    students: 645,
    duration: '7 Curriculum',
    price: '800.000đ',
    originalPrice: '1.050.000đ',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'German 🇩🇪',
  },
  {
    id: 5,
    title: 'Mandarin Chinese HSK Prep',
    instructor: 'Li Wei (Native Speaker)',
    rating: 4.8,
    students: 432,
    duration: '7 Curriculum',
    price: '750.000đ',
    originalPrice: '1.000.000đ',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Chinese 🇨🇳',
  },
  {
    id: 6,
    title: 'Japanese Conversation',
    instructor: 'Yuki Tanaka (Native Speaker)',
    rating: 4.9,
    students: 567,
    duration: '7 Curriculum',
    price: '650.000đ',
    originalPrice: '900.000đ',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Japanese 🇯🇵',
  },
];

const ProductSection = () => {
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

  return (
    <section className="py-16 bg-muted/50">
      <div className="w-full px-8 lg:px-16">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Language Lessons</h2>
          <p className="text-lg text-muted-foreground">Learn with our most experienced and highly-rated native speakers</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <Link to={`/course/${course.id}`}>
                  <div className="relative overflow-hidden">
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
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">by {course.instructor}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                      </div>
                      <Button>
                        Book Lesson
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* We Might Also Like Section */}
        <div className="border-t pt-12">
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            You Might Also Like
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {courses.slice(0, 4).map((course) => (
              <motion.div 
                key={`also-${course.id}`} 
                variants={fadeInUp}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <Link to={`/course/${course.id}`}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">{course.title}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">{course.rating}</span>
                        </div>
                        <span className="text-sm font-bold text-primary">{course.price}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button size="lg" asChild>
              <Link to="/tutors">
                View All Courses
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;