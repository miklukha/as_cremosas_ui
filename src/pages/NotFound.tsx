import { useLanguage } from '@/context/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-3xl ">
          {t.notFound.pageNotFound || '¡Oops! Página no encontrada'}
        </p>
        <a
          href="/"
          className="text-xl hover:font-semibold hover:scale-105 
                     transition-all duration-200 focus-visible:outline-none 
                     focus-visible:ring-2 focus-visible:ring-primary 
                     focus-visible:ring-offset-2 rounded-sm underline"
          aria-label={t.notFound.returnLabel || 'Volver al inicio'}
        >
          {t.notFound.returnLabel}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
