import React from 'react';
import { deepClone } from '../../../utils/admin/helpers';

const LeadershipEditor = ({ content, updateContent }) => {
  const addLeader = () => {
    const newLeader = {
      name: 'New Leader',
      img: 'assets/leaders/placeholder.jpg',
      title: 'Position',
      bio: 'Bio description...',
    };
    const newLeadership = [...content, newLeader];
    updateContent('leadership', newLeadership);
  };

  const removeLeader = (index) => {
    if (typeof window !== 'undefined' && window.confirm('Remove this leader?')) {
      const newLeadership = content.filter((_, i) => i !== index);
      updateContent('leadership', newLeadership);
    }
  };

  const updateLeader = (index, field, value) => {
    const newLeadership = deepClone(content);
    newLeadership[index][field] = value;
    updateContent('leadership', newLeadership);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Leadership Team</h2>
        <button
          onClick={addLeader}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Add Leader
        </button>
      </div>

      <div className="space-y-4">
        {content.map((leader, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-gray-700">Leader {index + 1}</h3>
              <button
                onClick={() => removeLeader(index)}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  value={leader.name}
                  onChange={(e) => updateLeader(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  value={leader.title}
                  onChange={(e) => updateLeader(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Image Path</label>
              <input
                type="text"
                value={leader.img}
                onChange={(e) => updateLeader(index, 'img', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                placeholder="assets/leaders/name.jpg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Bio</label>
              <textarea
                value={leader.bio}
                onChange={(e) => updateLeader(index, 'bio', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipEditor;
