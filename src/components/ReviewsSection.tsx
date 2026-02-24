import { useRef } from 'react';
import { useReviews } from '@/hooks/useReviews';
import { useLanguage } from '@/context/LanguageContext';
import { ReviewCard } from '@/components/ReviewCard';
import { Button, Skeleton, Card } from '@/components/ui';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/swiper-bundle.css';

export function ReviewsSection() {
  const { t } = useLanguage();
  const { data, loading, error } = useReviews();

  const swiperRef = useRef<SwiperType | null>(null);

  // const reviews = [
  //   {
  //     author_name: 'Sun',
  //     author_url:
  //       'https://www.google.com/maps/contrib/118145184833567114991/reviews',
  //     language: 'es',
  //     original_language: 'es',
  //     profile_photo_url:
  //       'https://lh3.googleusercontent.com/a/ACg8ocLDOvjqe7BuvIVaBFbhy1DVnWwi6qXWorHzS5fwPSu7ruzxucM7=s128-c0x00000000-cc-rp-mo',
  //     rating: 5,
  //     relative_time_description: 'en la última semana',
  //     text: 'En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼 En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼 En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼 En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼',
  //     time: 1766047104,
  //     translated: false
  //   },
  //   {
  //     author_name: 'Armas',
  //     author_url:
  //       'https://www.google.com/maps/contrib/118145184833567114991/reviews',
  //     language: 'es',
  //     original_language: 'es',
  //     profile_photo_url:
  //       'https://lh3.googleusercontent.com/a/ACg8ocLDOvjqe7BuvIVaBFbhy1DVnWwi6qXWorHzS5fwPSu7ruzxucM7=s128-c0x00000000-cc-rp-mo',
  //     rating: 5,
  //     relative_time_description: 'en la última semana',
  //     text: 'En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼',
  //     time: 1766047104,
  //     translated: false
  //   },
  //   {
  //     author_name: 'Armas',
  //     author_url:
  //       'https://www.google.com/maps/contrib/118145184833567114991/reviews',
  //     language: 'es',
  //     original_language: 'es',
  //     profile_photo_url:
  //       'https://lh3.googleusercontent.com/a/ACg8ocLDOvjqe7BuvIVaBFbhy1DVnWwi6qXWorHzS5fwPSu7ruzxucM7=s128-c0x00000000-cc-rp-mo',
  //     rating: 5,
  //     relative_time_description: 'en la última semana',
  //     text: 'En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼',
  //     time: 1766047104,
  //     translated: false
  //   },
  //   {
  //     author_name: 'Armas',
  //     author_url:
  //       'https://www.google.com/maps/contrib/118145184833567114991/reviews',
  //     language: 'es',
  //     original_language: 'es',
  //     profile_photo_url:
  //       'https://lh3.googleusercontent.com/a/ACg8ocLDOvjqe7BuvIVaBFbhy1DVnWwi6qXWorHzS5fwPSu7ruzxucM7=s128-c0x00000000-cc-rp-mo',
  //     rating: 5,
  //     relative_time_description: 'en la última semana',
  //     text: 'En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼',
  //     time: 1766047104,
  //     translated: false
  //   },
  //   {
  //     author_name: 'Armas',
  //     author_url:
  //       'https://www.google.com/maps/contrib/118145184833567114991/reviews',
  //     language: 'es',
  //     original_language: 'es',
  //     profile_photo_url:
  //       'https://lh3.googleusercontent.com/a/ACg8ocLDOvjqe7BuvIVaBFbhy1DVnWwi6qXWorHzS5fwPSu7ruzxucM7=s128-c0x00000000-cc-rp-mo',
  //     rating: 5,
  //     relative_time_description: 'en la última semana',
  //     text: 'En Instagram tiene una pinta increíble, tengo muchas ganas de la apertura 🤩👏🏼',
  //     time: 1766047104,
  //     translated: true
  //   }
  // ];

  // Loading State
  if (loading) {
    return (
      <section
        className="py-16 sm:py-20 px-4"
        aria-live="polite"
        aria-label={t.reviews?.loading || 'Cargando reseñas'}
      >
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-8 sm:h-10 w-64 mx-auto mb-8" />

          <div className="flex items-center justify-center gap-3 mb-12">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-8 w-32" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="overflow-hidden bg-primary-foreground">
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Empty/Error State
  if (!data || data.reviews.length === 0 || error) {
    return null;
  }

  const reviewCount = data?.user_ratings_total || 0;

  // Show arrows logic:
  // Mobile (< 640px): Show if > 1 review
  // Tablet (640px - 1023px): Show if > 2 reviews
  // Desktop (>= 1024px): Show if > 3 reviews
  const shouldShowArrows = reviewCount > 1;

  return (
    <section
      className="py-16 sm:py-20 pb-8 sm:pb-0 px-4 animate-fade-in"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <h2
          id="reviews-heading"
          className="text-2xl sm:text-4xl mb-8 text-center text-foreground"
        >
          {t.reviews?.title || 'Reseñas de Nuestros Clientes'}
        </h2>

        {/* Overall Rating Summary */}
        <div
          className="flex items-center justify-center gap-3 mb-6"
          role="img"
          aria-label={`Calificación promedio: ${data.rating.toFixed(
            1
          )} de 5 estrellas, basado en ${reviewCount} reseñas`}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(data.rating)
                    ? 'fill-accent text-accent'
                    : 'fill-muted text-muted'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-l font-semibold">{data.rating.toFixed(1)}</span>
          <span className="text-muted-foreground text-sm">
            ({reviewCount}{' '}
            {reviewCount === 1
              ? t.reviews?.review || 'reseña'
              : t.reviews?.reviews || 'reseñas'}
            )
          </span>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            role="list"
            aria-label={t.reviews?.listLabel || 'Lista de reseñas'}
          >
            {data?.reviews?.map((review, index) => (
              <SwiperSlide key={`${review.time}-${index}`} className="h-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}

          {shouldShowArrows && (
            <>
              <button
                className="absolute left-[-10%] sm:left-[-5%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 text-foreground/80 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label={t.reviews?.previous || 'Reseña anterior'}
              >
                <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 stroke-1" />
              </button>

              <button
                className="absolute right-[-10%] sm:right-[-5%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 text-foreground/80 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label={t.reviews?.next || 'Siguiente reseña'}
              >
                <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 stroke-1" />
              </button>
            </>
          )}
        </div>

        {/* Google Maps Link Footer */}
        <p className="text-center text-sm text-muted-foreground mt-4 sm:mt-6">
          <a
            href="https://maps.app.goo.gl/LiYmogxjuJCUTSDQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:font-semibold hover:scale-105
                     focus-visible:outline-none focus-visible:ring-2 
                     focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm
                     inline-block"
            aria-label={`${
              t.reviews?.googleReviews || 'Reseñas de Google Maps para'
            } ${data.name} - Se abre en una nueva ventana`}
          >
            {t.reviews?.googleReviews || 'Reseñas de Google Maps para'}{' '}
            <span className="font-semibold">{data.name}</span>
          </a>
        </p>
      </div>
    </section>
  );
}
