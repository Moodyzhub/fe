// Lessons API functions using Axios directly
import { api } from '@/lib/api';
import { Lesson } from '@/types';

export const lessonsApi = {
  getLesson: async (id: string): Promise<Lesson> => {
    const response = await api.get(`/lessons/${id}`);
    return response.data;
  },

  getLessonMaterials: async (id: string) => {
    const response = await api.get(`/lessons/${id}/materials`);
    return response.data;
  },
};