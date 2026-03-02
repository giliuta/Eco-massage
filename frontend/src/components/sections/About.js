import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { about } from '@/data/translations';
import { motion } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black text-white">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A2E] uppercase tracking-wider text-center mb-16">
            {t(about.title)}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {t(about.text).split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[#1A1A2E]/80 text-base lg:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611176260338-4ff8a110d452?w=800&q=80"
                alt="EXOwave Technology"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0055FF]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#0055FF] flex items-center justify-center shadow-[0_0_30px_rgba(0,85,255,0.4)]">
              <div className="text-center">
                <span className="text-white font-black text-2xl block">27+</span>
                <span className="text-white/70 text-[10px] uppercase tracking-wider">years</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {about.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`stat-counter-${i}`}
              className="text-center p-6 rounded-2xl bg-white shadow-lg border border-[#0055FF]/5 hover:shadow-xl hover:border-[#0055FF]/20 transition-all"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-[#1A1A2E]/60 text-sm mt-2 font-medium">{t(stat.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
