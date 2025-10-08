import React from 'react';

const TABS = [
  { id: 'hero', label: 'Hero Section', icon: '🎬' },
  { id: 'mission', label: 'Mission', icon: '🎯' },
  { id: 'initiatives', label: 'Initiatives', icon: '🚀' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
  { id: 'leadership', label: 'Leadership', icon: '👥' },
  { id: 'metadata', label: 'Site Info', icon: '⚙️' },
];

const AdminSidebar = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 flex-shrink-0">
      <nav className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 space-y-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">💡 Tips</h3>
        <ul className="text-xs text-gray-600 space-y-2">
          <li>• Changes save to browser storage</li>
          <li>• Export to update content.json</li>
          <li>• Rebuild Gatsby to see changes</li>
          <li>• Admin not in production</li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
