# Gallery Feature Documentation

## Overview

The Gallery feature allows you to create expandable gallery items on the homepage that link to dedicated detail pages. Each gallery item has:

- A label and image shown in the gallery section
- A unique URL slug for the detail page
- Full page content with hero image, title, subtitle, and multiple content sections

## How It Works

### 1. Gallery Section (Homepage)

The gallery displays as expandable panels:
- Hover over any panel to expand it
- Click to navigate to the detail page
- Located at `/` with anchor `#gallery`

### 2. Detail Pages

Each gallery item has its own page at `/insights/{slug}`:
- Hero section with image and title
- Multiple content sections (customizable)
- Back button to return to gallery

## Using the Admin Panel

### Access Gallery Editor

1. Navigate to `/admin`
2. Click the **🖼️ Gallery** tab

### Edit Gallery Header

At the top of the Gallery editor:
- **Title**: Main heading for the gallery section
- **Subtitle**: Description text below the title

### Manage Gallery Items

#### Add New Item

1. Click **+ Add Gallery Item** button
2. Fill in the basic information:
   - **Label**: Display name in gallery (e.g., "Energy Systems")
   - **Slug**: URL-friendly identifier (e.g., "energy-systems")
   - **Gallery Image**: Path to the thumbnail image

3. Configure the detail page content:
   - **Page Title**: Main heading on the detail page
   - **Page Subtitle**: Subheading on the detail page  
   - **Hero Image**: Large image at the top of the page
   - **Content Sections**: Add multiple sections with headings and content

#### Edit Existing Item

Simply update any field in the form and click **Save Changes**

#### Remove Item

Click the **Remove** button next to any gallery item

### Content Sections

Each gallery item can have multiple content sections:

1. **Add Section**: Click **+ Add Section** within a gallery item
2. **Edit Section**: 
   - **Heading**: Section title (e.g., "Overview")
   - **Content**: Section body text
3. **Remove Section**: Click **Remove** next to any section

## Data Structure

```json
{
  "gallery": {
    "title": "Signals from the Nexus.",
    "subtitle": "Hover to reveal the full frame...",
    "items": [
      {
        "id": "unique-id",
        "label": "Energy Systems",
        "img": "/assets/2.jpg",
        "slug": "energy-systems",
        "pageContent": {
          "title": "Energy Systems",
          "subtitle": "Understanding global energy transitions",
          "heroImage": "/assets/2.jpg",
          "sections": [
            {
              "heading": "Overview",
              "content": "Energy systems form the backbone..."
            },
            {
              "heading": "Key Focus Areas",
              "content": "We analyze energy transition pathways..."
            }
          ]
        }
      }
    ]
  }
}
```

## URL Structure

- **Homepage Gallery**: `http://yourdomain.com/#gallery`
- **Detail Pages**: `http://yourdomain.com/insights/{slug}`

Examples:
- `http://yourdomain.com/insights/energy-systems`
- `http://yourdomain.com/insights/geopolitics`
- `http://yourdomain.com/insights/public-health`

## Workflow

### Development Workflow

1. **Edit in Admin Panel**
   - Add/edit gallery items
   - Configure page content
   - Click "Save Changes"

2. **Preview**
   - Visit homepage to see gallery updates
   - Click gallery items to preview detail pages

3. **Export When Ready**
   - Click "Export JSON"
   - Replace `src/data/content.json`

4. **Rebuild**
   - Run `gatsby clean` (important!)
   - Run `gatsby develop` or `gatsby build`
   - Dynamic pages will be regenerated

### Production Workflow

```bash
# 1. Edit content in admin panel
npm run develop
# Visit /admin, make changes, export JSON

# 2. Replace content.json
mv ~/Downloads/content.json src/data/content.json

# 3. Clean and rebuild (required for new pages)
npm run clean
npm run build

# 4. Deploy
# Upload the public/ folder or deploy via your service
```

## Important Notes

### Slugs Must Be Unique

Each gallery item must have a unique slug:
- ✅ Good: `energy-systems`, `public-health-2024`
- ❌ Bad: Using the same slug for multiple items

### Rebuilding Required

When you add/remove gallery items or change slugs:
1. **Always run** `gatsby clean` first
2. Then rebuild with `gatsby develop` or `gatsby build`

This ensures Gatsby regenerates all dynamic pages correctly.

### Image Paths

Images should be placed in the `static/assets/` folder:
- Gallery thumbnails: `static/assets/images/`
- Hero images: `static/assets/images/`

Reference them as: `/assets/images/filename.jpg`

## Customization

### Change URL Pattern

Edit `gatsby-node.js`:
```javascript
// Current: /insights/{slug}
path: `/insights/${item.slug}`,

// Change to: /topics/{slug}
path: `/topics/${item.slug}`,
```

Remember to also update the Gallery link in `GallerySection.js`

### Customize Detail Page Template

Edit `src/templates/gallery-item.js`:
- Modify layout and styling
- Add more fields from pageContent
- Change section rendering

### Add More Fields

1. Update data structure in `content.json`
2. Add form fields in admin panel (`GalleryEditor` component)
3. Display new fields in template (`gallery-item.js`)

## Troubleshooting

**Gallery items not showing**
- Check that `content.gallery.items` has items
- Make sure you clicked "Save Changes" in admin
- Verify images exist at the specified paths

**Detail pages showing 404**
- Run `gatsby clean` then rebuild
- Check that slugs are URL-safe (no spaces, special characters)
- Verify `gatsby-node.js` exists and is correct

**Changes not appearing**
- For localhost edits: Save in admin panel, refresh page
- For production: Export JSON, replace file, clean + rebuild

**Images not loading**
- Images must be in `static/assets/` folder
- Use absolute paths starting with `/assets/`
- Check file names match exactly (case-sensitive)

## Tips

- **Keep slugs simple**: Use lowercase, hyphens, no spaces
- **Write clear labels**: They appear on the gallery cards
- **Add 2-4 content sections**: Keeps pages digestible
- **Use high-quality images**: Gallery effect looks best with good visuals
- **Test links**: Click through gallery items to verify pages work

## Example: Adding a New Gallery Item

1. Go to `/admin` → Gallery tab
2. Click **+ Add Gallery Item**
3. Fill in:
   - Label: "Climate Resilience"
   - Slug: "climate-resilience"
   - Gallery Image: "/assets/images/climate.jpg"
   - Page Title: "Climate Resilience"
   - Page Subtitle: "Building adaptive capacity for climate change"
   - Hero Image: "/assets/images/climate-hero.jpg"
4. Add sections:
   - Section 1: "The Challenge" + content
   - Section 2: "Our Approach" + content
5. Click **Save Changes**
6. Export JSON and rebuild

Done! Your new item appears in the gallery and has its own page at `/insights/climate-resilience`
