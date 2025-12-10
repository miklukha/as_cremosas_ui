export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string | null;
}

export interface GetCategoryParams {
  id: number;
  lang?: 'es' | 'en' | 'gl';
}

export interface GetCategoriesParams {
  lang?: 'es' | 'en' | 'gl';
}
