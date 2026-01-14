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
  Loader2,
  ChevronLeft
} from 'lucide-react';
import { format, addDays, isBefore, startOfDay } from 'date-fns';
import { es, gl, enUS } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';
import 'react-day-picker/dist/style.css';

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
  const { t } = useLanguage();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

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
  const [touched, setTouched] = useState<Record<keyof FormErrors, boolean>>({
    customerName: false,
    customerEmail: false,
    customerPhone: false,
    pickupDate: false,
    pickupTime: false
  });

  useEffect(() => {
    if (cart.items.length === 0 && step !== 'success') {
      navigate('/cart');
    }
  }, [cart.items.length, navigate, step]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const fields: Array<keyof FormErrors> = [
      'customerName',
      'customerEmail',
      'customerPhone',
      'pickupDate',
      'pickupTime'
    ];

    fields.forEach(field => {
      const value = formData[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      customerName: true,
      customerEmail: true,
      customerPhone: true,
      pickupDate: true,
      pickupTime: true
    });

    return isValid;
  };

  const validateField = (
    field: keyof FormErrors,
    value: string | Date | undefined
  ): string | undefined => {
    const validation = t.checkout?.validation;

    switch (field) {
      case 'customerName':
        if (!value || !(value as string).trim()) {
          return validation?.nameRequired || 'El nombre es obligatorio';
        }
        if ((value as string).trim().length < 2) {
          return (
            validation?.nameMinLength ||
            'El nombre debe tener al menos 2 caracteres'
          );
        }
        break;
      case 'customerEmail':
        if (!value || !(value as string).trim()) {
          return validation?.emailRequired || 'El email es obligatorio';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) {
          return (
            validation?.emailInvalid || 'Por favor, introduce un email válido'
          );
        }
        break;
      case 'customerPhone':
        if (typeof value !== 'string' || !value.trim()) {
          return validation?.phoneRequired;
        }

        const cleanPhone = value.trim();

        const phoneRegex = /^\+?\d+$/;

        if (!phoneRegex.test(cleanPhone)) {
          return validation?.phoneInvalid;
        }

        const digitsOnly = cleanPhone.replace(/\D/g, '');

        // Must have at least 8 digits (without +) and at most 15 digits (international standard E.164)
        if (digitsOnly.length < 8 || digitsOnly.length > 15) {
          return validation?.phoneInvalid;
        }

        break;
      case 'pickupDate':
        if (!value) {
          return (
            validation?.dateRequired || 'La fecha de recogida es obligatoria'
          );
        }
        if ((value as Date).getDay() === 0) {
          return (
            validation?.invalidDay || 'No disponible para recogida los domingos'
          );
        }
        break;
      case 'pickupTime':
        if (!value) {
          return (
            validation?.timeRequired || 'La hora de recogida es obligatoria'
          );
        }
        break;
    }
    return undefined;
  };

  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));

    const error = validateField(field as keyof FormErrors, value);
    setErrors(prev => ({ ...prev, [field]: error }));
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
    <div className="container mx-auto pt-8 sm:pt-10 max-w-5xl animate-fade-in">
      <Button
        variant="grow"
        size="lg"
        asChild
        className="mb-4 sm:mb-0 p-0 sm:p-0 gap-1"
      >
        <Link to="/cart">
          <ChevronLeft className="h-6! w-6!" />
          {t.cart?.title || 'Carrito'}
        </Link>
      </Button>
      <h1 className="text-2xl sm:text-4xl text-center mb-8 sm:mb-12">
        {t.checkout?.title || 'Finalizar Pedido'}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-primary-foreground">
            <CardHeader className="p-4 md:p-5 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg">
                {t.checkout?.customerDetails || 'Datos del Cliente'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-4 md:p-5 pt-0 md:pt-0">
              <div>
                <Label htmlFor="customerName">
                  {t.checkout?.name || 'Nombre'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={e =>
                    handleInputChange('customerName', e.target.value)
                  }
                  placeholder="Juan Pérez"
                  className={cn(
                    errors.customerName && 'border-destructive',
                    'text-sm'
                  )}
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
                  className={cn(
                    errors.customerEmail && 'border-destructive',
                    'text-sm'
                  )}
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
                  placeholder="+34600000000"
                  className={cn(
                    errors.customerPhone && 'border-destructive',
                    'text-sm'
                  )}
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
                <Label
                  className={
                    errors.pickupDate && touched.pickupDate
                      ? 'text-destructive'
                      : ''
                  }
                  htmlFor="pickupDate"
                >
                  {t.checkout?.pickupDate || 'Fecha de Recogida'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="pickupDate"
                  type="date"
                  value={
                    formData.pickupDate
                      ? format(formData.pickupDate, 'yyyy-MM-dd')
                      : ''
                  }
                  onChange={e => {
                    const date = e.target.value
                      ? new Date(e.target.value)
                      : undefined;
                    if (date) {
                      handleInputChange('pickupDate', date);
                    }
                  }}
                  min={format(addDays(new Date(), 2), 'yyyy-MM-dd')}
                  className={cn(
                    'w-full',
                    errors.pickupDate &&
                      touched.pickupDate &&
                      'border-destructive',
                    'text-sm'
                  )}
                  aria-invalid={!!(errors.pickupDate && touched.pickupDate)}
                />
                {errors.pickupDate && touched.pickupDate && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.pickupDate}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t.checkout?.minDaysNotice ||
                    'Los pedidos se aceptan con mínimo 2 días de antelación. Domingos cerrado.'}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pickupTime">
                  {t.checkout?.pickupTime || 'Hora de Recogida'}{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.pickupTime}
                  onValueChange={value =>
                    handleInputChange('pickupTime', value)
                  }
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <div
                    className={cn(
                      'flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all duration-300',
                      formData.pickupTime === 'morning'
                        ? 'border-accent bg-accent/5'
                        : 'hover:bg-muted/50',
                      errors.pickupTime && 'border-destructive',
                      'text-sm'
                    )}
                  >
                    <RadioGroupItem value="morning" id="morning" />
                    <Label
                      htmlFor="morning"
                      className="cursor-pointer flex-1 normal-case"
                    >
                      {t.checkout?.morning || 'Mañana (11:00 - 14:00)'}
                    </Label>
                  </div>
                  <div
                    className={cn(
                      'flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all duration-300',
                      formData.pickupTime === 'evening'
                        ? 'border-accent bg-accent/5'
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
                    t.checkout?.notePlaceholder ||
                    'Por favor, incluye cualquier instrucción especial...'
                  }
                  className="min-h-[100px] text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24 bg-primary-foreground">
            <CardHeader className="p-4 md:p-5 pb-3 md:pb-4">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
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

              <div className="flex justify-between text-base md:text-lg font-semibold">
                <span>{t.checkout?.total || 'Total'}</span>
                <span className="text-accent">
                  {cart.totalPrice.toFixed(2)}€
                </span>
              </div>

              <Button
                className="w-full mt-2"
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

              <p className="text-xs text-center text-muted-foreground mt-1">
                {t.checkout?.nonRefundableNotice ||
                  'Los pedidos no son reembolsables debido a la naturaleza perecedera del producto.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
