import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>존재하지 않는 페이지. 다른 페이지 검색</div>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default NotFound;
