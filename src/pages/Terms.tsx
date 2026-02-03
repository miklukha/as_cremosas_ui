import { useLanguage } from '@/context/LanguageContext';
import { termsContent } from '@/i18n/terms-translations';
import { EMAIL, PHONE } from '@/helpers/constants';

export default function Terms() {
  const { language } = useLanguage();
  const content = termsContent[language];

  return (
    <div className="container mx-auto pt-8 sm:pt-10 pb-16 animate-fade-in max-w-4xl">
      <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-center">
        {content.title}
      </h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        {/* Última actualización */}
        <p className="text-sm italic">{content.lastUpdated}</p>

        {/* 1. Información General */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.general.title}</h2>
          <p className="leading-relaxed mb-4">
            {content.sections.general.intro}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.general.sellerData.title}
          </h3>
          <div className="leading-relaxed space-y-1 ml-4">
            <p>
              <span className="font-medium">
                {content.sections.general.sellerData.company}:
              </span>{' '}
              AS CREMOSAS CHEESECAKE, S.L.
            </p>
            <p>
              <span className="font-medium">
                {content.sections.general.sellerData.nif}:
              </span>{' '}
              B24865503
            </p>
            <p>
              <span className="font-medium">
                {content.sections.general.sellerData.address}:
              </span>{' '}
              Calle San Nicolás 5, 15001 A Coruña, España
            </p>
            <p>
              <span className="font-medium">
                {content.sections.general.sellerData.email}:
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
                {content.sections.general.sellerData.phone}:
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
                {content.sections.general.sellerData.website}:
              </span>{' '}
              <a
                href="https://ascremosas.com"
                className="text-accent hover:underline"
              >
                ascremosas.com
              </a>
            </p>
          </div>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.general.acceptance.title}
          </h3>
          <p className="leading-relaxed">
            {content.sections.general.acceptance.paragraph}
          </p>
        </section>

        {/* 2. Productos */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.products.title}</h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.products.description.title}
          </h3>
          <p className="leading-relaxed">
            {content.sections.products.description.paragraph}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.products.dietaryOptions.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.products.dietaryOptions.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {content.sections.products.dietaryOptions.items.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{item.title}:</span>{' '}
                  {item.description}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.products.allergens.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.products.allergens.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.products.allergens.items.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-2">
            {content.sections.products.allergens.recommendation}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.products.storage.title}
          </h3>
          <p className="leading-relaxed">
            {content.sections.products.storage.paragraph}
          </p>
        </section>

        {/* 3. Proceso de Pedido */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.orderProcess.title}
          </h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.orderProcess.howToOrder.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.orderProcess.howToOrder.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.orderProcess.howToOrder.methods.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-medium">{item.title}:</span>{' '}
                  {item.description}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.orderProcess.minimumNotice.title}
          </h3>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.orderProcess.minimumNotice.main}
          </p>
          <p className="leading-relaxed mb-2">
            {content.sections.orderProcess.minimumNotice.exceptionsTitle}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.orderProcess.minimumNotice.exceptions.map(
              (item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.orderProcess.confirmation.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.orderProcess.confirmation.intro}
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            {content.sections.orderProcess.confirmation.steps.map(
              (step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              )
            )}
          </ol>
          <p className="leading-relaxed mt-2 font-medium">
            {content.sections.orderProcess.confirmation.important}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.orderProcess.availability.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.orderProcess.availability.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.orderProcess.availability.steps.map(
              (step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              )
            )}
          </ul>
        </section>

        {/* 4. Precios y Pago */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.pricing.title}</h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pricing.prices.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.pricing.prices.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.pricing.prices.paragraph2}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pricing.paymentMethods.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.pricing.paymentMethods.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li className="leading-relaxed">
              {content.sections.pricing.paymentMethods.processor}
            </li>
          </ul>
          <p className="leading-relaxed mt-2">
            {content.sections.pricing.paymentMethods.security}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pricing.invoicing.title}
          </h3>
          <p className="leading-relaxed">
            {content.sections.pricing.invoicing.paragraph}
          </p>
        </section>

        {/* 5. Recogida en Tienda */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.pickup.title}</h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pickup.deliveryMode.title}
          </h3>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.pickup.deliveryMode.main}
          </p>
          <p className="leading-relaxed mb-1">
            {content.sections.pickup.deliveryMode.addressLabel}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li key="coruna" className="leading-relaxed">
              Calle San Nicolás 5, 15001 A Coruña, España
            </li>
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pickup.schedule.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.pickup.schedule.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.pickup.schedule.times.map((time, index) => (
              <li key={index} className="leading-relaxed">
                <span className="font-medium">{time.title}:</span> {time.hours}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-2 font-medium">
            {content.sections.pickup.schedule.closed}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pickup.collecting.title}
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.pickup.collecting.instructions.map(
              (instruction, index) => (
                <li key={index} className="leading-relaxed">
                  {instruction}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.pickup.noShow.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.pickup.noShow.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.pickup.noShow.consequences.map(
              (consequence, index) => (
                <li key={index} className="leading-relaxed">
                  {consequence}
                </li>
              )
            )}
          </ul>
        </section>

        {/* 6. Modificaciones y Cancelaciones */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.modifications.title}
          </h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.modifications.orderChanges.title}
          </h3>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.modifications.orderChanges.restriction}
          </p>
          <p className="leading-relaxed mb-2">
            {content.sections.modifications.orderChanges.howTo}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.modifications.cancellation.title}
          </h3>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.modifications.cancellation.policy}
          </p>
          <p className="leading-relaxed">
            {content.sections.modifications.cancellation.howTo}
          </p>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.modifications.refunds.title}
          </h3>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.modifications.refunds.policy}
          </p>
          <p className="leading-relaxed mb-2">
            {content.sections.modifications.refunds.exceptionsTitle}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.modifications.refunds.exceptions.map(
              (exception, index) => (
                <li key={index} className="leading-relaxed">
                  {exception}
                </li>
              )
            )}
          </ul>
          <p className="leading-relaxed mt-2">
            {content.sections.modifications.refunds.timing}
          </p>
        </section>

        {/* 7. Derecho de Desistimiento */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.withdrawalRight.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.withdrawalRight.intro}
          </p>
          <p className="leading-relaxed mb-2 font-medium">
            {content.sections.withdrawalRight.notApplicable}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.withdrawalRight.reasons.map((reason, index) => (
              <li key={index} className="leading-relaxed">
                {reason}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed mt-2 font-medium">
            {content.sections.withdrawalRight.conclusion}
          </p>
        </section>

        {/* 8. Garantías y Responsabilidad */}
        <section>
          <h2 className="text-2xl mb-3">{content.sections.warranties.title}</h2>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.warranties.quality.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.warranties.quality.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.warranties.quality.guarantees.map(
              (guarantee, index) => (
                <li key={index} className="leading-relaxed">
                  {guarantee}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.warranties.complaints.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.warranties.complaints.intro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.warranties.complaints.steps.map((step, index) => (
              <li key={index} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ul>

          <h3 className="text-xl mb-2 mt-4">
            {content.sections.warranties.limitation.title}
          </h3>
          <p className="leading-relaxed mb-2">
            {content.sections.warranties.limitation.scope}
          </p>
          <p className="leading-relaxed mb-2">
            {content.sections.warranties.limitation.notResponsible}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.warranties.limitation.cases.map(
              (caseItem, index) => (
                <li key={index} className="leading-relaxed">
                  {caseItem}
                </li>
              )
            )}
          </ul>
        </section>

        {/* 9. Protección de Datos */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.dataProtection.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.dataProtection.intro}{' '}
            <a href="/privacy" className="text-accent hover:underline">
              {content.sections.dataProtection.linkText}
            </a>
            .
          </p>
          <p className="leading-relaxed mb-2">
            {content.sections.dataProtection.consentIntro}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {content.sections.dataProtection.purposes.map((purpose, index) => (
              <li key={index} className="leading-relaxed">
                {purpose}
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Propiedad Intelectual */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.intellectualProperty.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.intellectualProperty.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.intellectualProperty.paragraph2}
          </p>
        </section>

        {/* 11. Legislación Aplicable */}
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

        {/* 12. Resolución de Litigios */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.disputeResolution.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.disputeResolution.intro}{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </section>

        {/* 13. Servicio de Atención al Cliente */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.customerService.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.customerService.intro}
          </p>
          <div className="ml-4 space-y-2">
            <div>
              <p className="font-medium">
                {content.sections.customerService.schedule.title}
              </p>
              <ul className="list-disc list-inside ml-4">
                {content.sections.customerService.schedule.hours.map(
                  (hour, index) => (
                    <li key={index} className="leading-relaxed">
                      {hour}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="font-medium">
                {content.sections.customerService.contact.title}
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <span className="font-medium">
                    {content.sections.customerService.contact.phone}:
                  </span>{' '}
                  <a
                    href={`tel:${PHONE}`}
                    className="text-accent hover:underline"
                    aria-label={`Llamar al ${PHONE}`}
                  >
                    {PHONE}
                  </a>
                </li>
                <li>
                  <span className="font-medium">
                    {content.sections.customerService.contact.email}:
                  </span>{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-accent hover:underline"
                    aria-label={`Enviar email a ${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <span className="font-medium">
                    {content.sections.customerService.contact.address}:
                  </span>{' '}
                  Calle San Nicolás 5, 15001 A Coruña, España
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 14. Modificaciones */}
        <section>
          <h2 className="text-2xl mb-3">
            {content.sections.termsModifications.title}
          </h2>
          <p className="leading-relaxed mb-2">
            {content.sections.termsModifications.paragraph1}
          </p>
          <p className="leading-relaxed">
            {content.sections.termsModifications.paragraph2}
          </p>
        </section>
      </div>
    </div>
  );
}
