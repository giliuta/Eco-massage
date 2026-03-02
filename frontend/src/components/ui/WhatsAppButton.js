import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/35795705596?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%20%D0%AD%D0%9A%D0%97%D0%9E%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B5.';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse" />
      <MessageCircle className="w-7 h-7 text-white relative z-10 fill-white" />
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[#0A0E1A] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp
      </div>
    </a>
  );
}
