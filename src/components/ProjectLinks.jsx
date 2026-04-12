"use client";

import { useTheme } from "@/Context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectLinks = ({ text, icon, link = "" }) => {
  const { theme } = useTheme();
  return (
    <Link href={link} target="_blank">
      <motion.div
        whileHover="hover"
        initial="rest"
        className={`flex items-center cursor-pointer  text-gray-500 rounded-full p-3 w-fit transition-all ease-in-out duration-200 border border-gray-500 ${theme === "dark" ? "hover:text-white" : "hover:text-black"} ${theme === "dark" ? "hover:border-white" : "hover:border-black"}`}
      >
        {/* Icon Container */}
        <div className="text-xl">
          <Image
            height={25}
            width={25}
            src={icon}
            alt={text}
            className={`transition-all duration-300 ${
              theme === "dark" ? "brightness-0 invert" : "brightness-0"
            }`}
          />
        </div>

        {/* Expanding Text */}
        <motion.span
          variants={{
            rest: { width: 0, opacity: 0, marginLeft: 0 },
            hover: {
              width: "auto",
              opacity: 1,
              marginLeft: 12, // Gap between icon and text
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
          className="overflow-hidden whitespace-nowrap font-medium"
        >
          {text}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default ProjectLinks;
