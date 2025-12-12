import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ProductImageSliderProps {
  images: string[];
  productName: string;
}

export function ProductImageSlider({
  images,
  productName
}: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const defaultImage =
    'https://res.cloudinary.com/ddz81wl4h/image/upload/v1765493402/placeholder_tnpq5d.png';

  // Handle no images case
  if (images.length === 0) {
    return (
      <div className="aspect-square w-full bg-secondary/30 rounded-lg ">
        <img
          src={defaultImage}
          alt={`placeholder de ${productName}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary/30 shadow-md">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Imagen ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon-sm"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'aspect-square overflow-hidden rounded-md border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                currentIndex === index
                  ? 'border-primary shadow-sm scale-105'
                  : 'border-transparent hover:border-border opacity-60 hover:opacity-100'
              )}
              aria-label={`Ver imagen ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
            >
              <img
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
