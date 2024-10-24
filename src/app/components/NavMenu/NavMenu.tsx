"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { Fragment } from "react";
import style from "./style.module.css";

//useSelectedLayoutSegment - layout.tsx 기준으로 있는 폴더 path들을 알려준다
//useSelectedLayoutSegments - layout.tsx 기준으로 있는 폴더 하위 path까지 알려준다 - ["compose", "tweet"]

const my = {
  id: "아이디임",
};

const NavMenu = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <Fragment>
      <li className={segment === "home" ? style.navLiOn : style.navLi}>
        <Link href="/home">홈</Link>
      </li>
      <li className={segment === "explore" ? style.navLiOn : style.navLi}>
        <Link href="/explore">탐색하기</Link>
      </li>
      <li className={segment === "messges" ? style.navLiOn : style.navLi}>
        <Link href="/messges">쪽지</Link>
      </li>
      {my.id && (
        <li className={segment === "propfile" ? style.navLiOn : style.navLi}>
          <Link href="">프로필</Link>
        </li>
      )}
    </Fragment>
  );
};

export default NavMenu;
