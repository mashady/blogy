import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import LatestPost from "@/app/_components/LatestPost";
import FeaturePost from "@/app/_components/FeaturePost";
import HeroPost from "@/app/_components/HeroPost";
import LatestPosts from "@/app/_components/LatestPosts";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
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
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold capitalize mt-[3rem] mb-2 ">
            section title
          </h1>
          <LatestPost />
          <LatestPost />
          <LatestPost />
        </div>
        <FeaturePost />
      </div>
    </MaxWidthWrapper>
  );
};

export default Post;
