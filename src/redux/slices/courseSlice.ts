import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/lib/api';
import { Course } from '@/types';

interface CourseState {
  courses: Course[];
  selectedCourse: Course | null;
  isLoading: boolean;
  error: string | null;
  filters: {
    language: string;
    level: string;
    priceRange: string;
  };
}

const initialState: CourseState = {
  courses: [],
  selectedCourse: null,
  isLoading: false,
  error: null,
  filters: {
    language: 'All',
    level: 'All',
    priceRange: 'All',
  },
};

// Async thunks
export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async (filters?: { language?: string; level?: string; priceRange?: string }) => {
    const response = await api.get('/courses', { params: filters });
    return response.data;
  }
);

export const fetchCourseById = createAsyncThunk(
  'course/fetchCourseById',
  async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  }
);

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearSelectedCourse: (state) => {
      state.selectedCourse = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Courses
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      })
      // Fetch Course by ID
      .addCase(fetchCourseById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch course';
      });
  },
});

export const { setFilters, clearSelectedCourse, clearError } = courseSlice.actions;
export default courseSlice.reducer;