export interface ProductVariant {
  id: number;
  name: string;
  measures: string;
  weightGrams: number;
  price: number;
  sortOrder: number;
  priceGluten: number;
  priceLactose: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  images: string[];
  allergens: string | null;
  available: boolean;
  categoryId: number;
  isPosibleGlutenFree: boolean;
  isPosibleLactoseFree: boolean;
  isPosibleSugarFree: boolean;
  isCakeOfTheMonth: boolean;
  createdAt: string;
  variants: ProductVariant[];
}

export interface ProductListItem {
  id: number;
  name: string;
  slug: string;
  // prices: number[];
  minPrice: string;
  maxPrice: string;
  images: string[];
  available: boolean;
  categoryId: number;
  isCakeOfTheMonth: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export type ProductSortOption =
  | 'price_asc'
  | 'price_desc'
  | 'created_asc'
  | 'created_desc';

export interface ProductFilters {
  glutenFree?: boolean;
  lactoseFree?: boolean;
  sugarFree?: boolean;
}

export interface GetProductsParams {
  page?: number;
  limit?: number;
  sort?: ProductSortOption;
  glutenFree?: boolean;
  lactoseFree?: boolean;
  sugarFree?: boolean;
  lang?: 'es' | 'en' | 'gl';
}

export interface GetProductsByCategoryParams extends GetProductsParams {
  categoryId: number;
}

export interface GetProductParams {
  id: number;
  lang?: 'es' | 'en' | 'gl';
}
