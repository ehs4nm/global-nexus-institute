import React from 'react';

export const MegaMenu = ({ label, items = [] }) => {
  return (
    <div className="relative group">
      <button className="px-3 py-2 hover:text-accent-400">
        {label}
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute left-0 top-full w-screen bg-black/90 text-white shadow-2xl border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-wide text-white/70">{label}</h4>
              <p className="mt-2 text-sm text-white/60">Explore {label.toLowerCase()} highlights</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {items.map((it) => (
                <a key={it.href} href={it.href} className="group/item block">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5 border border-white/10">
                    <img src={it.image} alt="" className="w-full h-full object-cover group-hover/item:scale-[1.03] transition-transform duration-300" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium">
                    <span>{it.title}</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover/item:translate-x-0.5 transition-transform" fill="currentColor"><path d="M12 4l1.41 1.41L9.83 9H20v2H9.83l3.58 3.59L12 16l-6-6 6-6z"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
