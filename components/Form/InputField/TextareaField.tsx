function TextareaField({
  label,
  name,
  required,
  rows = 5,
  errorMessages,
  ...props
}: {
  label: string;
  name: string;
  rows?: number;
  errorMessages?: string[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <textarea
        id={label}
        name={name}
        rows={rows}
        required={required}
        {...props}
        className="mt-2 w-full outline-none p-2 bg-stone-200 dark:bg-stone-900 border-2 border-transparent rounded-md focus:border-stone-400 dark:focus:border-stone-700"
      />
      {errorMessages && (
        <p className="absolute -bottom-4 text-red-800 dark:text-red-500 text-sm">
          {errorMessages[0]}
        </p>
      )}
    </div>
  );
}

export default TextareaField;
