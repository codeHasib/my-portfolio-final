"use client";

import { usePortfolioData } from "@/Context/dataContext";
import { useParams } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";

const ProjectDetailsPage = () => {
  const { skillsData } = usePortfolioData();
  const { id } = useParams();
  const projects = skillsData.projects;
  const currentProject = projects.find((item) => item.id == id);
  return (
    <div>
      <ProjectDetails currentProject={currentProject}></ProjectDetails>
    </div>
  );
};

export default ProjectDetailsPage;
