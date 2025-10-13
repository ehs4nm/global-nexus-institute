import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollModeContext = createContext();

export const ScrollModeProvider = ({ children }) => {
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Load scroll mode setting from localStorage
  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('gni_scroll_mode');
      if (savedMode !== null) {
        setIsFullscreenMode(JSON.parse(savedMode));
      }
    }
  }, []);

  // Save scroll mode setting to localStorage
  const toggleFullscreenMode = (enabled) => {
    setIsFullscreenMode(enabled);
    setCurrentSection(0); // Reset to first section when toggling
    if (typeof window !== 'undefined') {
      localStorage.setItem('gni_scroll_mode', JSON.stringify(enabled));
    }
  };

  const value = {
    isFullscreenMode,
    setIsFullscreenMode: toggleFullscreenMode,
    currentSection,
    setCurrentSection
  };

  return (
    <ScrollModeContext.Provider value={value}>
      {children}
    </ScrollModeContext.Provider>
  );
};

export const useScrollMode = () => {
  const context = useContext(ScrollModeContext);
  if (!context) {
    throw new Error('useScrollMode must be used within a ScrollModeProvider');
  }
  return context;
};