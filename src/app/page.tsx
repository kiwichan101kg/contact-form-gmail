"use client";
import Image from "next/image";
import styles from "./page.module.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

type Data = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
};

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data: Data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };
    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メール送信成功");
    });
  };
  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-3">Next.js Gmailアプリ</h2>
        <form
          action=""
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              お名前
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              メールアドレス
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              メッセージ
            </label>
            <textarea
              className="form-control"
              id="message"
              required
              ref={messageRef}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            メール送信
          </button>
        </form>
      </div>
    </div>
  );
}
