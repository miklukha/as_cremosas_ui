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
  shopId: number;
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
  totalPrice: number;
  lang: 'es' | 'gl' | 'en';
}

export interface CreateOrderResponse {
  status: 'success' | 'error';
  message: string | null;
  data: { checkoutUrl: string } | null;
}

export interface VerifySessionResponse {
  status: 'success' | 'error';
  message: string | null;
  data: {
    orderId: string;
    email?: string;
    pickupDate?: string;
    pickupTime?: string;
    totalPrice?: string;
  } | null;
}
