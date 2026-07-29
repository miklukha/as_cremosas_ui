import { useEffect, useState } from 'react';
import {
  Link,
  useSearchParams,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Button, Card, CardContent, Skeleton } from '@/components/ui';
import { ShoppingBag, Home } from 'lucide-react';
import { cartService } from '@/api/services/cart.service';
import { logPurchase } from '@/lib/analytics';
import { type Language } from '@/i18n/translations';

interface OrderDetails {
  orderId: string;
  email?: string;
  pickupDate?: string;
  pickupTime?: string;
  totalPrice?: string;
}

export default function CheckoutSuccess() {
  const { t, setLanguage } = useLanguage();
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const orderId = searchParams.get('order_id');
  const lang = searchParams.get('lang');

  const passedOrderDetails = (location.state as { orderDetails?: OrderDetails })
    ?.orderDetails;

  // console.log(passedOrderDetails);

  useEffect(() => {
    if (lang && typeof setLanguage === 'function') {
      setLanguage(lang as Language);
    }

    if (!orderId) {
      navigate('/404', { replace: true });
      return;
    }

    clearCart();

    if (passedOrderDetails && passedOrderDetails.orderId) {
      setOrderDetails(passedOrderDetails);
      setIsLoading(false);

      // Analytics
      const consent = localStorage.getItem('cookie-consent');
      const isAnalyticsEnabled = consent
        ? JSON.parse(consent).analytics
        : false;
      if (isAnalyticsEnabled) {
        logPurchase(
          passedOrderDetails.orderId,
          parseFloat(passedOrderDetails.totalPrice || '0')
        );
      }
      return;
    }

    const fetchOrderDetails = async () => {
      try {
        const response = await cartService.findOrder(orderId);

        if (!response.data || !response.data.orderId) {
          navigate('/404', { replace: true });
          return;
        }

        const data = response.data;
        setOrderDetails({
          orderId: data.orderId,
          email: data.email,
          pickupDate: data.pickupDate,
          pickupTime: data.pickupTime,
          totalPrice: data.totalPrice
        });

        // Analytics
        const consent = localStorage.getItem('cookie-consent');
        const isAnalyticsEnabled = consent
          ? JSON.parse(consent).analytics
          : false;
        if (isAnalyticsEnabled) {
          logPurchase(data.orderId, parseFloat(data.totalPrice || '0'));
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
        navigate('/404', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchOrderDetails();
    }, 500);

    return () => clearTimeout(timer);
  }, [orderId, lang, clearCart, navigate, setLanguage, passedOrderDetails]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <main
        className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label={t.checkoutSuccess?.loading || 'Verificando pago...'}
      >
        <Card className="bg-primary-foreground">
          <CardContent className="py-12 space-y-6">
            <div className="flex justify-center">
              <Skeleton className="w-20 h-20 rounded-full" aria-hidden="true" />
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto" aria-hidden="true" />
            <Skeleton className="h-4 w-1/2 mx-auto" aria-hidden="true" />
            <div className="space-y-3 pt-4">
              <Skeleton className="h-12 w-full" aria-hidden="true" />
              <Skeleton className="h-12 w-full" aria-hidden="true" />
            </div>
            <span className="sr-only">
              {t.checkoutSuccess?.loading || 'Verificando pago...'}
            </span>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main
      className="container mx-auto px-4 pt-8 sm:pt-10 max-w-xl animate-fade-in"
      role="main"
      aria-labelledby="checkout-success-title"
    >
      <Card className="bg-primary-foreground overflow-hidden">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Success Message */}
          <header className="text-center space-y-2 mb-5">
            <h1
              id="checkout-success-title"
              className="text-xl sm:text-2xl md:text-3xl font-semibold"
            >
              {t.checkoutSuccess?.title || '¡Pago completado!'}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              {t.checkoutSuccess?.message ||
                'Gracias por tu pedido. Hemos recibido tu pago correctamente.'}
            </p>
          </header>

          {/* Order Info */}
          {orderDetails && (
            <section
              className="border rounded-lg p-4 sm:p-5 mb-4"
              role="region"
              aria-labelledby="order-details-heading"
            >
              <h2 id="order-details-heading" className="sr-only">
                {t.checkoutSuccess?.orderDetails || 'Detalles del pedido'}
              </h2>

              <dl className="space-y-3">
                {/* Order ID */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <dt className="text-xs sm:text-sm text-muted-foreground">
                    {t.checkoutSuccess?.orderId || 'Número de pedido'}
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold break-all">
                    #{orderDetails.orderId}
                  </dd>
                </div>

                {/* Email */}
                {orderDetails.email && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <dt className="text-xs sm:text-sm text-muted-foreground">
                      {t.checkout?.email || 'Correo electrónico'}
                    </dt>
                    <dd className="text-xs sm:text-sm break-all">
                      {orderDetails.email}
                    </dd>
                  </div>
                )}

                {/* Pickup Date */}
                {orderDetails.pickupDate && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <dt className="text-xs sm:text-sm text-muted-foreground">
                      {t.checkout?.pickupDate || 'Fecha de Recogida'}
                    </dt>
                    <dd className="text-xs sm:text-sm">
                      <time dateTime={orderDetails.pickupDate}>
                        {formatDate(orderDetails.pickupDate)}
                      </time>
                    </dd>
                  </div>
                )}

                {/* Pickup Time */}
                {orderDetails.pickupTime && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <dt className="text-xs sm:text-sm text-muted-foreground">
                      {t.checkout?.pickupTime || 'Hora de Recogida'}
                    </dt>
                    <dd className="text-xs sm:text-sm">
                      {t.checkout?.[orderDetails.pickupTime] ||
                        orderDetails.pickupTime}
                    </dd>
                  </div>
                )}

                {/* Total */}
                {orderDetails.totalPrice && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-3 border-t border-border">
                    <dt className="text-sm font-medium">
                      {t.checkout?.total || 'Total'}
                    </dt>
                    <dd className="text-sm sm:text-base font-semibold text-accent">
                      {orderDetails.totalPrice}€
                    </dd>
                  </div>
                )}
              </dl>
            </section>
          )}

          {/* Email Notice */}
          <p
            className="text-xs sm:text-sm text-muted-foreground text-center mb-6"
            role="note"
          >
            {t.checkoutSuccess?.emailNotice ||
              'Te enviaremos un email de confirmación con todos los detalles de tu pedido.'}
          </p>

          {/* Action Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-3"
            aria-label={
              t.checkoutSuccess?.navigation || 'Opciones de navegación'
            }
          >
            <Button size="lg" className="flex-1 min-h-10" asChild>
              <Link to="/shop">
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                {t.cart?.continueShopping || 'Continuar comprando'}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 min-h-10"
              asChild
            >
              <Link to="/">
                <Home className="h-5 w-5" aria-hidden="true" />
                {t.nav?.home || 'Inicio'}
              </Link>
            </Button>
          </nav>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <footer className="text-center text-xs sm:text-sm text-muted-foreground mt-6 pb-8">
        {t.checkoutSuccess?.questions || '¿Tienes alguna pregunta?'}{' '}
        <Link
          to="/contact"
          className="underline underline-offset-4 hover:text-foreground"
        >
          {t.checkoutSuccess?.contactUs || 'Contáctanos'}
        </Link>
      </footer>
    </main>
  );
}
