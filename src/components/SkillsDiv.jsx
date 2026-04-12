import { useTheme } from "@/Context/ThemeContext";
import ReactSvg from "./ReactSvg";
import { useState } from "react";

const SkillsDiv = ({ name, icon }) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-3 rounded-full border border-gray-500 transition-all duration-200 ease-in-out hover:scale-115 hover:bg-[#ffffff52] flex justify-center items-center gap-3 ${theme === "dark" ? "text-gray-300" : "text-gray-800"} hover:text-white hover:border-white hover:shadow-sm bg-[#ffffff00]`}
    >
      <p>{name}</p>
      <div className="h-5 text-gray-600">
        <ReactSvg size={20} src={icon} isHovered={hovered}></ReactSvg>
      </div>
    </div>
  );
};

export default SkillsDiv;
