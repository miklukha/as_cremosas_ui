import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-0DMW0YX9XP'; // Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true
    }
  });
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// E-commerce events
export const logAddToCart = (item: {
  id: string;
  productVariantId: string;
  name: string;
  variantName: string;
  size: string;
  price: number;
  quantity: number;
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isSugarFree: boolean;
}) => {
  ReactGA.event('add_to_cart', {
    currency: 'EUR',
    value: item.price * item.quantity,
    items: [
      {
        item_id: item.id,
        item_variant_id: item.productVariantId,
        item_variant_name: item.variantName,
        item_size: item.size,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
        item_gluten_free: item.isGlutenFree,
        item_lactose_free: item.isLactoseFree,
        item_sugar_free: item.isSugarFree
      }
    ]
  });
};

export const logPurchase = (orderId: string, value: number) => {
  ReactGA.event('purchase', {
    transaction_id: orderId,
    value: value,
    currency: 'EUR'
  });
};

export const logBeginCheckout = (value: number, items: any[]) => {
  ReactGA.event('begin_checkout', {
    currency: 'EUR',
    value: value,
    items: items
  });
};

export const logViewItem = (item: {
  id: string;
  name: string;
  price: number;
}) => {
  ReactGA.event('view_item', {
    currency: 'EUR',
    value: item.price,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        price: item.price
      }
    ]
  });
};
