"use client";

import { useContext } from "react";
import style from "./style.module.css";
import { TabContext } from "./TabProvider";

const Tab = () => {
  const { tab, setTab } = useContext(TabContext);

  return (
    <div className={style.tabContainer}>
      <h2 className={style.tabTitle}>홈</h2>
      <ul className={style.tabList}>
        <li className={style.tabItem}>
          <button
            type="button"
            className={style.tabBtn}
            onClick={() => {
              setTab("fol");
            }}
          >
            추천
          </button>
          {tab === "fol" && <div className={style.tabIndi} />}
        </li>
        <li className={style.tabItem}>
          <button
            type="button"
            className={style.tabBtn}
            onClick={() => {
              setTab("rec");
            }}
          >
            팔로우중
          </button>
          {tab === "rec" && <div className={style.tabIndi} />}
        </li>
      </ul>
    </div>
  );
};

export default Tab;
