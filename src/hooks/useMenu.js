import { useState, useEffect } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuBg, setMenuBg] = useState("");
  const [person, setPerson] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

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

  return {
    isMenuOpen,
    setMenuOpen,
    menuBg,
    setMenuBg,
    person,
    isDrawerOpen,
    setDrawerOpen,
    openPerson
  };
};