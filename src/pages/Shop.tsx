import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { products, type Product } from '@/data/products';
import { ProductCard } from '@/components';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function Shop() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [filters, setFilters] = useState<string[]>([]);

  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const categories = [
    { value: 'all', label: t.shop.categories.all },
    { value: 'classic', label: t.shop.categories.classic },
    { value: 'chocolate', label: t.shop.categories.chocolate },
    { value: 'fruit', label: t.shop.categories.fruit },
    { value: 'special', label: t.shop.categories.special }
  ];

  return (
    <div className="container mx-auto px4 py-12 animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-12 text-center text-foreground">
        {t.shop.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
            <h3 className="font-semibold text-lg mb-4">{t.shop.filters}</h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-sm text-muted-foreground">
                Categorías
              </h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category.value}
                    variant={
                      selectedCategory === category.value ? 'default' : 'ghost'
                    }
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Additional Filters */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-muted-foreground">
                Opciones
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="glutenFree" />
                  <label
                    htmlFor="glutenFree"
                    className="text-sm cursor-pointer"
                  >
                    {t.shop.filterOptions.glutenFree}
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lactoseFree" />
                  <label
                    htmlFor="lactoseFree"
                    className="text-sm cursor-pointer"
                  >
                    {t.shop.filterOptions.lactoseFree}
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="seasonal" />
                  <label htmlFor="seasonal" className="text-sm cursor-pointer">
                    {t.shop.filterOptions.seasonal}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length} productos encontrados
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={t.shop.sort} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">
                  {t.shop.sortOptions.newest}
                </SelectItem>
                <SelectItem value="priceAsc">
                  {t.shop.sortOptions.priceAsc}
                </SelectItem>
                <SelectItem value="priceDesc">
                  {t.shop.sortOptions.priceDesc}
                </SelectItem>
                <SelectItem value="popular">
                  {t.shop.sortOptions.popular}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 9 && (
            <div className="flex justify-center mt-12 gap-2">
              <Button variant="outline">Anterior</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
