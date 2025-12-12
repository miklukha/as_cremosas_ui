import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ChevronDown
} from 'lucide-react';
import logo from '@/assets/logo-light.png';
import { TikTokIcon } from '@/components/ui/tiktok-icon';
import { useLanguage } from '@/context/LanguageContext';

// Collapsible Footer Section Component for Mobile
interface CollapsibleFooterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

// Footer Link Component
interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

// Contact Info Component
const ContactInfo = () => {
  const { t } = useLanguage();
  return (
    <ul className="space-y-3" role="list">
      <li>
        <a
          href="tel:+34123456789"
          className="flex items-center gap-3 text-sm text-secondary 
                      hover:font-semibold hover:scale-105 
                     transition-all duration-200 focus-visible:outline-none 
                     focus-visible:ring-2 focus-visible:ring-primary 
                     focus-visible:ring-offset-2 rounded-sm"
          aria-label={t.footer.phoneLabel || 'Llamar al +34123456789'}
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>+34 123 456 789</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:ascremosas.co@gmail.com"
          className="flex items-center gap-3 text-sm text-secondary 
                      hover:font-semibold hover:scale-105 
                     transition-all duration-200 focus-visible:outline-none 
                     focus-visible:ring-2 focus-visible:ring-primary 
                     focus-visible:ring-offset-2 rounded-sm"
          aria-label={
            t.footer.emailLabel || 'Enviar correo a ascremosas.co@gmail.com'
          }
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="break-all">ascremosas.co@gmail.com</span>
        </a>
      </li>
      <li>
        <address className="not-italic">
          <a
            href="https://maps.app.goo.gl/ho7LCFCHNHPRKyrq8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-secondary 
                        hover:font-semibold hover:scale-105 
                       transition-all duration-200 focus-visible:outline-none 
                       focus-visible:ring-2 focus-visible:ring-primary 
                       focus-visible:ring-offset-2 rounded-sm"
            aria-label={
              t.footer.addressLabel ||
              'Ver ubicación en Google Maps: Calle San Nicolás 5, 15001 A Coruña, España'
            }
          >
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              Calle San Nicolás 5
              <br />
              15001 A Coruña, España
            </span>
          </a>
        </address>
      </li>
    </ul>
  );
};

// Business Hours Component
const BusinessHours = () => {
  const { t } = useLanguage();
  const hours = [
    {
      day: t.footer.hours?.monday || 'Lunes',
      time: t.footer.hours?.closed || 'Cerrado'
    },
    {
      day: t.footer.hours?.laborales || 'Martes - Viernes',
      time: '9:00 - 20:00'
    },
    { day: t.footer.hours?.saturday || 'Sábado', time: '10:00 - 21:00' },
    { day: t.footer.hours?.sunday || 'Domingo', time: '10:00 - 18:00' }
  ];

  return (
    <div className="space-y-3 w-full md:max-w-[250px]">
      <ul className="space-y-2 w-full" role="list">
        {hours.map((schedule, index) => (
          <li
            key={index}
            className="flex justify-between text-sm text-secondary"
          >
            <span>{schedule.day}</span>
            <span className="font-medium">{schedule.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Social Media Component
const SocialMedia = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      href: 'https://www.instagram.com/ascremosas0',
      icon: Instagram,
      label: t.footer.instagramLabel || 'Visitar nuestro Instagram',
      name: 'Instagram'
    },
    {
      href: 'https://www.facebook.com/share/1DaNoMMdC6/?mibextid=wwXIfr',
      icon: Facebook,
      label: t.footer.facebookLabel || 'Visitar nuestro Facebook',
      name: 'Facebook'
    },
    {
      href: 'https://www.tiktok.com/@ascremosas0',
      icon: TikTokIcon,
      label: t.footer.tiktokLabel || 'Visitar nuestro TikTok',
      name: 'TikTok'
    }
  ];

  return (
    <div
      className="flex gap-4 justify-center"
      role="list"
      aria-label={t.footer.socialMedia || 'Redes sociales'}
    >
      {socialLinks.map(({ href, icon: Icon, label, name }) => (
        <a
          key={name}
          href={href}
          className="text-secondary hover:scale-110 
                     transition-all duration-200 focus-visible:outline-none 
                     focus-visible:ring-2 focus-visible:ring-primary 
                     focus-visible:ring-offset-2 rounded-sm p-1"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

const CollapsibleFooterSection = ({
  title,
  children,
  defaultOpen = false
}: CollapsibleFooterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section
      aria-labelledby={`footer-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="w-full"
    >
      {/* Mobile: Collapsible Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 lg:pt-0 lg:pointer-events-none"
        aria-expanded={isOpen}
        aria-controls={`footer-content-${title
          .toLowerCase()
          .replace(/\s+/g, '-')}`}
      >
        <h2
          id={`footer-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-secondary font-semibold text-base text-left lg:mb-1"
        >
          {title}
        </h2>
        <ChevronDown
          className={`h-5 w-5 text-secondary transition-transform duration-300 lg:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Content - Collapsible on Mobile, Always Visible on Desktop */}
      <div
        id={`footer-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={`overflow-hidden lg:overflow-visible transition-all duration-300 lg:block ${
          isOpen ? 'max-h-[500px] pb-4' : 'max-h-0 lg:max-h-none'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li className="text-left">
    <Link
      to={to}
      className="text-sm text-secondary 
                 hover:scale-105 hover:font-semibold 
                 transition-all duration-200 inline-block 
                 focus-visible:outline-none focus-visible:ring-2 
                 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
    >
      {children}
    </Link>
  </li>
);

// Main Footer Component
export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border shadow-sm mt-20 bg-foreground"
      role="contentinfo"
      aria-label={t.footer.mainLabel || 'Pie de página'}
    >
      <div className="container mx-auto pt-10 pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-0 lg:gap-12">
          {/* Logo, Tagline & Social Media - Always Visible */}
          <div className="flex flex-col items-start space-y-4 lg:min-w-[250px] mb-6 lg:mb-0">
            <Link
              to="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              aria-label={t.footer.homeLabel || 'Ir a la página principal'}
            >
              <img
                src={
                  logo ||
                  'https://res.cloudinary.com/ddz81wl4h/image/upload/v1765558484/logo-light_wpy1ol.png'
                }
                alt="AS Cremosas - Logo"
                className="h-12 sm:h-14 w-auto hover:scale-105 transition-all duration-200"
              />
            </Link>
            <p className="text-secondary text-sm italic leading-relaxed text-left max-w-[250px]">
              Crafted like jewels, savored like dreams
            </p>
            <SocialMedia />
          </div>

          {/* Contact, Hours & Legal - Collapsible on Mobile */}
          <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-0 lg:gap-12 flex-1 lg:justify-end">
            {/* Business Hours */}
            <div className="flex flex-col items-start flex-1 lg:max-w-[300px]">
              <CollapsibleFooterSection
                title={t.footer.hours?.title || 'Horario'}
              >
                <BusinessHours />
              </CollapsibleFooterSection>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col flex-1 lg:max-w-[250px]">
              <CollapsibleFooterSection title={t.footer.contact || 'Contacto'}>
                <ContactInfo />
              </CollapsibleFooterSection>
            </div>

            {/* Legal */}
            <div className="flex flex-col flex-1 lg:max-w-[200px]">
              <CollapsibleFooterSection title={t.footer.legal || 'Legal'}>
                <nav aria-label={t.footer.legalNav || 'Navegación legal'}>
                  <ul className="space-y-2" role="list">
                    <FooterLink to="/privacy">
                      {t.footer.privacy || 'Política de Privacidad'}
                    </FooterLink>
                    <FooterLink to="/cookies">
                      {t.footer.cookies || 'Política de Cookies'}
                    </FooterLink>
                    <FooterLink to="/legal">
                      {t.footer.legalPage || 'Aviso Legal'}
                    </FooterLink>
                    <FooterLink to="/terms">
                      {t.footer.terms || 'Términos y Condiciones'}
                    </FooterLink>
                  </ul>
                </nav>
              </CollapsibleFooterSection>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full Width Divider */}
      <div className="border-t border-border/30 w-full">
        <div className="container mx-auto px-4 py-4">
          <p className="text-secondary text-xs sm:text-sm text-center">
            <span aria-label={`Copyright ${currentYear} AS Cremosas`}>
              &copy; {currentYear} AS Cremosas.
            </span>{' '}
            {t.footer.rights || 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
