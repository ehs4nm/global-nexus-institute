import React from 'react';
import { deepClone, generateUniqueId } from '../../../utils/admin/helpers';

const GalleryEditor = ({ content, updateContent }) => {
  const addGalleryItem = () => {
    const newId = generateUniqueId();
    const newItem = {
      id: newId,
      label: 'New Gallery Item',
      img: 'assets/images/placeholder.jpg',
      slug: newId,
      pageContent: {
        title: 'New Gallery Item',
        subtitle: 'Add a subtitle',
        heroImage: 'assets/images/placeholder.jpg',
        sections: [
          { heading: 'Section 1', content: 'Add content here...' }
        ]
      }
    };
    const newItems = [...content.items, newItem];
    updateContent('gallery', { ...content, items: newItems });
  };

  const removeGalleryItem = (index) => {
    if (typeof window !== 'undefined' && window.confirm('Remove this gallery item?')) {
      const newItems = content.items.filter((_, i) => i !== index);
      updateContent('gallery', { ...content, items: newItems });
    }
  };

  const updateGalleryItem = (index, field, value) => {
    const newItems = deepClone(content.items);
    const keys = field.split('.');
    
    if (keys.length === 1) {
      newItems[index][field] = value;
    } else {
      let current = newItems[index];
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    }
    
    updateContent('gallery', { ...content, items: newItems });
  };

  const addSection = (itemIndex) => {
    const newItems = deepClone(content.items);
    newItems[itemIndex].pageContent.sections.push({
      heading: 'New Section',
      content: 'Add content...'
    });
    updateContent('gallery', { ...content, items: newItems });
  };

  const removeSection = (itemIndex, sectionIndex) => {
    const newItems = deepClone(content.items);
    newItems[itemIndex].pageContent.sections = newItems[itemIndex].pageContent.sections.filter(
      (_, i) => i !== sectionIndex
    );
    updateContent('gallery', { ...content, items: newItems });
  };

  const updateSection = (itemIndex, sectionIndex, field, value) => {
    const newItems = deepClone(content.items);
    newItems[itemIndex].pageContent.sections[sectionIndex][field] = value;
    updateContent('gallery', { ...content, items: newItems });
  };

  const updateGalleryHeader = (field, value) => {
    updateContent('gallery', { ...content, [field]: value });
  };

  return (
    <div className="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Gallery Section</h2>
      </div>

      <div className="space-y-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="font-semibold text-gray-800">Gallery Header</h3>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
          <input
            type="text"
            value={content.title}
            onChange={(e) => updateGalleryHeader('title', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Subtitle</label>
          <input
            type="text"
            value={content.subtitle}
            onChange={(e) => updateGalleryHeader('subtitle', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Gallery Items</h3>
        <button
          onClick={addGalleryItem}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Add Gallery Item
        </button>
      </div>

      <div className="space-y-6">
        {content.items.map((item, itemIndex) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 space-y-4 bg-gray-50">
            <div className="flex items-start justify-between">
              <h4 className="font-semibold text-gray-700">Item {itemIndex + 1}: {item.label}</h4>
              <button
                onClick={() => removeGalleryItem(itemIndex)}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateGalleryItem(itemIndex, 'label', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Slug (URL)</label>
                <input
                  type="text"
                  value={item.slug}
                  onChange={(e) => updateGalleryItem(itemIndex, 'slug', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  placeholder="energy-systems"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Gallery Image</label>
              <input
                type="text"
                value={item.img}
                onChange={(e) => updateGalleryItem(itemIndex, 'img', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="/assets/images/gallery-item.jpg"
              />
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <h5 className="font-semibold text-gray-700 mb-3">Page Content (for detail page)</h5>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Page Title</label>
                  <input
                    type="text"
                    value={item.pageContent.title}
                    onChange={(e) => updateGalleryItem(itemIndex, 'pageContent.title', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Page Subtitle</label>
                  <input
                    type="text"
                    value={item.pageContent.subtitle}
                    onChange={(e) => updateGalleryItem(itemIndex, 'pageContent.subtitle', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Hero Image</label>
                  <input
                    type="text"
                    value={item.pageContent.heroImage}
                    onChange={(e) => updateGalleryItem(itemIndex, 'pageContent.heroImage', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="/assets/images/hero.jpg"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-medium text-gray-600">Content Sections</label>
                  <button
                    onClick={() => addSection(itemIndex)}
                    className="text-xs px-2 py-1 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    + Add Section
                  </button>
                </div>
                <div className="space-y-3">
                  {item.pageContent.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-gray-300 rounded p-3 bg-white space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500">Section {sectionIndex + 1}</span>
                        <button
                          onClick={() => removeSection(itemIndex, sectionIndex)}
                          className="text-xs text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                      <input
                        type="text"
                        value={section.heading}
                        onChange={(e) => updateSection(itemIndex, sectionIndex, 'heading', e.target.value)}
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
                        placeholder="Section Heading"
                      />
                      <textarea
                        value={section.content}
                        onChange={(e) => updateSection(itemIndex, sectionIndex, 'content', e.target.value)}
                        rows={3}
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
                        placeholder="Section content..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryEditor;
