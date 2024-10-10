"use client";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <div role="dialog" className={Style.dim}>
      <div className={Style.box}>
        로그인 모달
        <br />
        <label htmlFor="id">아이디</label>
        <br />
        <input type="text" id="id" placeholder="아이디를 입력하세여" />
        <br />
        <label htmlFor="pw">비밀번호</label>
        <br />
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="비밀번호를 입력하세여"
        />
        <br />
        <button onClick={onClickClose}>뒤로가기</button>
      </div>
    </div>
  );
}

// 이거 왜 남겨두나면 새로고침용
