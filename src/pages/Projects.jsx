import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Grid, List } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import PageBackground from "../components/PageBackground";
import SplashCursor from "../components/SplashCursor";
import { usePerformance } from "../contexts/PerformanceContext";

const Projects = () => {
  const { currentTier } = usePerformance();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 relative">
      {/* SplashCursor Effect */}
      <SplashCursor key={`splash-${currentTier}`} />

      {/* Page Background */}
      <PageBackground variant="projects" opacity={0.08} />

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
                <span className="gradient-text">My Projects</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
              >
                A collection of projects that showcase my skills, creativity,
                and passion for building exceptional digital experiences.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-6 sm:py-8 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
            >
              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400" />
                  <span className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
                    Filter:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-primary-600 text-white"
                          : "bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white dark:bg-neutral-700 rounded-lg p-1 self-start lg:self-auto">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 sm:p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "grid"
                      ? "bg-primary-600 text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-primary-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Grid view"
                >
                  <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 sm:p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "list"
                      ? "bg-primary-600 text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-primary-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="List view"
                >
                  <List className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid/List */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {viewMode === "grid" ? (
                <motion.div
                  key="grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4 sm:space-y-6"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="card overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-4 sm:p-6">
                          <div className="flex items-start justify-between mb-3 sm:mb-4">
                            <div>
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                                {project.title}
                              </h3>
                              <span className="inline-block px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium rounded-full">
                                {project.category}
                              </span>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                                whileHover={{ x: 2 }}
                              >
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>Live Demo</span>
                              </motion.a>
                            )}
                            {project.githubUrl && (
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                                whileHover={{ x: 2 }}
                              >
                                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>Source Code</span>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                <span className="gradient-text">
                  Interested in Working Together?
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-neutral-600 dark:text-neutral-400 mb-8"
              >
                I'm always excited to take on new challenges and create amazing
                projects. Let's discuss your next idea!
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a href="/contact" className="btn-primary">
                  Start a Project
                </a>
                <a href="/about" className="btn-secondary">
                  Learn More About Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
