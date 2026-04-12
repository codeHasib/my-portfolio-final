"use client";

import { usePortfolioData } from "@/Context/dataContext";
import SkillsDiv from "./SkillsDiv";
import { motion } from "framer-motion"; // Added Framer Motion

const Skills = () => {
  const { skillsData } = usePortfolioData();
  const skills = skillsData.skills;
  const frontend = skills.frontend;
  const backend = skills.backend;
  const tools = skills.tools;

  const popOut = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="border-b border-gray-600">
      <div className="container mx-auto px-5 my-25 pb-15 uppercase">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popOut}
          className="text-3xl md:text-7xl lg:text-9xl font-extrabold text-center my-8"
        >
          SKILLS
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={popOut}
          className="mb-8"
        >
          {
            <>
              <p className="pb-5 border-b border-gray-500 mb-5 font-bold text-gray-500 text-[12px] tracking-widest">
                FRONTEND
              </p>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                {frontend.map((item, ind) => (
                  <SkillsDiv
                    key={ind}
                    name={item.name}
                    icon={item.icon}
                    link={item.link}
                  ></SkillsDiv>
                ))}
              </div>
            </>
          }
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={popOut}
          className="mb-8"
        >
          {
            <>
              <p className="pb-5 border-b border-gray-500 mb-5 font-bold text-gray-500 text-[12px] tracking-widest">
                BACKEND
              </p>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                {backend.map((item, ind) => (
                  <SkillsDiv
                    key={ind}
                    name={item.name}
                    icon={item.icon}
                    link={item.link}
                  ></SkillsDiv>
                ))}
              </div>
            </>
          }
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={popOut}
          className="mb-8"
        >
          {
            <>
              <p className="pb-5 border-b border-gray-500 mb-5 text-[12px] font-bold text-gray-500 tracking-widest">
                DEVS & TOOLS
              </p>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                {tools.map((item, ind) => (
                  <SkillsDiv
                    key={ind}
                    name={item.name}
                    icon={item.icon}
                    link={item.link}
                  ></SkillsDiv>
                ))}
              </div>
            </>
          }
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;