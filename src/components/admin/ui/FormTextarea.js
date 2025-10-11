import React from 'react';

const FormTextarea = ({ 
  label, 
  value, 
  onChange, 
  rows = 3, 
  placeholder = '',
  className = '' 
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default FormTextarea;
