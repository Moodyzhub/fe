// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/auth/signin',
    SIGN_UP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: '/courses/:id',
    ENROLL: '/courses/:id/enroll',
  },
  TUTORS: {
    LIST: '/tutors',
    DETAIL: '/tutors/:id',
    BOOK: '/tutors/:id/book',
  },
  LESSONS: {
    DETAIL: '/lessons/:id',
    MATERIALS: '/lessons/:id/materials',
  },
  PRACTICE_TESTS: {
    LIST: '/practice-tests',
    START: '/practice-tests/:id/start',
  },
} as const;

// User Roles
export const USER_ROLES = {
  STUDENT: 'student',
  TUTOR: 'tutor',
  ADMIN: 'admin',
} as const;

// Language Levels
export const LANGUAGE_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
} as const;

// Languages
export const LANGUAGES = [
  { name: 'English', flag: '🇺🇸', code: 'en' },
  { name: 'Spanish', flag: '🇪🇸', code: 'es' },
  { name: 'French', flag: '🇫🇷', code: 'fr' },
  { name: 'German', flag: '🇩🇪', code: 'de' },
  { name: 'Chinese', flag: '🇨🇳', code: 'zh' },
  { name: 'Japanese', flag: '🇯🇵', code: 'ja' },
  { name: 'Korean', flag: '🇰🇷', code: 'ko' },
  { name: 'Italian', flag: '🇮🇹', code: 'it' },
] as const;

// Price Ranges
export const PRICE_RANGES = [
  { label: 'All', value: 'All' },
  { label: '$15-25', value: '15-25' },
  { label: '$25-35', value: '25-35' },
  { label: '$35+', value: '35+' },
] as const;

// Colors
export const COLORS = {
  PRIMARY: 'hsl(221.2 83.2% 53.3%)',
  SECONDARY: 'hsl(210 40% 96%)',
  SUCCESS: 'hsl(142.1 76.2% 36.3%)',
  WARNING: 'hsl(47.9 95.8% 53.1%)',
  ERROR: 'hsl(0 84.2% 60.2%)',
} as const;

// Messages
export const MESSAGES = {
  SUCCESS: {
    SIGN_IN: 'Đăng nhập thành công!',
    SIGN_UP: 'Đăng ký thành công!',
    COURSE_ENROLLED: 'Đăng ký khóa học thành công!',
    LESSON_COMPLETED: 'Hoàn thành bài học!',
  },
  ERROR: {
    SIGN_IN_FAILED: 'Đăng nhập thất bại. Vui lòng thử lại.',
    SIGN_UP_FAILED: 'Đăng ký thất bại. Vui lòng thử lại.',
    NETWORK_ERROR: 'Lỗi kết nối. Vui lòng kiểm tra internet.',
    UNAUTHORIZED: 'Bạn không có quyền truy cập.',
  },
  VALIDATION: {
    REQUIRED: 'Trường này là bắt buộc',
    EMAIL_INVALID: 'Email không hợp lệ',
    PASSWORD_MIN: 'Mật khẩu phải có ít nhất 6 ký tự',
    PASSWORDS_NOT_MATCH: 'Mật khẩu không khớp',
    PHONE_INVALID: 'Số điện thoại không hợp lệ',
  },
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  LANGUAGES: '/languages',
  TUTORS: '/tutors',
  TUTOR_DETAIL: '/tutor/:id',
  COURSE_DETAIL: '/course/:id',
  LESSON_DETAIL: '/course/:courseId/week/:week/lesson/:lessonId',
  PRACTICE_TEST: '/practice-test',
  BECOME_TUTOR: '/become-tutor',
  WISHLIST: '/wishlist',
  PAYMENT: '/payment/:id',
  POLICY: '/policy',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

// Query Keys
export const QUERY_KEYS = {
  COURSES: ['courses'],
  COURSE_DETAIL: (id: string) => ['courses', id],
  TUTORS: ['tutors'],
  TUTOR_DETAIL: (id: string) => ['tutors', id],
  LESSONS: ['lessons'],
  LESSON_DETAIL: (id: string) => ['lessons', id],
  PRACTICE_TESTS: ['practice-tests'],
  USER_PROFILE: ['user', 'profile'],
} as const;