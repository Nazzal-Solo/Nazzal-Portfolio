import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaTerminal,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiMui } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import AnimatedHero from "../components/AnimatedHero";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import PageBackground from "../components/PageBackground";

const Home = () => {
  // Get featured projects
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .slice(0, 3);

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
    <div className="min-h-screen relative">
      {/* Page Background for non-hero sections */}
      <PageBackground variant="default" opacity={0.06} />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Main Content */}
      <main id="main-content">
        {/* About Preview Section */}
        <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">About Me</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl sm:max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
              >
                I'm a passionate MERN & PERN stack developer currently working
                as a Teaching Assistant at MERAKI JO. I love turning complex
                problems into simple, beautiful, and intuitive solutions while
                mentoring the next generation of developers.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
              >
                <Link
                  to="/about"
                  className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  Learn More About Me
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  Let's Work Together
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">Featured Projects</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
              >
                Here are some of my recent projects that showcase my skills and
                passion for creating exceptional digital experiences.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mt-8 sm:mt-12"
            >
              <Link
                to="/projects"
                className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                View All Projects
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
              >
                <span className="gradient-text">Technologies I Work With</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
              >
                {[
                  { name: "React", icon: FaReact, color: "#61DAFB" },
                  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
                  {
                    name: "TypeScript",
                    icon: BiLogoTypescript,
                    color: "#3178C6",
                  },
                  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
                  { name: "Express", icon: SiExpress, color: "#000000" },
                  {
                    name: "Material UI",
                    icon: SiMui,
                    color: "#0081CB",
                  },
                  {
                    name: "Ant Design",
                    icon: AiOutlineAntDesign,
                    color: "#1890FF",
                  },
                  { name: "Tailwind CSS", icon: FaCss3Alt, color: "#06B6D4" },
                  { name: "Git", icon: FaGitAlt, color: "#F05032" },
                  { name: "Vibe Coding", icon: FaTerminal, color: "#00D4AA" },
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      className="group relative flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-white dark:bg-neutral-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-600 overflow-hidden"
                      whileHover={{ scale: 1.05, y: -8 }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative w-full flex flex-col items-center justify-center text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-3 sm:mb-4">
                          <IconComponent
                            className="text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 group-hover:scale-110"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <span className="text-xs sm:text-sm lg:text-base font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">
                  Let's Build Something Amazing
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 px-2"
              >
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can work together to bring your
                ideas to life.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  Get In Touch
                </Link>
                <a
                  href="/CV.pdf"
                  download="Ahmad-Nazzal-Full-Stack-Developer.pdf"
                  className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
