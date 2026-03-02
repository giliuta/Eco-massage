import { useLanguage } from '@/contexts/LanguageContext';
import { nav, footer as footerT, location } from '@/data/translations';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Phone, MessageCircle, Instagram, MapPin, ExternalLink } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/35795705596';
const INSTAGRAM_URL = 'https://www.instagram.com/ecomassage_cyprus/';

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contacts', href: '#contacts' },
];

export default function Footer() {
  const { lang, setLang, t, LANGUAGES } = useLanguage();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const langLabels = { ru: 'RU', en: 'EN', el: 'EL' };

  return (
    <footer data-testid="footer" className="bg-[#0A0E1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#00D4FF] font-black text-2xl tracking-wider font-montserrat">ECO</span>
              <span className="text-white font-black text-2xl tracking-wider font-montserrat">MASSAGE</span>
            </div>
            <p className="text-white/40 text-sm">{footerT.tagline}</p>
          </div>
          <div className="flex items-center gap-1">
            {LANGUAGES.map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  data-testid={`footer-lang-${l}`}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold px-2 py-1 rounded transition-all ${lang === l ? 'text-[#00D4FF] bg-[#00D4FF]/10' : 'text-white/40 hover:text-white/70'}`}
                >
                  {langLabels[l]}
                </button>
                {i < LANGUAGES.length - 1 && <span className="text-white/20 text-xs mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t(footerT.quickLinks)}</h4>
            <div className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  data-testid={`footer-link-${item.key}`}
                  onClick={() => scrollTo(item.href)}
                  className="block text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                >
                  {t(nav[item.key])}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t(footerT.contactsTitle)}</h4>
            <div className="space-y-3">
              <a href="tel:+35795705596" className="flex items-center gap-2 text-white/50 text-sm hover:text-[#00D4FF] transition-colors">
                <Phone className="w-4 h-4" /> {location.phone}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-sm hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-sm hover:text-[#E1306C] transition-colors">
                <Instagram className="w-4 h-4" /> {location.instagram}
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {location.address}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t(footerT.hoursTitle)}</h4>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t(location.hours.weekdays)}</span>
                <span className="text-white/70">{location.hours.weekdaysTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">{t(location.hours.sunday)}</span>
                <span className="text-red-400">{t(location.hours.sundayStatus)}</span>
              </div>
            </div>
            <StatusBadge compact />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div>
            <p className="text-white/30 text-xs">{footerT.copyright}</p>
            <p className="text-white/20 text-xs mt-1">{t(footerT.patent)}</p>
          </div>
          <button
            data-testid="privacy-policy-link"
            onClick={() => {
              const el = document.querySelector('#privacy-modal');
              if (el) el.showModal();
            }}
            className="text-white/30 text-xs hover:text-white/50 transition-colors underline"
          >
            {t(footerT.privacyPolicy)}
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <dialog id="privacy-modal" className="bg-[#111625] text-white rounded-2xl p-8 max-w-2xl w-full backdrop:bg-black/70">
        <h2 className="font-montserrat font-bold text-xl mb-4">{t(footerT.privacyPolicy)}</h2>
        <div className="text-white/70 text-sm space-y-3 max-h-[60vh] overflow-y-auto">
          <p>ECOMASSAGE WELLNESS CYPRUS respects your privacy. This policy describes how we collect, use, and protect your personal information.</p>
          <p><strong>Information We Collect:</strong> When you submit a form on our website, we collect your name, phone number, preferred contact method, and any health concerns you choose to share.</p>
          <p><strong>How We Use Your Information:</strong> We use your information solely to contact you regarding your appointment request and to provide our services.</p>
          <p><strong>Data Protection:</strong> Your personal data is stored securely and is not shared with third parties except as required by law.</p>
          <p><strong>Cookies:</strong> We use essential cookies to improve your browsing experience. You can manage cookie preferences through your browser settings.</p>
          <p><strong>Your Rights:</strong> You have the right to access, correct, or delete your personal data. Contact us at +357 95 705596 for any data-related requests.</p>
          <p><strong>Contact:</strong> ECOMASSAGE WELLNESS CYPRUS, Georgiou Avenue 56, Hallmark Complex, Shop 5, Limassol 4047, Cyprus.</p>
        </div>
        <button
          onClick={() => document.querySelector('#privacy-modal').close()}
          className="mt-6 px-6 py-2 bg-[#0055FF] text-white text-sm font-bold rounded-full hover:bg-[#003CC7] transition-colors"
        >
          Close
        </button>
      </dialog>
    </footer>
  );
}
