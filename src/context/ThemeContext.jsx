import { createContext, useEffect, useState } from "react";

/**
 * ThemeContext — provides { theme, toggleTheme, setTheme } to the tree.
 * Consumed via the separate `useTheme` hook (hooks/useTheme.js), kept as
 * its own file per the folder structure rather than exporting a hook
 * from here directly.
 *
 * Resolution order on first load: a previously saved choice in
 * localStorage, then the OS-level prefers-color-scheme, then light as
 * the final fallback. Applies/removes the `.dark` class on <html>, which
 * is what index.css's token overrides key off.
 */

export const ThemeContext = createContext(undefined);

const STORAGE_KEY = "Tec Tha-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);

  // Apply to <html> whenever theme changes — this always runs, regardless
  // of whether the change came from the user or from OS preference.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  // Follow OS-level changes, but only if the user hasn't made an explicit
  // choice of their own (i.e. nothing written to localStorage yet).
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const hasExplicitChoice = window.localStorage.getItem(STORAGE_KEY);
      if (!hasExplicitChoice) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Persisting to localStorage happens ONLY here — on an explicit user
  // action — never as a side effect of the initial OS-derived mount value.
  const setTheme = (next) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};