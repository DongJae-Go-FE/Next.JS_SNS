"use clinet";

import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { faker } from "@faker-js/faker";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Post = () => {
  const data = {
    images: [{ id: "1", src: faker.image.urlLoremFlickr() }],
  };

  return (
    <article className="border-b px-3">
      <h3>
        <Link href="">사람</Link>
      </h3>
      <p>타이틀</p>
      <Link href={`/${1}/status/${1}/photo/${data.images[0].id}`}>
        <Image src={data.images[0].src} width={500} height={500} alt="" />
      </Link>
      <p>{dayjs("2024.10.24").fromNow(true)}전</p>

      <Link href="">
        <p>콘텐츠</p>
      </Link>
      <ul className="flex gap-x-2">
        <li>
          <button>댓글 버튼 수</button>
        </li>
        <li>
          <button>리포스트 버튼 수</button>
        </li>
        <li>
          <button>좋아요 버튼 수</button>
        </li>
      </ul>
    </article>
  );
};

export default Post;
