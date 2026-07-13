import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

/**
 * useMouseParallax — tracks cursor position relative to the center of a
 * given container and returns raw motion values scaled by `strength`
 * (in pixels of maximum travel). Used by Hero.jsx to drift its
 * background orbs and mesh visual toward the cursor at low amplitude.
 *
 * Distinct from useMagneticEffect: that one only reacts while hovering
 * the target itself and is meant for buttons; this one listens on the
 * whole container (or window, if no container ref settles) and is meant
 * for large ambient background elements that should react even when the
 * cursor isn't directly over them.
 *
 * const containerRef = useRef(null);
 * const { x, y } = useMouseParallax(containerRef, { strength: 18 });
 * // typically piped through useSpring by the caller for smoothing
 */

export const useMouseParallax = (containerRef, { strength = 20 } = {}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = containerRef?.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

      x.set(relativeX * strength * 2);
      y.set(relativeY * strength * 2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const el = containerRef?.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, strength]);

  return { x, y };
};