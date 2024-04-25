import { cache, Suspense } from "react";

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import Loading from "./loading";

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
      <Suspense fallback={<Loading />}>
        <h1>post id:{post.title}</h1>
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;
