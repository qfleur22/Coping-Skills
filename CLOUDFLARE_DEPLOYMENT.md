# Cloudflare Pages Deployment Guide

## 🚨 Troubleshooting 404 Errors? Jump to:
- [Getting "HTTP ERROR 404"](#404-errors-on-all-pages-including-homepage) → Wrong build output directory
- [Build configuration](#critical-configuration-checklist) → Verify your settings

## Overview

This project is a **fully static Next.js site** with 118+ pre-rendered pages. It uses Next.js's static export feature (`output: 'export'`) to generate HTML files that are served directly from Cloudflare's CDN.

**No server-side rendering, no API routes, no dynamic functions** - just fast, static HTML.

## ⚠️ Critical Configuration Checklist

Before deploying, ensure these settings are configured in your Cloudflare Pages dashboard:

### Settings → Builds & deployments
- [ ] **Build command**: `npm run build`
- [ ] **Build output directory**: `out`
- [ ] **Root directory**: `/` (default)
- [ ] **Node version**: 18 or higher

### Settings → Environment Variables
No environment variables required for this static site.

### Common Mistakes That Cause 404 Errors:
❌ **Build output directory set to `.next`** → Should be `out`  
❌ **Build output directory set to `.vercel/output/static`** → Should be `out`  
❌ **Using `@cloudflare/next-on-pages` adapter** → Not needed for static sites  
❌ **Wrong `next.config.js` output setting** → Should be `output: 'export'`

**Why this matters:** With `output: 'export'` in `next.config.js`, Next.js generates fully static HTML files in the `out` directory. This is simpler, faster, and perfect for Cloudflare Pages.

## Quick Start

### Via Cloudflare Pages Dashboard (Recommended)

1. **Connect Repository**: Link your GitHub/GitLab repository to Cloudflare Pages

2. **Configure Build Settings** (Settings → Builds & deployments):
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (leave as default)
   - Environment variables: None required
   - Node version: `18` or higher (automatic)

3. **Deploy**: Click "Save and Deploy"

Cloudflare will automatically build and deploy your static site. The build takes ~2-3 minutes to generate all 118+ pages.

### Via Wrangler CLI

```bash
# Install Wrangler globally (optional)
npm install -g wrangler

# Build the static site
npm run build

# Deploy
npx wrangler pages deploy out
```

## Build Configuration

### Framework Settings
- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.4
- **TypeScript**: 5.5.4
- **Export mode**: Static HTML (`output: 'export'`)
- **Build time**: ~2-3 minutes
- **Output**: 118+ static HTML pages

### Build Command
```bash
npm run build
```

This runs `next build` which generates static HTML files when `output: 'export'` is set.

### Build Output Directory
```
out
```

Next.js outputs static files to the `out` directory when using `output: 'export'`.

### Node.js Version
Use Node.js **18+** in your build environment

## Configuration Files

### next.config.js
```js
output: 'export',
images: {
  unoptimized: true
}
```

The `output: 'export'` setting tells Next.js to generate static HTML. The `images.unoptimized` setting disables Next.js image optimization (not available in static export mode).

### wrangler.toml (Optional)
```toml
name = "coping-skills"
compatibility_date = "2024-01-30"
pages_build_output_dir = "out"
```

This file is only needed if deploying via Wrangler CLI. Cloudflare Pages dashboard settings take precedence.

## Project Structure

All pages are statically generated:
- 120+ DBT skills pages
- No server-side rendering
- No API routes
- No dynamic functions

This makes the site extremely fast and perfect for Cloudflare's global CDN.

## Performance

- **Build time**: ~2-3 minutes
- **Page load time**: <500ms globally
- **Deployment**: Instant via Cloudflare's edge network
- **Cache**: Aggressive caching, instant updates on redeploy

## Troubleshooting

### Build Fails

**Common Build Failures:**
1. **Clear build cache**: Go to Settings → Builds → Clear build cache
2. **Check Node version**: Ensure you're using Node 18+
3. **Dependencies**: Make sure all packages install correctly
4. **Verify build command**: Ensure it's set to `npm run build`
5. **Check next.config.js**: Ensure `output: 'export'` is set

### Pages Don't Update

1. **Clear Cloudflare cache**: Purge cache in Cloudflare dashboard
2. **Force redeploy**: Make a commit and push to trigger rebuild
3. **Check build logs**: Verify all 120 pages generated successfully

### 404 Errors on ALL Pages (Including Homepage)

If you see `HTTP ERROR 404` even on the root domain:

**Diagnosis:**
1. Go to your Cloudflare Pages project
2. Click "Deployments" → Select your latest deployment
3. Click "View build logs"
4. Look for the final output message showing where files were generated

**Common Causes & Fixes:**

**Problem 1: Wrong Build Output Directory**
- **Check**: Settings → Builds & deployments → Build output directory
- **Should be**: `.vercel/output/static`
- **If it's**: `.next` or `out` → Change it to `.vercel/output/static`
- **Fix**: Update the setting and redeploy

**Problem 2: Wrong Build Command**
- **Check**: Settings → Builds & deployments → Build command
- **Should be**: `npm run build`
- **If it's**: Something else → Change it to `npm run build`
- **Fix**: Update and redeploy

**Problem 3: Build Failed Silently**
- **Check**: Build logs for errors
- **Look for**: "Build completed successfully" message
- **If missing**: Check error messages in logs
- **Common errors**: Missing dependencies, Node version issues

**Problem 4: Wrong next.config.js Configuration**
- **Check**: Your `next.config.js` file
- **Should have**: `output: 'export'`
- **If different**: Update next.config.js and push changes

**Step-by-Step Debug Process:**
1. Check build logs for the output directory path
2. Verify build completed without errors
3. Confirm output directory setting matches build output
4. Ensure `nodejs_compat` flag is set
5. Clear build cache: Settings → Builds → Clear cache
6. Trigger a new deployment

### Common Build Issues

**"Build output directory not found"**
- Make sure build output directory is set to `.vercel/output/static`
- Check that the build completed successfully

**"Module not found" errors**
- Run `npm install` to ensure all dependencies are installed
- Clear build cache and retry

## Debugging a Live Deployment

If your site is deployed but showing 404 errors, follow these steps:

### Step 1: Check Your Current Settings

**Go to Cloudflare Pages Dashboard:**
1. Open https://dash.cloudflare.com
2. Click "Workers & Pages"
3. Click your "coping-skills" project
4. Click "Settings" tab

**Verify Build Settings:**
1. Click "Builds & deployments" in left sidebar
2. Under "Build configurations", check:
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`

**Verify Functions Settings:**
1. Click "Functions" in left sidebar
2. Under "Compatibility Flags", check:
   - Production should have: `nodejs_compat`
   - Preview should have: `nodejs_compat`
   - Compatibility date: `2024-01-30` or later

### Step 2: Check Build Logs

1. Go to "Deployments" tab
2. Click your latest deployment
3. Click "View build logs"
4. Look for:
   - ✅ Should see: `> next build`
   - ✅ Should see: "Generating static pages"
   - ✅ Should see: "Export successful"
   - ✅ Should see: 118+ pages generated
   - ❌ Any error messages

**Example of CORRECT build logs:**
```
21:40:46.945 > npm run build
21:40:47.650 > next build
21:40:47.668 ▲ Next.js 16.1.6
21:40:50.123 ✓ Compiled successfully
21:40:52.456 ○ Generating static pages (118/118)
21:40:53.123 ✓ Export successful
```

The key is seeing "Generating static pages" and "Export successful" which confirms the static export worked.

### Step 3: Force a Clean Rebuild

If settings look correct but site still shows 404:
1. Go to "Settings" → "Builds & deployments"
2. Scroll to "Build cache"
3. Click "Clear cache"
4. Go to "Deployments" tab
5. Click "Retry deployment" on latest build

OR trigger a new deployment by pushing a commit to your repo.

## Verifying Local Build

To test the build locally before deploying:

```bash
# Install dependencies
npm install

# Build the static site
npm run build

# Check output directory exists and contains files
ls -la out

# You should see index.html and other HTML files
# If the directory is empty or doesn't exist, the build failed

# Preview locally (optional)
npx wrangler pages dev out

# Or use a simple HTTP server
npx serve out
```

## Support & Documentation

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Deploy a Static Site to Cloudflare Pages](https://developers.cloudflare.com/pages/get-started/)

## Summary

✅ **Fully static site** - 118+ pre-rendered HTML pages  
✅ **Build command**: `npm run build`  
✅ **Output directory**: `out`  
✅ **No server required** - just HTML, CSS, and JavaScript  
✅ **Global CDN** - fast everywhere with Cloudflare's edge network  
✅ **Node.js 18+** - required for build only, not runtime
