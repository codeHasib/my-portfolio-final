"use client";

import { ReactSVG } from "react-svg";
import { useTheme } from "@/Context/ThemeContext";

const ReactSvg = ({
  src,
  size = 40,
  defaultColor = "#6b7280",
  darkHoverColor = "#ffffff",
  lightHoverColor = "#000000",
  className = "",
  isHovered = false, // 👈 controlled by parent
}) => {
  const { theme } = useTheme();

  const iconColor = isHovered
    ? theme === "dark"
      ? darkHoverColor
      : lightHoverColor
    : defaultColor;

  return (
    <ReactSVG
      key={`${theme}-${isHovered}`}
      src={src}
      className={className}
      beforeInjection={(svg) => {
        svg.setAttribute("fill", iconColor);
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.querySelectorAll("path, circle, rect, polygon").forEach((el) => {
          el.setAttribute("fill", iconColor);
        });
      }}
    />
  );
};

export default ReactSvg;
