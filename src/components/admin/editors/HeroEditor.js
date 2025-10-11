import React from 'react';
import FormInput from '../ui/FormInput';

const HeroEditor = ({ content, updateContent }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Hero Section</h2>
    </div>
    
    <FormInput
      label="Tagline"
      value={content.tagline}
      onChange={(e) => updateContent('hero.tagline', e.target.value)}
    />

    <FormInput
      label="Main Title"
      value={content.title}
      onChange={(e) => updateContent('hero.title', e.target.value)}
    />

    <FormInput
      label="Subtitle"
      value={content.subtitle}
      onChange={(e) => updateContent('hero.subtitle', e.target.value)}
    />

    <FormInput
      label="Video Source"
      value={content.videoSrc}
      onChange={(e) => updateContent('hero.videoSrc', e.target.value)}
      placeholder="assets/videos/video.mp4"
    />

    <FormInput
      label="Poster Image"
      value={content.posterSrc}
      onChange={(e) => updateContent('hero.posterSrc', e.target.value)}
      placeholder="assets/images/poster.jpg"
    />
  </div>
);

export default HeroEditor;
