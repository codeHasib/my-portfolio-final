"use client";

import { usePortfolioData } from "@/Context/dataContext";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { skillsData } = usePortfolioData();
  const projects = skillsData.projects;
  return (
    <div>
      <h2 className="text-3xl md:text-7xl lg:text-9xl font-extrabold text-center my-8">
        PROJECTS
      </h2>
      {projects.map((item, ind) => (
        <ProjectsCard
          key={ind}
          id={item.id}
          title={item.title}
          image={item.image}
          technologies={item.technologies}
          liveLink={item.liveLink}
          repoLink={item.repoLink}
        ></ProjectsCard>
      ))}
    </div>
  );
};

export default Projects;
