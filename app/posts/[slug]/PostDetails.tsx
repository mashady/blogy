"use client";
import Image from "next/image";
import { isValidImage } from "@/lib/isValidImage";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LiaComments } from "react-icons/lia";
import { FcRemoveImage } from "react-icons/fc";
import ProfilePicture from "@/app/_components/ProfilePicture";
import { formatDate } from "@/lib/formatDate";
const PostDetails = ({ post, userName, userImage, postDate }: any) => {
  const formattedDate = formatDate(postDate);
  /**
   *   const [validImage, setIsValidImage] = useState<any>(null);
  useEffect(() => {
    isValidImage(userImage).then((validImage) => {
      if (validImage) {
        console.log("The link is a valid image link.");
      } else {
        console.log("The link is not a valid image link.");
      }
    });

    if (userImage) {
      isValidImage(userImage).then(setIsValidImage);
    }
  }, [userImage]);
   * 
   * 
   */

  return (
    <div className="flex items-center">
      {/**
       * <div className="inline-flex h-[45px]  mr-4 w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        {validImage ? (
          <img
            className="h-full w-full rounded-[inherit] object-cover"
            src={validImage}
            alt="Profile Picture"
          />
        ) : (
          <div className="bg-sec h-full w-full rounded-[inherit] object-cover flex justify-center items-center">
            <CgProfile className="text-xl" />
          </div>
        )}
      </div>
       * 
       */}
      <div className="inline-flex h-[45px]  mr-4 w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <ProfilePicture
          url={userImage}
          imageStyle="h-full w-full rounded-[inherit] object-cover"
          placeholderStyle="bg-[#1e293b] text-[10px] text-sec  w-full h-full flex justify-center items-center"
        />
      </div>
      <div className="text-[0.9rem]">
        <span className="font-semibold capitalize  hover:text-[#1f4d78] hover:underline transition-all">
          <Link href="" className="text-lite-sec">
            {userName}
          </Link>
        </span>
        <span className="mx-2">|</span>
        <span>{formattedDate}</span>
      </div>
      {/**this feature will be suspended for now and will be added in another version
       * <div className="flex items-center ml-4 font-simi-bold">
        <span>
          <LiaComments className="text-xl  mr-2" />
        </span>
        <span className="hover:underline text-[#96caff] hover:text-[#1f4d78] transition-all">
          <Link href="">47 comments</Link>
        </span>
      </div>
       * 
       */}
    </div>
  );
};

export default PostDetails;
