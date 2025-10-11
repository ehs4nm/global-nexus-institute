# 🎨 Instant Theme Switcher Guide

## What Was Created

You now have a **complete instant theme switching system** that lets users toggle between brutalist and refined designs with a single button click - just like the dark mode toggle!

---

## 🎯 Three Ways to Use

### Option 1: Adaptive Classes (Recommended) ⭐
**Use `adaptive-*` classes that automatically switch based on user's preference**

```jsx
// This card automatically switches between brutalist and refined
<div className="adaptive-card p-6">
  <h3 className="adaptive-card-title">Mission Card</h3>
  <p className="adaptive-body">This adapts automatically!</p>
</div>
```

**Benefits:**
- ✅ One class name, two designs
- ✅ Instant switching with button click
- ✅ Smooth 500ms transitions
- ✅ No code changes needed after setup

### Option 2: Explicit Classes
**Use specific `brutalist-*` or `refined-*` classes (won't switch)**

```jsx
// Always brutalist
<div className="brutalist-card p-6">...</div>

// Always refined
<div className="refined-card p-8">...</div>
```

### Option 3: Manual Conditional
**Use the hook directly for custom logic**

```jsx
import { useDesignTheme } from '../hooks/useDesignTheme';

function MyComponent() {
  const { isRefined } = useDesignTheme();
  
  return (
    <div className={isRefined ? "refined-card p-8" : "brutalist-card p-6"}>
      {/* content */}
    </div>
  );
}
```

---

## 🚀 Quick Start

### 1. The Button is Already Added!

Look in the header (desktop only) - you'll see two buttons:
- **Left button:** Design theme (square ↔ circle)
- **Right button:** Dark mode (sun ↔ moon)

### 2. Use Adaptive Classes

Replace your existing brutalist classes with adaptive ones:

```jsx
// BEFORE
<section className="brutalist-section">
  <div className="brutalist-container">
    <div className="brutalist-card p-6">
      <h2 className="brutalist-heading">Title</h2>
      <p className="brutalist-label">LABEL</p>
      <p className="brutalist-body">Body text</p>
    </div>
  </div>
</section>

// AFTER (with adaptive classes)
<section className="adaptive-section">
  <div className="adaptive-container">
    <div className="adaptive-card p-6">
      <h2 className="adaptive-heading">Title</h2>
      <p className="adaptive-label">Label</p>
      <p className="adaptive-body">Body text</p>
    </div>
  </div>
</section>
```

### 3. Test It!

1. Start your dev server
2. Look for the square/circle button in the header
3. Click it - watch everything transition smoothly!

---

## 📋 Complete Class Reference

| Adaptive Class | Brutalist (Default) | Refined (When Toggled) |
|----------------|---------------------|------------------------|
| `.adaptive-card` | Hard borders, sharp corners | Soft shadows, rounded corners |
| `.adaptive-heading` | Font-black, tight leading | Font-bold, comfortable leading |
| `.adaptive-card-title` | Bold, tight | Semibold, relaxed |
| `.adaptive-label` | Wide tracking, gray-400 | Medium tracking, gray-600 |
| `.adaptive-body` | Leading-relaxed | Line-height 1.75, gray-600 |
| `.adaptive-section` | With border-t-2 | No border, more padding |
| `.adaptive-container` | px-4/6/8 | px-6/8/12 |
| `.adaptive-divider-bold` | Solid white/black bar | Gradient accent line |
| `.adaptive-bg-dots` | Larger dots (20px) | Smaller dots (24px) |
| `.adaptive-hover-lift` | No lift | Lifts -6px on hover |

---

## 🎨 How It Works

### 1. The Hook (`useDesignTheme`)

```jsx
const { 
  isRefined,           // boolean - true if refined mode
  toggleDesignTheme,   // function - switches themes
  setDesignTheme,      // function - set specific theme ('brutalist' or 'refined')
  currentTheme         // string - 'brutalist' or 'refined'
} = useDesignTheme();
```

### 2. The CSS Class

When you click the button, it toggles `.refined-mode` on the `<html>` element:

```html
<!-- Brutalist mode (default) -->
<html>

<!-- Refined mode (after clicking button) -->
<html class="refined-mode">
```

### 3. The Adaptive Styles

Adaptive classes have two sets of styles:

```css
/* Default (Brutalist) */
.adaptive-card {
  border: 2px solid black;
  /* ... */
}

/* When .refined-mode is active */
.refined-mode .adaptive-card {
  border-radius: 12px;
  box-shadow: soft shadow;
  /* ... */
}
```

---

## 🔧 Advanced Usage

### Create a Custom Adaptive Component

```jsx
import { useDesignTheme } from '../hooks/useDesignTheme';

export const AdaptiveButton = ({ children, ...props }) => {
  const { isRefined } = useDesignTheme();
  
  const baseClasses = "px-6 py-3 font-medium transition-all duration-500";
  const themeClasses = isRefined
    ? "rounded-lg bg-gray-900 text-white shadow-lg hover:shadow-xl"
    : "border-2 border-black hover:bg-black hover:text-white";
  
  return (
    <button className={`${baseClasses} ${themeClasses}`} {...props}>
      {children}
    </button>
  );
};
```

### Programmatically Switch Themes

```jsx
import { useDesignTheme } from '../hooks/useDesignTheme';

function ThemeSelector() {
  const { setDesignTheme, currentTheme } = useDesignTheme();
  
  return (
    <div>
      <button onClick={() => setDesignTheme('brutalist')}>
        Brutalist
      </button>
      <button onClick={() => setDesignTheme('refined')}>
        Refined
      </button>
      <p>Current: {currentTheme}</p>
    </div>
  );
}
```

### Add to Mobile Menu

```jsx
import { useDesignTheme } from '../hooks/useDesignTheme';

function MobileMenu() {
  const { isRefined, toggleDesignTheme } = useDesignTheme();
  
  return (
    <div>
      {/* ... other menu items ... */}
      <button onClick={toggleDesignTheme}>
        {isRefined ? 'Switch to Brutalist' : 'Switch to Refined'}
      </button>
    </div>
  );
}
```

---

## 🎯 Migration Strategy

### Quick Win: Start with One Section

1. **Pick high-visibility section** (e.g., Hero or Mission)
2. **Replace classes** with adaptive equivalents
3. **Test the toggle** button
4. **Gather feedback**

```jsx
// Example: Mission Section
<section className="adaptive-section">
  <div className="adaptive-bg-dots absolute inset-0 opacity-[0.03]" />
  
  <div className="adaptive-container">
    <div className="mb-16">
      <div className="adaptive-divider-bold mb-4" />
      <span className="adaptive-label">Our Mission</span>
    </div>
    
    <div className="adaptive-card adaptive-hover-lift p-8">
      <h3 className="adaptive-card-title">Card Title</h3>
      <p className="adaptive-body">Card content</p>
    </div>
  </div>
</section>
```

### Gradual Migration

- **Week 1:** Hero + Mission sections
- **Week 2:** Leadership + Gallery sections
- **Week 3:** Remaining sections
- **Week 4:** Polish + edge cases

---

## 🎨 Customization

### Adjust Transition Speed

In `src/styles/adaptive-theme.css`:

```css
/* Change from 500ms to your preference */
.adaptive-card,
.adaptive-heading,
/* ... other classes ... */ {
  transition-duration: 300ms; /* Faster */
  /* or */
  transition-duration: 800ms; /* Slower */
}
```

### Customize Refined Colors

In `src/styles/refined-system.css`:

```css
:root {
  --refined-text-primary: #1a1a1a;  /* Change this */
  --refined-accent: #2563eb;         /* Change this */
  /* ... etc ... */
}
```

### Add New Adaptive Classes

In `src/styles/adaptive-theme.css`:

```css
.adaptive-my-component {
  /* Brutalist styles */
  border: 2px solid black;
}

.refined-mode .adaptive-my-component {
  /* Refined styles */
  border-radius: 12px;
  box-shadow: var(--refined-shadow-md);
}
```

---

## 🐛 Troubleshooting

### Button Not Showing
**Check:** Is the viewport wide enough? Button is hidden on mobile (`hidden md:inline-flex`)

**Solution:** Add to mobile menu or make visible on mobile

### Theme Not Switching
**Check:** Browser console for errors

**Common Issue:** CSS files not imported correctly

**Solution:** Verify in `src/styles/global.css`:
```css
@import './refined-system.css';
@import './adaptive-theme.css';
```

### Transitions Too Slow/Fast
**Solution:** Adjust `transition-duration` in `adaptive-theme.css`

### Some Elements Not Switching
**Issue:** They're using explicit `brutalist-*` or `refined-*` classes

**Solution:** Replace with `adaptive-*` classes

---

## 📊 User Preference Persistence

The theme choice is automatically saved to `localStorage`:

```javascript
// Key: 'gni_design_theme'
// Values: 'brutalist' or 'refined'
```

Users' choices persist across:
- ✅ Page refreshes
- ✅ Navigation
- ✅ Browser restarts

---

## 🎉 Benefits

### For Users
- ✅ Choose their preferred style
- ✅ Instant switching (no reload)
- ✅ Smooth transitions
- ✅ Choice persists

### For Developers
- ✅ Single codebase, two designs
- ✅ Easy to maintain
- ✅ Gradual migration path
- ✅ No breaking changes

### For Business
- ✅ Appeal to both audiences
- ✅ Test which style converts better
- ✅ Differentiate from competitors
- ✅ Future-proof design system

---

## 📚 Files Created

```
/Users/ehsan/Desktop/TonyTony/
├── src/
│   ├── hooks/
│   │   └── useDesignTheme.js          # Custom hook
│   ├── styles/
│   │   ├── refined-system.css         # Refined design classes
│   │   ├── adaptive-theme.css         # Adaptive switching classes
│   │   └── global.css                 # Updated with imports
│   └── components/
│       └── Header.js                  # Updated with toggle button
└── THEME_SWITCHER_GUIDE.md           # This file
```

---

## 🚀 What's Next?

1. **Start your dev server**
   ```bash
   npm start
   # or
   gatsby develop
   ```

2. **Find the toggle button** in the header (square/circle icon)

3. **Click it** and watch the magic happen!

4. **Start migrating** your components to use `adaptive-*` classes

5. **Test thoroughly** on different devices

6. **Gather user feedback** on which style they prefer

---

## 💡 Pro Tips

1. **Use adaptive classes for public-facing sections** - let users choose
2. **Use explicit classes for admin/internal tools** - maintain consistency
3. **Test both themes** when adding new components
4. **Keep transitions smooth** (500ms is sweet spot)
5. **Monitor analytics** to see which theme users prefer
6. **A/B test** conversion rates between themes

---

**You're all set!** Click that button and enjoy instant theme switching! 🎨✨
