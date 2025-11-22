export interface Product {
  id: string;
  name: {
    es: string;
    gl: string;
    en: string;
  };
  description: {
    es: string;
    gl: string;
    en: string;
  };
  price: number;
  image: string;
  category: 'classic' | 'chocolate' | 'fruit' | 'special';
  tags: string[];
  ingredients: {
    es: string[];
    gl: string[];
    en: string[];
  };
  allergens: {
    es: string[];
    gl: string[];
    en: string[];
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: {
      es: 'Cheesecake Clásico',
      gl: 'Cheesecake Clásico',
      en: 'Classic Cheesecake'
    },
    description: {
      es: 'Nuestra receta tradicional con queso crema premium y base de galleta',
      gl: 'A nosa receita tradicional con queixo crema premium e base de galleta',
      en: 'Our traditional recipe with premium cream cheese and cookie base'
    },
    price: 28,
    image: '/src/assets/products/classic-cheesecake.jpg',
    category: 'classic',
    tags: ['bestseller'],
    ingredients: {
      es: ['Queso crema', 'Galletas', 'Azúcar', 'Huevos', 'Vainilla'],
      gl: ['Queixo crema', 'Galletas', 'Azucre', 'Ovos', 'Vainilla'],
      en: ['Cream cheese', 'Cookies', 'Sugar', 'Eggs', 'Vanilla']
    },
    allergens: {
      es: ['Lácteos', 'Gluten', 'Huevo'],
      gl: ['Lácteos', 'Glute', 'Ovo'],
      en: ['Dairy', 'Gluten', 'Egg']
    }
  },
  {
    id: '2',
    name: {
      es: 'Cheesecake de Chocolate',
      gl: 'Cheesecake de Chocolate',
      en: 'Chocolate Cheesecake'
    },
    description: {
      es: 'Intenso sabor a chocolate belga con ganache de chocolate negro',
      gl: 'Intenso sabor a chocolate belga con ganache de chocolate negro',
      en: 'Intense Belgian chocolate flavor with dark chocolate ganache'
    },
    price: 32,
    image: '/src/assets/products/chocolate-cheesecake.jpg',
    category: 'chocolate',
    tags: ['premium'],
    ingredients: {
      es: [
        'Queso crema',
        'Chocolate belga',
        'Galletas de chocolate',
        'Huevos',
        'Nata'
      ],
      gl: [
        'Queixo crema',
        'Chocolate belga',
        'Galletas de chocolate',
        'Ovos',
        'Nata'
      ],
      en: [
        'Cream cheese',
        'Belgian chocolate',
        'Chocolate cookies',
        'Eggs',
        'Cream'
      ]
    },
    allergens: {
      es: ['Lácteos', 'Gluten', 'Huevo'],
      gl: ['Lácteos', 'Glute', 'Ovo'],
      en: ['Dairy', 'Gluten', 'Egg']
    }
  },
  {
    id: '3',
    name: {
      es: 'Cheesecake de Fresas',
      gl: 'Cheesecake de Amorodos',
      en: 'Strawberry Cheesecake'
    },
    description: {
      es: 'Fresas frescas de temporada con coulis de fruta natural',
      gl: 'Amorodos frescos de tempada con coulis de froita natural',
      en: 'Fresh seasonal strawberries with natural fruit coulis'
    },
    price: 30,
    image: '/src/assets/products/strawberry-cheesecake.jpg',
    category: 'fruit',
    tags: ['seasonal'],
    ingredients: {
      es: ['Queso crema', 'Fresas', 'Galletas', 'Azúcar', 'Huevos'],
      gl: ['Queixo crema', 'Amorodos', 'Galletas', 'Azucre', 'Ovos'],
      en: ['Cream cheese', 'Strawberries', 'Cookies', 'Sugar', 'Eggs']
    },
    allergens: {
      es: ['Lácteos', 'Gluten', 'Huevo'],
      gl: ['Lácteos', 'Glute', 'Ovo'],
      en: ['Dairy', 'Gluten', 'Egg']
    }
  }
];
