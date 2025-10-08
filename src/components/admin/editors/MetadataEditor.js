import React from 'react';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

const MetadataEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Site Metadata</h2>
    </div>

    <FormInput
      label="Site Title"
      value={content.title}
      onChange={(e) => updateContent('siteMetadata.title', e.target.value)}
    />

    <FormTextarea
      label="Site Description"
      value={content.description}
      onChange={(e) => updateContent('siteMetadata.description', e.target.value)}
      rows={3}
    />
  </div>
);

export default MetadataEditor;
