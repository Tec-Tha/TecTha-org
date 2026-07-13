import { X } from "lucide-react";

/**
 * Tag — interactive chip for filters and selections, distinct from
 * Badge (which is a static label). Careers.jsx's department filter
 * buttons hand-rolled this exact active/inactive pattern inline; this
 * is the shared version, plus an optional removable state for things
 * like applied-filter chips.
 *
 * <Tag active={dept === "All"} onClick={() => setDept("All")}>All</Tag>
 * <Tag onRemove={() => clearFilter()}>Engineering ×</Tag>
 */

const Tag = ({
  children,
  active = false,
  onClick,
  onRemove,
  disabled = false,
  className = "",
}) => {
  const isInteractive = typeof onClick === "function";

  const baseClasses = `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    active
      ? "border border-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white"
      : "border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-brand-500)]"
  } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`;

  const content = (
    <>
      {children}
      {onRemove && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              onRemove();
            }
          }}
          aria-label="Remove filter"
          className="ml-0.5 rounded-full transition-opacity hover:opacity-70"
        >
          <X className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  if (isInteractive) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-pressed={active}
        className={baseClasses}
      >
        {content}
      </button>
    );
  }

  return <span className={baseClasses}>{content}</span>;
};

export default Tag;