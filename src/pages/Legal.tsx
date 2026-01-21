import { useLanguage } from '@/context/LanguageContext';

export default function Legal() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-8 text-foreground">
        Aviso Legal
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            1. Identificación
          </h2>
          <p>
            AS Cremosas
            <br />
            CIF: B00000000
            <br />
            Dirección: Calle Ejemplo 123, 15001 A Coruña, España
            <br />
            Email: info@ascremosas.com
            <br />
            Teléfono: 881068091
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            2. Objeto
          </h2>
          <p>
            El presente aviso legal regula el uso del sitio web ascremosas.com.
            La navegación por el sitio web atribuye la condición de usuario del
            mismo e implica la aceptación plena y sin reservas de todas y cada
            una de las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            3. Propiedad Intelectual
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo pero no limitándose a
            textos, imágenes, diseños, logotipos y código fuente, son propiedad
            de AS Cremosas o de terceros que han autorizado su uso, y están
            protegidos por las leyes de propiedad intelectual.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            4. Responsabilidad
          </h2>
          <p>
            AS Cremosas no se hace responsable de los daños y perjuicios que
            pudieran derivarse del uso incorrecto de los servicios ofrecidos en
            el sitio web, ni de cualquier incidencia técnica que pudiera
            producirse.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            5. Política de Devoluciones
          </h2>
          <p>
            Debido a la naturaleza perecedera de nuestros productos, los pedidos
            no son reembolsables una vez confirmados. En caso de problemas con
            la calidad del producto, por favor contacte con nosotros en las 24
            horas siguientes a la recogida.
          </p>
        </section>
      </div>
    </div>
  );
}
