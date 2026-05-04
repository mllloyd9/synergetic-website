# Complete GoDaddy Setup Guide - Starting from Zero

## What We're Going to Do
We're going to take your beautiful website (The Wealth Lab) and get it live on the internet through GoDaddy hosting.

## Prerequisites
- You have a GoDaddy account
- You have purchased a domain name from GoDaddy
- You have purchased hosting from GoDaddy

## Step 1: Build Your Website Files
First, we need to create the production-ready files:

1. Make sure you're in your project folder
2. Run this command: `npm run build`
3. Wait for it to complete (you'll see "Build completed" or similar)
4. A new `dist` folder will appear with your website files

## Step 2: Access Your GoDaddy Hosting
1. Go to [godaddy.com](https://godaddy.com)
2. Click "Sign In" (top right)
3. Enter your GoDaddy username and password
4. Once logged in, click "My Products" at the top

## Step 3: Find Your Hosting
1. Look for a section called "Web Hosting" or "Hosting"
2. You should see your hosting plan listed
3. Click the "Manage" button next to your hosting plan

## Step 4: Access File Manager
1. In your hosting control panel, look for one of these:
   - "File Manager"
   - "Files"
   - "cPanel File Manager"
   - "Website Files"
2. Click on it to open the file manager

## Step 5: Find Your Website Folder
In the file manager, look for your website's main folder. It's usually one of these:
- `public_html` (most common)
- `www`
- Your domain name (like `yoursite.com`)
- `htdocs`

**This is where your website files need to go.**

## Step 6: Clean Out Old Files (IMPORTANT)
1. Click on your website folder to open it
2. If there are any existing files, select them ALL
3. Delete them (usually a "Delete" button or trash icon)
4. Make sure the folder is completely empty

## Step 7: Download Your Website Files
You need to download these 7 files from your `dist` folder:

### Main Files (go in root folder):
1. `dist/index.html`
2. `dist/marcus-suit.jpg`
3. `dist/marcus-community.jpg`
4. `dist/marcus-network.jpg`

### Assets Files (go in assets subfolder):
5. `dist/assets/index-DXF_dxk8.css`
6. `dist/assets/index-aj_B656r.js`
7. `dist/assets/favicon-Ba_3E_B6.svg`

**How to download:** Right-click each file → "Download"

## Step 8: Upload Files to GoDaddy

### Upload Main Files:
1. In GoDaddy File Manager, make sure you're in your website folder (`public_html`)
2. Click "Upload" or drag and drop
3. Upload these 4 files directly here:
   - `index.html`
   - `marcus-suit.jpg`
   - `marcus-community.jpg`
   - `marcus-network.jpg`

### Create Assets Folder:
1. In your website folder, create a new folder called `assets`
2. Click on the `assets` folder to enter it
3. Upload these 3 files inside the assets folder:
   - `index-DXF_dxk8.css`
   - `index-aj_B656r.js`
   - `favicon-Ba_3E_B6.svg`

## Step 9: Verify File Structure
Your final structure should look exactly like this:
```
public_html/
├── index.html
├── marcus-suit.jpg
├── marcus-community.jpg
├── marcus-network.jpg
└── assets/
    ├── index-DXF_dxk8.css
    ├── index-aj_B656r.js
    └── favicon-Ba_3E_B6.svg
```

## Step 10: Set File Permissions (If Needed)
1. Right-click on `index.html`
2. Look for "Permissions" or "Change Permissions"
3. Set it to `644` or make sure "Read" is checked for everyone

## Step 11: Clear Caches
1. **GoDaddy Cache:** Look for "Performance," "Cache," or "CDN" in your control panel and clear it
2. **Browser Cache:** Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac) and clear browsing data

## Step 12: Test Your Website
1. Wait 5-10 minutes after uploading
2. Open a new incognito/private browser window
3. Go to your domain name (yoursite.com)
4. You should see your beautiful website with:
   ✅ Marcus's actual photos
   ✅ "Hundreds of clients" messaging
   ✅ The Wealth Lab branding
   ✅ All the professional content

## If Something Goes Wrong:

### Problem: Files won't upload
- **Solution:** Check file size limits, try uploading one at a time

### Problem: Website shows old content
- **Solution:** Clear all caches, wait longer, check you're in the right folder

### Problem: Website shows "Index of /" or file listing
- **Solution:** Make sure `index.html` is in the root folder and named exactly `index.html`

### Problem: Images don't load
- **Solution:** Make sure image files are in the same folder as `index.html`

### Problem: Styling looks broken
- **Solution:** Make sure the `assets` folder is created correctly with all 3 files inside

## Need Help?
If you get stuck at any step, let me know exactly:
1. Which step you're on
2. What you see on your screen
3. Any error messages

## Alternative: Netlify Deployment
If GoDaddy gives you trouble, we can deploy to Netlify (free) and point your domain there. It's often easier and faster.

---

**Ready to start?** Let me know when you want to begin with Step 1 (building the files)!