import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { cartService } from '@/api/services/cart.service';
import {
  Button,
  Input,
  Label,
  Textarea,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Alert,
  AlertDescription
} from '@/components/ui';
import {
  CalendarIcon,
  ArrowLeft,
  CreditCard,
  ShoppingBag,
  AlertCircle,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { format, addDays, isBefore, startOfDay } from 'date-fns';
import { es, gl, enUS } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface FormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: Date | undefined;
  pickupTime: 'morning' | 'evening' | '';
  notes: string;
}

interface FormErrors {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  pickupDate?: string;
  pickupTime?: string;
}

type CheckoutStep = 'details' | 'payment' | 'success';

export default function Checkout() {
  const { t, language } = useLanguage();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const locales = { es, gl, en: enUS };

  const [step, setStep] = useState<CheckoutStep>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    pickupDate: undefined,
    pickupTime: '',
    notes: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const minPickupDate = addDays(startOfDay(new Date()), 2);

  useEffect(() => {
    if (cart.items.length === 0 && step !== 'success') {
      navigate('/cart');
    }
  }, [cart.items.length, navigate, step]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const validation = t.checkout?.validation;

    if (!formData.customerName.trim()) {
      newErrors.customerName =
        validation?.nameRequired || 'El nombre es obligatorio';
    } else if (formData.customerName.trim().length < 2) {
      newErrors.customerName =
        validation?.nameMinLength ||
        'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail =
        validation?.emailRequired || 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail =
        validation?.emailInvalid || 'Por favor, introduce un email válido';
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone =
        validation?.phoneRequired || 'El teléfono es obligatorio';
    } else if (
      !/^[+]?[\d\s()-]{9,}$/.test(formData.customerPhone.replace(/\s/g, ''))
    ) {
      newErrors.customerPhone =
        validation?.phoneInvalid || 'Formato de teléfono inválido';
    }

    if (!formData.pickupDate) {
      newErrors.pickupDate =
        validation?.dateRequired || 'La fecha de recogida es obligatoria';
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime =
        validation?.timeRequired || 'La hora de recogida es obligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmitOrder = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const orderRequest = {
        orderSource: 'site' as const,
        customerName: formData.customerName.trim(),
        customerEmail: formData.customerEmail.trim(),
        customerPhone: formData.customerPhone.trim(),
        pickupDate: format(formData.pickupDate!, 'yyyy-MM-dd'),
        pickupTime: formData.pickupTime as 'morning' | 'evening',
        items: cart.items.map(item => ({
          productId: item.productId,
          productVariantId: item.productVariantId,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          isGlutenFree: item.isGlutenFree,
          isLactoseFree: item.isLactoseFree,
          isSugarFree: item.isSugarFree
        })),
        notes: formData.notes.trim() || undefined
      };

      const response = await cartService.createOrder(orderRequest);
      setOrderId(response.orderId);
      setStep('payment');
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error(t.checkout?.orderError || 'Error al procesar el pedido', {
        description:
          t.checkout?.orderErrorMessage ||
          'Ha ocurrido un error. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async () => {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      clearCart();
      setStep('success');
      toast.success(t.checkout?.orderSuccess || '¡Pedido realizado!', {
        description:
          t.checkout?.orderSuccessMessage ||
          'Gracias por tu pedido. Te enviaremos un email de confirmación.'
      });
    } catch (error) {
      console.error('Payment confirmation error:', error);
      toast.error(t.checkout?.paymentError || 'Error en el pago', {
        description:
          t.checkout?.paymentErrorMessage ||
          'No se pudo procesar el pago. Inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

  if (step === 'success') {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in">
        <Card className="text-center py-12">
          <CardContent className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {t.checkout?.orderSuccess || '¡Pedido realizado!'}
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              {t.checkout?.orderSuccessMessage ||
                'Gracias por tu pedido. Te enviaremos un email de confirmación.'}
            </p>
            {orderId && (
              <p className="text-sm text-muted-foreground">
                ID del pedido:{' '}
                <span className="font-mono font-semibold">{orderId}</span>
              </p>
            )}
            <div className="pt-4">
              <Button asChild>
                <Link to="/shop">
                  {t.cart?.continueShopping || 'Continuar Comprando'}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          {t.checkout?.payWithCard || 'Pagar con Tarjeta'}
        </h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              {t.checkout?.payWithCard || 'Pago con Tarjeta'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Stripe Payment Form Placeholder
              </p>
              <p className="text-sm text-muted-foreground">
                En producción, aquí se mostraría el formulario de pago de
                Stripe.
              </p>
            </div>

            <Separator />

            <div className="flex justify-between items-center text-lg font-semibold">
              <span>{t.checkout?.total || 'Total'}</span>
              <span className="text-accent">{cart.totalPrice.toFixed(2)}€</span>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setStep('details')}
                disabled={isSubmitting}
                className="flex-1"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.pagination?.previous || 'Anterior'}
              </Button>
              <Button
                onClick={handlePaymentSuccess}
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {t.checkout?.processing || 'Procesando...'}
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    {t.checkout?.payWithCard || 'Pagar'} •{' '}
                    {cart.totalPrice.toFixed(2)}€
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-5xl animate-fade-in">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/cart">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.cart?.title || 'Carrito'}
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          {t.checkout?.title || 'Finalizar Pedido'}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t.checkout?.customerDetails || 'Datos del Cliente'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="customerName">
                  {t.checkout?.name || 'Nombre completo'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={e =>
                    handleInputChange('customerName', e.target.value)
                  }
                  placeholder="Juan Pérez"
                  className={cn(errors.customerName && 'border-destructive')}
                  aria-invalid={!!errors.customerName}
                />
                {errors.customerName && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.customerName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerEmail">
                  {t.checkout?.email || 'Correo electrónico'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={formData.customerEmail}
                  onChange={e =>
                    handleInputChange('customerEmail', e.target.value)
                  }
                  placeholder="juan@example.com"
                  className={cn(errors.customerEmail && 'border-destructive')}
                  aria-invalid={!!errors.customerEmail}
                />
                {errors.customerEmail && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.customerEmail}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerPhone">
                  {t.checkout?.phone || 'Teléfono'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  value={formData.customerPhone}
                  onChange={e =>
                    handleInputChange('customerPhone', e.target.value)
                  }
                  placeholder="+34 600 000 000"
                  className={cn(errors.customerPhone && 'border-destructive')}
                  aria-invalid={!!errors.customerPhone}
                />
                {errors.customerPhone && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.customerPhone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>
                  {t.checkout?.pickupDate || 'Fecha de Recogida'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !formData.pickupDate && 'text-muted-foreground',
                        errors.pickupDate && 'border-destructive'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.pickupDate ? (
                        format(formData.pickupDate, 'PPP', {
                          locale: locales[language]
                        })
                      ) : (
                        <span>
                          {t.checkout?.selectDate || 'Selecciona una fecha'}
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.pickupDate}
                      onSelect={date =>
                        date && handleInputChange('pickupDate', date)
                      }
                      disabled={date =>
                        isBefore(date, minPickupDate) ||
                        date.getDay() === 0 ||
                        date.getDay() === 1
                      }
                      initialFocus
                      className="pointer-events-auto"
                      locale={locales[language]}
                    />
                  </PopoverContent>
                </Popover>
                {errors.pickupDate && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.pickupDate}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t.checkout?.minDaysNotice ||
                    'Los pedidos se aceptan con mínimo 2 días de antelación.'}
                </p>
              </div>

              <div className="space-y-2">
                <Label>
                  {t.checkout?.pickupTime || 'Hora de Recogida'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.pickupTime}
                  onValueChange={value =>
                    handleInputChange('pickupTime', value)
                  }
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div
                    className={cn(
                      'flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors',
                      formData.pickupTime === 'morning'
                        ? 'border-primary bg-primary/5'
                        : 'hover:bg-muted/50',
                      errors.pickupTime && 'border-destructive'
                    )}
                  >
                    <RadioGroupItem value="morning" id="morning" />
                    <Label
                      htmlFor="morning"
                      className="cursor-pointer flex-1 normal-case"
                    >
                      {t.checkout?.morning || 'Mañana (10:00 - 14:00)'}
                    </Label>
                  </div>
                  <div
                    className={cn(
                      'flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors',
                      formData.pickupTime === 'evening'
                        ? 'border-primary bg-primary/5'
                        : 'hover:bg-muted/50',
                      errors.pickupTime && 'border-destructive'
                    )}
                  >
                    <RadioGroupItem value="evening" id="evening" />
                    <Label
                      htmlFor="evening"
                      className="cursor-pointer flex-1 normal-case"
                    >
                      {t.checkout?.evening || 'Tarde (16:00 - 20:00)'}
                    </Label>
                  </div>
                </RadioGroup>
                {errors.pickupTime && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.pickupTime}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">
                  {t.checkout?.notes || 'Notas adicionales'}
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={e => handleInputChange('notes', e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Special instructions...'
                      : 'Instrucciones especiales...'
                  }
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t.checkout?.orderSummary || 'Resumen del Pedido'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cart.items.map(item => (
                  <div
                    key={item.id}
                    className="flex gap-3 py-2 border-b border-border last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate normal-case">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.variantName} • {getDietaryLabel(item)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.unitPrice.toFixed(2)}€ × {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">
                        {(item.unitPrice * item.quantity).toFixed(2)}€
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

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

              <div className="flex justify-between text-lg font-semibold">
                <span>{t.checkout?.total || 'Total'}</span>
                <span className="text-accent">
                  {cart.totalPrice.toFixed(2)}€
                </span>
              </div>

              <Button
                className="w-full mt-4"
                size="lg"
                onClick={handleSubmitOrder}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {t.checkout?.processing || 'Procesando...'}
                  </>
                ) : (
                  <>{t.checkout?.placeOrder || 'Realizar Pedido'}</>
                )}
              </Button>

              <Alert className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  {language === 'en'
                    ? 'Orders are non-refundable due to the perishable nature of the product.'
                    : language === 'gl'
                    ? 'Os pedidos non son reembolsables debido á natureza perecedeira do produto.'
                    : 'Los pedidos no son reembolsables debido a la naturaleza perecedera del producto.'}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
