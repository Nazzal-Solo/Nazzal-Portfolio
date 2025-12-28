import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader";
import PerformanceSelectionModal from "./components/PerformanceSelectionModal";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { usePageLoader } from "./hooks/usePageLoader";
import {
  PerformanceProvider,
  usePerformance,
} from "./contexts/PerformanceContext";
import { CursorProvider } from "./contexts/CursorContext";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const AppContent = () => {
  const location = useLocation();
  const { isGlobalLoading } = usePerformance();
  const { isLoading } = usePageLoader();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <PageLoader isLoading={isLoading}>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />

        <main className="flex-1">
          <ErrorBoundary>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ minHeight: "100%", opacity: 1 }}
              >
                <Suspense
                  fallback={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    </div>
                  }
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                  </Routes>
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </ErrorBoundary>
        </main>

        <Footer />

        {/* Global Loader */}
        <GlobalLoader isVisible={isGlobalLoading} />

        {/* Performance Selection Modal */}
        <PerformanceSelectionModal />
      </div>
    </PageLoader>
  );
};

const App = () => {
  return (
    <PerformanceProvider>
      <CursorProvider>
        <AppContent />
      </CursorProvider>
    </PerformanceProvider>
  );
};

export default App;
