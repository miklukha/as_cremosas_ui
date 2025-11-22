export default function Cookies() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
      <h1 className="font-serif text-5xl font-bold mb-8 text-foreground">Política de Cookies</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
            visita nuestro sitio web. Se utilizan para mejorar la experiencia del usuario y el
            rendimiento del sitio.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Tipos de cookies que utilizamos
          </h2>

          <h3 className="font-semibold text-lg text-foreground mt-4">Cookies técnicas</h3>
          <p>
            Son esenciales para el funcionamiento del sitio web. Permiten funciones básicas como la
            navegación por las páginas y el acceso a áreas seguras.
          </p>

          <h3 className="font-semibold text-lg text-foreground mt-4">Cookies de preferencias</h3>
          <p>
            Permiten que el sitio web recuerde información que cambia la forma en que se comporta o
            se ve el sitio, como su idioma preferido.
          </p>

          <h3 className="font-semibold text-lg text-foreground mt-4">Cookies analíticas</h3>
          <p>
            Nos ayudan a entender cómo los visitantes interactúan con el sitio web mediante la
            recopilación y el informe de información de forma anónima.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Gestión de cookies
          </h2>
          <p>
            Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies
            que ya están en su ordenador y puede configurar la mayoría de los navegadores para
            evitar que se coloquen. Sin embargo, si hace esto, puede que tenga que ajustar
            manualmente algunas preferencias cada vez que visite un sitio y algunos servicios y
            funcionalidades pueden no funcionar.
          </p>
        </section>
      </div>
    </div>
  );
}
