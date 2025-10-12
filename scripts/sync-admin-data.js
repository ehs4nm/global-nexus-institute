#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * This script opens the development server, extracts localStorage data,
 * and updates the content.json file for production builds.
 */

async function syncAdminData() {
  const contentPath = path.resolve(__dirname, '../static/data/content.json');
  const menuPath = path.resolve(__dirname, '../static/data/menu.json');
  
  console.log('🚀 Starting admin data sync...');
  
  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Navigate to the admin page (assuming dev server is running on localhost:8000)
    console.log('📡 Connecting to development server...');
    await page.goto('http://localhost:8000/admin/', { 
      waitUntil: 'networkidle2',
      timeout: 10000
    });
    
    // Extract localStorage data
    console.log('📦 Extracting admin data from localStorage...');
    const { contentData, menuData } = await page.evaluate(() => {
      const gniData = localStorage.getItem('gni_content');
      const aboutUsData = localStorage.getItem('aboutUsContent');
      const newsTickerData = localStorage.getItem('newsTickerContent');
      const menuData = localStorage.getItem('gni_menu_items');
      
      let combinedData = {};
      
      // Try to get data from gni_content first
      if (gniData) {
        combinedData = JSON.parse(gniData);
      }
      
      // Merge with individual localStorage items if they exist
      if (aboutUsData) {
        combinedData.aboutUs = JSON.parse(aboutUsData);
      }
      
      if (newsTickerData) {
        combinedData.newsTicker = JSON.parse(newsTickerData);
      }
      
      // Extract menu data
      let parsedMenuData = null;
      if (menuData) {
        try {
          parsedMenuData = JSON.parse(menuData);
        } catch (e) {
          console.warn('Failed to parse menu data:', e);
        }
      }
      
      return {
        contentData: Object.keys(combinedData).length > 0 ? combinedData : null,
        menuData: parsedMenuData
      };
    });
    
    // Ensure static/data directory exists
    const dataDir = path.dirname(contentPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log(`📁 Created directory: ${dataDir}`);
    }
    
    let hasUpdates = false;
    
    // Handle content data
    if (contentData) {
      // Read existing content.json to preserve other data
      let existingContent = {};
      if (fs.existsSync(contentPath)) {
        try {
          const existingContentStr = fs.readFileSync(contentPath, 'utf8');
          existingContent = JSON.parse(existingContentStr);
        } catch (error) {
          console.warn('⚠️  Could not read existing content.json, creating new one');
        }
      }
      
      // Merge admin data with existing content
      const updatedContent = {
        ...existingContent,
        ...contentData
      };
      
      // Backup original file
      const backupPath = contentPath + '.backup.' + Date.now();
      if (fs.existsSync(contentPath)) {
        fs.copyFileSync(contentPath, backupPath);
        console.log(`📋 Content backup created: ${backupPath}`);
      }
      
      // Write updated content
      fs.writeFileSync(contentPath, JSON.stringify(updatedContent, null, 2));
      console.log('✅ Content.json updated with admin data!');
      console.log(`📁 Updated: ${contentPath}`);
      
      if (contentData.aboutUs) {
        console.log('   ✓ About Us content updated');
      }
      if (contentData.newsTicker) {
        console.log('   ✓ News Ticker content updated');
      }
      hasUpdates = true;
    }
    
    // Handle menu data
    if (menuData) {
      // Backup original menu file if it exists
      const menuBackupPath = menuPath + '.backup.' + Date.now();
      if (fs.existsSync(menuPath)) {
        fs.copyFileSync(menuPath, menuBackupPath);
        console.log(`📋 Menu backup created: ${menuBackupPath}`);
      }
      
      // Write menu data
      fs.writeFileSync(menuPath, JSON.stringify(menuData, null, 2));
      console.log('✅ Menu.json updated with admin data!');
      console.log(`📁 Updated: ${menuPath}`);
      console.log(`   ✓ ${menuData.length || 0} menu items updated`);
      hasUpdates = true;
    }
    
    if (!hasUpdates) {
      console.log('⚠️  No admin data found in localStorage');
      console.log('   Make sure you have made changes in the admin panel first');
      console.log('   Looking for keys: gni_content, aboutUsContent, newsTickerContent, gni_menu_items');
    }
    
  } catch (error) {
    console.error('❌ Error syncing admin data:', error.message);
    
    if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
      console.log('💡 Make sure your development server is running:');
      console.log('   npm run develop');
    }
    
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the sync
syncAdminData();