import React from "react";

const GlobalLoader = ({ isVisible, message = "Optimizing performance..." }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-sm w-full mx-4">
        <div className="flex flex-col items-center text-center">
          {/* Main Spinner */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-blue-400 opacity-20"></div>
          </div>

          {/* Loading Text */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {message}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Refreshing components for optimal performance
          </p>

          {/* Progress Dots */}
          <div className="flex space-x-1 mt-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoader;
