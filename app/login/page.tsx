import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import LoginForm from "../_components/form/LoginForm";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <MaxWidthWrapper>
      <LoginForm />
    </MaxWidthWrapper>
  );
};

export default page;
