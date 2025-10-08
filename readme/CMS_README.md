# GNI Content Management System (CMS)

A simple, clean, and modern CMS for managing your GNI website content during development.

## Features

- ✅ **Clean UI** - Modern, minimalistic interface with TailwindCSS
- ✅ **Easy to Use** - Simple tabs for different content sections
- ✅ **Development Only** - Admin panel only accessible in development mode
- ✅ **Browser Storage** - Changes saved to localStorage for quick iteration
- ✅ **Export/Import** - Export your changes to `content.json` file
- ✅ **No Backend Required** - Pure frontend solution

## Accessing the Admin Panel

1. **Start the development server:**
   ```bash
   npm run develop
   ```

2. **Open the admin panel:**
   Navigate to `http://localhost:8000/admin` (or whatever port Gatsby is running on)

3. The admin panel will **NOT** be accessible in production builds.

## How to Use

### 1. Edit Content

The admin panel has 5 main sections:

- **🎬 Hero Section** - Edit the main hero banner (tagline, title, subtitle, video, poster image)
- **🎯 Mission** - Edit mission statement, paragraphs, and cards
- **🚀 Initiatives** - Manage your project initiatives
- **👥 Leadership** - Add, edit, or remove team members
- **⚙️ Site Info** - Update site metadata (title, description)

### 2. Save Changes

Click the **💾 Save Changes** button in the top right to save your edits to browser localStorage.

### 3. Export Content

When you're happy with your changes:

1. Click **📥 Export JSON** to download the `content.json` file
2. Replace the existing `src/data/content.json` with your exported file
3. Rebuild Gatsby to see changes in production

### 4. Build for Production

After updating `content.json`:

```bash
npm run build
```

The admin panel will not be included in the production build.

## Content Structure

All content is stored in `src/data/content.json`:

```json
{
  "hero": { ... },
  "mission": { ... },
  "initiatives": { ... },
  "leadership": [ ... ],
  "siteMetadata": { ... }
}
```

## Managing Images

Images are stored in the `static/assets` folder:

- **Leaders**: `static/assets/leaders/`
- **General images**: `static/assets/images/`
- **Videos**: `static/assets/videos/`

To add new images:

1. Place image files in the appropriate folder
2. Reference them in the admin panel using the path format: `/assets/leaders/name.jpg`

## Workflow

### Standard Workflow:
1. Edit content in admin panel → Save to localStorage
2. Test and preview changes
3. Export JSON when ready
4. Replace `src/data/content.json`
5. Rebuild and deploy

### Quick Iteration:
- Changes in localStorage persist across page reloads during development
- No need to export until you're ready to build for production

## Reset to Original

Click the **Reset** button to discard all localStorage changes and revert to the original `content.json` file.

## Tips

- 💡 Changes save to browser storage
- 💡 Export to update content.json
- 💡 Rebuild Gatsby to see changes in production
- 💡 Admin panel is not in production builds

## Troubleshooting

**Admin panel shows "only available in development mode"**
- Make sure you're running `npm run develop` (not `npm run build` or `npm run serve`)

**Changes not appearing on the website**
- Make sure you clicked "Save Changes" in the admin panel
- For production: Export JSON, replace `content.json`, and rebuild

**Lost my changes**
- Changes are saved in browser localStorage
- If you cleared browser data, you'll need to redo your edits
- Always export your content before clearing browser data!

## Architecture

The CMS uses a simple, clean architecture:

- **Data Layer**: `src/data/content.json` (source of truth)
- **Hook**: `src/hooks/useContent.js` (loads data from localStorage or JSON)
- **Admin**: `src/pages/admin/index.js` (CMS interface, dev-only)
- **Components**: Updated to use `useContent()` hook

This keeps the implementation minimal and maintainable!
