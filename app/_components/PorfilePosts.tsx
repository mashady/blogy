"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "@prisma/client";
import { formatDate } from "@/lib/formatDate";
import ProfilePostsImage from "./ProfilePostsImage";
const PorfilePosts = ({ id }: any) => {
  const {
    data: userPosts,
    error,
    isLoading,
  } = useQuery<any>({
    queryKey: ["posts", id], // handle fetching data by id
    queryFn: () => axios.get(`/api/posts?id=${id}`).then((posts) => posts.data),
    staleTime: 60 * 10000, // means the time takes to not consider the cashing
    retry: 3, // another three tries if there an error
  });
  if (isLoading) return <div>loading....</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mt-[3rem] capitalize">Posts </h1>
      {userPosts?.map((post: Post, i: any) => {
        return (
          <div key={i} className={i === 1 ? "border-y-[1px]" : ""}>
            <div className="flex mt-4 pb-2">
              <Link href={`/posts/${post.slug}`}>
                <ProfilePostsImage cover={post?.cover} />
              </Link>

              <div className="mt-2">
                <h3 className="font-semibold text-[16px] cursor-pointer hover:underline capitalize">
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="text-[0.9rem]">
                  <span className="font-semibold text-[#1f4d78]  hover:text-[#1f4d78] hover:underline transition-all">
                    <Link href="">{post?.assignedToUser?.name}</Link>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">
                    {formatDate(post?.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PorfilePosts;
