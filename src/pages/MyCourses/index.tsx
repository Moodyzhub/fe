import React, { useState } from 'react';
import HeroSection from './components/sections/hero-section';
import FiltersSection from './components/sections/filters-section';
import CoursesGrid from './components/sections/courses-grid';
import Pagination from './components/sections/pagination';

const MyCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data - khóa học đã được phê duyệt của tutor
  const myCourses = [
    {
      id: 'COURSE_1704123456789',
      title: 'Advanced English Business Communication',
      category: 'English',
      description: 'Comprehensive course for professionals looking to improve their business English skills.',
      price: 750000,
      duration: '12 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-15T10:30:00Z',
      students: 45,
      rating: 4.8,
      reviews: 23,
      totalLessons: 24,
      completedLessons: 24,
      revenue: 33750000,
      isActive: true
    },
    {
      id: 'COURSE_1704123456792',
      title: 'Business English Writing',
      category: 'English',
      description: 'Master professional email writing, reports, and business correspondence.',
      price: 520000,
      duration: '6 weeks, 1.5 hours/week',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-12T16:45:00Z',
      students: 28,
      rating: 4.9,
      reviews: 15,
      totalLessons: 12,
      completedLessons: 12,
      revenue: 14560000,
      isActive: true
    },
    {
      id: 'COURSE_1704123456794',
      title: 'English Pronunciation Mastery',
      category: 'English',
      description: 'Improve your English pronunciation with phonetics, stress patterns, and intonation.',
      price: 580000,
      duration: '8 weeks, 1.5 hours/week',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-10T13:20:00Z',
      students: 67,
      rating: 4.7,
      reviews: 34,
      totalLessons: 16,
      completedLessons: 16,
      revenue: 38860000,
      isActive: false
    },
    {
      id: 'COURSE_1704123456795',
      title: 'IELTS Speaking Preparation',
      category: 'English',
      description: 'Intensive IELTS speaking preparation course with mock tests and personalized feedback.',
      price: 680000,
      duration: '10 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-08T09:15:00Z',
      students: 89,
      rating: 4.9,
      reviews: 56,
      totalLessons: 20,
      completedLessons: 18,
      revenue: 60520000,
      isActive: true
    }
  ];

  const filteredCourses = myCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection courseCount={myCourses.length} />
      <FiltersSection 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        courseCount={filteredCourses.length}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
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

export default MyCourses;