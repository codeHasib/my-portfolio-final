"use client";

import { usePortfolioData } from "@/Context/dataContext";
import SkillsDiv from "./SkillsDiv";

const Skills = () => {
  const { skillsData } = usePortfolioData();
  const skills = skillsData.skills;
  const frontend = skills.frontend;
  const backend = skills.backend;
  const tools = skills.tools;
  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl md:text-7xl lg:text-9xl font-extrabold text-center my-8">
        SKILLS
      </h2>
      <div className="mb-8">
        {
          <>
            <p className="pb-5 border-b border-gray-500 mb-5">FRONTEND</p>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {frontend.map((item, ind) => (
                <SkillsDiv
                  key={ind}
                  name={item.name}
                  icon={item.icon}
                ></SkillsDiv>
              ))}
            </div>
          </>
        }
      </div>
      <div className="mb-8">
        {
          <>
            <p className="pb-5 border-b border-gray-500 mb-5">BACKEND</p>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {backend.map((item, ind) => (
                <SkillsDiv
                  key={ind}
                  name={item.name}
                  icon={item.icon}
                ></SkillsDiv>
              ))}
            </div>
          </>
        }
      </div>
      <div className="mb-8">
        {
          <>
            <p className="pb-5 border-b border-gray-500 mb-5">DEVS & TOOLS</p>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {tools.map((item, ind) => (
                <SkillsDiv
                  key={ind}
                  name={item.name}
                  icon={item.icon}
                ></SkillsDiv>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Skills;
