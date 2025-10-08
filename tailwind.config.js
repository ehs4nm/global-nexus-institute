/** @type {import('tailwindcss').Config} */
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
        // Semantic font naming for better maintainability
        'title': ['"Playfair Display SC"', 'serif'], // For main titles
        'title-bold': ['"Anton SC"', 'sans-serif'], // For bold/impact titles
        'body': ['"Nixie One"', 'sans-serif'], // For paragraphs and body text
        // Fallbacks for compatibility
        'sans': ['"Nixie One"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['"Playfair Display SC"', 'Georgia', 'serif']
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
