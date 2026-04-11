"use client";

import { createContext, useContext } from "react";
import personalInfo from "@/data/personalInfo.json";
import portfolioData from "@/data/portfolioData.json";

const DataContext = createContext(undefined);

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
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("usePortfolioData must be used within a DataProvider");
  }
  return context;
};
