import { useTheme } from "@/Context/ThemeContext";
import ReactSvg from "./ReactSvg";
import { useState } from "react";
import Link from "next/link";

const SkillsDiv = ({ name, icon, link }) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  return (
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`p-3 rounded-full border border-gray-500 transition-all duration-200 ease-in-out hover:scale-115 ${theme === "dark" ? "hover:bg-[#ffffff52]" : "hover:bg-[#f9f7f78a]"} ${theme === "dark" ? "hover:text-white" : "hover:text-black"} flex justify-center items-center gap-3 ${theme === "dark" ? "text-gray-300" : "text-gray-800"} ${theme === "dark" ? "hover:border-white" : "hover:border-black"} hover:shadow-sm bg-[#ffffff00]`}
      >
        <p>{name}</p>
        <div className="h-5 text-gray-600">
          <ReactSvg size={20} src={icon} isHovered={hovered}></ReactSvg>
        </div>
      </div>
    </Link>
  );
};

export default SkillsDiv;
