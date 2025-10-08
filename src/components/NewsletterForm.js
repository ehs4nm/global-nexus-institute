import React from 'react';

export const NewsletterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="px-6 pb-8 space-y-5 max-w-xl mx-8 mb-8">
      <h3 className="text-4xl font-extrabold">Be the first to know what we're doing - and how you can get more involved.</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">First name</label>
          <input type="text" name="firstName" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Jane" />
        </div>
        <div>
          <label className="block text-sm mb-1">Last name</label>
          <input type="text" name="lastName" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Email address</label>
        <input type="email" name="email" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm mb-2">Interests</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="energy" className="rounded"/> Energy</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="geopolitics" className="rounded"/> Geopolitics</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="health" className="rounded"/> Health</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="events" className="rounded"/> Events</label>
        </div>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent-600 hover:bg-accent-500 text-white font-medium">
        Subscribe
      </button>
      <p className="text-xs text-zinc-500">We’ll send occasional updates. Unsubscribe anytime.</p>
    </form>
  );
};
