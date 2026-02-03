import { useLanguage } from '@/context/LanguageContext';
import { cookiesContent } from '@/i18n/cookies-translations-page';
import { EMAIL, PHONE } from '@/helpers/constants';

export default function Cookies() {
  const { language } = useLanguage();
  const content = cookiesContent[language];

  return (
    <div className="container mx-auto pt-8 sm:pt-10 pb-16 animate-fade-in max-w-4xl">
      <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-center">
        {content.title}
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        {/* Introducción */}
        <section>
          <p className="leading-relaxed">{content.introduction}</p>
        </section>

        {/* 1. ¿Qué son las cookies? */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.whatAreCookies.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.whatAreCookies.paragraph}
          </p>
        </section>

        {/* 3. Base legal */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.legalBasis.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.legalBasis.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.legalBasis.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{item.title}:</span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Cómo gestionar cookies */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.manageCookies.title}
          </h2>
          <p className="leading-relaxed mb-3">
            {content.sections.manageCookies.intro}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.manageCookies.panel.title}
          </h3>
          <p className="leading-relaxed">
            {content.sections.manageCookies.panel.description}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.manageCookies.browser.title}
          </h3>
          <p className="leading-relaxed mb-3">
            {content.sections.manageCookies.browser.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.manageCookies.browser.browsers.map(
              (browser, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{browser.name}:</span>{' '}
                  {browser.instructions}
                </li>
              )
            )}
          </ul>
          <p className="leading-relaxed mt-3 font-medium">
            {content.sections.manageCookies.browser.important}
          </p>
        </section>

        {/* 5. Cookies de terceros */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.thirdPartyCookies.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.thirdPartyCookies.paragraph}
          </p>
        </section>

        {/* 6. Cambios en la Política de Cookies */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.modifications.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.modifications.paragraph}
          </p>
        </section>

        {/* 7. Más información */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.moreInfo.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.moreInfo.intro}{' '}
            <a href="/privacy" className="text-accent hover:underline">
              {content.sections.moreInfo.linkText}
            </a>
            .
          </p>
        </section>

        {/* 8. Contacto */}
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
              >
                {EMAIL}
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.contact.phone}:
              </span>{' '}
              <a href={`tel:${PHONE}`} className="text-accent hover:underline">
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

        {/* 9. Enlaces útiles */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.usefulLinks.title}
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.usefulLinks.links.map((link, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{link.title}:</span>{' '}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all"
                >
                  {link.url}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
