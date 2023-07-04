// src/app/actions/example.ts

"use server";

import { NextApiRequest, NextApiResponse } from "next";

export const getAllExample = async () => {
  console.log("getAllExample");
  return [
    {
      id: "example-1",
      message: "Example 1",
    },
    {
      id: "example-2",
      message: "Example 2",
    },
    {
      id: "example-3",
      message: "Example 3",
    },
  ];
};

// export const sendGmail = (req: NextApiRequest, res: NextApiResponse) => {
//   return res.status(200).json({ name: "taro" });
// };
