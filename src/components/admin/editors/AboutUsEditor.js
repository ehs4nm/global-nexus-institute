import React from 'react';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

const AboutUsEditor = ({ content, updateContent }) => {
  const updateField = (field, value) => {
    updateContent(`aboutUs.${field}`, value);
  };

  const updatePrinciple = (index, field, value) => {
    updateContent(`aboutUs.principles.${index}.${field}`, value);
  };

  const updatePrinciplesTitle = (value) => {
    updateContent('aboutUs.principlesTitle', value);
  };

  const addPrinciple = () => {
    const currentPrinciples = content?.principles || [];
    const newId = Math.max(...currentPrinciples.map(p => p.id || 0), 0) + 1;
    const newNumber = String(newId).padStart(2, '0');
    
    const newPrinciple = {
      id: newId,
      number: newNumber,
      title: '',
      description: ''
    };
    
    updateContent('aboutUs.principles', [...currentPrinciples, newPrinciple]);
  };

  const removePrinciple = (index) => {
    const currentPrinciples = content?.principles || [];
    const updatedPrinciples = currentPrinciples.filter((_, i) => i !== index);
    updateContent('aboutUs.principles', updatedPrinciples);
  };

  const initializePrinciples = () => {
    const defaultPrinciples = [
      {
        id: 1,
        number: "01",
        title: "Integrated Analysis",
        description: "Connecting energy, geopolitics, and health into unified foresight."
      },
      {
        id: 2,
        number: "02",
        title: "Systems Thinking",
        description: "Understanding cascading effects across interconnected domains."
      },
      {
        id: 3,
        number: "03",
        title: "Actionable Intelligence",
        description: "Translating complex data into strategic guidance for decision-makers."
      },
      {
        id: 4,
        number: "04",
        title: "Global Impact",
        description: "Building resilient systems for an interconnected world."
      }
    ];
    
    updateContent('aboutUs.principles', defaultPrinciples);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us Section</h2>
        <p className="text-gray-600 mb-6">
          Manage the content for the About Us section, including header, descriptions, and principles.
        </p>
      </div>

      {/* Header Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Header Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Section Label"
            value={content?.sectionLabel || ''}
            onChange={(value) => updateField('sectionLabel', value)}
            placeholder="e.g., Who We Are"
          />
          <FormInput
            label="Main Title"
            value={content?.mainTitle || ''}
            onChange={(value) => updateField('mainTitle', value)}
            placeholder="e.g., About Us"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Content</h3>
        <div className="space-y-4">
          <FormTextarea
            label="Primary Description"
            value={content?.primaryDescription || ''}
            onChange={(value) => updateField('primaryDescription', value)}
            placeholder="Main opening statement"
            rows={3}
          />
          <FormTextarea
            label="Secondary Description"
            value={content?.secondaryDescription || ''}
            onChange={(value) => updateField('secondaryDescription', value)}
            placeholder="Detailed description"
            rows={4}
          />
          <FormTextarea
            label="Mission Statement"
            value={content?.missionStatement || ''}
            onChange={(value) => updateField('missionStatement', value)}
            placeholder="Mission statement or key message"
            rows={3}
          />
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Principles Section</h3>
        
        <div className="mb-6">
          <FormInput
            label="Principles Section Title"
            value={content?.principlesTitle || ''}
            onChange={updatePrinciplesTitle}
            placeholder="e.g., Our Principles"
          />
        </div>

        {/* Principles Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={addPrinciple}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Principle
          </button>
          
          {(!content?.principles || content.principles.length === 0) && (
            <button
              onClick={initializePrinciples}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Initialize Default Principles
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content?.principles && content.principles.length > 0 ? (
            content.principles.map((principle, index) => (
              <div 
                key={principle.id || index} 
                className="bg-white border border-gray-200 rounded-lg p-4 relative"
              >
                {/* Delete Button */}
                <button
                  onClick={() => removePrinciple(index)}
                  className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                  title="Remove principle"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h4 className="font-medium text-gray-900 mb-4 pr-8">
                  Principle {principle.number || index + 1}
                </h4>
                
                <div className="space-y-3">
                  <FormInput
                    label="Number"
                    value={principle.number || ''}
                    onChange={(value) => updatePrinciple(index, 'number', value)}
                    placeholder="e.g., 01"
                  />
                  
                  <FormInput
                    label="Title"
                    value={principle.title || ''}
                    onChange={(value) => updatePrinciple(index, 'title', value)}
                    placeholder="Principle title"
                  />
                  
                  <FormTextarea
                    label="Description"
                    value={principle.description || ''}
                    onChange={(value) => updatePrinciple(index, 'description', value)}
                    placeholder="Principle description"
                    rows={3}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500 py-8 border-2 border-dashed border-gray-300 rounded-lg">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg font-medium mb-2">No principles defined</p>
              <p className="text-sm">Click "Add Principle" to create a new principle or "Initialize Default Principles" to start with the sample data.</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bottom Section</h3>
        <FormInput
          label="Bottom Message"
          value={content?.bottomMessage || ''}
          onChange={(value) => updateField('bottomMessage', value)}
          placeholder="e.g., A connected world demands connected intelligence"
        />
      </div>

      {/* Images Section (Optional) */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Images (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Background Image URL"
            value={content?.images?.backgroundImage || ''}
            onChange={(value) => updateField('images.backgroundImage', value || null)}
            placeholder="https://example.com/image.jpg"
            type="url"
          />
          <FormInput
            label="Principles Section Image URL"
            value={content?.images?.principlesImage || ''}
            onChange={(value) => updateField('images.principlesImage', value || null)}
            placeholder="https://example.com/image.jpg"
            type="url"
          />
        </div>
      </div>

      {/* Usage Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-800">Usage Information</h4>
            <div className="mt-1 text-sm text-blue-700">
              <p>Changes to this section will be reflected in the AboutUsSection component. Make sure to save your changes and export the content when ready.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsEditor;