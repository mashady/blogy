import { cache } from "react";

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const fetchPosts = cache((postId: number) =>
  prisma.post.findUnique({
    where: { id: postId },
  })
);

const PostDetailsPage = async ({ params }: Props) => {
  const post = await fetchPosts(parseInt(params.id));
  if (!post) notFound();

  return (
    <div>
      <h1>post id:{post.title}</h1>
    </div>
  );
};

export default PostDetailsPage;
