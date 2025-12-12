import { useState } from 'react';
import { useProductsByCategory } from '@/hooks/useProducts';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from '@/components';
import {
  Skeleton,
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card
} from '@/components/ui';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Shop() {
  const { t } = useLanguage();

  const [localFilters, setLocalFilters] = useState({
    glutenFree: false,
    lactoseFree: false
  });

  const {
    products,
    loading,
    error,
    pagination,
    setFilters,
    refetch,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage
  } = useProductsByCategory(1, {
    page: 1,
    limit: 12
  });

  const handleFilterChange = (
    filter: 'glutenFree' | 'lactoseFree' | 'cakeOfMonth',
    checked: boolean
  ) => {
    const newFilters = { ...localFilters, [filter]: checked };
    setLocalFilters(newFilters);

    const apiFilters = {
      glutenFree: newFilters.glutenFree,
      lactoseFree: newFilters.lactoseFree
    };

    setFilters(apiFilters);
  };

  const displayedProducts = products;
  console.log(displayedProducts);

  if (loading && products.length === 0) {
    return (
      <div className="container mx-auto py-8 sm:py-10 animate-fade-in">
        {/* Page Title Skeleton */}
        <Skeleton className="h-8 sm:h-10 w-64 mx-auto mb-5 sm:mb-8" />

        <div className="flex flex-col">
          {/* Filters Skeleton */}
          <div className="flex flex-wrap justify-center gap-3 mb-5 sm:mb-8">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Products Grid Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle className="mb-6 normal-case text-center">
            {t.alert.smthWentWrong}
          </AlertTitle>
          <div className="flex justify-center">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t.alert.tryOneMoreTime}
            </Button>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 sm:py-10 animate-fade-in">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-4xl mb-5 sm:mb-8 text-center ">
        {t.shop.title}
      </h1>

      <div className="flex flex-col">
        {/* Filters Sidebar */}
        <div className="flex flex-wrap justify-center gap-3 mb-5 sm:mb-8">
          {/* All */}
          <Button
            variant={
              !localFilters.glutenFree && !localFilters.lactoseFree
                ? 'default'
                : 'outline'
            }
            onClick={() => {
              setLocalFilters({ glutenFree: false, lactoseFree: false });
              setFilters({});
            }}
            className="px-6 "
          >
            {t.shop.filterOptions.all}
          </Button>

          {/* Gluten Free */}
          <Button
            variant={localFilters.glutenFree ? 'default' : 'outline'}
            onClick={() =>
              handleFilterChange('glutenFree', !localFilters.glutenFree)
            }
            className="px-6"
          >
            {t.shop.filterOptions.glutenFree}
          </Button>

          {/* Lactose Free */}
          <Button
            variant={localFilters.lactoseFree ? 'default' : 'outline'}
            onClick={() =>
              handleFilterChange('lactoseFree', !localFilters.lactoseFree)
            }
            className="px-6"
          >
            {t.shop.filterOptions.lactoseFree}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Empty state */}
          {displayedProducts.length === 0 && !loading && (
            <Alert className=" border-none max-w-2xl">
              <AlertTitle>{t.alert.notFindProducts}...</AlertTitle>
              <AlertDescription>{t.alert.tryAdjustFilters}</AlertDescription>
            </Alert>
          )}

          {/* Products Grid */}
          {displayedProducts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedProducts
                  .sort(
                    (a, b) =>
                      (b.isCakeOfTheMonth ? 1 : 0) -
                      (a.isCakeOfTheMonth ? 1 : 0)
                  )
                  .map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={prevPage}
                    disabled={!hasPrevPage || loading}
                    className="px-3 sm:px-3"
                  >
                    <ChevronLeft />
                    {/* {t.pagination.previous} */}
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    {t.pagination.page} {pagination.page} {t.pagination.of}{' '}
                    {pagination.pages}
                  </div>

                  <Button
                    variant="outline"
                    onClick={nextPage}
                    disabled={!hasNextPage || loading}
                    className="px-3 sm:px-3"
                  >
                    {/* {t.pagination.next} */}
                    <ChevronRight />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
