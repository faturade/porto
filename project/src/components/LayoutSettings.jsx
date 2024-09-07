import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';

const LayoutSettings = ({ isSidebarLayout, setIsSidebarLayout }) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="w-1/3 text-gray-700 dark:text-gray-300">Layout:</label>
      <div className="flex space-x-4">
        <button 
          onClick={() => setIsSidebarLayout(false)}
          className={`flex items-center px-4 py-2 rounded-lg border-2 ${!isSidebarLayout ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 bg-gray-200 text-gray-700'} hover:border-blue-600 hover:bg-blue-600`}
        >
          <FontAwesomeIcon icon={faBars} className="mr-2" />
          Navbar
        </button>
        <button 
          onClick={() => setIsSidebarLayout(true)}
          className={`flex items-center px-4 py-2 rounded-lg border-2 ${isSidebarLayout ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 bg-gray-200 text-gray-700'} hover:border-blue-600 hover:bg-blue-600`}
        >
          <FontAwesomeIcon icon={faThLarge} className="mr-2" />
          Sidebar
        </button>
      </div>
    </div>
  );
};

export default LayoutSettings;
