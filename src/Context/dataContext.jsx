"use client";

import { createContext, useContext } from "react";
import personalInfo from "@/data/personalInfo.json";
import portfolioData from "@/data/portfolioData.json";

const DataContext = createContext({
  personalData: personalInfo,
  skillsData: portfolioData,
});

export const DataProvider = ({ children }) => {
  const personalData = personalInfo;
  const skillsData = portfolioData;

  return (
    <DataContext.Provider value={{ personalData, skillsData }}>
      {children}
    </DataContext.Provider>
  );
};

export const usePortfolioData = () => {
  return useContext(DataContext);
};