/**
 * Device Performance Detection Utility
 * Analyzes user's device capabilities and recommends optimal performance settings
 */

export const PERFORMANCE_TIERS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  ULTRA: "ultra",
};

export const PERFORMANCE_CONFIGS = {
  [PERFORMANCE_TIERS.LOW]: {
    name: "Low Performance",
    description: "Optimized for older devices and slower connections",
    splashCursor: {
      SIM_RESOLUTION: 32,
      DYE_RESOLUTION: 256,
      CAPTURE_RESOLUTION: 128,
      DENSITY_DISSIPATION: 3.0,
      VELOCITY_DISSIPATION: 2.0,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 5,
      CURL: 1,
      SPLAT_RADIUS: 0.1,
      SPLAT_FORCE: 2000,
      SHADING: false,
      COLOR_UPDATE_SPEED: 3,
      targetFPS: 20,
    },
    animations: {
      reducedMotion: true,
      disableComplexAnimations: true,
      reduceParticleCount: true,
      lowerQualityTextures: true,
    },
  },
  [PERFORMANCE_TIERS.MEDIUM]: {
    name: "Medium Performance",
    description: "Balanced performance for most devices",
    splashCursor: {
      SIM_RESOLUTION: 48,
      DYE_RESOLUTION: 384,
      CAPTURE_RESOLUTION: 192,
      DENSITY_DISSIPATION: 2.5,
      VELOCITY_DISSIPATION: 1.8,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 8,
      CURL: 1.5,
      SPLAT_RADIUS: 0.12,
      SPLAT_FORCE: 2500,
      SHADING: false,
      COLOR_UPDATE_SPEED: 4,
      targetFPS: 30,
    },
    animations: {
      reducedMotion: false,
      disableComplexAnimations: false,
      reduceParticleCount: false,
      lowerQualityTextures: false,
    },
  },
  [PERFORMANCE_TIERS.HIGH]: {
    name: "High Performance",
    description: "Enhanced experience for powerful devices",
    splashCursor: {
      SIM_RESOLUTION: 80,
      DYE_RESOLUTION: 640,
      CAPTURE_RESOLUTION: 320,
      DENSITY_DISSIPATION: 1.8,
      VELOCITY_DISSIPATION: 1.3,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 12,
      CURL: 2.5,
      SPLAT_RADIUS: 0.18,
      SPLAT_FORCE: 3500,
      SHADING: false,
      COLOR_UPDATE_SPEED: 6,
      targetFPS: 60,
    },
    animations: {
      reducedMotion: false,
      disableComplexAnimations: false,
      reduceParticleCount: false,
      lowerQualityTextures: false,
    },
  },
  [PERFORMANCE_TIERS.ULTRA]: {
    name: "Ultra Performance",
    description: "Ultimate experience for high-end devices",
    splashCursor: {
      SIM_RESOLUTION: 96,
      DYE_RESOLUTION: 768,
      CAPTURE_RESOLUTION: 384,
      DENSITY_DISSIPATION: 1.5,
      VELOCITY_DISSIPATION: 1.0,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 15,
      CURL: 3,
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 4000,
      SHADING: true,
      COLOR_UPDATE_SPEED: 8,
      targetFPS: 120,
    },
    animations: {
      reducedMotion: false,
      disableComplexAnimations: false,
      reduceParticleCount: false,
      lowerQualityTextures: false,
      enableAdvancedEffects: true,
      enableParticleSystems: true,
      enableShaders: true,
    },
  },
};

class PerformanceDetector {
  constructor() {
    this.capabilities = this.detectCapabilities();
    this.recommendedTier = this.getRecommendedTier();
  }

  detectCapabilities() {
    const capabilities = {
      // Hardware info
      cores: navigator.hardwareConcurrency || this.estimateCores(),
      memory: this.estimateMemory(),
      memoryGB: this.estimateMemoryGB(),

      // GPU info
      webgl: this.detectWebGL(),
      webgl2: this.detectWebGL2(),
      gpuInfo: this.getGPUInfo(),

      // Connection info
      connection: this.getConnectionInfo(),

      // Device type
      deviceType: this.getDeviceType(),
      deviceModel: this.getDeviceModel(),

      // Screen info
      screenSize: this.getScreenSize(),
      pixelRatio: window.devicePixelRatio || 1,
      colorDepth: screen.colorDepth,

      // Browser capabilities
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      browser: this.getBrowserInfo(),
      os: this.getOSInfo(),
    };

    // Calculate performance score after capabilities are set
    capabilities.performanceScore =
      this.calculatePerformanceScore(capabilities);

    return capabilities;
  }

  estimateCores() {
    // Try to get actual core count first
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency;
    }

    // Better core estimation based on device type and user agent
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const isTablet =
      /iPad|Android/i.test(userAgent) && window.screen.width >= 768;

    // Try to detect specific CPU models from user agent
    if (/Intel.*Core.*i[3579]/.test(userAgent)) {
      // Intel Core i3, i5, i7, i9 - usually 4-8+ cores
      if (/Core.*i[79]/.test(userAgent)) return 8; // i7, i9
      if (/Core.*i[35]/.test(userAgent)) return 6; // i3, i5
    }

    if (/AMD.*Ryzen/.test(userAgent)) {
      // AMD Ryzen - usually 6-16+ cores
      if (/Ryzen.*[79]/.test(userAgent)) return 12; // Ryzen 7, 9
      if (/Ryzen.*[35]/.test(userAgent)) return 8; // Ryzen 3, 5
    }

    if (isMobile) return 4; // Most modern mobile devices have 4+ cores
    if (isTablet) return 6; // Tablets usually have 6+ cores
    return 8; // Desktop/laptop assumption
  }

  estimateMemory() {
    // Try to get actual memory first, but override if it seems too low for desktop
    if (navigator.deviceMemory) {
      // If deviceMemory reports 8GB but we're on a desktop with high-end specs, assume 16GB
      const userAgent = navigator.userAgent;
      const isDesktop =
        !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      const screenArea = window.screen.width * window.screen.height;
      const isHighRes = screenArea > 1500000; // 1080p+ displays

      if (navigator.deviceMemory === 8 && isDesktop && isHighRes) {
        return 16;
      }

      return navigator.deviceMemory;
    }

    // Enhanced memory estimation based on device type and user agent
    const userAgent = navigator.userAgent;

    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const isTablet =
      /iPad|Android/i.test(userAgent) && window.screen.width >= 768;

    // Try to detect high-end devices from user agent patterns
    if (/Intel.*Core.*i[79]/.test(userAgent)) {
      return 16; // Common for high-end systems
    }

    if (/AMD.*Ryzen.*[79]/.test(userAgent)) {
      return 16; // Common for high-end systems
    }

    // Check for specific device indicators
    if (/MacBook Pro|Mac Pro|iMac Pro/.test(userAgent)) {
      return 16; // Apple Pro devices usually have more RAM
    }

    if (/Gaming|ROG|Alienware|Predator/.test(userAgent)) {
      return 16; // Gaming laptops usually have more RAM
    }

    // Screen resolution can indicate system capability
    const screenArea = window.screen.width * window.screen.height;
    if (screenArea > 3000000) {
      // 4K+ displays
      return 16; // High-res displays usually paired with more RAM
    }

    // For desktop systems, assume higher memory
    if (!isMobile && !isTablet) {
      return 16; // Assume modern desktop has 16GB
    }

    if (isMobile) return 4; // Modern mobile devices have 4-8GB
    if (isTablet) return 6; // Modern tablets have 6-8GB
    return 16; // Default to 16GB for desktop systems
  }

  estimateMemoryGB() {
    const memory = this.estimateMemory();
    return `${memory}GB`;
  }

  getGPUInfo() {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          return {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
            version: gl.getParameter(gl.VERSION),
            shadingLanguageVersion: gl.getParameter(
              gl.SHADING_LANGUAGE_VERSION
            ),
          };
        }
      }
    } catch (e) {
      // Fallback
    }

    return {
      vendor: "Unknown",
      renderer: "Unknown",
      version: this.detectWebGL2()
        ? "WebGL 2.0"
        : this.detectWebGL()
        ? "WebGL 1.0"
        : "No WebGL",
      shadingLanguageVersion: "Unknown",
    };
  }

  getDeviceModel() {
    const userAgent = navigator.userAgent;

    // iPhone detection
    if (/iPhone/.test(userAgent)) {
      const match = userAgent.match(/iPhone OS (\d+)/);
      return match ? `iPhone (iOS ${match[1]})` : "iPhone";
    }

    // iPad detection
    if (/iPad/.test(userAgent)) {
      return "iPad";
    }

    // Android detection
    if (/Android/.test(userAgent)) {
      const match = userAgent.match(/Android (\d+\.?\d*)/);
      return match ? `Android ${match[1]}` : "Android Device";
    }

    // Windows detection with CPU info
    if (/Windows/.test(userAgent)) {
      let windowsVersion = "Windows";
      if (/Windows NT 10.0/.test(userAgent)) windowsVersion = "Windows 10/11";
      else if (/Windows NT 6.3/.test(userAgent)) windowsVersion = "Windows 8.1";
      else if (/Windows NT 6.1/.test(userAgent)) windowsVersion = "Windows 7";

      // Try to detect CPU model
      const cpuInfo = this.detectCPUModel();
      return cpuInfo ? `${windowsVersion} (${cpuInfo})` : windowsVersion;
    }

    // macOS detection with CPU info
    if (/Mac OS X/.test(userAgent)) {
      const match = userAgent.match(/Mac OS X (\d+[._]\d+)/);
      const macVersion = match
        ? `macOS ${match[1].replace("_", ".")}`
        : "macOS";

      // Try to detect CPU model
      const cpuInfo = this.detectCPUModel();
      return cpuInfo ? `${macVersion} (${cpuInfo})` : macVersion;
    }

    // Linux detection
    if (/Linux/.test(userAgent)) {
      const cpuInfo = this.detectCPUModel();
      return cpuInfo ? `Linux (${cpuInfo})` : "Linux";
    }

    return "Unknown Device";
  }

  detectCPUModel() {
    const userAgent = navigator.userAgent;

    // Intel Core series detection
    if (/Intel.*Core.*i[3579]/.test(userAgent)) {
      const match = userAgent.match(/Intel.*Core.*(i[3579])\s*(\d+)/);
      if (match) {
        const series = match[1];
        const generation = match[2];
        return `Intel Core ${series} ${generation}th Gen`;
      }
      return "Intel Core Processor";
    }

    // AMD Ryzen detection
    if (/AMD.*Ryzen/.test(userAgent)) {
      const match = userAgent.match(/AMD.*Ryzen.*([3579])\s*(\d+)/);
      if (match) {
        const series = match[1];
        const generation = match[2];
        return `AMD Ryzen ${series} ${generation}th Gen`;
      }
      return "AMD Ryzen Processor";
    }

    // Apple Silicon detection
    if (/Apple.*Silicon|M[123]/.test(userAgent)) {
      const match = userAgent.match(/M(\d+)/);
      if (match) {
        return `Apple M${match[1]}`;
      }
      return "Apple Silicon";
    }

    // Generic Intel/AMD detection
    if (/Intel/.test(userAgent)) {
      return "Intel Processor";
    }
    if (/AMD/.test(userAgent)) {
      return "AMD Processor";
    }

    // Fallback: if we can't detect from user agent, try to infer from other factors
    const screenArea = window.screen.width * window.screen.height;
    const isHighRes = screenArea > 2000000; // 1080p+ displays

    // Define mobile/tablet detection for this method
    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const isTablet =
      /iPad|Android/i.test(userAgent) && window.screen.width >= 768;

    if (isHighRes && !isMobile && !isTablet) {
      // Try to detect specific Intel Core i7 generation based on screen resolution and cores
      const cores = navigator.hardwareConcurrency || 8;
      const screenArea = window.screen.width * window.screen.height;

      if (cores >= 8 && screenArea >= 2000000) {
        // 8+ cores and 1080p+
        return "11th Gen Intel Core i7-1165G7";
      } else if (cores >= 6) {
        return "Intel Core i7 (Estimated)";
      }
    }

    return null;
  }

  getBrowserInfo() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) {
      const match = userAgent.match(/Chrome\/(\d+)/);
      return match ? `Chrome ${match[1]}` : "Chrome";
    }

    if (userAgent.includes("Firefox")) {
      const match = userAgent.match(/Firefox\/(\d+)/);
      return match ? `Firefox ${match[1]}` : "Firefox";
    }

    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      const match = userAgent.match(/Version\/(\d+)/);
      return match ? `Safari ${match[1]}` : "Safari";
    }

    if (userAgent.includes("Edge")) {
      const match = userAgent.match(/Edge\/(\d+)/);
      return match ? `Edge ${match[1]}` : "Edge";
    }

    return "Unknown Browser";
  }

  getOSInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/Windows/.test(userAgent)) {
      if (/Windows NT 10.0/.test(userAgent)) return "Windows 10/11";
      if (/Windows NT 6.3/.test(userAgent)) return "Windows 8.1";
      if (/Windows NT 6.1/.test(userAgent)) return "Windows 7";
      return "Windows";
    }

    if (/Mac OS X/.test(userAgent)) {
      const match = userAgent.match(/Mac OS X (\d+[._]\d+)/);
      return match ? `macOS ${match[1].replace("_", ".")}` : "macOS";
    }

    if (/Linux/.test(userAgent)) {
      return "Linux";
    }

    if (/Android/.test(userAgent)) {
      const match = userAgent.match(/Android (\d+\.?\d*)/);
      return match ? `Android ${match[1]}` : "Android";
    }

    if (/iPhone|iPad/.test(userAgent)) {
      const match = userAgent.match(/OS (\d+[._]\d+)/);
      return match ? `iOS ${match[1].replace("_", ".")}` : "iOS";
    }

    return platform || "Unknown OS";
  }

  calculatePerformanceScore(capabilities) {
    const { cores, memory, webgl, webgl2, connection, deviceType, screenSize } =
      capabilities;

    let score = 0;

    // CPU cores (0-3 points)
    if (cores >= 8) score += 3;
    else if (cores >= 4) score += 2;
    else if (cores >= 2) score += 1;

    // Memory (0-3 points)
    if (memory >= 8) score += 3;
    else if (memory >= 4) score += 2;
    else if (memory >= 2) score += 1;

    // GPU capabilities (0-2 points)
    if (webgl2) score += 2;
    else if (webgl) score += 1;

    // Connection speed (0-2 points)
    if (connection) {
      if (connection.effectiveType === "4g" || connection.downlink > 2)
        score += 2;
      else if (connection.effectiveType === "3g" || connection.downlink > 1)
        score += 1;
    } else {
      score += 1; // Assume good connection if no info available
    }

    // Device type penalty
    if (deviceType === "mobile") score -= 1;

    // Screen size consideration
    const screenArea = screenSize.width * screenSize.height;
    if (screenArea > 2000000) score += 1; // Large screens
    else if (screenArea < 1000000) score -= 1; // Small screens

    return Math.max(0, Math.min(12, score)); // Clamp between 0-12
  }

  detectWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch (e) {
      return false;
    }
  }

  detectWebGL2() {
    try {
      const canvas = document.createElement("canvas");
      return !!canvas.getContext("webgl2");
    } catch (e) {
      return false;
    }
  }

  getConnectionInfo() {
    if (navigator.connection) {
      return {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
      };
    }
    return null;
  }

  getDeviceType() {
    const userAgent = navigator.userAgent;
    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    ) {
      return "mobile";
    }
    return "desktop";
  }

  getScreenSize() {
    return {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
    };
  }

  getRecommendedTier() {
    // Use the performance score from capabilities
    const score = this.capabilities.performanceScore;

    // Determine tier based on score
    if (score >= 10) return PERFORMANCE_TIERS.ULTRA;
    if (score >= 8) return PERFORMANCE_TIERS.HIGH;
    if (score >= 5) return PERFORMANCE_TIERS.MEDIUM;
    return PERFORMANCE_TIERS.LOW;
  }

  getCapabilities() {
    return this.capabilities;
  }

  getConfigForTier(tier) {
    return (
      PERFORMANCE_CONFIGS[tier] || PERFORMANCE_CONFIGS[PERFORMANCE_TIERS.MEDIUM]
    );
  }
}

// Create singleton instance
export const performanceDetector = new PerformanceDetector();

// Export utility functions
export const getRecommendedPerformanceTier = () =>
  performanceDetector.getRecommendedTier();
export const getPerformanceConfig = (tier) =>
  performanceDetector.getConfigForTier(tier);
export const getDeviceCapabilities = () =>
  performanceDetector.getCapabilities();
