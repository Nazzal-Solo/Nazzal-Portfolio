import { motion, AnimatePresence } from "framer-motion";
import { usePerformanceSettings } from "../hooks/usePerformanceSettings";
import OptimizedImage from "./OptimizedImage";

const PageLoader = ({ isLoading, children }) => {
  const { isLowPerformance } = usePerformanceSettings();

  const loaderVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[9999] bg-white dark:bg-neutral-900 flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Logo/Profile Image */}
              <motion.div
                variants={pulseVariants}
                animate={isLowPerformance ? {} : "animate"}
                className="relative"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <OptimizedImage
                    src="/images/profile.jpg"
                    alt="Ahmad Nazzal"
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                {/* Spinning ring */}
                {!isLowPerformance && (
                  <motion.div
                    variants={spinnerVariants}
                    animate="animate"
                    className="absolute inset-0 border-2 border-transparent border-t-primary-500 rounded-2xl"
                  />
                )}
              </motion.div>

              {/* Loading text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Ahmad Nazzal
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  Loading amazing content...
                </p>
              </motion.div>

              {/* Progress dots */}
              {!isLowPerformance && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex space-x-2"
                >
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-2 bg-primary-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <div
        className={
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-300"
        }
        style={{ display: isLoading ? "block" : "block" }}
      >
        {children}
      </div>
    </>
  );
};

export default PageLoader;
