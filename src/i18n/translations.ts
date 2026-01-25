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
        title: 'Tartas de queso de lujo',
        title2: 'Creadas con los mejores ingredientes',
        title3: 'Calidad Artesanal en cada detalle',
        cta: 'Comprar ahora'
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes'
      },
      seeCollection: 'Ver toda la colección',
      bestsellers: 'Nuestros Bestsellers',
      cakes: 'Nuestras Tartas'
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
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      notes: 'Notas adicionales',
      placeOrder: 'Realizar Pedido',
      total: 'Total',
      pickupTime: 'Hora de Recogida',
      morning: 'Mañana',
      evening: 'Tarde ',
      selectDate: 'Selecciona una fecha',
      selectTime: 'Selecciona una hora',
      processing: 'Procesando...',
      payWithCard: 'Pagar con Tarjeta',
      orderSuccess: '¡Pedido realizado!',
      orderSuccessMessage:
        'Gracias por tu pedido. Te enviaremos un email de confirmación.',
      orderError: 'Error al procesar el pedido',
      orderErrorMessage: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
      paymentError: 'Error en el pago',
      paymentErrorMessage: 'No se pudo procesar el pago. Inténtalo de nuevo.',
      minDaysNotice: 'Los pedidos se aceptan con mínimo 2 días de antelación.',
      validation: {
        nameRequired: 'El nombre es obligatorio',
        nameMinLength: 'El nombre debe tener al menos 2 caracteres',
        emailRequired: 'El email es obligatorio',
        emailInvalid: 'Por favor, introduce un email válido',
        phoneRequired: 'El teléfono es obligatorio',
        phoneInvalid: 'Formato de teléfono inválido',
        dateRequired: 'La fecha de recogida es obligatoria',
        timeRequired: 'La hora de recogida es obligatoria',
        invalidDay: 'No disponible para recogida los domingos',
        minDaysNoticeSaturday:
          'Pedidos realizados en sábado después de las 12:00: recogida desde el martes siguiente',
        minDaysNotice:
          'Los pedidos se aceptan con mínimo 2 días de antelación. Domingos cerrado.',
        termsRequired: 'Debes aceptar los términos y condiciones para continuar'
      },
      notePlaceholder: 'Por favor, incluye cualquier instrucción especial...',
      nonRefundableNotice:
        'Los pedidos no son reembolsables debido a la naturaleza perecedera del producto.',
      privacyConsent: 'He leído y acepto los',
      privacyPolicy: 'Política de Privacidad',
      terms: 'Términos y Condiciones de Compra'
    },
    cart: {
      title: 'Tu Carrito',
      empty: 'Tu carrito está vacío',
      emptyDescription:
        'Descubre nuestras deliciosas tartas de queso y añade tus favoritas al carrito.',
      continueShopping: 'Continuar Comprando',
      goToCart: 'Ir al Carrito',
      itemAdded: 'Añadido al carrito',
      remove: 'Eliminar',
      quantity: 'Cantidad',
      subtotal: 'Subtotal',
      total: 'Total',
      checkout: 'Proceder al Pago',
      size: 'Tamaño',
      type: 'Tipo',
      unitPrice: 'Precio unitario',
      clearCart: 'Vaciar carrito',
      clearCartConfirm: '¿Estás seguro de que quieres vaciar el carrito?',
      clearCartCancel: 'Cancelar',
      clearCartConfirmButton: 'Sí, vaciar',
      itemRemoved: 'Producto eliminado',
      cartCleared: 'Carrito vaciado',
      orderSummary: 'Resumen del Pedido',
      items: 'artículos',
      item: 'artículo',
      glutenFree: 'Sin gluten',
      lactoseFree: 'Sin lactosa',
      sugarFree: 'Sin azúcar',
      normal: 'Normal',
      dietary: 'Tipo'
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
      title: 'Pedidos Corporativos',
      subtitle: 'Soluciones especiales para empresas y grandes volúmenes',
      benefits: {
        corporate: {
          title: 'Eventos Corporativos',
          description: 'Perfecto para celebraciones de empresa'
        },
        volume: {
          title: 'Grandes Volúmenes',
          description: 'Condiciones especiales para pedidos grandes'
        },
        partners: {
          title: 'Socios Comerciales',
          description: 'Colaboración con restaurantes y tiendas'
        }
      },
      form: {
        title: 'Solicitar Información',
        companyName: 'Nombre de la empresa',
        companyNamePlaceholder: 'Tu empresa',
        contactPerson: 'Persona de contacto',
        contactPersonPlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'empresa@example.com',
        phone: 'Teléfono',
        orderSize: 'Volumen estimado',
        orderSizePlaceholder: 'Ej: 50 unidades mensuales',
        message: 'Detalles adicionales',
        messagePlaceholder: 'Cuéntanos más sobre tu proyecto...',
        submit: 'Enviar',
        sending: 'Enviando...'
      },
      validation: {
        companyNameRequired: 'El nombre de la empresa es obligatorio',
        companyNameMinLength: 'El nombre debe tener al menos 2 caracteres',
        contactPersonRequired: 'El nombre de contacto es obligatorio',
        contactPersonMinLength: 'El nombre debe tener al menos 2 caracteres',
        emailRequired: 'El email es obligatorio',
        emailInvalid: 'Por favor, introduce un email válido',
        phoneRequired: 'El teléfono es obligatorio',
        phoneInvalid:
          'Formato inválido. Usa solo + y números (ej: +34600000000 o 600000000)',
        orderSizeRequired: 'El volumen estimado es obligatorio',
        messageRequired: 'El mensaje es obligatorio',
        messageMinLength: 'El mensaje debe tener al menos 10 caracteres'
      },
      success: {
        title: '¡Consulta enviada!',
        message: 'Gracias por tu interés. Te contactaremos pronto.'
      },
      error: {
        title: 'Error al enviar',
        message: 'Algo salió mal. Por favor, inténtalo de nuevo.'
      },
      ariaLabels: {
        formLabel: 'Formulario de consulta B2B',
        companyNameLabel: 'Introduce el nombre de tu empresa',
        contactPersonLabel: 'Introduce el nombre de la persona de contacto',
        emailLabel: 'Introduce tu dirección de email',
        phoneLabel: 'Introduce tu número de teléfono',
        orderSizeLabel: 'Introduce el volumen estimado del pedido',
        messageLabel: 'Escribe detalles adicionales sobre tu proyecto',
        submitLabel: 'Enviar consulta B2B'
      }
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
      phoneLabel: 'Llamar al 881068091',
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
        laborales: 'Lunes - Viernes',
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
    },
    notFound: {
      returnLabel: 'volver al inicio',
      pageNotFound: '¡Oops! Página no encontrada'
    },
    checkoutSuccess: {
      loading: 'Verificando pago...',
      title: '¡Pago completado!',
      message: 'Gracias por tu pedido. Hemos recibido tu pago correctamente.',
      orderDetails: 'Detalles del pedido',
      orderId: 'Número de pedido',
      emailNotice:
        'Te enviaremos un email de confirmación con todos los detalles de tu pedido.',
      questions: '¿Tienes alguna pregunta?',
      contactUs: 'Contáctanos',
      navigation: 'Opciones de navegación'
    },
    checkoutCancel: {
      loading: 'Cargando...',
      title: '¡Pago cancelado!',
      message:
        'El proceso de pago ha sido cancelado. Tu carrito sigue intacto y puedes intentarlo de nuevo cuando quieras.',
      orderReference: 'Referencia del pedido',
      noChargeTitle: 'No se ha realizado ningún cargo',
      noChargeMessage:
        'Tu tarjeta no ha sido cobrada. Los productos siguen en tu carrito.',
      possibleReasons: '¿Por qué se canceló el pago?',
      reasonsList: 'Posibles razones',
      reason1: 'Cancelaste el proceso manualmente',
      reason2: 'La sesión de pago expiró',
      reason3: 'Hubo un problema con la conexión',
      retryPayment: 'Intentar de nuevo',
      backToCart: 'Al carrito',
      needHelp: '¿Necesitas ayuda?',
      contactSupport: 'Contacta con nosotros'
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
      bestsellers: 'Os Nosos Bestsellers',
      cakes: 'As Nosas Tartas'
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
      name: 'Nome',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      notes: 'Notas adicionais',
      placeOrder: 'Realizar Pedido',
      total: 'Total',
      pickupTime: 'Hora de Recollida',
      morning: 'Mañá',
      evening: 'Tarde',
      selectDate: 'Selecciona unha data',
      selectTime: 'Selecciona unha hora',
      processing: 'Procesando...',
      payWithCard: 'Pagar con Tarxeta',
      orderSuccess: '¡Pedido realizado!',
      orderSuccessMessage:
        'Grazas polo teu pedido. Enviarémosche un email de confirmación.',
      orderError: 'Erro ao procesar o pedido',
      orderErrorMessage: 'Ocorreu un erro. Por favor, inténtao de novo.',
      paymentError: 'Erro no pago',
      paymentErrorMessage: 'Non se puido procesar o pago. Inténtao de novo.',
      minDaysNotice: 'Os pedidos acéptanse con mínimo 2 días de antelación.',
      validation: {
        nameRequired: 'O nome é obrigatorio',
        nameMinLength: 'O nome debe ter polo menos 2 caracteres',
        emailRequired: 'O email é obrigatorio',
        emailInvalid: 'Por favor, introduce un email válido',
        phoneRequired: 'O teléfono é obrigatorio',
        phoneInvalid: 'Formato de teléfono inválido',
        dateRequired: 'A data de recollida é obrigatoria',
        timeRequired: 'A hora de recollida é obrigatoria',
        invalidDay: 'Non dispoñible para recollida os domingos',
        minDaysNoticeSaturday:
          'Pedidos realizados en sábado despois das 12:00: recollida desde o martes seguinte',
        minDaysNotice:
          'Os pedidos acéptanse con mínimo 2 días de antelación. Domingos pechado.',
        termsRequired: 'Debes aceptar os términos e condicións para continuar'
      },
      notePlaceholder: 'Por favor, inclúe calquera instrución especial...',
      nonRefundableNotice:
        'Os pedidos non son reembolsables debido á natureza perecedoeira do produto.',
      privacyConsent: 'Lin e acepto os',
      privacyPolicy: 'Política de Privacidade',
      terms: 'Termos e Condicións de Compra'
    },
    cart: {
      title: 'O Teu Carriño',
      empty: 'O teu carriño está baleiro',
      emptyDescription:
        'Descubre as nosas deliciosas tartas de queixo e engade as túas favoritas ao carriño.',
      continueShopping: 'Continuar Comprando',
      goToCart: 'Ir ao Carriño',
      itemAdded: 'Engadido ao carriño',
      remove: 'Eliminar',
      quantity: 'Cantidade',
      subtotal: 'Subtotal',
      total: 'Total',
      checkout: 'Proceder ao Pago',
      size: 'Tamaño',
      type: 'Tipo',
      unitPrice: 'Prezo unitario',
      clearCart: 'Baleirar carriño',
      clearCartConfirm: '¿Estás seguro de que queres baleirar o carriño?',
      clearCartCancel: 'Cancelar',
      clearCartConfirmButton: 'Si, baleirar',
      itemRemoved: 'Produto eliminado',
      cartCleared: 'Carriño baleirado',
      orderSummary: 'Resumo do Pedido',
      items: 'artigos',
      item: 'artigo',
      glutenFree: 'Sen glute',
      lactoseFree: 'Sen lactosa',
      sugarFree: 'Sen azucre',
      normal: 'Normal',
      dietary: 'Tipo'
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
      title: 'Pedidos Corporativos',
      subtitle: 'Solucións especiais para empresas e grandes volumes',
      benefits: {
        corporate: {
          title: 'Eventos Corporativos',
          description: 'Perfecto para celebracións de empresa'
        },
        volume: {
          title: 'Grandes Volumes',
          description: 'Condicións especiais para pedidos grandes'
        },
        partners: {
          title: 'Socios Comerciais',
          description: 'Colaboración con restaurantes e tendas'
        }
      },
      form: {
        title: 'Solicitar Información',
        companyName: 'Nome da empresa',
        companyNamePlaceholder: 'A túa empresa',
        contactPerson: 'Persoa de contacto',
        contactPersonPlaceholder: 'O teu nome',
        email: 'Email',
        emailPlaceholder: 'empresa@example.com',
        phone: 'Teléfono',
        orderSize: 'Volume estimado',
        orderSizePlaceholder: 'Ex: 50 unidades mensuais',
        message: 'Detalles adicionais',
        messagePlaceholder: 'Cóntanos máis sobre o teu proxecto...',
        submit: 'Enviar',
        sending: 'Enviando...'
      },
      validation: {
        companyNameRequired: 'O nome da empresa é obrigatorio',
        companyNameMinLength: 'O nome debe ter polo menos 2 caracteres',
        contactPersonRequired: 'O nome de contacto é obrigatorio',
        contactPersonMinLength: 'O nome debe ter polo menos 2 caracteres',
        emailRequired: 'O email é obrigatorio',
        emailInvalid: 'Por favor, introduce un email válido',
        phoneRequired: 'O teléfono é obrigatorio',
        phoneInvalid:
          'Formato inválido. Usa só + e números (ex: +34600000000 ou 600000000)',
        orderSizeRequired: 'O volume estimado é obrigatorio',
        messageRequired: 'A mensaxe é obrigatoria',
        messageMinLength: 'A mensaxe debe ter polo menos 10 caracteres'
      },
      success: {
        title: 'Consulta enviada!',
        message: 'Grazas polo teu interese. Contactarémosche pronto.'
      },
      error: {
        title: 'Erro ao enviar',
        message: 'Algo saíu mal. Por favor, inténtao de novo.'
      },
      ariaLabels: {
        formLabel: 'Formulario de consulta B2B',
        companyNameLabel: 'Introduce o nome da túa empresa',
        contactPersonLabel: 'Introduce o nome da persoa de contacto',
        emailLabel: 'Introduce o teu enderezo de email',
        phoneLabel: 'Introduce o teu número de teléfono',
        orderSizeLabel: 'Introduce o volume estimado do pedido',
        messageLabel: 'Escribe detalles adicionais sobre o teu proxecto',
        submitLabel: 'Enviar consulta B2B'
      }
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
      phoneLabel: 'Chamar ao  881068091',
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
        laborales: 'Luns - Venres',
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
    },
    notFound: {
      returnLabel: 'volver ao inicio',
      pageNotFound: '¡Oops! Páxina non atopada'
    },
    checkoutSuccess: {
      loading: 'Verificando pago...',
      title: '¡Pago completado!',
      message: 'Grazas polo teu pedido. Recibimos o teu pago correctamente.',
      orderDetails: 'Detalles do pedido',
      orderId: 'Número de pedido',
      emailNotice:
        'Enviarémosche un email de confirmación con todos os detalles do teu pedido.',
      questions: '¿Tes algunha pregunta?',
      contactUs: 'Contacta connosco',
      navigation: 'Opcións de navegación'
    },
    checkoutCancel: {
      loading: 'Cargando...',
      title: '¡Pago cancelado!',
      message:
        'O proceso de pago foi cancelado. O teu carriño segue intacto e podes intentalo de novo cando queiras.',
      orderReference: 'Referencia do pedido',
      noChargeTitle: 'Non se realizou ningún cargo',
      noChargeMessage:
        'A túa tarxeta non foi cobrada. Os produtos seguen no teu carriño.',
      possibleReasons: '¿Por que se cancelou o pago?',
      reasonsList: 'Posibles razóns',
      reason1: 'Cancelaches o proceso manualmente',
      reason2: 'A sesión de pago expirou',
      reason3: 'Houbo un problema coa conexión',
      retryPayment: 'Intentar de novo',
      backToCart: 'Ao carriño',
      needHelp: '¿Necesitas axuda?',
      contactSupport: 'Contacta connosco'
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
      bestsellers: 'Our Bestsellers',
      cakes: 'Our Cakes'
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
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      notes: 'Additional notes',
      placeOrder: 'Place Order',
      total: 'Total',
      pickupTime: 'Pickup Time',
      morning: 'Morning',
      evening: 'Afternoon',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      processing: 'Processing...',
      payWithCard: 'Pay with Card',
      orderSuccess: 'Order placed!',
      orderSuccessMessage:
        'Thank you for your order. We will send you a confirmation email.',
      orderError: 'Error processing order',
      orderErrorMessage: 'An error occurred. Please try again.',
      paymentError: 'Payment error',
      paymentErrorMessage: 'Could not process payment. Please try again.',
      minDaysNotice: 'Orders are accepted with a minimum of 2 days notice.',
      validation: {
        nameRequired: 'Name is required',
        nameMinLength: 'Name must be at least 2 characters',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        phoneRequired: 'Phone is required',
        phoneInvalid: 'Invalid phone format',
        dateRequired: 'Pickup date is required',
        timeRequired: 'Pickup time is required',
        invalidDay: 'Not available for pickup on Sundays',
        minDaysNoticeSaturday:
          'Orders placed on Saturday after 12:00: pickup from the following Tuesday',
        minDaysNotice:
          'Orders are accepted with a minimum of 2 days notice. Sundays closed.',
        termsRequired: 'You must accept the terms and conditions to continue'
      },
      notePlaceholder: 'Please include any special instructions...',
      nonRefundableNotice:
        'Orders are non-refundable due to the perishable nature of the product.',
      privacyConsent: 'I have read and accept the',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms and Conditions of Purchase'
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty',
      emptyDescription:
        'Discover our delicious cheesecakes and add your favorites to the cart.',
      continueShopping: 'Continue Shopping',
      goToCart: 'Go to Cart',
      itemAdded: 'Added to cart',
      remove: 'Remove',
      quantity: 'Quantity',
      subtotal: 'Subtotal',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      size: 'Size',
      type: 'Type',
      unitPrice: 'Unit price',
      clearCart: 'Clear cart',
      clearCartConfirm: 'Are you sure you want to clear the cart?',
      clearCartCancel: 'Cancel',
      clearCartConfirmButton: 'Yes, clear',
      itemRemoved: 'Product removed',
      cartCleared: 'Cart cleared',
      orderSummary: 'Order Summary',
      items: 'items',
      item: 'item',
      glutenFree: 'Gluten-free',
      lactoseFree: 'Lactose-free',
      sugarFree: 'Sugar-free',
      normal: 'Regular',
      dietary: 'Type'
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
      title: 'Corporate Orders',
      subtitle: 'Special solutions for businesses and large volumes',
      benefits: {
        corporate: {
          title: 'Corporate Events',
          description: 'Perfect for company celebrations'
        },
        volume: {
          title: 'Large Volumes',
          description: 'Special conditions for large orders'
        },
        partners: {
          title: 'Business Partners',
          description: 'Collaboration with restaurants and shops'
        }
      },
      form: {
        title: 'Request Information',
        companyName: 'Company name',
        companyNamePlaceholder: 'Your company',
        contactPerson: 'Contact person',
        contactPersonPlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'company@example.com',
        phone: 'Phone',
        orderSize: 'Estimated volume',
        orderSizePlaceholder: 'Ex: 50 units per month',
        message: 'Additional details',
        messagePlaceholder: 'Tell us more about your project...',
        submit: 'Send',
        sending: 'Sending...'
      },
      validation: {
        companyNameRequired: 'Company name is required',
        companyNameMinLength: 'Name must be at least 2 characters',
        contactPersonRequired: 'Contact name is required',
        contactPersonMinLength: 'Name must be at least 2 characters',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        phoneRequired: 'Phone is required',
        phoneInvalid:
          'Invalid format. Use only + and numbers (e.g., +34600000000 or 600000000)',
        orderSizeRequired: 'Estimated volume is required',
        messageRequired: 'Message is required',
        messageMinLength: 'Message must be at least 10 characters'
      },
      success: {
        title: 'Inquiry sent!',
        message: 'Thank you for your interest. We will contact you soon.'
      },
      error: {
        title: 'Error sending',
        message: 'Something went wrong. Please try again.'
      },
      ariaLabels: {
        formLabel: 'B2B inquiry form',
        companyNameLabel: 'Enter your company name',
        contactPersonLabel: 'Enter the contact person name',
        emailLabel: 'Enter your email address',
        phoneLabel: 'Enter your phone number',
        orderSizeLabel: 'Enter the estimated order volume',
        messageLabel: 'Write additional details about your project',
        submitLabel: 'Send B2B inquiry'
      }
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
      phoneLabel: 'Call +34881068091',
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
        laborales: 'Monday - Friday',
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
    },
    notFound: {
      returnLabel: 'return to homepage',
      pageNotFound: 'Oops! Page not found'
    },
    checkoutSuccess: {
      loading: 'Verifying payment...',
      title: 'Payment completed!',
      message:
        'Thank you for your order. We have received your payment successfully.',
      orderDetails: 'Order details',
      orderId: 'Order number',
      emailNotice:
        'We will send you a confirmation email with all the details of your order.',
      questions: 'Do you have any questions?',
      contactUs: 'Contact us',
      navigation: 'Navigation options'
    },
    checkoutCancel: {
      loading: 'Loading...',
      title: 'Payment cancelled!',
      message:
        'The payment process has been cancelled. Your cart is still intact and you can try again whenever you want.',
      orderReference: 'Order reference',
      noChargeTitle: 'No charge has been made',
      noChargeMessage:
        'Your card has not been charged. The products are still in your cart.',
      possibleReasons: 'Why was the payment cancelled?',
      reasonsList: 'Possible reasons',
      reason1: 'You cancelled the process manually',
      reason2: 'The payment session expired',
      reason3: 'There was a connection problem',
      retryPayment: 'Try again',
      backToCart: 'To cart',
      needHelp: 'Need help?',
      contactSupport: 'Contact us'
    }
  }
};
