import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";
import TextReveal from "../shared/TextReveal";
import { useMouseParallax } from "../../hooks/useMouseParallax";
 
/**
 * Hero — Home Section 1
 * Full-viewport opener. Five-phase reveal (overline → headline → subhead →
 * CTAs → visual) with an ambient mesh that tracks the cursor at low
 * amplitude. This is the one place on the page that's allowed to be loud.
 */
 
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};
 
const Hero = () => {
  const containerRef = useRef(null);
  const { x, y } = useMouseParallax(containerRef, { strength: 18 });
 
  const meshX = useSpring(x, { stiffness: 60, damping: 20 });
  const meshY = useSpring(y, { stiffness: 60, damping: 20 });
 
  const orbShiftX = useTransform(meshX, (v) => v * -1.4);
  const orbShiftY = useTransform(meshY, (v) => v * -1.4);
 
  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[color:var(--color-bg-primary)] pt-32 pb-20"
    >
      {/* Animated gradient orbs */}
      <motion.div
        style={{ x: orbShiftX, y: orbShiftY }}
        className="pointer-events-none absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[#2563EB]/25 to-[#7C3AED]/15 blur-[110px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: meshX, y: meshY }}
        className="pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#6366F1]/20 to-[#3B82F6]/10 blur-[100px]"
        aria-hidden="true"
      />
 
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy column */}
        <div>
          <motion.span
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-secondary)] backdrop-blur-sm"
          >
            Enterprise Technology Partner
          </motion.span>
 
          <h1 className="mt-8 text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-[color:var(--color-text-primary)]">
            <TextReveal
              type="words"
              stagger={0.05}
              delay={0.28}
              text="Engineering Enterprise Growth Through Technology."
            />
          </h1>
 
          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.75}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
            We build highly scalable business architectures, intelligent custom AI networks, and premium digital products to accelerate operations and drive measurable ROI for industry leaders.
          </motion.p>
 
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton strength={0.35}>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_0_36px_-10px_rgba(99,102,241,0.6)] transition-shadow duration-300 hover:shadow-[0_0_48px_-8px_rgba(99,102,241,0.75)]"
              >
                Book Strategy Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticButton>
 
            <MagneticButton strength={0.25}>
              <a
                href="/work"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[color:var(--color-border)] px-7 py-4 text-[15px] font-semibold text-[color:var(--color-text-primary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)]"
              >
                <PlayCircle className="h-4.5 w-4.5 text-[color:var(--color-brand-600)]" />
                Explore Our Solutions
              </a>
            </MagneticButton>
          </motion.div>
 
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={1.05}
            className="mt-14 flex items-center gap-8 text-sm text-[color:var(--color-text-muted)]"
          >
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-text-primary)]">180+</p>
              <p>Engagements delivered</p>
            </div>
            <div className="h-8 w-px bg-[color:var(--color-border)]" />
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-text-primary)]">24</p>
              <p>Countries served</p>
            </div>
          </motion.div>
        </div>
 
        {/* Visual column — abstract floating mesh, mouse-reactive */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="relative hidden aspect-square lg:block"
        >
          <motion.div
            style={{ x: meshX, y: meshY }}
            className="absolute inset-0 rounded-[2.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] backdrop-blur-xl"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10" />
 
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full opacity-80"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroMeshLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx={80 + i * 48}
                  cy={200}
                  r={3}
                  fill="url(#heroMeshLine)"
                  animate={{ cy: [200 - i * 6, 200 + i * 6, 200 - i * 6] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <path
                d="M40 250 C 140 180, 260 320, 360 220"
                stroke="url(#heroMeshLine)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </motion.div>
 
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] px-6 py-4 shadow-[0_20px_48px_-16px_rgba(37,99,235,0.3)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
              Platform uptime
            </p>
            <p className="mt-1 text-3xl font-bold text-[color:var(--color-text-primary)]">
              99.98%
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
 
export default Hero;