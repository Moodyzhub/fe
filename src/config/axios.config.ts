import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios';
import helpers from '@/helpers';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://lms.autopass.blog/'
    : 'https://lms.autopass.blog/';


const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});


const onRequestSuccess = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token: string | undefined = helpers.cookie_get('AT');
  if (token && token.trim() !== '') {
    config.headers = config.headers || {};
    (config.headers as { Authorization?: string }).Authorization = `Bearer ${token}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};


const onResponseSuccess = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};
interface ApiErrorData {
  message?: string;

}
const onResponseError = (error: AxiosError<ApiErrorData>): Promise<AxiosResponse<ApiErrorData> | AxiosError<ApiErrorData>> => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data as ApiErrorData;
    const message = data.message;
    if (
        (status === 403 && message === 'Token expired') ||
        status === 401
    ) {
      helpers.cookie_delete('AT');
      window.location.href = '/login';
    }
    return Promise.reject(error.response);  
  }
  return Promise.reject(error);
};


api.interceptors.request.use(onRequestSuccess, onRequestError);
api.interceptors.response.use(onResponseSuccess, onResponseError);


const BaseRequest = {
  Get: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await api.get<T>(url, config);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.error('GET Error:', error.message);
      throw error;
    }
  },

  Post: async <T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await api.post<T>(url, data, config);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.error('POST Error:', error.message);
      throw error;
    }
  },

  Put: async <T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await api.put<T>(url, data, config);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.error('PUT Error:', error.message);
      throw error;
    }
  },

  Patch: async <T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await api.patch<T>(url, data, config);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.error('PATCH Error:', error.message);
      throw error;
    }
  },

  Delete: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    try {
      const response: AxiosResponse<T> = await api.delete<T>(url, config);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.error('DELETE Error:', error.message);
      throw error;
    }
  },
};


const BaseRequestV2 = {
  Get: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<[AxiosError | null, AxiosResponse<T> | null]> => {
    try {
      const res: AxiosResponse<T> = await api.get<T>(url, config);
      return [null, res];
    } catch (err: unknown) {
      const error = err as AxiosError;
      return [error, null];
    }
  },

  Post: async <T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<[AxiosError | null, AxiosResponse<T> | null]> => {
    try {
      const res: AxiosResponse<T> = await api.post<T>(url, data, config);
      return [null, res];
    } catch (err: unknown) {
      const error = err as AxiosError;
      return [error, null];
    }
  },

  Put: async <T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<[AxiosError | null, AxiosResponse<T> | null]> => {
    try {
      const res: AxiosResponse<T> = await api.put<T>(url, data, config);
      return [null, res];
    } catch (err: unknown) {
      const error = err as AxiosError;
      return [error, null];
    }
  },

  Delete: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<[AxiosError | null, AxiosResponse<T> | null]> => {
    try {
      const res: AxiosResponse<T> = await api.delete<T>(url, config);
      return [null, res];
    } catch (err: unknown) {
      const error = err as AxiosError;
      return [error, null];
    }
  },
};


export { api };
export default BaseRequest;
export { BaseRequestV2 };