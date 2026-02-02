import axiosClient from '../config/axiosClient';
import {
  type CreateOrderRequest,
  type CreateOrderResponse,
  type FindOrderResponse
} from '../types/cart.types';

class CartService {
  private readonly basePath = '/api/v1/orders';

  async createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
    const response = await axiosClient.post<CreateOrderResponse>(
      this.basePath,
      data
    );

    return response.data;
  }

  async findOrder(orderId: string | null): Promise<FindOrderResponse> {
    const response = await axiosClient.get<FindOrderResponse>(
      `${this.basePath}/find/${orderId}`
    );
    return response.data;
  }

  async cancelOrder(orderId: string): Promise<void> {
    await axiosClient.post(`${this.basePath}/cancel`, { orderId });
  }
}

export const cartService = new CartService();
