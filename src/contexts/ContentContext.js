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
  // Initialize content state with defaults first
  const [aboutUsContent, setAboutUsContent] = useState(defaultAboutUsContent);
  const [newsTickerContent, setNewsTickerContent] = useState(defaultNewsTickerContent);

  // Loading state for async operations
  const [isLoading, setIsLoading] = useState(true);
  
  // Error state
  const [error, setError] = useState(null);

  // Fetch fresh content from backend/admin data
  const fetchContentFromBackend = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Add cache-busting timestamp
      const timestamp = new Date().getTime();
      const response = await fetch(`/src/data/content.json?_t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.status}`);
      }

      const backendData = await response.json();
      
      // Update aboutUs content if available
      if (backendData.aboutUs) {
        setAboutUsContent(backendData.aboutUs);
      }
      
      // Update news ticker content if available, otherwise try localStorage
      if (backendData.newsTicker) {
        setNewsTickerContent(backendData.newsTicker);
      } else {
        // Fallback: check if admin panel saved data in localStorage
        try {
          const gniContent = localStorage.getItem('gni_content');
          if (gniContent) {
            const parsedContent = JSON.parse(gniContent);
            if (parsedContent.newsTicker) {
              setNewsTickerContent(parsedContent.newsTicker);
            }
          } else {
            // Check individual localStorage keys
            const savedNewsTickerContent = localStorage.getItem('newsTickerContent');
            if (savedNewsTickerContent) {
              setNewsTickerContent(JSON.parse(savedNewsTickerContent));
            }
          }
        } catch (localStorageError) {
          console.warn('Error reading from localStorage:', localStorageError);
        }
      }
    } catch (error) {
      console.error('Error fetching content from backend:', error);
      setError(error.message);
      
      // Fallback to localStorage on network error
      try {
        const gniContent = localStorage.getItem('gni_content');
        if (gniContent) {
          const parsedContent = JSON.parse(gniContent);
          if (parsedContent.aboutUs) setAboutUsContent(parsedContent.aboutUs);
          if (parsedContent.newsTicker) setNewsTickerContent(parsedContent.newsTicker);
        }
      } catch (fallbackError) {
        console.warn('Fallback to localStorage failed:', fallbackError);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch content on component mount
  useEffect(() => {
    fetchContentFromBackend();
  }, []);

  // Save content to localStorage whenever it changes (backup only)
  useEffect(() => {
    if (!isLoading) { // Only save after initial load
      try {
        localStorage.setItem('aboutUsContent', JSON.stringify(aboutUsContent));
        // Also save in the format expected by sync script
        const gniContent = JSON.parse(localStorage.getItem('gni_content') || '{}');
        gniContent.aboutUs = aboutUsContent;
        localStorage.setItem('gni_content', JSON.stringify(gniContent));
      } catch (error) {
        console.error('Error saving content to localStorage:', error);
      }
    }
  }, [aboutUsContent, isLoading]);

  useEffect(() => {
    if (!isLoading) { // Only save after initial load
      try {
        localStorage.setItem('newsTickerContent', JSON.stringify(newsTickerContent));
        // Also save in the format expected by sync script
        const gniContent = JSON.parse(localStorage.getItem('gni_content') || '{}');
        gniContent.newsTicker = newsTickerContent;
        localStorage.setItem('gni_content', JSON.stringify(gniContent));
      } catch (error) {
        console.error('Error saving news ticker content to localStorage:', error);
      }
    }
  }, [newsTickerContent, isLoading]);

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

    // Refresh content from backend
  const refreshContent = async () => {
    await fetchContentFromBackend();
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
    
    // Refresh function
    refreshContent,
    
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