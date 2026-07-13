import { motion } from "framer-motion";

/**
 * TextReveal — splits `text` into words, characters, or lines and
 * staggers them in on mount (or on scroll into view, see `trigger`).
 * Used for headline reveals where a plain fade-up on the whole block
 * would read as flat next to the rest of the site's motion language.
 *
 * <TextReveal type="words" stagger={0.05} delay={0.3} text="Engineering the systems ambitious enterprises run on." />
 */

const container = (stagger, delay) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const child = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const TextReveal = ({
  text = "",
  type = "words",
  stagger = 0.04,
  delay = 0,
  trigger = "mount", // "mount" | "inView"
  className = "",
}) => {
  const viewportProps =
    trigger === "inView"
      ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
      : { animate: "visible" };

  if (type === "lines") {
    const lines = text.split("\n");
    return (
      <motion.span
        initial="hidden"
        {...viewportProps}
        variants={container(stagger, delay)}
        className={`block ${className}`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={child} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  if (type === "chars") {
    const chars = text.split("");
    return (
      <motion.span
        initial="hidden"
        {...viewportProps}
        variants={container(stagger, delay)}
        className={`inline-block ${className}`}
        aria-label={text}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block"
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // type === "words" (default)
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      {...viewportProps}
      variants={container(stagger, delay)}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;