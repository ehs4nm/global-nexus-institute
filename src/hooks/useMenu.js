import React, { createContext, useContext, useState, useEffect } from 'react';

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // menuBg will now hold a background image URL for the fullscreen menu
  const [menuBg, setMenuBg] = useState("");
  const [person, setPerson] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  // admin-managed menu items
  const [menuItems, setMenuItems] = useState([]);

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

  // Load menu data from an admin-provided source if available
  useEffect(() => {
    // Option 1: window global injected by admin panel build/runtime
    if (typeof window !== 'undefined' && window.__ADMIN_MENU__) {
      setMenuItems(window.__ADMIN_MENU__);
      return;
    }
    // Option 2: try to fetch from API (adjust URL to your backend route)
    const controller = new AbortController();
    fetch('/api/menu', { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data)) setMenuItems(data);
      })
      .catch(() => {
        // Fallback to a static example if no backend is present
        setMenuItems([
          { id: 'mission', label: 'Mission', type: 'hash', href: '#mission', image: '/assets/menu/mission.jpg', showInDesktop: true },
          { id: 'model', label: 'Model', type: 'hash', href: '#model', image: '/assets/menu/model.jpg', showInDesktop: true },
          { id: 'initiatives', label: 'Initiatives', type: 'hash', href: '#initiatives', image: '/assets/menu/initiatives.jpg', showInDesktop: true },
          { id: 'leadership', label: 'Leadership', type: 'hash', href: '#leadership', image: '/assets/menu/leadership.jpg', showInDesktop: true },
          { id: 'contact', label: 'Contact', type: 'hash', href: '#contact', image: '/assets/menu/contact.jpg', showInDesktop: true },
          { id: 'who', label: 'Who We Are', type: 'route', href: '/who-we-are', image: '/assets/menu/who.jpg', showInDesktop: true },
          { id: 'what', label: 'What We Do', type: 'route', href: '/what-we-do', image: '/assets/menu/what.jpg', showInDesktop: true },
        ]);
      });
    return () => controller.abort();
  }, []);

  const value = {
    isMenuOpen,
    setMenuOpen,
    menuBg,
    setMenuBg,
    menuItems,
    setMenuItems,
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
