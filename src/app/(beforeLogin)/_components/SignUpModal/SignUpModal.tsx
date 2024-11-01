"use client"

import BackButton from "@/app/components/BackButton/BackButton";
import onSubmit from "../../../../lib/signup";
import Style from "./style.module.css";
import { useFormState, useFormStatus } from "react-dom";

function showMessage(message: string) {
  if (message === "no_id") {
    return "아이디가 없어";
  }
  if (message === "no_name") {
    return "이름 없어";
  }
  if (message === "no_password") {
    return "비밀번호 없어";
  }
}

export default function SignUpModal() {
  const [state, formAction] = useFormState(onSubmit, { message: "" });
  const { pending } = useFormStatus();

  return (
    <div>
      <div role="dialog" className={Style.dim}>
        <div className={Style.box}>
          회원가입 모달
          <form action={formAction}>
            <label htmlFor="id">아이디</label>
            <br />
            <input
              type="text"
              id="id"
              name="id"
              className="border"
              required
              autoComplete="username"
            />
            <br />
            <br />
            <label htmlFor="password">비밀번호</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="border"
              autoComplete="current-password"
              required
            />
            <br />
            <br />
            <label htmlFor="name">이름</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="border"
              required
            />

            <br />
            <br />
            <div>{showMessage(state?.message || "")}</div>
            <button className="border px-5" type="submit" disabled={pending}>
              제출
            </button>
          </form>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
