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
    <div className="w-full bg-black text-white" style={{ height: 50 }}>
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <SocialIcon href="https://x.com/" label="X">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.2175 5.37134H18.4665L13.5532 10.987L19.3334 18.6287H14.8075L11.2627 13.994L7.20665 18.6287H4.95631L10.2116 12.6221L4.66669 5.37134H9.30743L12.5116 9.60756L16.2175 5.37134ZM15.4282 17.2825H16.6744L8.63028 6.64676H7.29299L15.4282 17.2825Z" fill="currentColor"></path></svg>
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/" label="LinkedIn">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LinkedIn"><path d="M8.415 6.88c0 .78-.57 1.42-1.51 1.42-.88 0-1.45-.63-1.45-1.42 0-.8.58-1.41 1.49-1.41s1.45.61 1.47 1.41Zm-2.89 11.65V9.42h2.79v9.11h-2.79Zm4.47-6.21c0-1.14-.04-2.08-.07-2.91h2.43l.13 1.27h.06c.36-.6 1.27-1.47 2.78-1.47 1.84 0 3.22 1.25 3.22 3.93v5.39h-2.8v-5.06c0-1.17-.4-1.98-1.42-1.98-.77 0-1.23.54-1.43 1.06-.07.23-.1.47-.09.71v5.26h-2.79v-6.21l-.02.01Z" fill="currentColor"></path></svg>
          </SocialIcon>
          <SocialIcon href="https://instagram.com/" label="Instagram">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Instagram"><path d="M11.999 5.47c2.13 0 2.38 0 3.22.05.78.04 1.2.17 1.48.27.35.13.66.33.92.6.26.26.47.57.6.92.11.28.24.7.27 1.48.04.84.05 1.09.05 3.22s0 2.38-.05 3.22c-.04.78-.17 1.2-.27 1.48a2.664 2.664 0 0 1-1.52 1.52c-.28.11-.7.24-1.48.27-.84.04-1.09.05-3.22.05s-2.38 0-3.22-.05c-.78-.04-1.2-.17-1.48-.27-.35-.13-.66-.33-.92-.6-.26-.26-.47-.57-.6-.92-.11-.28-.24-.7-.27-1.48-.04-.84-.05-1.09-.05-3.22s0-2.38.05-3.22c.04-.78.17-1.2.27-1.48.13-.35.33-.66.6-.92.26-.26.57-.47.92-.6.28-.11.7-.24 1.48-.27.84-.04 1.09-.05 3.22-.05Zm0-1.43c-2.16 0-2.43 0-3.28.05-.85.04-1.43.17-1.93.37-.53.2-1.01.51-1.41.92-.41.4-.72.88-.92 1.41-.2.51-.33 1.09-.37 1.93-.04.85-.05 1.12-.05 3.28 0 2.16 0 2.43.05 3.28.04.85.17 1.43.37 1.93.2.53.51 1.01.92 1.41.4.41.88.72 1.41.92.51.2 1.09.33 1.93.37.85.04 1.12.05 3.28.05 2.16 0 2.43 0 3.28-.05.85-.04 1.43-.17 1.93-.37.53-.2 1.01-.52 1.41-.92.4-.4.71-.88.92-1.41.2-.51.33-1.09.37-1.93.04-.85.05-1.12.05-3.28 0-2.16 0-2.43-.05-3.28-.04-.85-.17-1.43-.37-1.93-.2-.53-.51-1.01-.92-1.41-.4-.41-.88-.72-1.41-.92-.51-.2-1.09-.33-1.93-.37-.85-.04-1.12-.05-3.28-.05Z" fill="currentColor"></path><path d="M11.999 7.908c-.81 0-1.6.24-2.27.69-.67.45-1.2 1.09-1.51 1.84-.31.75-.39 1.57-.23 2.36.16.79.55 1.52 1.12 2.09.57.57 1.3.96 2.09 1.12.79.16 1.62.08 2.36-.23.75-.31 1.39-.83 1.84-1.51.45-.67.69-1.46.69-2.27 0-.54-.11-1.07-.31-1.57-.21-.5-.51-.95-.89-1.33-.38-.38-.83-.68-1.33-.89-.5-.21-1.03-.31-1.57-.31l.01.01Zm0 6.75c-.53 0-1.04-.16-1.48-.45a2.646 2.646 0 0 1-.4-4.08c.37-.37.84-.62 1.36-.73.52-.1 1.05-.05 1.53.15.49.2.9.54 1.19.98.29.44.45.95.45 1.48a2.665 2.665 0 0 1-2.66 2.66l.01-.01ZM16.249 8.71a.96.96 0 1 0 0-1.921.96.96 0 0 0 0 1.92Z" fill="currentColor"></path></svg>
          </SocialIcon>
        </div>
        <button onClick={open} className="title-hero inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm">
          NEWSLETTER
        </button>
      </div>
    </div>
  );
};
