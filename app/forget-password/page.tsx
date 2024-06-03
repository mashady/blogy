import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import ResetPasswordForm from "../_components/form/ResetPasswordForm";

const page = () => {
  return (
    <div className="mt-32">
      <MaxWidthWrapper>
        <ResetPasswordForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
