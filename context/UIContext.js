import { createContext, useContext, useState, useEffect } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("base");

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const savedFontSize = localStorage.getItem("fontSize");

    if (savedDarkMode !== null) setDarkMode(savedDarkMode === "true");
    if (savedFontSize) setFontSize(savedFontSize);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <UIContext.Provider value={{ darkMode, setDarkMode, fontSize, setFontSize }}>
      {children}
    </UIContext.Provider>
  );
};
