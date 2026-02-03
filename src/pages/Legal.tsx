import { useLanguage } from '@/context/LanguageContext';
import { legalContent } from '@/i18n/legal-translations';
import { EMAIL, PHONE } from '@/helpers/constants';

export default function Legal() {
  const { language } = useLanguage();
  const content = legalContent[language];

  return (
    <div className="container mx-auto pt-8 sm:pt-10 animate-fade-in max-w-4xl">
      <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-center">
        {content.title}
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        {/* Última actualización */}
        <p className="text-sm italic">{content.lastUpdated}</p>

        {/* Introducción */}
        <section>
          <p className="leading-relaxed">{content.introduction}</p>
        </section>

        {/* 1. Datos Identificativos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.identification.title}
          </h2>
          <div className="leading-relaxed space-y-1">
            <p>
              <span className="font-medium">
                {content.sections.identification.company}:
              </span>{' '}
              AS CREMOSAS CHEESECAKE, S.L.
            </p>
            <p>
              <span className="font-medium">
                {content.sections.identification.nif}:
              </span>{' '}
              B24865503
            </p>
            <p>
              <span className="font-medium">
                {content.sections.identification.address}:
              </span>{' '}
              Calle San Nicolás 5, 15001 A Coruña, España
            </p>
            <p>
              <span className="font-medium">
                {content.sections.identification.email}:
              </span>{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline"
                aria-label={`Enviar email a ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.identification.phone}:
              </span>{' '}
              <a
                href={`tel:${PHONE}`}
                className="text-accent hover:underline"
                aria-label={`Llamar al ${PHONE}`}
              >
                {PHONE}
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.identification.website}:
              </span>{' '}
              <a
                href="https://ascremosas.com/"
                className="text-accent hover:underline"
                aria-label="Visitar ascremosas.com"
              >
                ascremosas.com
              </a>
            </p>
          </div>
        </section>

        {/* 2. Objeto */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.purpose.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.purpose.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.purpose.paragraph2}
          </p>
        </section>

        {/* 3. Condiciones de Uso */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.termsOfUse.title}</h2>
          <h3 className="text-xl mb-2 mt-4">
            {content.sections.termsOfUse.websiteUse.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.termsOfUse.websiteUse.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.termsOfUse.websiteUse.paragraph2}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.termsOfUse.content.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.termsOfUse.content.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.termsOfUse.content.paragraph2}
          </p>
        </section>

        {/* 4. Responsabilidad */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.responsibility.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.responsibility.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.responsibility.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Enlaces */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.links.title}</h2>
          <p className="leading-relaxed">{content.sections.links.paragraph}</p>
        </section>

        {/* 6. Protección de Datos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataProtection.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.dataProtection.paragraph}{' '}
            <a href="/privacy" className="text-accent hover:underline">
              {content.sections.dataProtection.linkText}
            </a>
            .
          </p>
        </section>

        {/* 7. Cookies */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.cookies.title}</h2>
          <p className="leading-relaxed">
            {content.sections.cookies.paragraph}{' '}
            <a href="/cookies" className="text-accent hover:underline">
              {content.sections.cookies.linkText}
            </a>
            .
          </p>
        </section>

        {/* 8. Modificaciones */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.modifications.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.modifications.paragraph}
          </p>
        </section>

        {/* 9. Legislación Aplicable */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.legislation.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.legislation.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.legislation.paragraph2}
          </p>
        </section>

        {/* 10. Contacto */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.contact.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.contact.intro}
          </p>
          <div className="space-y-1">
            <p>
              <span className="font-medium">
                {content.sections.contact.email}:
              </span>{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline"
                aria-label={`Enviar email a ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.contact.phone}:
              </span>{' '}
              <a
                href={`tel:${PHONE}`}
                className="text-accent hover:underline"
                aria-label={`Llamar al ${PHONE}`}
              >
                {PHONE}
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.contact.address}:
              </span>{' '}
              Calle San Nicolás 5, 15001 A Coruña, España
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
