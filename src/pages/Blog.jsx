import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import PageBackground from "../components/PageBackground";
import SplashCursor from "../components/SplashCursor";
import { usePerformance } from "../contexts/PerformanceContext";

const Blog = () => {
  const { currentTier } = usePerformance();

  // Function to calculate read time based on content
  const calculateReadTime = (content) => {
    // Remove HTML tags and count words
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.trim().split(/\s+/).length;
    // Average reading speed: 200 words per minute
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${readTimeMinutes} min read`;
  };

  // Blog posts by Ahmad Nazzal
  const blogPosts = [
    {
      id: 1,
      title: "Full-Stack Development: MERN vs PERN Stack Comparison Guide",
      excerpt:
        "A comprehensive comparison between MERN and PERN stacks, exploring when to use MongoDB vs PostgreSQL and their respective advantages in modern web development.",
      content: `
        <h2>Introduction</h2>
        <p>As a full-stack developer working with both MERN and PERN stacks, I often get asked which one to choose for a new project. Both stacks are powerful and widely used, but they serve different purposes and have distinct advantages.</p>
        
        <h2>What is MERN Stack?</h2>
        <p>MERN stands for MongoDB, Express.js, React, and Node.js. It's a JavaScript-based stack that allows developers to build full-stack applications using a single programming language.</p>
        
        <h3>Advantages of MERN:</h3>
        <ul>
          <li>Single language (JavaScript) across the entire stack</li>
          <li>MongoDB's flexible schema design</li>
          <li>Excellent for rapid prototyping</li>
          <li>Great for applications with evolving data structures</li>
        </ul>
        
        <h2>What is PERN Stack?</h2>
        <p>PERN stands for PostgreSQL, Express.js, React, and Node.js. It's similar to MERN but uses PostgreSQL instead of MongoDB as the database.</p>
        
        <h3>Advantages of PERN:</h3>
        <ul>
          <li>ACID compliance and data integrity</li>
          <li>Strong relational data modeling</li>
          <li>Excellent performance for complex queries</li>
          <li>Better for applications requiring strict data consistency</li>
        </ul>
        
        <h2>When to Choose MERN</h2>
        <p>Choose MERN when you need rapid development, flexible schema, or when working with document-based data structures. It's perfect for content management systems, social media applications, or any project where data structure might evolve.</p>
        
        <h2>When to Choose PERN</h2>
        <p>Choose PERN when you need strong data consistency, complex relationships between data, or when building financial applications, e-commerce platforms, or any system where data integrity is crucial.</p>
        
        <h2>Conclusion</h2>
        <p>Both stacks are excellent choices. The decision should be based on your project requirements, team expertise, and specific use cases. As a developer, being proficient in both gives you the flexibility to choose the right tool for each project.</p>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "8 min read",
      tags: ["MERN", "PERN", "MongoDB", "PostgreSQL", "Full-Stack"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Teaching React: Best Practices for Mentoring New Developers",
      excerpt:
        "Insights from my experience as a Teaching Assistant at MERAKI JO, sharing effective strategies for teaching React concepts and helping students overcome common challenges.",
      content: `
        <h2>My Teaching Journey at MERAKI JO</h2>
        <p>As a Teaching Assistant at MERAKI JO, I've had the privilege of mentoring numerous students in their React development journey. Teaching React effectively requires understanding both the technical concepts and the learning process.</p>
        
        <h2>Common Challenges Students Face</h2>
        <p>From my experience, students often struggle with:</p>
        <ul>
          <li>Understanding component lifecycle</li>
          <li>State management concepts</li>
          <li>Props vs State distinction</li>
          <li>Event handling and binding</li>
          <li>Hooks implementation</li>
        </ul>
        
        <h2>Effective Teaching Strategies</h2>
        <h3>1. Start with the Basics</h3>
        <p>Always begin with fundamental concepts like JSX, components, and props before diving into complex topics like hooks or state management.</p>
        
        <h3>2. Hands-on Learning</h3>
        <p>Encourage students to build small projects from day one. Theory without practice doesn't stick in programming.</p>
        
        <h3>3. Real-world Examples</h3>
        <p>Use practical examples that students can relate to. Build a simple todo app, weather widget, or calculator together.</p>
        
        <h2>Mentoring Best Practices</h2>
        <p>As a mentor, I focus on:</p>
        <ul>
          <li>Creating a safe learning environment</li>
          <li>Encouraging questions and experimentation</li>
          <li>Providing constructive feedback</li>
          <li>Celebrating small wins and progress</li>
        </ul>
        
        <h2>Tools and Resources I Recommend</h2>
        <p>For teaching React effectively, I use:</p>
        <ul>
          <li>CodeSandbox for quick prototyping</li>
          <li>React DevTools for debugging</li>
          <li>Official React documentation</li>
          <li>Interactive tutorials and exercises</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Teaching React is not just about sharing knowledge; it's about inspiring confidence and fostering a love for learning. Every student's journey is unique, and as mentors, we must adapt our approach to meet their individual needs.</p>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "6 min read",
      tags: ["Teaching", "React", "Mentoring", "Education"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "Building Responsive UIs with Material UI and Ant Design",
      excerpt:
        "A practical guide to creating beautiful, responsive user interfaces using Material UI and Ant Design components, with real-world examples and best practices.",
      content: `
        <h2>Introduction to UI Frameworks</h2>
        <p>In modern React development, UI frameworks like Material UI and Ant Design have become essential tools for creating professional, responsive interfaces quickly and efficiently.</p>
        
        <h2>Material UI (MUI)</h2>
        <p>Material UI is based on Google's Material Design principles and provides a comprehensive set of React components.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Material Design 3 components</li>
          <li>Customizable theming system</li>
          <li>Accessibility built-in</li>
          <li>Responsive design utilities</li>
        </ul>
        
        <h2>Ant Design</h2>
        <p>Ant Design is a design system and React UI library that provides high-quality components for enterprise applications.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Enterprise-class UI components</li>
          <li>Internationalization support</li>
          <li>Rich data entry components</li>
          <li>Professional design language</li>
        </ul>
        
        <h2>When to Use Each Framework</h2>
        <h3>Choose Material UI when:</h3>
        <ul>
          <li>Building consumer-facing applications</li>
          <li>Following Google's design guidelines</li>
          <li>Need extensive customization options</li>
        </ul>
        
        <h3>Choose Ant Design when:</h3>
        <ul>
          <li>Building admin dashboards</li>
          <li>Creating enterprise applications</li>
          <li>Need complex data tables and forms</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>Regardless of which framework you choose:</p>
        <ul>
          <li>Maintain consistency in your design system</li>
          <li>Customize themes to match your brand</li>
          <li>Test accessibility features</li>
          <li>Optimize for mobile devices</li>
        </ul>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "10 min read",
      tags: ["Material UI", "Ant Design", "UI/UX", "React"],
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
    {
      id: 4,
      title: "TypeScript in Modern React Development: A Beginner's Guide",
      excerpt:
        "Learn how to integrate TypeScript into your React projects, covering basic types, interfaces, and advanced patterns that will make your code more robust and maintainable.",
      content: `
        <h2>Why TypeScript with React?</h2>
        <p>TypeScript brings static typing to JavaScript, making React applications more maintainable, scalable, and less prone to runtime errors.</p>
        
        <h2>Setting Up TypeScript with React</h2>
        <p>Getting started with TypeScript in React is straightforward, especially with Create React App or Vite.</p>
        
        <h2>Basic TypeScript Concepts</h2>
        <h3>1. Basic Types</h3>
        <p>TypeScript provides several basic types including string, number, boolean, array, and object.</p>
        
        <h3>2. Interfaces</h3>
        <p>Interfaces define the structure of objects and are particularly useful for React props and state.</p>
        
        <h3>3. Union Types</h3>
        <p>Union types allow a variable to be one of several types, useful for component variants.</p>
        
        <h2>React-Specific TypeScript Patterns</h2>
        <h3>Typing Props</h3>
        <p>Define interfaces for your component props to ensure type safety.</p>
        
        <h3>Typing State</h3>
        <p>Use generics with useState to type your component state.</p>
        
        <h3>Typing Event Handlers</h3>
        <p>TypeScript provides built-in types for common React events.</p>
        
        <h2>Advanced Patterns</h2>
        <p>As you become more comfortable with TypeScript, explore advanced patterns like:</p>
        <ul>
          <li>Generic components</li>
          <li>Conditional types</li>
          <li>Utility types</li>
          <li>Type guards</li>
        </ul>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Start with strict mode enabled</li>
          <li>Use interfaces for object shapes</li>
          <li>Leverage TypeScript's inference</li>
          <li>Don't over-type simple cases</li>
        </ul>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "12 min read",
      tags: ["TypeScript", "React", "JavaScript", "Tutorial"],
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Next.js 14: New Features and Performance Improvements",
      excerpt:
        "Exploring the latest features in Next.js 14, including the new App Router, Server Components, and performance optimizations that can boost your application's speed.",
      content: `
        <h2>What's New in Next.js 14</h2>
        <p>Next.js 14 brings significant improvements in performance, developer experience, and new features that make building React applications even more powerful.</p>
        
        <h2>Key Features</h2>
        <h3>1. App Router (Stable)</h3>
        <p>The App Router is now stable and provides a new way to structure your Next.js applications with improved performance and developer experience.</p>
        
        <h3>2. Server Components</h3>
        <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving initial page load performance.</p>
        
        <h3>3. Turbopack (Beta)</h3>
        <p>Turbopack is a new bundler that's significantly faster than Webpack, especially for large applications.</p>
        
        <h2>Performance Improvements</h2>
        <ul>
          <li>Faster build times with Turbopack</li>
          <li>Improved caching strategies</li>
          <li>Better code splitting</li>
          <li>Enhanced image optimization</li>
        </ul>
        
        <h2>Developer Experience</h2>
        <p>Next.js 14 focuses heavily on improving the developer experience with:</p>
        <ul>
          <li>Better error messages</li>
          <li>Improved debugging tools</li>
          <li>Enhanced TypeScript support</li>
          <li>Streamlined configuration</li>
        </ul>
        
        <h2>Migration Guide</h2>
        <p>If you're upgrading from an older version of Next.js, here are the key steps:</p>
        <ol>
          <li>Update your dependencies</li>
          <li>Review breaking changes</li>
          <li>Test your application thoroughly</li>
          <li>Consider migrating to the App Router</li>
        </ol>
        
        <h2>Best Practices</h2>
        <p>To get the most out of Next.js 14:</p>
        <ul>
          <li>Use Server Components where appropriate</li>
          <li>Leverage the new caching strategies</li>
          <li>Optimize your images with the built-in Image component</li>
          <li>Take advantage of the improved TypeScript support</li>
        </ul>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "9 min read",
      tags: ["Next.js", "Performance", "React", "Web Development"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
    {
      id: 6,
      title:
        "My Teaching Journey: From React Student to MERAKI JO Teaching Assistant",
      excerpt:
        "Sharing my personal journey of becoming a Teaching Assistant, the challenges I faced, and how mentoring others has helped me grow as a developer.",
      content: `
        <h2>The Beginning of My Journey</h2>
        <p>My journey at MERAKI JO started as a student eager to learn full-stack development. Little did I know that this experience would lead me to become a Teaching Assistant, helping others on their coding journey.</p>
        
        <h2>Learning the Fundamentals</h2>
        <p>As a student, I focused on mastering the MERN and PERN stacks. The structured curriculum at MERAKI JO provided a solid foundation in:</p>
        <ul>
          <li>React fundamentals and advanced concepts</li>
          <li>Node.js and Express.js backend development</li>
          <li>Database design with MongoDB and PostgreSQL</li>
          <li>Modern JavaScript and TypeScript</li>
        </ul>
        
        <h2>The Transition to Teaching</h2>
        <p>After completing my studies, I was offered the opportunity to become a Teaching Assistant. This role has been incredibly rewarding and has taught me valuable skills beyond just coding.</p>
        
        <h2>Challenges I Faced</h2>
        <h3>1. Explaining Complex Concepts</h3>
        <p>One of the biggest challenges was learning how to break down complex programming concepts into digestible pieces for beginners.</p>
        
        <h3>2. Different Learning Styles</h3>
        <p>Every student learns differently. Some prefer hands-on coding, while others need more theoretical explanations first.</p>
        
        <h3>3. Keeping Up with Technology</h3>
        <p>As a TA, I need to stay current with the latest developments in web technologies to provide accurate guidance.</p>
        
        <h2>Skills I've Developed</h2>
        <p>Being a Teaching Assistant has helped me develop:</p>
        <ul>
          <li>Communication and presentation skills</li>
          <li>Patience and empathy</li>
          <li>Problem-solving approaches</li>
          <li>Leadership and mentoring abilities</li>
        </ul>
        
        <h2>Impact on My Development</h2>
        <p>Teaching others has actually made me a better developer. Explaining concepts forces me to understand them more deeply, and I often discover new approaches through student questions.</p>
        
        <h2>Advice for Aspiring Developers</h2>
        <p>To those starting their coding journey:</p>
        <ul>
          <li>Don't be afraid to ask questions</li>
          <li>Practice consistently, even if it's just 30 minutes a day</li>
          <li>Build projects to apply what you learn</li>
          <li>Join communities and learn from others</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>As I continue my journey as both a developer and a Teaching Assistant, I'm excited about the opportunities to help shape the next generation of web developers while continuing to grow my own skills.</p>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "7 min read",
      tags: ["Personal", "Teaching", "Career", "Growth"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
  ];

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen pt-16 relative">
      {/* SplashCursor Effect */}
      <SplashCursor key={`splash-${currentTier}`} />

      {/* Page Background */}
      <PageBackground variant="blog" opacity={0.08} />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">Blog</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
              >
                Sharing my journey as a MERN & PERN stack developer and Teaching
                Assistant. Here you'll find tutorials, insights, and experiences
                from mentoring students and building modern web applications.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 sm:mb-8"
              >
                Featured Post
              </motion.h2>

              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="card overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 sm:h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="px-2 sm:px-3 py-1 bg-primary-600 text-white text-xs sm:text-sm font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 md:gap-4 space-y-2 sm:space-y-0 text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-3 sm:mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4">
                          {post.title}
                        </h3>

                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center space-x-1 px-2 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm rounded-full"
                            >
                              <Tag className="w-2 h-2 sm:w-3 sm:h-3" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
            </motion.div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 sm:mb-8"
              >
                All Posts
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <motion.article
                      key={post.id}
                      variants={itemVariants}
                      className="card overflow-hidden group"
                    >
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-sm text-neutral-500 dark:text-neutral-500 mb-3 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {post.title}
                        </h3>

                        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Connect With Me */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                <span className="gradient-text">Let's Connect</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
              >
                Ready to start your next project or have questions about web
                development? I'm here to help you succeed in your coding
                journey.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Quick response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Expert guidance</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
              >
                <motion.a
                  href="/contact"
                  className="btn-primary whitespace-nowrap px-8 py-4 text-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/projects"
                  className="btn-secondary whitespace-nowrap px-8 py-4 text-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm text-neutral-500 dark:text-neutral-400 mt-6"
              >
                Available for freelance projects, mentoring, and collaboration
                opportunities
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
