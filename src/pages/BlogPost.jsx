import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag, BookOpen } from "lucide-react";
import PageBackground from "../components/PageBackground";
import SplashCursor from "../components/SplashCursor";
import { usePerformance } from "../contexts/PerformanceContext";
import { useCursor } from "../contexts/CursorContext";

const BlogPost = () => {
  const { id } = useParams();
  const { currentTier } = usePerformance();
  const { isEnabled: isCursorEnabled } = useCursor();
  const [blogPost, setBlogPost] = useState(null);

  // Function to calculate read time based on content
  const calculateReadTime = (content) => {
    // Remove HTML tags and count words
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.trim().split(/\s+/).length;
    // Average reading speed: 200 words per minute
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${readTimeMinutes} min read`;
  };

  // Blog posts data (same as in Blog.jsx)
  const blogPosts = [
    {
      id: 1,
      title: "Full-Stack Development: MERN vs PERN Stack Comparison Guide",
      excerpt:
        "A comprehensive comparison between MERN and PERN stacks, exploring when to use MongoDB vs PostgreSQL and their respective advantages in modern web development.",
      content: `
        <h2>Introduction</h2>
        <p>&nbsp;&nbsp;As a full-stack developer working with both MERN and PERN stacks, I often get asked which one to choose for a new project. Both stacks are powerful and widely used, but they serve different purposes and have distinct advantages.</p><br>
        
        
        <h2>What is MERN Stack?</h2>
        <p>&nbsp;&nbsp;MERN stands for MongoDB, Express.js, React, and Node.js. It's a JavaScript-based stack that allows developers to build full-stack applications using a single programming language.</p><br>
        
        <h3>Advantages of MERN:</h3>
        <ul>
          <li>&nbsp;&nbsp;Single language (JavaScript) across the entire stack</li>
          <li>&nbsp;&nbsp;MongoDB's flexible schema design</li>
          <li>&nbsp;&nbsp;Excellent for rapid prototyping</li>
          <li>&nbsp;&nbsp;Great for applications with evolving data structures</li>
        </ul>
        
        <h2>What is PERN Stack?</h2>
        <p>&nbsp;&nbsp;PERN stands for PostgreSQL, Express.js, React, and Node.js. It's similar to MERN but uses PostgreSQL instead of MongoDB as the database.</p><br>
        
        <h3>Advantages of PERN:</h3>
        <ul>
          <li>&nbsp;&nbsp;ACID compliance and data integrity</li>
          <li>&nbsp;&nbsp;Strong relational data modeling</li>
          <li>&nbsp;&nbsp;Excellent performance for complex queries</li>
          <li>&nbsp;&nbsp;Better for applications requiring strict data consistency</li>
        </ul>
        
        <h2>When to Choose MERN</h2>
        <p>&nbsp;&nbsp;Choose MERN when you need rapid development, flexible schema, or when working with document-based data structures. It's perfect for content management systems, social media applications, or any project where data structure might evolve.</p><br>
        
        <h2>When to Choose PERN</h2>
        <p>&nbsp;&nbsp;Choose PERN when you need strong data consistency, complex relationships between data, or when building financial applications, e-commerce platforms, or any system where data integrity is crucial.</p><br>
        
        <h2>Conclusion</h2>
        <p>&nbsp;&nbsp;Both stacks are excellent choices. The decision should be based on your project requirements, team expertise, and specific use cases. As a developer, being proficient in both gives you the flexibility to choose the right tool for each project.</p><br>
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
        <p>&nbsp;&nbsp;As a Teaching Assistant at MERAKI JO, I've had the privilege of mentoring numerous students in their React development journey. Teaching React effectively requires understanding both the technical concepts and the learning process.</p><br>
        
        <h2>Common Challenges Students Face</h2>
        <p>&nbsp;&nbsp;From my experience, students often struggle with:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Understanding component lifecycle</li>
          <li>&nbsp;&nbsp;State management concepts</li>
          <li>&nbsp;&nbsp;Props vs State distinction</li>
          <li>&nbsp;&nbsp;Event handling and binding</li>
          <li>&nbsp;&nbsp;Hooks implementation</li>
        </ul>
        
        <h2>Effective Teaching Strategies</h2>
        <h3>1. Start with the Basics</h3>
        <p>&nbsp;&nbsp;Always begin with fundamental concepts like JSX, components, and props before diving into complex topics like hooks or state management.</p><br>
        
        <h3>2. Hands-on Learning</h3>
        <p>&nbsp;&nbsp;Encourage students to build small projects from day one. Theory without practice doesn't stick in programming.</p><br>
        
        <h3>3. Real-world Examples</h3>
        <p>&nbsp;&nbsp;Use practical examples that students can relate to. Build a simple todo app, weather widget, or calculator together.</p><br>
        
        <h2>Mentoring Best Practices</h2>
        <p>&nbsp;&nbsp;As a mentor, I focus on:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Creating a safe learning environment</li>
          <li>&nbsp;&nbsp;Encouraging questions and experimentation</li>
          <li>&nbsp;&nbsp;Providing constructive feedback</li>
          <li>&nbsp;&nbsp;Celebrating small wins and progress</li>
        </ul>
        
        <h2>Tools and Resources I Recommend</h2>
        <p>&nbsp;&nbsp;For teaching React effectively, I use:</p><br>
        <ul>
          <li>&nbsp;&nbsp;CodeSandbox for quick prototyping</li>
          <li>&nbsp;&nbsp;React DevTools for debugging</li>
          <li>&nbsp;&nbsp;Official React documentation</li>
          <li>&nbsp;&nbsp;Interactive tutorials and exercises</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>&nbsp;&nbsp;Teaching React is not just about sharing knowledge; it's about inspiring confidence and fostering a love for learning. Every student's journey is unique, and as mentors, we must adapt our approach to meet their individual needs.</p><br>
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
        <p>&nbsp;&nbsp;In modern React development, UI frameworks like Material UI and Ant Design have become essential tools for creating professional, responsive interfaces quickly and efficiently.</p><br>
        
        <h2>Material UI (MUI)</h2>
        <p>&nbsp;&nbsp;Material UI is based on Google's Material Design principles and provides a comprehensive set of React components.</p><br>
        
        <h3>Key Features:</h3>
        <ul>
          <li>&nbsp;&nbsp;Material Design 3 components</li>
          <li>&nbsp;&nbsp;Customizable theming system</li>
          <li>&nbsp;&nbsp;Accessibility built-in</li>
          <li>&nbsp;&nbsp;Responsive design utilities</li>
        </ul>
        
        <h2>Ant Design</h2>
        <p>&nbsp;&nbsp;Ant Design is a design system and React UI library that provides high-quality components for enterprise applications.</p><br>
        
        <h3>Key Features:</h3>
        <ul>
          <li>&nbsp;&nbsp;Enterprise-class UI components</li>
          <li>&nbsp;&nbsp;Internationalization support</li>
          <li>&nbsp;&nbsp;Rich data entry components</li>
          <li>&nbsp;&nbsp;Professional design language</li>
        </ul>
        
        <h2>When to Use Each Framework</h2>
        <h3>Choose Material UI when:</h3>
        <ul>
          <li>&nbsp;&nbsp;Building consumer-facing applications</li>
          <li>&nbsp;&nbsp;Following Google's design guidelines</li>
          <li>&nbsp;&nbsp;Need extensive customization options</li>
        </ul>
        
        <h3>Choose Ant Design when:</h3>
        <ul>
          <li>&nbsp;&nbsp;Building admin dashboards</li>
          <li>&nbsp;&nbsp;Creating enterprise applications</li>
          <li>&nbsp;&nbsp;Need complex data tables and forms</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>&nbsp;&nbsp;Regardless of which framework you choose:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Maintain consistency in your design system</li>
          <li>&nbsp;&nbsp;Customize themes to match your brand</li>
          <li>&nbsp;&nbsp;Test accessibility features</li>
          <li>&nbsp;&nbsp;Optimize for mobile devices</li>
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
        <p>&nbsp;&nbsp;TypeScript brings static typing to JavaScript, making React applications more maintainable, scalable, and less prone to runtime errors.</p><br>
        
        <h2>Setting Up TypeScript with React</h2>
        <p>&nbsp;&nbsp;Getting started with TypeScript in React is straightforward, especially with Create React App or Vite.</p><br>
        
        <h2>Basic TypeScript Concepts</h2>
        <h3>1. Basic Types</h3>
        <p>&nbsp;&nbsp;TypeScript provides several basic types including string, number, boolean, array, and object.</p><br>
        
        <h3>2. Interfaces</h3>
        <p>&nbsp;&nbsp;Interfaces define the structure of objects and are particularly useful for React props and state.</p><br>
        
        <h3>3. Union Types</h3>
        <p>&nbsp;&nbsp;Union types allow a variable to be one of several types, useful for component variants.</p><br>
        
        <h2>React-Specific TypeScript Patterns</h2>
        <h3>Typing Props</h3>
        <p>&nbsp;&nbsp;Define interfaces for your component props to ensure type safety.</p><br>
        
        <h3>Typing State</h3>
        <p>&nbsp;&nbsp;Use generics with useState to type your component state.</p><br>
        
        <h3>Typing Event Handlers</h3>
        <p>&nbsp;&nbsp;TypeScript provides built-in types for common React events.</p><br>
        
        <h2>Advanced Patterns</h2>
        <p>&nbsp;&nbsp;As you become more comfortable with TypeScript, explore advanced patterns like:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Generic components</li>
          <li>&nbsp;&nbsp;Conditional types</li>
          <li>&nbsp;&nbsp;Utility types</li>
          <li>&nbsp;&nbsp;Type guards</li>
        </ul>
        
        <h2>Best Practices</h2>
        <ul>
          <li>&nbsp;&nbsp;Start with strict mode enabled</li>
          <li>&nbsp;&nbsp;Use interfaces for object shapes</li>
          <li>&nbsp;&nbsp;Leverage TypeScript's inference</li>
          <li>&nbsp;&nbsp;Don't over-type simple cases</li>
        </ul>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "12 min read",
      tags: ["TypeScript", "React", "JavaScript", "Tutorial"],
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Next.js 14: New Features and Performance Improvements",
      excerpt:
        "Exploring the latest features in Next.js 14, including the new App Router, Server Components, and performance optimizations that can boost your application's speed.",
      content: `
        <h2>What's New in Next.js 14</h2>
        <p>&nbsp;&nbsp;Next.js 14 brings significant improvements in performance, developer experience, and new features that make building React applications even more powerful.</p><br>
        
        <h2>Key Features</h2>
        <h3>1. App Router (Stable)</h3>
        <p>&nbsp;&nbsp;The App Router is now stable and provides a new way to structure your Next.js applications with improved performance and developer experience.</p><br>
        
        <h3>2. Server Components</h3>
        <p>&nbsp;&nbsp;Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving initial page load performance.</p><br>
        
        <h3>3. Turbopack (Beta)</h3>
        <p>&nbsp;&nbsp;Turbopack is a new bundler that's significantly faster than Webpack, especially for large applications.</p><br>
        
        <h2>Performance Improvements</h2>
        <ul>
          <li>&nbsp;&nbsp;Faster build times with Turbopack</li>
          <li>&nbsp;&nbsp;Improved caching strategies</li>
          <li>&nbsp;&nbsp;Better code splitting</li>
          <li>&nbsp;&nbsp;Enhanced image optimization</li>
        </ul>
        
        <h2>Developer Experience</h2>
        <p>&nbsp;&nbsp;Next.js 14 focuses heavily on improving the developer experience with:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Better error messages</li>
          <li>&nbsp;&nbsp;Improved debugging tools</li>
          <li>&nbsp;&nbsp;Enhanced TypeScript support</li>
          <li>&nbsp;&nbsp;Streamlined configuration</li>
        </ul>
        
        <h2>Migration Guide</h2>
        <p>&nbsp;&nbsp;If you're upgrading from an older version of Next.js, here are the key steps:</p><br>
        <ol>
          <li>&nbsp;&nbsp;Update your dependencies</li>
          <li>&nbsp;&nbsp;Review breaking changes</li>
          <li>&nbsp;&nbsp;Test your application thoroughly</li>
          <li>&nbsp;&nbsp;Consider migrating to the App Router</li>
        </ol>
        
        <h2>Best Practices</h2>
        <p>&nbsp;&nbsp;To get the most out of Next.js 14:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Use Server Components where appropriate</li>
          <li>&nbsp;&nbsp;Leverage the new caching strategies</li>
          <li>&nbsp;&nbsp;Optimize your images with the built-in Image component</li>
          <li>&nbsp;&nbsp;Take advantage of the improved TypeScript support</li>
        </ul>
      `,
      author: "Ahmad Nazzal",
      date: "2024-09-12",
      readTime: "9 min read",
      tags: ["Next.js", "Performance", "React", "Web Development"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center&auto=format&q=80",
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
        <p>&nbsp;&nbsp;My journey at MERAKI JO started as a student eager to learn full-stack development. Little did I know that this experience would lead me to become a Teaching Assistant, helping others on their coding journey.</p><br>
        
        <h2>Learning the Fundamentals</h2>
        <p>&nbsp;&nbsp;As a student, I focused on mastering the MERN and PERN stacks. The structured curriculum at MERAKI JO provided a solid foundation in:</p><br>
        <ul>
          <li>&nbsp;&nbsp;React fundamentals and advanced concepts</li>
          <li>&nbsp;&nbsp;Node.js and Express.js backend development</li>
          <li>&nbsp;&nbsp;Database design with MongoDB and PostgreSQL</li>
          <li>&nbsp;&nbsp;Modern JavaScript and TypeScript</li>
        </ul>
        
        <h2>The Transition to Teaching</h2>
        <p>&nbsp;&nbsp;After completing my studies, I was offered the opportunity to become a Teaching Assistant. This role has been incredibly rewarding and has taught me valuable skills beyond just coding.</p><br>
        
        <h2>Challenges I Faced</h2>
        <h3>1. Explaining Complex Concepts</h3>
        <p>&nbsp;&nbsp;One of the biggest challenges was learning how to break down complex programming concepts into digestible pieces for beginners.</p><br>
        
        <h3>2. Different Learning Styles</h3>
        <p>&nbsp;&nbsp;Every student learns differently. Some prefer hands-on coding, while others need more theoretical explanations first.</p><br>
        
        <h3>3. Keeping Up with Technology</h3>
        <p>&nbsp;&nbsp;As a TA, I need to stay current with the latest developments in web technologies to provide accurate guidance.</p><br>
        
        <h2>Skills I've Developed</h2>
        <p>&nbsp;&nbsp;Being a Teaching Assistant has helped me develop:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Communication and presentation skills</li>
          <li>&nbsp;&nbsp;Patience and empathy</li>
          <li>&nbsp;&nbsp;Problem-solving approaches</li>
          <li>&nbsp;&nbsp;Leadership and mentoring abilities</li>
        </ul>
        
        <h2>Impact on My Development</h2>
        <p>&nbsp;&nbsp;Teaching others has actually made me a better developer. Explaining concepts forces me to understand them more deeply, and I often discover new approaches through student questions.</p><br>
        
        <h2>Advice for Aspiring Developers</h2>
        <p>&nbsp;&nbsp;To those starting their coding journey:</p><br>
        <ul>
          <li>&nbsp;&nbsp;Don't be afraid to ask questions</li>
          <li>&nbsp;&nbsp;Practice consistently, even if it's just 30 minutes a day</li>
          <li>&nbsp;&nbsp;Build projects to apply what you learn</li>
          <li>&nbsp;&nbsp;Join communities and learn from others</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>&nbsp;&nbsp;As I continue my journey as both a developer and a Teaching Assistant, I'm excited about the opportunities to help shape the next generation of web developers while continuing to grow my own skills.</p><br>
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

  useEffect(() => {
    const post = blogPosts.find((post) => post.id === parseInt(id));
    setBlogPost(post);
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Blog Post Not Found
          </h1>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen pt-16 relative">
      {/* SplashCursor Effect */}
      {isCursorEnabled && <SplashCursor key={`splash-${currentTier}`} />}

      {/* Page Background */}
      <PageBackground variant="blog" opacity={0.08} />

      <main className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            variants={itemVariants}
            className="card overflow-hidden mb-8"
          >
            <div className="relative">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-4 sm:mb-6">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{formatDate(blogPost.date)}</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>By {blogPost.author}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {/* Tags and Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {blogPost.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm rounded-full border border-primary-200 dark:border-primary-700 hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Tag className="w-2 h-2 sm:w-3 sm:h-3" />
                      <span className="font-medium">{tag}</span>
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-neutral-100 dark:bg-neutral-800 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <BookOpen className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {blogPost.readTime}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-600 flex-shrink-0"></div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {new Date(blogPost.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Article Content */}
          <motion.div
            variants={itemVariants}
            className="card p-6 sm:p-8 lg:p-10"
          >
            <div
              className="prose prose-lg max-w-none dark:prose-invert 
                prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 
                prose-headings:font-black prose-headings:leading-tight prose-headings:font-bold
                prose-h1:mb-16 prose-h1:mt-16 prose-h1:pl-4
                prose-h2:mb-12 prose-h2:mt-16 prose-h2:pl-4
                prose-h3:mb-10 prose-h3:mt-12 prose-h3:pl-4
                prose-h4:mb-10 prose-h4:mt-12 prose-h4:pl-4
                prose-h1:text-4xl sm:prose-h1:text-5xl lg:prose-h1:text-6xl
                prose-h2:text-3xl sm:prose-h2:text-4xl lg:prose-h2:text-5xl
                prose-h3:text-2xl sm:prose-h3:text-3xl lg:prose-h3:text-4xl
                prose-h4:text-xl sm:prose-h4:text-2xl lg:prose-h4:text-3xl
                prose-p:text-neutral-700 dark:prose-p:text-neutral-300 
                prose-p:leading-loose prose-p:font-medium prose-p:text-base sm:prose-p:text-lg
                prose-p:mb-16 prose-p:mt-12 prose-p:pl-16 prose-p:pr-4 prose-p:indent-8
                prose-li:text-neutral-700 dark:prose-li:text-neutral-300 
                prose-li:font-medium prose-li:leading-loose prose-li:text-base sm:prose-li:text-lg
                prose-li:mb-4 prose-li:mt-3 prose-li:pl-2
                prose-ul:mb-16 prose-ul:mt-12 prose-ul:pl-8 prose-ul:list-disc
                prose-ol:mb-16 prose-ol:mt-12 prose-ol:pl-8 prose-ol:list-decimal
                prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 
                prose-strong:font-black
                prose-code:text-primary-600 dark:prose-code:text-primary-400 
                prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 
                prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-800 
                prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-700
                prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                prose-blockquote:border-l-4 prose-blockquote:border-primary-500 
                prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:bg-neutral-50 
                dark:prose-blockquote:bg-neutral-800 prose-blockquote:p-6 prose-blockquote:rounded-r-lg
                prose-blockquote:mb-16 prose-blockquote:mt-12 prose-blockquote:ml-4
                prose-a:text-primary-600 dark:prose-a:text-primary-400 
                prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-lg prose-img:mx-auto
                prose-table:border-collapse prose-table:w-full
                prose-th:border prose-th:border-neutral-300 dark:prose-th:border-neutral-600 
                prose-th:bg-neutral-100 dark:prose-th:bg-neutral-800 prose-th:p-3
                prose-td:border prose-td:border-neutral-300 dark:prose-td:border-neutral-600 
                prose-td:p-3"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>

          {/* Author Bio */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start space-x-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Ahmad Nazzal"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-100 mb-3">
                    Ahmad Nazzal
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg font-medium">
                    MERN & PERN stack developer and Teaching Assistant at MERAKI
                    JO. Passionate about mentoring the next generation of
                    developers and sharing knowledge through writing and
                    teaching.
                  </p>
                  <div className="flex space-x-6">
                    <motion.a
                      href="https://github.com/ahmednazzall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/ahmednazzall/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPost;
