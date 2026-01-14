import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { QuantitySelector } from '@/components';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui';
import { ShoppingBag, Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  const { t } = useLanguage();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromCart(itemId);
    toast.info(t.cart?.itemRemoved || 'Producto eliminado', {
      description: itemName
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast.info(t.cart?.cartCleared || 'Carrito vaciado');
  };

  const getDietaryLabel = (item: {
    isGlutenFree: boolean;
    isLactoseFree: boolean;
    isSugarFree: boolean;
  }) => {
    if (item.isGlutenFree) return t.cart?.glutenFree || 'Sin gluten';
    if (item.isLactoseFree) return t.cart?.lactoseFree || 'Sin lactosa';
    if (item.isSugarFree) return t.cart?.sugarFree || 'Sin azúcar';
    return t.cart?.normal || 'Normal';
  };

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/30 mb-6">
            <ShoppingBag className="h-12 w-12 text-accent" aria-hidden="true" />
          </div>
          <h1 className="text-2xl md:text-3xl mb-4">
            {t.cart?.empty || 'Tu carrito está vacío'}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t.cart?.emptyDescription ||
              'Descubre nuestras deliciosas tartas de queso y añade tus favoritas al carrito.'}
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">
              <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
              {t.cart?.continueShopping || 'Continuar Comprando'}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-8 sm:pt-10 max-w-5xl animate-fade-in">
      <h1 className="text-2xl sm:text-4xl text-center mb-8 sm:mb-12">
        {t.cart?.title || 'Tu Carrito'}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3">
          {cart.items.map(item => (
            <Card
              key={item.id}
              className="overflow-hidden bg-primary-foreground"
            >
              <CardContent className="p-3 md:p-4">
                <div className="flex gap-3 md:gap-4">
                  {/* Product Image */}
                  <div className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm md:text-base truncate ">
                          {item.name}
                        </h3>
                        <div className="mt-1 space-y-0.5 text-xs sm:text-sm text-muted-foreground">
                          {item.variantName && (
                            <p>
                              <span className="font-medium">
                                {t.cart?.size || 'Tamaño'}
                              </span>
                              : {item.variantName}
                            </p>
                          )}
                          <p>
                            <span className="font-medium">
                              {t.cart?.dietary || 'Tipo'}
                            </span>
                            : {getDietaryLabel(item)}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="grow"
                        size="icon-sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="shrink-0"
                        aria-label={`${t.cart?.remove || 'Eliminar'} ${
                          item.name
                        }`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div className="flex items-end sm:items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                          {t.cart?.quantity || 'Cantidad'}:
                        </span>
                        <QuantitySelector
                          quantity={item.quantity}
                          onQuantityChange={qty => updateQuantity(item.id, qty)}
                          min={1}
                          max={10}
                          aria-label={`${t.cart?.quantity || 'Cantidad'} de ${
                            item.name
                          }`}
                          className="gap-1 sm:gap-2 items-end sm:items-center"
                          btnClassName="py-3 px-3 sm:py-4 sm:px-4
                          h-3 w-3 sm:h-5 sm:w-5 border-muted-foreground! text-muted-foreground!"
                          iconClassName="h-3! w-3! text-muted-foreground!"
                          numberClassName="text-muted-foreground text-xs sm:text-sm font-normal"
                        />
                      </div>
                      <div className="text-right">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {item.unitPrice.toFixed(2)}€ × {item.quantity}
                        </p>
                        <p className=" text-sm md:text-base font-semibold">
                          {(item.unitPrice * item.quantity).toFixed(2)}€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart Button */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="grow"
              className="hover:scale-110"
              aria-label={t.cart?.continueShopping || 'Continuar Comprando'}
              asChild
            >
              <Link to="/shop">
                {t.cart?.continueShopping || 'Continuar Comprando'}
              </Link>
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-destructive hover:text-destructive border-destructive"
                  aria-label={t.cart?.clearCart || 'Vaciar carrito'}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  {t.cart?.clearCart || 'Vaciar carrito'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-medium">
                    {t.cart?.clearCart || 'Vaciar carrito'}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {t.cart?.clearCartConfirm ||
                      '¿Estás seguro de que quieres vaciar el carrito?'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    {t.cart?.clearCartCancel || 'Cancelar'}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleClearCart}
                    className="bg-destructive hover:bg-destructive/90"
                  >
                    {t.cart?.clearCartConfirmButton || 'Sí, vaciar'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 bg-primary-foreground">
            <CardHeader className="p-4 md:p-5 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t.cart?.orderSummary || 'Resumen del Pedido'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-5 pt-0 md:pt-0">
              {/* Items Summary */}
              <div className="space-y-2">
                {cart.items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm ">
                    <span className="text-muted-foreground truncate pr-2 normal-case">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium shrink-0">
                      {(item.unitPrice * item.quantity).toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="mb-3" />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t.cart?.subtotal || 'Subtotal'} ({cart.totalItems}{' '}
                    {cart.totalItems === 1
                      ? t.cart?.item || 'artículo'
                      : t.cart?.items || 'artículos'}
                    )
                  </span>
                  <span>{cart.totalPrice.toFixed(2)}€</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-base md:text-lg font-semibold ">
                <span>{t.cart?.total || 'Total'}</span>
                <span className="text-accent">
                  {cart.totalPrice.toFixed(2)}€
                </span>
              </div>

              <Button className="w-full mt-2" size="lg" asChild>
                <Link to="/checkout">
                  {t.cart?.checkout || 'Proceder al Pago'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-1">
                {t.checkout?.minDaysNotice ||
                  'Los pedidos se aceptan con mínimo 2 días de antelación.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
