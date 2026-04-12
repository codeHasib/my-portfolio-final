"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider, useTheme } from "@/Context/ThemeContext";
import ResumeButton from "./ResumeButton";
import GlitchText from "./GlitchText";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const links = (
    <>
      <li
        className={
          pathName === "/"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/"}> HOME </Link>
      </li>
      <li
        className={
          pathName === "/skills"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/skills"}> SKILLS </Link>
      </li>
      <li
        className={
          pathName === "/projects"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/projects"}> PROJECTS </Link>
      </li>
      <li
        className={
          pathName === "/about"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/about"}> ABOUT </Link>
      </li>
      <li
        className={
          pathName === "/blogs"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/blogs"}> BLOGS </Link>
      </li>
    </>
  );

  const { theme } = useTheme();

  return (
    <div className="navbar py-3 px-4 md:px-6 lg:px-10 border-b border-gray-500 mb-10 md:justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className={
              theme === "dark"
                ? "menu menu-sm dropdown-content rounded-box border bg-black gap-2 z-1 mt-3 w-52 p-2 shadow"
                : "menu menu-sm dropdown-content rounded-box border bg-white gap-2 z-1 mt-3 w-52 p-2 shadow"
            }
          >
            {links}
          </ul>
        </div>
        <div className="lg:flex hidden">
          <Link href={"/"}>
            <span className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-500">
              M
            </span>
            <span className="text-3xl md:text-5xl lg:text-5xl font-bold">
              H
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <Link href={"/"}>
          <span className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-500">
            M
          </span>
          <span className="text-3xl md:text-5xl lg:text-5xl font-bold">
            H
            </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 border gap-3 border-gray-300 rounded-full">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        <ResumeButton></ResumeButton>
      </div>
    </div>
  );
};

export default NavBar;
