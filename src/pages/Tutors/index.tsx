import React, { useState } from 'react';
import HeroSection from './components/sections/hero-section';
import FiltersSection from './components/sections/filters-section';
import TutorsGrid from './components/sections/tutors-grid';
import Pagination from './components/sections/pagination';

const Tutors = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const tutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      language: 'English',
      country: 'United States',
      flag: '🇺🇸',
      rating: 4.9,
      reviews: 1250,
      price: 25,
      experience: '5 years',
      specialties: ['Business English', 'IELTS', 'Conversation'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Certified English teacher with 5 years of experience helping students achieve their language goals.',
      availability: 'Available now'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      language: 'Spanish',
      country: 'Spain',
      flag: '🇪🇸',
      rating: 4.8,
      reviews: 890,
      price: 22,
      experience: '4 years',
      specialties: ['Grammar', 'Pronunciation', 'Culture'],
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Native Spanish speaker passionate about sharing Spanish culture and language.',
      availability: 'Available in 2 hours'
    },
    {
      id: 3,
      name: 'Marie Dubois',
      language: 'French',
      country: 'France',
      flag: '🇫🇷',
      rating: 4.9,
      reviews: 756,
      price: 28,
      experience: '6 years',
      specialties: ['DELF/DALF', 'Literature', 'Business French'],
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'French literature professor with expertise in exam preparation and business French.',
      availability: 'Available now'
    },
    {
      id: 4,
      name: 'Hans Mueller',
      language: 'German',
      country: 'Germany',
      flag: '🇩🇪',
      rating: 4.7,
      reviews: 645,
      price: 30,
      experience: '7 years',
      specialties: ['TestDaF', 'Technical German', 'Grammar'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'German engineer turned language teacher, specializing in technical and business German.',
      availability: 'Available tomorrow'
    },
    {
      id: 5,
      name: 'Li Wei',
      language: 'Chinese',
      country: 'China',
      flag: '🇨🇳',
      rating: 4.8,
      reviews: 432,
      price: 26,
      experience: '3 years',
      specialties: ['HSK Prep', 'Pinyin', 'Characters'],
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mandarin teacher with expertise in HSK exam preparation and character writing.',
      availability: 'Available now'
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      language: 'Japanese',
      country: 'Japan',
      flag: '🇯🇵',
      rating: 4.9,
      reviews: 567,
      price: 32,
      experience: '5 years',
      specialties: ['JLPT', 'Anime Culture', 'Business Japanese'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Japanese culture enthusiast teaching language through cultural immersion.',
      availability: 'Available in 1 hour'
    }
  ];

  const filteredTutors = tutors.filter(tutor => {
    const languageMatch = selectedLanguage === 'All' || tutor.language === selectedLanguage;
    const priceMatch = priceRange === 'All' || 
      (priceRange === '$15-25' && tutor.price >= 15 && tutor.price <= 25) ||
      (priceRange === '$25-35' && tutor.price > 25 && tutor.price <= 35) ||
      (priceRange === '$35+' && tutor.price > 35);
    
    return languageMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredTutors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTutors = filteredTutors.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedLanguage, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FiltersSection 
        selectedLanguage={selectedLanguage}
        priceRange={priceRange}
        onLanguageChange={setSelectedLanguage}
        onPriceChange={setPriceRange}
        tutorCount={filteredTutors.length}
      />
      <TutorsGrid tutors={paginatedTutors} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Tutors;