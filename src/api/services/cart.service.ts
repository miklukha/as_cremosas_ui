import axiosClient from '../config/axiosClient';
import {
  type CreateOrderRequest,
  type CreateOrderResponse
} from '../types/cart.types';

class CartService {
  async createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
    const response = await axiosClient.post<CreateOrderResponse>(
      '/orders',
      data
    );
    return response.data;
  }

  async confirmPayment(
    orderId: string,
    paymentIntentId: string
  ): Promise<void> {
    await axiosClient.post(`/orders/${orderId}/confirm-payment`, {
      paymentIntentId
    });
  }
}

export const cartService = new CartService();
