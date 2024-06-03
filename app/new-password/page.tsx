import React from "react";
import NewPassword from "../_components/form/NewPasswordForm";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
const page = () => {
  return (
    <div className="mt-32">
      <MaxWidthWrapper>
        <NewPassword />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
