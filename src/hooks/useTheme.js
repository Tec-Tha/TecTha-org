import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * useTheme — thin consumer of ThemeContext. This is what ThemeToggle.jsx
 * (and any future consumer, e.g. Navbar/Footer if they need to branch on
 * theme directly) actually imports, per the folder structure keeping the
 * context definition and the hook as separate files.
 *
 * const { theme, toggleTheme, setTheme } = useTheme();
 */

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};