# Quick Start Guide - GNI CMS

## 🚀 Get Started in 3 Steps

### Step 1: Start Development Server
```bash
npm run develop
```

### Step 2: Open Admin Panel
Navigate to: **`http://localhost:8000/admin`**

### Step 3: Edit Your Content!
- Click on any section tab (Hero, Mission, Initiatives, Leadership, Site Info)
- Edit the content in the forms
- Click **"💾 Save Changes"** to save
- Visit `http://localhost:8000` to see your changes

---

## 📝 Making Updates

### Edit Text Content
1. Navigate to the section you want to edit
2. Change the text in the input fields
3. Click "Save Changes"
4. Refresh the main site to see updates

### Add/Remove Leaders
1. Go to the **👥 Leadership** tab
2. Click **"+ Add Leader"** to add a new team member
3. Fill in: Name, Title, Image Path, Bio
4. Click **"Remove"** on any leader to delete them
5. Click "Save Changes"

### Change Images/Videos
1. First, add your image/video files to:
   - `static/assets/images/` for images
   - `static/assets/videos/` for videos
   - `static/assets/leaders/` for team photos

2. In the admin panel, update the path:
   - Example: `/assets/images/myimage.jpg`
   - Example: `/assets/leaders/john-doe.jpg`

3. Click "Save Changes"

---

## 📦 Export for Production

When you're ready to deploy:

1. **Export JSON**
   - Click **"📥 Export JSON"** button
   - A `content.json` file will download

2. **Update Source File**
   ```bash
   # Replace the existing content file with your export
   mv ~/Downloads/content.json src/data/content.json
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy**
   - Upload the `public/` folder to your server
   - Or use your deployment service (Netlify, Vercel, etc.)

---

## 🔄 Common Tasks

### Reset Everything
- Click the **"Reset"** button to discard all changes
- This reverts to the original `content.json`

### Test Before Deploying
```bash
npm run build
npm run serve
```
Visit `http://localhost:9000` to preview production build

---

## ⚠️ Important Notes

- ✅ Changes are saved in **browser localStorage** during development
- ✅ Admin panel is **only accessible in development mode**
- ✅ **Always export and update** `content.json` before building
- ⚠️ If you clear browser data, you'll lose unsaved changes
- ⚠️ Admin panel won't work in production (`npm run serve` or deployed site)

---

## 🆘 Troubleshooting

**Can't access admin panel**
- Make sure you're running `npm run develop` (not build or serve)
- Check the correct port (usually 8000, but might be 8001, 8002, etc.)

**Changes not showing**
- Did you click "Save Changes"?
- Try refreshing the page (Cmd+R or Ctrl+R)

**Admin panel blank or broken**
- Clear browser console for errors
- Try clearing browser cache and localStorage
- Restart development server

---

## 📚 Need More Help?

- **Full Documentation**: See `CMS_README.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`

---

## 🎉 You're Ready!

Start editing your content at: **`http://localhost:8000/admin`**

Happy editing! ✨
