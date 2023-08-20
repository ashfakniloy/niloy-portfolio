import { Location } from "../icons/contact/location";
import { Email } from "../icons/contact/email";
import { Github } from "../icons/contact/github";
import { Facebook } from "../icons/contact/facebook";
import { Linkedin } from "../icons/contact/linkedin";
import Link from "next/link";
// import ServerForm from "../ServerForm/ContactForm";
import Form from "../Form";

const socials = [
  {
    name: "Github",
    icon: <Github />,
    link: "https://github.com/ashfakniloy",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/ashfakniloy",
  },
  // {
  //   name: "Linkedin",
  //   icon: <Linkedin />,
  //   link: "https://www.linkedin.com/",
  // },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-[80px] lg:py-[100px] min-h-[calc(100vh-60px)]"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold tracking-wide">Contact</h2>
        <p className="mt-5 max-w-[500px]">
          Let&apos;s connect and collaborate! If you&apos;re interested in
          working together or have any questions, feel free to reach out.
          I&apos;m excited to discuss new opportunities and ideas.
        </p>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between">
        <div className="space-y-7">
          <div className="flex items-center gap-3 lg:gap-6">
            {/* <div className="bg-[#99C84E]/70 h-[60px] w-[60px] rounded-full flex justify-center items-center"> */}
            <div className="bg-gray-300 dark:bg-gray-700 h-[40px] w-[40px] lg:h-[55px] lg:w-[55px] rounded-full flex justify-center items-center">
              <Location />
            </div>
            <div className="">
              <h3 className="text-xl lg:text-[22px] font-bold opacity-50">
                Location
              </h3>
              <span className="">Dhaka, Bangladesh (Time zone: GMT +6)</span>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-6">
            {/* <div className="bg-[#DC4233] h-[60px] w-[60px] rounded-full flex justify-center items-center"> */}
            <div className="bg-gray-300 dark:bg-gray-700 h-[40px] w-[40px] lg:h-[55px] lg:w-[55px] rounded-full flex justify-center items-center">
              <Email />
            </div>
            <div className="">
              <h3 className="text-xl lg:text-[22px] font-bold opacity-50">
                Email
              </h3>
              <Link
                href="mailto:ashfakniloy@gmail.com"
                className=" hover:text-blue-400 transition-colors duration-200"
              >
                ashfakniloy@gmail.com
              </Link>
            </div>
          </div>
          <div className="lg:pt-3 flex items-center gap-5">
            {/* <div className="bg-gray-700 h-[60px] w-[60px] rounded-full"></div> */}
            {socials.map((social) => (
              <Link key={social.name} href={social.link} target="_blank">
                <button
                  type="button"
                  title={social.name}
                  className="overflow-hidden"
                >
                  {social.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <Form />

        {/* <ServerForm /> */}

        {/* <div className="w-[550px] space-y-6">
          <InputField label="Name" type="text" />
          <InputField label="Email" type="email" />
          
          <div className="">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              className="mt-2 bg-transparent w-full outline-none p-2 border-2 border-gray-600 rounded-md focus:border-teal-500"
              rows={3}
            />

            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-3 rounded-md bg-green-700 text-sm font-bold"
              >
                Send
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
