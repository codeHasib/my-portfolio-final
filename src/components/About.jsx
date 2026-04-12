"use client";

import { usePortfolioData } from "@/Context/dataContext";
import Image from "next/image";
import myPic from "../../public/images/myself/about.png";
import { motion } from "framer-motion"; 
import GlitchTextNum from "./GlitchTextNum";

const About = () => {
  const { personalData } = usePortfolioData();
  const personalInfo = personalData.personalInfo;
  const { bio } = personalInfo;
  const stats = personalData.statistics;
  const {
    projectsCompleted,
    technologiesLearned,
    githubRepositories,
    totalContributes,
    daysOfCoding,
  } = stats;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const popVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const glitchEffect = {
    visible: {
      x: [0, -2, 2, -1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 3, 
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="container mx-auto py-20 border-b border-gray-700 px-5"
    >
      <motion.p
        variants={popVariant}
        className="text-center mt-5 -mb-2.5 text-gray-400 font-light"
      >
        A LITTLE
      </motion.p>
      <motion.h2
        variants={popVariant}
        className="text-4xl font-bold md:text-7xl lg:text-9xl text-center mb-20"
      >
        ABOUT ME
      </motion.h2>

      <div className="flex justify-center items-center flex-col gap-10 md:flex-row-reverse lg:flex-row-reverse">
        <motion.div variants={popVariant} className="hover-3d flex-1">
          <figure className="rounded-2xl">
            <Image
              className="rounded-2xl"
              width={400}
              height={400}
              src={myPic}
              alt="My Picture of working"
            ></Image>
          </figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>

        <motion.div variants={popVariant} className="flex-1">
          <h2 className="text-gray-600 text-3xl md:text-5xl lg:text-7 font-extrabold">
            FULL-STACK
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-7 font-extrabold">
            DEVELOPER.
          </h2>
          <p className="text-gray-400 my-10">{bio}</p>
        </motion.div>
      </div>

      <motion.div
        variants={popVariant}
        className="mt-30 flex justify-center items-center"
      >
        <div className="flex justify-center items-center uppercase flex-wrap gap-8">
          {[
            { label: "Total Projects", value: projectsCompleted },
            { label: "Total Technologies Learned", value: technologiesLearned },
            { label: "Total Repositories", value: githubRepositories },
            { label: "Total Contributes", value: totalContributes },
            { label: "Total Days of Coding", value: daysOfCoding },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="border-none text-center flex-1"
            >
              <div className="stat-value">
                {<GlitchTextNum text={stat.value}></GlitchTextNum>}{" "}
              </div>
              <div className="stat-title whitespace-nowrap">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
