import Link from "next/link";
import style from "./layout.module.css";

import NavMenu from "../components/NavMenu/NavMenu";
import LogoutBtn from "../components/LogoutBtn/LogoutBtn";
import Trend from "../components/Trend/Trend";
import Follower from "../components/Follower/Follower";

export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.layoutContainer}>
      <header className={style.header}></header>
      <div className={style.layoutWrap}>
        <div className={style.layoutLeft}>
          <nav>
            <ul>
              <NavMenu />
            </ul>
          </nav>
          <br />
          <br />
          <Link href="/compose/tweet">게시하기</Link>
          <br />
          <LogoutBtn />
        </div>
        <div className={style.content}>{children}</div>
        <div className={style.layoutRight}>
          <input type="text" placeholder="검색" className="input" />
          <Trend />
          <Follower />
        </div>
      </div>
    </div>
  );
}
