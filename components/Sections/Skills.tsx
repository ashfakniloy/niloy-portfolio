import { skills } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-[80px] lg:py-[100px] min-h-[calc(100vh-60px)]"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold tracking-wide">Skills</h2>
        <p className="mt-5 max-w-[500px]">
          My approach to web development revolves around embracing the latest
          technologies to deliver exceptional applications. Below, you&apos;ll
          find a glimpse of my core skills, reflecting my commitment to building
          with innovation.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center flex-wrap gap-10 lg:gap-16 lg:mx-20">
        {skills.map((skill) => (
          <div key={skill.name} className="">
            <div
              className={`relative p-3 rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex justify-center items-center bg-white shadow-md dark:bg-gray-700`}
            >
              {skill.icon}
            </div>
            <p className="mt-3 flex justify-center text-sm lg:text-base font-bold place-self-end">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
