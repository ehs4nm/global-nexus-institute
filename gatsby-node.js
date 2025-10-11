const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  
  // Read content.json for build-time page generation
  let contentData;
  const contentPath = path.resolve(__dirname, 'src/data/content.json');
  
  try {
    const contentFile = fs.readFileSync(contentPath, 'utf8');
    contentData = JSON.parse(contentFile);
    console.log('✅ Successfully loaded content.json for build');
  } catch (error) {
    console.error('❌ Error reading content.json:', error);
    console.log('💡 Make sure content.json exists and is valid JSON');
    console.log('💡 If you made admin changes, run: npm run sync-admin');
    return;
  }

  // Create pages for gallery items
  if (contentData.gallery && contentData.gallery.items) {
    const galleryTemplate = path.resolve(__dirname, 'src/templates/gallery-item.js');
    
    contentData.gallery.items.forEach((item) => {
      createPage({
        path: `/insights/${item.slug}`,
        component: galleryTemplate,
        context: {
          item: item,
          slug: item.slug,
        },
      });
    });
  }
};
