import Image from "next/image";
import SkillsDiv from "./SkillsDiv";
import Link from "next/link";
import ProjectLinks from "./ProjectLinks";
import GitHubIcon from "../../public/images/link/github.png";
import LiveIcon from "../../public/images/link/live.png";
import { useTheme } from "@/Context/ThemeContext";

const ProjectsCard = ({
  id,
  title,
  technologies,
  image,
  liveLink,
  repoLink,
}) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center gap-5 border-b border-[#8080802b] mb-6 uppercase">
      <Link href={`/projects/${id}`}>
        <div className="rounded-3xl overflow-hidden transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-[#7f7f7f] hover:scale-105">
          <Image width={250} height={150} src={image} alt={title}></Image>
        </div>
      </Link>
      <div className="text-center my-4">
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold">
          {" "}
          {title}{" "}
        </h3>
      </div>
      <p className="font-bol">TECHNOLOGIES</p>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {technologies.map((item, ind) => (
          <div
            key={ind}
            className={`py-2 px-5 text-[12px] rounded-full border border-gray-500 transition-all duration-200 ease-in-out hover:scale-115 ${theme === "dark" ? "hover:bg-[#ffffff52]" : "hover:bg-[#f9f7f78a]"} ${theme === "dark" ? "hover:text-white" : "hover:text-black"} flex justify-center items-center ${theme === "dark" ? "text-gray-300" : "text-gray-800"} ${theme === "dark" ? "hover:border-white" : "hover:border-black"} hover:shadow-sm bg-[#ffffff00]`}
          >
            {" "}
            {item}{" "}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-wrap my-4 gap-4">
        <ProjectLinks
          icon={GitHubIcon}
          text={"repo link"}
          link={repoLink}
        ></ProjectLinks>
        <ProjectLinks
          icon={LiveIcon}
          text={"demo"}
          link={liveLink}
        ></ProjectLinks>
      </div>
    </div>
  );
};

export default ProjectsCard;
