export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  lang?: 'es' | 'en' | 'gl';
}

export interface ContactResponse {
  success: boolean;
  message: string;
  messageId?: string;
}
