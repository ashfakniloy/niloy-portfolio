function TextareaField({
  label,
  name,
  required,
  rows = 5,
  ...props
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
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
        className="mt-2 w-full outline-none p-2 bg-gray-200 dark:bg-gray-800 border-2 border-transparent rounded-md focus:border-cyan-300 dark:focus:border-cyan-800"
      />
    </div>
  );
}

export default TextareaField;
