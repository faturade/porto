import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import Setting from './Setting';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    if (menuOpen) {
      setMenuOpen(false); // Menutup menu jika terbuka
    }
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMenu = () => {
    if (sidebarOpen) {
      setSidebarOpen(false); // Menutup sidebar jika terbuka
    }
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
      <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">My Portfolio</a>

          <div className="hidden space-x-6 items-center md:flex">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>

            {/* Ikon Settings */}
            <FontAwesomeIcon
              icon={faCog}
              className={`text-gray-500 hover:text-blue-500 cursor-pointer transition-transform duration-500 ${sidebarOpen ? 'rotate' : ''}`}
              onClick={toggleSidebar}
              ref={sidebarRef}
            />
          </div>

          {/* Hamburger Menu dan Ikon Settings di Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu}
              ref={menuRef}
            />
            <FontAwesomeIcon
              icon={faCog}
              className={`text-gray-500 hover:text-blue-500 cursor-pointer transition-transform duration-500 ${sidebarOpen ? 'rotate' : ''}`}
              onClick={toggleSidebar}
              ref={sidebarRef}
            />
          </div>
        </div>

        {/* Dropdown Menu untuk Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4">
            <a href="#about" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Skills</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
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
