"use client";

import { useRouter } from "next/navigation";

import Style from "./style.module.css";

export default function SignUpModal() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  return (
    <div role="dialog" className={Style.dim}>
      <div className={Style.box}>
        회원가입 모달
        <br />
        <br />
        <button onClick={onClickClose}>뒤로가기</button>
      </div>
    </div>
  );
}
