import { Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import type { Review } from '@/api/types/reviews.types';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

const MAX_TEXT_LENGTH = 150;

export function ReviewCard({ review, className }: ReviewCardProps) {
  const { t } = useLanguage();

  const {
    author_name,
    author_url,
    profile_photo_url,
    rating,
    text,
    relative_time_description,
    translated
  } = review;

  const isLongText = text.length > MAX_TEXT_LENGTH;
  const displayText = isLongText
    ? `${text.slice(0, MAX_TEXT_LENGTH)}...`
    : text;

  return (
    <Card
      className={cn('max-h-[200px] flex flex-col', className)}
      role="article"
      aria-label={`Reseña de ${author_name}, ${rating} de 5 estrellas`}
    >
      <CardContent className="p-4 sm:p-5 flex flex-col max-h-50 ">
        {/* Header: Author info + Rating */}
        <div className="flex items-start gap-3 mb-3">
          {/* Author Avatar */}
          <img
            src={profile_photo_url}
            alt={`${author_name} avatar`}
            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            loading="lazy"
          />

          {/* Author Name + Time */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-xs sm:text-sm truncate leading-none">
              {author_name}
            </p>
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
                  'h-3 w-3',
                  index < rating
                    ? 'fill-accent text-accent'
                    : 'fill-muted text-muted'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 mb-2 ">
          <p className="text-xs sm:text-sm leading-relaxed ">{displayText}</p>
        </div>

        {/* Action Area */}
        <div className="flex flex-col gap-2">
          {/* Read More Link */}
          {isLongText && (
            <a
              href="https://maps.app.goo.gl/EW7KHL3ZRuC1H3gL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary 
                       hover:underline transition-all duration-200
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm
                       w-fit"
              aria-label={`${t.reviews.readOnGoogle} - ${author_name}`}
            >
              <span>{t.reviews.readOnGoogle}</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}

          {/* Translated Badge */}
          {translated && (
            <span className="inline-block text-xs text-muted-foreground ">
              {t.reviews.translated}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
