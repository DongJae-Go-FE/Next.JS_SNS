"use client";

import { useState, createContext, ReactNode } from "react";

export const ExTabContext = createContext({
  tab: "hot",
  setTab: (value: "hot" | "fol") => {},
});

const ExTabProvider = ({ children }: { children: ReactNode }) => {
  const [tab, setTab] = useState("hot");

  return (
    <ExTabContext.Provider value={{ tab, setTab }}>
      {children}
    </ExTabContext.Provider>
  );
};

export default ExTabProvider;
