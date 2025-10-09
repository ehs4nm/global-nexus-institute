# Brutalist Design System - Quick Reference

## 🎴 Cards

```jsx
<!-- Standard Card -->
<div className="brutalist-card p-8">...</div>

<!-- Inverted/Accent Card -->
<div className="brutalist-card-inverted p-8">...</div>

<!-- Minimal/Static Card (add 'group' if you need group-hover) -->
<div className="brutalist-card-minimal group p-8">...</div>
```

**Note:** Add `group` class manually when you need child elements to respond to parent hover (e.g., `group-hover:w-full`).

---

## 📝 Typography

```jsx
<!-- Hero/Section Heading -->
<h1 className="brutalist-heading">Main Title</h1>

<!-- Card Title -->
<h3 className="brutalist-card-title">Card Title</h3>

<!-- Subheading/Intro -->
<p className="brutalist-subheading">Introduction text</p>

<!-- Body Text -->
<p className="brutalist-body">Paragraph content</p>

<!-- Labels/Tags -->
<span className="brutalist-label">Category</span>
```

---

## 📐 Layouts

```jsx
<!-- Standard Section -->
<section className="brutalist-section">
  <div className="brutalist-container">
    {/* Content */}
  </div>
</section>

<!-- Inverted Section (Dark) -->
<section className="brutalist-section-inverted">
  <div className="brutalist-container">
    {/* Content */}
  </div>
</section>
```

---

## 🎨 Interactive

```jsx
<!-- Hover Line (for links) -->
<a className="brutalist-hover-line">Link</a>

<!-- Accent Line (in cards with group) -->
<div className="brutalist-accent-line"></div>

<!-- Dividers -->
<div className="brutalist-divider"></div>
<div className="brutalist-divider-bold"></div>
```

---

## 🌈 Backgrounds

```jsx
<!-- Dot Grid Pattern -->
<div className="brutalist-bg-dots">...</div>

<!-- Radial Gradient -->
<div className="brutalist-bg-radial">...</div>
```

---

## 🔧 Utilities

```jsx
<!-- Border Box -->
<div className="brutalist-border-box">...</div>

<!-- Number Badge -->
<div className="brutalist-number-badge">01</div>

<!-- Arrow Prefix -->
<p className="brutalist-arrow">Next step</p>
```

---

## 🔄 Common Patterns

### Card with Number Badge
```jsx
<article className="brutalist-card group p-8">
  <div className="brutalist-number-badge absolute top-4 right-4">01</div>
  <h3 className="brutalist-card-title">Title</h3>
  <p className="brutalist-body">Description</p>
  <div className="pt-4">
    <div className="brutalist-accent-line"></div>
  </div>
</article>
```

**Note:** The `group` class enables the accent line to expand on card hover.

### Section with Header
```jsx
<section className="brutalist-section">
  <div className="brutalist-container">
    <div className="max-w-4xl mb-16">
      <h2 className="brutalist-heading">Section Title</h2>
      <div className="mt-6 brutalist-divider-bold"></div>
      <p className="mt-8 brutalist-subheading">Section introduction</p>
    </div>
    {/* Main content */}
  </div>
</section>
```

### Card Grid
```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, i) => (
    <article key={i} className="brutalist-card group p-8">
      <h3 className="brutalist-card-title">{item.title}</h3>
      <p className="brutalist-body">{item.description}</p>
    </article>
  ))}
</div>
```

---

## ⚡ Migration Pattern

**Before:**
```jsx
<div className="border-2 border-black dark:border-white bg-white dark:bg-black 
     hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
  <h3 className="font-display text-2xl font-bold">Title</h3>
  <p className="text-base text-gray-700 dark:text-gray-300">Text</p>
</div>
```

**After:**
```jsx
<div className="brutalist-card group p-8">
  <h3 className="brutalist-card-title">Title</h3>
  <p className="brutalist-body">Text</p>
</div>
```

**Result:** Cleaner, more maintainable, easier to switch design systems!
