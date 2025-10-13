import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    setHasMounted(true);
    if (typeof window === "undefined") return;
    const savedTheme = localStorage.getItem("theme");
    const dark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    if (!hasMounted) return;
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next ? "dark" : "light");
    }
  };

  return { isDark, toggleTheme, hasMounted };
};