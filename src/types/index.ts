// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  country: string;
  flag: string;
  role: 'student' | 'tutor' | 'admin';
  createdAt: string;
  updatedAt: string;
}

// Tutor Types
export interface Tutor extends User {
  role: 'tutor';
  rating: number;
  reviews: number;
  students: number;
  lessonsCompleted: number;
  price: number;
  experience: string;
  specialties: string[];
  languages: Language[];
  availability: Availability;
  teachingStyle: string;
  education: string[];
  description: string;
  coverImage?: string;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Tutor;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice: number;
  language: string;
  image: string;
  whatYouLearn: string[];
  curriculum: WeekCurriculum[];
  requirements: string[];
  certificates: string[];
  schedule: string;
  groupSize: string;
}

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  week: number;
  duration: string;
  description: string;
  videoUrl: string;
  materials: Material[];
  transcript: string;
  objectives: string[];
  nextLesson?: {
    id: string;
    title: string;
    week: number;
  };
  studentComments: Comment[];
}

// Supporting Types
export interface Language {
  name: string;
  level: 'Native' | 'Fluent' | 'Intermediate' | 'Beginner';
}

export interface Availability {
  timezone: string;
  schedule: string;
}

export interface WeekCurriculum {
  week: number;
  title: string;
  lessons: string[];
}

export interface Material {
  id: string;
  title: string;
  type: 'PDF' | 'MP3' | 'MP4' | 'DOC';
  size: string;
  downloadUrl: string;
}

export interface Comment {
  id: string;
  student: string;
  avatar: string;
  time: string;
  message: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  student: string;
  avatar: string;
  time: string;
  message: string;
}

// Practice Test Types
export interface PracticeTest {
  id: string;
  title: string;
  language: string;
  flag: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  questions: number;
  participants: number;
  rating: number;
  price: number;
  image: string;
  description: string;
  features: string[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface SignInForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Filter Types
export interface CourseFilters {
  language: string;
  level: string;
  priceRange: string;
}

export interface TutorFilters {
  language: string;
  priceRange: string;
}