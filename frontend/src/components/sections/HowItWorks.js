import { useLanguage } from '@/contexts/LanguageContext';
import { howItWorks } from '@/data/translations';
import { motion } from 'framer-motion';
import { MapPin, Bed, Sparkles } from 'lucide-react';

const ICONS = { MapPin, Bed, Sparkles };

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-20 lg:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0055FF]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider text-center mb-20"
        >
          {t(howItWorks.title)}
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {howItWorks.steps.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                data-testid={`step-${i + 1}`}
                className="relative group"
              >
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-[#0055FF]/50 to-transparent z-0" />
                )}

                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0055FF]/30 transition-all hover:shadow-[0_0_30px_rgba(0,85,255,0.15)] group-hover:-translate-y-1">
                  {/* Step number */}
                  <div className="text-7xl font-montserrat font-black text-[#0055FF]/10 absolute top-4 right-6">
                    {step.num}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[#0055FF]/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,85,255,0.3)] transition-shadow">
                    <Icon className="w-7 h-7 text-[#00D4FF]" />
                  </div>

                  <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider mb-4">
                    {t(step.title)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t(step.text)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
