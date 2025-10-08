const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function findSourceImage() {
  const sourceDir = path.join(__dirname, '../src/images');
  const possibleFiles = ['favicon.png', 'favicon.jpg', 'favicon.jpeg', 'favicon.svg'];
  
  for (const file of possibleFiles) {
    const filePath = path.join(sourceDir, file);
    try {
      await fs.access(filePath);
      return filePath;
    } catch (error) {
      // File doesn't exist, continue checking
      continue;
    }
  }
  throw new Error('No source favicon file found. Please provide favicon.png, favicon.jpg, or favicon.svg in src/images/');
}

async function generateFavicons() {
  const staticDir = path.join(__dirname, '../static/favicon');
  const mainFaviconPath = path.join(__dirname, '../src/images/favicon.png');

  try {
    // Ensure directories exist
    await fs.mkdir(staticDir, { recursive: true });

    // Find source image
    const sourcePath = await findSourceImage();
    console.log(`Using source image: ${sourcePath}`);

    // Read the source file
    const sourceBuffer = await fs.readFile(sourcePath);

    // Generate main favicon.png (512x512)
    await sharp(sourceBuffer)
      .resize(512, 512)
      .png()
      .toFile(mainFaviconPath);

    // Generate favicon-16x16.png
    await sharp(sourceBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(staticDir, 'favicon-16x16.png'));

    // Generate favicon-32x32.png
    await sharp(sourceBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(staticDir, 'favicon-32x32.png'));

    // Generate apple-touch-icon.png
    await sharp(sourceBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(staticDir, 'apple-touch-icon.png'));

    // Generate favicon.ico (32x32)
    await sharp(sourceBuffer)
      .resize(32, 32)
      .toFile(path.join(__dirname, '../static/favicon.ico'));

    console.log('Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();