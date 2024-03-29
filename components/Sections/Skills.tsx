import { skills } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-[80px] lg:py-[100px] min-h-[calc(100vh-60px)]"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold tracking-wide">
          Skills
        </h2>
        <p className="mt-5 max-w-[500px]">
          My approach to web development is all about using the latest
          technologies to make awesome web experiences. Here are some of my core
          skills.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center flex-wrap gap-x-[14px] gap-y-10 lg:gap-16 lg:mx-20">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="h-[115px] w-[105px] lg:h-[133px] lg:w-[116px] flex flex-col justify-center items-center"
          >
            <div className="relative p-3 rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex justify-center items-center shadow-md bg-white dark:bg-stone-800">
              {skill.icon}
            </div>
            <p className="mt-3 text-sm lg:text-base font-bold whitespace-nowrap">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
