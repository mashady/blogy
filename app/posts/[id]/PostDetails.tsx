import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaComments } from "react-icons/lia";

const PostDetails = () => {
  return (
    <div className="flex items-center">
      <div className="inline-flex h-[45px]  mr-4 w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <img
          className="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="00"
        />
      </div>
      <div className="text-[0.9rem]">
        <span className="font-semibold text-lite-sec hover:text-[#1f4d78] hover:underline transition-all">
          <Link href="">Zac Hall</Link>
        </span>
        <span className="mx-2">|</span>
        <span>Apr 1 2024 - 7:44 am PT</span>
      </div>
      <div className="flex items-center ml-4 font-simi-bold">
        <span>
          <LiaComments className="text-xl  mr-2" />
        </span>
        <span className="hover:underline text-[#96caff] hover:text-[#1f4d78] transition-all">
          <Link href="">47 comments</Link>
        </span>
      </div>
    </div>
  );
};

export default PostDetails;
