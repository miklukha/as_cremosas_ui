import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, Badge } from '@/components/ui';
import type { ProductListItem } from '@/api/types/product.types';

interface ProductCardProps {
  product: ProductListItem;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useLanguage();
  const {
    minPrice,
    maxPrice,
    slug,
    name = '-',
    images = [],
    available = true,
    isCakeOfTheMonth = false
  } = product || {};

  const pricesStr = `${minPrice}€ - ${maxPrice}€`;
  // const pricesStr = prices?.map(e => `${e.toFixed(2)}€`).join(' | ');

  const imageUrl =
    images?.length > 0
      ? images[0]
      : 'https://res.cloudinary.com/ddz81wl4h/image/upload/v1765493402/placeholder_tnpq5d.png';

  return (
    <Link
      to={`/product/${slug}`}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`${name}, ${available ? pricesStr : t.product.outOfStock}`}
    >
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-none bg-transparent">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <div className="flex justify-center items-center w-full h-full ">
            <img
              src={imageUrl}
              alt={name}
              loading="lazy"
              className="w-[90%] h-[90%] transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Cake of the month badge */}
          {isCakeOfTheMonth && (
            <Badge
              variant={available ? 'default' : 'outline'}
              className="absolute top-3 left-3  shadow-lg font-medium tracking-wide"
              aria-label={t.product.cakeOfTheMonth}
            >
              {t.product.cakeOfTheMonth}
            </Badge>
          )}

          {/* Out of stock overlay */}
          {!available && (
            <div
              className="absolute inset-0 bg-background/60 flex items-center justify-center"
              aria-hidden="true"
            >
              <Badge className="text-sm font-normal px-4 py-1">
                {t.product.outOfStock}
              </Badge>
            </div>
          )}
        </div>

        {/* Content - Name and Price */}
        <CardContent className="p-4 space-y-2" aria-label={name}>
          <h3 className="font-semibold">{product.name}</h3>

          <p
            className=""
            aria-label={`${t.product.price || 'Precio'}: ${pricesStr}`}
          >
            {pricesStr}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
