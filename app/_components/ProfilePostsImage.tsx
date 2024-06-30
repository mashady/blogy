"use client";

import { isValidImage } from "@/lib/isValidImage";
import { useEffect, useState } from "react";
import { FcRemoveImage } from "react-icons/fc";

const ProfilePostsImage = ({ cover }) => {
  const [isValid, setIsValid] = useState<any>(null);
  useEffect(() => {
    if (cover) {
      isValidImage(cover).then(setIsValid);
    }
  }, [cover]);
  return (
    <div className="pr-6 w-[400px]">
      {(isValid === false || isValid === null) && (
        <div className="bg-sec rounded my-4 h-[200px] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <FcRemoveImage className="text-4xl text-sec" />
            <p>The link is not a valid image link.</p>
          </div>
        </div>
      )}
      {isValid === true && (
        <img
          className="rounded my-4 w-full h-[200px] object-cover"
          src={cover}
        />
      )}
    </div>
  );
};

export default ProfilePostsImage;
