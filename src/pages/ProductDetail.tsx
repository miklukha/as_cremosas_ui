import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct, useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/context/LanguageContext';
import { ProductImageSlider } from '@/components/ProductImageSlider';
import { QuantitySelector } from '@/components/QuantitySelector';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Info, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Product type options
 */
type ProductType = 'normal' | 'glutenFree' | 'lactoseFree';

export default function ProductDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();

  // Fetch product details
  const { product, loading, error } = useProduct(Number(id));

  // Fetch recommended products (same category)
  const { products: recommendedProducts } = useProducts({
    limit: 4
  });

  // Local state
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null
  );
  const [selectedType, setSelectedType] = useState<ProductType>('normal');
  const [quantity, setQuantity] = useState(1);

  // Set initial variant when product loads
  if (product && !selectedVariantId && product.variants.length > 0) {
    setSelectedVariantId(product.variants[0].id);
  }

  // Get selected variant
  const selectedVariant = product?.variants.find(
    v => v.id === selectedVariantId
  );

  /**
   * Calculate final price based on type
   */
  const getFinalPrice = (): number => {
    if (!selectedVariant) return 0;

    let basePrice = selectedVariant.price;

    // Add surcharges for special types (example: +10% for gluten/lactose free)
    if (selectedType === 'glutenFree' || selectedType === 'lactoseFree') {
      basePrice *= 1.1;
    }

    return basePrice;
  };

  /**
   * Handle add to cart
   */
  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      productId: product.id,
      productName: product.name,
      variantId: selectedVariant.id,
      variantName: selectedVariant.name,
      type: selectedType,
      quantity,
      price: getFinalPrice(),
      totalPrice: getFinalPrice() * quantity
    };

    console.log('Add to cart:', cartItem);
    // TODO: Implement cart functionality
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error?.message || 'Producto no encontrado'}
            <Button asChild variant="outline" className="mt-4">
              <Link to="/shop">Volver a la tienda</Link>
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Filter recommended products (exclude current, max 3)
  const filteredRecommended = recommendedProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Product Section */}
        <div className="space-y-8">
          {/* Image Slider */}
          <div className="w-full">
            <ProductImageSlider
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                  {product.name}
                </h1>
                {product.isCakeOfTheMonth && (
                  <Badge className="bg-accent text-accent-foreground">
                    Tarta del mes
                  </Badge>
                )}
              </div>

              <p className="text-4xl font-serif font-bold text-primary">
                €{getFinalPrice().toFixed(2)}
              </p>

              {!product.available && (
                <Badge variant="destructive" className="text-sm">
                  Agotado
                </Badge>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="max-w-3xl mx-auto">
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Variants Selection */}
            {product.variants.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="font-semibold text-lg mb-4 text-center">
                  Elige tamaño
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.variants.map(variant => (
                    <Card
                      key={variant.id}
                      className={cn(
                        'cursor-pointer transition-all hover:shadow-md',
                        selectedVariantId === variant.id
                          ? 'border-primary border-2 shadow-md'
                          : 'border-border hover:border-primary/50'
                      )}
                      onClick={() => setSelectedVariantId(variant.id)}
                    >
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{variant.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {variant.measures} • {variant.weightGrams}g
                          </p>
                        </div>
                        <p className="font-semibold text-primary">
                          €{variant.price.toFixed(2)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Type Selection */}
            <div className="max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-4 text-center">
                Tipo de tarta
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  variant={selectedType === 'normal' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('normal')}
                  className="h-auto py-4"
                >
                  <div className="text-center">
                    <div className="font-semibold">Normal</div>
                    <div className="text-xs mt-1 opacity-80">
                      Receta tradicional
                    </div>
                  </div>
                </Button>

                <Button
                  variant={
                    selectedType === 'glutenFree' ? 'default' : 'outline'
                  }
                  onClick={() => setSelectedType('glutenFree')}
                  disabled={!product.isPosibleGlutenFree}
                  className="h-auto py-4"
                >
                  <div className="text-center">
                    <div className="font-semibold">Sin gluten</div>
                    <div className="text-xs mt-1 opacity-80">
                      {product.isPosibleGlutenFree ? '+10%' : 'No disponible'}
                    </div>
                  </div>
                </Button>

                <Button
                  variant={
                    selectedType === 'lactoseFree' ? 'default' : 'outline'
                  }
                  onClick={() => setSelectedType('lactoseFree')}
                  disabled={!product.isPosibleLactoseFree}
                  className="h-auto py-4"
                >
                  <div className="text-center">
                    <div className="font-semibold">Sin lactosa</div>
                    <div className="text-xs mt-1 opacity-80">
                      {product.isPosibleLactoseFree ? '+10%' : 'No disponible'}
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-4 text-center">
                Cantidad
              </h3>
              <div className="flex justify-center">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  min={1}
                  max={10}
                />
              </div>
            </div>

            {/* Order Notice */}
            <Alert className="max-w-2xl mx-auto">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Los pedidos se aceptan con 2 días de antelación.
              </AlertDescription>
            </Alert>

            {/* Add to Cart Button */}
            <div className="max-w-2xl mx-auto">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.available || !selectedVariant}
                className="w-full text-lg py-6"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Añadir al carrito • €{(getFinalPrice() * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {filteredRecommended.length > 0 && (
          <section className="pt-12 border-t">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              También te puede gustar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredRecommended.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
