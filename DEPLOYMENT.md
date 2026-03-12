# Deployment Guide - Namecheap Hosting with Auto-Updates

## Setup Instructions

### 1. Initialize Git Repository (One-time setup)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create Repository on GitHub/GitLab (One-time setup)
- Go to [GitHub](https://github.com/new) or GitLab and create a new repository
- Add remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/kac-website.git
git branch -M main
git push -u origin main
```

### 3. Set Up Namecheap Hosting
1. **Purchase hosting plan** on Namecheap.com
2. **Connect domain** to Namecheap hosting
3. **Access cPanel** (provided by Namecheap)
4. **Note your FTP/SFTP credentials**

### 4. Deploy Using FTP/SFTP
Option A: Manual Deployment
```bash
# Install FTP tool (e.g., lftp)
# Then sync to Namecheap server
lftp -u username,password -e "mirror -R . /public_html; exit" ftp.namecheap.com
```

Option B: Use Deploy Script
```bash
npm run deploy
```
(Requires FTP credentials in .env file)

### 5. Set Up Auto-Deploy with GitHub Actions (Recommended)
1. Create `.github/workflows/deploy.yml` in your repository
2. Add Namecheap FTP credentials as GitHub Secrets
3. Workflow will auto-deploy on every push to main branch

### 6. For Continuous Updates
After initial setup, just push changes to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```
The site will automatically update on Namecheap!

## Troubleshooting
- **FTP connection fails**: Check Namecheap FTP credentials and firewall
- **Files not uploading**: Ensure you have write permissions to /public_html
- **Deployment not triggering**: Verify GitHub Actions are enabled in repo settings
