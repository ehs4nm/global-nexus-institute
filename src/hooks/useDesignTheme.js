import { useState, useEffect } from 'react';

/**
 * Custom hook for managing design theme (brutalist vs refined)
 * Similar to useTheme but for design system switching
 */
export const useDesignTheme = () => {
  const [isRefined, setIsRefined] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('gni_design_theme');
      if (savedTheme === 'refined') {
        setIsRefined(true);
        document.documentElement.classList.add('refined-mode');
      }
    }
  }, []);

  // Toggle between brutalist and refined
  const toggleDesignTheme = () => {
    setIsRefined((prev) => {
      const newValue = !prev;
      
      if (typeof window !== 'undefined') {
        if (newValue) {
          localStorage.setItem('gni_design_theme', 'refined');
          document.documentElement.classList.add('refined-mode');
        } else {
          localStorage.setItem('gni_design_theme', 'brutalist');
          document.documentElement.classList.remove('refined-mode');
        }
      }
      
      return newValue;
    });
  };

  // Set specific theme
  const setDesignTheme = (theme) => {
    const shouldBeRefined = theme === 'refined';
    setIsRefined(shouldBeRefined);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('gni_design_theme', theme);
      
      if (shouldBeRefined) {
        document.documentElement.classList.add('refined-mode');
      } else {
        document.documentElement.classList.remove('refined-mode');
      }
    }
  };

  return {
    isRefined,
    toggleDesignTheme,
    setDesignTheme,
    currentTheme: isRefined ? 'refined' : 'brutalist',
  };
};
