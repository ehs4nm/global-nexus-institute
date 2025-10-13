import "./src/styles/global.css";

// Suppress hydration warnings during development
// These occur due to localStorage-based state initialization
export const onClientEntry = () => {
  // Suppress React hydration warnings in development
  if (process.env.NODE_ENV === 'development') {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Warning: Text content did not match') ||
         args[0].includes('Warning: Expected server HTML') ||
         args[0].includes('Minified React error #423'))
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  }
};
