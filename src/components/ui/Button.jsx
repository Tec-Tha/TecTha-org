import { ArrowUpRight } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

/**
 * Button — the base interactive element most CTAs across the site
 * should render through. Several sections built earlier (Hero,
 * ContactCTA, Navbar) hand-rolled this exact gradient/outline/ghost
 * pattern inline; this is the shared version those could consolidate
 * onto.
 *
 * <Button variant="primary" size="lg" magnetic>Start a conversation</Button>
 * <Button variant="outline" href="/work">See our work</Button>
 * <Button variant="ghost" size="sm" showArrow={false}>Cancel</Button>
 */

const VARIANT_CLASSES = {
  primary:
    "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-[0_0_28px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_38px_-8px_rgba(99,102,241,0.75)]",
  outline:
    "border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] hover:border-[color:var(--color-brand-500)]",
  ghost:
    "text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-bg-secondary)]",
};

const SIZE_CLASSES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-7 py-4 text-[15px]",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  magnetic = false,
  showArrow = true,
  href,
  type = "button",
  className = "",
  ...rest
}) => {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const element = href ? (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  ) : (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );

  return magnetic ? (
    <MagneticButton strength={0.3}>{element}</MagneticButton>
  ) : (
    element
  );
};

export default Button;