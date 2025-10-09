# Dark Mode Color Fixes - Summary

## 🎨 Problem

The Brutalist design system classes weren't properly handling dark mode text colors. Elements that should appear white on dark backgrounds were showing dark, and vice versa.

---

## ✅ What Was Fixed

### 1. **Card Backgrounds & Borders**

**Before:**
```css
.brutalist-card-minimal {
  border: border-white/20;  /* Same for light and dark */
  bg: bg-black;             /* Always black */
}
```

**After:**
```css
.brutalist-card-minimal {
  border: border-white/20 dark:border-black/20;  /* Inverts */
  bg: bg-black dark:bg-white;                     /* Inverts */
}
```

### 2. **Text Colors in Sections**

**Before:**
```css
.brutalist-subheading {
  color: text-gray-600 dark:text-gray-300;  /* Wrong direction */
}
```

**After:**
```css
.brutalist-subheading {
  color: text-gray-300 dark:text-gray-600;  /* Correct: light on dark, dark on light */
}
```

### 3. **Interactive Elements**

**Before:**
```css
.brutalist-accent-line {
  bg: bg-black dark:bg-white;  /* Wrong for dark sections */
}
```

**After:**
```css
.brutalist-accent-line {
  bg: bg-white dark:bg-black;  /* White lines on dark sections */
}
```

### 4. **Dividers**

**Before:**
```css
.brutalist-divider-bold {
  bg: bg-black dark:bg-white;
}
```

**After:**
```css
.brutalist-divider-bold {
  bg: bg-white dark:bg-black;  /* Adapts to section context */
}
```

### 5. **Number Badges**

**Before:**
```css
.brutalist-number-badge {
  color: text-black/30 dark:text-white/30;
}
```

**After:**
```css
.brutalist-number-badge {
  color: text-white/30 dark:text-black/30;  /* Light badges on dark */
}
```

---

## 🧩 The Logic

The Brutalist design system is meant for **inverted sections**:
- **Light Mode**: Section has BLACK background → Text should be WHITE
- **Dark Mode**: Section has WHITE background → Text should be BLACK

This is the opposite of standard sections, hence "inverted."

### Color Mapping Table

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Section BG** | Black | White |
| **Section Text** | White | Black |
| **Card BG** | Black | White |
| **Card Border** | White/20 | Black/20 |
| **Dividers** | White | Black |
| **Accent Lines** | White | Black |
| **Body Text** | Gray-400 | Gray-600 |
| **Labels** | Gray-400 | Gray-500 |
| **Badges** | White/30 | Black/30 |

---

## 📝 Updated Component Pattern

### Correct Usage in ModelSection

```jsx
<section className="brutalist-section-inverted">
  {/* Section sets text-white dark:text-black */}
  
  <h2 className="brutalist-heading">
    {/* Inherits white/black from section */}
    Title
  </h2>
  
  <p className="brutalist-subheading">
    {/* Uses gray-300/gray-600 for muted look */}
    Subtitle
  </p>
  
  <article className="brutalist-card-minimal group p-8 text-white dark:text-black">
    {/* Explicit text color on card */}
    
    <h3 className="brutalist-card-title">
      {/* Inherits from card */}
      Card Title
    </h3>
    
    <p className="brutalist-body text-gray-400 dark:text-gray-600">
      {/* Specific muted color for body */}
      Description
    </p>
    
    <div className="brutalist-accent-line"></div>
    {/* White in light mode, black in dark mode */}
  </article>
</section>
```

---

## 🎯 Key Principles

### 1. **Section Context Matters**

Elements adapt their colors based on whether they're in:
- **Standard Section** (`brutalist-section`) → Light bg, dark text
- **Inverted Section** (`brutalist-section-inverted`) → Dark bg, light text

### 2. **Explicit vs Inherited Colors**

- **Headings**: Inherit from parent (flexible)
- **Body Text**: Uses specific muted colors
- **Cards**: Set explicit text color
- **Badges/Labels**: Use opacity-based colors

### 3. **Dark Mode = Inversion**

When the OS/browser is in dark mode:
- Black backgrounds become white
- White text becomes black
- Light borders become dark borders
- This maintains the "brutalist" contrast

---

## ✅ Testing Checklist

When testing dark mode:

- [ ] **Section backgrounds** invert (black ↔ white)
- [ ] **Heading text** is readable (high contrast)
- [ ] **Body text** is slightly muted but readable
- [ ] **Card borders** are visible
- [ ] **Accent lines** appear in correct color
- [ ] **Badges** are subtle but visible
- [ ] **Dividers** separate content clearly
- [ ] **Hover effects** work correctly

---

## 🔧 How to Test

### 1. Enable Dark Mode (macOS)
```
System Settings → Appearance → Dark
```

### 2. Or Use Browser DevTools
- Open DevTools (F12)
- Toggle device toolbar
- Click "⋮" → More tools → Rendering
- Find "Emulate CSS media feature prefers-color-scheme"
- Select "dark"

### 3. Check ModelSection
Navigate to: `http://localhost:8000/#model`

**Expected in Light Mode:**
- Black background
- White text
- White borders (subtle)
- White accent lines

**Expected in Dark Mode:**
- White background
- Black text
- Black borders (subtle)
- Black accent lines

---

## 🚀 Future Component Migration

When migrating other components, remember:

### For Inverted Sections (Dark Background):
```jsx
<section className="brutalist-section-inverted">
  {/* Text will be white in light mode, black in dark mode */}
</section>
```

### For Standard Sections (Light Background):
```jsx
<section className="brutalist-section">
  {/* Text will be black in light mode, white in dark mode */}
</section>
```

### For Cards Inside Sections:
Always set explicit text color:
```jsx
<div className="brutalist-card group p-8 text-black dark:text-white">
  {/* Explicit color ensures readability */}
</div>
```

---

## 📚 Files Modified

1. ✅ `src/styles/global.css` - Fixed all color definitions
2. ✅ `src/components/sections/ModelSection.js` - Added explicit text colors
3. ✅ This document - Dark mode best practices

---

## 🎉 Result

Dark mode now works correctly! The entire design system properly inverts colors while maintaining the Brutalist aesthetic and high contrast.

**Test Command:**
```bash
gatsby develop
# Visit http://localhost:8000
# Toggle dark mode and check ModelSection
```
