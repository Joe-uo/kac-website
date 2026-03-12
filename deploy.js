#!/usr/bin/env node

/**
 * Simple FTP deployment script for Namecheap
 * Usage: npm run deploy
 * 
 * Set these environment variables or .env file:
 * - FTP_HOST: FTP hostname from Namecheap
 * - FTP_USER: FTP username
 * - FTP_PASS: FTP password
 * - FTP_PATH: Remote path (usually /public_html)
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

// For a simple Node.js deployment, we'll provide instructions
console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║        KAC Website - Namecheap Deployment Script           ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

const requiredVars = ['FTP_HOST', 'FTP_USER', 'FTP_PASS', 'FTP_PATH'];
const missing = requiredVars.filter(v => !process.env[v]);

if (missing.length > 0) {
  console.log('❌ Missing environment variables:\n');
  missing.forEach(v => console.log(`   - ${v}`));
  console.log('\n📝 Create a .env file with:');
  console.log(`
FTP_HOST=ftp.yournamecheapdomain.com
FTP_USER=your_ftp_username
FTP_PASS=your_ftp_password
FTP_PATH=/public_html
  `);
  console.log('\n🔒 Warning: Never commit .env to Git!\n');
  process.exit(1);
}

console.log('✅ Deployment Ready');
console.log('\n📋 Configuration:');
console.log(`   Host:  ${process.env.FTP_HOST}`);
console.log(`   User:  ${process.env.FTP_USER}`);
console.log(`   Path:  ${process.env.FTP_PATH}`);

console.log('\n\n📦 Recommended Deployment Methods:\n');
console.log('1️⃣  GitHub Actions (Recommended)');
console.log('   - Create .github/workflows/deploy.yml');
console.log('   - Auto-deploy on every push to main branch\n');

console.log('2️⃣  Using FileZilla (GUI)');
console.log('   - Sites > New Site');
console.log('   - Protocol: SFTP');
console.log('   - Host: ' + process.env.FTP_HOST);
console.log('   - User: ' + process.env.FTP_USER + '\n');

console.log('3️⃣  Command Line (lftp):');
console.log(`   lftp -u ${process.env.FTP_USER},${process.env.FTP_PASS} -e "mirror -R . ${process.env.FTP_PATH}; exit" ${process.env.FTP_HOST}\n`);
