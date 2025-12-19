import { useReviews } from '@/hooks/useReviews';
import { useLanguage } from '@/context/LanguageContext';
import { ReviewCard } from '@/components/ReviewCard';
import {
  Button,
  Skeleton,
  Alert,
  AlertDescription,
  Card
} from '@/components/ui';
import { Star } from 'lucide-react';

export function ReviewsSection() {
  const { t } = useLanguage();
  const { data, loading, error } = useReviews();

  if (loading) {
    return (
      <section
        className="py-16 sm:py-20 px-4 "
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
              <Card key={i} className="overflow-hidden">
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

  if (!data || data.reviews.length === 0 || error) {
    // return (
    //   <section className="py-12 px-4">
    //     <div className="container mx-auto max-w-2xl text-center">
    //       <p className="text-muted-foreground">
    //         {t.reviews?.noReviews || 'No hay reseñas disponibles'}
    //       </p>
    //     </div>
    //   </section>
    // );
    return null;
  }

  return (
    <section
      className="py-16 sm:py-20 px-4 animate-fade-in"
      aria-labelledby="reviews-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2
          id="reviews-heading"
          className="text-2xl sm:text-4xl mb-8 text-center text-foreground"
        >
          {t.reviews?.title || 'Reseñas de Nuestros Clientes'}
        </h2>

        {/* Overall Rating Summary */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          role="img"
          aria-label={`Calificación promedio: ${data.rating.toFixed(
            1
          )} de 5 estrellas, basado en ${data.reviews.length} reseñas`}
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
            ({data.reviews.length}{' '}
            {data.reviews.length === 1
              ? t.reviews?.review || 'reseña'
              : t.reviews?.reviews || 'reseñas'}
            )
          </span>
        </div>

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label={t.reviews?.listLabel || 'Lista de reseñas'}
        >
          {data.reviews.map(review => (
            <ReviewCard key={review.time} review={review} />
          ))}
        </div>

        {/* Business Name Footer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.reviews?.googleReviews || 'Reseñas de Google Maps para'}{' '}
          <strong>{data.name}</strong>
        </p>
      </div>
    </section>
  );
}
