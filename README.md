# Ahmad Nazzal - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, dark/light theme support, and advanced performance optimization.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion, Three.js
- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Dark/Light Theme**: Smooth theme switching with system preference detection
- **Advanced Performance System**: Automatic device detection with 4 performance tiers
- **Interactive Animations**: Framer Motion powered animations and Three.js effects
- **Real Tech Icons**: Authentic FontAwesome, Simple Icons, and Boxicons
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Production Ready**: Clean, optimized codebase with no debugging artifacts

## 📁 Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── Header.jsx                # Navigation header with theme toggle
│   ├── Footer.jsx                # Site footer with social links
│   ├── ProjectCard.jsx           # Project showcase cards
│   ├── AnimatedHero.jsx          # Hero section with animations
│   ├── ThemeToggle.jsx           # Dark/light theme switcher
│   ├── LiquidEther.jsx           # Three.js background effects
│   ├── OptimizedLiquidEther.jsx  # Performance-optimized effects
│   ├── PerformanceMonitor.jsx    # Performance monitoring component
│   ├── PerformanceSettings.jsx   # Performance configuration modal
│   └── GlobalLoader.jsx          # Global loading component
├── pages/                        # Page components
│   ├── Home.jsx                  # Landing page with tech stack
│   ├── About.jsx                 # About page with skills and experience
│   ├── Projects.jsx              # Projects showcase with filtering
│   ├── Contact.jsx               # Contact form and information
│   ├── Blog.jsx                  # Blog posts listing
│   └── BlogPost.jsx              # Individual blog post page
├── contexts/                     # React contexts
│   └── PerformanceContext.jsx    # Performance management context
├── hooks/                        # Custom React hooks
│   ├── useTheme.js               # Theme management hook
│   └── usePerformanceSettings.js # Performance settings hook
├── utils/                        # Utility functions
│   └── performanceDetector.js    # Device capability detection
├── data/                         # Static data
│   └── projects.json             # Project information
├── styles/                       # Global styles
│   └── index.css                 # Tailwind CSS and custom styles
├── App.jsx                       # Main app component with routing
└── main.jsx                      # App entry point
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

   ```bash
   # If using git
   git clone <repository-url>
   cd portfolio-website

   # Or extract the downloaded files to a folder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Current Configuration

### Personal Information

**Name**: Ahmad Nazzal  
**Title**: Full-Stack Developer  
**Location**: Amman, Jordan  
**Email**: nazzall.ahmed@gmail.com  
**Phone**: +962798546036

### Contact Information

The contact information is configured in:

- **Contact.jsx**: Interactive contact cards with copy functionality
- **Footer.jsx**: Social links and contact details
- **Header.jsx**: Professional branding and navigation

### Profile Image

✅ **Configured**: Profile image is set up at `public/images/profile.jpg` and displays in:

- About page hero section
- Header logo
- Footer branding
- Blog post author sections

### Technology Stack

✅ **Configured**: Real technology icons with authentic branding:

- **React**: FontAwesome React icon
- **Node.js**: FontAwesome Node.js icon
- **JavaScript**: FontAwesome JavaScript icon
- **TypeScript**: Boxicons TypeScript logo
- **MongoDB**: Simple Icons MongoDB logo
- **PostgreSQL**: Simple Icons PostgreSQL logo
- **Express**: Simple Icons Express logo
- **Material UI**: Simple Icons MUI logo
- **Ant Design**: Ant Design Icons logo
- **Tailwind CSS**: FontAwesome CSS icon
- **Git**: FontAwesome Git icon
- **Vibe Coding**: FontAwesome Terminal icon

### Performance System

✅ **Configured**: Advanced performance optimization with 4 tiers:

- **Low Performance**: Optimized for older devices
- **Medium Performance**: Balanced for most devices
- **High Performance**: Enhanced for modern devices
- **Ultra Performance**: Maximum quality for high-end devices

### CV/Resume

✅ **Configured**: CV download functionality in:

- Header component
- Home page hero section
- About page call-to-action

## 🎨 Design System

### Color Palette

**Light Theme:**

- Primary: `#0ea5e9` (Blue)
- Accent: `#ef4444` (Red)
- Neutral: `#737373` (Gray)

**Dark Theme:**

- Primary: `#38bdf8` (Light Blue)
- Accent: `#f87171` (Light Red)
- Neutral: `#a3a3a3` (Light Gray)

### Typography

- **Font Family**: Inter (primary), JetBrains Mono (code)
- **Headings**: 2xl-7xl (1.5rem - 4.5rem)
- **Body**: base-lg (1rem - 1.125rem)

### Spacing Scale

- **xs**: 0.75rem
- **sm**: 0.875rem
- **base**: 1rem
- **lg**: 1.125rem
- **xl**: 1.25rem
- **2xl**: 1.5rem
- **3xl**: 1.875rem
- **4xl**: 2.25rem
- **5xl**: 3rem
- **6xl**: 3.75rem
- **7xl**: 4.5rem

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings**:

   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**: Vercel will automatically deploy on every push

### Netlify

1. **Connect your repository to Netlify**
2. **Configure build settings**:

   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**: Netlify will automatically deploy on every push

### Manual Deployment

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

## 📝 Content Guidelines

### Project Images

- **Recommended size**: 800x600px
- **Format**: JPG or PNG
- **Optimization**: Use tools like TinyPNG or ImageOptim
- **Place in**: `public/images/`

### Blog Posts

- **Structure**: Title, excerpt, content, tags, date
- **Images**: 1200x630px for featured images
- **SEO**: Include meta descriptions and keywords

### Contact Form

The contact form is set up for easy integration with:

- **Formspree**: Add your Formspree endpoint
- **Netlify Forms**: Add `netlify` attribute to form
- **Custom Backend**: Update the submit handler

## 🔧 Advanced Customization

### Adding New Pages

1. **Create page component** in `src/pages/`
2. **Add route** in `src/App.jsx`
3. **Update navigation** in `src/components/Header.jsx`

### Custom Animations

Use Framer Motion variants for consistent animations:

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```

### Theme Customization

Update colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom primary colors
  },
  // ... other colors
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Connect your repository to Vercel**
2. **Automatic deployment**: Vercel will detect the Vite configuration
3. **Build settings** (auto-detected):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

**Manual deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Other Platforms

**Netlify:**

- Build Command: `npm run build`
- Publish Directory: `dist`

**GitHub Pages:**

- Build Command: `npm run build`
- Source: `dist` folder

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📧 Contact

**Ahmad Nazzal**  
Full-Stack Developer  
📧 nazzall.ahmed@gmail.com  
📱 +962798546036  
📍 Amman, Jordan

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js for interactive backgrounds
- **Icons**: React Icons (FontAwesome, Simple Icons, Boxicons, Ant Design)
- **Performance**: Custom performance detection and optimization system
- **Deployment**: Production-ready with optimized build

---

**Built with ❤️ by Ahmad Nazzal**
