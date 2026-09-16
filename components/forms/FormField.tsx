interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

/** Label + input slot + inline error wrapper shared by both application forms. */
export default function FormField({ id, label, error, optional, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {optional && (
          <span className="ml-1 font-body text-sm font-normal text-ink/50">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}
