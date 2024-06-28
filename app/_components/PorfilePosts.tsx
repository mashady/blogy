"use client";
import React, { useEffect, useState } from "react";
import { getPostsById } from "@/actions/posts/id";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const PorfilePosts = ({ id }: any) => {
  //const [posts, setPosts] = useState<any>([]);

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
  //if (error) return null;
  /*
  useEffect(() => {
    getPostsById(id).then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, [id]);*/
  return (
    <div>
      <h1 className="text-4xl font-bold mt-[3rem] capitalize">Posts {id}</h1>
      {userPosts?.length}
      {JSON.stringify(userPosts)}
      {userPosts?.map((post: any, i: any) => {
        return (
          <div key={i} className={i === 1 ? "border-y-[1px]" : ""}>
            <div className="flex mt-4 pb-2">
              <figure className="mr-4">
                <img
                  src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/find-my-repair.jpg"
                  alt="image of the post"
                  className="w-[350px] cursor-pointer"
                />
              </figure>
              <div>
                <h3 className="font-semibold text-[16px] cursor-pointer hover:underline">
                  Siri in iOS 18: An AI revolution, or a sometimes useful
                  dumpster fire?
                </h3>
                <div className="text-[0.9rem]">
                  <span className="font-semibold text-[#1f4d78]  hover:text-[#1f4d78] hover:underline transition-all">
                    <Link href="">Zac Hall</Link>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Apr 1 2024</span>
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
