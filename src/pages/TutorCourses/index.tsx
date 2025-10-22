import React, { useState } from 'react';
import HeroSection from './components/sections/hero-section';
import FiltersSection from './components/sections/filters-section';
import CoursesGrid from './components/sections/courses-grid';
import Pagination from './components/sections/pagination';

const TutorCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data - khóa học của tutor hiện tại
  const tutorCourses = [
    {
      id: 'COURSE_1704123456789',
      title: 'Advanced English Business Communication',
      category: 'English',
      description: 'Comprehensive course for professionals looking to improve their business English skills. Covers presentations, negotiations, email writing, and meeting management.',
      price: 750000,
      duration: '12 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-15T10:30:00Z',
      status: 'approved',
      students: 45,
      rating: 4.8,
      reviews: 23
    },
    {
      id: 'COURSE_1704123456790',
      title: 'English Conversation for Beginners',
      category: 'English',
      description: 'Perfect course for beginners who want to start speaking English confidently in everyday situations.',
      price: 450000,
      duration: '8 weeks, 1.5 hours/week',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-14T14:20:00Z',
      status: 'pending',
      students: 0,
      rating: 0,
      reviews: 0
    },
    {
      id: 'COURSE_1704123456791',
      title: 'IELTS Speaking Preparation',
      category: 'English',
      description: 'Intensive IELTS speaking preparation course with mock tests and personalized feedback.',
      price: 680000,
      duration: '10 weeks, 2 hours/week',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-13T09:15:00Z',
      status: 'under_review',
      students: 0,
      rating: 0,
      reviews: 0
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
      status: 'approved',
      students: 28,
      rating: 4.9,
      reviews: 15
    },
    {
      id: 'COURSE_1704123456793',
      title: 'English Grammar Fundamentals',
      category: 'English',
      description: 'Complete English grammar course covering all essential grammar rules and structures.',
      price: 380000,
      duration: '12 weeks, 1 hour/week',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      createdAt: '2024-01-11T11:30:00Z',
      status: 'rejected',
      students: 0,
      rating: 0,
      reviews: 0,
      rejectionReason: 'Content needs more detailed curriculum structure'
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
      status: 'approved',
      students: 67,
      rating: 4.7,
      reviews: 34
    }
  ];

  const filteredCourses = tutorCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || course.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection courseCount={tutorCourses.length} />
      <FiltersSection 
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
        courseCount={filteredCourses.length}
        onSearchChange={setSearchTerm}
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

export default TutorCourses;