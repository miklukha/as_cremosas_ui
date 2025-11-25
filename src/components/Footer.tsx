import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border mt-20 ">
      <div className="container mx-auto pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="AS Cremosas" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md">
              {t.home.about.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@ascremosas.com"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.about}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.shop}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link
                  to="/b2b"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.b2b}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.footer.cookies}
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.footer.legal}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} AS Cremosas. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};
