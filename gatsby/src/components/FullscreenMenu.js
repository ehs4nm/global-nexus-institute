import React from 'react';
import { useMenu } from '../hooks/useMenu';

export const FullscreenMenu = () => {
  const { isMenuOpen, setMenuOpen, menuBg, setMenuBg } = useMenu();

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Inline styles for the fullscreen menu background variants */}
      <style>{`
        #menuPanel[data-bg="mission"] #menuBg { background: radial-gradient(800px 400px at 50% 50%, rgba(59,130,246,0.35), transparent), linear-gradient(135deg, rgba(255,255,255,0.06), transparent); }
        #menuPanel[data-bg="model"] #menuBg { background: radial-gradient(800px 400px at 50% 50%, rgba(255,255,255,0.15), transparent), linear-gradient(135deg, rgba(59,130,246,0.25), transparent); }
        #menuPanel[data-bg="initiatives"] #menuBg { background: radial-gradient(900px 460px at 50% 50%, rgba(59,130,246,0.45), transparent), linear-gradient(90deg, rgba(255,255,255,0.08), transparent); }
        #menuPanel[data-bg="leadership"] #menuBg { background: radial-gradient(900px 460px at 50% 50%, rgba(255,255,255,0.2), transparent), linear-gradient(180deg, rgba(59,130,246,0.25), transparent); }
        #menuPanel[data-bg="contact"] #menuBg { background: radial-gradient(1000px 500px at 50% 50%, rgba(59,130,246,0.5), transparent), linear-gradient(45deg, rgba(255,255,255,0.1), transparent); }
        #menuPanel[data-bg="who"] #menuBg { background: radial-gradient(900px 460px at 50% 50%, rgba(59,130,246,0.4), transparent), linear-gradient(225deg, rgba(255,255,255,0.08), transparent); }
        #menuPanel[data-bg="what"] #menuBg { background: radial-gradient(900px 460px at 50% 50%, rgba(255,255,255,0.2), transparent), linear-gradient(225deg, rgba(59,130,246,0.3), transparent); }
      `}</style>

      <div id="menuPanel" data-bg={menuBg} className="fixed inset-0 z-50 bg-black">
        <div id="menuBg" className="absolute inset-0 transition-opacity duration-500 opacity-40"></div>
        <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded border border-white/15 text-white hover:border-accent-500 focus:ring-2 focus:ring-accent-500"
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="w-full max-w-3xl text-center">
            <ul className="space-y-6">
              {[
                { label: "Mission", href: "#mission", bg: "mission" },
                { label: "Model", href: "#model", bg: "model" },
                { label: "Initiatives", href: "#initiatives", bg: "initiatives" },
                { label: "Leadership", href: "#leadership", bg: "leadership" },
                { label: "Contact", href: "#contact", bg: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onMouseEnter={() => setMenuBg(item.bg)}
                    onFocus={() => setMenuBg(item.bg)}
                    onClick={() => setMenuOpen(false)}
                    className="block text-4xl sm:text-5xl font-display hover:text-accent-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/who-we-are.html"
                  onMouseEnter={() => setMenuBg("who")}
                  onFocus={() => setMenuBg("who")}
                  className="block text-4xl sm:text-5xl font-display hover:text-accent-400"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="/what-we-do.html"
                  onMouseEnter={() => setMenuBg("what")}
                  onFocus={() => setMenuBg("what")}
                  className="block text-4xl sm:text-5xl font-display hover:text-accent-400"
                >
                  What We Do
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};