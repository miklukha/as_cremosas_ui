import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, logPageView } from '@/lib/analytics';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      const preferences = JSON.parse(consent);
      if (preferences.analytics) {
        initGA();
      }
    }
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      const preferences = JSON.parse(consent);
      if (preferences.analytics) {
        logPageView();
      }
    }
  }, [location]);

  return null;
}
