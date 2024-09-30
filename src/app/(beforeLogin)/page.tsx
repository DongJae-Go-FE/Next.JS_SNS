import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

//(url)로 폴더를 만들면 url에 경로가 안 보인다
//layout.tsx 리랜더링이 발생을 안하고 template.tsx는 리랜더링 발생 이 둘은 공존 불가
//template.tsx - 구글 애널리틱스 달 때 추천(새로 마운트 하니깐)
