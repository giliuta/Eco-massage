import { useLanguage } from '@/contexts/LanguageContext';
import { whyChooseUs } from '@/data/translations';
import { motion } from 'framer-motion';
import { Microscope, Timer, HandMetal, HeartPulse, CircleCheckBig, Earth } from 'lucide-react';

const ICONS = { Microscope, Timer, HandMetal, HeartPulse, CircleCheckBig, Earth };

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" data-testid="why-choose-us-section" className="py-20 lg:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0055FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00D4FF]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider text-center mb-16"
        >
          {t(whyChooseUs.title)}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`benefit-card-${i}`}
                className="group p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0055FF]/40 transition-all hover:shadow-[0_0_30px_rgba(0,85,255,0.15)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(0,85,255,0.3)] transition-shadow">
                  <Icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white mb-3 tracking-wide">
                  {t(card.title)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(card.text)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
