"use client";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";

export default function PostModal() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <div role="dialog" className={Style.dim}>
      <div className={Style.box}>
        포스트 모달
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
