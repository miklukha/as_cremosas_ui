import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { HeroSlider, ProductCard, ReviewsSection } from '@/components';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { t } = useLanguage();
  const { products } = useProducts();

  const displayedProducts = products.sort(
    (a, b) => (b.isCakeOfTheMonth ? 1 : 0) - (a.isCakeOfTheMonth ? 1 : 0)
  );

  return (
    <div className="animate-fade-in">
      <section className="relative h-[90vh] overflow-hidden">
        <HeroSlider />
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 px-4 bg-secondary/15">
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

      <ReviewsSection />
    </div>
  );
}
