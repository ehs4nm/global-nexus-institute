import React, { useState, useEffect } from 'react';
import FormInput from '../ui/FormInput';
import { useMenu } from '../../../hooks/useMenu';

const MenuEditor = () => {
  const { menuItems, setMenuItems } = useMenu();
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({
    label: '',
    type: 'hash',
    href: '',
    image: '',
    showInDesktop: true
  });

  const LINK_TYPES = [
    { value: 'hash', label: 'Page Section (hash)', example: '#mission' },
    { value: 'route', label: 'Internal Page', example: '/about' },
    { value: 'external', label: 'External Link', example: 'https://example.com' }
  ];

  const handleAddItem = () => {
    if (!newItem.label.trim() || !newItem.href.trim()) {
      alert('Please fill in both label and link fields');
      return;
    }

    const item = {
      id: Date.now().toString(),
      ...newItem,
      label: newItem.label.trim(),
      href: newItem.href.trim()
    };

    const updatedItems = [...menuItems, item];
    setMenuItems(updatedItems);
    localStorage.setItem('gni_menu_items', JSON.stringify(updatedItems));
    
    // Reset form
    setNewItem({
      label: '',
      type: 'hash',
      href: '',
      image: '',
      showInDesktop: true
    });
  };

  const handleDeleteItem = (id) => {
    if (!window.confirm('Are you sure you want to delete this menu item?')) return;
    
    const updatedItems = menuItems.filter(item => item.id !== id);
    setMenuItems(updatedItems);
    localStorage.setItem('gni_menu_items', JSON.stringify(updatedItems));
    setEditingItem(null);
  };

  const handleEditItem = (item) => {
    setEditingItem({ ...item });
  };

  const handleUpdateItem = () => {
    if (!editingItem.label.trim() || !editingItem.href.trim()) {
      alert('Please fill in both label and link fields');
      return;
    }

    const updatedItems = menuItems.map(item => 
      item.id === editingItem.id 
        ? { ...editingItem, label: editingItem.label.trim(), href: editingItem.href.trim() }
        : item
    );
    setMenuItems(updatedItems);
    localStorage.setItem('gni_menu_items', JSON.stringify(updatedItems));
    setEditingItem(null);
  };

  const handleReorderItem = (index, direction) => {
    const newItems = [...menuItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setMenuItems(newItems);
    localStorage.setItem('gni_menu_items', JSON.stringify(newItems));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Menu Management</h2>
        <p className="text-sm text-gray-600">
          Manage navigation menu items that appear in the fullscreen mobile menu and desktop header.
          Each item can have a background image that shows when hovered in the fullscreen menu.
        </p>
      </div>

      {/* Add New Item Form */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Menu Item</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Label"
            value={newItem.label}
            onChange={(e) => setNewItem(prev => ({ ...prev, label: e.target.value }))}
            placeholder="e.g., Mission, About Us"
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link Type
            </label>
            <select
              value={newItem.type}
              onChange={(e) => setNewItem(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {LINK_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <FormInput
            label="Link/URL"
            value={newItem.href}
            onChange={(e) => setNewItem(prev => ({ ...prev, href: e.target.value }))}
            placeholder={LINK_TYPES.find(t => t.value === newItem.type)?.example || ''}
          />

          <FormInput
            label="Background Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem(prev => ({ ...prev, image: e.target.value }))}
            placeholder="/assets/images/menu-bg.jpg"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showInDesktop"
              checked={newItem.showInDesktop}
              onChange={(e) => setNewItem(prev => ({ ...prev, showInDesktop: e.target.checked }))}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="showInDesktop" className="ml-2 text-sm text-gray-700">
              Show in desktop header navigation
            </label>
          </div>
        </div>

        <button
          onClick={handleAddItem}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Add Menu Item
        </button>
      </div>

      {/* Existing Items List */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Menu Items ({menuItems.length})</h3>
        
        {menuItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No menu items yet. Add your first menu item above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
                {editingItem && editingItem.id === item.id ? (
                  /* Edit Mode */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormInput
                        label="Label"
                        value={editingItem.label}
                        onChange={(e) => setEditingItem(prev => ({ ...prev, label: e.target.value }))}
                      />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Link Type
                        </label>
                        <select
                          value={editingItem.type}
                          onChange={(e) => setEditingItem(prev => ({ ...prev, type: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          {LINK_TYPES.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>

                      <FormInput
                        label="Link/URL"
                        value={editingItem.href}
                        onChange={(e) => setEditingItem(prev => ({ ...prev, href: e.target.value }))}
                      />

                      <FormInput
                        label="Background Image URL"
                        value={editingItem.image}
                        onChange={(e) => setEditingItem(prev => ({ ...prev, image: e.target.value }))}
                      />

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`edit-desktop-${item.id}`}
                          checked={editingItem.showInDesktop}
                          onChange={(e) => setEditingItem(prev => ({ ...prev, showInDesktop: e.target.checked }))}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`edit-desktop-${item.id}`} className="ml-2 text-sm text-gray-700">
                          Show in desktop header navigation
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdateItem}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        ✓ Save
                      </button>
                      <button
                        onClick={() => setEditingItem(null)}
                        className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View Mode */
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h4 className="font-semibold text-gray-900">{item.label}</h4>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {LINK_TYPES.find(t => t.value === item.type)?.label || item.type}
                        </span>
                        {item.showInDesktop && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">
                            Desktop
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">→ {item.href}</p>
                      {item.image && (
                        <p className="text-xs text-gray-500 mt-1">🖼️ {item.image}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleReorderItem(index, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        title="Move up"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => handleReorderItem(index, 'down')}
                        disabled={index === menuItems.length - 1}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        title="Move down"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => handleEditItem(item)}
                        className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Section */}
      {menuItems.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Desktop Header Items</h4>
              <div className="bg-white p-3 rounded border">
                {menuItems.filter(item => item.showInDesktop).map(item => (
                  <span key={item.id} className="inline-block px-2 py-1 mr-2 mb-2 bg-gray-100 rounded text-sm">
                    {item.label}
                  </span>
                ))}
                {menuItems.filter(item => item.showInDesktop).length === 0 && (
                  <span className="text-gray-500 text-sm">No items set for desktop</span>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Mobile Menu Items</h4>
              <div className="bg-black text-white p-3 rounded">
                {menuItems.map(item => (
                  <div key={item.id} className="mb-2 text-sm">
                    {item.label} {item.image && '🖼️'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuEditor;