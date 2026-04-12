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
  isHovered = false,
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

        const svgWidth = parseFloat(svg.getAttribute("viewBox")?.split(" ")[2]) || 100;
        const svgHeight = parseFloat(svg.getAttribute("viewBox")?.split(" ")[3]) || 100;

        svg.querySelectorAll("rect").forEach((el) => {
          const w = parseFloat(el.getAttribute("width")) || 0;
          const h = parseFloat(el.getAttribute("height")) || 0;

          // if rect covers more than 80% of the svg it's a background — hide it
          // otherwise it's part of the logo — color it
          if (w >= svgWidth * 0.8 && h >= svgHeight * 0.8) {
            el.setAttribute("fill", "transparent");
          } else {
            el.setAttribute("fill", iconColor);
          }
        });

        svg.querySelectorAll("path, circle, polygon, text, ellipse").forEach((el) => {
          el.setAttribute("fill", iconColor);
        });
      }}
    />
  );
};

export default ReactSvg;