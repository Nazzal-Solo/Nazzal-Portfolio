import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 md:p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 touch-target min-h-[48px] min-w-[48px] shadow-md hover:shadow-lg"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300" />
        ) : (
          <Sun className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
