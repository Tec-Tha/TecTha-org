/**
 * Card — the base container most rounded panels across the site should
 * render through. ServicesGrid, Overview's stat panel, WhyUs, Industries,
 * Careers' benefit tiles, and others all hand-rolled this same
 * border/background/radius pattern inline; this is the shared version.
 *
 * <Card>Plain content</Card>
 * <Card variant="glass" hover="lift">Frosted panel</Card>
 * <Card variant="gradient" hover="glow" as="a" href="/services">Clickable</Card>
 */

const VARIANT_CLASSES = {
  default: "border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)]",
  glass:
    "border border-[color:var(--color-border)] bg-[color:var(--color-surface)] backdrop-blur-xl",
  gradient:
    "border border-transparent bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] text-white",
  bordered: "border-2 border-[color:var(--color-border)] bg-transparent",
};

const HOVER_CLASSES = {
  none: "",
  lift: "transition-transform duration-300 hover:-translate-y-1.5",
  glow: "transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.3)]",
};

const Card = ({
  children,
  variant = "default",
  hover = "none",
  padding = "p-8",
  as: Component = "div",
  className = "",
  ...rest
}) => {
  return (
    <Component
      className={`rounded-3xl ${VARIANT_CLASSES[variant]} ${HOVER_CLASSES[hover]} ${padding} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;