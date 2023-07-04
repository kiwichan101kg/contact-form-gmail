"use server";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  const hostGmail = process.env.GMAILUSER;
  const password = process.env.GMAILPASSWORD;

  console.log(hostGmail, password);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: hostGmail,
      pass: password,
    },
  });

  // 管理人が受け取るメール
  const toHostMailData = {
    from: req.body.email,
    to: hostGmail,
    subject: `[お問い合わせ]${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>[名前]</p>
      <p>${req.body.name}</p>
      <p>[メッセージ内容]</p>
      <p>${req.body.message}</p>
      <p>[メールアドレス]</p>
      <p>${req.body.email}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return res.send(`送信先:${hostGmail}`);
}