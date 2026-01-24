import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { faqs } from '@/i18n/faq-translations';

export default function FAQ() {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto pt-8 sm:pt-10 animate-fade-in max-w-4xl">
      <h1 className="text-2xl sm:text-4xl mb-6 sm:mb-10 text-center">
        {t.faq.title}
      </h1>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-primary-foreground rounded-lg px-6 transition-all duration-300 hover:shadow-xl"
          >
            <AccordionTrigger className="text-left">
              <span
                className="text-sm sm:text-base
"
              >
                {faq.question[language]}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer[language]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
