import { useState } from 'react';
import { contactService } from '@/api/services/contact.service';
import { useLanguage } from '@/context/LanguageContext';
import type { ContactFormData } from '@/api/types/contact.types';
import type { ApiError } from '@/api/errors/ApiError';

interface UseContactReturn {
  sendMessage: (data: Omit<ContactFormData, 'lang'>) => Promise<void>;
  loading: boolean;
  error: ApiError | null;
  success: boolean;
  reset: () => void;
}

export function useContact(): UseContactReturn {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (data: Omit<ContactFormData, 'lang'>) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await contactService.sendMessage({
        ...data,
        lang: language
      });

      setSuccess(true);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);

      if (import.meta.env.DEV) {
        console.error('Error sending contact message:', apiError);
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
    sendMessage,
    loading,
    error,
    success,
    reset
  };
}
