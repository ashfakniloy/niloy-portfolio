import { Mr_Dafoe } from "next/font/google";

const mr_dafoe = Mr_Dafoe({ weight: "400", subsets: ["latin"] });

function LogoNiloy({ className }: { className?: string }) {
  return (
    <span
      className={`text-[40px] text-amber-600 dark:text-amber-500 select-none ${mr_dafoe.className} ${className},`}
    >
      niloy
    </span>
  );
}

export default LogoNiloy;
