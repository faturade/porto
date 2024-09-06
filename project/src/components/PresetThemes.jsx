import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const PresetThemes = ({ handleTextColorChange }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4 bg-white dark:bg-gray-900 shadow-md flex flex-col items-center">
    <span className="text-gray-700 dark:text-gray-300 font-semibold">Preset Themes</span>
    <div className="grid grid-cols-3 gap-12">
      <div
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-blue-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-blue-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
      <div
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-green-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-green-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
      <div
        className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-red-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-red-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
      <div
        className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-yellow-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-yellow-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
      <div
        className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-purple-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-purple-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
      <div
        className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-gray-400 hover:scale-110 cursor-pointer"
        onClick={() => handleTextColorChange('text-gray-500')}
      >
        <FontAwesomeIcon icon={faPalette} className="text-white" />
      </div>
    </div>
  </div>
);

export default PresetThemes;
