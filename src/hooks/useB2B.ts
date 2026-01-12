import { useState } from 'react';
import { b2bService } from '@/api/services/b2b.service';
import { useLanguage } from '@/context/LanguageContext';
import type { B2BFormData } from '@/api/types/b2b.types';
import type { ApiError } from '@/api/errors/ApiError';

interface UseB2BReturn {
  sendInquiry: (data: Omit<B2BFormData, 'lang'>) => Promise<void>;
  loading: boolean;
  error: ApiError | null;
  success: boolean;
  reset: () => void;
}

export function useB2B(): UseB2BReturn {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [success, setSuccess] = useState(false);

  const sendInquiry = async (data: Omit<B2BFormData, 'lang'>) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await b2bService.sendInquiry({
        ...data,
        lang: language
      });

      setSuccess(true);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);

      if (import.meta.env.DEV) {
        console.error('Error sending B2B inquiry:', apiError);
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    sendInquiry,
    loading,
    error,
    success,
    reset
  };
}
