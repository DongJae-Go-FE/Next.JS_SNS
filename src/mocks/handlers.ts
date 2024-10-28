import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("api/login", () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: "넥스트 연습",
        id: "nextJS",
        image: "",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),
  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
];
