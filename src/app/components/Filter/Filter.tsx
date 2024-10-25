"use client";

import { usePathname } from "next/navigation";

const Filter = () => {
  const pathName = usePathname();

  if (pathName !== "/explore") return null;

  return (
    <div>
      <h3>검색 필터</h3>
      <div>
        <div>
          <label htmlFor="all-user">모든 사용자</label>
          <input type="radio" id="all-user" name="one" />
        </div>
        <div>
          <label htmlFor="follower">내가 팔로우 아는 사람들</label>
          <input type="radio" id="follower" name="one" />
        </div>
      </div>
      <hr />
      <div>
        <div>
          <label htmlFor="good">어디에서나</label>
          <input type="radio" id="good" name="two" />
        </div>
        <div>
          <label htmlFor="me">내가 팔로우 아는 사람들</label>
          <input type="radio" id="me" name="two" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
