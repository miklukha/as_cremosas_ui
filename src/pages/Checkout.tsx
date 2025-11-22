import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es, gl, enUS } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Checkout() {
  const { t, language } = useLanguage();
  const [pickupDate, setPickupDate] = useState<Date>();
  const locales = { es, gl, en: enUS };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-12 text-center text-foreground">
        {t.checkout.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Customer Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{t.checkout.customerDetails}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">{t.checkout.name}</Label>
                <Input id="name" placeholder="Juan Pérez" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">{t.checkout.email}</Label>
                <Input id="email" type="email" placeholder="juan@example.com" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="phone">{t.checkout.phone}</Label>
                <Input id="phone" type="tel" placeholder="+34 600 000 000" className="mt-2" />
              </div>

              <div>
                <Label>{t.checkout.pickupDate}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal mt-2',
                        !pickupDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? (
                        format(pickupDate, 'PPP', { locale: locales[language] })
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={setPickupDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="notes">{t.checkout.notes}</Label>
                <Textarea
                  id="notes"
                  placeholder="Instrucciones especiales..."
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{t.checkout.orderSummary}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Cheesecake Clásico</span>
                  <span className="font-semibold">28€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>28€</span>
                </div>
                <div className="flex justify-between py-3 text-lg font-semibold border-t-2 border-border">
                  <span>{t.checkout.total}</span>
                  <span className="text-accent">28€</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-accent text-lg py-6 mt-6">
                {t.checkout.placeOrder}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Los pedidos no son reembolsables debido a la naturaleza perecedera del producto
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
