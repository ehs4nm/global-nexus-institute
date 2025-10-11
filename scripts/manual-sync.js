#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Manual sync script - prompts user to paste their exported admin data
 */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function manualSync() {
  const contentPath = path.resolve(__dirname, '../src/data/content.json');
  
  console.log('🔄 Manual Admin Data Sync');
  console.log('========================');
  console.log('');
  console.log('Instructions:');
  console.log('1. Open your admin panel in development mode');
  console.log('2. Click the "Export" button to download content.json');
  console.log('3. Open the downloaded file and copy all its contents');
  console.log('4. Paste the JSON content when prompted below');
  console.log('');
  
  rl.question('Have you copied the JSON content from your exported file? (y/N): ', (ready) => {
    if (ready.toLowerCase() !== 'y' && ready.toLowerCase() !== 'yes') {
      console.log('Please export and copy your admin data first, then run this script again.');
      rl.close();
      return;
    }
    
    console.log('');
    console.log('Paste your JSON content below and press Enter twice when done:');
    console.log('(The content should start with { and end with })');
    console.log('');
    
    let jsonInput = '';
    let emptyLines = 0;
    
    rl.on('line', (line) => {
      if (line.trim() === '') {
        emptyLines++;
        if (emptyLines >= 2) {
          // Process the input
          processJsonInput(jsonInput.trim(), contentPath);
          rl.close();
        }
      } else {
        emptyLines = 0;
        jsonInput += line + '\n';
      }
    });
  });
}

function processJsonInput(jsonString, contentPath) {
  try {
    // Validate JSON
    const adminData = JSON.parse(jsonString);
    
    // Backup original file
    const backupPath = contentPath + '.backup.' + Date.now();
    if (fs.existsSync(contentPath)) {
      fs.copyFileSync(contentPath, backupPath);
      console.log(`📋 Backup created: ${path.basename(backupPath)}`);
    }
    
    // Write new content
    fs.writeFileSync(contentPath, JSON.stringify(adminData, null, 2));
    console.log('✅ Content.json updated successfully!');
    console.log(`📁 Updated: ${contentPath}`);
    console.log('');
    console.log('You can now run: npm run build');
    
  } catch (error) {
    console.error('❌ Invalid JSON format:', error.message);
    console.log('Please make sure you copied the complete JSON content.');
  }
}

// Run the manual sync
manualSync();