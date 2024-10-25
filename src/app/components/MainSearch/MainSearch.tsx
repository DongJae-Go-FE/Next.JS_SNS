"use client";

import style from "./style.module.css";

type Props = {
  q?: string;
};

const MainSearch = ({ q }: Props) => {
  console.log(q);
  return (
    <form action="">
      <input type="text" placeholder="검색" className={style.input} />
    </form>
  );
};

export default MainSearch;
