# 🚀 Saviour Dagadu - Professional Portfolio Website

A modern, responsive, and fully accessible portfolio website showcasing expertise in embedded systems, IoT, hardware design, and robotics instruction.

## ✨ Features

### 🎨 Design & UX

- **LinkedIn-Style Hero Section** - Professional profile presentation with banner and stats
- **Dark/Light Theme Toggle** - Auto-detect with manual override
- **Responsive Design** - Seamless experience on mobile, tablet, and desktop
- **Smooth Animations** - Subtle transitions and scroll effects
- **Scroll Progress Indicator** - Visual feedback of page scroll position

### 📋 Content Sections

- **Hero Section** - Compelling profile with action buttons
- **Projects Portfolio** - Featured projects with detailed modals and image galleries
- **Currently Building** - Real-time project status with progress tracking
- **Certifications** - Professional credentials and achievements
- **Tech Blog** - Articles and insights on embedded systems
- **Community Impact** - Volunteering, mentorship, and achievements with image galleries
- **Testimonials** - Quotes from mentors, colleagues, and mentees
- **Contact Form** - Easy-to-use message form with email integration
- **Skills** - Comprehensive technical expertise showcase

### ♿ Accessibility

- **WCAG AA Compliant** - Full accessibility standards
- **Keyboard Navigation** - Alt+1-7 to jump to sections
- **Skip to Content** - Quick navigation for screen readers
- **Focus Indicators** - Clear visual feedback
- **ARIA Labels** - Semantic HTML structure
- **Reduced Motion Support** - Respects user preferences
- **High Contrast Mode** - Support for visually impaired users

### ⚡ Performance

- **Image Lazy Loading** - Deferred loading for off-screen images
- **Optimized Bundle** - Minimal dependencies (Lucide React for icons)
- **Fast Rendering** - React with Vite for instant HMR
- **SEO Optimized** - Meta tags and semantic HTML

### 🔧 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Hosting-Ready**: Optimized for any static host

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Clone & Install

```bash
git clone https://github.com/SaviourMadeit/portfolio-website.git
cd portfolio-website
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates optimized `dist` folder for deployment

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Customization Guide

### 1. **Update Your Information**

#### Hero Section

Edit the hero section profile details in `src/App.jsx`:

```jsx
<h1 className="text-4xl font-bold">Your Name</h1>
<p>Your Title</p>
```

#### Contact Information

Update email and social links:

- Email: `Senamdagadusaviour@gmail.com` → `your-email@example.com`
- GitHub: `https://github.com/SaviourMadeit`
- LinkedIn: `https://www.linkedin.com/in/saviour-dagadu`
- Twitter: `https://twitter.com/pshyco_Blaq`

### 2. **Add Your Projects**

Find the `projects` array in `src/App.jsx`:

```jsx
{
  id: 1,
  title: "Your Project Name",
  category: "Category",
  description: "Short description",
  fullDescription: "Detailed description with bullets",
  tech: ["Tech1", "Tech2", "Tech3"],
  links: {
    website: "https://...",
    github: "https://..."
  },
  featured: true,
  gradient: "from-blue-400 to-cyan-600",
  image: "/images/your-project.jpg"
}
```

### 3. **Update Certifications**

Edit the `certifications` array:

```jsx
{
  id: 1,
  title: "Certification Name",
  issuer: "Organization",
  date: "Month Year",
  credentialId: "ID-XXXXX",
  credentialUrl: "https://verify-link.com",
  category: "Category",
  color: "from-blue-400 to-cyan-400"
}
```

### 4. **Add Testimonials**

Update the `testimonials` array:

```jsx
{
  id: 1,
  name: "Person Name",
  title: "Job Title",
  company: "Company",
  testimonial: "Their quote about you...",
  image: "https://image-url.jpg",
  rating: 5
}
```

### 5. **Customize Colors**

Tailwind color classes throughout the code:

- `from-blue-400 to-cyan-400` → Any gradient combination
- `text-blue-400` → Any text color
- `bg-blue-500` → Any background color

See [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) for all options.

### 6. **Update Images**

Place images in `/public/images/`:

- Profile: `Profile_1.jpg`
- Banner: `Workshop.jpg`
- Projects: `farm king.jpg`, `Farm_King.jpeg`, etc.

Update image paths in the code to match your files.

### 7. **Google Analytics**

Update tracking ID in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
```

Get your ID from [Google Analytics](https://analytics.google.com/)

---

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px (`sm`)
- **Tablet**: 641px - 1024px (`md`)
- **Desktop**: 1025px+ (`lg`)

---

## 🎨 Theme System

### Auto Theme (Default)

Automatically matches system preference (dark/light mode)

### Manual Override

Users can toggle between:

- **Auto** - System preference
- **Day** - Light mode
- **Night** - Dark mode

Theme preference is applied instantly across all sections.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
VITE_CONTACT_EMAIL=your-email@example.com
```

---

## 📊 Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your portfolio
3. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. Update the script tag in `index.html`
5. Track page views, user engagement, and more

---

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
# Push dist folder to gh-pages branch
```

### Netlify

1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Import project from GitHub
2. Vercel auto-detects Vite configuration
3. One-click deployment

### Traditional Host

1. Run `npm run build`
2. Upload contents of `dist` folder to your server
3. Configure server for SPA routing

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (all categories)
- **Page Load**: <2 seconds (typical)
- **Images**: Optimized with lazy loading
- **Bundle Size**: ~180KB (gzipped)

---

## 🔐 Security

- No external trackers (except Google Analytics)
- No user data collection
- Contact form uses native `mailto:` (no backend)
- Respects user privacy preferences

---

## 📝 Project Structure

```

portfolio-website/
├── public/
│   ├── images/
│   │   ├── Profile_1.jpg
│   │   ├── Workshop.jpg
│   │   └── ... (other images)
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite config
├── tailwind.config.js   # Tailwind config
└── README.md            # This file

```

---

## 🐛 Troubleshooting

### Theme not persisting?

- Check browser localStorage settings
- Ensure cookies are enabled

### Images not loading?

- Verify image paths match actual filenames (case-sensitive)
- Check `/public/images/` folder exists

### Contact form not working?

- Confirm email client is configured on your device
- Try a different email client if using mailto:

### Slow performance?

- Check image file sizes (compress before upload)
- Run `npm run build` and check bundle size

---

## 📞 Support

For issues or questions:

- Email: `Senamdagadusaviour@gmail.com`
- GitHub: [SaviourMadeit](https://github.com/SaviourMadeit)
- LinkedIn: [saviour-dagadu](https://www.linkedin.com/in/saviour-dagadu)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

---
**Built with ❤️ by Saviour Dagadu | © 2024 - 2025**
