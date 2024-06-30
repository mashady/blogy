"use client";
import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import LatestPost from "./LatestPost";
import axios from "axios";

const fetchPosts = async ({ pageParam = 0 }) => {
  const response = await axios.get(`/api/posts/all?skip=${pageParam}&take=5`);
  return response.data;
};

const LatestPosts = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined; // Stop fetching when no more data
      return pages.length * 5; // Calculate the next skip value
    },
  });

  //if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error.message}</div>;
  console.log("Data:", data);
  return (
    <div>
      <h1 className="text-4xl font-bold capitalize mt-[100px] mb-6">
        latest posts
      </h1>
      {/** code will be changed here when real data come to the area */}
      {data?.pages?.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((post, postIndex) => (
            <div key={postIndex}>
              <LatestPost IsHome post={post} />
            </div>
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-2xl mb-6 underline"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More Posts.."}
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestPosts;
