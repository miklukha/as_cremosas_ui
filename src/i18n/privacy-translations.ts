export const privacyContent = {
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: enero 2026',
    introduction:
      'En AS CREMOSAS CHEESECAKE, S.L. estamos comprometidos con la protección de tu privacidad y el cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
    sections: {
      dataController: {
        title: '1. Responsable del Tratamiento',
        identity: 'Identidad',
        nif: 'NIF',
        address: 'Dirección',
        email: 'Correo electrónico',
        phone: 'Teléfono'
      },
      dataCollected: {
        title: '2. Datos que Recopilamos',
        directData: {
          title: '2.1 Datos proporcionados directamente por ti',
          intro: 'Al realizar un pedido en nuestra tienda online, recopilamos:',
          items: [
            {
              title: 'Datos de identificación',
              description: 'Nombre completo'
            },
            {
              title: 'Datos de contacto',
              description: 'Correo electrónico, número de teléfono'
            },
            {
              title: 'Datos del pedido',
              description:
                'Productos seleccionados, fecha y hora de recogida, notas especiales, preferencias dietéticas (sin gluten, sin lactosa, sin azúcar)'
            },
            {
              title: 'Datos de pago',
              description:
                'La información de pago es procesada directamente por Stripe (nuestro procesador de pagos) y no almacenamos datos completos de tarjetas de crédito en nuestros servidores'
            }
          ]
        },
        automaticData: {
          title: '2.2 Datos recopilados automáticamente',
          items: [
            {
              title: 'Datos de navegación',
              description:
                'Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia'
            },
            {
              title: 'Cookies y tecnologías similares',
              description:
                'Ver nuestra Política de Cookies para más información'
            }
          ]
        }
      },
      processingPurpose: {
        title: '3. Finalidad del Tratamiento',
        intro:
          'Utilizamos tus datos personales para las siguientes finalidades:',
        purposes: [
          {
            title: '3.1 Gestión de pedidos',
            legalBasis: 'Base legal: Ejecución de contrato',
            items: [
              'Procesar y gestionar tus pedidos',
              'Comunicarnos contigo sobre el estado de tu pedido',
              'Gestionar la recogida de productos',
              'Procesar pagos a través de Stripe'
            ]
          },
          {
            title: '3.2 Comunicaciones comerciales',
            legalBasis: 'Base legal: Consentimiento',
            items: [
              'Enviar newsletters con novedades y ofertas especiales (solo si has dado tu consentimiento explícito)',
              'Informar sobre nuevos productos',
              'Enviar promociones exclusivas'
            ]
          },
          {
            title: '3.3 Cumplimiento de obligaciones legales',
            legalBasis: 'Base legal: Obligación legal',
            items: [
              'Cumplir con obligaciones fiscales y contables',
              'Atender requerimientos de autoridades competentes'
            ]
          },
          {
            title: '3.4 Mejora del servicio',
            legalBasis: 'Base legal: Interés legítimo',
            items: [
              'Analizar el uso del sitio web para mejorar la experiencia del usuario',
              'Realizar análisis estadísticos'
            ]
          }
        ]
      },
      legitimation: {
        title: '4. Legitimación',
        intro: 'El tratamiento de tus datos se basa en:',
        items: [
          {
            title: 'Ejecución de un contrato',
            description: 'Para gestionar tus pedidos'
          },
          {
            title: 'Consentimiento',
            description:
              'Para enviar comunicaciones comerciales (puedes retirar tu consentimiento en cualquier momento)'
          },
          {
            title: 'Obligación legal',
            description: 'Para cumplir con obligaciones fiscales y contables'
          },
          {
            title: 'Interés legítimo',
            description: 'Para mejorar nuestros servicios'
          }
        ]
      },
      dataRetention: {
        title: '5. Conservación de Datos',
        intro: 'Conservaremos tus datos personales:',
        items: [
          {
            title: 'Datos de pedidos',
            description:
              'Durante el tiempo necesario para cumplir con las obligaciones legales (6 años desde la última transacción según la normativa fiscal española)'
          },
          {
            title: 'Comunicaciones comerciales',
            description: 'Hasta que retires tu consentimiento'
          },
          {
            title: 'Datos de navegación',
            description: 'Según lo establecido en nuestra Política de Cookies'
          }
        ]
      },
      dataRecipients: {
        title: '6. Destinatarios de los Datos',
        intro: 'Tus datos personales pueden ser comunicados a:',
        items: [
          {
            title: 'ABANCA / Cecabank',
            description:
              'Entidad financiera y procesador de pagos que cumple con PCI-DSS y la normativa europea de servicios de pago (PSD2). Para más información: https://www.abanca.com/es/proteccion-datos/'
          },
          {
            title: 'Proveedores de servicios tecnológicos',
            description:
              'Hosting, email marketing (solo si contratas estos servicios)'
          },
          {
            title: 'Administraciones públicas',
            description: 'Cuando exista una obligación legal'
          }
        ],
        noSelling:
          'No vendemos, alquilamos ni compartimos tus datos personales con terceros para sus propios fines de marketing.'
      },
      internationalTransfers: {
        title: '7. Transferencias Internacionales',
        intro:
          'Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En estos casos, garantizamos que se han adoptado las medidas de seguridad adecuadas conforme al RGPD, como:',
        safeguards: [
          'Cláusulas contractuales tipo aprobadas por la Comisión Europea',
          'Certificaciones de privacidad reconocidas (Privacy Shield, cuando aplique)',
          'Decisiones de adecuación de la Comisión Europea'
        ]
      },
      rights: {
        title: '8. Tus Derechos',
        intro: 'Tienes derecho a:',
        items: [
          {
            title: 'Acceso',
            description:
              'Obtener confirmación sobre si estamos tratando tus datos personales y acceder a ellos'
          },
          {
            title: 'Rectificación',
            description:
              'Solicitar la corrección de datos inexactos o incompletos'
          },
          {
            title: 'Supresión ("derecho al olvido")',
            description:
              'Solicitar la eliminación de tus datos cuando ya no sean necesarios'
          },
          {
            title: 'Limitación del tratamiento',
            description:
              'Solicitar la limitación del tratamiento de tus datos en determinadas circunstancias'
          },
          {
            title: 'Portabilidad',
            description:
              'Recibir tus datos en formato estructurado y de uso común'
          },
          {
            title: 'Oposición',
            description: 'Oponerte al tratamiento de tus datos'
          },
          {
            title: 'Retirada del consentimiento',
            description:
              'Retirar el consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo'
          }
        ],
        exerciseIntro: 'Para ejercer tus derechos, puedes contactarnos en:',
        contact: {
          email: 'Email',
          address: 'Dirección',
          phone: 'Teléfono'
        },
        identification:
          'Deberás acreditar tu identidad mediante documento válido.'
      },
      complaints: {
        title: '9. Reclamaciones',
        intro:
          'Si consideras que el tratamiento de tus datos personales vulnera la normativa, tienes derecho a presentar una reclamación ante la autoridad de control competente:',
        authority: {
          name: 'Agencia Española de Protección de Datos (AEPD)',
          address: 'C/ Jorge Juan, 6, 28001 Madrid',
          website: 'www.aepd.es',
          phone: 'Teléfono',
          phoneNumbers: '901 100 099 / 912 663 517'
        }
      },
      security: {
        title: '10. Seguridad',
        intro:
          'Hemos implementado medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la pérdida, destrucción o alteración, incluyendo:',
        measures: [
          'Cifrado SSL/TLS en todas las comunicaciones',
          'Acceso restringido a datos personales solo al personal autorizado',
          'Copias de seguridad periódicas',
          'Sistemas de detección y prevención de intrusiones',
          'Procesamiento de pagos a través de Stripe (certificado PCI-DSS)'
        ]
      },
      minors: {
        title: '11. Menores de Edad',
        paragraph:
          'Nuestro sitio web y servicios no están dirigidos a menores de 14 años. No recopilamos intencionadamente datos personales de menores de 14 años. Si eres padre o tutor y tienes conocimiento de que tu hijo nos ha proporcionado datos personales, contacta con nosotros.'
      },
      modifications: {
        title: '12. Modificaciones',
        paragraph:
          'Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Te recomendamos revisar periódicamente esta política.'
      },
      contact: {
        title: '13. Contacto',
        intro:
          'Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales:',
        email: 'Email',
        phone: 'Teléfono',
        address: 'Dirección'
      }
    }
  },
  gl: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última actualización: xaneiro 2026',
    introduction:
      'En AS CREMOSAS CHEESECAKE, S.L. estamos comprometidos coa protección da túa privacidade e o cumprimento do Regulamento (UE) 2016/679 do Parlamento Europeo e do Consello, do 27 de abril de 2016, relativo á protección das persoas físicas (RXPD) e a Lei Orgánica 3/2018, do 5 de decembro, de Protección de Datos Persoais e garantía dos dereitos dixitais (LOPDGDD).',
    sections: {
      dataController: {
        title: '1. Responsable do Tratamento',
        identity: 'Identidade',
        nif: 'NIF',
        address: 'Enderezo',
        email: 'Correo electrónico',
        phone: 'Teléfono'
      },
      dataCollected: {
        title: '2. Datos que Recompilamos',
        directData: {
          title: '2.1 Datos proporcionados directamente por ti',
          intro: 'Ao realizar un pedido na nosa tenda online, recompilamos:',
          items: [
            {
              title: 'Datos de identificación',
              description: 'Nome completo'
            },
            {
              title: 'Datos de contacto',
              description: 'Correo electrónico, número de teléfono'
            },
            {
              title: 'Datos do pedido',
              description:
                'Produtos seleccionados, data e hora de recollida, notas especiais, preferencias dietéticas (sen glute, sen lactosa, sen azucre)'
            },
            {
              title: 'Datos de pago',
              description:
                'A información de pago é procesada directamente por Stripe (o noso procesador de pagos) e non almacenamos datos completos de tarxetas de crédito nos nosos servidores'
            }
          ]
        },
        automaticData: {
          title: '2.2 Datos recompilados automaticamente',
          items: [
            {
              title: 'Datos de navegación',
              description:
                'Enderezo IP, tipo de navegador, páxinas visitadas, tempo de permanencia'
            },
            {
              title: 'Cookies e tecnoloxías similares',
              description:
                'Ver a nosa Política de Cookies para máis información'
            }
          ]
        }
      },
      processingPurpose: {
        title: '3. Finalidade do Tratamento',
        intro:
          'Utilizamos os teus datos persoais para as seguintes finalidades:',
        purposes: [
          {
            title: '3.1 Xestión de pedidos',
            legalBasis: 'Base legal: Execución de contrato',
            items: [
              'Procesar e xestionar os teus pedidos',
              'Comunicarnos contigo sobre o estado do teu pedido',
              'Xestionar a recollida de produtos',
              'Procesar pagos a través de Stripe'
            ]
          },
          {
            title: '3.2 Comunicacións comerciais',
            legalBasis: 'Base legal: Consentimento',
            items: [
              'Enviar newsletters con novedades e ofertas especiais (só se deches o teu consentimento explícito)',
              'Informar sobre novos produtos',
              'Enviar promocións exclusivas'
            ]
          },
          {
            title: '3.3 Cumprimento de obrigas legais',
            legalBasis: 'Base legal: Obriga legal',
            items: [
              'Cumprir con obrigas fiscais e contables',
              'Atender requirimentos de autoridades competentes'
            ]
          },
          {
            title: '3.4 Mellora do servizo',
            legalBasis: 'Base legal: Interese lexítimo',
            items: [
              'Analizar o uso do sitio web para mellorar a experiencia do usuario',
              'Realizar análises estatísticas'
            ]
          }
        ]
      },
      legitimation: {
        title: '4. Lexitimación',
        intro: 'O tratamento dos teus datos baséase en:',
        items: [
          {
            title: 'Execución dun contrato',
            description: 'Para xestionar os teus pedidos'
          },
          {
            title: 'Consentimento',
            description:
              'Para enviar comunicacións comerciais (podes retirar o teu consentimento en calquera momento)'
          },
          {
            title: 'Obriga legal',
            description: 'Para cumprir con obrigas fiscais e contables'
          },
          {
            title: 'Interese lexítimo',
            description: 'Para mellorar os nosos servizos'
          }
        ]
      },
      dataRetention: {
        title: '5. Conservación de Datos',
        intro: 'Conservaremos os teus datos persoais:',
        items: [
          {
            title: 'Datos de pedidos',
            description:
              'Durante o tempo necesario para cumprir coas obrigas legais (6 anos desde a última transacción segundo a normativa fiscal española)'
          },
          {
            title: 'Comunicacións comerciais',
            description: 'Ata que retires o teu consentimento'
          },
          {
            title: 'Datos de navegación',
            description: 'Segundo o establecido na nosa Política de Cookies'
          }
        ]
      },
      dataRecipients: {
        title: '6. Destinatarios dos Datos',
        intro: 'Os teus datos persoais poden ser comunicados a:',
        items: [
          {
            title: 'ABANCA / Cecabank',
            description:
              'Entidade financeira e procesador de pagos que cumpre con PCI-DSS e a normativa europea de servizos de pago (PSD2). Para máis información: https://www.abanca.com/es/proteccion-datos/'
          },
          {
            title: 'Provedores de servizos tecnolóxicos',
            description:
              'Hosting, email marketing (só se contratas estes servizos)'
          },
          {
            title: 'Administracións públicas',
            description: 'Cando exista unha obriga legal'
          }
        ],
        noSelling:
          'Non vendemos, alugamos nin compartimos os teus datos persoais con terceiros para os seus propios fins de marketing.'
      },
      internationalTransfers: {
        title: '7. Transferencias Internacionais',
        intro:
          'Algúns dos nosos provedores de servizos poden estar ubicados fóra do Espazo Económico Europeo (EEE). Nestes casos, garantimos que se adoptaron as medidas de seguridade adecuadas conforme ao RXPD, como:',
        safeguards: [
          'Cláusulas contractuais tipo aprobadas pola Comisión Europea',
          'Certificacións de privacidade recoñecidas (Privacy Shield, cando aplique)',
          'Decisións de adecuación da Comisión Europea'
        ]
      },
      rights: {
        title: '8. Os Teus Dereitos',
        intro: 'Tes dereito a:',
        items: [
          {
            title: 'Acceso',
            description:
              'Obter confirmación sobre se estamos tratando os teus datos persoais e acceder a eles'
          },
          {
            title: 'Rectificación',
            description:
              'Solicitar a corrección de datos inexactos ou incompletos'
          },
          {
            title: 'Supresión ("dereito ao esquecemento")',
            description:
              'Solicitar a eliminación dos teus datos cando xa non sexan necesarios'
          },
          {
            title: 'Limitación do tratamento',
            description:
              'Solicitar a limitación do tratamento dos teus datos en determinadas circunstancias'
          },
          {
            title: 'Portabilidade',
            description:
              'Recibir os teus datos en formato estruturado e de uso común'
          },
          {
            title: 'Oposición',
            description: 'Opoñerte ao tratamento dos teus datos'
          },
          {
            title: 'Retirada do consentimento',
            description:
              'Retirar o consentimento en calquera momento sen que iso afecte á licitude do tratamento previo'
          }
        ],
        exerciseIntro:
          'Para exercer os teus dereitos, podes contactar connosco en:',
        contact: {
          email: 'Email',
          address: 'Enderezo',
          phone: 'Teléfono'
        },
        identification:
          'Deberás acreditar a túa identidade mediante documento válido.'
      },
      complaints: {
        title: '9. Reclamacións',
        intro:
          'Se consideras que o tratamento dos teus datos persoais vulnera a normativa, tes dereito a presentar unha reclamación ante a autoridade de control competente:',
        authority: {
          name: 'Axencia Española de Protección de Datos (AEPD)',
          address: 'C/ Jorge Juan, 6, 28001 Madrid',
          website: 'www.aepd.es',
          phone: 'Teléfono',
          phoneNumbers: '901 100 099 / 912 663 517'
        }
      },
      security: {
        title: '10. Seguridade',
        intro:
          'Implementamos medidas técnicas e organizativas apropiadas para protexer os teus datos persoais contra o acceso non autorizado, a perda, destrución ou alteración, incluíndo:',
        measures: [
          'Cifrado SSL/TLS en todas as comunicacións',
          'Acceso restrinxido a datos persoais só ao persoal autorizado',
          'Copias de seguridade periódicas',
          'Sistemas de detección e prevención de intrusións',
          'Procesamento de pagos a través de Stripe (certificado PCI-DSS)'
        ]
      },
      minors: {
        title: '11. Menores de Idade',
        paragraph:
          'O noso sitio web e servizos non están dirixidos a menores de 14 anos. Non recompilamos intencionadamente datos persoais de menores de 14 anos. Se es pai ou titor e tes coñecemento de que o teu fillo nos proporcionou datos persoais, contacta connosco.'
      },
      modifications: {
        title: '12. Modificacións',
        paragraph:
          'Reservámonos o dereito a modificar esta Política de Privacidade en calquera momento. Recomendámosche revisar periodicamente esta política.'
      },
      contact: {
        title: '13. Contacto',
        intro:
          'Para calquera consulta sobre esta Política de Privacidade ou sobre o tratamento dos teus datos persoais:',
        email: 'Email',
        phone: 'Teléfono',
        address: 'Enderezo'
      }
    }
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: January 2026',
    introduction:
      'At AS CREMOSAS CHEESECAKE, S.L. we are committed to protecting your privacy and complying with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons (GDPR) and Organic Law 3/2018, of 5 December, on the Protection of Personal Data and guarantee of digital rights (LOPDGDD).',
    sections: {
      dataController: {
        title: '1. Data Controller',
        identity: 'Identity',
        nif: 'Tax ID',
        address: 'Address',
        email: 'Email',
        phone: 'Phone'
      },
      dataCollected: {
        title: '2. Data We Collect',
        directData: {
          title: '2.1 Data provided directly by you',
          intro: 'When placing an order in our online store, we collect:',
          items: [
            {
              title: 'Identification data',
              description: 'Full name'
            },
            {
              title: 'Contact data',
              description: 'Email address, phone number'
            },
            {
              title: 'Order data',
              description:
                'Selected products, pickup date and time, special notes, dietary preferences (gluten-free, lactose-free, sugar-free)'
            },
            {
              title: 'Payment data',
              description:
                'Payment information is processed directly by Stripe (our payment processor) and we do not store complete credit card data on our servers'
            }
          ]
        },
        automaticData: {
          title: '2.2 Automatically collected data',
          items: [
            {
              title: 'Navigation data',
              description: 'IP address, browser type, pages visited, dwell time'
            },
            {
              title: 'Cookies and similar technologies',
              description: 'See our Cookie Policy for more information'
            }
          ]
        }
      },
      processingPurpose: {
        title: '3. Processing Purpose',
        intro: 'We use your personal data for the following purposes:',
        purposes: [
          {
            title: '3.1 Order management',
            legalBasis: 'Legal basis: Contract execution',
            items: [
              'Process and manage your orders',
              'Communicate with you about your order status',
              'Manage product pickup',
              'Process payments through Stripe'
            ]
          },
          {
            title: '3.2 Marketing communications',
            legalBasis: 'Legal basis: Consent',
            items: [
              'Send newsletters with news and special offers (only if you have given your explicit consent)',
              'Inform about new products',
              'Send exclusive promotions'
            ]
          },
          {
            title: '3.3 Compliance with legal obligations',
            legalBasis: 'Legal basis: Legal obligation',
            items: [
              'Comply with tax and accounting obligations',
              'Respond to requests from competent authorities'
            ]
          },
          {
            title: '3.4 Service improvement',
            legalBasis: 'Legal basis: Legitimate interest',
            items: [
              'Analyze website usage to improve user experience',
              'Perform statistical analysis'
            ]
          }
        ]
      },
      legitimation: {
        title: '4. Legal Basis',
        intro: 'The processing of your data is based on:',
        items: [
          {
            title: 'Contract execution',
            description: 'To manage your orders'
          },
          {
            title: 'Consent',
            description:
              'To send marketing communications (you can withdraw your consent at any time)'
          },
          {
            title: 'Legal obligation',
            description: 'To comply with tax and accounting obligations'
          },
          {
            title: 'Legitimate interest',
            description: 'To improve our services'
          }
        ]
      },
      dataRetention: {
        title: '5. Data Retention',
        intro: 'We will retain your personal data:',
        items: [
          {
            title: 'Order data',
            description:
              'For the time necessary to comply with legal obligations (6 years from the last transaction according to Spanish tax regulations)'
          },
          {
            title: 'Marketing communications',
            description: 'Until you withdraw your consent'
          },
          {
            title: 'Navigation data',
            description: 'As established in our Cookie Policy'
          }
        ]
      },
      dataRecipients: {
        title: '6. Data Recipients',
        intro: 'Your personal data may be communicated to:',
        items: [
          {
            title: 'ABANCA / Cecabank',
            description:
              'Financial institution and payment processor that complies with PCI-DSS and European payment services regulation (PSD2). For more information: https://www.abanca.com/es/proteccion-datos/'
          },
          {
            title: 'Technology service providers',
            description:
              'Hosting, email marketing (only if you contract these services)'
          },
          {
            title: 'Public administrations',
            description: 'When there is a legal obligation'
          }
        ],
        noSelling:
          'We do not sell, rent or share your personal data with third parties for their own marketing purposes.'
      },
      internationalTransfers: {
        title: '7. International Transfers',
        intro:
          'Some of our service providers may be located outside the European Economic Area (EEA). In these cases, we guarantee that appropriate security measures have been adopted in accordance with the GDPR, such as:',
        safeguards: [
          'Standard contractual clauses approved by the European Commission',
          'Recognized privacy certifications (Privacy Shield, when applicable)',
          'Adequacy decisions of the European Commission'
        ]
      },
      rights: {
        title: '8. Your Rights',
        intro: 'You have the right to:',
        items: [
          {
            title: 'Access',
            description:
              'Obtain confirmation about whether we are processing your personal data and access it'
          },
          {
            title: 'Rectification',
            description: 'Request correction of inaccurate or incomplete data'
          },
          {
            title: 'Erasure ("right to be forgotten")',
            description:
              'Request deletion of your data when it is no longer necessary'
          },
          {
            title: 'Restriction of processing',
            description:
              'Request restriction of processing of your data in certain circumstances'
          },
          {
            title: 'Portability',
            description:
              'Receive your data in a structured, commonly used format'
          },
          {
            title: 'Object',
            description: 'Object to the processing of your data'
          },
          {
            title: 'Withdrawal of consent',
            description:
              'Withdraw consent at any time without affecting the lawfulness of prior processing'
          }
        ],
        exerciseIntro: 'To exercise your rights, you can contact us at:',
        contact: {
          email: 'Email',
          address: 'Address',
          phone: 'Phone'
        },
        identification: 'You must prove your identity with a valid document.'
      },
      complaints: {
        title: '9. Complaints',
        intro:
          'If you believe that the processing of your personal data violates regulations, you have the right to file a complaint with the competent supervisory authority:',
        authority: {
          name: 'Spanish Data Protection Agency (AEPD)',
          address: 'C/ Jorge Juan, 6, 28001 Madrid',
          website: 'www.aepd.es',
          phone: 'Phone',
          phoneNumbers: '901 100 099 / 912 663 517'
        }
      },
      security: {
        title: '10. Security',
        intro:
          'We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, destruction or alteration, including:',
        measures: [
          'SSL/TLS encryption in all communications',
          'Restricted access to personal data only to authorized personnel',
          'Regular backups',
          'Intrusion detection and prevention systems',
          'Payment processing through Stripe (PCI-DSS certified)'
        ]
      },
      minors: {
        title: '11. Minors',
        paragraph:
          'Our website and services are not directed to minors under 14 years of age. We do not intentionally collect personal data from minors under 14 years of age. If you are a parent or guardian and are aware that your child has provided us with personal data, please contact us.'
      },
      modifications: {
        title: '12. Modifications',
        paragraph:
          'We reserve the right to modify this Privacy Policy at any time. We recommend that you review this policy periodically.'
      },
      contact: {
        title: '13. Contact',
        intro:
          'For any questions about this Privacy Policy or about the processing of your personal data:',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      }
    }
  }
};
