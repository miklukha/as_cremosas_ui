export interface CartItem {
  id: string;
  productId: number;
  productVariantId: number | null;
  name: string;
  variantName: string | null;
  size: string;
  image: string;
  quantity: number;
  unitPrice: number;
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isSugarFree: boolean;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface CheckoutFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: string;
  pickupTime: 'morning' | 'evening';
  notes?: string;
}

export interface CreateOrderRequest {
  orderSource: 'site';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: string;
  pickupTime: 'morning' | 'evening';
  items: Array<{
    productId: number;
    productVariantId: number | null;
    quantity: number;
    unitPrice: number;
    isGlutenFree: boolean;
    isLactoseFree: boolean;
    isSugarFree: boolean;
  }>;
  notes?: string;
}

export interface CreateOrderResponse {
  orderId: string;
  stripeClientSecret: string;
  totalPrice: number;
}
