import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-cheesecake.jpg';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: 'María García',
      text: {
        es: '¡Los mejores cheesecakes que he probado! La textura es perfecta.',
        gl: 'Os mellores cheesecakes que probei! A textura é perfecta.',
        en: 'The best cheesecakes I have ever tasted! The texture is perfect.',
      },
    },
    {
      name: 'Carlos Fernández',
      text: {
        es: 'Calidad premium en cada bocado. Totalmente recomendable.',
        gl: 'Calidade premium en cada bocado. Totalmente recomendable.',
        en: 'Premium quality in every bite. Highly recommended.',
      },
    },
    {
      name: 'Ana López',
      text: {
        es: 'El chocolate es una delicia absoluta. ¡Volveré sin duda!',
        gl: 'O chocolate é unha delicia absoluta. Volverei sen dúbida!',
        en: 'The chocolate is an absolute delight. I will definitely come back!',
      },
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/30" />
        <img
          src={heroImage}
          alt="Premium Cheesecake"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {t.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t.home.hero.subtitle}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6">
            <Link to="/shop">
              {t.home.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.home.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.home.about.description}
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Nuestros Bestsellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/shop">Ver toda la colección</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text[language]}"
                </p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
