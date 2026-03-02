import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pricing } from '@/data/translations';
import { motion } from 'framer-motion';
import { Gift, Star, Baby, CreditCard } from 'lucide-react';

const DIKIDI_URL = 'https://dikidi.net/profile/ecomassage_wellnes_center_1887352/';
const WHATSAPP_URL = 'https://wa.me/35795705596';

export default function Pricing() {
  const { t } = useLanguage();
  const [subDuration, setSubDuration] = useState('10');
  const sub = pricing.cards.subscription;

  return (
    <section id="pricing" data-testid="pricing-section" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A2E] uppercase tracking-wider text-center mb-16"
        >
          {t(pricing.title)}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            data-testid="pricing-trial"
            className="relative rounded-2xl border-2 border-[#0055FF]/30 bg-white p-6 flex flex-col"
          >
            <div className="absolute -top-3 left-4 px-3 py-0.5 bg-[#0055FF] text-white text-xs font-bold rounded-full flex items-center gap-1">
              <Gift className="w-3 h-3" /> {t(pricing.cards.trial.badge)}
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#1A1A2E] mb-2 mt-2">{t(pricing.cards.trial.name)}</h3>
            <div className="text-3xl font-montserrat font-black text-[#0055FF] mb-1">{t(pricing.cards.trial.price)}</div>
            <p className="text-[#1A1A2E]/50 text-xs mb-4">{t(pricing.cards.trial.duration)}</p>
            <p className="text-[#1A1A2E]/70 text-sm mb-6 flex-1">{t(pricing.cards.trial.desc)}</p>
            <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer" data-testid="pricing-trial-btn" className="w-full py-3 bg-[#0055FF] text-white text-sm font-bold rounded-full text-center hover:bg-[#003CC7] transition-colors">
              {t(pricing.cards.trial.cta)}
            </a>
          </motion.div>

          {/* Single */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            data-testid="pricing-single"
            className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-6 flex flex-col"
          >
            <h3 className="font-montserrat font-bold text-lg text-[#1A1A2E] mb-4">{t(pricing.cards.single.name)}</h3>
            {pricing.cards.single.options.map((opt, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-[#1A1A2E]/5 last:border-0">
                <span className="text-sm text-[#1A1A2E]/70">{t(opt.duration)}</span>
                <span className="text-xl font-montserrat font-black text-[#1A1A2E]">{opt.price}&euro;</span>
              </div>
            ))}
            <p className="text-[#1A1A2E]/70 text-sm my-4 flex-1">{t(pricing.cards.single.desc)}</p>
            <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer" data-testid="pricing-single-btn" className="w-full py-3 bg-[#D4A853] text-[#0A0E1A] text-sm font-bold rounded-full text-center hover:bg-[#C49A40] transition-colors">
              {t(pricing.cards.single.cta)}
            </a>
          </motion.div>

          {/* Subscription - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            data-testid="pricing-subscription"
            className="relative rounded-2xl border-2 border-[#D4A853] bg-white p-6 flex flex-col shadow-xl shadow-[#D4A853]/10"
          >
            <div className="absolute -top-3 left-4 px-3 py-0.5 bg-[#D4A853] text-[#0A0E1A] text-xs font-bold rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" /> {t(sub.popular)}
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#1A1A2E] mb-3 mt-2">{t(sub.name)}</h3>

            {/* Duration toggle */}
            <div className="flex mb-4 bg-[#F5F7FA] rounded-full p-1">
              <button
                data-testid="sub-toggle-10"
                onClick={() => setSubDuration('10')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${subDuration === '10' ? 'bg-[#0055FF] text-white' : 'text-[#1A1A2E]/60'}`}
              >
                {t(sub.durationLabel10)}
              </button>
              <button
                data-testid="sub-toggle-20"
                onClick={() => setSubDuration('20')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${subDuration === '20' ? 'bg-[#0055FF] text-white' : 'text-[#1A1A2E]/60'}`}
              >
                {t(sub.durationLabel20)}
              </button>
            </div>

            <div className="space-y-2 mb-4 flex-1">
              {(subDuration === '10' ? sub.options10min : sub.options20min).map((opt, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#1A1A2E]/5 last:border-0">
                  <span className="text-xs text-[#1A1A2E]/60">{opt.sessions} {t(sub.sessionsLabel)}</span>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#1A1A2E]">{opt.pricePerSession}&euro;</span>
                    <span className="text-[10px] text-[#1A1A2E]/40 ml-1">/{t(sub.perSession)}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#1A1A2E]/60 text-xs mb-4">{t(sub.desc)}</p>
            <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer" data-testid="pricing-sub-btn" className="w-full py-3 bg-[#D4A853] text-[#0A0E1A] text-sm font-bold rounded-full text-center hover:bg-[#C49A40] transition-colors hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]">
              {t(sub.cta)}
            </a>
          </motion.div>

          {/* Children */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            data-testid="pricing-children"
            className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 flex items-center justify-center mb-3">
              <Baby className="w-5 h-5 text-[#0055FF]" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#1A1A2E] mb-2">{t(pricing.cards.children.name)}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-montserrat font-black text-[#1A1A2E]">{pricing.cards.children.price}&euro;</span>
            </div>
            <p className="text-[#1A1A2E]/50 text-xs mb-4">{t(pricing.cards.children.duration)}</p>
            <p className="text-[#1A1A2E]/70 text-sm mb-6 flex-1">{t(pricing.cards.children.desc)}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="pricing-children-btn" className="w-full py-3 bg-white border-2 border-[#0055FF] text-[#0055FF] text-sm font-bold rounded-full text-center hover:bg-[#0055FF]/10 transition-colors">
              {t(pricing.cards.children.cta)}
            </a>
          </motion.div>
        </div>

        <p className="text-center text-[#1A1A2E]/50 text-sm">
          {t(pricing.note)}{' '}
          <a href="tel:+35795705596" className="text-[#0055FF] hover:underline">+357 95 705596</a>{' | '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
