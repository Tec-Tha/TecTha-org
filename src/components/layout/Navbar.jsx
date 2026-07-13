import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../shared/ThemeToggle";
 
/**
 * Navbar — sticky, scroll-aware.
 * Transparent over the hero, frosted glass once the page scrolls past a
 * threshold. Desktop active link gets a shared-layout underline that
 * slides between items; mobile collapses into a staggered slide-down
 * drawer.
 */
 
const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
];
 
const drawerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  },
};
 
const linkStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
 
const linkItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // Close the mobile drawer on route change.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
 
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        isScrolled || isMenuOpen
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-[color:var(--color-text-primary)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-extrabold text-white">
            V
          </span>
          Tec Tha
        </Link>
 
        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[color:var(--color-text-primary)]"
                    : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
 
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(99,102,241,0.6)] transition-shadow duration-300 hover:shadow-[0_0_32px_-6px_rgba(99,102,241,0.75)]"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
 
        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-primary)]"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
 
      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-[color:var(--color-border)] md:hidden"
          >
            <motion.nav
              variants={linkStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-6 py-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.to} variants={linkItem}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive
                          ? "bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] dark:bg-white/5 dark:text-[color:var(--color-brand-400)]"
                          : "text-[color:var(--color-text-secondary)]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={linkItem} className="mt-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3.5 text-sm font-semibold text-white"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
 
export default Navbar