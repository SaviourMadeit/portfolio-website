# Saviour Dagadu Portfolio Website

A professional portfolio and business website for Saviour Dagadu, showcasing embedded systems engineering, firmware development, hardware design, IoT consulting, and robotics mentoring.

This project is structured as a modern brand-facing website for a technical professional, combining service positioning, portfolio credibility, and lead generation in a clean, responsive experience.

## Overview

The app presents a cohesive professional identity built around technical capability and real-world implementation. It includes:

- a strong personal brand and positioning statement
- service offerings tailored to embedded systems, firmware, hardware, and IoT
- portfolio case studies with technical depth
- personal background and value proposition
- blog and knowledge-sharing content
- a contact flow for new project inquiries

This is not a generic template. The content model and page structure were designed to reflect a real technology business and engineering portfolio.

## Brand and Product Positioning

Saviour Dagadu is positioned as:

- Embedded Systems Engineer
- Firmware Developer
- Hardware Designer
- Robotics Mentor
- Product and Systems Consultant

The design language is intentionally modern, technical, and trustworthy, using a dark/light theme, soft gradients, structured content blocks, and engineering-inspired visuals.

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React
- Google Analytics (optional)

## Key Features

- Fully responsive multi-page portfolio experience
- Professional homepage, services page, portfolio page, about page, blog, and contact page
- Theme toggle with auto-detect and manual override
- Reusable section architecture for clean scalability
- Centralized content management through `src/data/siteData.js`
- Dynamic service and project data for consistent presentation
- Contact form that opens the user’s email client with a project brief prefilled
- Smooth scrolling, modern UI treatment, and accessibility-focused interactions
- Production-ready build for deployment on static hosting platforms

## Project Structure

```text
portfolio-website/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── data/
│   │   ├── index.js
│   │   ├── navLinks.js
│   │   └── siteData.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   └── ServicesPage.jsx
│   ├── sections/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── analytics.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── README.Md
├── vite.config.js
├── .gitignore
└── ...
```

## Content Architecture

The app uses a centralized content model instead of hardcoding information separately in multiple pages.

The main content source is:

- `src/data/siteData.js`

This file includes:

- personal profile information
- navigation items
- services offered
- portfolio project details
- process steps
- certifications
- testimonials
- contact and social links

Related exports are managed in:

- `src/data/index.js`
- `src/data/navLinks.js`

This structure keeps the app maintainable and reduces duplication as the portfolio grows.

## Pages Included

- Home
- Services
- Portfolio
- About
- Blog
- Contact

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the app in your browser at:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## Environment Variables

Optional analytics support:

```env
VITE_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
```

If this variable is missing, the analytics initializer exits quietly.

## Customization

### Update personal and business information

Edit the site profile and brand details in:

- `src/data/siteData.js`

You can update:

- name and tagline
- email and phone
- GitHub and LinkedIn links
- services
- project portfolio content
- testimonials and certifications
- location and contact data

### Update page copy

Modify the route pages in:

- `src/pages/`

### Adjust styling and layout

Key styling and structure are handled in:

- `src/layouts/MainLayout.jsx`
- `src/index.css`
- component sections under `src/sections/`

## Deployment

This project is a static Vite application and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- any standard static hosting provider

Typical deployment flow:

```bash
npm run build
```

Then publish the generated `dist/` directory.

## Accessibility and User Experience

The app includes:

- responsive layouts for mobile, tablet, and desktop
- keyboard-accessible navigation
- visible focus states
- skip-to-content link
- reduced-motion support
- readable contrast and accessible structure

## Contact and Inquiries

For business inquiries, consulting, or collaboration opportunities:

- Email: Senamdagadusaviour@gmail.com
- GitHub: https://github.com/SaviourMadeit
- LinkedIn: https://www.linkedin.com/in/saviour-dagadu

## License

This project is intended for personal and professional portfolio use. Licensing details may be clarified by the author if redistribution or reuse is intended beyond personal use.

---

Built for Saviour Dagadu | Embedded Systems Engineer • Firmware Developer • Robotics Mentor
