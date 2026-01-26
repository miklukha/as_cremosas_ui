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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Checkbox
} from '@/components/ui';
import { ShoppingBag, Loader2, ChevronLeft } from 'lucide-react';
import { format, addDays, startOfDay } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';
import { logBeginCheckout } from '@/lib/analytics';

interface FormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: Date | undefined;
  pickupTime: 'morning' | 'evening' | '';
  notes: string;
  acceptTerms: boolean;
}

interface FormErrors {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  pickupDate?: string;
  pickupTime?: string;
  acceptTerms?: string;
}

export default function Checkout() {
  const { t, language } = useLanguage();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    pickupDate: undefined,
    pickupTime: '',
    notes: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormErrors, boolean>>({
    customerName: false,
    customerEmail: false,
    customerPhone: false,
    pickupDate: false,
    pickupTime: false,
    acceptTerms: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent && JSON.parse(consent).analytics) {
      logBeginCheckout(cart.totalPrice, cart.items);
    }
  }, []);

  useEffect(() => {
    if (cart.items.length === 0) {
      navigate('/cart');
    }
  }, [cart.items.length, navigate]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const fields: Array<keyof FormErrors> = [
      'customerName',
      'customerEmail',
      'customerPhone',
      'pickupDate',
      'pickupTime',
      'acceptTerms'
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
      pickupTime: true,
      acceptTerms: true
    });

    return isValid;
  };

  const validateField = (
    field: keyof FormErrors,
    value: string | Date | undefined | boolean
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
        const selectedDate = value as Date;
        if (selectedDate.getDay() === 0) {
          return (
            validation?.invalidDay || 'No disponible para recogida los domingos'
          );
        }

        const minDate = getMinOrderDate();
        if (startOfDay(selectedDate) < startOfDay(minDate)) {
          const now = new Date();
          const currentHour = now.getHours();
          const currentDay = now.getDay();

          if (currentDay === 6 && currentHour >= 12) {
            return (
              validation?.minDaysNoticeSaturday ||
              'Los pedidos realizados en sábado después de las 12:00 requieren mínimo 3 días de antelación'
            );
          }
          return (
            validation?.minDaysNotice ||
            'Los pedidos requieren mínimo 2 días de antelación'
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
      case 'acceptTerms':
        if (!value) {
          return (
            validation?.termsRequired ||
            'Debes aceptar los términos y condiciones para continuar'
          );
        }
        break;
    }
    return undefined;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | Date | boolean
  ) => {
    // Special handling for phone field - allow only digits and +
    let processedValue = value;

    if (field === 'customerPhone' && typeof value === 'string') {
      // Remove all characters except digits and +
      processedValue = value.replace(/[^\d+]/g, '');

      // Ensure + can only be at the beginning
      if (processedValue.includes('+')) {
        const plusCount = (processedValue.match(/\+/g) || []).length;
        if (plusCount > 1 || processedValue.indexOf('+') !== 0) {
          // Remove all + signs and add one at the beginning if original had it at start
          processedValue = processedValue.replace(/\+/g, '');
          if (value.trim().startsWith('+')) {
            processedValue = '+' + processedValue;
          }
        }
      }
    }

    setFormData(prev => ({ ...prev, [field]: processedValue }));
    setTouched(prev => ({ ...prev, [field]: true }));

    if (field in errors) {
      const error = validateField(
        field as keyof FormErrors,
        processedValue as string | Date | undefined
      );
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmitOrder = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const orderRequest = {
        orderSource: 'site' as const,
        shopId: 1,
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
        notes: formData.notes.trim() || undefined,
        totalPrice: cart.totalPrice,
        lang: language
      };

      const response = await cartService.createOrder(orderRequest);
      console.log(response);
      const checkoutUrl = response.data?.checkoutUrl;

      if (!!checkoutUrl) {
        window.location.href = checkoutUrl;
      }
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

  const getMinOrderDate = (): Date => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday

    let minDays = 2;

    // Якщо сьогодні субота ДО 12:00, потрібно 3 дні
    if (currentDay === 6 && currentHour >= 12) {
      minDays = 3;
    }

    let minDate = addDays(now, minDays);

    // Пропускаємо неділі
    if (minDate.getDay() === 0) {
      minDate = addDays(minDate, 1);
    }

    return minDate;
  };

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
                    {/* <AlertCircle className="h-3 w-3" /> */}
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
                  name="email"
                  autoComplete="email"
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
                    {/* <AlertCircle className="h-3 w-3" /> */}
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
                  name="tel"
                  autoComplete="tel"
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
                    {/* <AlertCircle className="h-3 w-3" /> */}
                    {errors.customerPhone}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupDate">
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
                  min={format(getMinOrderDate(), 'yyyy-MM-dd')}
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
                    {/* <AlertCircle className="h-3 w-3" /> */}
                    {errors.pickupDate}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {(() => {
                    const now = new Date();
                    const currentHour = now.getHours();
                    const currentDay = now.getDay();

                    if (currentDay === 6 && currentHour >= 12) {
                      return (
                        t.checkout?.validation?.minDaysNoticeSaturday ||
                        'Pedidos en sábado después de las 12:00: mínimo 3 días de antelación. Domingos cerrado.'
                      );
                    }
                    return (
                      t.checkout?.validation?.minDaysNotice ||
                      'Pedidos realizados en sábado después de las 12:00: recogida desde el martes siguiente'
                    );
                  })()}
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
                      {t.checkout?.morning || 'Mañana '}
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
                      {t.checkout?.evening || 'Tarde'}
                    </Label>
                  </div>
                </RadioGroup>
                {errors.pickupTime && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    {/* <AlertCircle className="h-3 w-3" /> */}
                    {errors.pickupTime}
                  </p>
                )}
              </div>

              <div className="space-y-2 mb-4">
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

              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-1.5">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={checked =>
                      handleInputChange('acceptTerms', checked as boolean)
                    }
                    className={cn(
                      errors.acceptTerms &&
                        touched.acceptTerms &&
                        'border-destructive'
                    )}
                    aria-invalid={!!(errors.acceptTerms && touched.acceptTerms)}
                  />
                  <Label
                    htmlFor="acceptTerms"
                    className="font-normal cursor-pointer normal-case leading-tight"
                  >
                    {t.checkout?.privacyConsent || 'He leído y acepto la'}{' '}
                    <Link
                      to="/terms"
                      className="text-accent underline underline-offset-2 hover:text-accent/80"
                      target="_blank"
                    >
                      {t.checkout?.terms || 'Términos y Condiciones de Compra'}
                    </Link>{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.acceptTerms && touched.acceptTerms && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    {errors.acceptTerms}
                  </p>
                )}
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
