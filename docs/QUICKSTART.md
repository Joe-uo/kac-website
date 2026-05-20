# Quick Start - Deploy Your Site to Namecheap

## 🚀 Fast Setup (5 minutes)

### Step 1: Initialize Git
```bash
cd c:\Users\Joseph\Documents\KACWebsite
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create GitHub Account & Repository
- Go to https://github.com/new
- Create new repository named `kac-website`
- Don't initialize with README (we already have files)
- Copy the commands GitHub shows and run them:
```bash
git remote add origin https://github.com/YOUR_USERNAME/kac-website.git
git branch -M main
git push -u origin main
```

### Step 3: Get Namecheap FTP Credentials
1. Log into Namecheap
2. Find your hosting account
3. Look for FTP credentials in cPanel
4. Note down:
   - FTP Host: `ftp.yourdomain.com`
   - FTP Username: (usually your Namecheap username)
   - FTP Password: (from Namecheap)

### Step 4: Add GitHub Secrets for Auto-Deploy
1. Go to your GitHub repo
2. Settings > Secrets and variables > Actions
3. Create three new secrets:
   - `FTP_HOST` → your ftp.yourdomain.com
   - `FTP_USER` → your FTP username
   - `FTP_PASS` → your FTP password

### Step 5: Test Deployment
1. Make a small change to any HTML file
2. Commit and push:
```bash
git add .
git commit -m "Test update"
git push origin main
```
3. Go to GitHub repo > Actions tab - watch deployment happen!
4. Check your website - it should update within 2-3 minutes

## ✨ Now You Have Live Updates!
Every time you:
1. Edit files locally
2. `git add .` then `git commit -m "Description"` 
3. `git push origin main`

Your Namecheap site **automatically updates** within minutes! 🎉

## 📚 Need Help?
- See `DEPLOYMENT.md` for detailed instructions
- Namecheap Help: https://www.namecheap.com/support/
- GitHub Actions Help: https://docs.github.com/en/actions
