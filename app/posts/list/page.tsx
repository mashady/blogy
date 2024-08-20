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
      section: searchParams.section,
    },
    include: {
      assignedToUser: true,
    },
  });
  const transformedPosts = posts.map((post) => ({
    ...post,
    assignedToUser: {
      id: post?.assignedToUser?.id,
      name: post?.assignedToUser?.name,
      email: post?.assignedToUser?.email,
    },
  }));
  if (posts.length === 0) {
    console.log("list not found");
    console.log(posts);
    // handle error message
  }
  return (
    /** create the list issues */
    /** this comment just for tsting pusrpos */
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          {transformedPosts?.map((post, i) => (
            <div key={i}>
              <LatestPost post={post} />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Post;
