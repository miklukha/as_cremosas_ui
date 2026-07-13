import { PHONE } from '@/helpers/constants';

export const termsContent = {
  es: {
    title: 'Términos y Condiciones de Compra',
    lastUpdated: 'Última actualización: enero 2026',
    sections: {
      general: {
        title: '1. Información General',
        intro:
          'Los presentes Términos y Condiciones de Compra regulan la venta de productos de AS CREMOSAS CHEESECAKE, S.L. a través del sitio web ascremosas.com.',
        sellerData: {
          title: '1.1 Datos del vendedor',
          company: 'Razón social',
          nif: 'NIF',
          address: 'Domicilio social',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          website: 'Sitio web'
        },
        acceptance: {
          title: '1.2 Aceptación de los términos',
          paragraph:
            'Al realizar un pedido, aceptas estar vinculado por estos Términos y Condiciones de Compra, así como por nuestro Aviso Legal y Política de Privacidad.'
        }
      },
      products: {
        title: '2. Productos',
        description: {
          title: '2.1 Descripción de productos',
          paragraph:
            'Todos nuestros cheesecakes son elaborados artesanalmente con ingredientes de alta calidad. Los productos están disponibles en diferentes tamaños y sabores según se indica en cada ficha de producto.'
        },
        dietaryOptions: {
          title: '2.2 Opciones dietéticas especiales',
          intro: 'Ofrecemos opciones especiales bajo pedido:',
          items: [
            {
              title: 'Sin gluten',
              description:
                'Normalmente disponible en tienda, exclusivamente en formato mediano'
            },
            {
              title: 'Sin lactosa',
              description: 'Solo bajo pedido, exclusivamente en formato mediano'
            }
          ]
        },
        allergens: {
          title: '2.3 Alérgenos',
          intro:
            'Nuestros productos pueden contener o haber estado en contacto con:',
          items: ['Frutos secos', 'Lácteos', 'Huevos'],
          recommendation:
            'Recomendamos consultar la información de alérgenos específica de cada producto antes de realizar el pedido.'
        },
        storage: {
          title: '2.4 Conservación',
          paragraph:
            'Nuestros cheesecakes deben conservarse en el frigorífico y se mantienen en perfectas condiciones hasta 3 días desde la fecha de recogida.'
        }
      },
      orderProcess: {
        title: '3. Proceso de Pedido',
        howToOrder: {
          title: '3.1 Realización del pedido',
          intro: 'Puedes realizar tu pedido:',
          methods: [
            { title: 'Online', description: 'A través de nuestra tienda web' },
            {
              title: 'Por teléfono',
              description: `Llamando al ${PHONE}`
            },
            {
              title: 'En tienda física',
              description: 'Calle San Nicolás 5, 15001 A Coruña'
            }
          ]
        },
        minimumNotice: {
          title: '3.2 Plazo mínimo de pedido',
          main: 'Los pedidos deben realizarse con un mínimo de 48 horas de antelación.',
          exceptionsTitle: 'Excepciones:',
          exceptions: [
            'Pedidos realizados los sábados después de las 12:00: La fecha mínima de recogida será el martes siguiente'
          ]
        },
        confirmation: {
          title: '3.3 Confirmación del pedido',
          intro: 'Una vez realizado el pedido:',
          steps: [
            'Recibirás un email de confirmación con los detalles del pedido',
            'El pago se procesará a través de Stripe',
            'Recibirás un email con la confirmación del pago'
          ],
          important:
            'Importante: El contrato se perfecciona cuando recibes la confirmación del pedido por email.'
        },
        availability: {
          title: '3.4 Disponibilidad de productos',
          intro:
            'Nos esforzamos por mantener actualizada la disponibilidad de productos. Sin embargo, en caso de no disponibilidad:',
          steps: [
            'Te contactaremos lo antes posible',
            'Te ofreceremos alternativas similares',
            'Si no aceptas las alternativas, cancelaremos el pedido y reembolsaremos el importe íntegro'
          ]
        }
      },
      pricing: {
        title: '4. Precios y Pago',
        prices: {
          title: '4.1 Precios',
          paragraph1:
            'Todos los precios están expresados en euros (€) e incluyen el IVA aplicable.',
          paragraph2:
            'Los precios mostrados en el sitio web son los vigentes en el momento de realizar el pedido.'
        },
        paymentMethods: {
          title: '4.2 Métodos de pago',
          intro: 'Aceptamos pagos mediante:',
          processor: 'Procesados de forma segura a través de Stripe',
          security:
            'No almacenamos datos completos de tarjetas de crédito en nuestros servidores.'
        },
        invoicing: {
          title: '4.3 Facturación',
          paragraph:
            'Recibirás un recibo de pago de Stripe junto con la confirmación del pedido. Si necesitas una factura formal, puedes solicitarla contactando con nosotros.'
        }
      },
      pickup: {
        title: '5. Recogida en Tienda',
        deliveryMode: {
          title: '5.1 Modalidad de entrega',
          main: 'Actualmente solo ofrecemos recogida en tienda para garantizar la calidad óptima de nuestros productos.',
          addressLabel: 'Dirección de recogida:'
        },
        schedule: {
          title: '5.2 Horarios de recogida',
          intro: 'Puedes seleccionar uno de los siguientes horarios:',
          // times: [
          //   { title: 'Mañana', hours: '11:30 - 14:00' },
          //   { title: 'Tarde', hours: '17:00 - 21:30' }
          // ],
          times: [
            { title: 'Mañana', hours: '11:00 - 14:00' },
            { title: 'Tarde', hours: '16:00 - 20:00' }
          ],
          closed: 'Domingos cerrado.'
          // closed: ''
        },
        collecting: {
          title: '5.3 Recogida del pedido',
          instructions: [
            'Presenta tu número de pedido al recoger',
            'Verifica el pedido antes de salir de la tienda',
            'Si detectas algún error, infórmanos inmediatamente'
          ]
        },
        noShow: {
          title: '5.4 No recogida del pedido',
          intro: 'Si no recoges tu pedido en la fecha y hora seleccionada:',
          consequences: [
            'Te contactaremos para reagendar',
            'Si no respondes en 24 horas, el pedido se considerará abandonado',
            'No se realizarán reembolsos por pedidos no recogidos'
          ]
        }
      },
      modifications: {
        title: '6. Modificaciones y Cancelaciones',
        orderChanges: {
          title: '6.1 Modificación de pedidos',
          restriction:
            'No podemos aceptar modificaciones de pedidos una vez confirmado el pago.',
          howTo:
            'Si necesitas realizar algún cambio, contacta con nosotros lo antes posible por teléfono o email'
        },
        cancellation: {
          title: '6.2 Cancelación de pedidos',
          policy:
            'No se aceptan cancelaciones una vez confirmado el pago debido a la naturaleza perecedera del producto y el proceso de elaboración artesanal.',
          howTo:
            'En caso de circunstancias excepcionales, contacta con nosotros por teléfono o email.'
        },
        refunds: {
          title: '6.3 Política de reembolsos',
          policy:
            'Los pedidos no son reembolsables debido a la naturaleza perecedera del producto.',
          exceptionsTitle: 'Excepciones:',
          exceptions: [
            'Si cancelamos el pedido por falta de disponibilidad',
            'Si hay un error imputable a AS CREMOSAS CHEESECAKE, S.L.'
          ],
          timing:
            'Los reembolsos se procesarán en el mismo método de pago utilizado en un plazo máximo de 14 días naturales.'
        }
      },
      withdrawalRight: {
        title: '7. Derecho de Desistimiento',
        intro:
          'De conformidad con el artículo 103 del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios:',
        notApplicable: 'No existe derecho de desistimiento para:',
        reasons: [
          'Productos perecederos o que puedan deteriorarse o caducar con rapidez',
          'Productos elaborados conforme a las especificaciones del consumidor o claramente personalizados'
        ],
        conclusion:
          'Por tanto, no se admiten devoluciones de productos salvo en caso de defecto o error imputable al vendedor.'
      },
      warranties: {
        title: '8. Garantías y Responsabilidad',
        quality: {
          title: '8.1 Garantía de calidad',
          intro: 'Garantizamos que todos nuestros productos:',
          guarantees: [
            'Están elaborados con ingredientes de primera calidad',
            'Cumplen con la normativa sanitaria vigente',
            'Se elaboran siguiendo estrictos protocolos de higiene y seguridad alimentaria'
          ]
        },
        complaints: {
          title: '8.2 Reclamaciones por defectos',
          intro: 'Si el producto presenta algún defecto:',
          steps: [
            'Contacta con nosotros inmediatamente en el momento de la recogida o en las siguientes 24 horas',
            'Envía fotografías del defecto',
            'Evaluaremos la reclamación y ofreceremos: Sustitución del producto o Reembolso del importe'
          ]
        },
        limitation: {
          title: '8.3 Limitación de responsabilidad',
          scope:
            'Nuestra responsabilidad se limita al importe pagado por el producto.',
          notResponsible: 'No seremos responsables de:',
          cases: [
            'Daños derivados del almacenamiento inadecuado del producto',
            'Deterioro por no seguir las instrucciones de conservación',
            'Alergias o intolerancias no comunicadas previamente'
          ]
        }
      },
      dataProtection: {
        title: '9. Protección de Datos',
        intro:
          'El tratamiento de tus datos personales se realiza conforme a nuestra',
        linkText: 'Política de Privacidad',
        consentIntro:
          'Al realizar un pedido, consientes el tratamiento de tus datos para:',
        purposes: [
          'Gestionar el pedido',
          'Procesar el pago',
          'Comunicarnos contigo sobre el estado del pedido',
          'Cumplir con obligaciones legales'
        ]
      },
      intellectualProperty: {
        title: '10. Propiedad Intelectual',
        paragraph1:
          'Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños) son propiedad de AS CREMOSAS CHEESECAKE, S.L. o de terceros que han autorizado su uso.',
        paragraph2:
          'Queda prohibida la reproducción, distribución o comunicación pública sin autorización previa por escrito.'
      },
      legislation: {
        title: '11. Legislación Aplicable y Jurisdicción',
        paragraph1:
          'Estos Términos y Condiciones se rigen por la legislación española.',
        paragraph2:
          'Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de A Coruña, salvo que la ley disponga expresamente otro fuero aplicable.'
      },
      disputeResolution: {
        title: '12. Resolución de Litigios Online',
        intro:
          'Conforme al Reglamento (UE) 524/2013, la Comisión Europea facilita una plataforma de resolución de litigios online disponible en:'
      },
      customerService: {
        title: '13. Servicio de Atención al Cliente',
        intro: 'Para cualquier consulta, duda o reclamación:',
        schedule: {
          title: 'Horario de atención:',
          hours: [
            'Lunes a sábado: 11:00 - 14:00 y 16:00 - 20:00',
            'Domingos: Cerrado'
          ]
        },
        contact: {
          title: 'Contacto:',
          phone: 'Teléfono',
          email: 'Email',
          address: 'Dirección'
        }
      },
      termsModifications: {
        title: '14. Modificaciones',
        paragraph1:
          'AS CREMOSAS CHEESECAKE, S.L. se reserva el derecho a modificar estos Términos y Condiciones en cualquier momento.',
        paragraph2:
          'Los cambios serán aplicables a partir de su publicación en el sitio web. Los pedidos realizados antes de la modificación se regirán por los términos vigentes en el momento del pedido.'
      }
    },
    footer: {
      acceptance:
        'Al realizar un pedido, confirmas que has leído, comprendido y aceptado estos Términos y Condiciones de Compra.'
    }
  },
  gl: {
    title: 'Termos e Condicións de Compra',
    lastUpdated: 'Última actualización: xaneiro 2026',
    sections: {
      general: {
        title: '1. Información Xeral',
        intro:
          'Os presentes Termos e Condicións de Compra regulan a venda de produtos de AS CREMOSAS CHEESECAKE, S.L. a través do sitio web ascremosas.com.',
        sellerData: {
          title: '1.1 Datos do vendedor',
          company: 'Razón social',
          nif: 'NIF',
          address: 'Domicilio social',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          website: 'Sitio web'
        },
        acceptance: {
          title: '1.2 Aceptación dos termos',
          paragraph:
            'Ao realizar un pedido, aceptas estar vinculado por estes Termos e Condicións de Compra, así como polo noso Aviso Legal e Política de Privacidade.'
        }
      },
      products: {
        title: '2. Produtos',
        description: {
          title: '2.1 Descrición de produtos',
          paragraph:
            'Todos os nosos cheesecakes son elaborados artesanalmente con ingredientes de alta calidade. Os produtos están dispoñibles en diferentes tamaños e sabores segundo se indica en cada ficha de produto.'
        },
        dietaryOptions: {
          title: '2.2 Opcións dietéticas especiais',
          intro: 'Ofrecemos opcións especiais baixo pedido:',
          items: [
            {
              title: 'Sen glute',
              description:
                'Normalmente dispoñible en tenda, exclusivamente en formato mediano'
            },
            {
              title: 'Sen lactosa',
              description: 'Só baixo pedido, exclusivamente en formato mediano'
            }
          ]
        },
        allergens: {
          title: '2.3 Alérxenos',
          intro:
            'Os nosos produtos poden conter ou ter estado en contacto con:',
          items: ['Froitos secos', 'Lácteos', 'Ovos'],
          recommendation:
            'Recomendamos consultar a información de alérxenos específica de cada produto antes de realizar o pedido.'
        },
        storage: {
          title: '2.4 Conservación',
          paragraph:
            'Os nosos cheesecakes deben conservarse no frigorífico e mantéñense en perfectas condicións ata 3 días desde a data de recollida.'
        }
      },
      orderProcess: {
        title: '3. Proceso de Pedido',
        howToOrder: {
          title: '3.1 Realización do pedido',
          intro: 'Podes realizar o teu pedido:',
          methods: [
            { title: 'Online', description: 'A través da nosa tenda web' },
            {
              title: 'Por teléfono',
              description: `Chamando ao ${PHONE}`
            },
            {
              title: 'Na tenda física',
              description: 'Calle San Nicolás 5, 15001 A Coruña'
            }
          ]
        },
        minimumNotice: {
          title: '3.2 Prazo mínimo de pedido',
          main: 'Os pedidos deben realizarse cun mínimo de 48 horas de antelación.',
          exceptionsTitle: 'Excepcións:',
          exceptions: [
            'Pedidos realizados os sábados despois das 12:00: A data mínima de recollida será o martes seguinte'
          ]
        },
        confirmation: {
          title: '3.3 Confirmación do pedido',
          intro: 'Unha vez realizado o pedido:',
          steps: [
            'Recibirás un email de confirmación cos detalles do pedido',
            'O pago procesarase a través de Stripe',
            'Recibirás un email coa confirmación do pago'
          ],
          important:
            'Importante: O contrato perfecciónase cando recibes a confirmación do pedido por email.'
        },
        availability: {
          title: '3.4 Dispoñibilidade de produtos',
          intro:
            'Esforzámonos por manter actualizada a dispoñibilidade de produtos. Con todo, en caso de non dispoñibilidade:',
          steps: [
            'Contactaremos contigo canto antes',
            'Ofreceremos alternativas similares',
            'Se non aceptas as alternativas, cancelaremos o pedido e reembolsaremos o importe íntegro'
          ]
        }
      },
      pricing: {
        title: '4. Prezos e Pago',
        prices: {
          title: '4.1 Prezos',
          paragraph1:
            'Todos os prezos están expresados en euros (€) e inclúen o IVE aplicable.',
          paragraph2:
            'Os prezos mostrados no sitio web son os vixentes no momento de realizar o pedido.'
        },
        paymentMethods: {
          title: '4.2 Métodos de pago',
          intro: 'Aceptamos pagos mediante:',
          processor: 'Procesados de forma segura a través de Stripe',
          security:
            'Non almacenamos datos completos de tarxetas de crédito nos nosos servidores.'
        },
        invoicing: {
          title: '4.3 Facturación',
          paragraph:
            'Recibirás un recibo de pago de Stripe xunto coa confirmación do pedido. Se necesitas unha factura formal, podes solicitala contactando connosco.'
        }
      },
      pickup: {
        title: '5. Recollida na Tenda',
        deliveryMode: {
          title: '5.1 Modalidade de entrega',
          main: 'Actualmente só ofrecemos recollida na tenda para garantir a calidade óptima dos nosos produtos.',
          addressLabel: 'Enderezo de recollida:'
        },
        schedule: {
          title: '5.2 Horarios de recollida',
          intro: 'Podes seleccionar un dos seguintes horarios:',
          times: [
            { title: 'Mañá', hours: '11:00 - 14:00' },
            { title: 'Tarde', hours: '16:00 - 20:00' }
          ],
          // closed: 'Domingos pechado.'
          closed: 'Martes pechado.'
        },
        collecting: {
          title: '5.3 Recollida do pedido',
          instructions: [
            'Presenta o teu número de pedido ao recoller',
            'Verifica o pedido antes de saír da tenda',
            'Se detectas algún erro, infórmanos inmediatamente'
          ]
        },
        noShow: {
          title: '5.4 Non recollida do pedido',
          intro: 'Se non recolles o teu pedido na data e hora seleccionada:',
          consequences: [
            'Contactaremos contigo para reagendar',
            'Se non respondes en 24 horas, o pedido considerarase abandonado',
            'Non se realizarán reembolsos por pedidos non recollidos'
          ]
        }
      },
      modifications: {
        title: '6. Modificacións e Cancelacións',
        orderChanges: {
          title: '6.1 Modificación de pedidos',
          restriction:
            'Non podemos aceptar modificacións de pedidos unha vez confirmado o pago.',
          howTo:
            'Se necesitas realizar algún cambio, contacta connosco canto antes por teléfono ou email'
        },
        cancellation: {
          title: '6.2 Cancelación de pedidos',
          policy:
            'Non se aceptan cancelacións unha vez confirmado o pago debido á natureza perecedera do produto e o proceso de elaboración artesanal.',
          howTo:
            'En caso de circunstancias excepcionais, contacta connosco por teléfono ou email.'
        },
        refunds: {
          title: '6.3 Política de reembolsos',
          policy:
            'Os pedidos non son reembolsables debido á natureza perecedera do produto.',
          exceptionsTitle: 'Excepcións:',
          exceptions: [
            'Se cancelamos o pedido por falta de dispoñibilidade',
            'Se hai un erro imputable a AS CREMOSAS CHEESECAKE, S.L.'
          ],
          timing:
            'Os reembolsos procesaranse no mesmo método de pago utilizado nun prazo máximo de 14 días naturais.'
        }
      },
      withdrawalRight: {
        title: '7. Dereito de Desistimento',
        intro:
          'De conformidade co artigo 103 do Real Decreto Lexislativo 1/2007, do 16 de novembro, polo que se aproba o texto refundido da Lei Xeral para a Defensa dos Consumidores e Usuarios:',
        notApplicable: 'Non existe dereito de desistimento para:',
        reasons: [
          'Produtos perecederos ou que poidan deteriorarse ou caducar con rapidez',
          'Produtos elaborados conforme ás especificacións do consumidor ou claramente personalizados'
        ],
        conclusion:
          'Polo tanto, non se admiten devolucións de produtos salvo en caso de defecto ou erro imputable ao vendedor.'
      },
      warranties: {
        title: '8. Garantías e Responsabilidade',
        quality: {
          title: '8.1 Garantía de calidade',
          intro: 'Garantimos que todos os nosos produtos:',
          guarantees: [
            'Están elaborados con ingredientes de primeira calidade',
            'Cumpren coa normativa sanitaria vixente',
            'Elabóranse seguindo estritos protocolos de hixiene e seguridade alimentaria'
          ]
        },
        complaints: {
          title: '8.2 Reclamacións por defectos',
          intro: 'Se o produto presenta algún defecto:',
          steps: [
            'Contacta connosco inmediatamente no momento da recollida ou nas seguintes 24 horas',
            'Envía fotografías do defecto',
            'Avaliaremos a reclamación e ofreceremos: Substitución do produto ou Reembolso do importe'
          ]
        },
        limitation: {
          title: '8.3 Limitación de responsabilidade',
          scope:
            'A nosa responsabilidade limítase ao importe pagado polo produto.',
          notResponsible: 'Non seremos responsables de:',
          cases: [
            'Danos derivados do almacenamento inadecuado do produto',
            'Deterioro por non seguir as instrucións de conservación',
            'Alerxias ou intolerancias non comunicadas previamente'
          ]
        }
      },
      dataProtection: {
        title: '9. Protección de Datos',
        intro: 'O tratamento dos teus datos persoais realízase conforme á nosa',
        linkText: 'Política de Privacidade',
        consentIntro:
          'Ao realizar un pedido, consentes o tratamento dos teus datos para:',
        purposes: [
          'Xestionar o pedido',
          'Procesar o pago',
          'Comunicarnos contigo sobre o estado do pedido',
          'Cumprir con obrigas legais'
        ]
      },
      intellectualProperty: {
        title: '10. Propiedade Intelectual',
        paragraph1:
          'Todos os contidos do sitio web (textos, imaxes, logotipos, deseños) son propiedade de AS CREMOSAS CHEESECAKE, S.L. ou de terceiros que autorizaron o seu uso.',
        paragraph2:
          'Queda prohibida a reprodución, distribución ou comunicación pública sen autorización previa por escrito.'
      },
      legislation: {
        title: '11. Lexislación Aplicable e Xurisdición',
        paragraph1:
          'Estes Termos e Condicións réxense pola lexislación española.',
        paragraph2:
          'Para calquera controversia, as partes sométense aos Xulgados e Tribunais da Coruña, salvo que a lei dispoña expresamente outro foro aplicable.'
      },
      disputeResolution: {
        title: '12. Resolución de Litixios Online',
        intro:
          'Conforme ao Regulamento (UE) 524/2013, a Comisión Europea facilita unha plataforma de resolución de litixios online dispoñible en:'
      },
      customerService: {
        title: '13. Servizo de Atención ao Cliente',
        intro: 'Para calquera consulta, dúbida ou reclamación:',
        schedule: {
          title: 'Horario de atención:',
          hours: [
            'Luns a sábado: 11:00 - 14:00 e 16:00 - 20:00',
            'Domingos: Pechado'
          ]
        },
        contact: {
          title: 'Contacto:',
          phone: 'Teléfono',
          email: 'Email',
          address: 'Enderezo'
        }
      },
      termsModifications: {
        title: '14. Modificacións',
        paragraph1:
          'AS CREMOSAS CHEESECAKE, S.L. resérvase o dereito a modificar estes Termos e Condicións en calquera momento.',
        paragraph2:
          'Os cambios serán aplicables a partir da súa publicación no sitio web. Os pedidos realizados antes da modificación rexeranse polos termos vixentes no momento do pedido.'
      }
    },
    footer: {
      acceptance:
        'Ao realizar un pedido, confirmas que liches, comprendiches e aceptaches estes Termos e Condicións de Compra.'
    }
  },
  en: {
    title: 'Terms and Conditions of Purchase',
    lastUpdated: 'Last updated: January 2026',
    sections: {
      general: {
        title: '1. General Information',
        intro:
          'These Terms and Conditions of Purchase regulate the sale of products by AS CREMOSAS CHEESECAKE, S.L. through the website ascremosas.com.',
        sellerData: {
          title: '1.1 Seller data',
          company: 'Company name',
          nif: 'Tax ID',
          address: 'Registered address',
          email: 'Email',
          phone: 'Phone',
          website: 'Website'
        },
        acceptance: {
          title: '1.2 Acceptance of terms',
          paragraph:
            'By placing an order, you agree to be bound by these Terms and Conditions of Purchase, as well as our Legal Notice and Privacy Policy.'
        }
      },
      products: {
        title: '2. Products',
        description: {
          title: '2.1 Product description',
          paragraph:
            'All our cheesecakes are handmade with high-quality ingredients. Products are available in different sizes and flavors as indicated on each product page.'
        },
        dietaryOptions: {
          title: '2.2 Special dietary options',
          intro: 'We offer special options upon request:',
          items: [
            {
              title: 'Gluten-free',
              description:
                'Usually available in store, exclusively in medium format'
            },
            {
              title: 'Lactose-free',
              description: 'Only upon request, exclusively in medium format'
            }
          ]
        },
        allergens: {
          title: '2.3 Allergens',
          intro: 'Our products may contain or have been in contact with:',
          items: ['Tree nuts', 'Dairy', 'Eggs'],
          recommendation:
            'We recommend checking the specific allergen information for each product before placing an order.'
        },
        storage: {
          title: '2.4 Storage',
          paragraph:
            'Our cheesecakes must be stored in the refrigerator and remain in perfect condition for up to 3 days from the pickup date.'
        }
      },
      orderProcess: {
        title: '3. Order Process',
        howToOrder: {
          title: '3.1 Placing an order',
          intro: 'You can place your order:',
          methods: [
            { title: 'Online', description: 'Through our web store' },
            { title: 'By phone', description: `Calling ${PHONE}` },
            {
              title: 'At our physical store',
              description: 'Calle San Nicolás 5, 15001 A Coruña'
            }
          ]
        },
        minimumNotice: {
          title: '3.2 Minimum notice period',
          main: 'Orders must be placed with a minimum of 48 hours notice.',
          exceptionsTitle: 'Exceptions:',
          exceptions: [
            'Orders placed on Saturdays after 12:00: The minimum pickup date will be the following Tuesday'
          ]
        },
        confirmation: {
          title: '3.3 Order confirmation',
          intro: 'Once the order is placed:',
          steps: [
            'You will receive a confirmation email with order details',
            'Payment will be processed through Stripe',
            'You will receive an email with payment confirmation'
          ],
          important:
            'Important: The contract is concluded when you receive the order confirmation email.'
        },
        availability: {
          title: '3.4 Product availability',
          intro:
            'We strive to keep product availability updated. However, in case of unavailability:',
          steps: [
            'We will contact you as soon as possible',
            'We will offer similar alternatives',
            'If you do not accept the alternatives, we will cancel the order and refund the full amount'
          ]
        }
      },
      pricing: {
        title: '4. Pricing and Payment',
        prices: {
          title: '4.1 Prices',
          paragraph1:
            'All prices are expressed in euros (€) and include applicable VAT.',
          paragraph2:
            'Prices shown on the website are those in effect at the time of placing the order.'
        },
        paymentMethods: {
          title: '4.2 Payment methods',
          intro: 'We accept payments via:',
          processor: 'Securely processed through Stripe',
          security: 'We do not store complete credit card data on our servers.'
        },
        invoicing: {
          title: '4.3 Invoicing',
          paragraph:
            'You will receive a Stripe payment receipt along with the order confirmation. If you need a formal invoice, you can request it by contacting us.'
        }
      },
      pickup: {
        title: '5. In-Store Pickup',
        deliveryMode: {
          title: '5.1 Delivery mode',
          main: 'We currently only offer in-store pickup to ensure optimal product quality.',
          addressLabel: 'Pickup address:'
        },
        schedule: {
          title: '5.2 Pickup hours',
          intro: 'You can select one of the following time slots:',
          times: [
            { title: 'Morning', hours: '11:00 - 14:00' },
            { title: 'Afternoon', hours: '16:00 - 20:00' }
          ],
          // closed: 'Closed on Sundays.'
          closed: 'Closed on Tuesdays.'
        },
        collecting: {
          title: '5.3 Collecting your order',
          instructions: [
            'Present your order number when picking up',
            'Verify the order before leaving the store',
            'If you detect any error, inform us immediately'
          ]
        },
        noShow: {
          title: '5.4 Failure to pick up order',
          intro:
            'If you do not pick up your order on the selected date and time:',
          consequences: [
            'We will contact you to reschedule',
            'If you do not respond within 24 hours, the order will be considered abandoned',
            'No refunds will be made for uncollected orders'
          ]
        }
      },
      modifications: {
        title: '6. Modifications and Cancellations',
        orderChanges: {
          title: '6.1 Order modifications',
          restriction:
            'We cannot accept order modifications once payment has been confirmed.',
          howTo:
            'If you need to make any changes, contact us as soon as possible by phone or email'
        },
        cancellation: {
          title: '6.2 Order cancellation',
          policy:
            'Cancellations are not accepted once payment has been confirmed due to the perishable nature of the product and the artisanal production process.',
          howTo:
            'In case of exceptional circumstances, please contact us by phone or email.'
        },
        refunds: {
          title: '6.3 Refund policy',
          policy:
            'Orders are non-refundable due to the perishable nature of the product.',
          exceptionsTitle: 'Exceptions:',
          exceptions: [
            'If we cancel the order due to lack of availability',
            'If there is an error attributable to AS CREMOSAS CHEESECAKE, S.L.'
          ],
          timing:
            'Refunds will be processed using the same payment method within a maximum of 14 calendar days.'
        }
      },
      withdrawalRight: {
        title: '7. Right of Withdrawal',
        intro:
          'In accordance with Article 103 of Royal Legislative Decree 1/2007, of November 16, which approves the revised text of the General Law for the Defense of Consumers and Users:',
        notApplicable: 'There is no right of withdrawal for:',
        reasons: [
          'Perishable products or products that may deteriorate or expire quickly',
          'Products made according to consumer specifications or clearly personalized'
        ],
        conclusion:
          'Therefore, product returns are not accepted except in case of defect or error attributable to the seller.'
      },
      warranties: {
        title: '8. Warranties and Liability',
        quality: {
          title: '8.1 Quality guarantee',
          intro: 'We guarantee that all our products:',
          guarantees: [
            'Are made with top-quality ingredients',
            'Comply with current health regulations',
            'Are made following strict hygiene and food safety protocols'
          ]
        },
        complaints: {
          title: '8.2 Defect complaints',
          intro: 'If the product has any defect:',
          steps: [
            'Contact us immediately at the time of pickup or within the following 24 hours',
            'Send photographs of the defect',
            'We will evaluate the complaint and offer: Product replacement or Amount refund'
          ]
        },
        limitation: {
          title: '8.3 Limitation of liability',
          scope: 'Our liability is limited to the amount paid for the product.',
          notResponsible: 'We will not be responsible for:',
          cases: [
            'Damage resulting from improper product storage',
            'Deterioration from not following storage instructions',
            'Allergies or intolerances not previously communicated'
          ]
        }
      },
      dataProtection: {
        title: '9. Data Protection',
        intro:
          'The processing of your personal data is carried out in accordance with our',
        linkText: 'Privacy Policy',
        consentIntro:
          'By placing an order, you consent to the processing of your data to:',
        purposes: [
          'Manage the order',
          'Process payment',
          'Communicate with you about the order status',
          'Comply with legal obligations'
        ]
      },
      intellectualProperty: {
        title: '10. Intellectual Property',
        paragraph1:
          'All website content (texts, images, logos, designs) are the property of AS CREMOSAS CHEESECAKE, S.L. or third parties who have authorized their use.',
        paragraph2:
          'Reproduction, distribution or public communication without prior written authorization is prohibited.'
      },
      legislation: {
        title: '11. Applicable Law and Jurisdiction',
        paragraph1:
          'These Terms and Conditions are governed by Spanish legislation.',
        paragraph2:
          'For any dispute, the parties submit to the Courts and Tribunals of A Coruña, unless the law expressly provides for another applicable jurisdiction.'
      },
      disputeResolution: {
        title: '12. Online Dispute Resolution',
        intro:
          'In accordance with Regulation (EU) 524/2013, the European Commission provides an online dispute resolution platform available at:'
      },
      customerService: {
        title: '13. Customer Service',
        intro: 'For any questions, doubts or complaints:',
        schedule: {
          title: 'Service hours:',
          hours: [
            'Monday to Saturday: 11:00 - 14:00 and 16:00 - 20:00',
            'Sundays: Closed'
          ]
        },
        contact: {
          title: 'Contact:',
          phone: 'Phone',
          email: 'Email',
          address: 'Address'
        }
      },
      termsModifications: {
        title: '14. Modifications',
        paragraph1:
          'AS CREMOSAS CHEESECAKE, S.L. reserves the right to modify these Terms and Conditions at any time.',
        paragraph2:
          'Changes will be applicable from their publication on the website. Orders placed before the modification will be governed by the terms in effect at the time of the order.'
      }
    },
    footer: {
      acceptance:
        'By placing an order, you confirm that you have read, understood and accepted these Terms and Conditions of Purchase.'
    }
  }
};
