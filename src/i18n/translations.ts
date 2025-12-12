import NotFound from '@/pages/NotFound';
import { ca } from 'date-fns/locale';

export type Language = 'es' | 'gl' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      shop: 'Tienda',
      contact: 'Contacto',
      faq: 'Preguntas',
      b2b: 'Pedidos Grandes'
    },
    home: {
      hero: {
        title: 'Las tartas de queso de lujo',
        title2: 'Creadas con los mejores ingredientes',
        title3: 'Calidad Artesanal en cada detalle',
        cta: 'Comprar ahora'
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes'
      }
    },
    shop: {
      title: 'Nuestra Tienda',
      filters: 'Filtros',
      sort: 'Ordenar por',
      sortOptions: {
        newest: 'Más recientes',
        priceAsc: 'Precio: Menor a Mayor',
        priceDesc: 'Precio: Mayor a Menor',
        popular: 'Más populares'
      },
      filterOptions: {
        glutenFree: 'Sin gluten',
        lactoseFree: 'Sin lactosa',
        all: 'Todas'
      }
    },
    product: {
      ingredients: 'Ingredientes',
      allergens: 'Alérgenos',
      pickupDate: 'Fecha de recogida',
      orderNow: 'Pedir Ahora',
      recommended: 'Productos Recomendados',
      cakeOfTheMonth: 'Tarta del mes',
      outOfStock: 'Agotado',
      error: 'Error al cargar el producto',
      notFound: 'Producto no encontrado',
      backToShop: 'Volver a la tienda',
      selectSize: 'Selecciona un tamaño',
      selectType: 'Selecciona un tipo',
      typeNormal: 'Normal',
      typeNormalDesc: 'Tradicional',
      typeGlutenFree: 'Sin gluten',
      notAvailable: 'No disponible',
      typeLactoseFree: 'Sin lactosa',
      quantity: 'Cantidad',
      orderNotice: 'Los pedidos se aceptan con 2 días de antelación.',
      loading: 'Cargando producto...',
      addToCart: 'Añadir al carrito',
      addedToCart: 'Añadido al carrito',
      description: 'Descripción',
      selectedType: 'Tipo seleccionado',
      glutenFreeDesc: 'Elaborado con ingredientes sin gluten',
      lactoseFreeDesc: 'Elaborado con ingredientes sin lactosa',
      mediumSizeOnly:
        'Las tartas sin gluten o sin lactosa solo están disponibles en tamaño mediano.'
    },
    checkout: {
      title: 'Finalizar Pedido',
      customerDetails: 'Datos del Cliente',
      orderSummary: 'Resumen del Pedido',
      pickupDate: 'Fecha de Recogida',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      notes: 'Notas adicionales',
      placeOrder: 'Realizar Pedido',
      total: 'Total'
    },
    contact: {
      title: 'Contacto',
      address: 'Dirección',
      getInTouch: 'Ponte en Contacto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar'
    },
    faq: {
      title: 'Preguntas Frecuentes'
    },
    b2b: {
      title: 'Pedidos Corporativos y Grandes Volúmenes',
      description:
        'Ofrecemos condiciones especiales para pedidos corporativos y grandes volúmenes.',
      inquiry: 'Consulta de Pedido'
    },
    footer: {
      about: 'Sobre Nosotros',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
      legalPage: 'Aviso Legal',
      terms: 'Términos y Condiciones',
      rights: 'Todos los derechos reservados',
      contact: 'Contactos',
      social: 'Redes sociales',
      phoneLabel: 'Llamar al +34 123 456 789',
      emailLabel: 'Enviar correo a ascremosas.co@gmail.com',
      instagramLabel: 'Visitar nuestro Instagram',
      facebookLabel: 'Visitar nuestro Facebook',
      tiktokLabel: 'Visitar nuestro TikTok',
      socialMedia: 'Redes sociales',
      mainLabel: 'Pie de página',
      homeLabel: 'Ir a la página principal',
      legalNav: 'Navegación legal',
      addressLabel:
        'Ver ubicación en Google Maps: Calle San Nicolás 5, 15001 A Coruña, España',
      followUs: 'Síguenos',
      hours: {
        title: 'Horario',
        laborales: 'Martes - Viernes',
        monday: 'Lunes',
        saturday: 'Sábado',
        sunday: 'Domingo',
        closed: 'Cerrado'
      }
    },
    alert: {
      notFindProducts: 'No se encontraron productos',
      tryAdjustFilters: 'Intenta ajustar los filtros para ver más resultados.',
      tryOneMoreTime: 'Intentar de nuevo',
      errorProducts: 'Error al cargar productos',
      smthWentWrong:
        'Algo salió mal 😣. Por favor, inténtalo de nuevo más tarde.'
    },
    pagination: {
      previous: 'Anterior',
      next: 'Siguiente',
      page: 'Página',
      of: 'de'
    }
  },
  gl: {
    nav: {
      home: 'Inicio',
      shop: 'Tenda',
      contact: 'Contacto',
      faq: 'Preguntas',
      b2b: 'Pedidos Grandes'
    },
    home: {
      hero: {
        title: 'Tartas de Queixo de Luxo',
        title2: 'Elaboradas cos Mellores Ingredientes',
        title3: 'Calidade Artesanal en Cada Detalle',
        cta: 'Comprar agora'
      },

      testimonials: {
        title: 'O Que Din Os Nosos Clientes'
      }
    },
    shop: {
      title: 'A Nosa Tenda',
      filters: 'Filtros',
      sort: 'Ordenar por',
      sortOptions: {
        newest: 'Máis recentes',
        priceAsc: 'Prezo: Menor a Maior',
        priceDesc: 'Prezo: Maior a Menor',
        popular: 'Máis populares'
      },
      filterOptions: {
        glutenFree: 'Sen glute',
        lactoseFree: 'Sen lactosa',
        all: 'Todas'
      }
    },
    product: {
      ingredients: 'Ingredientes',
      allergens: 'Alérxenos',
      pickupDate: 'Data de recollida',
      orderNow: 'Pedir Agora',
      recommended: 'Produtos Recomendados',
      cakeOfTheMonth: 'Tarta do mes',
      outOfStock: 'Agotado',
      error: 'Erro ao cargar o produto',
      notFound: 'Produto non atopado',
      backToShop: 'Volver á tenda',
      selectSize: 'Selecciona un tamaño',
      selectType: 'Selecciona un tipo',
      typeNormal: 'Normal',
      typeNormalDesc: 'Tradicional',
      typeGlutenFree: 'Sen glute',
      notAvailable: 'Non dispoñible',
      typeLactoseFree: 'Sen lactosa',
      quantity: 'Cantidade',
      orderNotice: 'Os pedidos acéptanse con 2 días de antelación.',
      loading: 'Cargando produto...',
      addToCart: 'Engadir ao carriño',
      addedToCart: 'Engadido ao carriño',
      description: 'Descrición',
      selectedType: 'Tipo seleccionado',
      glutenFreeDesc: 'Elaborado con ingredientes sen glute',
      lactoseFreeDesc: 'Elaborado con ingredientes sen lactosa',
      mediumSizeOnly:
        'As tartas sen glute ou sen lactosa só están dispoñibles en tamaño mediano.'
    },
    checkout: {
      title: 'Finalizar Pedido',
      customerDetails: 'Datos do Cliente',
      orderSummary: 'Resumo do Pedido',
      pickupDate: 'Data de Recollida',
      name: 'Nome completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      notes: 'Notas adicionais',
      placeOrder: 'Realizar Pedido',
      total: 'Total'
    },
    contact: {
      title: 'Contacto',
      address: 'Enderezo',
      getInTouch: 'Ponte en Contacto',
      name: 'Nome',
      email: 'Email',
      message: 'Mensaxe',
      send: 'Enviar'
    },
    faq: {
      title: 'Preguntas Frecuentes'
    },
    b2b: {
      title: 'Pedidos Corporativos e Grandes Volumes',
      description:
        'Ofrecemos condicións especiais para pedidos corporativos e grandes volumes.',
      inquiry: 'Consulta de Pedido'
    },
    footer: {
      about: 'Sobre Nós',
      legal: 'Legal',
      privacy: 'Política de Privacidade',
      cookies: 'Política de Cookies',
      legalPage: 'Aviso Legal',
      terms: 'Termos e Condicións',
      rights: 'Todos os dereitos reservados',
      contact: 'Contactos',
      social: 'Redes sociales',
      phoneLabel: 'Chamar ao +34 123 456 789',
      emailLabel: 'Enviar correo a ascremosas.co@gmail.com',
      instagramLabel: 'Visitar o noso Instagram',
      facebookLabel: 'Visitar o noso Facebook',
      tiktokLabel: 'Visitar o noso TikTok',
      socialMedia: 'Redes sociais',
      mainLabel: 'Pé de páxina',
      homeLabel: 'Ir á páxina principal',
      legalNav: 'Navegación legal',
      addressLabel:
        'Ver localización en Google Maps: Calle San Nicolás 5, 15001 A Coruña, España',
      followUs: 'Síguenos',
      hours: {
        title: 'Horario',
        laborales: 'Martes - Venres',
        monday: 'Luns',
        saturday: 'Sábado',
        sunday: 'Domingo',
        closed: 'Pechado'
      }
    },
    alert: {
      notFindProducts: 'Non se atoparon produtos',
      tryAdjustFilters: 'Tenta axustar os filtros para ver máis resultados.',
      tryOneMoreTime: 'Tentar de novo',
      errorProducts: 'Erro ao cargar produtos',
      smthWentWrong: 'Algo saíu mal 😣. Por favor, inténtao de novo máis tarde.'
    },
    pagination: {
      previous: 'Anterior',
      next: 'Seguinte',
      page: 'Páxina',
      of: 'de'
    }
  },
  en: {
    nav: {
      home: 'Home',
      shop: 'Shop',
      contact: 'Contact',
      faq: 'FAQ',
      b2b: 'Large Orders'
    },
    home: {
      hero: {
        title: 'Luxury Cheesecakes',
        title2: 'Crafted with the Finest Ingredients',
        title3: 'Artisanal Quality in Every Detail',
        cta: 'Buy Now'
      },
      testimonials: {
        title: 'What Our Customers Say'
      }
    },
    shop: {
      title: 'Our Shop',
      filters: 'Filters',
      sort: 'Sort by',
      sortOptions: {
        newest: 'Newest',
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
        popular: 'Most Popular'
      },
      filterOptions: {
        glutenFree: 'Gluten-free',
        lactoseFree: 'Lactose-free',
        all: 'All'
      }
    },
    product: {
      ingredients: 'Ingredients',
      allergens: 'Allergens',
      pickupDate: 'Pickup date',
      orderNow: 'Order Now',
      recommended: 'Recommended Products',
      cakeOfTheMonth: 'Cake of the month',
      outOfStock: 'Out of Stock',
      error: 'Error loading product',
      notFound: 'Product not found',
      backToShop: 'Back to shop',
      selectSize: 'Select a size',
      selectType: 'Select a type',
      typeNormal: 'Regular',
      typeNormalDesc: 'Traditional',
      typeGlutenFree: 'Gluten-free',
      notAvailable: 'Not available',
      typeLactoseFree: 'Lactose-free',
      quantity: 'Quantity',
      orderNotice: 'Orders are accepted with 2 days’ notice.',
      loading: 'Loading product...',
      addToCart: 'Add to cart',
      addedToCart: 'Added to cart',
      description: 'Description',
      selectedType: 'Selected type',
      glutenFreeDesc: 'Made with gluten-free ingredients',
      lactoseFreeDesc: 'Made with lactose-free ingredients',
      mediumSizeOnly:
        'Gluten-free or lactose-free cakes are only available in medium size.'
    },
    checkout: {
      title: 'Checkout',
      customerDetails: 'Customer Details',
      orderSummary: 'Order Summary',
      pickupDate: 'Pickup Date',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      notes: 'Additional notes',
      placeOrder: 'Place Order',
      total: 'Total'
    },
    contact: {
      title: 'Contact',
      address: 'Address',
      getInTouch: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send'
    },
    faq: {
      title: 'Frequently Asked Questions'
    },
    b2b: {
      title: 'Corporate and Large Volume Orders',
      description:
        'We offer special conditions for corporate and large volume orders.',
      inquiry: 'Order Inquiry'
    },
    footer: {
      about: 'About Us',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      legalPage: 'Legal Notice',
      terms: 'Terms and Conditions',
      rights: 'All rights reserved',
      contact: 'Contacts',
      social: 'Social media',
      phoneLabel: 'Call +34 123 456 789',
      emailLabel: 'Send email to ascremosas.co@gmail.com',
      instagramLabel: 'Visit our Instagram',
      facebookLabel: 'Visit our Facebook',
      tiktokLabel: 'Visit our TikTok',
      socialMedia: 'Social media',
      mainLabel: 'Footer',
      homeLabel: 'Go to homepage',
      legalNav: 'Legal navigation',
      addressLabel:
        'View location on Google Maps: Calle San Nicolás 5, 15001 A Coruña, España',
      followUs: 'Follow Us',
      hours: {
        title: 'Hours',
        laborales: 'Tuesday - Friday',
        monday: 'Monday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        closed: 'Closed'
      }
    },
    alert: {
      notFindProducts: 'No products found',
      tryAdjustFilters: 'Try adjusting the filters to see more results.',
      tryOneMoreTime: 'Try again',
      errorProducts: 'Error loading products',
      smthWentWrong: 'Something went wrong 😣. Please try again later.'
    },
    pagination: {
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
      of: 'of'
    }
  }
};
