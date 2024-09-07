import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Setting from './Setting';

const Sidebar = ({ sidebarOpen, toggleSidebar, darkMode, toggleDarkMode, handleFullScreen, handleRefresh }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-md`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">My Portfolio</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div className="px-4 py-2">
          <a href="#about" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
          <a href="#skills" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>

          {/* Settings Button */}
          <div className="mt-4 flex items-center">
            <FontAwesomeIcon
              icon={faCog}
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Dropdown Menu untuk Mobile */}
        {menuOpen && (
          <div className="bg-white dark:bg-gray-900 py-4 px-4">
            <a href="#about" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Skills</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
          </div>
        )}
      </div>

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

export default Sidebar;
