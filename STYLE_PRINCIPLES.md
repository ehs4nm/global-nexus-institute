# GNI Brutalist Design Principles - Quick Reference

## 🎨 Core Visual Identity

### Color Palette
- **ONLY** pure black (#000) and pure white (#FFF)
- **NO accent colors** - removed all turquoise/blue highlights
- Inverted in dark mode for maximum impact

### Borders
- **Always 2px** (never 1px): `border-2 border-black dark:border-white`
- **Sharp corners** - no rounded outer borders
- Hard box shadows: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`

### Typography
- **Headings**: `font-display text-7xl font-black` (up to 7xl)
- **Labels**: `font-mono uppercase tracking-widest text-xs`
- **Leading**: `leading-[0.95]` for headings, `leading-relaxed` for body

## 📋 Essential Elements

### Number Badges (01, 02, 03...)
```jsx
<div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
  01
</div>
```

### Expanding Line Decoration
```jsx
<div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
```

### Section Divider
```jsx
<div className="h-1 w-16 bg-black dark:bg-white mb-4" />
```

### Centered Bottom Text
```jsx
<div className="relative pt-8 border-t-2 border-black dark:border-white">
  <div className="text-center">
    <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
      Text Here
    </span>
  </div>
</div>
```

### Dot Pattern Background
```jsx
<div 
  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
  style={{
    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
    backgroundSize: '24px 24px'
  }}
/>
```

## ⚡ Interactions

### Hover States
- Border color intensifies
- Box shadow appears: `hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- Line expands: `group-hover:w-16`
- Colors invert: `hover:bg-black hover:text-white`

### Transitions
- Always smooth: `transition-all duration-300`

## 📐 Layout

### Section Structure
```jsx
<section className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
  {/* Dot pattern background */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Spacing
- Section: `py-16 sm:py-20 md:py-24`
- Large gaps: `mb-12 sm:mb-16 md:mb-20`
- Grid gaps: `gap-6 sm:gap-8 lg:gap-12`

### Responsive Grids
```jsx
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
```

## ❌ Never Use

- Rounded corners on outer borders
- Accent colors (turquoise, blue, etc.)
- 1px borders
- Soft shadows
- Gradients
- Small typography
- Thin font weights for headings

## ✅ Standard Card Pattern

```jsx
<div className="group relative border-2 border-black dark:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
  {/* Number badge */}
  <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
    01
  </div>
  
  <div className="p-6 sm:p-8">
    <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 pr-12">
      Title
    </h3>
    <p className="text-sm sm:text-base leading-relaxed mb-6">
      Description text
    </p>
    
    {/* Expanding line */}
    <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
  </div>
</div>
```

## 🚀 Copy-Paste Prompt for Future Requests

> "Apply the GNI Brutalist Design System: 2px borders, pure black/white palette, sharp corners, bold typography (up to 7xl font-black), monospace labels (font-mono uppercase tracking-widest), number badges (01, 02...), expanding line hover effects (w-8 to w-16), inverted color hover states, dot pattern backgrounds, 2px section separators, centered divider text, generous spacing (py-16 sm:py-20 md:py-24), high contrast, hard box shadows (shadow-[8px_8px_0px_0px]), and strong geometric design. NO rounded outer corners, NO accent colors, NO 1px borders, NO soft shadows."
