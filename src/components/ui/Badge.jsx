/**
 * Badge — small pill label for tags, categories, and status markers.
 * Several sections built so far (FeaturedWork's category tag, Innovation's
 * "Innovation Lab" pill) hand-rolled this exact pattern inline; this is
 * the shared version those could be refactored to use instead.
 *
 * <Badge>Platform Modernization</Badge>
 * <Badge variant="gradient" icon={<Sparkles className="h-3.5 w-3.5" />}>Innovation Lab</Badge>
 * <Badge variant="outline" size="sm">Full-time</Badge>
 */

const VARIANT_CLASSES = {
  default:
    "bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] dark:bg-white/5 dark:text-[color:var(--color-brand-400)]",
  outline:
    "border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] bg-transparent",
  gradient:
    "bg-gradient-to-r from-[#2563EB]/15 to-[#7C3AED]/15 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)] border border-[color:var(--color-brand-500)]/20",
  dark:
    "border border-white/15 bg-white/5 text-slate-300",
  success:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
};

const SIZE_CLASSES = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

const Badge = ({
  children,
  variant = "default",
  size = "md",
  icon,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wide ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;