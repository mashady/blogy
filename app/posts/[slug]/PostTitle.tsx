import React from "react";

const PostTitle = ({ title }: any) => {
  return (
    <div>
      <h1 className="font-semibold text-2xl md:text-4xl cursor-pointer max-w-[70%] md:max-w-[700px] mb-6 capitalize">
        {title}
      </h1>
    </div>
  );
};

export default PostTitle;
