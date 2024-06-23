import React from "react";
import PostForm from "../_components/form/PostForm";
import Loading from "./loading";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
const page = () => {
  // we must fetch post here
  return (
    <MaxWidthWrapper className="mt-8">
      <PostForm />
    </MaxWidthWrapper>
  );
};

export default page;
