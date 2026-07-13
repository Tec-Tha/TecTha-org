/**
 * Divider — thin rule for separating content, horizontal or vertical.
 * Overview's stat-card rule and the desktop stat separator in Hero both
 * hand-rolled a bare `h-px`/`w-px` div for this; this is the shared
 * version, with an optional inline label for cases like "or" between
 * two options.
 *
 * <Divider />
 * <Divider orientation="vertical" className="h-8" />
 * <Divider label="or" />
 */

const Divider = ({ orientation = "horizontal", label, className = "" }) => {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`w-px shrink-0 bg-[color:var(--color-border)] ${className}`}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={`flex items-center gap-4 ${className}`}
      >
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
        <span className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-text-muted)]">
          {label}
        </span>
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`h-px w-full bg-[color:var(--color-border)] ${className}`}
    />
  );
};

export default Divider;