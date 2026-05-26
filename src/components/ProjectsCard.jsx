"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectLinks from "./ProjectLinks";
import GitHubIcon from "../../public/images/link/github.png";
import LiveIcon from "../../public/images/link/live.png";
import { useTheme } from "@/Context/ThemeContext";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative overflow-hidden rounded-3xl border border-[#8080802b] transition-all duration-300 p-6 mb-8 ${
        theme === "dark"
          ? "bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/60"
          : "bg-gray-50 hover:bg-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Project Image Section */}
        <div className="relative w-full lg:w-2/5 overflow-hidden rounded-2xl aspect-video">
          <Link href={`/projects/${id}`}>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Project Content Section */}
        <div className="flex-1 w-full space-y-4">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`text-[11px] font-bold px-4 py-1.5 rounded-full border border-gray-500/30 uppercase ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            {repoLink && (
              <ProjectLinks icon={GitHubIcon} text="Repo" link={repoLink} />
            )}
            <ProjectLinks icon={LiveIcon} text="Live" link={liveLink} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
