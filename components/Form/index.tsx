"use client";

import InputField from "./InputField";
import TextareaField from "./InputField/TextareaField";
import { contactAction } from "./contactAction";
import { useRef, useState } from "react";
import { ZodFormattedError } from "zod";
import { ContactProps, contactFormSchema } from "@/lib/schema";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import { ErrorToast, SuccessToast } from "./ToastCustom";
import emailjs from "@emailjs/browser";

function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [validationError, setValidationError] = useState<ZodFormattedError<
    ContactProps,
    string
  > | null>(null);

  const handleFormAction = async (formData: FormData) => {
    const { name, email, message } = Object.fromEntries(formData.entries());

    const data = {
      name,
      email,
      message,
    };

    const dataParsed = contactFormSchema.safeParse(data);

    if (!dataParsed.success) {
      const error = dataParsed.error.format();
      setValidationError(error);
      return;
    } else {
      setValidationError(null);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!!;

      const dataEmailjs = {
        from_name: dataParsed.data.name,
        to_name: "Niloy",
        from_email: dataParsed.data.email,
        // to_email: "ashfakniloy@gmail.com",
        message: dataParsed.data.message,
      };

      await emailjs.send(serviceId, templateId, dataEmailjs, publicKey).then(
        (result) => {
          console.log("success", result);

          toast.custom((t) => <SuccessToast t={t} />);

          formRef.current?.reset();
        },
        (error) => {
          console.log("error", error);

          toast.custom((t) => <ErrorToast t={t} />, { duration: 15000 });
        }
      );
    }

    // console.log("data", dataParsed);

    // toast.custom((t) => <SuccessToast t={t} />);

    // formRef.current?.reset();

    // setValidationError(null);

    // const result = await contactAction(formData);

    // if (result?.error) {
    //   setValidationError(result.error);
    // } else {
    //   toast.custom((t) => <SuccessToast t={t} />);

    //   setValidationError(null);

    //   formRef.current?.reset();
    // }
  };

  return (
    <div className="w-full lg:w-[500px]">
      <form
        ref={formRef}
        action={handleFormAction}
        className="space-y-7"
        noValidate
      >
        <InputField
          name="name"
          label="Name"
          type="text"
          errorMessages={validationError?.name?._errors}
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          errorMessages={validationError?.email?._errors}
        />
        <TextareaField
          name="message"
          label="Message"
          errorMessages={validationError?.message?._errors}
        />
        <div className="mt-2 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default Form;
