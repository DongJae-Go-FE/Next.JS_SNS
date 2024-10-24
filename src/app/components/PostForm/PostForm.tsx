"use client";

import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

const PostForm = () => {
  const imgRef = useRef<HTMLInputElement>(null);

  const [contnet, setContent] = useState("");

  const hadleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const handleOnSubmit: FormEventHandler = (e) => {
    e.preventDefault;
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <textarea
          name=""
          id=""
          onChange={hadleOnChange}
          placeholder="무슨일?"
        ></textarea>
        <input type="file" accept=".png" ref={imgRef} />
        <button>전송</button>
      </form>
    </div>
  );
};

export default PostForm;
