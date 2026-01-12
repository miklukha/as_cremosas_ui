export interface B2BFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  orderSize: string;
  message?: string;
  lang?: 'es' | 'en' | 'gl';
}

export interface B2BResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
}
