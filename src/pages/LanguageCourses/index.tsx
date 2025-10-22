import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './components/sections/hero-section';
import FiltersSection from './components/sections/filters-section';
import CoursesGrid from './components/sections/courses-grid';

const LanguageCourses = () => {
  const { language } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  const languageInfo: { [key: string]: { name: string; flag: string; image: string } } = {
    'english': { name: 'English', flag: '🇺🇸', image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'chinese': { name: 'Chinese', flag: '🇨🇳', image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'spanish': { name: 'Spanish', flag: '🇪🇸', image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'french': { name: 'French', flag: '🇫🇷', image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'japanese': { name: 'Japanese', flag: '🇯🇵', image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'korean': { name: 'Korean', flag: '🇰🇷', image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'german': { name: 'German', flag: '🇩🇪', image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    'italian': { name: 'Italian', flag: '🇮🇹', image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1200' }
  };

  const currentLang = languageInfo[language?.toLowerCase() || ''];

  const allCourses = [
    {
      id: 1,
      title: 'English Conversation Mastery',
      instructor: 'Sarah Johnson (Native Speaker)',
      rating: 4.9,
      students: 1250,
      duration: '10 Curriculum',
      price: '625.000đ',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'English',
      level: 'Intermediate',
      priceValue: 625000
    },
    {
      id: 2,
      title: 'Business English Professional',
      instructor: 'Michael Brown (Native Speaker)',
      rating: 4.8,
      students: 890,
      duration: '10 Curriculum',
      price: '750.000đ',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'English',
      level: 'Advanced',
      priceValue: 750000
    },
    {
      id: 3,
      title: 'Spanish for Beginners',
      instructor: 'Carlos Rodriguez (Native Speaker)',
      rating: 4.8,
      students: 890,
      duration: '10 Curriculum',
      price: '450.000đ',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Spanish',
      level: 'Beginner',
      priceValue: 450000
    },
    {
      id: 4,
      title: 'Advanced Spanish Conversation',
      instructor: 'Maria Garcia (Native Speaker)',
      rating: 4.9,
      students: 650,
      duration: '10 Curriculum',
      price: '580.000đ',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Spanish',
      level: 'Advanced',
      priceValue: 580000
    },
    {
      id: 5,
      title: 'French Grammar & Speaking',
      instructor: 'Marie Dubois (Native Speaker)',
      rating: 4.9,
      students: 756,
      duration: '10 Curriculum',
      price: '700.000đ',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'French',
      level: 'Intermediate',
      priceValue: 700000
    },
    {
      id: 6,
      title: 'Business German',
      instructor: 'Hans Mueller (Native Speaker)',
      rating: 4.7,
      students: 645,
      duration: '10 Curriculum',
      price: '800.000đ',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'German',
      level: 'Advanced',
      priceValue: 800000
    },
    {
      id: 7,
      title: 'Mandarin Chinese HSK Prep',
      instructor: 'Li Wei (Native Speaker)',
      rating: 4.8,
      students: 432,
      duration: '10 Curriculum',
      price: '750.000đ',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Chinese',
      level: 'Intermediate',
      priceValue: 750000
    },
    {
      id: 8,
      title: 'Japanese Conversation',
      instructor: 'Yuki Tanaka (Native Speaker)',
      rating: 4.9,
      students: 567,
      duration: '10 Curriculum',
      price: '650.000đ',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Japanese',
      level: 'Intermediate',
      priceValue: 650000
    },
    {
      id: 9,
      title: 'Korean TOPIK Preparation',
      instructor: 'Park Min-jun (Native Speaker)',
      rating: 4.8,
      students: 420,
      duration: '10 Curriculum',
      price: '680.000đ',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Korean',
      level: 'Advanced',
      priceValue: 680000
    },
    {
      id: 10,
      title: 'Italian for Travel',
      instructor: 'Giuseppe Romano (Native Speaker)',
      rating: 4.7,
      students: 380,
      duration: '10 Curriculum',
      price: '520.000đ',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Italian',
      level: 'Beginner',
      priceValue: 520000
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesLanguage = !currentLang || course.category === currentLang.name;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesPrice = selectedPrice === 'All' || 
      (selectedPrice === 'Under 600K' && course.priceValue < 600000) ||
      (selectedPrice === '600K-750K' && course.priceValue >= 600000 && course.priceValue <= 750000) ||
      (selectedPrice === 'Above 750K' && course.priceValue > 750000);
    
    return matchesLanguage && matchesSearch && matchesLevel && matchesPrice;
  });

  if (!currentLang) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Language not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection language={currentLang} />
      <FiltersSection 
        searchTerm={searchTerm}
        selectedLevel={selectedLevel}
        selectedPrice={selectedPrice}
        courseCount={filteredCourses.length}
        onSearchChange={setSearchTerm}
        onLevelChange={setSelectedLevel}
        onPriceChange={setSelectedPrice}
      />
      <CoursesGrid courses={filteredCourses} />
    </div>
  );
};

export default LanguageCourses;