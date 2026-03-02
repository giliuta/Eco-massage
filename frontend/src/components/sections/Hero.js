import { useLanguage } from '@/contexts/LanguageContext';
import { hero } from '@/data/translations';
import { motion } from 'framer-motion';
import { Clock, Hand, Trophy, Globe, CheckCircle } from 'lucide-react';

const DIKIDI_URL = 'https://dikidi.net/profile/ecomassage_wellnes_center_1887352/';
const ICONS = { Clock, Hand, Trophy, Globe, CheckCircle };

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E1A]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1634141737038-a7d1aa9c932d?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/70 via-[#0A0E1A]/50 to-[#0A0E1A]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#0055FF]/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase">EXOwave&trade; Technology</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-montserrat font-black text-4xl sm:text-5xl lg:text-7xl text-white uppercase tracking-wider leading-tight mb-6"
        >
          {t(hero.title)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t(hero.subtitle)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={DIKIDI_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-book-btn"
            className="px-8 py-4 bg-[#D4A853] text-[#0A0E1A] font-black text-sm tracking-widest rounded-full hover:bg-[#C49A40] transition-all hover:shadow-[0_0_30px_rgba(212,168,83,0.4)] uppercase"
          >
            {t(hero.ctaBook)}
          </a>
          <button
            onClick={() => {
              const el = document.querySelector('#lead-form');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            data-testid="hero-free-btn"
            className="px-8 py-4 border-2 border-[#0055FF] text-[#00D4FF] font-bold text-sm tracking-widest rounded-full hover:bg-[#0055FF]/10 transition-all hover:shadow-[0_0_20px_rgba(0,85,255,0.3)] uppercase"
          >
            {t(hero.ctaFree)}
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
        >
          {hero.badges.map((badge, i) => {
            const Icon = ICONS[badge.icon];
            return (
              <div key={i} data-testid={`hero-badge-${i}`} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                <Icon className="w-4 h-4 text-[#00D4FF]" />
                <div className="text-left">
                  <span className="text-white font-bold text-sm block">{t(badge.value)}</span>
                  <span className="text-white/50 text-xs">{t(badge.label)}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
