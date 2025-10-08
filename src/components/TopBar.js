import React from 'react';
import { useNewsletter } from '../hooks/useNewsletter';

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 text-white"
  >
    {children}
  </a>
);

export const TopBar = () => {
  const { open } = useNewsletter();
  return (
    <div className="w-full bg-black text-white" style={{ height: 60 }}>
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <SocialIcon href="https://x.com/" label="X">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.244 2H21l-6.71 7.69L22 22h-6.59l-5.16-6.7L4.4 22H2l7.2-8.25L2 2h6.59l4.7 6.09L18.244 2zm-2.31 18h2.04L8.14 4H6.1l9.834 16z"/></svg>
          </SocialIcon>
          <SocialIcon href="https://youtube.com/" label="YouTube">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.5 6.2a4 4 0 00-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 00.5 6.2 41.6 41.6 0 000 12a41.6 41.6 0 00.5 5.8 4 4 0 002.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 002.8-2.8A41.6 41.6 0 0024 12a41.6 41.6 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/" label="LinkedIn">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M6 6a3 3 0 11-6 0 3 3 0 016 0zM.5 8.5h5V24h-5V8.5zM9 8.5h4.8v2.1h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V24H9V8.5z"/></svg>
          </SocialIcon>
          <SocialIcon href="https://instagram.com/" label="Instagram">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7 3.1 1 2.4 1.5 1.7 2.3 1 3  .5 3.7.2 4.6 0 5.4-.2 6.3-.1 7.6 0 8.9 0 9.3 0 12s0 3.1.1 4.4c.1 1.3.3 2.2.6 3 .3.9.8 1.6 1.6 2.3.8.8 1.5 1.3 2.3 1.6.8.3 1.7.5 3 .6C8.7 24 9.1 24 12 24s3.3 0 4.4-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.6-.8 2.3-1.6.8-.8 1.3-1.5 1.6-2.3.3-.8.5-1.7.6-3 .1-1.1.1-1.5.1-4.4s0-3.3-.1-4.4c-.1-1.3-.3-2.2-.6-3-.3-.9-.8-1.6-1.6-2.3C20.9.8 20.2.3 19.3 0c-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0z"/><circle cx="18.5" cy="5.5" r="1.5"/><path d="M12 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8m0-2A8.2 8.2 0 113.8 12 8.2 8.2 0 0112 3.8z"/></svg>
          </SocialIcon>
        </div>
        <button onClick={open} className="inline-flex items-center gap-2 rounded-md bg-accent-600 hover:bg-accent-500 px-4 py-2 text-sm font-medium">
          Subscribe
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 4l1.41 1.41L9.83 9H20v2H9.83l3.58 3.59L12 16l-6-6 6-6z"/></svg>
        </button>
      </div>
    </div>
  );
};
