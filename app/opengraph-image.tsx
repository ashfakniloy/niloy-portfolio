import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "niloy portfolio";
export const size = {
  width: 1200,
  height: 630,
};

// export const contentType = "image/png";
export const contentType = "image/jpg";

const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "https://niloy.vercel.app"
    : "http://localhost:3000";

// const BASE_URL = "http://localhost:3000";

const skills = [
  {
    name: "react",
    src: `${BASE_URL}/images/opengraph/reactjs.svg`,
    width: 67,
    height: 60,
  },
  {
    name: "next js",
    src: `${BASE_URL}/images/opengraph/nextjs.svg`,
    width: 60,
    height: 60,
  },
  {
    name: "typescript",
    src: `${BASE_URL}/images/opengraph/typescript.svg`,
    width: 60,
    height: 60,
  },
  {
    name: "tailwind css",
    src: `${BASE_URL}/images/opengraph/tailwind.svg`,
    width: 60,
    height: 45,
  },
];

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw={`bg-[#0D1117] flex relative items-center justify-center`}>
        <img
          src={`${BASE_URL}/images/opengraph/opengraph-bg.jpg`}
          alt="background"
          tw="opacity-50"
        />

        <div tw="absolute flex justify-center items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              tw="flex justify-center items-center relative h-[130px] w-[130px] mx-10 bg-white/80 rounded-full overflow-hidden p-2"
            >
              <img
                src={skill.src}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
