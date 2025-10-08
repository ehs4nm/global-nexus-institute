import React, { useRef, useState, useCallback, useMemo } from 'react';

export const MegaMenu = ({ id, label, items = [], isOpen, onOpen, onClose }) => {
  const isControlled = typeof isOpen === 'boolean';
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = isControlled ? isOpen : uncontrolledOpen;

  const hoverAreaRef = useRef(null);
  const menuId = useMemo(() => (id ? `${id}-megamenu` : `${label.replace(/\s+/g, '-').toLowerCase()}-megamenu`), [id, label]);

  const openMenu = useCallback(() => {
    if (onOpen) return onOpen();
    setUncontrolledOpen(true);
  }, [onOpen]);
  const closeMenu = useCallback(() => {
    if (onClose) return onClose();
    setUncontrolledOpen(false);
  }, [onClose]);

  // Keyboard support: focus opens, Esc closes
  const onButtonKeyDown = (e) => {
    if (e.key === 'Escape') closeMenu();
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
    }
    if (e.key === 'ArrowDown') openMenu();
  };

  // Focus management: keep open while focus is within trigger/panel
  const onRootBlurCapture = (e) => {
    const next = e.relatedTarget;
    if (hoverAreaRef.current && next && hoverAreaRef.current.contains(next)) return;
    closeMenu();
  };

  return (
    <div
      className="relative"
      ref={hoverAreaRef}
      onBlurCapture={onRootBlurCapture}
    >
      <button
        className="px-3 py-2 hover:text-accent-400"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onMouseEnter={openMenu}
        onFocus={openMenu}
        onKeyDown={onButtonKeyDown}
        onMouseLeave={(e) => {
          // If moving into the panel area, keep it open
          const related = e.relatedTarget;
          if (hoverAreaRef.current && related && hoverAreaRef.current.contains(related)) return;
          closeMenu();
        }}
      >
        {label}
        <span className="ml-1 inline-block transition-transform duration-200" aria-hidden>
          <svg viewBox="0 0 24 24" className={`w-4 h-4 ${open ? 'rotate-180' : ''}`} fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </button>

      {/* Backdrop under the submenu to block clicks and add depth */}
      {open && (
        <div
          className="fixed left-0 right-0 top-[124px] bottom-0 z-40 bg-black/40"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="presentation"
          tabIndex={-1}
        />
      )}

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        className="fixed left-0 right-0 top-[124px] z-50 w-screen pointer-events-none"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onKeyDown={(e) => {
          if (e.key === 'Escape') closeMenu();
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const menuItems = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]'));
            const currentIndex = menuItems.indexOf(document.activeElement);
            const nextIndex = e.key === 'ArrowDown' ? 
              (currentIndex + 1) % menuItems.length : 
              (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[nextIndex].focus();
          }
        }}
        tabIndex={open ? 0 : -1}
      >
        <div
          className={`mx-auto max-w-7xl overflow-hidden ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 pointer-events-auto`}
        >
          <div
            className={`bg-white/90 dark:bg-black/90 text-black shadow-2xl border-t border-black/10 overflow-hidden rounded-xl`}
            style={{
              maxHeight: open ? '80vh' : '0px',
              transition: 'max-height 250ms ease, transform 200ms ease',
              transform: open ? 'translateY(0)' : 'translateY(8px)'
            }}
          >
            <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl uppercase tracking-wide text-black">{label}</h4>
                <p className="mt-2 text-sm text-black">Explore {label.toLowerCase()} highlights</p>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {items.map((it) => (
                  <a key={it.href} href={it.href} className="group/item block" role="menuitem" tabIndex={open ? 0 : -1} aria-label={it.title}>
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
    </div>
  );
};
