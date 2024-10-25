import Post from "@/app/components/Post/Post";
import BackButton from "@/app/components/BackButton/BackButton";

export default function page() {
  return (
    <div>
      프로필 페이지
      <BackButton />
      <h3>유저이름</h3>
      <p>내정보</p>
      <ul>
        <li>
          <Post />
        </li>
      </ul>
    </div>
  );
}
