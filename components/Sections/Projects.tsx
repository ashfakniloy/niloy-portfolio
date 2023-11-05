import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { GithubButton } from "../icons/github-button";
import { ArrowUpRight } from "../icons/arrow-up-right";

function Projects() {
  return (
    <section id="projects" className="py-[80px] lg:py-[100px]">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-montserrat font-bold tracking-wide">
          Projects
        </h2>
        <p className="mt-5 max-w-[500px]">
          Explore a selection of my projects, where dynamic web applications and
          elegantly designed user interfaces take center stage. Each project
          reflects my dedication to crafting seamless and captivating digital
          experiences.
        </p>
      </div>

      <div className="mt-16 space-y-28 lg:space-y-[120px]">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-full flex flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-5 lg:gap-10"
          >
            <Link
              href={project.site}
              target="_blank"
              className="w-full lg:w-auto"
            >
              <div className="relative w-full lg:w-[480px] max-w-[425px] lg:max-w-[480px] h-[179px] lg:h-[237px] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  placeholder="blur"
                  blurDataURL={project.blurImage}
                  sizes="(max-width: 640px) 425px, 100vw"
                  className="object-cover object-top hover:object-bottom"
                  style={{
                    transitionProperty: "all",
                    transitionTimingFunction: "linear",
                    transitionDuration: `${project.scrollDuration}s`,
                  }} //dynamic arbitrary values doesn't work in tailwind, thats why using inline style
                />
              </div>
            </Link>

            <div className="lg:w-full">
              <div className="space-y-2">
                <h3 className="text-2xl font-montserrat font-bold">
                  {project.name}
                </h3>
                <div>{project.description}</div>
                <p>
                  <span className="font-bold mr-2">Tech Stack:</span>
                  {project.technologies.map((technology, i) => (
                    <span key={i}>
                      {technology}
                      {i !== project.technologies.length - 1 && ","}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-5 font-montserrat">
                <Link href={project.repo} target="_blank">
                  <button
                    type="button"
                    aria-label="source code"
                    className="font-semibold border border-gray-300 dark:border-gray-700 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-color duration-200"
                  >
                    <GithubButton width={22} height={22} />
                    <span>Code</span>
                  </button>
                </Link>

                <Link href={project.site} target="_blank">
                  <button
                    type="button"
                    aria-label="live website"
                    className="font-semibold border border-gray-300 dark:border-gray-700 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-color duration-200"
                  >
                    <ArrowUpRight />
                    <span>Live Website</span>
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
