import Image from "next/image";
import Link from "next/link";

import styles from "../page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src="" alt="로고" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <p>지금 가입하세요</p>
        <Link href="/i/flow/signup">회원가입</Link>
        <Link href="/i/flow/login">로그인</Link>
      </div>
    </div>
  );
}

//(url)로 폴더를 만들면 url에 경로가 안 보인다
//layout.tsx 리랜더링이 발생을 안하고 template.tsx는 리랜더링 발생 이 둘은 공존 불가
//template.tsx - 구글 애널리틱스 달 때 추천(새로 마운트 하니깐)
