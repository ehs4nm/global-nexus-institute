import { useState, useEffect } from 'react';
import contentData from '../data/content.json';

export const useContent = () => {
  const [content, setContent] = useState(contentData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedContent = localStorage.getItem('gni_content');
      if (savedContent) {
        try {
          setContent(JSON.parse(savedContent));
        } catch (error) {
          console.error('Error loading saved content:', error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  return { content, isLoading };
};
