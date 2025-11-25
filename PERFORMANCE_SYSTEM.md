# Performance System Documentation

## Overview

The performance system automatically detects user device capabilities and provides three performance tiers to optimize the website experience based on hardware capabilities. This ensures smooth performance across all devices while maintaining visual quality where possible.

## Features

### 🎯 Automatic Device Detection

- **CPU Cores**: Detects number of processor cores
- **Memory**: Estimates available RAM
- **GPU**: Checks WebGL support and version
- **Connection**: Analyzes network speed (when available)
- **Device Type**: Identifies mobile vs desktop
- **Screen Size**: Considers display resolution

### ⚡ Three Performance Tiers

#### 🔋 Low Performance

- **Target**: Older devices, slow connections
- **Splash Cursor**: Reduced resolution (32x32), lower FPS (20)
- **Animations**: Simplified, reduced motion
- **Effects**: Minimal particles, basic transitions

#### ⚖️ Medium Performance

- **Target**: Most modern devices
- **Splash Cursor**: Balanced resolution (48x48), 30 FPS
- **Animations**: Standard quality, smooth transitions
- **Effects**: Moderate particles, good visual quality

#### 🚀 High Performance

- **Target**: Powerful devices, fast connections
- **Splash Cursor**: Full resolution (64x64), 60 FPS
- **Animations**: Full quality, complex effects
- **Effects**: Maximum particles, all visual features

## Usage

### Basic Implementation

```jsx
import { PerformanceProvider } from "./contexts/PerformanceContext";
import { usePerformance } from "./contexts/PerformanceContext";

// Wrap your app with PerformanceProvider
function App() {
  return <PerformanceProvider>{/* Your app content */}</PerformanceProvider>;
}

// Use in components
function MyComponent() {
  const { currentTier, isLowPerformance, getCurrentConfig } = usePerformance();

  return (
    <div>
      Current tier: {currentTier}
      {isLowPerformance && <p>Using low performance mode</p>}
    </div>
  );
}
```

### Using the Performance Settings Hook

```jsx
import { usePerformanceSettings } from "./hooks/usePerformanceSettings";

function AnimatedComponent() {
  const {
    getAnimationDuration,
    getMotionVariants,
    shouldReduceMotion,
    getParticleCount,
  } = usePerformanceSettings();

  const variants = getMotionVariants({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  });

  const particleCount = getParticleCount(100); // Returns 30, 60, or 100 based on tier

  return (
    <motion.div
      variants={variants}
      transition={{ duration: getAnimationDuration(0.5) }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

### Performance Settings Button

```jsx
import PerformanceSettingsButton from "./components/PerformanceSettingsButton";

function Header() {
  return (
    <header>
      {/* Other header content */}
      <PerformanceSettingsButton />
    </header>
  );
}
```

## Configuration

### Customizing Performance Tiers

Edit `src/utils/performanceDetector.js` to modify the performance configurations:

```javascript
export const PERFORMANCE_CONFIGS = {
  [PERFORMANCE_TIERS.LOW]: {
    name: "Low Performance",
    splashCursor: {
      SIM_RESOLUTION: 32,
      DYE_RESOLUTION: 256,
      targetFPS: 20,
    },
    animations: {
      reducedMotion: true,
      disableComplexAnimations: true,
    },
  },
  // ... other tiers
};
```

### Adding New Performance Settings

1. **Add to Performance Config**:

```javascript
// In performanceDetector.js
animations: {
  customSetting: true;
}
```

2. **Use in Components**:

```javascript
const { animationConfig } = usePerformance();
const customSetting = animationConfig.customSetting;
```

## Components Integration

### SplashCursor

Automatically adapts resolution, FPS, and effects based on performance tier.

### AnimatedHero

Uses performance-aware motion variants and transitions.

### Other Components

Use the `usePerformanceSettings` hook for easy integration:

```jsx
const {
  getAnimationDuration,
  shouldReduceMotion,
  getParticleCount,
  getQualityLevel,
} = usePerformanceSettings();
```

## Device Detection Algorithm

The system scores devices based on:

1. **CPU Cores** (0-3 points)

   - 8+ cores: 3 points
   - 4+ cores: 2 points
   - 2+ cores: 1 point

2. **Memory** (0-3 points)

   - 8GB+: 3 points
   - 4GB+: 2 points
   - 2GB+: 1 point

3. **GPU** (0-2 points)

   - WebGL 2.0: 2 points
   - WebGL 1.0: 1 point

4. **Connection** (0-2 points)

   - 4G/Fast: 2 points
   - 3G/Medium: 1 point

5. **Device Type** (-1 to +1 points)
   - Mobile: -1 point
   - Desktop: 0 points
   - Large screen: +1 point

**Final Score**:

- 8+ points: High Performance
- 5-7 points: Medium Performance
- <5 points: Low Performance

## User Experience

### Automatic Selection

- System automatically selects optimal tier on first visit
- Settings are saved in localStorage
- Users can manually override the recommendation

### Settings UI

- Clean, accessible interface
- Shows device capabilities
- Displays current vs recommended settings
- Easy reset to recommended settings

### Visual Indicators

- Performance button shows current tier with icon
- Orange dot indicates non-recommended settings
- Clear descriptions for each tier

## Best Practices

### For Developers

1. **Always use the performance hook** instead of hardcoded values
2. **Test on different devices** to ensure proper scaling
3. **Provide fallbacks** for when performance detection fails
4. **Consider user preferences** alongside automatic detection

### For Users

1. **Start with recommended settings** for best experience
2. **Adjust based on performance issues** if needed
3. **Reset to recommended** after device upgrades

## Browser Support

- **Modern browsers**: Full support with all features
- **Older browsers**: Graceful degradation to medium performance
- **No JavaScript**: Falls back to basic functionality

## Performance Impact

The performance system itself has minimal overhead:

- **Initialization**: ~5ms device detection
- **Memory**: ~1KB for settings storage
- **Runtime**: No measurable impact on animations

## Troubleshooting

### Common Issues

1. **Settings not saving**: Check localStorage permissions
2. **Wrong tier detected**: Clear localStorage and refresh
3. **Performance still poor**: Try lower tier manually

### Debug Mode

Enable debug logging in development:

```javascript
// In performanceDetector.js
console.log("Device capabilities:", capabilities);
console.log("Recommended tier:", recommendedTier);
```

## Future Enhancements

- [ ] Battery level detection for mobile devices
- [ ] Network quality monitoring
- [ ] User preference learning
- [ ] A/B testing for optimal defaults
- [ ] Performance metrics collection
