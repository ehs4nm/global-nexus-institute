import React from 'react';

const AdminHeader = ({ onSave, onExport, onReset, isSaved }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">GNI Content Manager</h1>
            <p className="text-sm text-gray-500 mt-1">Edit your website content</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onReset}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={onExport}
              className="px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              📥 Export JSON
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              {isSaved ? '✓ Saved!' : '💾 Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
