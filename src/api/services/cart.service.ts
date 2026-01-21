import axiosClient from '../config/axiosClient';
import {
  type CreateOrderRequest,
  type CreateOrderResponse,
  type VerifySessionResponse
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

  async verifySession(
    sessionId: string | null
  ): Promise<VerifySessionResponse> {
    const response = await axiosClient.post<VerifySessionResponse>(
      `${this.basePath}/verify/session`,
      { sessionId }
    );
    return response.data;
  }

  async cancelOrder(orderId: string): Promise<void> {
    await axiosClient.post(`${this.basePath}/cancel`, { orderId });
  }
}

export const cartService = new CartService();
