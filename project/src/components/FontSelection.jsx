import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FontSelection = ({ fonts, selectedFont, handleFontChange }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const filteredFonts = fonts.filter(font =>
    font.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-md mt-4 relative h-80">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300 font-bold text-xl">Font Selection</span>
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-500 dark:text-gray-400 ml-2 cursor-pointer"
          onClick={handleSearchToggle}
        />
      </div>

      {/* Input pencarian dengan animasi transisi */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showSearch ? 'max-h-20' : 'max-h-0'
        }`}
      >
        <input
          type="text"
          placeholder="Search fonts..."
          className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Container dengan scrollbar */}
      <div className="space-y-2 mt-2 h-[calc(100%-56px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
        {filteredFonts.length > 0 ? (
          filteredFonts.map((font) => (
            <div
              key={font.name}
              className={`p-2 rounded-lg cursor-pointer flex items-center ${selectedFont === font.class ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              onClick={() => handleFontChange(font.class)}
            >
              <span className={`text-xl ${font.class} mr-2`}>{font.sample}</span>
              <span className={`font-semibold ${selectedFont === font.class ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                {font.name}
              </span>
            </div>
          ))
        ) : (
          <div className="text-gray-500 dark:text-gray-400 text-center py-4">
            Not Found
          </div>
        )}
      </div>
    </div>
  );
};

export default FontSelection;
