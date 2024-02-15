// import TechPost from "@/public/images/projects/techpost.webp";
// import ShannonIt from "@/public/images/projects/shannon-it.webp";
// import Igniteweb from "@/public/images/projects/igniteweb.webp";
// import Safkon from "@/public/images/projects/safkon.webp";
// import WebSchool from "@/public/images/projects/web-school.webp";
// import Topclientoffer from "@/public/images/projects/topclientoffer.webp";
// import AHMBlueHorizons from "@/public/images/projects/ahm-blue-horizons.webp";
// import GithubSearch from "@/public/images/projects/github-search.webp";

export const projects = [
  {
    name: "Contentboard",
    image: "/images/projects/contentboard.webp",
    blurImage: "/images/blur/contentboard-blur.webp",
    description: (
      <p>
        A fullstack blog and contact management dashboard for websites. Website
        owners can write blog articles and manage contact section of their
        websites.
      </p>
    ),
    technologies: [
      "React",
      "Next.js (app router)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "Cloudinary",
      "NextAuth",
      "Tiptap",
      "React Hook Form",
      "Zod",
    ],
    repo: "https://github.com/ashfakniloy/contentboard",
    site: "https://contentboard.vercel.app",
    scrollDuration: 0.3,
  },
  {
    name: "Techpost",
    // image: TechPost,
    image: "/images/projects/techpost.webp",
    blurImage: "/images/blur/techpost-blur.webp",
    description: (
      <p>
        A fullstack multi-author tech blog website with an admin dashboard using
        React Server Components in Next.js app router. Users can register and
        write blog articles with rich text editor, upload images, like, comment
        and replies to comments.
      </p>
    ),
    technologies: [
      "React",
      "Next.js (app router)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "NextAuth",
      "Tiptap",
      "React Hook Form",
      "Zod",
    ],
    repo: "https://github.com/ashfakniloy/techpost",
    site: "https://techpost.vercel.app",
    scrollDuration: 4,
  },
  {
    name: "Shannon IT",
    // image: ShannonIt,
    image: "/images/projects/shannon-it.webp",
    blurImage: "/images/blur/shannonit-blur.webp",
    description: (
      <p>An IT agency website with animations to showcase their services.</p>
    ),
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Formik",
    ],
    repo: "https://github.com/ashfakniloy/shannon-it",
    // site: "https://www.shannonit.org",
    site: "https://shannon-it.vercel.app",
    scrollDuration: 10,
  },
  {
    name: "Ignite Web",
    // image: Igniteweb,
    image: "/images/projects/igniteweb.webp",
    blurImage: "/images/blur/igniteweb-blur.webp",
    description: (
      <p>A web design and development agency website with smooth animations.</p>
    ),
    technologies: [
      "React",
      "Next.js (app router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    repo: "https://github.com/ashfakniloy/igniteweb",
    site: "https://igniteweb.vercel.app",
    scrollDuration: 10,
  },
  {
    name: "Safkon Industries",
    // image: Safkon,
    image: "/images/projects/safkon.webp",
    blurImage: "/images/blur/safkon-blur.webp",
    description: (
      <p>A landing page website for an industry to showcase their services.</p>
    ),
    technologies: ["React", "Next.js", "Tailwind CSS", "Formik"],
    repo: "https://github.com/ashfakniloy/safkon-frontend",
    site: "https://safkon.vercel.app",
    scrollDuration: 4,
  },
  {
    name: "Web-School ERP",
    // image: WebSchool,
    image: "/images/projects/web-school.webp",
    blurImage: "/images/blur/webschool-blur.webp",
    description: <p>A landing page website for a school management system.</p>,
    technologies: ["React", "Next.js", "Tailwind CSS", "Formik"],
    repo: "https://github.com/ashfakniloy/school-management-website",
    site: "https://web-school-erp.vercel.app",
    scrollDuration: 8,
  },
  {
    name: "Top Client Offer",
    // image: Topclientoffer,
    image: "/images/projects/topclientoffer.webp",
    blurImage: "/images/blur/topclient-blur.webp",
    description: <p>A landing page website for a CPA marketing agency.</p>,
    technologies: ["React", "Next.js", "Tailwind CSS", "Formik"],
    repo: "https://github.com/ashfakniloy/topclientoffer",
    site: "https://topclientoffer.vercel.app",
    scrollDuration: 7,
  },
  {
    name: "AHM Blue Horizons",
    // image: AHMBlueHorizons,
    image: "/images/projects/ahm-blue-horizons.webp",
    blurImage: "/images/blur/ahm-blur.webp",
    description: <p>A landing page website for an air travel agency.</p>,
    technologies: ["React", "Next.js", "Tailwind CSS", "Formik"],
    repo: "https://github.com/ashfakniloy/ahm-blue-horizons",
    site: "https://ahm-blue-horizons.vercel.app",
    scrollDuration: 7,
  },
  {
    name: "Github Search",
    // image: GithubSearch,
    image: "/images/projects/github-search.webp",
    blurImage: "/images/blur/githubsearch-blur.webp",
    description: (
      <p>
        A simple react app for searching github profiles and see profile
        details. The api is provided by github.
      </p>
    ),
    technologies: ["React", "Redux Toolkit", "Axios", "Tailwind CSS"],
    repo: "https://github.com/ashfakniloy/github-search-app",
    site: "https://github-search-app-alpha.vercel.app",
    scrollDuration: 2,
  },
];
