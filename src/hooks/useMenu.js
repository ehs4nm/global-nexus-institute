import React, { createContext, useContext, useState, useEffect } from 'react';
import { useContent } from './useContent';

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuBg, setMenuBg] = useState("");
  const [person, setPerson] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Get content from unified content hook
  const { content, isLoading, error } = useContent();

  // Derive menu data from unified content structure
  const menuItems = content?.menu?.items || [];
  const navigation = content?.navigation || { whoWeAre: [], whatWeDo: [] };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("overflow-hidden", isMenuOpen || isDrawerOpen);
  }, [isMenuOpen, isDrawerOpen]);

  // Handle ESC key to close menu and drawer
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPerson = (data) => {
    setPerson(data);
    setDrawerOpen(true);
  };

  const value = {
    // Menu state
    isMenuOpen,
    setMenuOpen,
    menuBg,
    setMenuBg,
    
    // Menu and navigation data from unified content.json
    menuItems,
    navigation,
    
    // Person drawer
    person,
    isDrawerOpen,
    setDrawerOpen,
    openPerson,
    
    // Loading states
    isLoading,
    error,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return ctx;
};