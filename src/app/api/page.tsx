import { NextApiRequest, NextApiResponse } from "next";
import UsersList from "./UserList";

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>
      <UsersList />
    </>
  );
};

export default Test;
