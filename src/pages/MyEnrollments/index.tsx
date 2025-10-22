import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ChevronRight, Play, CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockEnrollments = [
    {
        id: 1,
        courseId: 1,
        courseName: 'English for Beginners',
        tutor: 'Sarah Johnson',
        language: 'English',
        level: 'Beginner',
        thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        enrolledDate: '2025-01-15',
        progress: 65,
        totalLessons: 20,
        completedLessons: 13,
        totalHours: 15,
        completedHours: 9.75,
        lastAccessed: '2025-10-20',
        status: 'in-progress',
        nextLesson: {
            id: 14,
            title: 'Past Tense Mastery',
            duration: 45,
        },
        lessons: [
            { id: 1, title: 'Introduction to English', duration: 30, completed: true },
            { id: 2, title: 'Basic Greetings', duration: 25, completed: true },
            { id: 3, title: 'Numbers and Counting', duration: 35, completed: true },
            { id: 4, title: 'Common Phrases', duration: 40, completed: true },
            { id: 5, title: 'Present Tense', duration: 45, completed: true },
            { id: 6, title: 'Future Tense', duration: 45, completed: false },
        ],
    },
    {
        id: 2,
        courseId: 2,
        courseName: 'Spanish Conversation',
        tutor: 'Carlos Rodriguez',
        language: 'Spanish',
        level: 'Intermediate',
        thumbnail: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
        enrolledDate: '2025-02-01',
        progress: 30,
        totalLessons: 15,
        completedLessons: 4,
        totalHours: 12,
        completedHours: 3.6,
        lastAccessed: '2025-10-18',
        status: 'in-progress',
        nextLesson: {
            id: 5,
            title: 'Dining Conversations',
            duration: 50,
        },
        lessons: [
            { id: 1, title: 'Daily Conversations', duration: 40, completed: true },
            { id: 2, title: 'Shopping Phrases', duration: 35, completed: true },
            { id: 3, title: 'Travel Spanish', duration: 45, completed: true },
            { id: 4, title: 'Weather Talk', duration: 30, completed: true },
            { id: 5, title: 'Dining Conversations', duration: 50, completed: false },
        ],
    },
    {
        id: 3,
        courseId: 3,
        courseName: 'Japanese Writing Systems',
        tutor: 'Yuki Tanaka',
        language: 'Japanese',
        level: 'Beginner',
        thumbnail: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
        enrolledDate: '2024-12-10',
        progress: 100,
        totalLessons: 10,
        completedLessons: 10,
        totalHours: 8,
        completedHours: 8,
        lastAccessed: '2025-10-15',
        status: 'completed',
        certificate: true,
        lessons: [
            { id: 1, title: 'Hiragana Basics', duration: 45, completed: true },
            { id: 2, title: 'Katakana Basics', duration: 45, completed: true },
            { id: 3, title: 'Basic Kanji', duration: 50, completed: true },
        ],
    },
];

const MyEnrollments = () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const filteredEnrollments = mockEnrollments.filter(enrollment => {
        if (selectedTab === 'all') return true;
        if (selectedTab === 'in-progress') return enrollment.status === 'in-progress';
        if (selectedTab === 'completed') return enrollment.status === 'completed';
        return true;
    });

    const stats = {
        total: mockEnrollments.length,
        inProgress: mockEnrollments.filter(e => e.status === 'in-progress').length,
        completed: mockEnrollments.filter(e => e.status === 'completed').length,
        totalHours: mockEnrollments.reduce((sum, e) => sum + e.completedHours, 0),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">My Enrollments</h1>
                    <p className="text-gray-600">Track your learning progress and continue your journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Courses</p>
                                    <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">In Progress</p>
                                    <p className="text-3xl font-bold text-orange-600">{stats.inProgress}</p>
                                </div>
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Completed</p>
                                    <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Hours Learned</p>
                                    <p className="text-3xl font-bold text-purple-600">{stats.totalHours.toFixed(1)}</p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
                    <TabsList className="bg-white shadow-sm">
                        <TabsTrigger value="all">All Courses ({stats.total})</TabsTrigger>
                        <TabsTrigger value="in-progress">In Progress ({stats.inProgress})</TabsTrigger>
                        <TabsTrigger value="completed">Completed ({stats.completed})</TabsTrigger>
                    </TabsList>

                    <TabsContent value={selectedTab} className="mt-6">
                        <div className="space-y-6">
                            {filteredEnrollments.map((enrollment) => (
                                <Card key={enrollment.id} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            <div className="lg:w-64 flex-shrink-0">
                                                <img
                                                    src={enrollment.thumbnail}
                                                    alt={enrollment.courseName}
                                                    className="w-full h-40 object-cover rounded-lg"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                            {enrollment.courseName}
                                                        </h3>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                  {enrollment.tutor}
                              </span>
                                                            <Badge variant="secondary">{enrollment.language}</Badge>
                                                            <Badge variant="outline">{enrollment.level}</Badge>
                                                        </div>
                                                    </div>
                                                    {enrollment.status === 'completed' && enrollment.certificate && (
                                                        <Badge className="bg-green-100 text-green-700">
                                                            <Award className="w-3 h-3 mr-1" />
                                                            Certificate
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">
                                Progress: {enrollment.completedLessons} / {enrollment.totalLessons} lessons
                              </span>
                                                            <span className="text-sm font-medium text-gray-900">
                                {enrollment.progress}%
                              </span>
                                                        </div>
                                                        <Progress value={enrollment.progress} className="h-2" />
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="w-4 h-4" />
                                                            <span>{enrollment.completedHours} / {enrollment.totalHours} hours</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span>Last accessed: {new Date(enrollment.lastAccessed).toLocaleDateString('vi-VN')}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span>Enrolled: {new Date(enrollment.enrolledDate).toLocaleDateString('vi-VN')}</span>
                                                        </div>
                                                    </div>

                                                    <div className="bg-gray-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-gray-900 mb-3">Course Lessons</h4>
                                                        <div className="space-y-2">
                                                            {enrollment.lessons.map((lesson) => (
                                                                <div
                                                                    key={lesson.id}
                                                                    className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50 transition-colors"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        {lesson.completed ? (
                                                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                                        ) : (
                                                                            <Circle className="w-5 h-5 text-gray-400" />
                                                                        )}
                                                                        <span className={lesson.completed ? 'text-gray-900' : 'text-gray-600'}>
                                      {lesson.title}
                                    </span>
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <span className="text-sm text-gray-500">{lesson.duration} min</span>
                                                                        {!lesson.completed && (
                                                                            <Button size="sm" variant="ghost" asChild>
                                                                                <Link to={`/lessons/${lesson.id}`}>
                                                                                    <Play className="w-4 h-4" />
                                                                                </Link>
                                                                            </Button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3 pt-4">
                                                        {enrollment.status === 'in-progress' && enrollment.nextLesson && (
                                                            <Button asChild className="flex-1">
                                                                <Link to={`/lessons/${enrollment.nextLesson.id}`}>
                                                                    <Play className="w-4 h-4 mr-2" />
                                                                    Continue: {enrollment.nextLesson.title}
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        {enrollment.status === 'completed' && (
                                                            <Button variant="outline" asChild className="flex-1">
                                                                <Link to={`/courses/${enrollment.courseId}`}>
                                                                    Review Course
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        <Button variant="outline" asChild>
                                                            <Link to={`/courses/${enrollment.courseId}`}>
                                                                <ChevronRight className="w-4 h-4" />
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                {filteredEnrollments.length === 0 && (
                    <Card className="bg-white shadow-sm">
                        <CardContent className="py-12 text-center">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-600 mb-6">
                                {selectedTab === 'all' && "You haven't enrolled in any courses yet"}
                                {selectedTab === 'in-progress' && "You don't have any courses in progress"}
                                {selectedTab === 'completed' && "You haven't completed any courses yet"}
                            </p>
                            <Button asChild>
                                <Link to="/languages">Browse Courses</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default MyEnrollments;
