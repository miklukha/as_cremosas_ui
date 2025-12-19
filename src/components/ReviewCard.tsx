import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Review } from '@/api/types/reviews.types';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  const {
    author_name,
    author_url,
    profile_photo_url,
    rating,
    text,
    relative_time_description,
    translated
  } = review;

  return (
    <Card
      className={cn(
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      role="article"
      aria-label={`Reseña de ${author_name}, ${rating} de 5 estrellas`}
    >
      <CardContent className="p-4 sm:p-6">
        {/* Header: Author info + Rating */}
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          {/* Author Avatar */}
          <a
            href={author_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 
                     focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full"
            aria-label={`Ver perfil de ${author_name} en Google Maps`}
          >
            <img
              src={profile_photo_url}
              alt={`${author_name} avatar`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              loading="lazy"
            />
          </a>

          {/* Author Name + Time */}
          <div className="flex-1 min-w-0">
            <a
              href={author_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm sm:text-base text-foreground 
                       hover:text-primary transition-colors truncate block
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              aria-label={`${author_name}, perfil en Google`}
            >
              {author_name}
            </a>
            <time
              className="text-xs sm:text-sm text-muted-foreground"
              dateTime={new Date(review.time * 1000).toISOString()}
            >
              {relative_time_description}
            </time>
          </div>

          {/* Star Rating */}
          <div
            className="flex gap-0.5 shrink-0"
            role="img"
            aria-label={`Calificación: ${rating} de 5 estrellas`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={cn(
                  'h-4 w-4',
                  index < rating
                    ? 'fill-accent text-accent'
                    : 'fill-muted text-muted'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base text-foreground leading-relaxed mb-2">
          {text}
        </p>

        {/* Translated Badge */}
        {translated && (
          <span
            className="inline-block text-xs text-muted-foreground italic"
            aria-label="Esta reseña ha sido traducida automáticamente"
          >
            Traducido automáticamente
          </span>
        )}
      </CardContent>
    </Card>
  );
}
