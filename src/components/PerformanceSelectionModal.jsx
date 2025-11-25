import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePerformance } from "../contexts/PerformanceContext";
import { PERFORMANCE_TIERS } from "../utils/performanceDetector";

const PerformanceSelectionModal = () => {
  const {
    currentTier,
    setPerformanceTier,
    recommendedTier,
    isInitialized,
    isGlobalLoading,
  } = usePerformance();

  const [selectedTier, setSelectedTier] = useState(recommendedTier);
  const [isVisible, setIsVisible] = useState(false);

  // Add CSS to ensure modal is above everything
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .performance-modal-overlay {
        z-index: 2147483647 !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Show modal only when no saved preference exists
  useEffect(() => {
    if (isInitialized) {
      const savedTier = localStorage.getItem("performance-tier");
      if (!savedTier) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, [isInitialized]);

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
        return "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-400";
      case PERFORMANCE_TIERS.MEDIUM:
        return "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400";
      case PERFORMANCE_TIERS.HIGH:
        return "border-purple-500 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-400";
      case PERFORMANCE_TIERS.ULTRA:
        return "border-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-400";
      default:
        return "border-gray-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-400";
    }
  };

  const getTierDescription = (tier) => {
    switch (tier) {
      case PERFORMANCE_TIERS.LOW:
        return "Optimized for older devices and slower connections. Minimal animations and effects for maximum compatibility and battery life.";
      case PERFORMANCE_TIERS.MEDIUM:
        return "Balanced performance for most modern devices. Smooth animations with good visual quality and stable performance.";
      case PERFORMANCE_TIERS.HIGH:
        return "Enhanced experience for powerful devices. Rich animations, high-quality effects, and premium visual features.";
      case PERFORMANCE_TIERS.ULTRA:
        return "Ultimate experience for high-end devices. Maximum visual fidelity with advanced effects and highest frame rates.";
      default:
        return "Standard performance settings.";
    }
  };

  const getTierTitle = (tier) => {
    switch (tier) {
      case PERFORMANCE_TIERS.LOW:
        return "Low Performance";
      case PERFORMANCE_TIERS.MEDIUM:
        return "Medium Performance";
      case PERFORMANCE_TIERS.HIGH:
        return "High Performance";
      case PERFORMANCE_TIERS.ULTRA:
        return "Ultra Performance";
      default:
        return "Standard Performance";
    }
  };

  const handleConfirm = async () => {
    try {
      await setPerformanceTier(selectedTier);
      setIsVisible(false);
    } catch (error) {
      // Error applying performance tier
    }
  };

  const handleSkip = async () => {
    try {
      await setPerformanceTier(recommendedTier);
      setIsVisible(false);
    } catch (error) {
      // Error applying performance tier
    }
  };

  const handleOverlayClick = (e) => {
    // Only close if clicking on the overlay itself, not on the modal content
    if (e.target === e.currentTarget) {
      handleSkip();
    }
  };

  if (!isVisible || !isInitialized) {
    return null;
  }

  return createPortal(
    <div
      className="performance-modal-overlay fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
      style={{
        zIndex: 2147483647,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-white text-xl sm:text-2xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                Performance Settings
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm">
                Choose the optimal performance level for your device
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
          <div className="space-y-4 sm:space-y-6">
            {Object.values(PERFORMANCE_TIERS).map((tier) => (
              <div
                key={tier}
                className={`border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedTier === tier
                    ? getTierColor(tier) + " shadow-lg scale-[1.02]"
                    : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg bg-white dark:bg-gray-800"
                }`}
                onClick={() => setSelectedTier(tier)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0 p-1 sm:p-2">
                    {getTierIcon(tier)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {getTierTitle(tier)}
                      </h3>
                      {tier === recommendedTier && (
                        <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full self-start sm:self-center">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                      {getTierDescription(tier)}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <input
                      type="radio"
                      name="performance-tier"
                      value={tier}
                      checked={selectedTier === tier}
                      onChange={() => setSelectedTier(tier)}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl">
                  💡
                </span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Why choose performance settings?
                </h4>
                <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200 leading-relaxed">
                  These settings optimize the visual effects and animations
                  based on your device capabilities. You can always change them
                  later from the settings menu in the header.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <button
              onClick={handleSkip}
              disabled={isGlobalLoading}
              className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:text-gray-400 dark:disabled:text-gray-500 transition-all duration-200 flex items-center justify-center rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 touch-target"
            >
              {isGlobalLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-gray-600 dark:border-gray-400 mr-2 sm:mr-3"></div>
                  <span className="hidden sm:inline">Applying...</span>
                  <span className="sm:hidden">Applying...</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">
                    Skip (Use Recommended)
                  </span>
                  <span className="sm:hidden">Skip</span>
                </>
              )}
            </button>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleConfirm}
                disabled={isGlobalLoading}
                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-105 disabled:scale-100 touch-target"
              >
                {isGlobalLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                    <span className="hidden sm:inline">Applying...</span>
                    <span className="sm:hidden">Applying...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Apply Settings</span>
                    <span className="sm:hidden">Apply</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PerformanceSelectionModal;
