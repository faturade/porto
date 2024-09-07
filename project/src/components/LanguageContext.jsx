import React, { createContext, useContext, useState } from 'react';
import en from '../json/en.json';
import id from '../json/id.json';
import jpg from '../json/jpg.json'; // Pastikan path benar
import spy from '../json/spy.json'; // Pastikan path benar
import pcs from '../json/pcs.json'; // Pastikan path benar
import kra from '../json/kra.json'; // Pastikan path benar
import jrn from '../json/jrn.json'; // Pastikan path benar

const LanguageContext = createContext();

const translations = { en, id, jpg, spy, pcs, jrn, kra };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [data, setData] = useState(translations[language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setData(translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ data, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
