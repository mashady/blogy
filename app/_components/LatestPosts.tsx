import React from "react";
import LatestPost from "./LatestPost";

const LatestPosts = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold capitalize mt-[100px]">latest posts</h1>
      {/** code will be changed here when real data come to the area */}
      <LatestPost IsHome />
      <LatestPost IsHome />
      <LatestPost IsHome />
      <LatestPost IsHome />
    </div>
  );
};

export default LatestPosts;
