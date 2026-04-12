"use client";

import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import GitHubIcon from "../../public/images/link/github.png";
import LiveIcon from "../../public/images/link/live.png";
import { useTheme } from "@/Context/ThemeContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ProjectDetails = ({ currentProject }) => {
  const {
    id,
    title,
    technologies,
    image,
    liveLink,
    repoLink,
    description,
    category,
  } = currentProject;
  const { theme } = useTheme();
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex flex-col gap-5 justify-start items-center lg:flex-row md:flex-row min-h-[70vh] px-5 uppercase pb-5"
    >
      <motion.div
        variants={itemVariants}
        className="flex-1"
      >
        <Image className="rounded-3xl" height={500} width={500} src={image} alt={title}></Image>
      </motion.div>
      <div className="flex-1 space-y-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-8xl font-bold"
        >
          {title}
        </motion.h2>
        <motion.p variants={itemVariants} className="font-light text-gray-400">
          {description}
        </motion.p>
        <motion.p variants={itemVariants} className="font-bold text-center">
          TECHNOLOGIES
        </motion.p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {technologies.map((item, ind) => (
            <motion.div
              variants={itemVariants}
              key={ind}
              className={`py-2 px-5 text-[12px] rounded-full border border-gray-500 transition-all duration-200 ease-in-out hover:scale-115 ${theme === "dark" ? "hover:bg-[#ffffff52]" : "hover:bg-[#f9f7f78a]"} ${theme === "dark" ? "hover:text-white" : "hover:text-black"} flex justify-center items-center ${theme === "dark" ? "text-gray-300" : "text-gray-800"} ${theme === "dark" ? "hover:border-white" : "hover:border-black"} hover:shadow-sm bg-[#ffffff00]`}
            >
              {" "}
              {item}{" "}
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          <p>Category: {"  "}</p>
          <span className="badge">{category}</span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-4"
        >
          <ProjectLinks
            icon={LiveIcon}
            text={"demo"}
            link={liveLink}
          ></ProjectLinks>
          <ProjectLinks
            icon={GitHubIcon}
            text={"repo link"}
            link={repoLink}
          ></ProjectLinks>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center">
          <button
            className={`btn  ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} font-bold py-3 px-5 rounded-full`}
            onClick={() => router.back()}
          >
            GO BACK
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
