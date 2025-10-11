import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultAboutUsContent } from '../data/aboutUsContent';
import { defaultNewsTickerContent } from '../data/newsTickerContent';

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

// Content Provider Component
export const ContentProvider = ({ children }) => {
  // Initialize content state with localStorage data or defaults
  const [aboutUsContent, setAboutUsContent] = useState(() => {
    try {
      const savedContent = localStorage.getItem('aboutUsContent');
      return savedContent ? JSON.parse(savedContent) : defaultAboutUsContent;
    } catch (error) {
      console.warn('Error loading saved content from localStorage:', error);
      return defaultAboutUsContent;
    }
  });

  const [newsTickerContent, setNewsTickerContent] = useState(() => {
    try {
      const savedContent = localStorage.getItem('newsTickerContent');
      return savedContent ? JSON.parse(savedContent) : defaultNewsTickerContent;
    } catch (error) {
      console.warn('Error loading news ticker content from localStorage:', error);
      return defaultNewsTickerContent;
    }
  });

  // Loading state for async operations
  const [isLoading, setIsLoading] = useState(false);
  
  // Error state
  const [error, setError] = useState(null);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('aboutUsContent', JSON.stringify(aboutUsContent));
      setError(null);
    } catch (error) {
      console.error('Error saving content to localStorage:', error);
      setError('Failed to save content');
    }
  }, [aboutUsContent]);

  useEffect(() => {
    try {
      localStorage.setItem('newsTickerContent', JSON.stringify(newsTickerContent));
      setError(null);
    } catch (error) {
      console.error('Error saving news ticker content to localStorage:', error);
      setError('Failed to save news ticker content');
    }
  }, [newsTickerContent]);

  // Update About Us content
  const updateAboutUsContent = async (newContent) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Validate the content structure
      if (!newContent || typeof newContent !== 'object') {
        throw new Error('Invalid content format');
      }

      // Here you could also make an API call to save to a backend
      // await api.updateAboutUsContent(newContent);

      setAboutUsContent(newContent);
      setIsLoading(false);
      
      // Return success
      return { success: true, message: 'Content updated successfully' };
    } catch (error) {
      console.error('Error updating About Us content:', error);
      setError(error.message);
      setIsLoading(false);
      
      // Return error
      return { success: false, message: error.message };
    }
  };

  // Reset About Us content to defaults
  const resetAboutUsContent = () => {
    setAboutUsContent(defaultAboutUsContent);
    return { success: true, message: 'Content reset to defaults' };
  };

  // Update News Ticker content
  const updateNewsTickerContent = async (newContent) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Validate the content structure
      if (!newContent || typeof newContent !== 'object') {
        throw new Error('Invalid content format');
      }

      // Update with timestamp
      const updatedContent = {
        ...newContent,
        lastUpdated: new Date().toISOString()
      };

      setNewsTickerContent(updatedContent);
      setIsLoading(false);
      
      return { success: true, message: 'News ticker updated successfully' };
    } catch (error) {
      console.error('Error updating news ticker content:', error);
      setError(error.message);
      setIsLoading(false);
      
      return { success: false, message: error.message };
    }
  };

  // Reset News Ticker content to defaults
  const resetNewsTickerContent = () => {
    setNewsTickerContent(defaultNewsTickerContent);
    return { success: true, message: 'News ticker reset to defaults' };
  };

  // Bulk update function for multiple sections (for future expansion)
  const updateContent = async (section, content) => {
    switch (section) {
      case 'aboutUs':
        return updateAboutUsContent(content);
      case 'newsTicker':
        return updateNewsTickerContent(content);
      default:
        return { success: false, message: `Unknown section: ${section}` };
    }
  };

  // Export/Import functions for content management
  const exportContent = () => {
    const contentToExport = {
      aboutUs: aboutUsContent,
      newsTicker: newsTickerContent,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    
    return JSON.stringify(contentToExport, null, 2);
  };

  const importContent = async (contentString) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const importedContent = JSON.parse(contentString);
      
      if (importedContent.aboutUs) {
        await updateAboutUsContent(importedContent.aboutUs);
      }
      
      if (importedContent.newsTicker) {
        await updateNewsTickerContent(importedContent.newsTicker);
      }
      
      setIsLoading(false);
      return { success: true, message: 'Content imported successfully' };
    } catch (error) {
      console.error('Error importing content:', error);
      setError('Invalid content format');
      setIsLoading(false);
      return { success: false, message: 'Invalid content format' };
    }
  };

  // Context value
  const value = {
    // Content state
    aboutUsContent,
    newsTickerContent,
    
    // Loading and error states
    isLoading,
    error,
    
    // Update functions
    updateAboutUsContent,
    resetAboutUsContent,
    updateNewsTickerContent,
    resetNewsTickerContent,
    updateContent,
    
    // Import/Export functions
    exportContent,
    importContent,
    
    // Clear error function
    clearError: () => setError(null)
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

// HOC for wrapping components with content context
export const withContent = (Component) => {
  return function WrappedComponent(props) {
    return (
      <ContentProvider>
        <Component {...props} />
      </ContentProvider>
    );
  };
};