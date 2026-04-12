"use client";

import { usePortfolioData } from "@/Context/dataContext";
import Image from "next/image";
import myPic from "../../public/images/myself/about.png";

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
  return (
    <div className="container mx-auto py-20 border-b border-gray-700 px-5">
      <p className="text-center mt-5 -mb-2.5 text-gray-400 font-light">
        A LITTLE
      </p>
      <h2 className="text-4xl font-bold md:text-7xl lg:text-9xl text-center mb-20">
        ABOUT ME
      </h2>
      <div className="flex justify-center items-center flex-col gap-10 md:flex-row-reverse lg:flex-row-reverse">
        <div className="hover-3d flex-1">
          {/* content */}
          <figure className="rounded-2xl">
            <Image
            className="rounded-2xl"
              width={400}
              height={400}
              src={myPic}
              alt="My Picture of working"
            ></Image>
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="flex-1">
          <h2 className="text-gray-600 text-3xl md:text-5xl lg:text-7 font-extrabold">
            FULL-STACK
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-7 font-extrabold">
            DEVELOPER.
          </h2>
          <p className="text-gray-400 my-10">{bio}</p>
        </div>
      </div>

      <div className="mt-30 flex justify-center items-center">
        <div className="flex justify-center items-center uppercase flex-wrap gap-8">
          <div className="border-none text-center flex-1">
            <div className="stat-value"> {projectsCompleted} </div>
            <div className="stat-title">Total Projects</div>
          </div>

          <div className="border-none text-center flex-1">
            <div className="stat-value"> {technologiesLearned} </div>
            <div className="stat-title"> Total Technologies Learned </div>
          </div>

          <div className="border-none text-center flex-1">
            <div className="stat-value">{githubRepositories}</div>
            <div className="stat-title">Total Repositories</div>
          </div>

          <div className="border-none text-center flex-1">
            <div className="stat-value">{totalContributes}</div>
            <div className="stat-title">Total Contributes</div>
          </div>

          <div className="border-none text-center flex-1">
            <div className="stat-value">{daysOfCoding}</div>
            <div className="stat-title">Total Days of Coding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
