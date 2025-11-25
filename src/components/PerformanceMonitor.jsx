import { useEffect, useRef, useState } from "react";

const PerformanceMonitor = ({ enabled = false, inline = false }) => {
  const [fps, setFps] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const measureFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= 1000) {
        const currentFps = Math.round(
          (frameCountRef.current * 1000) / deltaTime
        );
        setFps(currentFps);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      rafRef.current = requestAnimationFrame(measureFPS);
    };

    rafRef.current = requestAnimationFrame(measureFPS);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  // Inline version for header integration
  if (inline) {
    return (
      <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md text-xs font-mono shadow-sm">
        <div
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
            fps >= 50
              ? "bg-green-500"
              : fps >= 30
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        />
        <span className="text-neutral-600 dark:text-neutral-400 hidden sm:inline">
          FPS: {fps}
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 sm:hidden">
          {fps}
        </span>
      </div>
    );
  }

  // Fixed position version (original)
  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-mono max-w-[120px] sm:max-w-none">
      <div className="flex items-center gap-1 sm:gap-2">
        <div
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${
            fps >= 50
              ? "bg-green-500"
              : fps >= 30
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        />
        <span className="truncate">FPS: {fps}</span>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
