import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      data-testid="scroll-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-[#0055FF]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#0055FF] transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(0,85,255,0.5)]"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
