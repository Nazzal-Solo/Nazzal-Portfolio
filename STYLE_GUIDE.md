# Style Guide

This document outlines the design system, color palette, typography, and component guidelines for the portfolio website.

## 🎨 Color Palette

### Primary Colors

```css
/* Light Theme */
--primary-50: #f0f9ff
--primary-100: #e0f2fe
--primary-200: #bae6fd
--primary-300: #7dd3fc
--primary-400: #38bdf8
--primary-500: #0ea5e9  /* Main primary */
--primary-600: #0284c7
--primary-700: #0369a1
--primary-800: #075985
--primary-900: #0c4a6e

/* Dark Theme */
--primary-400: #38bdf8  /* Main primary for dark */
--primary-500: #0ea5e9
--primary-600: #0284c7
```

### Neutral Colors

```css
/* Light Theme */
--neutral-50: #fafafa
--neutral-100: #f5f5f5
--neutral-200: #e5e5e5
--neutral-300: #d4d4d4
--neutral-400: #a3a3a3
--neutral-500: #737373
--neutral-600: #525252
--neutral-700: #404040
--neutral-800: #262626
--neutral-900: #171717

/* Dark Theme */
--neutral-100: #f5f5f5  /* Text on dark */
--neutral-200: #e5e5e5
--neutral-300: #d4d4d4
--neutral-400: #a3a3a3
--neutral-500: #737373
--neutral-600: #525252
--neutral-700: #404040  /* Cards on dark */
--neutral-800: #262626  /* Background on dark */
--neutral-900: #171717
```

### Accent Colors

```css
/* Light Theme */
--accent-500: #ef4444  /* Main accent */
--accent-600: #dc2626

/* Dark Theme */
--accent-400: #f87171  /* Main accent for dark */
--accent-500: #ef4444
```

## 📝 Typography

### Font Families

```css
/* Primary Font */
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  sans-serif;

/* Monospace Font */
font-family: "JetBrains Mono", "Fira Code", Consolas, monospace;
```

### Font Sizes

```css
/* Text Sizes */
text-xs: 0.75rem    /* 12px */
text-sm: 0.875rem   /* 14px */
text-base: 1rem     /* 16px */
text-lg: 1.125rem   /* 18px */
text-xl: 1.25rem    /* 20px */
text-2xl: 1.5rem    /* 24px */
text-3xl: 1.875rem  /* 30px */
text-4xl: 2.25rem   /* 36px */
text-5xl: 3rem      /* 48px */
text-6xl: 3.75rem   /* 60px */
text-7xl: 4.5rem    /* 72px */
```

### Font Weights

```css
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
```

### Line Heights

```css
leading-tight: 1.25
leading-snug: 1.375
leading-normal: 1.5
leading-relaxed: 1.625
leading-loose: 2
```

## 📏 Spacing Scale

### Spacing Units

```css
/* Spacing Scale */
space-1: 0.25rem   /* 4px */
space-2: 0.5rem    /* 8px */
space-3: 0.75rem   /* 12px */
space-4: 1rem      /* 16px */
space-5: 1.25rem   /* 20px */
space-6: 1.5rem    /* 24px */
space-8: 2rem      /* 32px */
space-10: 2.5rem   /* 40px */
space-12: 3rem     /* 48px */
space-16: 4rem     /* 64px */
space-20: 5rem     /* 80px */
space-24: 6rem     /* 96px */
space-32: 8rem     /* 128px */
```

### Custom Spacing

```css
space-18: 4.5rem   /* 72px */
space-88: 22rem    /* 352px */
space-128: 32rem   /* 512px */
```

## 🎭 Component Styles

### Buttons

#### Primary Button

```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

#### Secondary Button

```css
.btn-secondary {
  @apply bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

#### Ghost Button

```css
.btn-ghost {
  @apply bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

### Cards

#### Base Card

```css
.card {
  @apply bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300;
}
```

#### Hover Card

```css
.card-hover {
  @apply hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300;
}
```

### Text Styles

#### Gradient Text

```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent;
}
```

#### Animated Underline

```css
.animated-underline {
  @apply relative;
}

.animated-underline::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300;
  content: "";
}

.animated-underline:hover::after {
  @apply w-full;
}
```

## 🎬 Animation Guidelines

### Framer Motion Variants

#### Container Variants

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

#### Item Variants

```jsx
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
```

### Animation Principles

- **Duration**: 0.3s for micro-interactions, 0.6s for page transitions
- **Easing**: Use `easeOut` for entrances, `easeIn` for exits
- **Stagger**: 0.1s between child elements
- **Reduced Motion**: Respect `prefers-reduced-motion`

### Hover Effects

```jsx
// Scale on hover
whileHover={{ scale: 1.05 }}

// Lift on hover
whileHover={{ y: -5 }}

// Slide on hover
whileHover={{ x: 4 }}
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Grid Systems

```css
/* Project Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Skills Grid */
grid-cols-2 md:grid-cols-4 lg:grid-cols-6

/* Contact Layout */
grid-cols-1 lg:grid-cols-2
```

## 🎯 Accessibility Guidelines

### Color Contrast

- **Normal text**: 4.5:1 minimum ratio
- **Large text**: 3:1 minimum ratio
- **Interactive elements**: 3:1 minimum ratio

### Focus States

```css
*:focus-visible {
  @apply outline-2 outline-offset-2 outline-primary-500;
}
```

### Skip Links

```css
.skip-link {
  @apply absolute -top-10 left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200;
}

.skip-link:focus {
  @apply top-4;
}
```

## 🖼️ Image Guidelines

### Aspect Ratios

- **Project images**: 4:3 (800x600px)
- **Blog images**: 16:9 (1200x630px)
- **Profile image**: 1:1 (400x400px)
- **Hero images**: 16:9 (1920x1080px)

### Optimization

- **Format**: WebP preferred, JPG fallback
- **Compression**: 80-90% quality
- **Lazy loading**: Implement for all images
- **Alt text**: Descriptive and meaningful

## 🎨 Design Tokens

### Shadows

```css
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

### Border Radius

```css
rounded-sm: 0.125rem   /* 2px */
rounded: 0.25rem       /* 4px */
rounded-md: 0.375rem   /* 6px */
rounded-lg: 0.5rem     /* 8px */
rounded-xl: 0.75rem    /* 12px */
rounded-2xl: 1rem      /* 16px */
rounded-full: 9999px
```

### Transitions

```css
transition-colors: color, background-color, border-color, text-decoration-color, fill, stroke
transition-opacity: opacity
transition-shadow: box-shadow
transition-transform: transform
transition-all: all
```

## 📋 Usage Examples

### Creating a New Component

```jsx
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.div
      className="card card-hover p-6"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Component Title
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">
        Component description
      </p>
    </motion.div>
  );
};
```

### Using Color Classes

```jsx
// Primary colors
<div className="bg-primary-600 text-white">
<div className="text-primary-600 dark:text-primary-400">

// Neutral colors
<div className="bg-neutral-100 dark:bg-neutral-800">
<div className="text-neutral-700 dark:text-neutral-300">

// Accent colors
<div className="bg-accent-500 text-white">
<div className="text-accent-600 dark:text-accent-400">
```

---

**Remember**: Consistency is key. Always use the design system tokens and follow the established patterns for a cohesive user experience.
