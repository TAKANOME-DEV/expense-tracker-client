import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  return [theme, toggleTheme];
};
