import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProduct, useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import {
  ProductImageSlider,
  QuantitySelector,
  ProductCard
} from '@/components';
import {
  Button,
  Badge,
  Skeleton,
  Alert,
  AlertDescription,
  AlertTitle
} from '@/components/ui';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
// import { toast } from '@/components/ui/sonner';

type DietaryOption = 'normal' | 'glutenFree' | 'lactoseFree';

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const { product, loading, error } = useProduct(Number(id));

  // Fetch recommended products (same category)
  const { products: recommendedProducts } = useProducts({
    limit: 4
  });

  // Local state
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null
  );
  const [dietaryOption, setDietaryOption] = useState<DietaryOption>('normal');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      if (dietaryOption !== 'normal') {
        const mediumVariant = product.variants.find(
          v =>
            v.name.toLowerCase().includes('mediana') ||
            v.name.toLowerCase().includes('medium')
        );
        if (mediumVariant) {
          setSelectedVariantId(mediumVariant.id);
        }
      } else {
        setSelectedVariantId(product.variants[0].id);
      }
    }
  }, [product, dietaryOption]);

  // Check if current selection is already in cart (reactive to cart changes)
  const isCurrentSelectionInCart =
    product &&
    selectedVariantId &&
    isInCart(product.id, selectedVariantId, {
      isGlutenFree: dietaryOption === 'glutenFree',
      isLactoseFree: dietaryOption === 'lactoseFree',
      isSugarFree: false
    });

  const selectedVariant = product?.variants.find(
    v => v.id === selectedVariantId
  );

  const isMediumVariant = (variantName: string): boolean => {
    const name = variantName.toLowerCase();
    return name.includes('mediana') || name.includes('medium');
  };

  const getFinalPrice = (): number => {
    if (!selectedVariant) return 0;

    let finalPrice = selectedVariant.price;

    // Add 1€ for special dietary options
    if (dietaryOption === 'glutenFree' || dietaryOption === 'lactoseFree') {
      finalPrice += 1;
    }

    return finalPrice;
  };

  const getProductTypeLabel = (): string => {
    switch (dietaryOption) {
      case 'glutenFree':
        return t.product?.typeGlutenFree || 'Sin gluten';
      case 'lactoseFree':
        return t.product?.typeLactoseFree || 'Sin lactosa';
      default:
        return t.product?.typeNormal || 'Normal';
    }
  };

  const handleDietaryOptionChange = (option: DietaryOption) => {
    setDietaryOption(option);

    // If selecting special option, switch to medium variant
    if (option !== 'normal' && product) {
      const mediumVariant = product.variants.find(v => isMediumVariant(v.name));
      if (mediumVariant) {
        setSelectedVariantId(mediumVariant.id);
      }
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      productId: product.id,
      productVariantId: selectedVariant.id,
      name: product.name,
      variantName: selectedVariant.name,
      size: selectedVariant.name,
      image: product.images[0] || '',
      quantity,
      unitPrice: getFinalPrice(),
      isGlutenFree: dietaryOption === 'glutenFree',
      isLactoseFree: dietaryOption === 'lactoseFree',
      isSugarFree: false
    };

    addToCart(cartItem);

    // toast.info(t.cart?.itemAdded || 'Añadido al carrito', {
    //   description: `${product.name} - ${
    //     selectedVariant.name
    //   } (${getProductTypeLabel()})`,
    //   action: {
    //     label: t.cart?.goToCart || 'Ir al Carrito',
    //     onClick: () => navigate('/cart')
    //   }
    // });
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  if (loading) {
    return (
      <div
        className="container mx-auto px-4 py-8"
        aria-live="polite"
        aria-label={t.product?.loading || 'Cargando producto'}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 lg:gap-12">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle className="mb-6 normal-case text-center">
            {t.alert.smthWentWrong}
          </AlertTitle>
          <div className="flex justify-center">
            <Button variant="outline">
              <Link
                to="/shop"
                aria-label={t.product?.backToShop || 'Volver a la tienda'}
              >
                {t.product?.backToShop || 'Volver a la tienda'}
              </Link>
            </Button>
          </div>
        </Alert>
      </div>
    );
  }

  // Filter recommended products (exclude current, max 4)
  const filteredRecommended = recommendedProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const isSpecialDiet = dietaryOption !== 'normal';

  return (
    <div className="container mx-auto px-4 py-8 lg:py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 lg:gap-12">
          {/* Left: Image Slider */}
          <div className="w-full">
            <ProductImageSlider
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            {/* Title, Badge, and Price */}
            <div className="space-y-2">
              <div className="flex items-start gap-3 flex-wrap mb-3">
                <h1 className="text-xl md:text-2xl font-semibold flex-1">
                  {product.name}
                </h1>
                {product.isCakeOfTheMonth && (
                  <Badge>{t.product?.cakeOfTheMonth || 'Tarta del mes'}</Badge>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <p
                  className="text-xl md:text-2xl"
                  aria-label={`${
                    t.product?.price || 'Precio'
                  }: ${getFinalPrice().toFixed(2)} euros`}
                >
                  {getFinalPrice().toFixed(2)}€
                </p>
              </div>

              {!product.available && (
                <Badge
                  variant="destructive"
                  className="text-xs"
                  aria-label={t.product?.outOfStock || 'Agotado'}
                >
                  {t.product?.outOfStock || 'Agotado'}
                </Badge>
              )}
            </div>

            {/* Dietary Options Selection */}
            <div className="space-y-3">
              <h3 className="normal-case font-normal text-sm ">
                {t.product?.selectType || 'Tipo de tarta'}
              </h3>
              <div
                className="flex flex-wrap gap-2"
                role="radiogroup"
                aria-label={t.product?.selectType || 'Tipo de tarta'}
              >
                {/* Normal option */}
                <Button
                  variant={dietaryOption === 'normal' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDietaryOptionChange('normal')}
                  className={cn(
                    'transition-all',
                    dietaryOption === 'normal' && 'shadow-md'
                  )}
                  role="radio"
                  aria-checked={dietaryOption === 'normal'}
                  aria-label={t.product?.typeNormal || 'Normal'}
                >
                  {t.product?.typeNormal || 'Normal'}
                </Button>

                {/* Gluten-free option */}
                <Button
                  variant={
                    dietaryOption === 'glutenFree' ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => {
                    if (product.isPosibleGlutenFree) {
                      handleDietaryOptionChange('glutenFree');
                    }
                  }}
                  disabled={!product.isPosibleGlutenFree}
                  className={cn(
                    'transition-all',
                    dietaryOption === 'glutenFree' && 'shadow-md'
                  )}
                  role="radio"
                  aria-checked={dietaryOption === 'glutenFree'}
                  aria-label={t.product?.typeGlutenFree || 'Sin gluten'}
                  aria-disabled={!product.isPosibleGlutenFree}
                >
                  {t.product?.typeGlutenFree || 'Sin gluten'}
                </Button>

                {/* Lactose-free option */}
                <Button
                  variant={
                    dietaryOption === 'lactoseFree' ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => {
                    if (product.isPosibleLactoseFree) {
                      handleDietaryOptionChange('lactoseFree');
                    }
                  }}
                  disabled={!product.isPosibleLactoseFree}
                  className={cn(
                    'transition-all',
                    dietaryOption === 'lactoseFree' && 'shadow-md'
                  )}
                  role="radio"
                  aria-checked={dietaryOption === 'lactoseFree'}
                  aria-label={t.product?.typeLactoseFree || 'Sin lactosa'}
                  aria-disabled={!product.isPosibleLactoseFree}
                >
                  {t.product?.typeLactoseFree || 'Sin lactosa'}
                </Button>
              </div>
            </div>

            {/* Variants Selection */}
            {product.variants.length > 0 && (
              <div className="space-y-3">
                <h3 className="normal-case font-normal text-sm ">
                  {t.product?.selectSize || 'Elige tamaño'}
                </h3>
                <div
                  className="flex flex-wrap gap-2"
                  role="radiogroup"
                  aria-label={t.product?.selectSize || 'Elige tamaño'}
                >
                  {product.variants.map(variant => {
                    const isDisabled =
                      isSpecialDiet && !isMediumVariant(variant.name);
                    const isSelected = selectedVariantId === variant.id;

                    return (
                      <Button
                        key={variant.id}
                        variant={isSelected ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          if (!isDisabled) {
                            setSelectedVariantId(variant.id);
                          }
                        }}
                        disabled={isDisabled}
                        className={cn(
                          'transition-all',
                          isSelected && !isDisabled && 'shadow-md'
                        )}
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`${variant.name},${
                          isDisabled
                            ? `, ${t.product?.notAvailable || 'No disponible'}`
                            : ''
                        }`}
                        aria-disabled={isDisabled}
                      >
                        {variant.name}
                      </Button>
                    );
                  })}
                </div>
                {/* Warning for special diets */}
                {isSpecialDiet && (
                  <AlertDescription className="text-xs font-medium">
                    {t.product?.mediumSizeOnly ||
                      'Las tartas sin gluten o sin lactosa solo están disponibles en tamaño mediano.'}
                  </AlertDescription>
                )}
              </div>
            )}

            {product.description && (
              <div className="pt-4 border-t">
                {/* <h2 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {t.product?.description || 'Descripción'}
                </h2> */}
                <p
                  className="text-base leading-relaxed"
                  aria-label={`${t.product?.description || 'Descripción'}: ${
                    product.description
                  }`}
                >
                  {product.description}
                </p>
              </div>
            )}

            <div className="flex items-end gap-4 flex-wrap">
              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="normal-case font-normal text-sm ">
                  {t.product?.quantity || 'Cantidad'}
                </h3>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  min={1}
                  max={10}
                  aria-label={`${
                    t.product?.quantity || 'Cantidad'
                  }: ${quantity}`}
                />
              </div>

              {/* Add to Cart / Go to Cart Buttons */}
              <div className="flex gap-3 flex-wrap">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.available || !selectedVariant}
                  className={cn(
                    'text-base py-6 transition-all'
                    // isCurrentSelectionInCart && 'bg-green hover:bg-green'
                  )}
                  aria-label={`${
                    isCurrentSelectionInCart
                      ? t.product?.addedToCart || 'Añadido al carrito'
                      : t.product?.addToCart || 'Añadir al carrito'
                  }, ${getProductTypeLabel()}, ${
                    selectedVariant?.name
                  }, cantidad ${quantity}, total €${(
                    getFinalPrice() * quantity
                  ).toFixed(2)}`}
                >
                  {isCurrentSelectionInCart ? (
                    <>
                      <Check className="h-5 w-5 mr-2" aria-hidden="true" />
                      {t.product?.addedToCart || 'Añadido'}
                    </>
                  ) : (
                    <>
                      <ShoppingCart
                        className="h-5 w-5 mr-2"
                        aria-hidden="true"
                      />
                      {t.product?.addToCart || 'Añadir al carrito'} • €
                      {(getFinalPrice() * quantity).toFixed(2)}
                    </>
                  )}
                </Button>

                {isCurrentSelectionInCart && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleGoToCart}
                    className="text-base py-6"
                    aria-label={t.cart?.goToCart || 'Ir al Carrito'}
                  >
                    {t.cart?.goToCart || 'Ir al Carrito'}
                    <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description Section - Below everything */}
        {/* {product.description && (
          <div className="pt-8 border-t">
            <h2 className="font-serif text-xl font-semibold mb-4 text-foreground">
              {t.product?.description || 'Descripción'}
            </h2>
            <p className="text-base leading-relaxed ">{product.description}</p>
          </div>
        )} */}

        {/* Recommended Products */}
        {filteredRecommended.length > 0 && (
          <section
            className="pt-12 border-t"
            aria-labelledby="recommended-heading"
          >
            <h2 className="text-2xl md:text-3xl mb-8 text-center text-foreground">
              {t.product?.recommended || 'También te puede gustar'}
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              aria-label={t.product?.recommended || 'Productos recomendados'}
            >
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
