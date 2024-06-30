import prisma from "@/prisma/client";
import Link from "next/link";
import React, { cache } from "react";
import { formatDate } from "@/lib/formatDate";
import FeaturePostImage from "./FeaturePostImage";

// this will be change to posts collection
const FeaturePost = async ({ postsTitle, posts }: any) => {
  const fetchPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    skip: 1,
    take: 3,
    include: {
      assignedToUser: true,
    },
  });
  const transformedPosts = fetchPosts.map((p) => ({
    ...p,
    createdAt: formatDate(p.createdAt),
    assignedToUser: {
      id: p?.assignedToUser?.id,
      name: p?.assignedToUser?.name,
      email: p?.assignedToUser?.email,
    },
  }));
  return (
    <div>
      <h1 className="text-4xl font-bold mt-[2rem] capitalize">{postsTitle}</h1>
      {transformedPosts.map((post, i) => {
        return (
          <div key={i} className={i === 1 ? "border-y-[1px]" : ""}>
            <div className="flex mt-2 pb-2">
              <Link href={`/posts/${post?.slug}`}>
                <FeaturePostImage cover={post?.cover} />
                {/**
                 * 
                 * <figure className="mr-4">
                  <img
                    src={post?.cover}
                    alt="image of the post"
                    className="w-[200px] h-[100px] cursor-pointer rounded object-cover"
                  />
                </figure>
                 * 
                 * 
                 */}
              </Link>

              <div>
                <h3 className="font-semibold text-[16px] cursor-pointer hover:underline capitalize">
                  {post?.title}
                </h3>
                <div className="text-[0.9rem]">
                  <span className="font-semibold text-[#1f4d78]  hover:text-[#1f4d78] hover:underline transition-all">
                    <Link href={`/profile/${post?.assignedToUser?.id}`}>
                      {post?.assignedToUser?.name}
                    </Link>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">{post?.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturePost;
