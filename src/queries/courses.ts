// Courses API functions using Axios directly
import { api } from '@/lib/api';
import { Course, PaginatedResponse, CourseFilters } from '@/types';

export const coursesApi = {
  getCourses: async (filters?: CourseFilters): Promise<PaginatedResponse<Course>> => {
    const response = await api.get('/courses', { params: filters });
    return response.data;
  },

  getCourse: async (id: string): Promise<Course> => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  enrollCourse: async (courseId: string) => {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  },
};