"use client";

import { usePortfolioData } from "@/Context/dataContext";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const { skillsData } = usePortfolioData();
  const { id } = useParams();
  const projects = skillsData.projects;
  const currentProject = projects.find((item) => item.id == id);
  return <div>
    
  </div>;
};

export default ProjectDetails;
