import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import ContrastModeToggle from './ContrastModeToggle';
import RtlModeToggle from './RtlModeToggle';
import CompactLayoutToggle from './CompactLayoutToggle';
import PresetThemes from './PresetThemes';
import FontSelection from './FontSelection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTimes, faExpand, faSync } from '@fortawesome/free-solid-svg-icons';

const fonts = [
    { name: 'Roboto', sample: 'A', class: 'font-roboto' },
    { name: 'Open Sans', sample: 'A', class: 'font-open-sans' },
    { name: 'Lato', sample: 'A', class: 'font-lato' },
    { name: 'Poppins', sample: 'A', class: 'font-poppins' },
    { name: 'Montserrat', sample: 'A', class: 'font-montserrat' },
    { name: 'Raleway', sample: 'A', class: 'font-raleway' },
    { name: 'Nunito', sample: 'A', class: 'font-nunito' },
    { name: 'Playfair Display', sample: 'A', class: 'font-playfair-display' },
    { name: 'Merriweather', sample: 'A', class: 'font-merriweather' },
    { name: 'Oswald', sample: 'A', class: 'font-oswald' },
    { name: 'Source Sans Pro', sample: 'A', class: 'font-source-sans-pro' },
    { name: 'Rubik', sample: 'A', class: 'font-rubik' },
    { name: 'DM Sans', sample: 'A', class: 'font-dm-sans' },
    { name: 'Public Sans', sample: 'A', class: 'font-public-sans' },
  ];
  

const Setting = ({ sidebarOpen, toggleSidebar, darkMode, toggleDarkMode, handleFullScreen, handleRefresh }) => {
    const [contrastMode, setContrastMode] = useState(false);
    const [rtlMode, setRtlMode] = useState(false);
    const [compactLayout, setCompactLayout] = useState(false);
    const [selectedFont, setSelectedFont] = useState('Public Sans');
  
    useEffect(() => {
      document.body.classList.toggle('no-scroll', sidebarOpen);
    }, [sidebarOpen]);
  
    const toggleContrastMode = () => {
      setContrastMode(!contrastMode);
      document.documentElement.classList.toggle('contrast');
    };
  
    const toggleRtlMode = () => {
      setRtlMode(!rtlMode);
      document.documentElement.setAttribute('dir', rtlMode ? 'ltr' : 'rtl');
    };
  
    const toggleCompactLayout = () => {
      setCompactLayout(!compactLayout);
      document.documentElement.classList.toggle('compact');
    };
  
    // Fungsi untuk mengubah font
    const handleFontChange = (fontClass) => {
      // Hapus semua class font yang mungkin sudah ada
      fonts.forEach((font) => {
        document.body.classList.remove(font.class);
      });
  
      // Tambahkan class baru berdasarkan font yang dipilih
      document.body.classList.add(fontClass);
  
      // Perbarui font yang dipilih di state
      setSelectedFont(fontClass);
    };
  
    return (
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Settings</h2>
          <div className="flex space-x-4">
            <FontAwesomeIcon
              icon={faExpand}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 cursor-pointer"
              onClick={handleFullScreen}
            />
            <FontAwesomeIcon
              icon={faSync}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 cursor-pointer"
              onClick={handleRefresh}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
  
        <div className="p-4 space-y-6 h-[calc(100vh-64px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-900 scrollbar-track-transparent">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ContrastModeToggle contrastMode={contrastMode} toggleContrastMode={toggleContrastMode} />
            <RtlModeToggle rtlMode={rtlMode} toggleRtlMode={toggleRtlMode} />
            <CompactLayoutToggle compactLayout={compactLayout} toggleCompactLayout={toggleCompactLayout} />
          </div>
          <PresetThemes />
          {/* Pastikan handleFontChange dikirim sebagai prop */}
          <FontSelection fonts={fonts} selectedFont={selectedFont} handleFontChange={handleFontChange} />
        </div>
      </div>
    );
  };
  
  export default Setting;