/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // turquoise accent
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        }
      },
      fontFamily: {
        // Title fonts
        'title': ['"Notable"', 'sans-serif'], // Primary title font
        'title-alt': ['"Bellefair"', 'serif'], // Alternative title font
        // Paragraph fonts
        'body': ['"Alumni Sans Pinstripe"', 'sans-serif'], // Primary paragraph font
        'body-alt': ['"Mulish"', 'sans-serif'], // Alternative paragraph font
        // Fallbacks for compatibility
        'sans': ['"Alumni Sans Pinstripe"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['"Bellefair"', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.4), 0 0 24px rgba(59,130,246,0.35)'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' }
        },
        pulseLine: {
          '0%': { opacity: 0.15 },
          '50%': { opacity: 0.45 },
          '100%': { opacity: 0.15 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseLine: 'pulseLine 8s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
