import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';

export const MegaMenu = ({ id, label, items = [], isOpen, onOpen, onClose }) => {
  const isControlled = typeof isOpen === 'boolean';
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = isControlled ? isOpen : uncontrolledOpen;

  const hoverAreaRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const menuId = useMemo(() => (id ? `${id}-megamenu` : `${label.replace(/\s+/g, '-').toLowerCase()}-megamenu`), [id, label]);

  const openMenu = useCallback(() => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (onOpen) return onOpen();
    setUncontrolledOpen(true);
  }, [onOpen]);
  
  const closeMenu = useCallback(() => {
    if (onClose) return onClose();
    setUncontrolledOpen(false);
  }, [onClose]);
  
  const scheduleClose = useCallback(() => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // Schedule close with a small delay to allow mouse to reach dropdown
    closeTimeoutRef.current = setTimeout(() => {
      closeMenu();
      closeTimeoutRef.current = null;
    }, 150); // 150ms delay
  }, [closeMenu]);

  // Track mouse over entire menu system including dropdown
  useEffect(() => {
    if (!open) return;

    const menuElement = document.getElementById(menuId);
    if (!menuElement) return;

    const handleMenuMouseEnter = () => openMenu();

    const handleMenuMouseLeave = (e) => {
      const related = e.relatedTarget;
      // Change this line
      if (related instanceof Node && (
        hoverAreaRef.current?.contains(related) ||
        related.closest(`#${menuId}`) ||
        related.closest('[role="menuitem"]')
      )) {
        return;
      }
      scheduleClose();
    };

    menuElement.addEventListener('mouseenter', handleMenuMouseEnter);
    menuElement.addEventListener('mouseleave', handleMenuMouseLeave);
    
    return () => {
      menuElement.removeEventListener('mouseenter', handleMenuMouseEnter);
      menuElement.removeEventListener('mouseleave', handleMenuMouseLeave);
    };
  }, [open, menuId, openMenu, scheduleClose]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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
        className="px-4 py-2 text-sm font-mono uppercase tracking-wider hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-150 border-b-2 border-transparent hover:border-current"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onMouseEnter={openMenu}
        onMouseLeave={(e) => {
          const related = e.relatedTarget;
          if (related instanceof Node && (
            hoverAreaRef.current?.contains(related) ||
            related.closest(`#${menuId}`)
          )) {
              return;
            }
            scheduleClose();
        }}
        onFocus={openMenu}
        onKeyDown={onButtonKeyDown}
      >
        {label}
        <span className="ml-1 inline-block transition-transform duration-150" aria-hidden>
          <svg viewBox="0 0 24 24" className={`w-4 h-4 ${open ? 'rotate-180' : ''}`} fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </button>

      {/* Invisible bridge to prevent gaps between button and dropdown */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full h-2 z-50"
          role="presentation"
        />
      )}

      {/* Backdrop under the submenu to block clicks */}
      {open && (
        <div
          className="fixed left-0 right-0 top-[124px] bottom-0 z-40 bg-black/60 dark:bg-black/80"
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
          className={`w-full overflow-hidden ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pointer-events-auto`}
          onMouseEnter={openMenu}
          onMouseLeave={(e) => {
            const related = e.relatedTarget;
            if (related && (
              hoverAreaRef.current?.contains(related) ||
              related.closest(`#${menuId}`)
            )) {
              return;
            }
            scheduleClose();
          }}
        >
          <div
            className={`bg-white dark:bg-black dark:text-white text-black border-t-2 border-b-2 border-black dark:border-white overflow-hidden`}
            style={{
              maxHeight: open ? '80vh' : '0px',
              transition: 'max-height 200ms ease',
              transform: open ? 'translateY(0)' : 'translateY(0)'
            }}
          >
            <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tight text-black dark:text-white">{label}</h4>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                  → Explore <strong className='font-bold'>{label.toLowerCase()}</strong>
                </p>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {items.map((it) => (
                  <a 
                    key={it.href} 
                    href={it.href} 
                    className="group/item block border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-150" 
                    role="menuitem" 
                    tabIndex={open ? 0 : -1} 
                    aria-label={it.title}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                      <img src={it.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between text-sm font-mono uppercase tracking-wider">
                      <span className="font-bold">{it.title}</span>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover/item:translate-x-1 transition-transform duration-150" fill="currentColor"><path d="M12 4l-1.41 1.41L14.17 9H4v2h10.17l-3.58 3.59L12 16l6-6-6-6z"/></svg>
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
