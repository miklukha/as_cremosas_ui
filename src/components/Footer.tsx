import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo.png';
import { TikTokIcon } from '@/components/ui/tiktok-icon';

// Contact Info Component
const ContactInfo = () => (
  <ul className="space-y-3">
    <li>
      <a
        href="tel:+34123456789"
        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
      >
        <Phone className="h-4 w-4" />
        <span>+34 123 456 789</span>
      </a>
    </li>

    <li>
      <a
        href="mailto:info@ascremosas.com"
        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
      >
        <Mail className="h-4 w-4" />
        <span>info@ascremosas.com</span>
      </a>
    </li>

    <li>
      <div className="flex items-start gap-3 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
        <span>
          Calle Example 123
          <br />
          41001 Sevilla, España
        </span>
      </div>
    </li>
  </ul>
);

// Social Media Component
const SocialMedia = () => (
  <div className="flex space-x-4">
    <a
      href="#"
      className="text-muted-foreground hover:text-accent transition-colors"
      aria-label="Instagram"
    >
      <Instagram className="h-5 w-5" />
    </a>
    <a
      href="#"
      className="text-muted-foreground hover:text-accent transition-colors"
      aria-label="TikTok"
    >
      <TikTokIcon className="h-5 w-5" />
    </a>
  </div>
);

// Footer Section Component
interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h4 className="font-semibold mb-4 text-foreground">{title}</h4>
    {children}
  </div>
);

// Footer Link Component
interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link
      to={to}
      className="text-sm text-muted-foreground hover:text-accent transition-colors"
    >
      {children}
    </Link>
  </li>
);

// Main Footer Component
export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/40 mt-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Social Media */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="AS Cremosas"
              className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <SocialMedia />
          </div>

          {/* Contact Info */}
          <FooterSection title={t.footer.contact || 'Contactos'}>
            <ContactInfo />
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title={t.footer.about}>
            <ul className="space-y-3">
              <FooterLink to="/shop">{t.nav.shop}</FooterLink>
              <FooterLink to="/contact">{t.nav.contact}</FooterLink>
              <FooterLink to="/faq">{t.nav.faq}</FooterLink>
              <FooterLink to="/b2b">{t.nav.b2b}</FooterLink>
            </ul>
          </FooterSection>

          {/* Legal */}
          <FooterSection title={t.footer.legal}>
            <ul className="space-y-3">
              <FooterLink to="/privacy">{t.footer.privacy}</FooterLink>
              <FooterLink to="/cookies">{t.footer.cookies}</FooterLink>
              <FooterLink to="/legal">{t.footer.legal}</FooterLink>
              <FooterLink to="/terms">{t.footer.terms}</FooterLink>
            </ul>
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 mt-12 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AS Cremosas. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
