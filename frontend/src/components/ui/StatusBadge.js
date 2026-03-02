import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { status as statusT } from '@/data/translations';

export function StatusBadge({ compact = false }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpen, setNextOpen] = useState('');

  useEffect(() => {
    const check = () => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Nicosia' }));
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = hours * 60 + minutes;
      const openTime = 9 * 60 + 30;
      const closeTime = 20 * 60;
      const open = day >= 1 && day <= 6 && time >= openTime && time < closeTime;
      setIsOpen(open);
      if (!open) {
        setNextOpen(t(statusT.opensAt));
      }
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, [t]);

  if (compact) {
    return (
      <div data-testid="status-badge-compact" className="flex items-center gap-1.5">
        <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
        <span className={`text-xs font-bold tracking-wide ${isOpen ? 'text-emerald-400' : 'text-red-400'}`}>
          {isOpen ? t(statusT.open) : t(statusT.closed)}
        </span>
      </div>
    );
  }

  return (
    <div data-testid="status-badge" className="flex items-center gap-2">
      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
        isOpen
          ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
          : 'bg-red-500/20 text-red-400'
      }`}>
        <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
        {isOpen ? t(statusT.open) : t(statusT.closed)}
      </div>
      {!isOpen && nextOpen && (
        <span className="text-xs text-slate-400">{nextOpen}</span>
      )}
    </div>
  );
}
