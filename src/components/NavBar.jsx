"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider, useTheme } from "@/Context/ThemeContext";
import ResumeButton from "./ResumeButton";
import GlitchText from "./GlitchText";

const NavBar = () => {
  const pathName = usePathname();
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
          pathName === "/experience"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/experience"}> EXPERIENCE </Link>
      </li>
      <li
        className={
          pathName === "/connect"
            ? "border border-gray-500 rounded-full bg-[#ffffff2c]"
            : "transition-all duration-200 ease-in-out hover:border hover:border-gray-500 hover:rounded-full"
        }
      >
        <Link href={"/connect"}> CONNECT </Link>
      </li>
    </>
  );

  const { theme } = useTheme();

  return (
    <div className="navbar py-3 px-4 md:px-6 lg:px-10 border-b border-gray-500 mb-10 md:justify-between sticky top-0 left-0 z-50">
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
          <span className="text-3xl md:text-5xl lg:text-5xl font-bold">H</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 border gap-3 border-gray-300 rounded-full">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle></ThemeToggle>
        {/* <ResumeButton></ResumeButton> */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="h-7 w-7 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full border flex justify-center items-center ml-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 md:size-6 lg:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
        <dialog id="my_modal_4" className="modal font-bold uppercase">
          <div className="modal-box w-11/12 max-w-5xl">
            <p className="py-4">Are you sure you want to download my resume?</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn uppercase font-extrabold">Cancel</button>
                <button className="btn bg-white text-black font-extrabold">
                  {/* <ResumeButton></ResumeButton> */}
                  <a
                    href={"/Hasib_Premium_Resume.pdf"}
                    download={"/Hasib_Premium_Resume.pdf"}
                    title="Download Resume"
                    className="uppercase"
                  >
                    Download Resume
                  </a>
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default NavBar;
