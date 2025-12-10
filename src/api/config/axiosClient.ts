import axios, {
  type AxiosInstance,
  AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse
} from 'axios';
import { ApiError } from '../errors/ApiError';
import type { ApiResponse } from '../types/api.types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:1881';

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Log request in development
    if (import.meta.env.DEV) {
      console.log(
        `🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`,
        {
          params: config.params,
          data: config.data
        }
      );
    }

    // Add authentication token if available
    // const token = localStorage.getItem('authToken');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: AxiosError) => {
    if (import.meta.env.DEV) {
      console.error('❌ [API Request Error]', error);
    }
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<unknown>>) => {
    // Log response in development
    if (import.meta.env.DEV) {
      console.log(`✅ [API Response] ${response.config.url}`, {
        status: response.status,
        data: response.data
      });
    }

    return response;
  },
  (error: AxiosError<ApiResponse<unknown>>) => {
    // Log error in development
    if (import.meta.env.DEV) {
      console.error('❌ [API Error]', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.response?.data?.message || error.message
      });
    }

    const apiError = ApiError.fromAxiosError(error);
    return Promise.reject(apiError);
  }
);

export default axiosClient;
