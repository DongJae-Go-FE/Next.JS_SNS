"use client";

import { useState, createContext, ReactNode } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});

const TabProvider = ({ children }: { children: ReactNode }) => {
  const [tab, setTab] = useState("fol");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
