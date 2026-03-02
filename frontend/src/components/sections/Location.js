import { useLanguage } from '@/contexts/LanguageContext';
import { location } from '@/data/translations';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Instagram, Globe, Clock, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/ECOMASSAGE+WELLNESS+CYPRUS/@34.6967779,33.0900824,17z/';
const WHATSAPP_URL = 'https://wa.me/35795705596';
const INSTAGRAM_URL = 'https://www.instagram.com/ecomassage_cyprus/';
const DIKIDI_URL = 'https://dikidi.net/profile/ecomassage_wellnes_center_1887352/';

export default function Location() {
  const { t, lang } = useLanguage();

  const whatsappMsg = encodeURIComponent(t(location.whatsappMsg));

  return (
    <section id="contacts" data-testid="location-section" className="py-20 lg:py-32 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider text-center mb-16"
        >
          {t(location.title)}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00D4FF] mt-0.5 shrink-0" />
                <span className="text-white/80 text-sm">{location.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <a href="tel:+35795705596" data-testid="location-phone" className="text-white/80 text-sm hover:text-[#00D4FF] transition-colors">{location.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href={`${WHATSAPP_URL}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" data-testid="location-whatsapp" className="text-white/80 text-sm hover:text-[#25D366] transition-colors">WhatsApp: {location.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#E1306C] shrink-0" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="location-instagram" className="text-white/80 text-sm hover:text-[#E1306C] transition-colors">{location.instagram}</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer" data-testid="location-booking" className="text-white/80 text-sm hover:text-[#00D4FF] transition-colors">{t(location.booking)}</a>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-white font-bold text-sm">{t(location.hours.label)}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-white/70 text-sm">{t(location.hours.weekdays)}</span>
                  <span className="text-white font-medium text-sm">{location.hours.weekdaysTime}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-white/70 text-sm">{t(location.hours.sunday)}</span>
                  <span className="text-red-400 font-medium text-sm">{t(location.hours.sundayStatus)}</span>
                </div>
              </div>
              <div className="mt-4">
                <StatusBadge />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-maps-btn"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0055FF] text-white text-sm font-bold rounded-full hover:bg-[#003CC7] transition-all"
              >
                <MapPin className="w-4 h-4" /> {t(location.openMaps)}
              </a>
              <a
                href={`${WHATSAPP_URL}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#1fba59] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> {t(location.sendWhatsApp)}
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              title="ECOMASSAGE location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8!2d33.0900824!3d34.6967779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733e78cffffff%3A0x1234567890abcdef!2sECOMASSAGE%20WELLNESS%20CYPRUS!5e0!3m2!1sen!2scy!4v1700000000000!5m2!1sen!2scy"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
