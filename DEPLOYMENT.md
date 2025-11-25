# Deployment Guide

This guide covers deploying your portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

**Why Vercel?**

- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Preview deployments
- Custom domains

**Steps:**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy!

**Environment Variables (if needed):**

```bash
VITE_API_URL=your_api_url
VITE_CONTACT_FORM_ENDPOINT=your_formspree_endpoint
```

### Netlify

**Why Netlify?**

- Easy form handling
- Serverless functions
- Branch previews
- Form submissions

**Steps:**

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Add form handling (optional):
   ```html
   <form name="contact" method="POST" data-netlify="true"></form>
   ```

### GitHub Pages

**Steps:**

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Pre-Deployment Checklist

### 1. Update Content

- [ ] Replace "Your Name" with your actual name
- [ ] Update contact information
- [ ] Add your projects to `src/data/projects.json`
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Add your CV/resume

### 2. SEO Optimization

- [ ] Update `index.html` meta tags
- [ ] Set correct page titles
- [ ] Add Open Graph images
- [ ] Update `sitemap.xml` with your domain
- [ ] Update `robots.txt`

### 3. Performance

- [ ] Optimize images (use WebP when possible)
- [ ] Test build locally: `npm run build`
- [ ] Check bundle size
- [ ] Test on slow connections

### 4. Accessibility

- [ ] Test with screen reader
- [ ] Check keyboard navigation
- [ ] Verify color contrast
- [ ] Test with reduced motion

## 🌐 Domain Setup

### Custom Domain (Vercel)

1. Go to your project settings
2. Add your domain in "Domains" section
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

### Custom Domain (Netlify)

1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records
4. Enable HTTPS

## 📧 Contact Form Integration

### Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `Contact.jsx`:
   ```jsx
   const onSubmit = async (data) => {
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(data),
     });
   };
   ```

### Netlify Forms

1. Add `netlify` attribute to your form
2. Add hidden input for Netlify:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

### Custom Backend

1. Create API endpoint
2. Update form submission logic
3. Add error handling

## 🔍 Analytics Setup

### Google Analytics

1. Create GA4 property
2. Add tracking code to `index.html`:
   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "GA_MEASUREMENT_ID");
   </script>
   ```

### Vercel Analytics

1. Install: `npm install @vercel/analytics`
2. Add to `main.jsx`:

   ```jsx
   import { Analytics } from "@vercel/analytics/react";

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <BrowserRouter>
         <App />
         <Analytics />
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

## 🚀 Performance Optimization

### Image Optimization

- Use WebP format
- Implement lazy loading
- Provide multiple sizes
- Use proper alt text

### Code Splitting

- Already implemented with React Router
- Consider lazy loading heavy components

### Caching

- Set proper cache headers
- Use CDN for static assets
- Implement service worker (optional)

## 🔒 Security

### HTTPS

- Enable HTTPS (automatic on Vercel/Netlify)
- Redirect HTTP to HTTPS
- Use HSTS headers

### Content Security Policy

Add to `index.html`:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>
```

## 📱 Testing

### Cross-Browser Testing

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing

- Test on various screen sizes
- Check touch interactions
- Verify responsive design

### Performance Testing

- Use Lighthouse
- Test on slow 3G
- Check Core Web Vitals

## 🐛 Troubleshooting

### Build Errors

- Check Node.js version (16+)
- Clear node_modules and reinstall
- Check for TypeScript errors

### Deployment Issues

- Verify build command
- Check output directory
- Review build logs

### Form Not Working

- Check endpoint URL
- Verify CORS settings
- Test with curl/Postman

## 📊 Monitoring

### Uptime Monitoring

- Use services like UptimeRobot
- Set up alerts
- Monitor response times

### Error Tracking

- Implement Sentry
- Monitor JavaScript errors
- Track user interactions

## 🔄 Updates & Maintenance

### Regular Updates

- Update dependencies monthly
- Check for security vulnerabilities
- Test after updates

### Content Updates

- Keep projects current
- Update blog posts
- Refresh images

### Performance Monitoring

- Monitor Core Web Vitals
- Check bundle size
- Optimize as needed

---

**Need help?** Check the main README.md or open an issue on GitHub.
