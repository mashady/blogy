import React from "react";
import { PostImage, PostTags } from "../posts/[slug]";
import Link from "next/link";

const HeroPost = () => {
  return (
    <div className="col-span-2 mt-6">
      <div className="text-center">
        <PostImage cover="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/04/siri-dumpster-fire-1.jpg?w=1500&quality=82&strip=all&ssl=1" />
        <PostTags />
        <h1 className="font-semibold text-2xl md:text-4xl cursor-pointer  mb-6">
          Siri in iOS 18: An AI revolution, or a sometimes useful dumpster fire?
        </h1>
        <div className="flex items-center justify-center">
          <div className="inline-flex h-[25px]  mr-4 w-[25px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <img
              className="h-full w-full rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="00"
            />
          </div>
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
};

export default HeroPost;
