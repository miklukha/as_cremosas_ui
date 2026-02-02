import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button, Card, CardContent, Skeleton } from '@/components/ui';
import { ArrowLeft, RefreshCw, Check } from 'lucide-react';
import { cartService } from '@/api/services/cart.service';
import { type Language } from '@/i18n/translations';

type PageStatus = 'loading' | 'paid' | 'cancelled';

export default function CheckoutCancel() {
  const { t, setLanguage } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState<PageStatus>('loading');

  const orderId = searchParams.get('order_id');
  const lang = searchParams.get('lang');

  useEffect(() => {
    if (lang && typeof setLanguage === 'function') {
      setLanguage(lang as Language);
    }

    if (!orderId) {
      navigate('/404', { replace: true });
      return;
    }

    const checkOrderStatus = async () => {
      try {
        const response = await cartService.findOrder(orderId);
        const orderData = response.data;

        if (orderData?.status === 'paid') {
          setPageStatus('paid');

          const params = new URLSearchParams({
            order_id: orderId,
            lang: lang || 'es'
          });

          setTimeout(() => {
            navigate(`/checkout/success?${params.toString()}`, {
              replace: true,
              state: {
                orderDetails: {
                  orderId: orderData.orderId,
                  email: orderData.email,
                  pickupDate: orderData.pickupDate,
                  pickupTime: orderData.pickupTime,
                  totalPrice: orderData.totalPrice
                }
              }
            });
          }, 1500);
        } else {
          setPageStatus('cancelled');

          try {
            await cartService.cancelOrder(orderId);
          } catch (cancelError) {
            console.error('Error cancelling order:', cancelError);
          }
        }
      } catch (error) {
        console.error('Error checking order status:', error);
        setPageStatus('cancelled');
      }
    };

    const timer = setTimeout(() => {
      checkOrderStatus();
    }, 300);

    return () => clearTimeout(timer);
  }, [orderId, lang, navigate, setLanguage]);

  if (pageStatus === 'loading') {
    return (
      <main
        className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <Card className="bg-primary-foreground">
          <CardContent className="py-12 space-y-6">
            <div className="flex justify-center">
              <Skeleton className="w-20 h-20 rounded-full" aria-hidden="true" />
            </div>
            <Skeleton className="h-8 w-3/4 mx-auto" aria-hidden="true" />
            <Skeleton className="h-4 w-1/2 mx-auto" aria-hidden="true" />
            <p className="text-center text-muted-foreground">
              {t.checkoutCancel?.verifying || 'Verificando estado del pago...'}
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (pageStatus === 'paid') {
    return (
      <main className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in">
        <Card className="bg-primary-foreground">
          <CardContent className="py-12 text-center space-y-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-green-600">
              {t.checkoutCancel?.paymentSuccess || '¡Pago completado!'}
            </h1>
            <p className="text-muted-foreground">
              {t.checkoutCancel?.redirecting ||
                'Redirigiendo a la página de confirmación...'}
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main
      className="container mx-auto px-4 pt-8 sm:pt-10 max-w-xl animate-fade-in"
      role="main"
      aria-labelledby="checkout-cancel-title"
    >
      <Card className="bg-primary-foreground overflow-hidden">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Cancel Message */}
          <header className="text-center space-y-2 mb-5">
            <h1
              id="checkout-cancel-title"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-destructive"
            >
              {t.checkoutCancel?.title || 'Pago cancelado'}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              {t.checkoutCancel?.message ||
                'El proceso de pago ha sido cancelado. Tu carrito sigue intacto y puedes intentarlo de nuevo cuando quieras.'}
            </p>
          </header>

          {/* Order Reference */}
          {orderId && (
            <section
              className="border rounded-lg p-4 mb-5"
              role="region"
              aria-labelledby="order-reference-heading"
            >
              <h2 id="order-reference-heading" className="sr-only">
                {t.checkoutCancel?.orderReference || 'Referencia del pedido'}
              </h2>
              <dl>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <dt className="text-xs sm:text-sm text-muted-foreground">
                    {t.checkoutCancel?.orderReference ||
                      'Referencia del pedido'}
                  </dt>
                  <dd className="text-sm sm:text-base font-semibold break-all">
                    #{orderId}
                  </dd>
                </div>
              </dl>
            </section>
          )}

          {/* Possible Reasons */}
          <section
            className="mb-7"
            role="region"
            aria-labelledby="reasons-heading"
          >
            <h2
              id="reasons-heading"
              className="text-sm font-medium text-center mb-3"
            >
              {t.checkoutCancel?.possibleReasons ||
                '¿Por qué no se completó el pago?'}
            </h2>
            <ul
              className="text-sm text-muted-foreground space-y-2"
              aria-label={t.checkoutCancel?.reasonsList || 'Posibles razones'}
            >
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason1 ||
                    'Cancelaste el proceso manualmente'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason2 ||
                    'Datos de tarjeta incorrectos (número, CVV o fecha)'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason3 ||
                    'Fondos insuficientes en la tarjeta'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason4 ||
                    'El banco rechazó la transacción'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason5 || 'La sesión de pago expiró'}
                </span>
              </li>
            </ul>
          </section>

          {/* Action Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-3"
            aria-label={
              t.checkoutSuccess?.navigation || 'Opciones de navegación'
            }
          >
            <Button size="lg" className="w-full sm:flex-1 min-h-10" asChild>
              <Link
                to="/checkout"
                aria-label={
                  t.checkoutCancel?.retryPayment || 'Intentar el pago de nuevo'
                }
              >
                <RefreshCw className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="truncate">
                  {t.checkoutCancel?.retryPayment || 'Intentar de nuevo'}
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:flex-1 min-h-10"
              asChild
            >
              <Link
                to="/cart"
                aria-label={
                  t.checkoutCancel?.backToCart ||
                  'Volver a la página del carrito'
                }
              >
                <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="truncate">
                  {t.checkoutCancel?.backToCart || 'Volver al carrito'}
                </span>
              </Link>
            </Button>
          </nav>
        </CardContent>
      </Card>

      {/* Help Link */}
      <footer className="text-center text-xs sm:text-sm text-muted-foreground mt-6 pb-8">
        {t.checkoutCancel?.needHelp || '¿Necesitas ayuda?'}{' '}
        <Link
          to="/contact"
          className="underline underline-offset-4 hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded transition-colors"
        >
          {t.checkoutCancel?.contactSupport || 'Contacta con nosotros'}
        </Link>
      </footer>
    </main>
  );
}
