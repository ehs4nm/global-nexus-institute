# Important: Group Class Usage

## ⚠️ Tailwind Limitation

The `group` utility **cannot** be used with `@apply` in Tailwind CSS. This is a Tailwind design decision because `group` is a state modifier that needs to be applied directly to HTML elements.

## ✅ Correct Pattern

### Do This:
```jsx
<div className="brutalist-card group p-8">
  <div className="brutalist-accent-line"></div>
</div>
```

The `group` class is added **manually** in your JSX alongside the design system class.

### Don't Do This:
```css
.brutalist-card {
  @apply ... group;  /* ❌ This will cause an error */
}
```

---

## 🎯 When to Use `group`

Add the `group` class to your card when you need **child elements** to respond to the **parent's hover state**.

### Examples:

#### Accent Line that Expands on Card Hover
```jsx
<article className="brutalist-card-minimal group p-8">
  <h3 className="brutalist-card-title">Title</h3>
  <div className="brutalist-accent-line"></div> {/* Uses group-hover:w-full */}
</article>
```

#### Number Badge that Changes Color on Card Hover
```jsx
<article className="brutalist-card group p-8">
  <div className="brutalist-number-badge absolute top-4 right-4">01</div>
  {/* Badge uses group-hover:text-black/50 */}
</article>
```

---

## 📋 Updated Class Definitions

All card classes in `global.css` now have this note:

```css
/**
 * Standard Brutalist Card
 * Usage: Primary content cards with hover effects
 * Note: Add 'group' class manually in JSX when needed
 */
.brutalist-card {
  @apply relative 
         border-2 border-black dark:border-white 
         bg-white dark:bg-black 
         transition-all duration-300;
         /* NO group here */
}
```

---

## 🔧 Migration Pattern

When converting old components:

**Before:**
```jsx
<div className="group relative border-2 ...">
  <div className="group-hover:w-full">Line</div>
</div>
```

**After:**
```jsx
<div className="brutalist-card group p-8">
  <div className="brutalist-accent-line"></div>
</div>
```

Keep the `group` class, but move it to sit alongside your design system class.

---

## ✅ Build Verification

The build now completes successfully with no warnings:
```bash
npm run build
# ✅ No "@apply should not be used with 'group'" errors
```

---

## 📚 Why This Matters

This approach gives you **flexibility**:
- Cards that don't need group hover → No `group` class needed
- Cards with interactive children → Add `group` manually
- Keeps the design system classes clean and reusable
- Follows Tailwind best practices

---

**Bottom Line:** Always add `group` manually in your JSX when you need it. Don't try to include it in your `@apply` directives.
