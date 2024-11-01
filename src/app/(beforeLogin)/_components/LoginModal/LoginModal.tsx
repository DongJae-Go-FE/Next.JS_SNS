"use client";

import Style from "./style.module.css";
import BackButton from "@/app/components/BackButton/BackButton";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const result = await signIn("credentials", {
        username: id,
        password: password,
        redirect: false,
      });
      console.log("결과::", result);
      router.replace("/home");
    } catch (err) {
      console.error("에러", err);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div role="dialog" className={Style.dim}>
      <div className={Style.box}>
        로그인 모달
        <br />
        <form onSubmit={onSubmit}>
          <label htmlFor="id">아이디</label>
          <br />
          <input value={id} id="id" onChange={onChangeId} type="text" />
          <br />
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            value={password}
            onChange={onChangePassword}
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세여"
          />
          <button type="submit">로그인하기</button>
        </form>
        <br />
        <BackButton />
      </div>
    </div>
  );
}

// 이거 왜 남겨두나면 새로고침용
