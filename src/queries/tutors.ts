// Tutors API functions using Axios directly
import { api } from '@/lib/api';
import { Tutor, PaginatedResponse, TutorFilters } from '@/types';

export const tutorsApi = {
  getTutors: async (filters?: TutorFilters): Promise<PaginatedResponse<Tutor>> => {
    const response = await api.get('/tutors', { params: filters });
    return response.data;
  },

  getTutor: async (id: string): Promise<Tutor> => {
    const response = await api.get(`/tutors/${id}`);
    return response.data;
  },

  bookTutor: async (tutorId: string, data: any) => {
    const response = await api.post(`/tutors/${tutorId}/book`, data);
    return response.data;
  },
};