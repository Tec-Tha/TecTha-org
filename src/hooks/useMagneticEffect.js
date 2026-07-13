import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * useMagneticEffect — the cursor-attraction logic behind the
 * MagneticButton component, extracted into a standalone hook per the
 * original folder structure (hooks/useMagneticEffect.js). Returns a ref
 * to attach to the target element, spring-smoothed x/y motion values to
 * bind to `style`, and the mouse handlers to wire up.
 *
 * const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagneticEffect({ strength: 0.3 });
 * <motion.div ref={ref} style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
 *   ...
 * </motion.div>
 */

export const useMagneticEffect = ({ strength = 0.3 } = {}) => {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    rawX.set(offsetX * strength);
    rawY.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { ref, x, y, handleMouseMove, handleMouseLeave };
};