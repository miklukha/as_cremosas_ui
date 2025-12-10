import { useState, useEffect, useCallback } from 'react';
import { productsService } from '@/api/services/products.service';
import { useLanguage } from '@/context/LanguageContext';
import type {
  Product,
  ProductListItem,
  PaginatedResponse,
  GetProductsParams,
  ProductFilters,
  ProductSortOption
} from '@/api/types/product.types';
import type { ApiError } from '@/api/errors/ApiError';

interface ProductsState {
  products: ProductListItem[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
  loading: boolean;
  error: ApiError | null;
}

interface UseProductsConfig {
  page?: number;
  limit?: number;
  sort?: ProductSortOption;
  filters?: ProductFilters;
  categoryId?: number;
}

interface UseProductsReturn extends ProductsState {
  refetch: () => Promise<void>;
  setPage: (page: number) => void;
  setSort: (sort: ProductSortOption) => void;
  setFilters: (filters: ProductFilters) => void;
  nextPage: () => void;
  prevPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function useProducts(config: UseProductsConfig = {}): UseProductsReturn {
  const { language } = useLanguage();

  const [page, setPageState] = useState(config.page || 1);
  const [limit] = useState(config.limit || 12);
  const [sort, setSortState] = useState<ProductSortOption>(
    config.sort || 'created_desc'
  );
  const [filters, setFiltersState] = useState<ProductFilters>(
    config.filters || {}
  );

  const [state, setState] = useState<ProductsState>({
    products: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 12,
      pages: 0
    },
    loading: true,
    error: null
  });

  const fetchProducts = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const params: GetProductsParams = {
        page,
        limit,
        sort,
        lang: language,
        ...filters
      };

      let data: PaginatedResponse<ProductListItem>;

      if (config.categoryId) {
        data = await productsService.getByCategory({
          ...params,
          categoryId: config.categoryId
        });
      } else {
        data = await productsService.getAll(params);
      }

      setState({
        products: data.items,
        pagination: {
          total: data.total,
          page: data.page,
          limit: data.limit,
          pages: data.pages
        },
        loading: false,
        error: null
      });
    } catch (err) {
      const error = err as ApiError;

      setState({
        products: [],
        pagination: {
          total: 0,
          page: 1,
          limit: 12,
          pages: 0
        },
        loading: false,
        error
      });

      if (import.meta.env.DEV) {
        console.error('Error fetching products:', error);
      }
    }
  }, [page, limit, sort, filters, language, config.categoryId]);

  const setPage = useCallback((newPage: number) => {
    setPageState(newPage);
  }, []);

  const setSort = useCallback((newSort: ProductSortOption) => {
    setSortState(newSort);
    setPageState(1);
  }, []);

  const setFilters = useCallback((newFilters: ProductFilters) => {
    setFiltersState(newFilters);
    setPageState(1);
  }, []);

  const nextPage = useCallback(() => {
    if (state.pagination.page < state.pagination.pages) {
      setPageState(prev => prev + 1);
    }
  }, [state.pagination.page, state.pagination.pages]);

  const prevPage = useCallback(() => {
    if (state.pagination.page > 1) {
      setPageState(prev => prev - 1);
    }
  }, [state.pagination.page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products: state.products,
    pagination: state.pagination,
    loading: state.loading,
    error: state.error,
    refetch: fetchProducts,
    setPage,
    setSort,
    setFilters,
    nextPage,
    prevPage,
    hasNextPage: state.pagination.page < state.pagination.pages,
    hasPrevPage: state.pagination.page > 1
  };
}

export function useProduct(id: number) {
  const { language } = useLanguage();

  const [state, setState] = useState<{
    product: Product | null;
    loading: boolean;
    error: ApiError | null;
  }>({
    product: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));

      try {
        const data = await productsService.getById({ id, lang: language });

        if (isMounted) {
          setState({
            product: data,
            loading: false,
            error: null
          });
        }
      } catch (err) {
        const error = err as ApiError;

        if (isMounted) {
          setState({
            product: null,
            loading: false,
            error
          });
        }

        if (import.meta.env.DEV) {
          console.error(`Error fetching product ${id}:`, error);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id, language]);

  return state;
}

export function useProductsByCategory(
  categoryId: number,
  config: Omit<UseProductsConfig, 'categoryId'> = {}
) {
  return useProducts({ ...config, categoryId });
}

/** Example usage of useProducts hook
 *
 * function ProductsList() {
 *   const {
 *     products,
 *     loading,
 *     pagination,
 *     setPage,
 *     setFilters,
 *     nextPage,
 *     prevPage
 *   } = useProducts({
 *     page: 1,
 *     limit: 12,
 *     sort: 'created_desc'
 *   });
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   return (
 *     <div>
 *       {products.map(product => (
 *         <ProductCard key={product.id} product={product} />
 *       ))}
 *       <Pagination
 *         page={pagination.page}
 *         pages={pagination.pages}
 *         onPageChange={setPage}
 *       />
 *     </div>
 *   );
 * }
 */

/** Hook for products by category with all features
 *
 * function CategoryProducts({ categoryId }: { categoryId: number }) {
 *   const { products, loading, setFilters } = useProductsByCategory(categoryId);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setFilters({ glutenFree: true })}>
 *         Gluten Free Only
 *       </button>
 *       {products.map(product => (
 *         <ProductCard key={product.id} product={product} />
 *       ))}
 *     </div>
 *   );
 * }
 */

/** Hook for fetching a single product by ID
 *
 * function ProductDetail({ id }: { id: number }) {
 *   const { product, loading, error } = useProduct(id);
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error || !product) return <div>Product not found</div>;
 *
 *   return (
 *     <div>
 *       <h1>{product.name}</h1>
 *       <p>{product.description}</p>
 *       {product.variants.map(variant => (
 *         <div key={variant.id}>
 *           {variant.name} - €{variant.price}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
