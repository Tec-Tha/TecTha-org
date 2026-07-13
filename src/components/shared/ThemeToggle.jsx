import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

/**
 * ThemeToggle — sun/moon icon swap with a spring-driven rotate + scale
 * cross-fade, rather than a plain instant icon swap. Sits in the Navbar
 * on both desktop and mobile. Reads/writes theme via the useTheme hook,
 * which is expected to persist the choice and toggle the `.dark` class
 * on <html> (see index.css for the tokens that key off it).
 */

const iconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.4 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: {
    opacity: 0,
    rotate: 90,
    scale: 0.4,
    transition: { duration: 0.15 },
  },
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)] dark:hover:text-[color:var(--color-brand-400)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-4.5 w-4.5" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-4.5 w-4.5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;