"use client";

import Link from "next/link";

import style from "./style.module.css";

const Trend = () => {
  return (
    <div>
      <h2 className={style.trendTitle}>나를 위한 트렌트</h2>
      <ul className={style.trend}>
        <li className={style.trendItem}>
          <Link href="">
            <p className={style.itemTitle}>실시간트렌드</p>
            <h4 className={style.itemName}>네임</h4>
            <p className={style.itemPost}>포스트수 post</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Trend;
