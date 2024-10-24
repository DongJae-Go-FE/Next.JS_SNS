import Tab from "@/app/components/Tab/Tab";

import TabProvider from "@/app/components/Tab/TabProvider";
import PostForm from "@/app/components/PostForm/PostForm";
import Post from "@/app/components/Post/Post";

import style from "./style.module.css";

export default function page() {
  return (
    <main className={style.home}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        {/* <Post />
      <Post />
      <Post />
      <Post />  */}
      </TabProvider>
    </main>
  );
}
