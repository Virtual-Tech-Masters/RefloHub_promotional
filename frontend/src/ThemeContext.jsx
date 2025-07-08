import { createContext, useContext, useEffect, useState } from "react";

// Define the keyframes for the horizontal lighting transition
const transitionStyles = `
  @keyframes slideLight {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .theme-transition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    pointer-events: none;
    z-index: 9999;
    animation: slideLight 0.6s ease-out forwards;
  }
`;

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Inject the CSS keyframes into the document
    const styleSheet = document.createElement("style");
    styleSheet.innerText = transitionStyles;
    document.head.appendChild(styleSheet);

    // Clean up the stylesheet on component unmount
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    // Trigger the transition effect
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600); // Match animation duration

    // Update the theme class on document element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isTransitioning && <div className="theme-transition" />}
      {children}
    </ThemeContext.Provider>
  );
};