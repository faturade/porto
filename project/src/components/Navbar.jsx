import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import Setting from './Setting';
import LanguageDropdown from './LanguageDropdown';
import { useLanguage } from '../components/LanguageContext'; // Import useLanguage

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useLanguage(); // Use the context to get the data

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">{data.navbarTitle}</a>

          <div className="hidden space-x-6 items-center md:flex">
            <a href="#about" className="hover:text-blue-500">{data.about}</a>
            <a href="#skills" className="hover:text-blue-500">{data.skills}</a>
            <a href="#projects" className="hover:text-blue-500">{data.projects}</a>
            <a href="#contact" className="hover:text-blue-500">{data.contact}</a>

            {/* Ikon Settings */}
            <FontAwesomeIcon
              icon={faCog}
              className={`text-gray-500 hover:text-blue-500 cursor-pointer transition-transform duration-500 ${sidebarOpen ? 'rotate' : ''}`}
              onClick={toggleSidebar}
            />

            {/* Dropdown Bahasa */}
            <LanguageDropdown />
          </div>

          {/* Hamburger Menu dan Ikon Settings di Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu}
            />
            <FontAwesomeIcon
              icon={faCog}
              className={`text-gray-500 hover:text-blue-500 cursor-pointer transition-transform duration-500 ${sidebarOpen ? 'rotate' : ''}`}
              onClick={toggleSidebar}
            />
          </div>
        </div>

        {/* Dropdown Menu untuk Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4">
            <a href="#about" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">{data.about}</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">{data.skills}</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">{data.projects}</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">{data.contact}</a>
          </div>
        )}
      </nav>

      {/* Menggunakan SettingSidebar */}
      <Setting
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleFullScreen={handleFullScreen}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default Navbar;
