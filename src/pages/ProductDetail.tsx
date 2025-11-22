import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es, gl, enUS } from 'date-fns/locale';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [pickupDate, setPickupDate] = useState<Date>();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-serif mb-4">Producto no encontrado</h1>
        <Button asChild>
          <Link to="/shop">Volver a la tienda</Link>
        </Button>
      </div>
    );
  }

  const locales = { es, gl, en: enUS };
  const recommendedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image */}
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg bg-secondary">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">
            {product.name[language]}
          </h1>
          <p className="text-3xl font-serif font-semibold mb-6 text-accent">
            {product.price}€
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            {product.description[language]}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">{t.product.ingredients}</h3>
            <p className="text-muted-foreground">
              {product.ingredients[language].join(', ')}
            </p>
          </div>

          {/* Allergens */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-2">{t.product.allergens}</h3>
            <p className="text-muted-foreground">
              {product.allergens[language].join(', ')}
            </p>
          </div>

          {/* Pickup Date */}
          <div className="mb-8">
            <label className="block font-semibold mb-2">{t.product.pickupDate}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
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

          {/* CTA */}
          <Button size="lg" className="w-full bg-primary hover:bg-accent text-lg py-6">
            {t.product.orderNow}
          </Button>
        </div>
      </div>

      {/* Recommended Products */}
      <section>
        <h2 className="font-serif text-4xl font-bold mb-8 text-center text-foreground">
          {t.product.recommended}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
