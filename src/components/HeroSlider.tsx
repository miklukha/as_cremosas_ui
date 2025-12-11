import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import heroImage1 from '@/assets/hero-cheesecake.jpg';
import heroImage2 from '@/assets/hero-cheesecake-2.jpg';
import heroImage3 from '@/assets/hero-cheesecake-3.jpg';

export const HeroSlider = () => {
  const { t } = useLanguage();

  const heroSlides = [
    {
      image: heroImage1,
      title: t.home.hero.title,
      cta: t.home.hero.cta
    },
    {
      image: heroImage2,
      title: t.home.hero.title2,
      cta: t.home.hero.cta
    },
    {
      image: heroImage3,
      title: t.home.hero.title3,
      cta: t.home.hero.cta
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true,
        dynamicBullets: false,
        bulletClass: 'swiper-pagination-bullet hero-pagination-bullet',
        bulletActiveClass:
          'swiper-pagination-bullet-active hero-pagination-bullet-active'
      }}
      speed={1000}
      className="h-full w-full hero-swiper"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Tartas de queso ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/70 to-background/60 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-foreground leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <Button
                variant="outline"
                // asChild
                size="lg"
                className="text-semibold"
              >
                <Link to="/shop">{slide.cta}</Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
