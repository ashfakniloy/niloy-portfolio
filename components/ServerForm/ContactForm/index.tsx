import InputField from "./InputField";
import TextareaField from "./InputField/TextareaField";
import SubmitButton from "./SubmitButton";
import { contactAction } from "./contactAction";

function ServerForm() {
  return (
    <div className="w-[500px]">
      <form
        action={contactAction}
        className="flex flex-col gap-7"
        // className="space-y-7" //space-y-7 causes layout shift issue after form submission if i use math.random as key
        key={Math.random()} //a trick for resetting server form after submission. contactAction revalidate the path and then the key changes
      >
        <InputField name="name" label="Name" type="text" required />
        <InputField name="email" label="Email" type="email" required />
        <TextareaField name="message" label="Message" required />
        <div className="mt-2 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default ServerForm;
