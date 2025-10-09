# GNI Design System Migration Guide

## Overview

This guide explains how to switch between design systems (e.g., Brutalist → Modern/Smooth) using Tailwind CSS Layers. All design-related classes are centralized in `src/styles/global.css` for easy switching.

---

## 🎨 Current Design System: **Brutalist**

The entire Brutalist aesthetic is defined in `src/styles/global.css` under the `@layer components` block.

### Architecture Benefits

✅ **Single Source of Truth**: All design tokens in one file  
✅ **Easy Switching**: Comment/uncomment entire layers  
✅ **Maintainable**: Change once, update everywhere  
✅ **Type-Safe**: Use consistent class names across components  

---

## 📦 Available Brutalist Classes

### Card Patterns

| Class | Usage | Key Features |
|-------|-------|--------------||
| `.brutalist-card` | Primary content cards | 2px border, shadow on hover |
| `.brutalist-card-inverted` | Accent/highlight cards | Inverted colors (black bg), bold contrast |
| `.brutalist-card-minimal` | Static information cards | Subtle border, minimal hover effect |

**Important:** Add `group` class manually when using group-hover utilities:

**Example:**
```jsx
<div className="brutalist-card group p-8">
  <h3 className="brutalist-card-title">Title</h3>
  <p className="brutalist-body">Description</p>
  <div className="brutalist-accent-line"></div> {/* Responds to group hover */}
</div>
```

---

### Typography System

| Class | Usage | Result |
|-------|-------|--------|
| `.brutalist-heading` | Hero/Section titles | 7xl, font-black, tight tracking |
| `.brutalist-card-title` | Card titles | 2xl-3xl, bold |
| `.brutalist-label` | Labels/metadata | Uppercase, mono, tracking-widest |
| `.brutalist-body` | Paragraphs | Relaxed leading, responsive text |
| `.brutalist-subheading` | Intro text | 2xl, relaxed, gray tone |

**Example:**
```jsx
<h2 className="brutalist-heading">Main Title</h2>
<p className="brutalist-subheading">Subtitle or intro</p>
<span className="brutalist-label">Category</span>
```

---

### Section Layouts

| Class | Usage | Key Features |
|-------|-------|--------------|
| `.brutalist-section` | Standard sections | Full height, white bg, top border |
| `.brutalist-section-inverted` | Dark sections | Black bg, white text, inverted |
| `.brutalist-container` | Max-width wrapper | Consistent padding/width |

**Example:**
```jsx
<section className="brutalist-section">
  <div className="brutalist-container">
    {/* Content */}
  </div>
</section>
```

---

### Interactive Elements

| Class | Usage | Effect |
|-------|-------|--------|
| `.brutalist-hover-line` | Links/buttons | Bottom border grows on hover |
| `.brutalist-accent-line` | Card footers | Line expands with group hover |
| `.brutalist-divider` | Horizontal rules | Subtle 1px line |
| `.brutalist-divider-bold` | Strong breaks | 16px × 4px bold line |

**Example:**
```jsx
<a className="brutalist-hover-line">Hover me</a>
<div className="brutalist-divider-bold"></div>
```

---

### Backgrounds & Patterns

| Class | Usage | Effect |
|-------|-------|--------|
| `.brutalist-bg-dots` | Section texture | Subtle dot grid pattern |
| `.brutalist-bg-radial` | Hero/loading screens | Radial gradient overlay |

**Example:**
```jsx
<div className="brutalist-bg-dots min-h-screen">
  {/* Content with textured background */}
</div>
```

---

### Utility Classes

| Class | Usage | Effect |
|-------|-------|--------|
| `.brutalist-border-box` | Decorative accent | 2px solid border |
| `.brutalist-number-badge` | Step indicators | Small mono number |
| `.brutalist-arrow` | Directional text | Adds `→` prefix |

**Example:**
```jsx
<div className="brutalist-number-badge">01</div>
<p className="brutalist-arrow">Next step</p>
```

---

## 🔄 How to Switch Design Systems

### Step 1: Test the Current Implementation

Run your development server to see the Brutalist system in action:

```bash
npm run develop
# or
gatsby develop
```

Visit `http://localhost:8000` and navigate to the Model section to see the refactored component.

---

### Step 2: Create a New Design System Layer

When you're ready to switch, add a new layer **below** the Brutalist layer in `src/styles/global.css`:

```css
/* Keep the Brutalist layer commented out for now */
/*
@layer components {
  .brutalist-card { ... }
}
*/

/* New Modern/Smooth Design System */
@layer components {
  .modern-card {
    @apply relative 
           rounded-2xl 
           bg-gradient-to-br from-white to-gray-50 
           dark:from-gray-900 dark:to-black
           shadow-lg hover:shadow-2xl
           transition-all duration-500;
  }

  .modern-heading {
    @apply font-sans 
           text-5xl md:text-6xl 
           font-light 
           tracking-normal
           bg-gradient-to-r from-gray-900 to-gray-600 
           dark:from-white dark:to-gray-300
           bg-clip-text text-transparent;
  }

  .modern-body {
    @apply text-base 
           leading-relaxed 
           text-gray-600 dark:text-gray-400
           font-normal;
  }

  /* Add more modern classes... */
}
```

---

### Step 3: Update Components

Change class names in your components from `brutalist-*` to `modern-*`:

**Before (Brutalist):**
```jsx path=/Users/ehsan/Desktop/TonyTony/src/components/sections/ModelSection.js start=55
<article className="brutalist-card-minimal p-8">
  <h3 className="brutalist-card-title">Title</h3>
  <p className="brutalist-body">Description</p>
</article>
```

**After (Modern):**
```jsx path=null start=null
<article className="modern-card p-8">
  <h3 className="modern-heading-small">Title</h3>
  <p className="modern-body">Description</p>
</article>
```

---

### Step 4: Toggle Between Systems

To switch back to Brutalist:

1. **Uncomment** the Brutalist `@layer` block in `global.css`
2. **Comment out** the Modern `@layer` block
3. **Revert** component class names to `brutalist-*`

This is why maintaining the layer architecture is powerful—you can switch entire design systems by toggling comments in a single file.

---

## 📝 Migration Checklist

Use this checklist when switching one component at a time:

- [ ] Identify all utility classes in the component
- [ ] Map them to appropriate design system classes
- [ ] Update the component file
- [ ] Test in browser (check light/dark modes)
- [ ] Verify responsive behavior
- [ ] Check hover/interaction states
- [ ] Commit changes
- [ ] Move to next component

---

## 🧪 Testing Approach

As per your request, **test one component at a time**:

1. **Start with ModelSection** (already refactored as example)
2. **Get approval** from stakeholders
3. **Move to next section** (e.g., HeroSection, MissionSection)
4. **Repeat** until all components use the layer system

### Before/After Comparison

| Metric | Before | After |
|--------|--------|-------|
| Lines per component | ~50 utility classes | ~10 semantic classes |
| Design change time | Update 10+ files | Update 1 file (global.css) |
| Consistency | Manual per component | Automatic via classes |
| Switchability | None | Full system swap |

---

## 🎯 Component Priority for Migration

Suggested order (from most visible to least):

1. ✅ **ModelSection** (done - example)
2. **HeroSection** (homepage first impression)
3. **MissionSection** (core content)
4. **InitiativesSection** (card-heavy)
5. **LeadershipSection** (card-heavy)
6. **GallerySection** (visual impact)
7. **AboutUsSection** (text-heavy)
8. **ContactSection** (forms)
9. **SloganSection** (minimal)
10. **ExploreSliderSection** (custom interactions)

---

## 💡 Pro Tips

### Keep Specificity When Needed

You can still add one-off Tailwind classes alongside design system classes:

```jsx path=null start=null
<div className="brutalist-card p-8 md:p-12 lg:col-span-2">
  {/* brutalist-card handles design, other classes handle layout */}
</div>
```

### Use CSS Variables for Consistency

For values used across multiple classes, define them in `:root`:

```css path=null start=null
@layer base {
  :root {
    --brutalist-border-width: 2px;
    --brutalist-shadow-offset: 8px;
    --brutalist-transition: 300ms;
  }
}

@layer components {
  .brutalist-card {
    border-width: var(--brutalist-border-width);
    transition: all var(--brutalist-transition);
  }
}
```

### Document Design Tokens

Keep a reference of your design decisions:

```css path=null start=null
/* 
 * GNI Brutalist Design Tokens:
 * 
 * Colors:
 *   - Primary: Pure black (#000) / white (#fff)
 *   - Text: gray-300/400 for secondary
 *   - Borders: 2px solid
 * 
 * Typography:
 *   - Display: font-display (custom font)
 *   - Labels: font-mono
 *   - Body: font-sans (default)
 * 
 * Spacing:
 *   - Section padding: py-16 sm:py-20 md:py-24
 *   - Card padding: p-8
 */
```

---

## 🚀 Next Steps

1. **Run the development server** to see the refactored ModelSection
2. **Review the changes** with your team
3. **Get approval** on the approach
4. **Choose the next component** to migrate
5. **Repeat** until all components use the layer system

---

## 📚 Resources

- [Tailwind CSS Layers Documentation](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)
- [Design Systems in Tailwind](https://tailwindcss.com/docs/reusing-styles)
- [Component Library Patterns](https://tailwindcss.com/docs/adding-custom-styles#writing-plugins)

---

## 🆘 Need Help?

If you encounter issues during migration:

1. Check that all classes are defined in `global.css`
2. Verify Tailwind is processing the CSS file
3. Clear Gatsby cache: `gatsby clean`
4. Restart development server

---

**Remember**: The beauty of this approach is that you can switch between design systems at any time by commenting/uncommenting the `@layer` block in `global.css`. This is the heart of maintainability in design systems!
