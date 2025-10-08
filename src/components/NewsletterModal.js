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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={close} 
        onKeyDown={(e) => e.key === 'Escape' && close()}
        tabIndex={-1} 
        role="button"
        aria-label="Close newsletter modal"
      />
      <div className="relative z-10 flex items-center justify-center min-h-full p-8">
        <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-2xl">
          <div className="px-12 pt-12 flex items-end justify-end">
            <button onClick={close} aria-label="Close" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="w-10 h-12" fill="currentColor"><path d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"/></svg>
            </button>
          </div>
          <NewsletterForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
