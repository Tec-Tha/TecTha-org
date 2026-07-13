import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * AnimatedCounter — counts from `from` to `to` when scrolled into view,
 * once. Used for stat callouts (Overview, Statistics). Renders the
 * static `to` value immediately if the user prefers reduced motion.
 *
 * <AnimatedCounter from={0} to={500} suffix="+" duration={2} />
 * <AnimatedCounter from={0} to={3.2} prefix="$" suffix="B" decimals={1} />
 */

const AnimatedCounter = ({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(from.toFixed(decimals));

  // Spring tuned so total settle time roughly matches `duration` seconds.
  // (useSpring's stiffness/damping API is more reliably supported across
  // framer-motion versions than its duration-based alternative.)
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

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;