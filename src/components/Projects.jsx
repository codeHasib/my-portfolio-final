"use client";

import { usePortfolioData } from "@/Context/dataContext";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion"; // Added Framer Motion

const Projects = () => {
  const { skillsData } = usePortfolioData();
  const projects = skillsData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const popVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 
        variants={popVariant}
        className="text-3xl md:text-7xl lg:text-9xl font-extrabold text-center mt-8 mb-15"
      >
        PROJECTS
      </motion.h2>
      
      <div className="flex flex-col gap-8"> 
        {projects.map((item, ind) => (
          <motion.div key={ind} variants={popVariant}>
            <ProjectsCard
              id={item.id}
              title={item.title}
              image={item.image}
              technologies={item.technologies}
              liveLink={item.liveLink}
              repoLink={item.repoLink}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;