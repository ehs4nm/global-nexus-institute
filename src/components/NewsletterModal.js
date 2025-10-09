import React from 'react';
import { useNewsletter } from '../hooks/useNewsletter';
import { NewsletterForm } from './NewsletterForm';

export const NewsletterModal = () => {
  const { isOpen, close } = useNewsletter();
  if (!isOpen) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with your newsletter backend/API
    close();
  };

  return (
    <div className="fixed inset-0 z-[200]" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
      <div 
        className="absolute inset-0 bg-black/80" 
        onClick={close} 
        onKeyDown={(e) => e.key === 'Escape' && close()}
        tabIndex={-1} 
        role="button"
        aria-label="Close newsletter modal"
      />
      <div className="relative z-10 flex items-center justify-center min-h-full p-4 sm:p-8">
        <div className="w-full max-w-4xl bg-white dark:bg-black border-2 border-black dark:border-white">
          <div className="px-6 sm:px-12 pt-6 sm:pt-12 flex items-center justify-end">
            <button 
              onClick={close} 
              aria-label="Close" 
              className="w-12 h-12 inline-flex items-center justify-center border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <NewsletterForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
