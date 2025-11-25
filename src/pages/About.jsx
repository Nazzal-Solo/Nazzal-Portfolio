import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Calendar,
  Award,
  Code,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import PageBackground from "../components/PageBackground";
import SplashCursor from "../components/SplashCursor";
import OptimizedImage from "../components/OptimizedImage";
import { usePerformance } from "../contexts/PerformanceContext";
import { usePerformanceSettings } from "../hooks/usePerformanceSettings";

const About = () => {
  const { currentTier } = usePerformance();
  const { getMotionVariants, isLowPerformance } = usePerformanceSettings();

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

  // Scroll indicator variants
  const baseScrollVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
  };

  const baseScrollAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Apply performance-based variants
  const scrollVariants = getMotionVariants(baseScrollVariants);
  const scrollAnimation = isLowPerformance ? {} : baseScrollAnimation;

  const experience = [
    {
      year: "Jan 2025 - Present",
      title: "Teaching Assistant",
      company: "MERAKI JO",
      description:
        "Mentoring students in full-stack development, helping them master MERN & PERN stack technologies, and providing guidance on modern web development practices.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MERN Stack", "PERN Stack"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Vibe Coding", "Responsive Design"],
    },
  ];

  const achievements = [
    {
      icon: Code,
      title: "MERN & PERN",
      description: "Full-stack expertise",
    },
    {
      icon: Users,
      title: "Teaching Assistant",
      description: "Mentoring students at MERAKI JO",
    },
    {
      icon: Award,
      title: "Modern Tech",
      description: "React, Next.js, TypeScript",
    },
    {
      icon: Zap,
      title: "UI Frameworks",
      description: "Material UI, Ant Design, Tailwind",
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* SplashCursor Effect */}
      <SplashCursor key={`splash-${currentTier}`} />

      {/* Page Background */}
      <PageBackground variant="about" opacity={0.08} />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content" className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
            >
              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="order-2 md:order-1 flex justify-center md:justify-start"
              >
                <div className="relative">
                  <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                    <OptimizedImage
                      src="/images/profile.jpg"
                      alt="Ahmad Nazzal"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Code className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                variants={itemVariants}
                className="order-1 md:order-2 text-center md:text-left"
              >
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                  <span className="gradient-text">About Me</span>
                </h1>

                <div className="space-y-3 sm:space-y-4 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
                  <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span>Amman, Jordan</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span className="text-center md:text-left">
                      Teaching Assistant at MERAKI JO
                    </span>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I'm a passionate MERN & PERN stack developer with expertise
                    in building exceptional web applications using modern
                    technologies. Currently working as a Teaching Assistant at
                    MERAKI JO, where I help mentor the next generation of
                    developers while continuing to grow my own technical skills.
                  </p>

                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    My professional philosophy centers around clean code,
                    continuous learning, and knowledge sharing. I believe in
                    creating scalable, maintainable solutions while fostering a
                    collaborative environment where both students and colleagues
                    can thrive and grow together.
                  </p>
                </div>

                <motion.button
                  className="btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/CV.pdf";
                    link.download = "Ahmad-Nazzal-Full-Stack-Developer.pdf";
                    link.click();
                  }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>Download CV</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center py-8 sm:py-12"
        >
          <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-1 sm:mb-2">
            Scroll to explore
          </span>
          <motion.div
            animate={scrollAnimation}
            className="text-neutral-400 dark:text-neutral-600"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    className="text-center p-4 sm:p-6 md:p-8"
                  >
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-lg">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 sm:mb-3 md:mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
              >
                <span className="gradient-text">Skills & Technologies</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                    className="group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative p-6 sm:p-8 md:p-10 text-center">
                      {/* Category icon with full word */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg mx-auto">
                        <span className="text-white font-bold text-xs sm:text-sm md:text-base text-center leading-tight">
                          {skill.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {skill.items.map((item) => (
                          <motion.span
                            key={item}
                            className="inline-block px-3 sm:px-4 md:px-5 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm md:text-base font-semibold rounded-full border border-primary-200 dark:border-primary-700 hover:shadow-md transition-all duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
              >
                <span className="gradient-text">Experience</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="space-y-8 sm:space-y-10 md:space-y-12"
              >
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-6 sm:p-8 md:p-10 relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5 md:mb-6">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base md:text-lg">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-500 mt-2 sm:mt-0">
                        {job.year}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8"
              >
                <span className="gradient-text">Let's Work Together</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
              >
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can collaborate to bring your
                ideas to life.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center"
              >
                <a
                  href="/contact"
                  className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="btn-secondary w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4"
                >
                  View My Work
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
