import React, { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuBg, setMenuBg] = useState("");
  const [person, setPerson] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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
    isMenuOpen,
    setMenuOpen,
    menuBg,
    setMenuBg,
    person,
    isDrawerOpen,
    setDrawerOpen,
    openPerson,
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
