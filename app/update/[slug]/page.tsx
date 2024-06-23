import React, { cache } from "react";
import PostForm from "../../_components/form/PostForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

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

const page = async ({ params }: Props) => {
  const post = await fetchPosts(params.slug);
  if (!post) notFound();
  try {
    const postTags = await prisma.tag.findMany({
      where: {
        posts: {
          some: {
            postId: post.id,
          },
        },
      },
      include: {
        posts: {
          include: {
            post: true,
          },
        },
      },
    });
    console.log(postTags);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {JSON.stringify(post)}
      <PostForm post={post} />
    </div>
  );
};

export default page;
