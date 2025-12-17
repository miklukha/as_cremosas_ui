import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Star } from 'lucide-react';
import { HeroSlider, ProductCard } from '@/components';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { t, language } = useLanguage();
  const { products } = useProducts();

  const displayedProducts = products.sort(
    (a, b) => (b.isCakeOfTheMonth ? 1 : 0) - (a.isCakeOfTheMonth ? 1 : 0)
  );

  const testimonials = [
    {
      name: 'María García',
      text: {
        es: '¡Los mejores cheesecakes que he probado! La textura es perfecta.',
        gl: 'Os mellores cheesecakes que probei! A textura é perfecta.',
        en: 'The best cheesecakes I have ever tasted! The texture is perfect.'
      }
    },
    {
      name: 'Carlos Fernández',
      text: {
        es: 'Calidad premium en cada bocado. Totalmente recomendable.',
        gl: 'Calidade premium en cada bocado. Totalmente recomendable.',
        en: 'Premium quality in every bite. Highly recommended.'
      }
    },
    {
      name: 'Ana López',
      text: {
        es: 'El chocolate es una delicia absoluta. ¡Volveré sin duda!',
        gl: 'O chocolate é unha delicia absoluta. Volverei sen dúbida!',
        en: 'The chocolate is an absolute delight. I will definitely come back!'
      }
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative h-[90vh] overflow-hidden">
        <HeroSlider />
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-foreground text-center">
            {t.home.bestsellers}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {displayedProducts.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" className="text-semibold">
              <Link to="/shop">{t.home.seeCollection}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-foreground text-center">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                  "{testimonial.text[language]}"
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
