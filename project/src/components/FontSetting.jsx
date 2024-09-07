import React from 'react';

const FontSettings = ({ fontSize, fontWeight, fontStyle, textShadow, setFontSize, setFontWeight, setFontStyle, setTextShadow }) => {
  const handleFontSizeChange = (event) => setFontSize(event.target.value + 'px');
  const handleFontWeightChange = (weight) => setFontWeight(weight);
  const handleFontStyleChange = (style) => setFontStyle(style);
  const handleTextShadowChange = (event) => setTextShadow(event.target.value);

  return (
    <div className="p-4 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Font Settings</h3>
      
      {/* Font Size */}
      <div className="mb-4 flex items-center">
        <label className="w-1/3 text-gray-700 dark:text-gray-300">Font Size:</label>
        <div className="flex items-center space-x-0.5">
          <button 
            onClick={() => setFontSize(`${parseInt(fontSize.replace('px', '')) - 1}px`)}
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="text-sm font-semibold">-</span>
          </button>
          <input 
            type="number" 
            value={fontSize.replace('px', '')} 
            onChange={handleFontSizeChange} 
            className="w-16 text-center bg-transparent dark:text-white"
          />
          <button 
            onClick={() => setFontSize(`${parseInt(fontSize.replace('px', '')) + 1}px`)}
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="text-sm items-center font-semibold">+</span>
          </button>
          <span className="text-gray-500 dark:text-gray-400">px</span>
        </div>
      </div>
      
      {/* Font Weight */}
      <div className="mb-4 flex items-center">
        <label className="w-1/3 text-gray-700 dark:text-gray-300">Font Weight:</label>
        <div className="flex-1 flex space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={fontWeight === 'bold'}
              onChange={() => handleFontWeightChange(fontWeight === 'bold' ? 'normal' : 'bold')}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
            />
            <span className="text-gray-700 dark:text-gray-300">Bold</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={fontWeight === 'bolder'}
              onChange={() => handleFontWeightChange(fontWeight === 'bolder' ? 'normal' : 'bolder')}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
            />
            <span className="text-gray-700 dark:text-gray-300">Bolder</span>
          </label>
        </div>
      </div>
      
      {/* Font Style */}
      <div className="mb-4 flex items-center">
        <label className="w-1/3 text-gray-700 dark:text-gray-300">Font Style:</label>
        <div className="flex-1 flex space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={fontStyle === 'italic'}
              onChange={() => handleFontStyleChange(fontStyle === 'italic' ? 'normal' : 'italic')}
              className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
            />
            <span className="text-gray-700 dark:text-gray-900">Italic</span>
          </label>
        </div>
      </div>

      {/* Text Shadow */}
      <div className="mb-4 flex items-center">
        <label className="w-1/3 text-gray-700 dark:text-gray-300">Text Shadow:</label>
        <input 
          type="text" 
          value={textShadow} 
          onChange={handleTextShadowChange} 
          placeholder="e.g., 2px 2px 5px rgba(0,0,0,0.5)"
          className="flex-1 border border-gray-300 rounded-lg p-2 bg-white dark:bg-gray-900 dark:border-gray-600 text-gray-700 dark:text-gray-300"
        />
      </div>
    </div>
  );
};

export default FontSettings;
