"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useContext } from "react";
import style from "./style.module.css";
import { ExTabContext } from "./ExTabProvider";

const ExTab = () => {
  const { replace } = useRouter();
  const searchParms = useSearchParams();

  const { tab, setTab } = useContext(ExTabContext);

  return (
    <div className={style.tabContainer}>
      <ul className={style.tabList}>
        <li className={style.tabItem}>
          <button
            type="button"
            className={style.tabBtn}
            onClick={() => {
              setTab("hot");
              replace(`/search?q=${searchParms.get(`q`)}`);
            }}
          >
            추천
          </button>
          {tab === "hot" && <div className={style.tabIndi} />}
        </li>
        <li className={style.tabItem}>
          <button
            type="button"
            className={style.tabBtn}
            onClick={() => {
              setTab("fol");
              replace(`/search?q=${searchParms.get("q") || ""}&f-live`);
            }}
          >
            팔로우중
          </button>
          {tab === "fol" && <div className={style.tabIndi} />}
        </li>
      </ul>
    </div>
  );
};

export default ExTab;
