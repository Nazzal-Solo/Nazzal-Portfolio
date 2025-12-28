import React, { createContext, useContext, useState, useEffect } from "react";

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

export const CursorProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  // Load preference from localStorage on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem("splashCursorEnabled");
    if (savedPreference !== null) {
      setIsEnabled(savedPreference === "true");
    }
  }, []);

  // Save preference to localStorage whenever it changes
  const toggleCursor = () => {
    setIsEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("splashCursorEnabled", String(newValue));
      return newValue;
    });
  };

  return (
    <CursorContext.Provider value={{ isEnabled, toggleCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

