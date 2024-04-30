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
} from "../[id]/index";
const Post = async () => {
  const tags = await prisma.tag.findMany();
  const posts = await prisma.post.findMany({
    where: {
      tags: {
        some: {
          name: "king-abusamir",
        },
      },
    },
  });
  console.log(tags);
  console.log(posts);
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

export default Post;
