"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    <div className="flex items-center w-full h-full justify-center">
      <div className="w-1/2">
        <Image src="" alt="로고" />
      </div>
      <div className="w-1/2">
        <h1>지금 일어나고 있는 일</h1>
        <p>지금 가입하세요</p>
        <div className="flex gap-x-2">
          <Link href="/i/flow/signup" className="inline-flex items-center h-9">
            회원가입
          </Link>
          <Link href="/login" className="inline-flex items-center h-9">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

//i/flow/login으로 리다이렉트

//push , replace 차이점
//push는 바로 뒤로가기
//replace 전전 뒤로가기
