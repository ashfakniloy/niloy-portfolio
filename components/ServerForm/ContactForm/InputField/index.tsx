function InputField({
  label,
  name,
  type,
  required,
  ...props
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <input
        id={label}
        name={name}
        type={type}
        // placeholder={label}
        required={required}
        {...props}
        className="mt-2 w-full outline-none p-2 bg-gray-200 dark:bg-gray-800 border-2 border-transparent rounded-md focus:border-cyan-300 dark:focus:border-cyan-800"
      />

      {/* <p className="absolute -bottom-5 text-red-500 text-sm">
        <ErrorMessage {...props} />
       
      </p> */}
    </div>
  );
}

export default InputField;
