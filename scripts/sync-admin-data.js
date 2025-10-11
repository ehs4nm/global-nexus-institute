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
      const data = localStorage.getItem('gni_content');
      return data ? JSON.parse(data) : null;
    });
    
    if (adminData) {
      // Backup original file
      const backupPath = contentPath + '.backup.' + Date.now();
      if (fs.existsSync(contentPath)) {
        fs.copyFileSync(contentPath, backupPath);
        console.log(`📋 Backup created: ${backupPath}`);
      }
      
      // Write new content
      fs.writeFileSync(contentPath, JSON.stringify(adminData, null, 2));
      console.log('✅ Content.json updated with admin data!');
      console.log(`📁 Updated: ${contentPath}`);
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