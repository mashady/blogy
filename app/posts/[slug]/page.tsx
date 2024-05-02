import { cache, Suspense } from "react";

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import Loading from "./loading";
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
interface Props {
  params: { slug: string };
}

const fetchPosts = cache((postSlug: string) =>
  prisma.post.findUnique({
    // find post by slug
    where: {
      slug: postSlug,
    },
  })
);

const PostDetailsPage = async ({ params }: Props) => {
  const post = await fetchPosts(params.slug);
  if (!post) notFound();
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <Scroll />
      <PostTags />
      <PostTitle />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <PostDetails />
          <PostImage />
          <PostSubject />
          <PostComments />
        </div>
        <div>
          <FeaturePosts />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
