"use client";

import { usePortfolioData } from "@/Context/dataContext";

const SkillCard = () => {
  const { personalData } = usePortfolioData();
  console.log(personalData);
  return <div></div>;
};

export default SkillCard;
