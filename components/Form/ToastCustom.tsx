import { toast } from "sonner";
import CheckCircle from "../icons/check-circle";
import XMark from "../icons/x-mark";
import ExclamationCircle from "../icons/exclamation-circle";
import Link from "next/link";

export const SuccessToast = ({ t }: { t: string | number }) => {
  return (
    <div className="pt-3 pr-3 group">
      <div className="p-5 relative lg:min-w-[355px] rounded shadow-lg border border-transparent dark:border-gray-600 font-medium bg-white dark:bg-black">
        <div className="flex items-center gap-1.5">
          <span className="mt-0.5 self-start">
            <CheckCircle />
          </span>
          <div className="">
            <p>Your message has been submitted</p>
            <p className="mt-2 text-sm">
              I will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <button
          className="opacity-0 group-hover:opacity-100 absolute -top-1.5 -right-1.5 h-5 w-5 flex justify-center items-center bg-gray-800 dark:bg-gray-100 border border-white dark:border-black rounded-full transition duration-200"
          onClick={() => toast.dismiss(t)}
        >
          <XMark />
        </button>
      </div>
    </div>
  );
};

export const ErrorToast = ({ t }: { t: string | number }) => {
  return (
    <div className="pt-3 pr-3 group">
      <div className="p-5 relative lg:min-w-[355px] rounded shadow-lg border border-transparent dark:border-gray-600 font-medium bg-white dark:bg-black">
        <div className="flex items-center gap-1.5">
          <span className="mt-0.5 self-start">
            <ExclamationCircle />
          </span>
          <div className="">
            <p className="text-red-600 dark:text-red-400">
              Oops! something went wrong
            </p>
            <p className="mt-2 text-sm">
              Please try again, or reach out to me directly at:{" "}
              <Link
                href="mailto:ashfakniloy@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                ashfakniloy@gmail.com
              </Link>
            </p>
            <p className="mt-1 text-sm">Thank you for your patience.</p>
          </div>
        </div>

        <button
          className="opacity-0 group-hover:opacity-100 absolute -top-1.5 -right-1.5 h-5 w-5 flex justify-center items-center bg-gray-800 dark:bg-gray-100 border border-white dark:border-black rounded-full transition duration-200"
          onClick={() => toast.dismiss(t)}
        >
          <XMark />
        </button>
      </div>
    </div>
  );
};
