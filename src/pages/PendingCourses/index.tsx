import React, { useState } from 'react';
import HeroSection from './components/sections/hero-section';
import FiltersSection from './components/sections/filters-section';
import CoursesGrid from './components/sections/courses-grid';
import Pagination from './components/sections/pagination';

const PendingCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data - khóa học đang chờ phê duyệt
  const pendingCourses = [
    {
      id: 'COURSE_1704123456789',
      creatorId: 'USER_abc123def',
      title: 'Advanced English Business Communication',
      category: 'English',
      description: 'Comprehensive course for professionals looking to improve their business English skills. Covers presentations, negotiations, email writing, and meeting management.',
      price: 750000,
      duration: '12 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-15T10:30:00Z',
      status: 'pending',
      creator: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'United States',
        flag: '🇺🇸'
      }
    },
    {
      id: 'COURSE_1704123456790',
      creatorId: 'USER_xyz789ghi',
      title: 'Spanish Conversation for Travelers',
      category: 'Spanish',
      description: 'Perfect course for travelers who want to learn essential Spanish phrases and conversation skills for their trips to Spanish-speaking countries.',
      price: 450000,
      duration: '8 weeks, 1.5 hours/week',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-14T14:20:00Z',
      status: 'pending',
      creator: {
        name: 'Carlos Rodriguez',
        email: 'carlos.rodriguez@email.com',
        avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'Spain',
        flag: '🇪🇸'
      }
    },
    {
      id: 'COURSE_1704123456791',
      creatorId: 'USER_mno456pqr',
      title: 'French Literature and Culture',
      category: 'French',
      description: 'Explore French literature classics while improving your French language skills. Includes cultural context and historical background.',
      price: 680000,
      duration: '16 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-13T09:15:00Z',
      status: 'under_review',
      creator: {
        name: 'Marie Dubois',
        email: 'marie.dubois@email.com',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'France',
        flag: '🇫🇷'
      }
    },
    {
      id: 'COURSE_1704123456792',
      creatorId: 'USER_stu901vwx',
      title: 'German Grammar Intensive',
      category: 'German',
      description: 'Intensive German grammar course focusing on complex structures, cases, and advanced syntax for intermediate to advanced learners.',
      price: 820000,
      duration: '10 weeks, 3 hours/week',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-12T16:45:00Z',
      status: 'pending',
      creator: {
        name: 'Hans Mueller',
        email: 'hans.mueller@email.com',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'Germany',
        flag: '🇩🇪'
      }
    },
    {
      id: 'COURSE_1704123456793',
      creatorId: 'USER_def234ghi',
      title: 'Mandarin HSK Test Preparation',
      category: 'Chinese',
      description: 'Comprehensive HSK test preparation course covering all levels from HSK 1 to HSK 6. Includes practice tests and exam strategies.',
      price: 950000,
      duration: '20 weeks, 2.5 hours/week',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-11T11:30:00Z',
      status: 'under_review',
      creator: {
        name: 'Li Wei',
        email: 'li.wei@email.com',
        avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'China',
        flag: '🇨🇳'
      }
    },
    {
      id: 'COURSE_1704123456794',
      creatorId: 'USER_jkl567mno',
      title: 'Japanese Anime Culture & Language',
      category: 'Japanese',
      description: 'Learn Japanese through anime culture! Perfect for anime fans who want to understand their favorite shows without subtitles.',
      price: 580000,
      duration: '14 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-10T13:20:00Z',
      status: 'pending',
      creator: {
        name: 'Yuki Tanaka',
        email: 'yuki.tanaka@email.com',
        avatar: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'Japan',
        flag: '🇯🇵'
      }
    },
    {
      id: 'COURSE_1704123456795',
      creatorId: 'USER_pqr890stu',
      title: 'Korean K-Pop Language Learning',
      category: 'Korean',
      description: 'Learn Korean through K-Pop lyrics and culture. Understand your favorite songs while mastering Korean grammar and vocabulary.',
      price: 520000,
      duration: '12 weeks, 1.5 hours/week',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-09T15:10:00Z',
      status: 'under_review',
      creator: {
        name: 'Park Min-jun',
        email: 'park.minjun@email.com',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'South Korea',
        flag: '🇰🇷'
      }
    },
    {
      id: 'COURSE_1704123456796',
      creatorId: 'USER_vwx123yza',
      title: 'Italian Cooking & Language',
      category: 'Italian',
      description: 'Learn Italian while discovering authentic Italian recipes. Perfect combination of language learning and culinary culture.',
      price: 650000,
      duration: '10 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-08T08:45:00Z',
      status: 'pending',
      creator: {
        name: 'Giuseppe Romano',
        email: 'giuseppe.romano@email.com',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        country: 'Italy',
        flag: '🇮🇹'
      }
    }
  ];

  const filteredCourses = pendingCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.creator.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || course.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection courseCount={pendingCourses.length} />
      <FiltersSection 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        courseCount={filteredCourses.length}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onStatusChange={setSelectedStatus}
      />
      <CoursesGrid courses={paginatedCourses} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PendingCourses;