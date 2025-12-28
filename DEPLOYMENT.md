# 🚀 Deployment Guide - Saviour Dagadu Portfolio

Complete step-by-step instructions for deploying your portfolio to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Google Analytics ID updated in `index.html`
- [ ] Contact email updated in `src/App.jsx` (handleFormSubmit)
- [ ] All images optimized and placed in `/public/images/`
- [ ] Project data complete and accurate
- [ ] Testimonials with real names and quotes
- [ ] Social links working (GitHub, LinkedIn, Twitter)
- [ ] Tested on mobile and desktop
- [ ] Dark/light mode working correctly
- [ ] All forms tested
- [ ] No console errors (F12 → Console)

---

## Option 1: Netlify (Recommended )

**Best for**: Beginners, automatic deployments

### Step 1: Prepare Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial portfolio commit"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```text

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Authorize GitHub access
4. Click "New site from Git"
5. Select your portfolio repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

### Step 3: Custom Domain (Optional)

1. In Netlify dashboard → Site settings
2. Domain management → Add custom domain
3. Point your domain's DNS to Netlify
4. Enable HTTPS (automatic)

### Step 4: Continuous Deployment

✅ Automatic! Push to GitHub → Netlify deploys automatically

---

## Option 2: Vercel (Premium Option)

**Best for**: High performance, edge functions

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

### Step 3: Configuration

- Build command: Auto-detected ✅
- Output directory: `dist` ✅
- Environment variables: None required

### Step 4: Custom Domain (Vercel)

1. Project settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided)
4. HTTPS auto-enabled ✅

---

## Option 3: GitHub Pages (Free & Easy)

**Best for**: Learning, no custom domain

### Step 1: Update vite.config.js

```javascript
export default {
  base: '/portfolio-website/',  // Your repo name
  // ... rest of config
}
```

### Step 2: Build & Deploy

```bash
npm run build
npm run deploy  # Uses gh-pages package
```

### Step 3: Enable Pages

1. Go to GitHub repo → Settings
2. Scroll to "Pages" section
3. Source: Select "gh-pages" branch
4. Save
5. Site available at: `https://username.github.io/portfolio-website`

### Step 4: Custom Domain

1. Add `CNAME` file to `/public/` with your domain
2. Update DNS to point to GitHub Pages
3. Enable "Enforce HTTPS"

---

## Option 4: Traditional Web Hosting

**Best for**: Full control, existing hosting

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Upload to Hosting

1. Use FTP or hosting control panel
2. Upload contents of `/dist` folder
3. Ensure `/dist` is the web root
4. Configure server for SPA (see below)

### Step 3: Configure Server (Important!)

#### For Apache (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### For Nginx

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  root /path/to/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### Step 4: Enable HTTPS

Use Let's Encrypt (usually free with hosting):

- Ask your hosting provider to enable SSL
- Or use [Certbot](https://certbot.eff.org/)

---

## 🔐 Security Best Practices

### HTTPS

✅ Required for all deployments

- Netlify: Automatic ✅
- Vercel: Automatic ✅
- GitHub Pages: Automatic ✅
- Traditional: Enable via Let's Encrypt

### Headers

Add to Netlify `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "no-referrer-when-downgrade"
```

### Environment Variables

If using backend:

```
VITE_GA_ID=G-YOUR_ID_HERE
VITE_API_URL=https://api.example.com
```

---

## 📊 Post-Deployment Monitoring

### Google Analytics

1. Wait 24-48 hours for data collection
2. Check real-time visitors
3. Monitor engagement metrics
4. Track form submissions

### Performance Monitoring

```bash
# Lighthouse audit
npm run build
# Then test with Lighthouse in DevTools

# Speed testing
# Use Google PageSpeed Insights
# https://pagespeed.web.dev/
```

### Error Monitoring (Optional)

Add error tracking with Sentry:

```jsx
import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "YOUR_SENTRY_DSN"
});
```

---

## 🎯 Deployment Strategy

### Recommended Workflow

1. **Local Testing**: `npm run dev`
2. **Build & Test**: `npm run build && npm run preview`
3. **Push to GitHub**: `git push origin main`
4. **Auto-Deploy**: Netlify/Vercel handles it
5. **Monitor**: Check analytics & performance

### Rollback Plan

If something breaks:

- **Netlify**: Click "Rollback" in deployments
- **Vercel**: Automatic rollback available
- **GitHub Pages**: Push previous version

---

## 🔗 Custom Domain Setup

### DNS Configuration

1. **Get domain** from: GoDaddy, Namecheap, Google Domains, etc.
2. **Point to deployment platform**:
   - Netlify: `www` CNAME → `your-site.netlify.app`
   - Vercel: `www` CNAME → `cname.vercel-dns.com`
   - GitHub Pages: CNAME → `username.github.io`
3. **SSL Certificate**: Auto-provisioned ✅

### WWW vs Non-WWW

- **Option 1**: Use `www.yourdomain.com` only
- **Option 2**: Redirect `yourdomain.com` → `www.yourdomain.com`
- **Option 3**: Both work (recommended)

**Netlify**: Automatically handles both ✅

---

## 📈 SEO Checklist

After deployment, verify:

- [ ] Google Search Console connected
- [ ] Sitemap.xml generated (auto with Vite)
- [ ] Meta tags present (check `index.html`)
- [ ] Open Graph tags working (share on social)
- [ ] Mobile-friendly (test on Google Mobile-Friendly)
- [ ] Core Web Vitals optimized
- [ ] No broken links (test with links tool)
- [ ] Structured data valid (schema.org)

### Add to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap.xml

---

## 🚨 Troubleshooting Deployment

### Issue: Page shows 404

**Solution**: Ensure SPA routing configured (see Traditional Hosting section)

### Issue: Images not loading

**Solution**: Verify image paths start with `/` (absolute paths)

### Issue: Styles look wrong

**Solution**: Hard refresh browser (Ctrl+Shift+R)

### Issue: Google Analytics not tracking

**Solution**: 

1. Check ID in `index.html` (appears 2 times)
2. Wait 24 hours for data
3. Verify in GA4 Real-time view

### Issue: Contact form not working

**Solution**: 

1. Ensure using `mailto:` or backend configured
2. Test with different email client
3. Check browser console (F12)

---

## 📞 Support Resources

- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Pages Help**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **Google Analytics Help**: [support.google.com/analytics](https://support.google.com/analytics)

---

## 🎉 Deployment Success!

Your portfolio is live! Now:

1. **Share your portfolio**
   - Post on LinkedIn
   - Share with recruiters
   - Add to resume/CV

2. **Monitor performance**
   - Check Google Analytics daily
   - Monitor Core Web Vitals
   - Track form submissions

3. **Keep it updated**
   - Add new projects regularly
   - Update skills/certifications
   - Keep content fresh

4. **Optimize continuously**
   - A/B test CTAs
   - Improve form conversion
   - Track what works

---

**Deployment Completed**: 🚀
Your portfolio is now live and accessible worldwide!

---
*Last Updated: December 28, 2025*