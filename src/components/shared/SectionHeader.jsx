import { motion } from "framer-motion";

/**
 * SectionHeader — the single overline/title/subtitle pattern reused at
 * the top of nearly every section across the site. Centralizing it here
 * is what keeps that pattern visually identical everywhere it appears,
 * rather than each section reimplementing its own spacing and type scale.
 *
 * <SectionHeader overline="Services" title={<>Six practices,<br/>one standard.</>} subtitle="..." align="left" />
 */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SectionHeader = ({ overline, title, subtitle, align = "left" }) => {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {overline && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]"
        >
          {overline}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.08}
        className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-[color:var(--color-text-primary)]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.16}
          className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;