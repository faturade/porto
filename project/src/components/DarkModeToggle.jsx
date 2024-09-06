import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 shadow-md bg-white dark:bg-gray-900'>
    <div className="flex items-center justify-between py-2">
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-gray-700 dark:text-gray-300 text-xl" />
      <div className="flex flex-col items-center ml-4">
        <button
          onClick={toggleDarkMode}
          className={`w-8 h-4 rounded-full flex items-center p-0.5 ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
          <div
            className={`w-3 h-3 rounded-full bg-white transform transition-transform duration-300 ${darkMode ? 'translate-x-4' : ''}`}
          />
        </button>
      </div>
    </div>
    <span className="text-gray-700 dark:text-gray-300 mt-8 text-xs">Dark Mode</span>
  </div>
);

export default DarkModeToggle;
