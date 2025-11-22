export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-8 text-foreground">
        Términos y Condiciones de Compra
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            1. Aceptación de los términos
          </h2>
          <p>
            Al realizar un pedido en AS Cremosas, usted acepta estos términos y condiciones de
            venta.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Pedidos</h2>
          <p>
            Todos los pedidos están sujetos a disponibilidad y confirmación del precio. Se requiere
            un tiempo mínimo de 48 horas para la preparación de los pedidos. La fecha y hora de
            recogida debe acordarse en el momento del pedido.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Precios</h2>
          <p>
            Los precios mostrados en el sitio web están en euros e incluyen IVA. AS Cremosas se
            reserva el derecho de modificar los precios en cualquier momento, pero los productos se
            facturarán al precio vigente en el momento de realizar el pedido.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Pago</h2>
          <p>
            El pago debe realizarse en el momento de la recogida del pedido. Aceptamos efectivo y
            tarjetas de crédito/débito.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            5. Cancelaciones y devoluciones
          </h2>
          <p>
            Las cancelaciones deben realizarse con al menos 24 horas de antelación a la fecha de
            recogida programada. Debido a la naturaleza perecedera de nuestros productos, no se
            aceptan devoluciones una vez que el pedido ha sido recogido.
          </p>
          <p className="mt-2">
            En caso de defecto de calidad, debe notificarlo dentro de las 24 horas siguientes a la
            recogida para que podamos tomar las medidas apropiadas.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            6. Alérgenos
          </h2>
          <p>
            Todos nuestros productos contienen lácteos y pueden contener gluten, huevos y frutos
            secos. Por favor, infórmenos de cualquier alergia alimentaria al realizar su pedido. No
            podemos garantizar que nuestros productos estén completamente libres de trazas de
            alérgenos.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            7. Conservación
          </h2>
          <p>
            Nuestros cheesecakes deben conservarse refrigerados a una temperatura de 2-5°C. El
            producto tiene una vida útil de 3-5 días desde la fecha de recogida cuando se almacena
            correctamente.
          </p>
        </section>
      </div>
    </div>
  );
}
