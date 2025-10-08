import React from 'react';
import FormInput from '../ui/FormInput';
import { deepClone } from '../../../utils/admin/helpers';

const InitiativesEditor = ({ content, updateContent }) => {
  const updateProject = (index, field, value) => {
    const newProjects = deepClone(content.projects);
    newProjects[index][field] = value;
    updateContent('initiatives.projects', newProjects);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Initiatives Section</h2>
      </div>

      <FormInput
        label="Title"
        value={content.title}
        onChange={(e) => updateContent('initiatives.title', e.target.value)}
      />

      <FormInput
        label="Subtitle"
        value={content.subtitle}
        onChange={(e) => updateContent('initiatives.subtitle', e.target.value)}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Projects</label>
        <div className="space-y-6">
          {content.projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50">
              <h3 className="font-semibold text-gray-700">Project {index + 1}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Icon (emoji)</label>
                  <input
                    type="text"
                    value={project.icon}
                    onChange={(e) => updateProject(index, 'icon', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Link Text</label>
                  <input
                    type="text"
                    value={project.linkText}
                    onChange={(e) => updateProject(index, 'linkText', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Link URL</label>
                  <input
                    type="text"
                    value={project.linkHref}
                    onChange={(e) => updateProject(index, 'linkHref', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesEditor;
