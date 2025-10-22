import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, FileText, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface LessonContentProps {
  lesson: any;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="lg:col-span-2">
      {/* Video Player */}
      <Card className="mb-8">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="aspect-video bg-muted relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="h-16 w-16 rounded-full">
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
            <Badge className="absolute bottom-4 left-4 bg-black/50 text-white">
              {lesson.duration}
            </Badge>
          </div>
        </motion.div>
      </Card>

      {/* Tabs */}
      <Card>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Tổng quan bài học</h3>
              <p className="text-muted-foreground mb-6">{lesson.description}</p>
              
              <h4 className="font-semibold text-foreground mb-3">Mục tiêu học tập</h4>
              <ul className="space-y-2">
                {lesson.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="materials" className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Tài liệu khóa học</h3>
              <div className="space-y-4">
                {lesson.materials.map((material: any) => (
                  <Card key={material.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{material.title}</h4>
                          <p className="text-sm text-muted-foreground">{material.type} • {material.size}</p>
                        </div>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Tải về
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transcript" className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Nội dung chi tiết</h3>
              <Card className="bg-muted/50 p-6">
                <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-sans">
                  {lesson.transcript}
                </pre>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </Card>
    </div>
  );
};

export default LessonContent;