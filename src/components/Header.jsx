import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, MousePointer2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import PerformanceSettingsButton from "./PerformanceSettingsButton";
import PerformanceMonitor from "./PerformanceMonitor";
import OptimizedImage from "./OptimizedImage";
import { useCursor } from "../contexts/CursorContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const tabletMenuRef = useRef(null);
  const { isEnabled: isCursorEnabled, toggleCursor } = useCursor();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Ahmad-Nazzal-Full-Stack-Developer.pdf";
    link.click();
  };

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        isTabletMenuOpen &&
        tabletMenuRef.current &&
        !tabletMenuRef.current.contains(event.target)
      ) {
        setIsTabletMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen, isTabletMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-700 shadow-sm">
      <nav
        ref={mobileMenuRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8"
      >
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo and FPS Monitor */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 sm:space-x-2 md:space-x-3"
            >
              <motion.div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <OptimizedImage
                  src="/images/profile.jpg"
                  alt="Ahmad Nazzal"
                  className="w-full h-full rounded-lg"
                />
              </motion.div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base md:text-lg">
                Ahmad Nazzal
              </span>
            </Link>

            {/* FPS Monitor - Always show */}
            <PerformanceMonitor enabled={true} inline={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`animated-underline px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <PerformanceSettingsButton />
            <motion.button
              onClick={toggleCursor}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={isCursorEnabled ? "Disable splash cursor" : "Enable splash cursor"}
              title={isCursorEnabled ? "Splash Cursor: ON" : "Splash Cursor: OFF"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MousePointer2
                className={`w-4 h-4 xl:w-5 xl:h-5 transition-colors ${
                  isCursorEnabled
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              />
            </motion.button>
            <motion.button
              onClick={handleDownloadCV}
              className="btn-primary flex items-center space-x-2 text-xs xl:text-sm px-3 xl:px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">Download CV</span>
              <span className="xl:hidden">CV</span>
            </motion.button>
            <ThemeToggle />
          </div>

          {/* Tablet Menu Button - Like iPhone */}
          <div className="hidden md:flex lg:hidden items-center">
            <motion.button
              onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}
              className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 touch-target min-h-[48px] min-w-[48px]"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTabletMenuOpen ? (
                <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mobile-header-actions">
            <div className="theme-toggle">
              <ThemeToggle />
            </div>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-button rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-3 sm:mt-4 space-y-2">
                  <PerformanceSettingsButton className="w-full justify-center" />
                  <motion.button
                    onClick={toggleCursor}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={isCursorEnabled ? "Disable splash cursor" : "Enable splash cursor"}
                  >
                    <MousePointer2
                      className={`w-4 h-4 ${
                        isCursorEnabled
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {isCursorEnabled ? "Splash Cursor: ON" : "Splash Cursor: OFF"}
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full btn-primary flex items-center justify-center space-x-2 text-sm py-2.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tablet Navigation Menu - Like iPhone */}
        <AnimatePresence>
          {isTabletMenuOpen && (
            <motion.div
              ref={tabletMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:block lg:hidden border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsTabletMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <PerformanceSettingsButton className="w-full justify-center" />
                  <motion.button
                    onClick={toggleCursor}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={isCursorEnabled ? "Disable splash cursor" : "Enable splash cursor"}
                  >
                    <MousePointer2
                      className={`w-4 h-4 ${
                        isCursorEnabled
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {isCursorEnabled ? "Splash Cursor: ON" : "Splash Cursor: OFF"}
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={handleDownloadCV}
                    className="w-full btn-primary flex items-center justify-center space-x-2 text-sm py-2.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
