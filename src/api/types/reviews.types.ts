export interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export interface ReviewsData {
  name: string;
  rating: number;
  reviews: Review[];
  user_ratings_total: number;
}

export interface GetReviewsParams {
  lang?: 'es' | 'en' | 'gl';
}
