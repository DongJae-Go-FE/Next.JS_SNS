import BackButton from "@/app/components/BackButton/BackButton";

import { faker } from "@faker-js/faker";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function page() {
  const messages = [
    {
      id: "나",
      nickName: "나",
      image: faker.image.avatar(),
    },
    {
      id: "상대방",
      nickName: "상대방",
      image: faker.image.avatar(),
    },
  ];

  return (
    <div>
      <BackButton />
      {messages.map((m) => {
        if (m.id === "나") {
          return (
            <div key={m.id}>
              나: 콘텐츠 <p>{dayjs("2024.10.24").fromNow(true)}전</p>
            </div>
          );
        } else {
          return (
            <div key={m.id}>
              상대방: 콘텐츠 <p>{dayjs("2024.10.24").fromNow(true)}전</p>
            </div>
          );
        }
      })}
    </div>
  );
}
