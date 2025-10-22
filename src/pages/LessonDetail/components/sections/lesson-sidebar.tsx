import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface LessonSidebarProps {
  lesson: any;
}

const LessonSidebar = ({ lesson }: LessonSidebarProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="lg:col-span-1">
      {/* Progress */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tiến độ khóa học</span>
                <span className="font-medium">8%</span>
              </div>
              <Progress value={8} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>3 trong 36 bài học đã hoàn thành</span>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>

      {/* Next Lesson */}
      {lesson.nextLesson && (
        <Card>
          <CardHeader>
            <CardTitle>Bài học tiếp theo</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-4">
                <h4 className="font-medium text-foreground mb-2">{lesson.nextLesson.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">Tuần {lesson.nextLesson.week}</p>
                <Button className="w-full">
                  Tiếp tục học
                </Button>
              </Card>
            </motion.div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LessonSidebar;