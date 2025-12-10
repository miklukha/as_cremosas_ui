export interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string | null;
  data: T | null;
}

export interface ApiErrorDetails {
  path?: string;
  message: string;
}

export type Language = 'es' | 'en' | 'gl';

export interface LanguageQueryParams {
  lang?: Language;
}
