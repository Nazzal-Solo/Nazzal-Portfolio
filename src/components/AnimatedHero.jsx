import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import OptimizedLiquidEther from "./OptimizedLiquidEther";
import { usePerformanceSettings } from "../hooks/usePerformanceSettings";

const AnimatedHero = () => {
  const { getMotionVariants, isLowPerformance } = usePerformanceSettings();

  const baseContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const baseItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
  const containerVariants = getMotionVariants(baseContainerVariants);
  const itemVariants = getMotionVariants(baseItemVariants);
  const scrollVariants = getMotionVariants(baseScrollVariants);

  // Disable scroll animation for low performance
  const scrollAnimation = isLowPerformance ? {} : baseScrollAnimation;

  return (
    <section
      className="min-h-screen flex flex-col justify-start px-3 sm:px-4 md:px-6 lg:px-8 relative"
      style={{
        paddingTop: "max(6rem, 7vh)",
        paddingBottom: "2rem",
        minHeight: "calc(100vh - 1rem)",
      }}
    >
      {/* Optimized LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <OptimizedLiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          viscous={20}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.3}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.4}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div
          className="text-center px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 pt-2 sm:pt-4"
          >
            <span className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-semibold tracking-wide">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="gradient-text">Ahmad Nazzal</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 font-medium">
              Full-Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          >
            Passionate MERN & PERN stack developer crafting exceptional web
            applications with modern technologies. Currently working as a
            Teaching Assistant at MERAKI JO, dedicated to clean code, innovative
            solutions, and mentoring the next generation of developers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2"
          >
            <Link to="/projects">
              <motion.button
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2"
          >
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "MongoDB",
              "PostgreSQL",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs sm:text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
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
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
