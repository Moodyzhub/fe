import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonHeaderProps {
  lesson: any;
  courseId: string;
}

const LessonHeader = ({ lesson, courseId }: LessonHeaderProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-card border-b py-6">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" asChild>
              <Link to={`/course/${courseId}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course
              </Link>
            </Button>
            <div className="text-muted-foreground">|</div>
            <span className="text-muted-foreground">English Conversation Mastery</span>
            <div className="text-muted-foreground">|</div>
            <span className="text-muted-foreground">Week {lesson.week}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{lesson.title}</h1>
          <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{lesson.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>Week {lesson.week}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LessonHeader;