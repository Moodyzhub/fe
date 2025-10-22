
import { useParams } from 'react-router-dom';
import TutorHeroSection from './components/sections/hero-section';
import CoursesSection from './components/sections/courses-section';
import ReviewsSection from './components/sections/reviews-section';

const TutorDetail = () => {
  const { id } = useParams();

  // Mock tutor data - in real app, fetch by ID
  const tutor = {
    id: 1,
    name: 'Sarah Johnson',
    language: 'English',
    country: 'United States',
    flag: '🇺🇸',
    rating: 4.9,
    reviews: [
      {
        id: 1,
        student: 'Maria Garcia',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Sarah is an amazing teacher! She helped me improve my business English significantly. Her lessons are well-structured and engaging.',
        flag: '🇪🇸'
      },
      {
        id: 2,
        student: 'Chen Wei',
        rating: 5,
        date: '1 month ago',
        comment: 'Excellent IELTS preparation. I scored 7.5 thanks to Sarah\'s guidance. Highly recommended!',
        flag: '🇨🇳'
      }
    ],
    students: 15000,
    lessonsCompleted: 2500,
    price: 255000,
    experience: '5 years',
    specialties: ['Business English', 'IELTS', 'Conversation', 'Grammar', 'Pronunciation'],
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverImage: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Hello! I\'m Sarah, a certified English teacher with 5 years of experience helping students achieve their language goals. I specialize in business English, IELTS preparation, and conversational skills. My teaching style is interactive and personalized to each student\'s needs.',
    courses: [
      {
        id: 1,
        title: 'English Conversation Mastery',
        description: 'Master everyday English conversations with confidence',
        duration: '12 weeks',
        lessons: 36,
        price: 625000,
        originalPrice: 875000,
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
        level: 'Intermediate',
        students: 1250
      },
      {
        id: 2,
        title: 'Business English Professional',
        description: 'Excel in business communication and presentations',
        duration: '8 weeks',
        lessons: 24,
        price: 750000,
        originalPrice: 1000000,
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        level: 'Advanced',
        students: 890
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TutorHeroSection tutor={tutor} />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <CoursesSection courses={tutor.courses} />
              <ReviewsSection reviews={tutor.reviews} />
            </div>
            
            <div className="lg:col-span-1">
              {/* Sidebar content can be added here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorDetail;