import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/data/translations';
import { motion } from 'framer-motion';
import { Play, Star, ChevronLeft, ChevronRight, Award, Instagram } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/ECOMASSAGE+WELLNESS+CYPRUS/@34.6967779,33.0900824,17z/';
const INSTAGRAM_URL = 'https://www.instagram.com/ecomassage_cyprus/';

export default function Testimonials() {
  const { t } = useLanguage();
  const scrollRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(-1);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-20 lg:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0055FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider mb-4">
            {t(testimonials.title)}
          </h2>
          <p className="text-white/50 text-base lg:text-lg">{t(testimonials.subtitle)}</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mb-12">
          <button
            onClick={() => scroll('left')}
            data-testid="testimonials-prev-btn"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden lg:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            data-testid="testimonials-next-btn"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-2 py-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`testimonial-video-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[340px] snap-center"
              >
                <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#0055FF]/30 transition-all">
                  <div className="relative aspect-[9/16] max-h-[400px] bg-[#111625]">
                    {playingIdx === i ? (
                      <video
                        src={video.url}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayingIdx(-1)}
                      />
                    ) : (
                      <button
                        onClick={() => setPlayingIdx(i)}
                        className="w-full h-full flex items-center justify-center group relative"
                      >
                        <video
                          src={video.url}
                          muted
                          preload="metadata"
                          className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/80 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#0055FF]/80 flex items-center justify-center shadow-[0_0_30px_rgba(0,85,255,0.5)] group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-white/80 text-sm font-medium">{t(video.title)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom badges */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" data-testid="google-rating-badge" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A853]/30 transition-all">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4A853] fill-[#D4A853]" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">{testimonials.googleRating}</span>
            <span className="text-white/50 text-xs">Google Maps</span>
          </a>

          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-testid="instagram-badge" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#E1306C]/30 transition-all">
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span className="text-white/70 text-sm">{t(testimonials.moreReviews)}</span>
          </a>

          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
            <Award className="w-4 h-4 text-[#D4A853]" />
            <span className="text-white/70 text-sm">{t(testimonials.awards)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
