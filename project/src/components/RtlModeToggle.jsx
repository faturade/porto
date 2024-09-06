import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

const RtlModeToggle = ({ rtlMode, toggleRtlMode }) => (
  <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 shadow-md bg-white dark:bg-gray-900'>
    <div className="flex justify-between items-center py-2">
      <FontAwesomeIcon icon={faAlignLeft} className="text-gray-700 dark:text-gray-300 text-xl" />
      <div className="flex items-center flex-col ml-4">
        <button
          onClick={toggleRtlMode}
          className={`w-8 h-4 rounded-full flex items-center p-0.5 ${rtlMode ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
          <div
            className={`w-3 h-3 rounded-full bg-white transform transition-transform duration-300 ${rtlMode ? 'translate-x-4' : ''}`}
          />
        </button>
      </div>
    </div>
    <span className="text-gray-700 dark:text-gray-300 mt-8 text-xs">RTL Mode</span>
  </div>
);

export default RtlModeToggle;
