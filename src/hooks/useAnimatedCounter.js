import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * useAnimatedCounter — the counting logic behind the AnimatedCounter
 * component, extracted into a standalone hook per the original folder
 * structure (hooks/useAnimatedCounter.js). Returns the current display
 * string and a ref to attach to whatever element should trigger the
 * count when it scrolls into view.
 *
 * const { ref, display } = useAnimatedCounter({ from: 0, to: 94, decimals: 0, duration: 1.8 });
 * <p ref={ref}>{display}%</p>
 */

export const useAnimatedCounter = ({
  from = 0,
  to,
  decimals = 0,
  duration = 2,
} = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(from.toFixed(decimals));

  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    stiffness: 60 / duration,
    damping: 16,
    mass: 1,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(to.toFixed(decimals));
      return;
    }

    if (isInView) {
      motionValue.set(to);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, to]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return { ref, display, isInView };
};