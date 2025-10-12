import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ContentContext = createContext();

// Hook to use the context
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

// Simplified Content Provider Component (read-only from JSON file)
export const ContentProvider = ({ children }) => {
  // Initialize content state with defaults
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch content from JSON file
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`/data/content.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.status}`);
        }
        
        const data = await response.json();
        setContent(data);

      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error.message);
        setContent({
          aboutUs: {},
          newsTicker: {},
          mission: {},
          initiatives: {},
          leadership: {},
          gallery: {}
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, []);

  // Context value with all content sections
  const value = {
    // Individual sections for easy access
    aboutUsContent: content.aboutUs || {},
    newsTickerContent: content.newsTicker || {},
    missionContent: content.mission || {},
    initiativesContent: content.initiatives || {},
    leadershipContent: content.leadership || {},
    galleryContent: content.gallery || {},
    
    // Full content object
    content,
    
    // State
    isLoading,
    error,
    
    // Helper function to refresh
    refreshContent: () => window.location.reload()
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};