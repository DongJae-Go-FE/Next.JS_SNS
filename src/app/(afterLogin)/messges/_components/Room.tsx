import Link from "next/link";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const Room = () => {
  return (
    <ul>
      <li>
        <Link href={`/messges/123`}>
          <Image
            src={faker.image.avatar()}
            alt="이미지"
            width={100}
            height={100}
          />
          <p>{dayjs("2024.10.24").fromNow(true)}전</p>
          asd
        </Link>
      </li>
    </ul>
  );
};

export default Room;
