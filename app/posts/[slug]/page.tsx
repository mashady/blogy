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
import FeaturePost from "@/app/_components/FeaturePost";
import MaxWidthWrapper from "@/app/_components/MaxWidthWrapper";
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
  if (post) console.log(post);
  if (!post) notFound();
  return (
    <MaxWidthWrapper>
      {JSON.stringify(post)}
      <Scroll />
      <PostTags tag={post?.section} />
      <PostTitle title={post?.title} />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <PostDetails postCreated={post} />
          <PostImage cover={post?.cover} />
          <PostSubject subject={post?.description} />
          {/** this feature will be suspended for now and will be added in another version
           * <PostComments />
           *
           *
           *
           */}
        </div>
        <div>
          <FeaturePost />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PostDetailsPage;
