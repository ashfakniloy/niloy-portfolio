import Image from "next/image";
import { projects } from "@/data/projects";
import { Github } from "../icons/contact/github";
import Link from "next/link";
import { ArrowUpRight } from "../icons/arrow-up-right";

function Projects() {
  return (
    <section
      id="projects"
      className="py-[80px] lg:py-[100px] min-h-[calc(100vh-60px)]"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold tracking-wide">Projects</h2>
        <p className="mt-5 max-w-[500px]">
          Explore a selection of my projects, where dynamic web applications and
          elegantly designed user interfaces take center stage. Each project
          reflects my dedication to crafting seamless and captivating digital
          experiences.
        </p>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center gap-28 lg:gap-[120px]">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="flex flex-col w-full lg:w-[1000px] lg:flex-row lg:even:flex-row-reverse items-center gap-5 lg:gap-10"
          >
            <Link
              href={project.site}
              target="_blank"
              className="w-full lg:w-auto"
            >
              <div className="relative w-full h-[195px] lg:w-[480px] lg:h-[237px] border border-gray-200 dark:border-gray-800 flex-1 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  placeholder="blur"
                  fill
                  sizes="500px"
                  className="object-cover object-top hover:object-bottom"
                  style={{
                    transitionProperty: "all",
                    transitionDuration: `${project.scrollDuration}s`,
                    transitionTimingFunction: "linear",
                  }}
                />
              </div>
            </Link>

            <div className="flex-1">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <div className="">{project.description}</div>
                <p className="">
                  <span className="font-bold mr-2">Tech Stack:</span>
                  {project.technologies.map((technology, i) => (
                    <span key={i} className="">
                      {technology}
                      {i !== project.technologies.length - 1 && ","}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-5">
                <Link href={project.repo} target="_blank">
                  <button
                    type="button"
                    className="font-semibold border border-gray-300 dark:border-gray-700 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-color duration-200"
                  >
                    <Github width={22} height={22} />
                    <span className="">Code</span>
                  </button>
                </Link>

                <Link href={project.site} target="_blank">
                  <button
                    type="button"
                    className="font-semibold border border-gray-300 dark:border-gray-700 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-color duration-200"
                  >
                    <ArrowUpRight />
                    <span className="">Live Website</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
