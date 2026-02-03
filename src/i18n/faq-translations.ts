import { EMAIL, PHONE } from '@/helpers/constants';

export const faqs = [
  {
    question: {
      es: '¿Cómo hago un pedido?',
      gl: 'Como fago un pedido?',
      en: 'How do I place an order?'
    },
    answer: {
      es: 'Puedes hacer tu pedido online a través de nuestra tienda, llamándonos por teléfono o visitándonos personalmente en nuestra tienda física. Elige tu cheesecake favorito, selecciona la fecha de recogida y completa tu pedido fácilmente.',
      gl: 'Podes facer o teu pedido online a través da nosa tenda, chamándonos por teléfono ou visitándonos persoalmente na nosa tenda física. Escolle o teu cheesecake favorito, selecciona a data de recollida e completa o teu pedido de maneira sinxela.',
      en: 'You can place your order online through our shop, by phone, or by visiting us in person at our physical store. Choose your favorite cheesecake, select the pickup date, and complete your order easily.'
    }
  },
  {
    question: {
      es: '¿Cuánto tiempo de antelación necesito para hacer un pedido?',
      gl: 'Canto tempo de antelación necesito para facer un pedido?',
      en: 'How much advance notice do I need to place an order?'
    },
    answer: {
      es: 'Los pedidos deben realizarse con un mínimo de 48 horas de antelación para poder ser aceptados. Los pedidos realizados los sábados después de las 12:00 tendrán como fecha mínima de recogida el martes siguiente. Si se realizan antes de las 12:00, la fecha mínima será el lunes.',
      gl: 'Os pedidos deben realizarse cun mínimo de 48 horas de antelación para poder seren aceptados. Os pedidos realizados os sábados despois das 12:00 terán como data mínima de recollida o martes seguinte. Se se realizan antes das 12:00, a data mínima será o luns.',
      en: 'Orders must be placed with a minimum of 48 hours’ notice in order to be accepted. Orders placed on Saturdays after 12:00 will have the following Tuesday as the earliest pickup date. If placed before 12:00, the earliest pickup date will be Monday.'
    }
  },
  {
    question: {
      es: '¿Hacen envíos a domicilio?',
      gl: 'Facen envíos a domicilio?',
      en: 'Do you offer home delivery?'
    },
    answer: {
      es: 'Actualmente solo ofrecemos recogida en tienda para garantizar la calidad óptima de nuestros productos.',
      gl: 'Actualmente só ofrecemos recollida en tenda para garantir a calidade óptima dos nosos produtos.',
      en: 'Currently, we only offer in-store pickup to ensure optimal product quality.'
    }
  },
  {
    question: {
      es: '¿Tienen opciones sin gluten o sin lactosa?',
      gl: 'Teñen opcións sen glute ou sen lactosa?',
      en: 'Do you have gluten-free or lactose-free options?'
    },
    answer: {
      es: 'Sí, normalmente disponemos de tartas sin gluten en tienda. Las opciones sin lactosa se elaboran únicamente bajo pedido. Ambas están disponibles exclusivamente en formato mediano.',
      gl: 'Si, normalmente dispoñemos de tartas sen glute na tenda. As opcións sen lactosa elabóranse unicamente baixo pedido. Ambas están dispoñibles exclusivamente en formato mediano.',
      en: 'Yes, we usually have gluten-free cheesecakes available in store. Lactose-free options are made exclusively upon request. Both are available only in the medium size.'
    }
  },
  {
    question: {
      es: '¿Qué alérgenos contienen vuestros productos?',
      gl: 'Que alérxenos conteñen os vosos produtos?',
      en: 'What allergens are present in your products?'
    },
    answer: {
      es: 'Nuestros productos pueden contener frutos secos, lácteos y huevos. Recomendamos consultar los alérgenos específicos de cada producto antes de realizar el pedido.',
      gl: 'Os nosos produtos poden conter froitos secos, lácteos e ovos. Recomendamos consultar os alérxenos específicos de cada produto antes de facer o pedido.',
      en: 'Our products may contain nuts, dairy, and eggs. We recommend checking the specific allergens for each product before placing an order.'
    }
  },
  {
    question: {
      es: '¿Es posible modificar o cancelar un pedido?',
      gl: 'É posible modificar ou cancelar un pedido?',
      en: 'Is it possible to modify or cancel an order?'
    },
    answer: {
      es: `No se aceptan modificaciones ni cancelaciones una vez confirmado el pago, debido a la naturaleza perecedera del producto y el proceso de elaboración artesanal. En caso de circunstancias excepcionales, contacta con nosotros por teléfono ${PHONE} o email ${EMAIL}.`,
      gl: `Non se aceptan modificacións nin cancelacións unha vez confirmado o pago, debido á natureza perecedera do produto e o proceso de elaboración artesanal. En caso de circunstancias excepcionais, contacta connosco por teléfono ${PHONE} ou email ${EMAIL}.`,
      en: `Modifications and cancellations are not accepted once payment has been confirmed, due to the perishable nature of the product and the artisanal production process. In case of exceptional circumstances, please contact us by phone ${PHONE} or email ${EMAIL}.`
    }
  },
  {
    question: {
      es: '¿Cuál es la fecha de caducidad de las tartas de queso?',
      gl: 'Cal é o prazo de consumo das tartas de queixo?',
      en: 'What is the shelf life of the cheesecakes?'
    },
    answer: {
      es: 'Nuestros cheesecakes se conservan en perfectas condiciones hasta 3 días en el frigorífico.',
      gl: 'Os nosos cheesecakes consérvanse en perfectas condicións ata 3 días no frigorífico.',
      en: 'Our cheesecakes can be stored in the refrigerator for up to 3 days.'
    }
  },
  {
    question: {
      es: '¿Qué hago si hay un problema con mi pedido?',
      gl: 'Que fago se hai un problema co meu pedido?',
      en: 'What should I do if there is an issue with my order?'
    },
    answer: {
      es: `Si ha ocurrido algún problema con tu pedido, por favor contáctanos por teléfono ${PHONE} o escríbenos a nuestro correo electrónico ${EMAIL}.`,
      gl: `Se ocorreu algún problema co teu pedido, por favor contáctanos por teléfono ${PHONE} ou escríbenos ao noso correo electrónico ${EMAIL}.`,
      en: `If there is any issue with your order, please contact us by phone ${PHONE} or email ${EMAIL}.`
    }
  }
];
