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
      },
      seeCollection: 'Ver toda la colección',
      bestsellers: 'Nuestros Bestsellers'
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
      recommended: 'Otros nuestros productos',
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
        'Las tartas sin gluten o sin lactosa solo están disponibles en tamaño mediano.',
      fromPrice: 'de',
      price: 'Precio'
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
      send: 'Enviar',
      sending: 'Enviando...',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Gracias por contactarnos. Te responderemos pronto.',
      errorTitle: 'Error al enviar',
      errorMessage: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      // Errores de validación
      nameRequired: 'El nombre es obligatorio',
      nameMinLength: 'El nombre debe tener al menos 2 caracteres',
      emailRequired: 'El email es obligatorio',
      emailInvalid: 'Por favor, introduce un email válido',
      messageRequired: 'El mensaje es obligatorio',
      messageMinLength: 'El mensaje debe tener al menos 10 caracteres',
      // Aria labels
      formLabel: 'Formulario de contacto',
      nameLabel: 'Introduce tu nombre completo',
      emailLabel: 'Introduce tu dirección de email',
      messageLabel: 'Escribe tu mensaje',
      submitLabel: 'Enviar mensaje de contacto',
      mapLabel: 'Mapa de ubicación de AS Cremosas',
      viewOnMaps: 'Ver en Google Maps',
      phone: 'Teléfono'
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
    },
    reviews: {
      title: 'Reseñas de Nuestros Clientes',
      loading: 'Cargando reseñas',
      noReviews: 'No hay reseñas disponibles',
      review: 'reseña',
      reviews: 'reseñas',
      listLabel: 'Lista de reseñas',
      googleReviews: 'Reseñas de Google Maps para',
      translated: 'Traducido automáticamente',
      readMore: 'Leer más',
      readLess: 'Leer menos',
      readOnGoogle: 'Leer más en Google Maps',
      previous: 'Reseña anterior',
      next: 'Siguiente reseña'
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
      },
      seeCollection: 'Ver toda a colección',
      bestsellers: 'Os Nosos Bestsellers'
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
      recommended: 'Noutros dos nosos produtos',
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
        'As tartas sen glute ou sen lactosa só están dispoñibles en tamaño mediano.',
      fromPrice: 'de',
      price: 'Prezo'
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
      send: 'Enviar',
      sending: 'Enviando...',
      namePlaceholder: 'O teu nome completo',
      emailPlaceholder: 'teu@email.com',
      messagePlaceholder: 'Escribe a túa mensaxe aquí...',
      successTitle: 'Mensaxe enviada!',
      successMessage: 'Grazas por contactarnos. Responderémosche pronto.',
      errorTitle: 'Erro ao enviar',
      errorMessage: 'Algo saíu mal. Por favor, inténtao de novo.',
      nameRequired: 'O nome é obrigatorio',
      nameMinLength: 'O nome debe ter polo menos 2 caracteres',
      emailRequired: 'O email é obrigatorio',
      emailInvalid: 'Por favor, introduce un email válido',
      messageRequired: 'A mensaxe é obrigatoria',
      messageMinLength: 'A mensaxe debe ter polo menos 10 caracteres',
      formLabel: 'Formulario de contacto',
      nameLabel: 'Introduce o teu nome completo',
      emailLabel: 'Introduce o teu enderezo de email',
      messageLabel: 'Escribe a túa mensaxe',
      submitLabel: 'Enviar mensaxe de contacto',
      mapLabel: 'Mapa de localización de AS Cremosas',
      viewOnMaps: 'Ver en Google Maps',
      phone: 'Teléfono'
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
    },
    reviews: {
      title: 'Recensións dos Nosos Clientes',
      loading: 'Cargando recensións',
      noReviews: 'Non hai recensións dispoñibles',
      review: 'recensión',
      reviews: 'recensións',
      listLabel: 'Lista de recensións',
      googleReviews: 'Recensións de Google Maps para',
      translated: 'Traducido automaticamente',
      readMore: 'Ler máis',
      readLess: 'Ler menos',
      readOnGoogle: 'Ler máis en Google Maps',
      previous: 'Reseña anterior',
      next: 'Seguinte reseña'
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
      },
      seeCollection: 'See the full collection',
      bestsellers: 'Our Bestsellers'
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
      recommended: 'Other of our products',
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
        'Gluten-free or lactose-free cakes are only available in medium size.',
      fromPrice: 'from',
      price: 'Price'
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
      send: 'Send',
      sending: 'Sending...',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Write your message here...',
      successTitle: 'Message sent!',
      successMessage: 'Thank you for contacting us. We will reply soon.',
      errorTitle: 'Error sending',
      errorMessage: 'Something went wrong. Please try again.',
      nameRequired: 'Name is required',
      nameMinLength: 'Name must be at least 2 characters',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email',
      messageRequired: 'Message is required',
      messageMinLength: 'Message must be at least 10 characters',
      formLabel: 'Contact form',
      nameLabel: 'Enter your full name',
      emailLabel: 'Enter your email address',
      messageLabel: 'Write your message',
      submitLabel: 'Send contact message',
      mapLabel: 'AS Cremosas location map',
      viewOnMaps: 'View on Google Maps',
      phone: 'Phone'
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
    },
    reviews: {
      title: 'Customer Reviews',
      loading: 'Loading reviews',
      noReviews: 'No reviews available',
      review: 'review',
      reviews: 'reviews',
      listLabel: 'Reviews list',
      googleReviews: 'Google Maps reviews for',
      translated: 'Automatically translated',
      readMore: 'Read more',
      readLess: 'Read less',
      readOnGoogle: 'Read more on Google Maps',
      previous: 'Previous review',
      next: 'Next review'
    }
  }
};
