import { ImageResponse } from "next/server";

// export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div tw="text-[24px] bg-black w-full h-full flex items-center justify-center text-white font-bold rounded-md">
        N
      </div>
    ),
    { ...size }
  );
}
