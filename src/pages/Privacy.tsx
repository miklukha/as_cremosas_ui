export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-8 text-foreground">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            1. Responsable del tratamiento
          </h2>
          <p>
            AS Cremosas es el responsable del tratamiento de los datos personales del usuario y le
            informa de que estos datos serán tratados de conformidad con lo dispuesto en el
            Reglamento (UE) 2016/679 de 27 de abril (GDPR).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            2. Finalidad del tratamiento
          </h2>
          <p>
            Los datos personales recogidos serán utilizados para:
            <ul className="list-disc pl-6 mt-2">
              <li>Gestionar y procesar pedidos de cheesecakes</li>
              <li>Proporcionar información sobre productos y servicios</li>
              <li>Responder a consultas y solicitudes de información</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            3. Legitimación
          </h2>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento del interesado y la
            ejecución de un contrato en el que el interesado es parte.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            4. Conservación de datos
          </h2>
          <p>
            Los datos personales se conservarán mientras sea necesario para cumplir con las
            finalidades para las que se recogieron y para determinar las posibles responsabilidades
            que se pudieran derivar de dichas finalidades y del tratamiento de los datos.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            5. Derechos del usuario
          </h2>
          <p>
            El usuario tiene derecho a:
            <ul className="list-disc pl-6 mt-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Oponerse al tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
          </p>
          <p className="mt-4">
            Para ejercer estos derechos, puede contactar con nosotros en info@ascremosas.com
          </p>
        </section>
      </div>
    </div>
  );
}
