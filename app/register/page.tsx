import RegisterForm from "@/app/_components/form/RegisterForm";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
import React from "react";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <MaxWidthWrapper>
      <RegisterForm />
    </MaxWidthWrapper>
  );
};

export default page;
