import { useLanguage } from '@/context/LanguageContext';
import { privacyContent } from '@/i18n/privacy-translations';

export default function Privacy() {
  const { language } = useLanguage();
  const content = privacyContent[language];

  return (
    <div className="container mx-auto pt-8 sm:pt-10 pb-16 animate-fade-in max-w-4xl">
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

        {/* 1. Responsable del Tratamiento */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataController.title}
          </h2>
          <div className="leading-relaxed space-y-1">
            <p>
              <span className="font-medium">
                {content.sections.dataController.identity}:
              </span>{' '}
              AS CREMOSAS CHEESECAKE, S.L.
            </p>
            <p>
              <span className="font-medium">
                {content.sections.dataController.nif}:
              </span>{' '}
              B24865503
            </p>
            <p>
              <span className="font-medium">
                {content.sections.dataController.address}:
              </span>{' '}
              Calle San Nicolás 5, 15001 A Coruña, España
            </p>
            <p>
              <span className="font-medium">
                {content.sections.dataController.email}:
              </span>{' '}
              <a
                href="mailto:ascremosas.co@gmail.com"
                className="text-accent hover:underline"
              >
                ascremosas.co@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.dataController.phone}:
              </span>{' '}
              <a
                href="tel:+34881068091"
                className="text-accent hover:underline"
              >
                +34 881 06 80 91
              </a>
            </p>
          </div>
        </section>

        {/* 2. Datos que Recopilamos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataCollected.title}
          </h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.dataCollected.directData.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.dataCollected.directData.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.dataCollected.directData.items.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{item.title}:</span>{' '}
                  {item.description}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.dataCollected.automaticData.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.dataCollected.automaticData.items.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{item.title}:</span>{' '}
                  {item.description}
                </li>
              )
            )}
          </ul>
        </section>

        {/* 3. Finalidad del Tratamiento */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.processingPurpose.title}
          </h2>
          <p className="leading-relaxed mb-4">
            {content.sections.processingPurpose.intro}
          </p>

          {content.sections.processingPurpose.purposes.map((purpose, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl mb-2">
                {purpose.title}{' '}
                <span className="text-base font-normal text-muted-foreground">
                  ({purpose.legalBasis})
                </span>
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                {purpose.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 4. Legitimación */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.legitimation.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.legitimation.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.legitimation.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{item.title}:</span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Conservación de Datos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataRetention.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.dataRetention.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.dataRetention.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{item.title}:</span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Destinatarios de los Datos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataRecipients.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.dataRecipients.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.dataRecipients.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{item.title}:</span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-4">
            {content.sections.dataRecipients.noSelling}
          </p>
        </section>

        {/* 7. Transferencias Internacionales */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.internationalTransfers.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.internationalTransfers.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.internationalTransfers.safeguards.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        {/* 8. Tus Derechos */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.rights.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.rights.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.rights.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{item.title}:</span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-4">
            {content.sections.rights.exerciseIntro}
          </p>
          <div className="space-y-1 mt-2 ml-4">
            <p>
              <span className="font-medium">
                {content.sections.rights.contact.email}:
              </span>{' '}
              <a
                href="mailto:ascremosas.co@gmail.com"
                className="text-accent hover:underline"
              >
                ascremosas.co@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.rights.contact.address}:
              </span>{' '}
              Calle San Nicolás 5, 15001 A Coruña, España
            </p>
            <p>
              <span className="font-medium">
                {content.sections.rights.contact.phone}:
              </span>{' '}
              <a
                href="tel:+34881068091"
                className="text-accent hover:underline"
              >
                +34 881 06 80 91
              </a>
            </p>
          </div>
          <p className="leading-relaxed mt-4">
            {content.sections.rights.identification}
          </p>
        </section>

        {/* 9. Reclamaciones */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.complaints.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.complaints.intro}
          </p>
          <div className="space-y-1 ml-4">
            <p className="font-medium">
              {content.sections.complaints.authority.name}
            </p>
            <p>{content.sections.complaints.authority.address}</p>
            <p>
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {content.sections.complaints.authority.website}
              </a>
            </p>
            <p>
              {content.sections.complaints.authority.phone}:{' '}
              {content.sections.complaints.authority.phoneNumbers}
            </p>
          </div>
        </section>

        {/* 10. Seguridad */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.security.title}</h2>
          <p className="leading-relaxed mb-2">
            {content.sections.security.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.security.measures.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 11. Menores de Edad */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.minors.title}</h2>
          <p className="leading-relaxed">{content.sections.minors.paragraph}</p>
        </section>

        {/* 12. Modificaciones */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.modifications.title}
          </h2>
          <p className="leading-relaxed">
            {content.sections.modifications.paragraph}
          </p>
        </section>

        {/* 13. Contacto */}
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
                href="mailto:ascremosas.co@gmail.com"
                className="text-accent hover:underline"
              >
                ascremosas.co@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">
                {content.sections.contact.phone}:
              </span>{' '}
              <a
                href="tel:+34881068091"
                className="text-accent hover:underline"
              >
                +34 881 06 80 91
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
