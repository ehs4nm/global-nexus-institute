# GNI Brutalist Design System Style Guide

## Core Design Principles

### 1. **Pure Black & White Palette**
- **Primary Colors**: Pure black (#000000) and pure white (#FFFFFF)
- **NO accent colors** (no turquoise, no colored highlights)
- **Inverted color scheme**: Dark mode inverts all colors for maximum impact
- **High contrast**: Always maintain strong black/white contrast for readability

### 2. **Brutalist Border Treatment**
- **Thickness**: Always use **2px borders** (never 1px)
- **Style**: `border-2 border-black dark:border-white`
- **Sharp Corners**: NO rounded corners on outer borders (`rounded-0`)
- **Inner elements**: Can have subtle rounding if needed, but prefer sharp geometry

### 3. **Bold Typography Hierarchy**
```css
/* Headings */
- H1: text-4xl sm:text-5xl md:text-6xl lg:text-7xl (up to 7xl for hero)
- H2: text-3xl sm:text-4xl md:text-5xl
- H3: text-2xl sm:text-3xl
- H4: text-xl sm:text-2xl

/* Weights */
- Primary headings: font-black (900)
- Secondary headings: font-bold (700)
- Body text: font-normal (400)

/* Font Families */
- Headings: font-display
- Metadata/Labels: font-mono
- Body: font-body

/* Leading */
- Headings: leading-[0.95] or leading-tight
- Body: leading-relaxed
```

### 4. **Monospace Typography Usage**
Apply `font-mono` to:
- Number badges (01, 02, 03, etc.)
- Taglines and captions
- Copyright and metadata
- Section labels
- Navigation items (optional)

Always pair with:
- `uppercase`
- `tracking-widest` or `tracking-wider`
- `text-xs` or `text-sm`

### 5. **Number Badges & Sequential Numbering**
```jsx
<div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
  01
</div>
```
- Position: `absolute top-0 right-0`
- Format: Zero-padded (01, 02, 03... not 1, 2, 3)
- Style: Inverted colors with borders on left and bottom
- Font: Monospace, bold, small size

### 6. **Card & Container Styling**
```jsx
// Standard Card
<div className="border-2 border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8">
  {/* content */}
</div>

// Inverted Card (for emphasis)
<div className="border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black p-6 sm:p-8">
  {/* content */}
</div>
```

### 7. **Hover States & Interactions**
```css
/* Border hover - make thicker or add shadow */
hover:border-black dark:hover:border-white
hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]

/* Expanding line decoration */
<div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />

/* Color inversion on buttons/links */
hover:bg-black dark:hover:bg-white
hover:text-white dark:hover:text-black

/* Smooth transitions */
transition-all duration-300
```

### 8. **Spacing & Layout**
```css
/* Section padding */
py-16 sm:py-20 md:py-24

/* Container */
mx-auto max-w-7xl px-4 sm:px-6 lg:px-8

/* Content spacing */
mb-12 sm:mb-16 md:mb-20  /* Large gaps between sections */
mb-8 sm:mb-12             /* Medium gaps */
mb-6                      /* Standard gaps */

/* Grid gaps */
gap-6 sm:gap-8 lg:gap-12
```

### 9. **Decorative Elements**

#### Divider Lines
```jsx
// Top accent line
<div className="h-1 w-16 bg-black dark:bg-white mb-4" />

// Bottom expanding line (interactive)
<div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
```

#### Section Separators
```jsx
// Top border on sections
<section className="border-t-2 border-black dark:border-white">

// Bottom divider with centered text
<div className="relative pt-8 border-t-2 border-black dark:border-white">
  <div className="text-center">
    <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
      Centered Label Text
    </span>
  </div>
</div>
```

#### Dot Pattern Background
```jsx
<div 
  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
  style={{
    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
    backgroundSize: '24px 24px'
  }}
/>
```

### 10. **Focus States & Accessibility**
```css
/* Focus rings */
focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
focus:ring-offset-2

/* Touch targets */
touch-manipulation
min-h-[48px]  /* Minimum touch target size */
```

### 11. **Grid Layouts**
```jsx
// Responsive grids
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6

// Common breakpoints:
// - Mobile: grid-cols-1
// - Tablet: sm:grid-cols-2
// - Desktop: lg:grid-cols-3 or lg:grid-cols-4
```

### 12. **Button Styling**
```jsx
// Primary button (inverted on hover)
<button className="border-2 border-black dark:border-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
  Button Text
</button>

// Icon buttons
<button className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-black dark:border-white flex items-center justify-center transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
  {/* icon */}
</button>
```

### 13. **Logo & Brand Treatment**
```jsx
// Logo with border frame
<div className="h-10 w-10 sm:h-12 sm:h-12 border-2 border-black dark:border-white">
  <img src="/logo.png" alt="Logo" />
</div>

// Brand name (can be split into two lines)
<div className="font-display text-lg sm:text-xl font-bold">
  <div>Global Nexus</div>
  <div>Institute</div>
</div>
```

### 14. **Navigation Styling**
```jsx
// Nav links
<a className="font-mono uppercase tracking-widest text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-4 py-2 transition-all duration-300">
  LINK TEXT
</a>

// Animated underline effect
<a className="relative group">
  Link Text
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
</a>
```

## Component Checklist

When styling any component, ensure:

- [ ] Uses 2px borders (not 1px)
- [ ] Pure black/white palette (no accent colors)
- [ ] Sharp corners on outer borders
- [ ] Bold typography (font-black for headings)
- [ ] Monospace font for metadata/labels
- [ ] Number badges if showing sequential items
- [ ] Expanding line decoration on hover
- [ ] Inverted hover states (black↔white)
- [ ] High contrast maintained
- [ ] Generous spacing and breathing room
- [ ] Dot pattern background if applicable
- [ ] 2px top border for section separation
- [ ] Decorative divider lines with centered text
- [ ] Smooth transitions (duration-300)
- [ ] Proper focus states for accessibility
- [ ] Touch-friendly sizes on mobile

## Mobile Optimization

Always include responsive variants:
```css
text-4xl sm:text-5xl md:text-6xl lg:text-7xl
px-4 sm:px-6 lg:px-8
py-12 sm:py-16 md:py-20
gap-4 sm:gap-6 lg:gap-8
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
```

## What to AVOID

❌ Rounded corners on outer borders
❌ Accent colors (turquoise, blue, etc.)
❌ 1px borders (always use 2px)
❌ Soft shadows (use hard box shadows: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`)
❌ Gradients
❌ Opacity on primary elements (only for backgrounds)
❌ Small, timid typography
❌ Thin font weights for headings
❌ Insufficient spacing

## Example Section Structure

```jsx
export const ExampleSection = () => {
  return (
    <section className="relative min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black text-black dark:text-white border-t-2 border-black dark:border-white">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-block mb-6">
          <div className="h-1 w-16 bg-black dark:bg-white mb-4" />
          <span className="font-mono text-xs uppercase tracking-widest">Section Label</span>
        </div>
        
        {/* Main heading */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8 sm:mb-12">
          Section Title
        </h2>
        
        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative border-2 border-black dark:border-white bg-white dark:bg-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              {/* Number badge */}
              <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm font-bold px-3 py-1 border-l-2 border-b-2 border-black dark:border-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 pr-12">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {/* Expanding line */}
                <div className="h-1 w-8 bg-black dark:bg-white transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom divider */}
        <div className="relative pt-8 mt-16 border-t-2 border-black dark:border-white">
          <div className="text-center">
            <span className="inline-block bg-white dark:bg-black px-6 font-mono text-xs uppercase tracking-widest -mt-3">
              Section Footer Text
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## Quick Reference Prompt

**Use this exact prompt for future styling requests:**

> "Apply the GNI Brutalist Design System: 2px borders, pure black/white palette, sharp corners, bold typography (up to 7xl), monospace labels, number badges (01, 02...), expanding line hover effects, inverted color hover states, dot pattern backgrounds, 2px section separators, centered divider text, generous spacing, high contrast, and strong geometric design. NO rounded outer corners, NO accent colors, NO soft shadows."
