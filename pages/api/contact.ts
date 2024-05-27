// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

const { EMAIL, EMAIL_PASS } = process?.env;

const transporter = nodemailer?.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

const mailOption = {
  from: EMAIL,
  to: EMAIL,
};

type Data = {
  success: boolean;
  msg: string;
  status: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method !== "POST") throw new Error();
    const { firstname, lastname, email, message } = req.body;

    await transporter.sendMail({
      ...mailOption,
      subject: "Portfolio Contact",
      text: `${message}\nfrom ${firstname} ${lastname} with the email ${email}`,
    });

    res
      .status(200)
      .json({ success: true, msg: "Email has been sent", status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Bad request", status: 400 });
  }
}
