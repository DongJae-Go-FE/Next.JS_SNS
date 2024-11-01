"use server";

import { redirect } from "next/navigation";

export default async (
  prevState: { message: string } | undefined,
  formData: FormData
) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", // 쿠키를 사용하여 로그인 여부를 파악하기 위함
      }
    );
    console.log(response.status, "하아");

    // if (response.status === 403) {
    //   return { message: "user_exists" };
    // } // 이미 유저가 존재할때 403 보내주기로 약속

    console.log(await response.json(), "asdasd");
    shouldRedirect = true;
  } catch (err) {
    console.log(err);
  }

  if (shouldRedirect) {
    redirect("/home"); // try/catch문 안에 있으면 안됨.
  }
};
