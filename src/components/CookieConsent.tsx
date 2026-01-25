import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button, Checkbox, Label } from '@/components/ui';
import { X } from 'lucide-react';
import { translations } from '@/i18n/cookies-translations';

export default function CookieConsent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
      applyConsent(saved);
    }
  }, []);

  const applyConsent = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      import('@/lib/analytics').then(({ initGA, logPageView }) => {
        initGA();
        logPageView();
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    applyConsent(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    applyConsent(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-3 border-accent shadow-lg max-w-4xl mx-auto rounded-3xl">
      <div className="container mx-auto p-4 sm:p-4 max-w-4xl">
        {!showSettings ? (
          <div className="flex flex-col items-center justify-between gap-3">
            <div className="flex-1">
              {/* <p className="text-secondary text-center text-sm sm:text-base"> */}
              <p className="text-sm sm:text-base text-center">
                {t.message}{' '}
                <a
                  href="/cookies"
                  // className="text-secondary underline hover:text-secondary/80"
                  className="underline hover:text-secondary/80"
                  aria-label="ir a Política de Cookies"
                >
                  {t.moreInfo}
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleRejectAll}
                // className="text-secondary border-secondary"
              >
                {t.rejectAll}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowSettings(true)}
                // className="text-secondary border-secondary"
              >
                {t.customize}
              </Button>
              <Button
                size="lg"
                onClick={handleAcceptAll}
                // className="bg-background text-accent hover:bg-secondary hover:text-accent"
              >
                {t.acceptAll}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{t.customize}</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between p-3 border rounded">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="cookies-necessary"
                      checked={preferences.necessary}
                      disabled
                      className="cursor-not-allowed"
                    />
                    <Label
                      htmlFor="cookies-necessary"
                      className="font-medium text-base"
                    >
                      {t.necessary}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.necessaryDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between p-3 border rounded">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="cookies-analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked: boolean) =>
                        setPreferences({
                          ...preferences,
                          analytics: checked
                        })
                      }
                    />
                    <Label
                      htmlFor="cookies-analytics"
                      className="font-medium text-base"
                    >
                      {t.analytics}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.analyticsDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between p-3 border rounded">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="cookies-marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked: boolean) =>
                        setPreferences({
                          ...preferences,
                          marketing: checked
                        })
                      }
                    />
                    <Label
                      htmlFor="cookies-marketing"
                      className="font-medium text-base"
                    >
                      {t.marketing}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.marketingDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={handleRejectAll}>
                {t.rejectAll}
              </Button>
              <Button onClick={handleSavePreferences}>{t.save}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
