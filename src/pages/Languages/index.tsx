import React from 'react';
import HeroSection from './components/sections/hero-section';
import LanguagesGrid from './components/sections/languages-grid';
import SearchSection from './components/sections/search-section';
import Pagination from './components/sections/pagination';
import CTASection from './components/sections/cta-section';

const Languages = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;

  const languages = [
    {
      name: 'English',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 1250,
      students: 45000,
      difficulty: 'Easy',
      certificates: ['IELTS', 'TOEFL', 'Cambridge'],
      description: 'Master the global language of business and communication',
      priceRange: '100.000-200.00đ',
      popularity: 95,
      features: ['Business English', 'Academic Writing', 'Conversation Practice', 'Exam Preparation']
    },
    {
      name: 'Spanish',
      flag: '🇪🇸',
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 890,
      students: 32000,
      difficulty: 'Easy',
      certificates: ['DELE', 'SIELE'],
      description: 'Learn the second most spoken language in the world',
      priceRange: '100.000-200.00đ',
      popularity: 88,
      features: ['Latin American Spanish', 'European Spanish', 'Business Spanish', 'Cultural Immersion']
    },
    {
      name: 'French',
      flag: '🇫🇷',
      image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 650,
      students: 28000,
      difficulty: 'Moderate',
      certificates: ['DELF', 'DALF', 'TCF'],
      description: 'Discover the language of love, culture, and diplomacy',
      priceRange: '100.000-200.00đ',
      popularity: 82,
      features: ['French Culture', 'Business French', 'Literature', 'Pronunciation']
    },
    {
      name: 'German',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 420,
      students: 18000,
      difficulty: 'Challenging',
      certificates: ['TestDaF', 'DSH', 'Goethe'],
      description: 'Learn the language of innovation and engineering',
      priceRange: '100.000-200.00đ',
      popularity: 75,
      features: ['Technical German', 'Business German', 'Grammar Focus', 'Cultural Context']
    },
    {
      name: 'Chinese (Mandarin)',
      flag: '🇨🇳',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 380,
      students: 22000,
      difficulty: 'Very Challenging',
      certificates: ['HSK', 'HSKK'],
      description: 'Master the most spoken language in the world',
      priceRange: '100.000-200.00đ',
      popularity: 79,
      features: ['Character Writing', 'Pinyin System', 'Business Chinese', 'Cultural Studies']
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 320,
      students: 16000,
      difficulty: 'Very Challenging',
      certificates: ['JLPT'],
      description: 'Explore Japanese culture through language learning',
      priceRange: '100.000-200.00đ',
      popularity: 73,
      features: ['Hiragana & Katakana', 'Kanji Characters', 'Anime Culture', 'Business Etiquette']
    },
    {
      name: 'Korean',
      flag: '🇰🇷',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 280,
      students: 14000,
      difficulty: 'Challenging',
      certificates: ['TOPIK'],
      description: 'Learn Korean and dive into K-culture',
      priceRange: '100.000-200.00đ',
      popularity: 85,
      features: ['Hangul Writing', 'K-Pop Culture', 'Business Korean', 'Drama & Media']
    },
    {
      name: 'Italian',
      flag: '🇮🇹',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
      tutors: 240,
      students: 12000,
      difficulty: 'Moderate',
      certificates: ['CILS', 'CELI'],
      description: 'Learn the melodious language of art and cuisine',
      priceRange: '100.000-200.00đ',
      popularity: 68,
      features: ['Italian Culture', 'Art & History', 'Culinary Terms', 'Regional Dialects']
    }
  ];

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLanguages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLanguages = filteredLanguages.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <SearchSection 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <LanguagesGrid languages={paginatedLanguages} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <CTASection />
    </div>
  );
};

export default Languages;