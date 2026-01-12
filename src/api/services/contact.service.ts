import axiosClient from '../config/axiosClient';
import type { ApiResponse } from '../types/api.types';
import type { ContactFormData, ContactResponse } from '../types/contact.types';

class ContactService {
  private readonly basePath = '/api/v1/contact';

  async sendMessage(data: ContactFormData): Promise<ContactResponse> {
    const response = await axiosClient.post<ApiResponse<ContactResponse>>(
      this.basePath,
      data
    );

    if (!response.data.data) {
      throw new Error('Failed to send contact message');
    }

    return response.data.data;
  }
}

export const contactService = new ContactService();
