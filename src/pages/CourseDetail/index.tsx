
import { useParams } from 'react-router-dom';
import CourseHeroSection from './components/sections/hero-section';
import CourseContent from './components/sections/course-content';
import CourseSidebar from './components/sections/course-sidebar';

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in real app, fetch by ID
  const course = {
    id: 1,
    title: 'English Conversation Mastery',
    instructor: {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'United States',
      flag: '🇺🇸',
      rating: 4.9,
      students: 1250,
      experience: '5 years'
    },
    rating: 4.9,
    reviews: 1250,
    students: 15000,
    duration: '12 weeks',
    lessons: 36,
    level: 'Intermediate',
    price: 255.000,
    originalPrice: 355.000,
    language: 'English',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master English conversation skills with our comprehensive course designed for intermediate learners. Learn practical phrases, improve pronunciation, and gain confidence in real-world conversations.',
    whatYouLearn: [
      'Improve fluency in everyday conversations',
      'Master pronunciation and intonation',
      'Learn business English communication',
      'Understand cultural context and idioms',
      'Practice with real-world scenarios',
      'Prepare for IELTS speaking test'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction & Assessment',
        lessons: ['Course overview', 'Speaking assessment', 'Goal setting']
      },
      {
        week: 2,
        title: 'Daily Conversations',
        lessons: ['Greetings and introductions', 'Small talk mastery', 'Asking for help']
      },
      {
        week: 3,
        title: 'Professional Communication',
        lessons: ['Business meetings', 'Email communication', 'Phone conversations']
      },
      {
        week: 4,
        title: 'Advanced Topics',
        lessons: ['Debates and discussions', 'Presentations', 'Cultural awareness']
      }
    ],
    requirements: [
      'Basic English knowledge (A2 level minimum)',
      'Reliable internet connection',
      'Webcam and microphone',
      'Commitment to practice 30 minutes daily'
    ],
    certificates: ['Course completion certificate', 'IELTS preparation certificate'],
    schedule: 'Flexible - book lessons when convenient',
    // groupSize: '1-on-1 or small groups (max 4 students)'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeroSection course={course} />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <CourseContent course={course} />
            <CourseSidebar course={course} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;