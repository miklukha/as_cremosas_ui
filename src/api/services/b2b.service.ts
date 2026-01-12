import axiosClient from '../config/axiosClient';
import type { ApiResponse } from '../types/api.types';
import type { B2BFormData, B2BResponse } from '../types/b2b.types';

class B2BService {
  private readonly basePath = '/api/v1/b2b';

  async sendInquiry(data: B2BFormData): Promise<B2BResponse> {
    const response = await axiosClient.post<ApiResponse<B2BResponse>>(
      this.basePath,
      data
    );

    if (!response.data.data) {
      throw new Error('Failed to send B2B inquiry');
    }

    return response.data.data;
  }
}

export const b2bService = new B2BService();
