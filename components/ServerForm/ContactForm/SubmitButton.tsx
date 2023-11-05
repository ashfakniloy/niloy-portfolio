"use client";

import { useFormStatus } from "react-dom";

const Spinner = () => {
  return (
    <>
      <span
        role="status"
        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-gray-100 border-r-gray-100/30 border-b-gray-100/30 dark:border-gray-600 dark:border-r-gray-600/30 dark:border-b-gray-600/30"
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="relative w-[165px] py-2.5 text-white dark:text-black rounded-md bg-gray-700 hover:bg-opacity-90 dark:bg-gray-100 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending && (
        <span className="absolute flex items-center inset-y-0 left-6">
          <Spinner />
        </span>
      )}
      <span>Send</span>
      {pending && <span className="absolute">ing...</span>}
    </button>
  );
}

export default SubmitButton;
