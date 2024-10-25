"use client";

import { usePathname } from "next/navigation";

type Props = {
  q?: string;
};

const LeftSearch = ({ q }: Props) => {
  const pathName = usePathname();

  console.log(q);

  if (pathName === "/explore") return null;

  return (
    <form action="">
      <input type="text" placeholder="검색" className="input" />
    </form>
  );
};

export default LeftSearch;
