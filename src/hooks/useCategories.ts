import { useState, useEffect, useCallback } from 'react';
import { categoriesService } from '@/api/services/categories.service';
import { useLanguage } from '@/context/LanguageContext';
import type { Category } from '@/api/types/category.types';
import type { ApiError } from '@/api/errors/ApiError';

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: ApiError | null;
}

interface UseCategoriesReturn extends CategoriesState {
  refetch: () => Promise<void>;
  getCategoryById: (id: number) => Promise<Category | null>;
}

export function useCategories(): UseCategoriesReturn {
  const { language } = useLanguage();

  const [state, setState] = useState<CategoriesState>({
    categories: [],
    loading: true,
    error: null
  });

  const fetchCategories = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await categoriesService.getByLanguage(language);

      setState({
        categories: data,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as ApiError;

      setState({
        categories: [],
        loading: false,
        error
      });

      if (import.meta.env.DEV) {
        console.error('Error fetching categories:', error);
      }
    }
  }, [language]);

  const getCategoryById = useCallback(
    async (id: number): Promise<Category | null> => {
      try {
        const category = await categoriesService.getById({
          id,
          lang: language
        });
        return category;
      } catch (err) {
        const error = err as ApiError;

        if (import.meta.env.DEV) {
          console.error(`Error fetching category ${id}:`, error);
        }

        return null;
      }
    },
    [language]
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories: state.categories,
    loading: state.loading,
    error: state.error,
    refetch: fetchCategories,
    getCategoryById
  };
}

export function useCategory(id: number) {
  const { language } = useLanguage();

  const [state, setState] = useState<{
    category: Category | null;
    loading: boolean;
    error: ApiError | null;
  }>({
    category: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const fetchCategory = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));

      try {
        const data = await categoriesService.getById({ id, lang: language });

        if (isMounted) {
          setState({
            category: data,
            loading: false,
            error: null
          });
        }
      } catch (err) {
        const error = err as ApiError;

        if (isMounted) {
          setState({
            category: null,
            loading: false,
            error
          });
        }
      }
    };

    fetchCategory();

    return () => {
      isMounted = false;
    };
  }, [id, language]);

  return state;
}

/** example
 * function MyComponent() {
 *   const { categories, loading, error, refetch } = useCategories();
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <ul>
 *       {categories.map(cat => (
 *         <li key={cat.id}>{cat.name}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */

/** example
 * function CategoryDetail({ id }: { id: number }) {
 *   const { category, loading, error } = useCategory(id);
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error || !category) return <div>Category not found</div>;
 *
 *   return <h1>{category.name}</h1>;
 * }
 */
