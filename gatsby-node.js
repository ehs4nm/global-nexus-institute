const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

// Remove admin pages in production build
exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage } = actions;
  
  // Delete admin pages in production
  if (process.env.NODE_ENV === 'production' && page.path.startsWith('/admin')) {
    deletePage(page);
    console.log('🚫 Removed admin route in production build:', page.path);
  }
};

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

// Exclude admin components from production bundle
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript' && process.env.NODE_ENV === 'production') {
    actions.setWebpackConfig({
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /src[\/\\]components[\/\\]admin/,
          contextRegExp: /src/,
        }),
        new webpack.IgnorePlugin({
          resourceRegExp: /src[\/\\]utils[\/\\]admin/,
          contextRegExp: /src/,
        }),
      ],
    });
    console.log('🚫 Excluded admin components from production bundle');
  }
};
