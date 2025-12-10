import { AxiosError } from 'axios';
import type { ApiResponse } from '../types/api.types';

/**
 * Custom API Error class
 * Provides structured error information from backend
 */
export class ApiError extends Error {
  statusCode: number;
  endpoint: string;
  details: string | null;

  constructor(
    message: string,
    statusCode: number = 500,
    endpoint: string = 'unknown',
    details: string | null = null
  ) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.endpoint = endpoint;
    this.details = details;

    // Maintains proper stack trace for where error was thrown (only available on V8)
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, ApiError);
    // }
  }

  /**
   * Creates ApiError from Axios error
   */
  static fromAxiosError(error: AxiosError<ApiResponse<unknown>>): ApiError {
    const statusCode = error.response?.status || 500;
    const endpoint = error.config?.url || 'unknown';

    const backendMessage = error.response?.data?.message;
    const message =
      backendMessage || error.message || 'An unexpected error occurred';

    return new ApiError(
      message,
      statusCode,
      endpoint,
      error.response?.data?.message || null
    );
  }

  toLogFormat(): string {
    return `[ApiError ${this.statusCode}] ${this.endpoint}: ${this.message}${
      this.details ? ` | Details: ${this.details}` : ''
    }`;
  }
}
