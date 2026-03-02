import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LANGUAGES = ['ru', 'en', 'el'];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('ecomassage_lang');
    return saved && LANGUAGES.includes(saved) ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('ecomassage_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (translations) => {
    if (typeof translations === 'string') return translations;
    return translations[lang] || translations.ru || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
