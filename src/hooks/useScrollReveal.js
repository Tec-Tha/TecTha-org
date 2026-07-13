import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal — GSAP ScrollTrigger-based reveal for elements that
 * aren't already using Framer Motion's `whileInView` pattern (which is
 * what nearly every section built so far uses instead — SectionHeader,
 * ServicesGrid, WhyUs, etc.). This hook exists for the other case: plain
 * DOM refs, imperative GSAP timelines, or long lists where mounting a
 * Framer Motion component per item would be heavier than necessary.
 *
 * const ref = useScrollReveal({ direction: "up", distance: 24 });
 * <div ref={ref}>Content that fades/slides in once, on scroll</div>
 *
 * const ref = useScrollReveal({ direction: "none", scale: true });
 * <div ref={ref}>Scales from 0.96 → 1 with no positional movement</div>
 */

const AXIS = { up: "y", down: "y", left: "x", right: "x" };
const SIGN = { up: 1, down: -1, left: 1, right: -1 };

export const useScrollReveal = ({
  direction = "up",
  distance = 24,
  scale = false,
  duration = 0.7,
  delay = 0,
  start = "top 85%",
  once = true,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const fromVars = { opacity: 0 };
    if (direction !== "none") {
      fromVars[AXIS[direction]] = distance * SIGN[direction];
    }
    if (scale) fromVars.scale = 0.96;

    const tween = gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, distance, scale, duration, delay, start, once]);

  return ref;
};