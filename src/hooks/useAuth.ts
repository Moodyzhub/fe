import { useState, useEffect } from 'react';
import { User, SignInForm, SignUpForm } from '@/types';
import { STORAGE_KEYS } from '@/constants';
import  { storage }  from '@/helpers';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = storage.get<User>(STORAGE_KEYS.USER_DATA);
    const token = storage.get<string>(STORAGE_KEYS.ACCESS_TOKEN);

    if (storedUser && token) {
      setAuthState({
        user: storedUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const signIn = async (data: SignInForm) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Mock API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: data.email,
        country: 'Vietnam',
        flag: '🇻🇳',
        role: 'student',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockToken = 'mock-jwt-token';

      // Store user data and token
      storage.set(STORAGE_KEYS.USER_DATA, mockUser);
      storage.set(STORAGE_KEYS.ACCESS_TOKEN, mockToken);

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true, message: 'Đăng nhập thành công!' };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, message: 'Đăng nhập thất bại!' };
    }
  };

  const signUp = async (data: SignUpForm) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Mock API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: data.fullName,
        email: data.email,
        country: 'Vietnam',
        flag: '🇻🇳',
        role: 'student',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const mockToken = 'mock-jwt-token';

      // Store user data and token
      storage.set(STORAGE_KEYS.USER_DATA, mockUser);
      storage.set(STORAGE_KEYS.ACCESS_TOKEN, mockToken);

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true, message: 'Đăng ký thành công!' };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, message: 'Đăng ký thất bại!' };
    }
  };

  const signOut = () => {
    // Clear stored data
    storage.remove(STORAGE_KEYS.USER_DATA);
    storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
    storage.remove(STORAGE_KEYS.REFRESH_TOKEN);

    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
  };
}