# Kid Palace Schools - Deployment Instructions

## Build Output
The production build is in the `dist/` folder. Upload all contents of this folder to your hosting provider.

## Files to Upload
Upload everything inside the `dist/` folder:
- `index.html`
- `assets/` folder (contains JS, CSS, images, fonts)

## Server Configuration for Client-Side Routing

Since this is a React Single Page Application (SPA) with client-side routing, your server needs to redirect all requests to `index.html`.

### Option 1: .htaccess (Apache - Most Common for Shared Hosting)
An `.htaccess` file has been created in the `dist` folder. Make sure:
1. Your hosting supports `.htaccess`
2. `mod_rewrite` is enabled

### Option 2: If using cPanel
1. Upload all files from `dist/` to your `public_html` folder
2. The `.htaccess` file will handle routing automatically

### Option 3: If .htaccess doesn't work
Contact your hosting provider to enable URL rewriting, or add this to your hosting configuration:
- All 404 requests should serve `index.html`

## Folder Structure After Upload
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-xxx.js
    ├── index-xxx.css
    └── (images and fonts)
```

## Testing
After deployment:
1. Visit your domain - homepage should load
2. Navigate to other pages (About, Contact, etc.)
3. Refresh the page on any route - it should still work
4. If refreshing shows 404, the `.htaccess` redirect isn't working

## Troubleshooting
- **Blank page**: Check browser console for errors
- **404 on refresh**: `.htaccess` not working, contact hosting provider
- **Images not loading**: Check file paths in browser Network tab
- **Styles broken**: Clear browser cache, check CSS file loaded

## Performance Note
Your images are quite large (some over 1MB). Consider optimizing them with:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
