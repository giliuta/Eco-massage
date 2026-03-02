import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mobileCta } from '@/data/translations';

const DIKIDI_URL = 'https://dikidi.net/profile/ecomassage_wellnes_center_1887352/';

export function MobileCTA() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const formEl = document.querySelector('#lead-form');
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const isOverForm = rect.top < window.innerHeight && rect.bottom > 0;
        setShow(window.scrollY > 800 && !isOverForm);
      } else {
        setShow(window.scrollY > 800);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div data-testid="mobile-cta-bar" className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#0A0E1A]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between">
      <span className="text-white text-sm font-medium">{t(mobileCta.text)}</span>
      <a
        href={DIKIDI_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-cta-book-btn"
        className="px-5 py-2 bg-[#D4A853] text-[#0A0E1A] text-sm font-bold rounded-full hover:bg-[#C49A40] transition-colors whitespace-nowrap"
      >
        {t(mobileCta.cta)}
      </a>
    </div>
  );
}
