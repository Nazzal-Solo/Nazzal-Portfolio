import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PERFORMANCE_TIERS,
  getRecommendedPerformanceTier,
  getPerformanceConfig,
  getDeviceCapabilities,
} from "../utils/performanceDetector";

const PerformanceContext = createContext();

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
};

export const PerformanceProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTier, setCurrentTier] = useState(PERFORMANCE_TIERS.MEDIUM);
  const [isInitialized, setIsInitialized] = useState(false);
  const [deviceCapabilities, setDeviceCapabilities] = useState(null);
  const [recommendedTier, setRecommendedTier] = useState(
    PERFORMANCE_TIERS.MEDIUM
  );
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);

  useEffect(() => {
    // Initialize performance settings
    const initializePerformance = () => {
      try {
        // Get device capabilities
        const capabilities = getDeviceCapabilities();
        setDeviceCapabilities(capabilities);

        // Get recommended tier
        const recommended = getRecommendedPerformanceTier();
        // Fallback to medium if recommended is undefined
        const finalRecommended = recommended || PERFORMANCE_TIERS.MEDIUM;
        setRecommendedTier(finalRecommended);

        // Check if user has previously set a preference
        const savedTier = localStorage.getItem("performance-tier");

        if (savedTier && Object.values(PERFORMANCE_TIERS).includes(savedTier)) {
          setCurrentTier(savedTier);
        } else {
          // No saved tier - modal will handle the selection
          setCurrentTier(finalRecommended); // Set as fallback for display purposes
        }

        setIsInitialized(true);
      } catch (error) {
        // Failed to initialize performance settings
        // Fallback to medium performance
        setCurrentTier(PERFORMANCE_TIERS.MEDIUM);
        setRecommendedTier(PERFORMANCE_TIERS.MEDIUM);
        localStorage.setItem("performance-tier", PERFORMANCE_TIERS.MEDIUM);
        setIsInitialized(true);
      }
    };

    initializePerformance();
  }, []);

  const setPerformanceTier = async (tier) => {
    if (Object.values(PERFORMANCE_TIERS).includes(tier)) {
      setIsGlobalLoading(true);

      // Store current page location
      const currentPath = location.pathname;

      // Add a delay to show the loader
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Update the performance tier
      setCurrentTier(tier);
      localStorage.setItem("performance-tier", tier);

      // Navigate to a different page to refresh the splash cursor
      if (currentPath === "/") {
        navigate("/about", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

      // Wait a moment then navigate back to original page
      setTimeout(() => {
        navigate(currentPath, { replace: true });

        // Hide loader after navigation is complete
        setTimeout(() => {
          setIsGlobalLoading(false);
        }, 300);
      }, 200);
    }
  };

  const getCurrentConfig = () => {
    return getPerformanceConfig(currentTier);
  };

  const resetToRecommended = async () => {
    setIsGlobalLoading(true);

    // Store current page location
    const currentPath = location.pathname;

    // Add a delay to show the loader
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Update the performance tier to recommended
    setCurrentTier(recommendedTier);
    localStorage.setItem("performance-tier", recommendedTier);

    // Navigate to a different page to refresh the splash cursor
    if (currentPath === "/") {
      navigate("/about", { replace: true });
    } else {
      navigate("/", { replace: true });
    }

    // Wait a moment then navigate back to original page
    setTimeout(() => {
      navigate(currentPath, { replace: true });

      // Hide loader after navigation is complete
      setTimeout(() => {
        setIsGlobalLoading(false);
      }, 300);
    }, 200);
  };

  const value = {
    currentTier,
    setPerformanceTier,
    getCurrentConfig,
    recommendedTier,
    deviceCapabilities,
    isInitialized,
    resetToRecommended,
    isGlobalLoading,
    // Convenience getters
    isLowPerformance: currentTier === PERFORMANCE_TIERS.LOW,
    isMediumPerformance: currentTier === PERFORMANCE_TIERS.MEDIUM,
    isHighPerformance: currentTier === PERFORMANCE_TIERS.HIGH,
    isUltraPerformance: currentTier === PERFORMANCE_TIERS.ULTRA,
    // Performance config shortcuts
    splashCursorConfig: getCurrentConfig().splashCursor,
    animationConfig: getCurrentConfig().animations,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};
