# 🤖 LLM Agent Onboarding Guide

## 📋 Quick Start for New Agents

**Project**: TonyTony - Global Nexus Institute Website  
**Framework**: Gatsby (React + GraphQL)  
**Styling**: Tailwind CSS + Custom Brutalist Design System  
**Location**: `/Users/ehsan/Desktop/TonyTony`

---

## 🎯 What You Need to Know

### 1. Project Has a Complete Design System

This project uses a **Tailwind CSS Layer-based Design System** called the **Brutalist Design System**.

**Important**: Do NOT write inline utility classes for common patterns. Use the design system classes instead.

---

## 📁 Project Structure

```
/Users/ehsan/Desktop/TonyTony/
├── src/
│   ├── components/
│   │   ├── sections/          # Main page sections (YOUR PRIMARY FOCUS)
│   │   │   ├── HeroSection.js
│   │   │   ├── MissionSection.js
│   │   │   ├── ModelSection.js
│   │   │   ├── InitiativesSection.js
│   │   │   ├── SloganSection.js
│   │   │   ├── AboutUsSection.js
│   │   │   ├── LeadershipSection.js
│   │   │   ├── ContactSection.js
│   │   │   ├── GallerySection.js
│   │   │   └── ExploreSliderSection.js
│   │   └── Layout.js
│   ├── pages/
│   │   ├── index.jsx           # Homepage
│   │   └── loading.js
│   ├── styles/
│   │   └── global.css          # ⭐ DESIGN SYSTEM DEFINITIONS HERE
│   └── hooks/
│       ├── useContent.js
│       └── useMenu.js
├── tailwind.config.js          # Tailwind configuration
└── gatsby-config.js

Documentation Files (READ THESE FIRST):
├── DESIGN_SYSTEM_GUIDE.md            # Complete design system reference
├── BRUTALIST_CLASSES_CHEATSHEET.md   # Quick class reference
├── MIGRATION_COMPLETE.md             # Migration history
├── FONT_CONFIGURATION.md             # Font setup
├── DARK_MODE_FIXES.md                # Dark mode patterns
└── LLM_AGENT_ONBOARDING.md          # This file
```

---

## 🎨 The Design System (CRITICAL)

### Location
All design system classes are defined in: **`src/styles/global.css`**

### Available Classes (22 Total)

#### Layout (3 classes)
```jsx
<section className="brutalist-section">              {/* Standard white section */}
<section className="brutalist-section-inverted">     {/* Dark inverted section */}
<div className="brutalist-container">                {/* Max-width container */}
```

#### Cards (3 classes)
```jsx
<div className="brutalist-card group p-8">           {/* Standard card */}
<div className="brutalist-card-inverted p-8">        {/* Inverted (dark) card */}
<div className="brutalist-card-minimal group p-8">   {/* Minimal border card */}
```

**Important**: Always add `group` manually when using group-hover effects!

#### Typography (5 classes)
```jsx
<h1 className="brutalist-heading">                   {/* Hero/section titles */}
<h3 className="brutalist-card-title">                {/* Card titles */}
<p className="brutalist-subheading">                 {/* Section subtitles */}
<p className="brutalist-body">                       {/* Paragraphs */}
<span className="brutalist-label">                   {/* Small labels/tags */}
```

#### Interactive (4 classes)
```jsx
<div className="brutalist-hover-line">               {/* Bottom border on hover */}
<div className="brutalist-accent-line">              {/* Group-hover expanding line */}
<div className="brutalist-divider">                  {/* Subtle 1px divider */}
<div className="brutalist-divider-bold">             {/* Bold 4px divider */}
```

#### Backgrounds (2 classes)
```jsx
<div className="brutalist-bg-dots">                  {/* Dot grid pattern */}
<div className="brutalist-bg-radial">                {/* Radial gradient */}
```

#### Utilities (5 classes)
```jsx
<div className="brutalist-border-box">               {/* 2px solid border */}
<div className="brutalist-number-badge">             {/* Number badge styling */}
<p className="brutalist-arrow">                      {/* Adds → prefix */}
```

---

## 📖 How to Use the Design System

### ✅ DO THIS (Correct)
```jsx
<section className="brutalist-section text-black dark:text-white">
  <div className="brutalist-container">
    <h2 className="brutalist-heading">Title</h2>
    <p className="brutalist-body">Content</p>
    
    <div className="brutalist-card group p-8">
      <h3 className="brutalist-card-title">Card Title</h3>
      <p className="brutalist-body">Card content</p>
      <div className="brutalist-accent-line"></div>
    </div>
  </div>
</section>
```

### ❌ DON'T DO THIS (Wrong)
```jsx
<!-- Don't write inline utility classes for common patterns -->
<section className="min-h-screen py-16 sm:py-20 md:py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
    <!-- ⬆️ This should be: className="brutalist-heading" -->
```

---

## 🎯 Common Patterns (Copy These)

### 1. Standard Section
```jsx
<section className="brutalist-section text-black dark:text-white">
  <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
  
  <div className="brutalist-container relative">
    {/* Section header */}
    <div className="inline-block mb-6">
      <div className="brutalist-divider-bold mb-4" />
      <span className="brutalist-label">Section Label</span>
    </div>
    
    <h2 className="brutalist-heading mb-6">Section Title</h2>
    <p className="brutalist-subheading">Section subtitle</p>
    
    {/* Content here */}
  </div>
</section>
```

### 2. Card Grid
```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, i) => (
    <article key={i} className="brutalist-card group p-8">
      <div className="brutalist-number-badge absolute top-4 right-4">
        {String(i + 1).padStart(2, '0')}
      </div>
      
      <h3 className="brutalist-card-title">{item.title}</h3>
      <p className="brutalist-body">{item.description}</p>
      
      <div className="pt-4">
        <div className="brutalist-accent-line"></div>
      </div>
    </article>
  ))}
</div>
```

### 3. Bottom Divider with Text
```jsx
<div className="relative pt-8 mt-16 brutalist-border-box border-t-2 border-b-0 border-x-0">
  <div className="text-center">
    <span className="inline-block bg-white dark:bg-black px-6 brutalist-label -mt-3">
      Centered Text
    </span>
  </div>
</div>
```

---

## ⚠️ Critical Rules

### 1. **NEVER Use `font-display`**
```jsx
❌ className="font-display ..."  // This doesn't exist!
✅ className="font-title-bold ..." // Use this for bold headings
✅ className="font-title ..."      // Use this for elegant titles
✅ className="brutalist-heading"   // Or use design system class
```

### 2. **ALWAYS Add `group` Manually**
```jsx
❌ // Don't rely on @apply group (won't work)
✅ className="brutalist-card group p-8"  // Add 'group' manually
```

### 3. **Dark Mode Pattern**
```jsx
// Inverted sections (dark background in light mode)
<section className="brutalist-section-inverted">
  {/* Text is white in light mode, black in dark mode */}
  <div className="brutalist-card-minimal group p-8 text-white dark:text-black">
    {/* Explicit text colors for cards */}
  </div>
</section>

// Standard sections (white background in light mode)
<section className="brutalist-section text-black dark:text-white">
  {/* Explicitly set text colors */}
</section>
```

### 4. **Font Classes**
Available fonts in `tailwind.config.js`:
- `font-title-bold` → Anton SC (bold impact titles)
- `font-title` → Playfair Display SC (elegant titles)
- `font-body` → Nixie One (body text)
- `font-mono` → System monospace (labels)

---

## 🔍 How to Get Context

### Step 1: Read Documentation
```bash
# Read these in order:
cat BRUTALIST_CLASSES_CHEATSHEET.md  # Quick reference
cat DESIGN_SYSTEM_GUIDE.md           # Complete guide
cat FONT_CONFIGURATION.md             # Font info
```

### Step 2: Check Existing Components
```bash
# Look at examples:
cat src/components/sections/ModelSection.js      # Good example
cat src/components/sections/MissionSection.js    # Good example
cat src/components/sections/InitiativesSection.js # Good example
```

### Step 3: Check Design System
```bash
# See all available classes:
cat src/styles/global.css
```

---

## 🚀 Example: Adding a New Component

### User Says: "Add a new Testimonials section"

### Your Response Process:

1. **Check existing patterns**:
   ```bash
   # Look at similar sections
   cat src/components/sections/AboutUsSection.js
   ```

2. **Create following the pattern**:
   ```jsx
   // src/components/sections/TestimonialsSection.js
   import React from 'react';
   
   export const TestimonialsSection = () => {
     return (
       <section className="brutalist-section text-black dark:text-white">
         <div className="brutalist-bg-dots absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
         
         <div className="brutalist-container relative">
           {/* Header */}
           <div className="inline-block mb-6">
             <div className="brutalist-divider-bold mb-4" />
             <span className="brutalist-label">What People Say</span>
           </div>
           
           <h2 className="brutalist-heading mb-6">
             Testimonials
           </h2>
           
           {/* Testimonials Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {testimonials.map((item, i) => (
               <article key={i} className="brutalist-card group p-8">
                 <p className="brutalist-body mb-4">"{item.quote}"</p>
                 <div className="brutalist-divider-bold w-12 mb-4" />
                 <p className="brutalist-label">{item.author}</p>
               </article>
             ))}
           </div>
         </div>
       </section>
     );
   };
   ```

3. **Explain what you did**:
   - Used `brutalist-section` for the container
   - Used `brutalist-card` for testimonial cards
   - Used `brutalist-label` for author names
   - Followed the established pattern from other sections

---

## 🎨 Modifying the Design System

### If User Wants a New Style

**User**: "I want a new button style"

**Your Process**:

1. **Ask clarifying questions**:
   - "Should this be a variant of `brutalist-card-inverted` or something new?"
   - "Will it need hover states?"
   - "Should it work in both light and dark modes?"

2. **Add to `src/styles/global.css`**:
   ```css
   @layer components {
     /* Add to existing @layer block */
     
     /**
      * Primary Button
      * Usage: Call-to-action buttons
      */
     .brutalist-button {
       @apply px-8 py-4
              brutalist-border-box
              bg-black dark:bg-white
              text-white dark:text-black
              brutalist-label
              font-bold
              transition-all duration-300
              hover:bg-white hover:text-black
              dark:hover:bg-black dark:hover:text-white;
     }
   }
   ```

3. **Document it**:
   - Update `BRUTALIST_CLASSES_CHEATSHEET.md`
   - Add example usage

---

## 🐛 Debugging

### Build Errors

#### Error: "font-display class does not exist"
**Fix**: Change to `font-title-bold` or use `brutalist-heading`

#### Error: "@apply should not be used with 'group'"
**Fix**: Remove `group` from CSS, add it manually in JSX:
```jsx
className="brutalist-card group p-8"
```

#### Dark mode colors wrong
**Fix**: Check the color inversions in the class:
- Light mode → dark bg → light text
- Dark mode → light bg → dark text

### Visual Issues

#### Cards look different
**Check**: Are you using the correct card class?
- `brutalist-card` - standard with hover shadow
- `brutalist-card-inverted` - dark background
- `brutalist-card-minimal` - subtle borders

#### Text not showing
**Check**: Did you set explicit text colors for sections?
```jsx
<section className="brutalist-section text-black dark:text-white">
```

---

## 📚 Quick Reference Commands

```bash
# Start dev server
gatsby develop

# Build
npm run build

# Clean cache
gatsby clean

# Check a component
cat src/components/sections/ModelSection.js

# Check design system
cat src/styles/global.css

# Check documentation
ls -la *.md
```

---

## 🎯 Your First Task Checklist

When user asks you to work on this project:

- [ ] Say: "Let me check the project structure and design system"
- [ ] Read: `BRUTALIST_CLASSES_CHEATSHEET.md`
- [ ] Read: `src/styles/global.css` (design system classes)
- [ ] Check: Similar components in `src/components/sections/`
- [ ] Confirm: "I see you have a Brutalist Design System with 22 classes. I'll use those instead of inline utilities."
- [ ] Ask: "Which section would you like me to work on?"
- [ ] Proceed: Follow the established patterns

---

## 💡 Example Conversation

**User**: "I want to add a pricing section"

**You**: 
```
I see your project uses the Brutalist Design System. Let me check the 
existing patterns...

[reads BRUTALIST_CLASSES_CHEATSHEET.md and ModelSection.js]

Great! I'll create a PricingSection following your established patterns:
- Using brutalist-section for the layout
- Using brutalist-card for pricing cards
- Using brutalist-heading for the title
- Following the same structure as MissionSection

Would you like:
1. Cards in a grid (3 pricing tiers)?
2. Dark or light section background?
3. Any special features like a "featured" card?
```

---

## 🎉 You're Ready!

Key takeaways:
1. ✅ Use the design system classes (22 available)
2. ✅ Read the cheatsheet first
3. ✅ Follow existing component patterns
4. ✅ Never use `font-display` (use `font-title-bold`)
5. ✅ Always add `group` manually in JSX
6. ✅ Set explicit text colors for dark mode
7. ✅ Check documentation before asking user

---

**Welcome to the TonyTony project! The design system is already built—just use it!** 🚀
