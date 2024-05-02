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
      <h1>list page</h1>
    </div>
  );
};

export default Post;
