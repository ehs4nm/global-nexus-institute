#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * This script opens the development server, extracts localStorage data,
 * and updates the content.json file for production builds.
 */

async function syncAdminData() {
  const contentPath = path.resolve(__dirname, '../src/data/content.json');
  
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
    const adminData = await page.evaluate(() => {
      const gniData = localStorage.getItem('gni_content');
      const aboutUsData = localStorage.getItem('aboutUsContent');
      const newsTickerData = localStorage.getItem('newsTickerContent');
      
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
      
      return Object.keys(combinedData).length > 0 ? combinedData : null;
    });
    
    if (adminData) {
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
        ...adminData
      };
      
      // Backup original file
      const backupPath = contentPath + '.backup.' + Date.now();
      if (fs.existsSync(contentPath)) {
        fs.copyFileSync(contentPath, backupPath);
        console.log(`📋 Backup created: ${backupPath}`);
      }
      
      // Write updated content
      fs.writeFileSync(contentPath, JSON.stringify(updatedContent, null, 2));
      console.log('✅ Content.json updated with admin data!');
      console.log(`📁 Updated: ${contentPath}`);
      
      if (adminData.aboutUs) {
        console.log('   ✓ About Us content updated');
      }
      if (adminData.newsTicker) {
        console.log('   ✓ News Ticker content updated');
      }
    } else {
      console.log('⚠️  No admin data found in localStorage');
      console.log('   Make sure you have made changes in the admin panel first');
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