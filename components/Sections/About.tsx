import Image from "next/image";
import PotraitNiloy from "@/public/images/potrait-niloy.webp";
import Highlight from "../Highlight";

function About() {
  return (
    <section
      id="about"
      className="mt-[-60px] pt-[120px] pb-[80px] lg:py-[100px] flex flex-col lg:flex-row justify-center gap-8 lg:gap-0 lg:justify-between items-center min-h-[100dvh] lg:min-h-screen"
    >
      <div className="lg:max-w-[530px]">
        <div className="font-montserrat space-y-1 lg:space-y-2">
          <p className="font-medium text-gray-700 dark:text-gray-300 text-sm lg:text-base">
            Hi there, my name is
          </p>
          <h1 className="font-bold text-3xl lg:text-[42px] capitalize text-gray-800 dark:text-gray-100">
            Ashfak Ahmed Niloy
          </h1>
          <h2 className="font-bold text-[22px] lg:text-[26px] text-gray-700 dark:text-gray-300">
            I&apos;m a Web Developer
          </h2>
        </div>
        <p className="mt-3 lg:mt-5 text-gray-900 dark:text-gray-100 text-base">
          My specialty is in <Highlight>frontend</Highlight> web development,
          where I utilize <Highlight>React</Highlight> and{" "}
          <Highlight>Next.js</Highlight> to construct intuitive interfaces.
          I&apos;m also experienced in <Highlight>fullstack</Highlight> web
          development with <Highlight>Next.js</Highlight>. I like to use{" "}
          <Highlight>TypeScript</Highlight> and{" "}
          <Highlight>Tailwind CSS</Highlight> for my projects.
        </p>
      </div>

      <div>
        <div className="relative overflow-hidden h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] animate-blob-animation rounded-full border-[7px] lg:border-[10px] border-gray-300 dark:border-gray-500">
          <Image
            src={PotraitNiloy}
            placeholder="blur"
            alt="niloy potrait"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
