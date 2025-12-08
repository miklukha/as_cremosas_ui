import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { language } = useLanguage();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-in">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors">
              {product.name[language]}
            </h3>
          </Link>
          {product.tags.includes('bestseller') && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              ★
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description[language]}
        </p>
        <p className="text-2xl font-serif font-semibold text-foreground">
          {product.price}€
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          className="w-full bg-primary hover:bg-accent transition-colors"
        >
          <Link to={`/product/${product.id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
