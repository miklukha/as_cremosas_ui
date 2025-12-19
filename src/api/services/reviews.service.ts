import axiosClient from '../config/axiosClient';
import type { ApiResponse } from '../types/api.types';
import type { ReviewsData, GetReviewsParams } from '../types/reviews.types';

class ReviewsService {
  private readonly basePath = '/api/v1/reviews';

  async getReviews(params?: GetReviewsParams): Promise<ReviewsData> {
    const response = await axiosClient.get<ApiResponse<ReviewsData>>(
      this.basePath,
      { params }
    );

    if (!response.data.data) {
      throw new Error('No reviews data received from server');
    }

    return response.data.data;
  }

  async getReviewsByLanguage(lang: 'es' | 'en' | 'gl'): Promise<ReviewsData> {
    return this.getReviews({ lang });
  }
}

export const reviewsService = new ReviewsService();
