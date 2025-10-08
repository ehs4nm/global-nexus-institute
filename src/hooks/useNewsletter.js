import React, { createContext, useContext, useState, useCallback } from 'react';

const NewsletterContext = createContext({ open: () => {}, close: () => {}, isOpen: false });

export const NewsletterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <NewsletterContext.Provider value={{ isOpen, open, close }}>
      {children}
    </NewsletterContext.Provider>
  );
};

export const useNewsletter = () => useContext(NewsletterContext);
