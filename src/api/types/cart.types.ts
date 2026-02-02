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

// export interface CreateOrderResponse {
//   status: 'success' | 'error';
//   message: string | null;
//   data: { checkoutUrl: string } | null;
// }
export interface CreateOrderResponse {
  status: 'success' | 'error';
  message: string | null;
  data: {
    orderId: string;
    tpv: {
      actionURL: string;
      fields: {
        MerchantID: string;
        AcquirerBIN: string;
        TerminalID: string;
        Num_operacion: string;
        Importe: string;
        TipoMoneda: string;
        Exponente: string;
        Cifrado: string;
        Pago_soportado: string;
        Idioma: string;
        URL_OK: string;
        URL_NOK: string;
        Firma: string;
        Descripcion?: string;
      };
    };
  };
}

export interface FindOrderResponse {
  status: 'success' | 'error';
  message: string | null;
  data: {
    orderId: string;
    email?: string;
    status?: string;
    pickupDate?: string;
    pickupTime?: string;
    totalPrice?: string;
  } | null;
}
