import React from "react";
import {
  FeaturePosts,
  PostDetails,
  PostImage,
  PostTags,
  PostTitle,
} from "../posts/[slug]";
import Link from "next/link";
import FeaturePost from "./FeaturePost";
import HeroPost from "./HeroPost";

const HomeHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <HeroPost />
      <FeaturePost postsTitle="features" />
    </div>
  );
};

export default HomeHeader;
