import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cookie } from '@/data/translations';
import { Shield } from 'lucide-react';

export function CookieConsent() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ecomassage_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('ecomassage_cookie_consent', accepted ? 'accepted' : 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div data-testid="cookie-consent" className="fixed bottom-20 lg:bottom-6 left-4 right-4 lg:left-6 lg:right-auto lg:max-w-md z-50 bg-[#111625] border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#00D4FF] mt-0.5 shrink-0" />
        <div>
          <p className="text-white/80 text-sm leading-relaxed mb-4">{t(cookie.text)}</p>
          <div className="flex gap-3">
            <button
              data-testid="cookie-accept-btn"
              onClick={() => handleConsent(true)}
              className="px-4 py-2 bg-[#0055FF] text-white text-xs font-bold rounded-full hover:bg-[#003CC7] transition-colors"
            >
              {t(cookie.accept)}
            </button>
            <button
              data-testid="cookie-decline-btn"
              onClick={() => handleConsent(false)}
              className="px-4 py-2 bg-white/10 text-white/70 text-xs font-medium rounded-full hover:bg-white/20 transition-colors"
            >
              {t(cookie.decline)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
