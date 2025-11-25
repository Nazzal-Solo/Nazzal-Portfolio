import React, { useState, useEffect } from "react";
import { usePerformance } from "../contexts/PerformanceContext";
import { PERFORMANCE_TIERS } from "../utils/performanceDetector";

const PerformanceSettings = ({ isOpen, onClose }) => {
  const {
    currentTier,
    setPerformanceTier,
    recommendedTier,
    deviceCapabilities,
    isInitialized,
  } = usePerformance();

  const clearSavedPreference = () => {
    localStorage.removeItem("performance-tier");
    window.location.reload();
  };

  const [selectedTier, setSelectedTier] = useState(currentTier);

  // Update selectedTier when currentTier changes
  useEffect(() => {
    setSelectedTier(currentTier);
  }, [currentTier]);

  const handleSave = () => {
    setPerformanceTier(selectedTier);
    onClose();
  };

  const handleOverlayClick = (e) => {
    // Only close if clicking on the overlay itself, not on the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case PERFORMANCE_TIERS.LOW:
        return "🔋"; // Battery icon for low power
      case PERFORMANCE_TIERS.MEDIUM:
        return "⚖️"; // Balance scale for medium
      case PERFORMANCE_TIERS.HIGH:
        return "🚀"; // Rocket for high performance
      case PERFORMANCE_TIERS.ULTRA:
        return "⚡"; // Lightning for ultra performance
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
        return "Optimized for older devices and slower connections. Minimal animations and effects for maximum compatibility.";
      case PERFORMANCE_TIERS.MEDIUM:
        return "Balanced performance for most modern devices. Smooth animations with good visual quality and stable performance.";
      case PERFORMANCE_TIERS.HIGH:
        return "Enhanced experience for powerful devices. Rich animations, high-quality effects, and premium visual features.";
      case "ultra":
        return "Ultimate performance for high-end devices. Maximum quality, advanced effects, and cutting-edge visual features.";
      default:
        return "";
    }
  };

  const getDeviceInfo = () => {
    // Static, user-friendly device information
    return {
      deviceType: "Modern Device",
      experience: "Optimized Experience",
      compatibility: "Full Compatibility",
      performance: "High Performance",
      features: "All Features Available",
      optimization: "Auto-Optimized",
      quality: "Premium Quality",
      support: "Latest Standards",
    };
  };

  const deviceInfo = getDeviceInfo();

  if (!isOpen) return null;

  // Show loading state if not initialized
  if (!isInitialized) {
    return (
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Loading Performance Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyzing your device capabilities...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-1 sm:p-2 md:p-4"
      style={{ minHeight: "100vh" }}
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-5xl w-full max-h-[98vh] sm:max-h-[95vh] flex flex-col border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden min-h-[70px] sm:min-h-[100px] md:min-h-[140px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative p-3 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6 md:pt-8 lg:pt-10">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <span className="text-white text-base sm:text-lg md:text-xl lg:text-3xl">
                    ⚙️
                  </span>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-3 text-white leading-tight">
                    Performance Settings
                  </h1>
                  <p className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed hidden sm:block">
                    Optimize your experience based on your device capabilities
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl backdrop-blur-sm border border-white/20 touch-target"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/20">
          {/* Device Info */}
          {deviceInfo && (
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 md:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm sm:text-lg md:text-xl">
                    📱
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Your Device Capabilities
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-6">
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-100 dark:bg-green-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm">
                        📱
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Device Type
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.deviceType}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                        ⚡
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Experience
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.experience}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-100 dark:bg-blue-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">
                        ✅
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Compatibility
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.compatibility}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-purple-100 dark:bg-purple-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm">
                        🚀
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Performance
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.performance}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-orange-100 dark:bg-orange-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 text-xs sm:text-sm">
                        🎨
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Features
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.features}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm">
                        ⚙️
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Optimization
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.optimization}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-pink-100 dark:bg-pink-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-pink-600 dark:text-pink-400 text-xs sm:text-sm">
                        💎
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Quality
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.quality}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-1 sm:mb-2 md:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-teal-100 dark:bg-teal-900/50 rounded-sm sm:rounded-md md:rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm">
                        🔧
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      Support
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base lg:text-lg">
                    {deviceInfo.support}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl sm:rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl">
                      💡
                    </span>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-blue-800 dark:text-blue-200">
                      <span className="font-bold">
                        Recommended for your device:
                      </span>{" "}
                      {recommendedTier && getTierIcon(recommendedTier)}{" "}
                      {recommendedTier &&
                        recommendedTier.charAt(0).toUpperCase() +
                          recommendedTier.slice(1)}{" "}
                      Performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Options */}
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center">
                <span className="text-white text-base sm:text-lg md:text-xl">
                  ⚡
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                Choose Performance Level
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {Object.values(PERFORMANCE_TIERS).map((tier) => (
                <div
                  key={tier}
                  className={`border-2 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedTier === tier
                      ? getTierColor(tier) +
                        " shadow-2xl scale-[1.02] ring-4 ring-opacity-50"
                      : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm"
                  }`}
                  onClick={() => setSelectedTier(tier)}
                >
                  <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-shrink-0 p-1.5 sm:p-2 md:p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg sm:rounded-xl md:rounded-2xl">
                      {getTierIcon(tier)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-3">
                          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white capitalize">
                            {tier} Performance
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {tier === recommendedTier && (
                              <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                                Recommended
                              </span>
                            )}
                            {tier === currentTier && (
                              <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="radio"
                            name="performance-tier"
                            value={tier}
                            checked={selectedTier === tier}
                            onChange={() => setSelectedTier(tier)}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                        {getTierDescription(tier)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/20 backdrop-blur-sm">
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Performance settings are automatically optimized for your device.
              You can adjust them anytime from this menu.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/50 dark:bg-gray-700/50 rounded-md sm:rounded-lg">
                <span className="text-green-600 text-sm sm:text-lg">🔋</span>
                <span className="font-medium hidden sm:inline">
                  Low - Battery saving
                </span>
                <span className="font-medium sm:hidden">Low</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/50 dark:bg-gray-700/50 rounded-md sm:rounded-lg">
                <span className="text-blue-600 text-sm sm:text-lg">⚖️</span>
                <span className="font-medium hidden sm:inline">
                  Medium - Balanced
                </span>
                <span className="font-medium sm:hidden">Medium</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/50 dark:bg-gray-700/50 rounded-md sm:rounded-lg">
                <span className="text-purple-600 text-sm sm:text-lg">🚀</span>
                <span className="font-medium hidden sm:inline">
                  High - Enhanced
                </span>
                <span className="font-medium sm:hidden">High</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/50 dark:bg-gray-700/50 rounded-md sm:rounded-lg">
                <span className="text-orange-600 text-sm sm:text-lg">⚡</span>
                <span className="font-medium hidden sm:inline">
                  Ultra - Maximum
                </span>
                <span className="font-medium sm:hidden">Ultra</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
            <button
              onClick={onClose}
              className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg sm:rounded-xl transition-all duration-200 shadow-sm hover:shadow-md touch-target"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 touch-target"
            >
              Apply Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSettings;
