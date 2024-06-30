"use client";

import { isValidImage } from "@/lib/isValidImage";
import { useEffect, useState } from "react";
import { FcRemoveImage } from "react-icons/fc";

const FeaturePostImage = ({ cover }) => {
  const [isValid, setIsValid] = useState<any>(null);
  useEffect(() => {
    if (cover) {
      isValidImage(cover).then(setIsValid);
    }
  }, [cover]);
  return (
    <div className="mr-4">
      {(isValid === false || isValid === null) && (
        <div className="bg-sec rounded mt-2 h-[100px] flex justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <FcRemoveImage className="text-4xl text-sec" />
            <p>The link is not a valid image link.</p>
          </div>
        </div>
      )}
      {isValid === true && (
        <img
          className="w-[200px] h-[100px] cursor-pointer rounded object-cover"
          src={cover}
        />
      )}
    </div>
  );
};

export default FeaturePostImage;
