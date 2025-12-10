import axiosClient from '../config/axiosClient';
import type { ApiResponse } from '../types/api.types';
import type {
  Category,
  GetCategoriesParams,
  GetCategoryParams
} from '../types/category.types';

class CategoriesService {
  private readonly basePath = '/api/v1/categories';

  async getAll(params?: GetCategoriesParams): Promise<Category[]> {
    const response = await axiosClient.get<ApiResponse<Category[]>>(
      this.basePath,
      { params }
    );

    return response.data.data || [];
  }

  async getById(categoryParams: GetCategoryParams): Promise<Category> {
    const { id, lang } = categoryParams;

    const response = await axiosClient.get<ApiResponse<Category>>(
      `${this.basePath}/${id}`,
      { params: { lang } }
    );

    if (!response.data.data) {
      throw new Error(`Category with id ${id} not found`);
    }

    return response.data.data;
  }

  async delete(id: number): Promise<Category> {
    const response = await axiosClient.delete<ApiResponse<Category>>(
      `${this.basePath}/${id}`
    );

    if (!response.data.data) {
      throw new Error(`Failed to delete category with id ${id}`);
    }

    return response.data.data;
  }

  async getByLanguage(lang: 'es' | 'en' | 'gl'): Promise<Category[]> {
    return this.getAll({ lang });
  }
}

export const categoriesService = new CategoriesService();
