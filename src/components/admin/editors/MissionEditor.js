import React from 'react';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';
import { deepClone } from '../../../utils/admin/helpers';

const MissionEditor = ({ content, updateContent }) => {
  const updateParagraph = (index, value) => {
    const newParagraphs = deepClone(content.paragraphs);
    newParagraphs[index] = value;
    updateContent('mission.paragraphs', newParagraphs);
  };

  const updateCard = (index, field, value) => {
    const newCards = deepClone(content.cards);
    newCards[index][field] = value;
    updateContent('mission.cards', newCards);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Mission Section</h2>
      </div>

      <FormInput
        label="Title"
        value={content.title}
        onChange={(e) => updateContent('mission.title', e.target.value)}
      />

      <FormTextarea
        label="First Paragraph"
        value={content.paragraphs[0]}
        onChange={(e) => updateParagraph(0, e.target.value)}
        rows={3}
      />

      <FormTextarea
        label="Second Paragraph"
        value={content.paragraphs[1]}
        onChange={(e) => updateParagraph(1, e.target.value)}
        rows={3}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Cards</label>
        <div className="grid grid-cols-2 gap-4">
          {content.cards.map((card, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <input
                type="text"
                value={card.label}
                onChange={(e) => updateCard(index, 'label', e.target.value)}
                placeholder="Label"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="text"
                value={card.title}
                onChange={(e) => updateCard(index, 'title', e.target.value)}
                placeholder="Title"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      <FormInput
        label="Caption"
        value={content.caption}
        onChange={(e) => updateContent('mission.caption', e.target.value)}
      />
    </div>
  );
};

export default MissionEditor;
