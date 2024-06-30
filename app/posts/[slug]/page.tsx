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
import { useCurrentUser } from "@/app/_components/hooks/useCurrentUser";
import { currentUser } from "@/lib/auth";

interface Props {
  params: { slug: string };
}

const fetchPosts = cache((postSlug: string) =>
  prisma.post.findUnique({
    // find post by slug
    where: {
      slug: postSlug,
    },
    include: {
      assignedToUser: true,
    },
  })
);

const PostDetailsPage = async ({ params }: Props) => {
  const post = await fetchPosts(params.slug);

  const transformedPost = {
    ...post,
    assignedToUser: {
      id: post?.assignedToUser?.id,
      name: post?.assignedToUser?.name,
      email: post?.assignedToUser?.email, // Include only the fields you want to expose
      image: post?.assignedToUser?.image, // Include only the fields you want to expose
    },
  };

  if (!transformedPost) notFound();
  return (
    <MaxWidthWrapper>
      <Scroll />
      <PostTags tag={transformedPost?.section} />
      <PostTitle title={post?.title} />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          {transformedPost?.assignedToUser && (
            <PostDetails
              userId={transformedPost.assignedToUser.id}
              postCreated={post}
              userName={transformedPost.assignedToUser.name}
              userImage={transformedPost.assignedToUser?.image}
              postDate={transformedPost.createdAt}
            />
          )}

          <PostImage cover={transformedPost?.cover} />
          <PostSubject subject={transformedPost?.description} />
          {/** this feature will be suspended for now and will be added in another version
           * <PostComments />
           *
           *
           *
           */}
        </div>
        <div className="mt-3">
          <FeaturePost postsTitle="Features Posts" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PostDetailsPage;
