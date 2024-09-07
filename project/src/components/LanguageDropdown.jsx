import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Flag from 'react-world-flags'; // Pastikan react-world-flags diimpor
import { useLanguage } from './LanguageContext'; // Pastikan path benar

const LanguageDropdown = () => {
  const { changeLanguage } = useLanguage();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faGlobe}
        className="text-gray-500 hover:text-blue-500 cursor-pointer"
        onClick={toggleLanguageMenu}
      />
      {/* Dropdown Bahasa */}
      {languageMenuOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
          <button
            onClick={() => handleLanguageChange('en')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="GB" className="w-5 h-5 mr-2" />
            English
          </button>
          <button
            onClick={() => handleLanguageChange('id')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="ID" className="w-5 h-5 mr-2" />
            Indonesia
          </button>
          <button
            onClick={() => handleLanguageChange('jpg')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="JP" className="w-5 h-5 mr-2" />
            Jepang
          </button>
          <button
            onClick={() => handleLanguageChange('spy')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="ES" className="w-5 h-5 mr-2" />
            Spanyol
          </button>
          <button
            onClick={() => handleLanguageChange('pcs')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="FR" className="w-5 h-5 mr-2" />
            Prancis
          </button>
          <button
            onClick={() => handleLanguageChange('jrn')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="DE" className="w-5 h-5 mr-2" />
            Jerman
          </button>
          <button
            onClick={() => handleLanguageChange('kra')}
            className="flex items-center w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag code="KR" className="w-5 h-5 mr-2" />
            Korea
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
