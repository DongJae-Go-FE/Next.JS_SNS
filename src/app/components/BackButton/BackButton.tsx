"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const { back } = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        back();
      }}
    >
      뒤로가기
    </button>
  );
};

export default BackButton;
