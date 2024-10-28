import BackButton from "@/app/components/BackButton/BackButton";
import style from "./style.module.css";

export default function page() {
  return (
    <div className={style.dim}>
      <div className={style.box}>
        <BackButton />
        모달 페이지
      </div>
    </div>
  );
}
