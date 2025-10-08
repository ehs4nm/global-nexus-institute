import React from 'react';
import { useNewsletter } from '../hooks/useNewsletter';

export const NewsletterModal = () => {
  const { isOpen, close } = useNewsletter();
  if (!isOpen) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with your newsletter backend/API
    close();
  };

  return (
    <div className="fixed inset-0 z-[200]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div className="relative z-10 flex items-center justify-center min-h-full p-4">
        <div className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-black/10 dark:border-white/10">
          <div className="px-6 py-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <button onClick={close} aria-label="Close" className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"/></svg>
            </button>
          </div>
          <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input type="email" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="you@example.com" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-600 hover:bg-accent-500 text-white font-medium">
              Subscribe
            </button>
            <p className="text-xs text-zinc-500">We care about your data in our privacy policy.</p>
          </form>
        </div>
      </div>
    </div>
  );
};
