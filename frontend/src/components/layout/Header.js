import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { nav } from '@/data/translations';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Phone, MessageCircle, Instagram, Menu, X } from 'lucide-react';

const DIKIDI_URL = 'https://dikidi.net/profile/ecomassage_wellnes_center_1887352/';
const WHATSAPP_URL = 'https://wa.me/35795705596';
const INSTAGRAM_URL = 'https://www.instagram.com/ecomassage_cyprus/';
const PHONE = '+35795705596';

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'pricing', href: '#pricing' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contacts', href: '#contacts' },
];

export default function Header() {
  const { lang, setLang, t, LANGUAGES } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const langLabels = { ru: 'RU', en: 'EN', el: 'EL' };

  return (
    <header data-testid="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0E1A]/95 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      {/* Top Contact Bar */}
      <div className="border-b border-white/5 bg-[#0A0E1A]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${PHONE}`} data-testid="header-phone-link" className="flex items-center gap-1.5 text-white/60 hover:text-[#00D4FF] transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+357 95 705596</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="header-whatsapp-link" className="flex items-center gap-1.5 text-white/60 hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="header-instagram-link" className="flex items-center gap-1.5 text-white/60 hover:text-[#E1306C] transition-colors">
              <Instagram className="w-3 h-3" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge compact />
            <div data-testid="language-switcher" className="flex items-center gap-0.5">
              {LANGUAGES.map((l, i) => (
                <span key={l} className="flex items-center">
                  <button
                    data-testid={`lang-switch-${l}`}
                    onClick={() => setLang(l)}
                    className={`text-xs font-bold px-1.5 py-0.5 rounded transition-all ${lang === l ? 'text-[#00D4FF]' : 'text-white/40 hover:text-white/70'}`}
                  >
                    {langLabels[l]}
                  </button>
                  {i < LANGUAGES.length - 1 && <span className="text-white/20 text-xs">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo('#hero')} data-testid="header-logo" className="flex items-center gap-2 group">
          <span className="text-[#00D4FF] font-black text-xl tracking-wider font-montserrat">ECO</span>
          <span className="text-white font-black text-xl tracking-wider font-montserrat">MASSAGE</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              data-testid={`nav-${item.key}`}
              onClick={() => scrollTo(item.href)}
              className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#00D4FF] hover:after:w-full after:transition-all"
            >
              {t(nav[item.key])}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DIKIDI_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-book-btn"
            className="hidden sm:inline-flex px-5 py-2 bg-[#D4A853] text-[#0A0E1A] text-xs font-black tracking-widest rounded-full hover:bg-[#C49A40] transition-all hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
          >
            {t(nav.bookNow)}
          </a>
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-[#0A0E1A]/98 backdrop-blur-xl border-t border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                data-testid={`mobile-nav-${item.key}`}
                onClick={() => scrollTo(item.href)}
                className="text-white/80 hover:text-[#00D4FF] text-sm font-bold tracking-widest uppercase text-left transition-colors py-2 border-b border-white/5"
              >
                {t(nav[item.key])}
              </button>
            ))}
            <a
              href={DIKIDI_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-book-btn"
              className="mt-2 inline-flex justify-center px-5 py-3 bg-[#D4A853] text-[#0A0E1A] text-sm font-black tracking-widest rounded-full hover:bg-[#C49A40] transition-all"
            >
              {t(nav.bookNow)}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
