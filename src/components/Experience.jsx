"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/Context/dataContext";

const TimelineSection = ({ title, data, isRoadmap = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-20 px-5 max-w-6xl mx-auto uppercase">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black mb-16 border-b border-gray-800 pb-4 text-center"
      >
        {title}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="absolute left-[15px] top-2 bottom-0 w-[2px] bg-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_11px)] bg-[size:100%_20px]" />
        </div>

        <div className="space-y-12">
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 bg-black ${
                    item.status === "Completed"
                      ? "border-green-500"
                      : "border-white"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "Completed"
                        ? "bg-green-500"
                        : "bg-white animate-pulse"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md scale-150" />
              </div>

              <div className="flex items-center gap-4 mb-2">
                {item.duration && (
                  <span className="text-xl md:text-2xl font-bold text-gray-400">
                    {item.duration}
                  </span>
                )}
                {item.status && (
                  <span
                    className={`py-1 px-4 border rounded-full text-[10px] font-bold tracking-widest ${
                      item.status === "Completed"
                        ? "border-green-900 text-green-500"
                        : "border-gray-600 text-gray-300"
                    }`}
                  >
                    {item.status}
                  </span>
                )}
              </div>

              <h3 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-none mb-3">
                {item.title}
              </h3>

              {item.institution && (
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-500 mb-3">
                  {item.institution}
                </p>
              )}

              {item.description && (
                <p className="max-w-2xl text-xs md:text-sm leading-relaxed text-gray-400 normal-case font-light">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Qualifications = () => {
  const { skillsData } = usePortfolioData();
  const { education, roadmap } = skillsData;
  const data = {
    education: education,
    roadmap: roadmap,
  };

  return (
    <section className="min-h-screen">
      <TimelineSection title="Education" data={data.education} />
      <TimelineSection title="Roadmap" data={data.roadmap} isRoadmap />
    </section>
  );
};

export default Qualifications;
