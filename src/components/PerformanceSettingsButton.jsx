import React, { useState } from "react";
import { usePerformance } from "../contexts/PerformanceContext";
import { PERFORMANCE_TIERS } from "../utils/performanceDetector";
import PerformanceSettings from "./PerformanceSettings";

const PerformanceSettingsButton = ({ className = "" }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { currentTier, recommendedTier, isInitialized } = usePerformance();

  const getTierIcon = (tier) => {
    switch (tier) {
      case PERFORMANCE_TIERS.LOW:
        return "🔋";
      case PERFORMANCE_TIERS.MEDIUM:
        return "⚖️";
      case PERFORMANCE_TIERS.HIGH:
        return "🚀";
      case PERFORMANCE_TIERS.ULTRA:
        return "⚡";
      default:
        return "⚙️";
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case PERFORMANCE_TIERS.LOW:
        return "text-green-600 hover:text-green-700";
      case PERFORMANCE_TIERS.MEDIUM:
        return "text-blue-600 hover:text-blue-700";
      case PERFORMANCE_TIERS.HIGH:
        return "text-purple-600 hover:text-purple-700";
      case PERFORMANCE_TIERS.ULTRA:
        return "text-orange-600 hover:text-orange-700";
      default:
        return "text-gray-600 hover:text-gray-700";
    }
  };

  // Don't render if not initialized
  if (!isInitialized) {
    return (
      <div
        className={`inline-flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${className}`}
      >
        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-blue-600"></div>
        <span className="text-gray-500 hidden sm:inline">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsSettingsOpen(true)}
        className={`inline-flex items-center space-x-1 sm:space-x-2 md:space-x-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-sm font-semibold rounded-md sm:rounded-lg md:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 touch-target min-h-[48px] shadow-md hover:shadow-lg ${className}`}
        title="Performance Settings"
      >
        <span className="text-sm sm:text-lg md:text-lg">
          {getTierIcon(currentTier || recommendedTier)}
        </span>
        <span
          className={`capitalize hidden sm:inline md:inline ${getTierColor(
            currentTier || recommendedTier
          )}`}
        >
          {currentTier || recommendedTier || "medium"}
        </span>
        {currentTier && currentTier !== recommendedTier && (
          <span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 bg-orange-400 rounded-full flex-shrink-0"
            title="Not recommended for your device"
          />
        )}
      </button>

      <PerformanceSettings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default PerformanceSettingsButton;
