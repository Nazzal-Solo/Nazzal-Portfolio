import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = (minLoadTime = 600) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, minLoadTime);

    // Preload critical resources
    const preloadResources = () => {
      try {
        const img = new Image();
        img.src = "/images/profile.jpg";
      } catch (error) {
        console.warn("Preload error:", error);
      }
    };

    preloadResources();

    return () => {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    };
  }, [location.pathname, minLoadTime]);

  return { isLoading };
};
