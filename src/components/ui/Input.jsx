import { useId } from "react";

/**
 * Input — the base form field most inputs across the site should render
 * through. Contact.jsx's form fields and Footer.jsx's newsletter field
 * both hand-rolled this exact border/focus-ring pattern inline; this is
 * the shared version, covering both a single-line input and a textarea
 * via `multiline`.
 *
 * <Input label="Work email" type="email" required value={v} onChange={fn} />
 * <Input label="Message" multiline rows={5} value={v} onChange={fn} />
 * <Input label="Email" error="Enter a valid email address" value={v} onChange={fn} />
 */

const Input = ({
  label,
  error,
  multiline = false,
  rows = 4,
  className = "",
  id,
  ...rest
}) => {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const Component = multiline ? "textarea" : "input";

  const fieldClasses = `w-full rounded-xl border bg-[color:var(--color-bg-card)] px-4 py-3 text-sm text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] transition-colors duration-200 focus:outline-none ${
    error
      ? "border-red-400 focus:border-red-500"
      : "border-[color:var(--color-border)] focus:border-[color:var(--color-brand-500)]"
  } ${multiline ? "resize-none" : ""} ${className}`;

  return (
    <div>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium text-[color:var(--color-text-primary)]"
        >
          {label}
        </label>
      )}
      <Component
        id={fieldId}
        rows={multiline ? rows : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={`${label ? "mt-2" : ""} ${fieldClasses}`}
        {...rest}
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;