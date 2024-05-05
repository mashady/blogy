import prisma from "@/prisma/client";
import {
  FeaturePosts,
  PostComments,
  PostDetails,
  PostImage,
  PostSubject,
  PostTags,
  PostTitle,
  Scroll,
} from "../[slug]/index";
import { notFound } from "next/navigation";
import LatestPost from "@/app/_components/LatestPost";
import FeaturePost from "@/app/_components/FeaturePost";
import HeroPost from "@/app/_components/HeroPost";
import LatestPosts from "@/app/_components/LatestPosts";
const Post = async ({ searchParams }: any) => {
  const posts = await prisma.post.findMany({
    where: {
      tags: {
        some: {
          name: searchParams.tag,
        },
      },
      section: {
        contains: searchParams.section,
      },
    },
  });
  if (posts.length === 0) notFound();
  console.log(posts);
  return (
    /** create the list issues */
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold capitalize mt-4 mb-2 ">
            section title
          </h1>

          <LatestPost />
        </div>
        <FeaturePost />
      </div>
    </div>
  );
};

export default Post;
