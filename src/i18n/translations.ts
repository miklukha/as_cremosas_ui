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
        title: 'Cheesecakes Artesanales Premium',
        subtitle: 'Creadas con amor y los mejores ingredientes',
        cta: 'Ver Tienda'
      },
      about: {
        title: 'Nuestra Historia',
        description:
          'En AS Cremosas, cada cheesecake es una obra de arte. Utilizamos solo los ingredientes más frescos y de la más alta calidad para crear sabores inolvidables que deleitan los sentidos.'
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes'
      }
    },
    shop: {
      title: 'Nuestra Tienda',
      filters: 'Filtros',
      sort: 'Ordenar por',
      categories: {
        all: 'Todos',
        classic: 'Clásicos',
        chocolate: 'Chocolate',
        fruit: 'Frutas',
        special: 'Especiales'
      },
      sortOptions: {
        newest: 'Más recientes',
        priceAsc: 'Precio: Menor a Mayor',
        priceDesc: 'Precio: Mayor a Menor',
        popular: 'Más populares'
      },
      filterOptions: {
        glutenFree: 'Sin gluten',
        lactoseFree: 'Sin lactosa',
        seasonal: 'De temporada'
      }
    },
    product: {
      ingredients: 'Ingredientes',
      allergens: 'Alérgenos',
      pickupDate: 'Fecha de recogida',
      orderNow: 'Pedir Ahora',
      recommended: 'Productos Recomendados'
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
        title: 'Cheesecakes Artesanais Premium',
        subtitle: 'Creadas con amor e os mellores ingredientes',
        cta: 'Ver Tenda'
      },
      about: {
        title: 'A Nosa Historia',
        description:
          'En AS Cremosas, cada cheesecake é unha obra de arte. Utilizamos só os ingredientes máis frescos e da máis alta calidade para crear sabores inolvidables que deleitan os sentidos.'
      },
      testimonials: {
        title: 'O Que Din Os Nosos Clientes'
      }
    },
    shop: {
      title: 'A Nosa Tenda',
      filters: 'Filtros',
      sort: 'Ordenar por',
      categories: {
        all: 'Todos',
        classic: 'Clásicos',
        chocolate: 'Chocolate',
        fruit: 'Froitas',
        special: 'Especiais'
      },
      sortOptions: {
        newest: 'Máis recentes',
        priceAsc: 'Prezo: Menor a Maior',
        priceDesc: 'Prezo: Maior a Menor',
        popular: 'Máis populares'
      },
      filterOptions: {
        glutenFree: 'Sen glute',
        lactoseFree: 'Sen lactosa',
        seasonal: 'De tempada'
      }
    },
    product: {
      ingredients: 'Ingredientes',
      allergens: 'Alérxenos',
      pickupDate: 'Data de recollida',
      orderNow: 'Pedir Agora',
      recommended: 'Produtos Recomendados'
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
        title: 'Premium Artisanal Cheesecakes',
        subtitle: 'Crafted with love and the finest ingredients',
        cta: 'View Shop'
      },
      about: {
        title: 'Our Story',
        description:
          'At AS Cremosas, every cheesecake is a work of art. We use only the freshest, highest-quality ingredients to create unforgettable flavors that delight the senses.'
      },
      testimonials: {
        title: 'What Our Customers Say'
      }
    },
    shop: {
      title: 'Our Shop',
      filters: 'Filters',
      sort: 'Sort by',
      categories: {
        all: 'All',
        classic: 'Classic',
        chocolate: 'Chocolate',
        fruit: 'Fruit',
        special: 'Special'
      },
      sortOptions: {
        newest: 'Newest',
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
        popular: 'Most Popular'
      },
      filterOptions: {
        glutenFree: 'Gluten-free',
        lactoseFree: 'Lactose-free',
        seasonal: 'Seasonal'
      }
    },
    product: {
      ingredients: 'Ingredients',
      allergens: 'Allergens',
      pickupDate: 'Pickup date',
      orderNow: 'Order Now',
      recommended: 'Recommended Products'
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
    }
  }
};
