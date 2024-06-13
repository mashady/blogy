import React from "react";
import { redirect } from "next/navigation";
const page = () => {
  redirect("/settings/profile");
  return null;
};

export default page;
