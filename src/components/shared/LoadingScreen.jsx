import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

/**
 * LoadingScreen — fullscreen overlay shown once per session on initial
 * mount. Logo mark draws itself via stroke-dashoffset, a counter eases
 * 0 → 100 alongside it, then the whole overlay slides up with a
 * clip-path wipe to reveal the page underneath. Calls `onComplete` once
 * the exit animation finishes so the parent can mount the real content.
 */

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 45, damping: 20 });

  useEffect(() => {
    // Skip entirely on repeat visits within the same session.
    if (sessionStorage.getItem("Tec Tha-loaded")) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    progress.set(100);

    const unsubscribe = smoothProgress.on("change", (latest) => {
      setCount(Math.min(100, Math.round(latest)));
    });

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("Tec Tha-loaded", "true");
    }, 1900);

    return () => {
      unsubscribe();
      clearTimeout(exitTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080C14]"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-16 w-16"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="loaderMark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <motion.path
              d="M8 12 L32 52 L56 12"
              stroke="url(#loaderMark)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
            />
          </svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 font-mono text-sm tabular-nums tracking-widest text-slate-400"
          >
            {count.toString().padStart(3, "0")}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;