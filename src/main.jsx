import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement("link");
  fontLink.rel = "preload";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
  fontLink.as = "style";
  document.head.appendChild(fontLink);

  // Preload critical images
  const profileImg = new Image();
  profileImg.src = "/images/profile.jpg";

  // Preload CV
  const cvLink = document.createElement("link");
  cvLink.rel = "preload";
  cvLink.href = "/CV.pdf";
  cvLink.as = "document";
  document.head.appendChild(cvLink);
};

// Initialize critical resource preloading
preloadCriticalResources();

// Initialize theme before React renders to prevent flash
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || "dark"; // Default to dark theme

  // Apply theme class immediately
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);

  // Save to localStorage if not already saved
  if (!savedTheme) {
    localStorage.setItem("theme", theme);
  }
};

// Initialize theme
initializeTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
