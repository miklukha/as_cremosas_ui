import { useState, useEffect, useCallback } from 'react';
import { reviewsService } from '@/api/services/reviews.service';
import { useLanguage } from '@/context/LanguageContext';
import type { ReviewsData } from '@/api/types/reviews.types';
import type { ApiError } from '@/api/errors/ApiError';

interface ReviewsState {
  data: ReviewsData | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseReviewsReturn extends ReviewsState {
  refetch: () => Promise<void>;
}

export function useReviews(): UseReviewsReturn {
  const { language } = useLanguage();

  const [state, setState] = useState<ReviewsState>({
    data: null,
    loading: true,
    error: null
  });

  const fetchReviews = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await reviewsService.getReviewsByLanguage(language);

      setState({
        data,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as ApiError;

      setState({
        data: null,
        loading: false,
        error
      });

      if (import.meta.env.DEV) {
        console.error('Error fetching reviews:', error);
      }
    }
  }, [language]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch: fetchReviews
  };
}

export function useReviewsWithLang(lang: 'es' | 'en' | 'gl'): UseReviewsReturn {
  const [state, setState] = useState<ReviewsState>({
    data: null,
    loading: true,
    error: null
  });

  const fetchReviews = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await reviewsService.getReviewsByLanguage(lang);

      setState({
        data,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as ApiError;

      setState({
        data: null,
        loading: false,
        error
      });

      if (import.meta.env.DEV) {
        console.error(`Error fetching reviews (${lang}):`, error);
      }
    }
  }, [lang]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch: fetchReviews
  };
}

/**
 * example
 * function ReviewsSection() {
 *   const { data, loading, error, refetch } = useReviews();
 *
 *   if (loading) return <LoadingSpinner />;
 *   if (error) return <ErrorAlert error={error} onRetry={refetch} />;
 *   if (!data) return null;
 *
 *   return (
 *     <div>
 *       <h2>{data.name} - {data.rating} ⭐</h2>
 *       {data.reviews.map(review => (
 *         <ReviewCard key={review.time} review={review} />
 *       ))}
 *     </div>
 *   );
 * }
 */

/** example
 * function SpanishReviews() {
 *   const { data, loading } = useReviewsWithLang('es');
 *   // ...
 * }
 */
