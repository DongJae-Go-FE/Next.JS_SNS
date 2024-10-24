"use client";

import Link from "next/link";

import style from "./style.module.css";

const Follower = () => {
  return (
    <div>
      <ul>
        <li className={style.followerLi}>
          <Link href="">
            <p>이름</p>
            <p>아이디</p>
          </Link>

          <button>팔로우</button>
        </li>
      </ul>
    </div>
  );
};

export default Follower;
