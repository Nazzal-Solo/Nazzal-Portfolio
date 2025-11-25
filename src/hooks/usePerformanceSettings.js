import { usePerformance } from "../contexts/PerformanceContext";

/**
 * Custom hook for easy access to performance settings
 * Provides convenient methods for components to adapt to performance levels
 */
export const usePerformanceSettings = () => {
  const {
    currentTier,
    isLowPerformance,
    isMediumPerformance,
    isHighPerformance,
    isUltraPerformance,
    animationConfig,
    splashCursorConfig,
  } = usePerformance();

  /**
   * Get animation duration based on performance level
   * Lower performance = shorter animations for better responsiveness
   */
  const getAnimationDuration = (baseDuration = 0.3) => {
    if (isLowPerformance) return baseDuration * 0.5; // 50% faster
    if (isMediumPerformance) return baseDuration * 0.8; // 20% faster
    if (isHighPerformance) return baseDuration; // Full duration
    if (isUltraPerformance) return baseDuration * 1.2; // 20% slower for ultra smooth
    return baseDuration;
  };

  /**
   * Get reduced motion preference
   */
  const shouldReduceMotion = () => {
    return animationConfig?.reducedMotion || false;
  };

  /**
   * Get particle count multiplier based on performance
   */
  const getParticleCount = (baseCount) => {
    if (isLowPerformance) return Math.floor(baseCount * 0.3); // 30% of particles
    if (isMediumPerformance) return Math.floor(baseCount * 0.6); // 60% of particles
    if (isHighPerformance) return baseCount; // Full particles
    if (isUltraPerformance) return Math.floor(baseCount * 1.5); // 150% of particles for ultra
    return baseCount;
  };

  /**
   * Get quality setting for textures/images
   */
  const getQualityLevel = () => {
    if (isLowPerformance) return "low";
    if (isMediumPerformance) return "medium";
    if (isHighPerformance) return "high";
    if (isUltraPerformance) return "ultra";
    return "medium";
  };

  /**
   * Check if complex animations should be disabled
   */
  const shouldDisableComplexAnimations = () => {
    return animationConfig?.disableComplexAnimations || false;
  };

  /**
   * Get FPS target for animations
   */
  const getTargetFPS = () => {
    return splashCursorConfig?.targetFPS || 30;
  };

  /**
   * Get framer-motion variants based on performance
   */
  const getMotionVariants = (baseVariants) => {
    if (shouldReduceMotion()) {
      // Return minimal motion variants but preserve all keys
      const minimalVariants = {};
      Object.keys(baseVariants).forEach((key) => {
        minimalVariants[key] = {
          opacity: 1,
          // Preserve any essential positioning
          ...(baseVariants[key].y !== undefined && { y: 0 }),
          ...(baseVariants[key].x !== undefined && { x: 0 }),
        };
      });
      return minimalVariants;
    }

    if (isLowPerformance) {
      // Simplify complex animations but keep all content visible
      const simplified = { ...baseVariants };
      Object.keys(simplified).forEach((key) => {
        if (simplified[key]) {
          // Remove complex transforms but keep basic positioning
          if (simplified[key].scale) delete simplified[key].scale;
          if (simplified[key].rotate) delete simplified[key].rotate;
          if (simplified[key].skew) delete simplified[key].skew;
          // Ensure opacity is always 1 for visibility
          if (simplified[key].opacity === 0) {
            simplified[key].opacity = 1;
          }
        }
      });
      return simplified;
    }

    return baseVariants;
  };

  /**
   * Get transition settings based on performance
   */
  const getTransition = (baseTransition = {}) => {
    const duration = getAnimationDuration(baseTransition.duration);

    if (isLowPerformance) {
      return {
        ...baseTransition,
        duration,
        ease: "easeOut", // Simpler easing for better performance
      };
    }

    return {
      ...baseTransition,
      duration,
    };
  };

  return {
    // Performance tier info
    currentTier,
    isLowPerformance,
    isMediumPerformance,
    isHighPerformance,
    isUltraPerformance,

    // Animation helpers
    getAnimationDuration,
    shouldReduceMotion,
    getParticleCount,
    getQualityLevel,
    shouldDisableComplexAnimations,
    getTargetFPS,
    getMotionVariants,
    getTransition,

    // Raw configs
    animationConfig,
    splashCursorConfig,
  };
};

export default usePerformanceSettings;
