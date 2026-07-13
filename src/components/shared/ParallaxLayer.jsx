import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxLayer — offsets its children along the scroll axis at a
 * fraction of normal scroll speed, creating depth between foreground
 * and background elements. Tracks scroll progress of its own bounding
 * box through the viewport, not the whole page, so it works no matter
 * where on the page it's placed.
 *
 * <ParallaxLayer speed={0.3} direction="y">...</ParallaxLayer>
 * <ParallaxLayer speed={-0.2} direction="x">...</ParallaxLayer>  // negative = opposite direction
 */

const ParallaxLayer = ({ children, speed = 0.3, direction = "y", className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Range scales with `speed`: at speed 0.3, the layer drifts ~30% of a
  // baseline 400px travel distance as it crosses the viewport.
  const travel = 400 * speed;
  const offset = useTransform(scrollYProgress, [0, 1], [travel / 2, -travel / 2]);

  const style = direction === "x" ? { x: offset } : { y: offset };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;