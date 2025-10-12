import { useState, useEffect } from 'react';

export const useContent = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load from the static data directory
        const response = await fetch('/data/content.json');
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        const contentData = await response.json();
        setContent(contentData);
      } catch (error) {
        console.error('Error loading content data:', error);
        setError(error);
        
        // Set minimal fallback content to prevent crashes
        setContent({
          hero: { 
            tagline: 'Global Nexus Institute',
            title: 'Loading...',
            subtitle: 'Please wait',
            videoSrc: '',
            posterSrc: ''
          },
          mission: {
            title: 'Loading...',
            paragraphs: ['Loading content...'],
            cards: [],
            caption: ''
          },
          initiatives: {
            title: 'Loading...',
            subtitle: '',
            projects: []
          },
          leadership: [],
          gallery: {
            title: 'Loading...',
            subtitle: '',
            items: []
          },
          aboutUs: {
            sectionLabel: 'Loading...',
            mainTitle: 'Loading...',
            primaryDescription: '',
            secondaryDescription: '',
            missionStatement: '',
            principlesTitle: '',
            bottomMessage: '',
            principles: []
          },
          menu: {
            items: []
          },
          navigation: {
            whoWeAre: [],
            whatWeDo: []
          }
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, []);

  return { content, isLoading, error };
};
