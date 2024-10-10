import Link from "next/link";

import Style from "./style.module.css";

export default function page() {
  return (
    <div role="dialog" className={Style.dim}>
      <div className={Style.box}>
        회원가입 모달
        <br />
        <br />
        <Link href="/">뒤로가기</Link>
      </div>
    </div>
  );
}
