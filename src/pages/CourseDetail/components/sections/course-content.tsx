
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen } from 'lucide-react';

interface CourseContentProps {
  course: any;
}

const CourseContent = ({ course }: CourseContentProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="lg:col-span-2">
      {/* What You'll Learn */}
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-md mb-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.whatYouLearn.map((item: string, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Curriculum */}
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-md mb-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
        <div className="space-y-4">
          {course.curriculum.map((week: any, index: number) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Week {week.week}: {week.title}</h3>
                <span className="text-sm text-gray-500">{week.lessons.length} lessons</span>
              </div>
              <ul className="space-y-2">
                {week.lessons.map((lesson: string, lessonIndex: number) => (
                  <li key={lessonIndex} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                    <Link 
                      to={`/course/${course.id}/week/${week.week}/lesson/${lessonIndex + 1}`}
                      className="flex items-center space-x-2 w-full"
                    >
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span>{lesson}</span>
                      <span className="text-xs text-gray-400 ml-auto">15 min</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Requirements */}
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-md"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
        <ul className="space-y-3">
          {course.requirements.map((requirement: string, index: number) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{requirement}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default CourseContent;