import axiosClient from '../config/axiosClient';
import type { ApiResponse } from '../types/api.types';
import type {
  Product,
  ProductListItem,
  PaginatedResponse,
  GetProductsParams,
  GetProductsByCategoryParams,
  GetProductParams
} from '../types/product.types';

class ProductsService {
  private readonly basePath = '/api/v1/products';

  async getAll(
    params?: GetProductsParams
  ): Promise<PaginatedResponse<ProductListItem>> {
    const response = await axiosClient.get<
      ApiResponse<PaginatedResponse<ProductListItem>>
    >(this.basePath, {
      params: this.formatQueryParams(params)
    });

    return response.data.data || this.getEmptyPaginatedResponse();
  }

  async getByCategory(
    params: GetProductsByCategoryParams
  ): Promise<PaginatedResponse<ProductListItem>> {
    const { categoryId, ...queryParams } = params;

    const response = await axiosClient.get<
      ApiResponse<PaginatedResponse<ProductListItem>>
    >(`${this.basePath}/category/${categoryId}`, {
      params: this.formatQueryParams(queryParams)
    });

    return response.data.data || this.getEmptyPaginatedResponse();
  }

  async getById(productParams: GetProductParams): Promise<Product> {
    const { id, lang } = productParams;

    const response = await axiosClient.get<ApiResponse<Product>>(
      `${this.basePath}/${id}`,
      { params: { lang } }
    );

    if (!response.data.data) {
      throw new Error(`Product with id ${id} not found`);
    }

    return response.data.data;
  }

  async delete(id: number): Promise<{ id: number }> {
    const response = await axiosClient.delete<ApiResponse<{ id: number }>>(
      `${this.basePath}/${id}`
    );

    if (!response.data.data) {
      throw new Error(`Failed to delete product with id ${id}`);
    }

    return response.data.data;
  }

  private formatQueryParams(
    params?: GetProductsParams
  ): Record<string, string> {
    if (!params) return {};

    const formatted: Record<string, string> = {};

    if (params.page !== undefined) {
      formatted.page = String(params.page);
    }
    if (params.limit !== undefined) {
      formatted.limit = String(params.limit);
    }

    if (params.sort) {
      formatted.sort = params.sort;
    }

    if (params.glutenFree !== undefined) {
      formatted.glutenFree = String(params.glutenFree);
    }
    if (params.lactoseFree !== undefined) {
      formatted.lactoseFree = String(params.lactoseFree);
    }
    if (params.sugarFree !== undefined) {
      formatted.sugarFree = String(params.sugarFree);
    }

    if (params.lang) {
      formatted.lang = params.lang;
    }

    return formatted;
  }

  private getEmptyPaginatedResponse(): PaginatedResponse<ProductListItem> {
    return {
      items: [],
      total: 0,
      page: 1,
      limit: 12,
      pages: 0
    };
  }
}

export const productsService = new ProductsService();
