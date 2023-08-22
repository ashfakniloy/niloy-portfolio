"use client";

import { useState } from "react";
import Buttonhamburger from "./ButtonHamburger";
import ThemeButton from "./ThemeButton";
import { navLinks } from "./navLinks";
import { Link } from "react-scroll";
import LogoNiloy from "./LogoNiloy";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="sticky top-0 z-20 ">
      <div className="h-[60px] px-2 flex justify-between items-center backdrop-blur-md bg-gray-50/50 dark:bg-custom-gray/30 ">
        <div className="">
          <Link
            className="cursor-pointer"
            // activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={-105}
            offset={-60}
            duration={500}
            onClick={() => setToggle(false)}
          >
            <LogoNiloy />
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <ThemeButton />

          <Buttonhamburger toggle={toggle} setToggle={setToggle} />

          <nav className="hidden lg:block space-x-10">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.link}
                className="cursor-pointer text-[14px] font-semibold"
                activeClass="text-yellow-700 dark:text-yellow-300"
                to={navLink.link}
                spy={true}
                smooth={true}
                // offset={-105}
                offset={-80}
                duration={500}
              >
                {navLink.name}
              </Link>
            ))}
          </nav>
          {/* {navLinks.map((navLink, i) => (
          <Link
            key={navLink.link}
            href={navLink.link}
            className="text-sm font-semibold"
          >
            {navLink.name}
          </Link>
        ))} */}
        </div>
      </div>

      <div
        className={`lg:hidden absolute w-full backdrop-blur-md bg-gray-50/50 dark:bg-custom-gray/30 transition-[grid-template-rows] duration-300 ease-linear grid ${
          toggle ? "grid-rows-[1fr] " : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="py-2 flex flex-col gap-2">
            {navLinks.map((navLink, i) => (
              <Link
                key={navLink.link}
                className="cursor-pointer text font-semibold py-3 pl-10"
                activeClass="text-yellow-300 dark:text-yellow-300 bg-black/30 dark:bg-white/30 rounded-md"
                to={navLink.link}
                spy={true}
                smooth={true}
                // offset={-105}
                offset={-60}
                duration={500}
                onClick={() => setToggle(false)}
              >
                {navLink.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
