# Font Configuration Reference

## 📝 Available Font Classes

Your Tailwind configuration defines these custom font families:

### Primary Fonts

| Class | Font Family | Usage | Style |
|-------|-------------|-------|-------|
| `font-title` | Playfair Display SC | Main titles, hero headings | Serif, elegant |
| `font-title-bold` | Anton SC | Bold/impact titles, large headings | Sans-serif, bold |
| `font-body` | Nixie One | Paragraphs, body text | Sans-serif, readable |

### Fallback Fonts

| Class | Font Family | Usage |
|-------|-------------|-------|
| `font-sans` | Nixie One + system fallbacks | Body text alternative |
| `font-serif` | Playfair Display SC + Georgia | Serif text alternative |

---

## 🎨 Brutalist Design System Font Mapping

The design system classes use these fonts:

```css
/* Hero/Section Headings - Bold and impactful */
.brutalist-heading {
  font-family: "Anton SC" (font-title-bold)
}

/* Card Titles - Elegant and distinguished */
.brutalist-card-title {
  font-family: "Playfair Display SC" (font-title)
}

/* Body Text - Clean and readable */
.brutalist-body {
  font-family: Inherits from parent (usually font-body)
}

/* Labels - Monospace for technical feel */
.brutalist-label {
  font-family: font-mono (system monospace)
}

/* Subheading - Same as body */
.brutalist-subheading {
  font-family: Inherits from parent
}
```

---

## ✅ Correct Usage in Components

### Example: Section with Mixed Fonts

```jsx
<section className="font-body"> {/* Base font for section */}
  
  <h1 className="brutalist-heading">
    {/* Uses font-title-bold (Anton SC) */}
    Main Title
  </h1>
  
  <p className="brutalist-subheading">
    {/* Uses font-body (Nixie One) from parent */}
    Introduction text
  </p>
  
  <div className="brutalist-card group p-8">
    <h3 className="brutalist-card-title">
      {/* Uses font-title (Playfair Display SC) */}
      Card Title
    </h3>
    
    <p className="brutalist-body">
      {/* Uses font-body (Nixie One) */}
      Description text
    </p>
    
    <span className="brutalist-label">
      {/* Uses font-mono (system monospace) */}
      CATEGORY
    </span>
  </div>
</section>
```

---

## 🔧 If You Need to Change Fonts

### Update Tailwind Config

Edit `tailwind.config.js`:

```js
fontFamily: {
  'display': ['YourDisplayFont', 'serif'], // Add new display font
  'title': ['YourTitleFont', 'serif'],
  'title-bold': ['YourBoldFont', 'sans-serif'],
  'body': ['YourBodyFont', 'sans-serif'],
}
```

### Update Design System

Then update `src/styles/global.css`:

```css
.brutalist-heading {
  @apply font-display  /* Use your new font class */
         text-4xl ...;
}
```

---

## 📚 Current Font Stack

Based on your `tailwind.config.js`:

1. **Anton SC** - Bold, geometric sans-serif for impact titles
2. **Playfair Display SC** - Classic serif for elegant titles  
3. **Nixie One** - Clean sans-serif for body text
4. **System Mono** - For labels and technical text

---

## ⚠️ Important Notes

1. **Never use `font-display`** - This class doesn't exist in your config
2. **Use `font-title-bold`** for main headings
3. **Use `font-title`** for card titles
4. **Use `font-body`** or inherit for body text
5. **Use `font-mono`** for labels

---

## ✅ Quick Reference

When creating new design system classes:

```css
/* ✅ CORRECT */
.my-heading {
  @apply font-title-bold text-5xl font-black;
}

/* ❌ WRONG */
.my-heading {
  @apply font-display text-5xl font-black;  /* font-display doesn't exist! */
}
```

---

**Remember:** Always check `tailwind.config.js` for available font classes before using them in `@apply` directives!
