import React from "react";
import { currentUser } from "@/lib/auth";
import Navbar from "./Navbar";

const Nav = async () => {
  const user = await currentUser();

  return (
    <>
      <Navbar xuser={user} />
    </>
  );
};

export default Nav;
