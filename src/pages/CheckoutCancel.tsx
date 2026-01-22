import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button, Card, CardContent, Skeleton } from '@/components/ui';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { cartService } from '@/api/services/cart.service';

export default function CheckoutCancel() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const orderId = searchParams.get('order_id');

  useEffect(() => {
    if (!orderId) {
      navigate('/404', { replace: true });
      return;
    }

    const cancelOrder = async () => {
      try {
        await cartService.cancelOrder(orderId);
      } catch (error) {
        console.error('Error cancelling order:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      cancelOrder();
    }, 300);

    return () => clearTimeout(timer);
  }, [orderId, navigate]);

  if (isLoading) {
    return (
      <main
        className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label={t.checkoutCancel?.loading || 'Cargando...'}
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
              {t.checkoutCancel?.loading || 'Cargando...'}
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
      aria-labelledby="checkout-cancel-title"
    >
      <Card className="bg-primary-foreground overflow-hidden ">
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
                '¿Por qué se canceló el pago?'}
            </h2>
            <ul
              className="text-sm text-muted-foreground space-y-2"
              aria-label={t.checkoutCancel?.reasonsList || 'Posibles razones'}
            >
              <li className="flex items-start gap-2 text-center">
                <span className="text-muted-foreground/60 " aria-hidden="true">
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
                  {t.checkoutCancel?.reason2 || 'La sesión de pago expiró'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60" aria-hidden="true">
                  •
                </span>
                <span>
                  {t.checkoutCancel?.reason3 ||
                    'Hubo un problema con la conexión'}
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
                  {t.checkoutCancel?.retryPayment || 'intentar de nuevo'}
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
                  {t.checkoutCancel?.backToCart || 'volver al carrito'}
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
          aria-label={
            t.checkoutCancel?.contactSupport || 'Ir a la página de contacto'
          }
        >
          {t.checkoutCancel?.contactSupport || 'Contacta con nosotros'}
        </Link>
      </footer>
    </main>
  );
}
