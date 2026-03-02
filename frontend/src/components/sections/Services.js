import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';
import { Activity, Bone, Utensils, Stethoscope, Zap, Sparkles, Dna, Moon, Check } from 'lucide-react';

const ICONS = { Activity, Bone, Utensils, Stethoscope, Zap, Sparkles, Dna, Moon };

export default function Services() {
  const { t } = useLanguage();
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" data-testid="services-section" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A2E] uppercase tracking-wider mb-4">
            {t(servicesData.title)}
          </h2>
          <p className="text-[#1A1A2E]/60 text-base lg:text-lg max-w-3xl mx-auto">
            {t(servicesData.subtitle)}
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-10">
          {servicesData.tabs.map((tab, i) => {
            const Icon = ICONS[tab.icon];
            return (
              <button
                key={tab.id}
                data-testid={`service-tab-${tab.id}`}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                  activeTab === i
                    ? 'bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.3)]'
                    : 'bg-white text-[#1A1A2E]/70 hover:bg-[#0055FF]/10 border border-[#1A1A2E]/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t(tab.title)}
              </button>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-3 mb-8">
          {servicesData.tabs.map((tab, i) => {
            const Icon = ICONS[tab.icon];
            const isActive = activeTab === i;
            return (
              <div key={tab.id} className="rounded-xl overflow-hidden bg-white border border-[#1A1A2E]/10">
                <button
                  data-testid={`service-accordion-${tab.id}`}
                  onClick={() => setActiveTab(isActive ? -1 : i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive ? 'bg-[#0055FF] text-white' : 'text-[#1A1A2E]/80'}`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-bold">{t(tab.title)}</span>
                </button>
                {isActive && (
                  <div className="px-4 py-4">
                    <p className="text-[#1A1A2E]/70 text-sm leading-relaxed mb-4">{t(tab.description)}</p>
                    <div className="space-y-2">
                      {(tab.conditions[lang] || tab.conditions.ru).map((c, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0055FF] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#1A1A2E]/80">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Tab Content */}
        {activeTab >= 0 && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-[#0055FF]/5">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#1A1A2E]/80 text-base leading-relaxed mb-6">
                    {t(servicesData.tabs[activeTab].description)}
                  </p>
                </div>
                <div className="space-y-2.5">
                  {(servicesData.tabs[activeTab].conditions[lang] || servicesData.tabs[activeTab].conditions.ru).map((condition, j) => (
                    <div key={j} className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#0055FF]/5 transition-colors">
                      <Check className="w-4 h-4 text-[#0055FF] mt-1 shrink-0" />
                      <span className="text-[#1A1A2E]/80 text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
